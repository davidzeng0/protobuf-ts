file(GLOB_RECURSE CONFIG_SOURCES ${CMAKE_CURRENT_SOURCE_DIR}/src/*.yaml)
set(CONFIG_OUTPUT_DIR ${CMAKE_CURRENT_BINARY_DIR}/config)
file(MAKE_DIRECTORY ${CONFIG_OUTPUT_DIR})

foreach(FILE ${CONFIG_SOURCES})
	file(RELATIVE_PATH RELATIVE ${CMAKE_CURRENT_SOURCE_DIR} ${FILE})
	get_filename_component(FILENAME ${RELATIVE} NAME_WE)
	get_filename_component(FILEPATH ${RELATIVE} DIRECTORY)
	set(OUTPUT ${CONFIG_OUTPUT_DIR}/${FILEPATH}/${FILENAME}.ts)

	add_custom_command(
		OUTPUT ${OUTPUT}
		COMMAND yarn
		ARGS
			protobuf_ts_compile_config
			--base ${CMAKE_CURRENT_SOURCE_DIR}
			${FILE}
			${CONFIG_OUTPUT_DIR}
		DEPENDS ${FILE}
	)

	list(APPEND CONFIG_OUTPUTS ${OUTPUT})
endforeach()

add_custom_target(config ALL DEPENDS ${CONFIG_OUTPUTS})

set(PROTO_SRC_DIR ${CMAKE_CURRENT_SOURCE_DIR}/protos)
set(PROTO_OUTPUT_DIR ${CMAKE_CURRENT_BINARY_DIR}/protos)

if(EXISTS ${PROTO_SRC_DIR})
	file(MAKE_DIRECTORY ${PROTO_OUTPUT_DIR})
	file(GLOB PROTO_DIRS ${PROTO_SRC_DIR}/*)

	list(APPEND PROTOC_ARGS
		--plugin "${CMAKE_CURRENT_SOURCE_DIR}/node_modules/.bin/protoc-gen-ts_proto"
		--ts_proto_out "${PROTO_OUTPUT_DIR}"
		--ts_proto_opt "useOptionals=all"
		--ts_proto_opt "env=node"
		--ts_proto_opt "forceLong=bigint"
		--ts_proto_opt "esModuleInterop=true"
		--ts_proto_opt "unknownFields=true"
		--ts_proto_opt "initializeFieldsAsUndefined=false"
		--ts_proto_opt "useDate=false"
		--ts_proto_opt "outputServices=generic-definitions"
		--ts_proto_opt "outputServices=default"
		--ts_proto_opt "outputClientImpl=false"
		--ts_proto_opt "outputPartialMethods=false"
		--ts_proto_opt "snakeToCamel=false"
		--ts_proto_opt "lowerCaseServiceMethods=true"
		--ts_proto_opt "outputExtensions=true"
		--ts_proto_opt "useMapType=true"
		--ts_proto_opt "exportCommonSymbols=false"
		--ts_proto_opt "stringEnums=true"
	)

	foreach(PROTO_DIR ${PROTO_DIRS})
		if(NOT IS_DIRECTORY ${PROTO_DIR})
			continue()
		endif()

		list(APPEND PROTOC_ARGS -I "${PROTO_DIR}")
	endforeach()

	foreach(PROTO_DIR ${PROTO_DIRS})
		if(NOT IS_DIRECTORY ${PROTO_DIR})
			continue()
		endif()

		file(GLOB_RECURSE PROTO_SOURCES ${PROTO_DIR}/*.proto)
		foreach(FILE ${PROTO_SOURCES})
			file(RELATIVE_PATH RELATIVE ${PROTO_DIR} ${FILE})
			get_filename_component(FILENAME ${RELATIVE} NAME_WE)
			get_filename_component(FILEPATH ${RELATIVE} DIRECTORY)
			set(SOURCE ${PROTO_OUTPUT_DIR}/${FILEPATH}/${FILENAME}.ts)

			list(APPEND PROTO_INPUTS ${FILE})
			list(APPEND PROTO_OUTPUTS ${SOURCE})
		endforeach()
	endforeach()

	add_custom_command(
		OUTPUT ${PROTO_OUTPUTS}
		COMMAND protoc
		ARGS ${PROTOC_ARGS}
		${PROTO_INPUTS}
		DEPENDS ${PROTO_INPUTS}
	)
endif()

add_custom_target(proto ALL DEPENDS ${PROTO_OUTPUTS})

set(DIST_DIR ${CMAKE_CURRENT_SOURCE_DIR}/dist)
file(MAKE_DIRECTORY ${DIST_DIR})

file(GLOB_RECURSE TS_SOURCES ${CMAKE_CURRENT_SOURCE_DIR}/src/*.ts)
list(APPEND TS_SOURCES ${CONFIG_OUTPUTS} ${PROTO_OUTPUTS})

set(BUNDLE_OUTPUTS "")

function(bundle FILE DTS)
	file(RELATIVE_PATH RELATIVE ${CMAKE_CURRENT_SOURCE_DIR}/src ${FILE})
	get_filename_component(FILENAME ${RELATIVE} NAME_WE)
	get_filename_component(FILEPATH ${RELATIVE} DIRECTORY)

	if(NOT ${FILEPATH})
		set(OUTPUT ${DIST_DIR}/${FILEPATH}/${FILENAME}.js)
		set(OUTPATH ${FILEPATH}/${FILENAME})
	else()
		set(OUTPUT ${DIST_DIR}/${FILENAME}.js)
		set(OUTPATH ${FILENAME})
	endif()

	set(
		TSUP_ARGS
		tsup-node
		--entry.${OUTPATH} src/${RELATIVE}
		--minify-whitespace
		--minify-identifiers
		--target esnext
		--treeshake
		--silent
	)

	if(${DTS})
		list(APPEND TSUP_ARGS --dts)
	endif()

	add_custom_command(
		OUTPUT ${OUTPUT}
		COMMAND yarn
		ARGS ${TSUP_ARGS}
		DEPENDS ${TS_SOURCES}
		WORKING_DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR}
	)

	set(BUNDLE_OUTPUTS ${BUNDLE_OUTPUTS} ${OUTPUT} PARENT_SCOPE)
endfunction()

file(GLOB_RECURSE BUNDLE_LIBS ${CMAKE_CURRENT_SOURCE_DIR}/src/*.library.ts)
file(GLOB_RECURSE BUNDLE_EXES ${CMAKE_CURRENT_SOURCE_DIR}/src/*.process.ts)

foreach(FILE ${BUNDLE_LIBS})
	bundle(${FILE} TRUE)
endforeach()

foreach(FILE ${BUNDLE_EXES})
	bundle(${FILE} FALSE)
endforeach()

add_custom_target(bundle ALL DEPENDS config proto ${BUNDLE_OUTPUTS})