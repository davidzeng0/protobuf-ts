/// <reference types="node" />
import _m0 from "protobufjs/minimal";
/**
 * The protocol compiler can output a FileDescriptorSet containing the .proto
 * files it parses.
 */
export interface FileDescriptorSet {
    file?: FileDescriptorProto[] | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
/** Describes a complete .proto file. */
export interface FileDescriptorProto {
    /** file name, relative to root of source tree */
    name?: string | undefined;
    /** e.g. "foo", "foo.bar", etc. */
    package?: string | undefined;
    /** Names of files imported by this file. */
    dependency?: string[] | undefined;
    /** Indexes of the public imported files in the dependency list above. */
    public_dependency?: number[] | undefined;
    /**
     * Indexes of the weak imported files in the dependency list.
     * For Google-internal migration only. Do not use.
     */
    weak_dependency?: number[] | undefined;
    /** All top-level definitions in this file. */
    message_type?: DescriptorProto[] | undefined;
    enum_type?: EnumDescriptorProto[] | undefined;
    service?: ServiceDescriptorProto[] | undefined;
    extension?: FieldDescriptorProto[] | undefined;
    options?: FileOptions | undefined;
    /**
     * This field contains optional information about the original source code.
     * You may safely remove this entire field without harming runtime
     * functionality of the descriptors -- the information is needed only by
     * development tools.
     */
    source_code_info?: SourceCodeInfo | undefined;
    /**
     * The syntax of the proto file.
     * The supported values are "proto2", "proto3", and "editions".
     *
     * If `edition` is present, this value must be "editions".
     */
    syntax?: string | undefined;
    /** The edition of the proto file, which is an opaque string. */
    edition?: string | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
/** Describes a message type. */
export interface DescriptorProto {
    name?: string | undefined;
    field?: FieldDescriptorProto[] | undefined;
    extension?: FieldDescriptorProto[] | undefined;
    nested_type?: DescriptorProto[] | undefined;
    enum_type?: EnumDescriptorProto[] | undefined;
    extension_range?: DescriptorProto_ExtensionRange[] | undefined;
    oneof_decl?: OneofDescriptorProto[] | undefined;
    options?: MessageOptions | undefined;
    reserved_range?: DescriptorProto_ReservedRange[] | undefined;
    /**
     * Reserved field names, which may not be used by fields in the same message.
     * A given name may only be reserved once.
     */
    reserved_name?: string[] | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
export interface DescriptorProto_ExtensionRange {
    /** Inclusive. */
    start?: number | undefined;
    /** Exclusive. */
    end?: number | undefined;
    options?: ExtensionRangeOptions | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
/**
 * Range of reserved tag numbers. Reserved tag numbers may not be used by
 * fields or extension ranges in the same message. Reserved ranges may
 * not overlap.
 */
export interface DescriptorProto_ReservedRange {
    /** Inclusive. */
    start?: number | undefined;
    /** Exclusive. */
    end?: number | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
export interface ExtensionRangeOptions {
    /** The parser stores options it doesn't recognize here. See above. */
    uninterpreted_option?: UninterpretedOption[] | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
/** Describes a field within a message. */
export interface FieldDescriptorProto {
    name?: string | undefined;
    number?: number | undefined;
    label?: FieldDescriptorProto_Label | undefined;
    /**
     * If type_name is set, this need not be set.  If both this and type_name
     * are set, this must be one of TYPE_ENUM, TYPE_MESSAGE or TYPE_GROUP.
     */
    type?: FieldDescriptorProto_Type | undefined;
    /**
     * For message and enum types, this is the name of the type.  If the name
     * starts with a '.', it is fully-qualified.  Otherwise, C++-like scoping
     * rules are used to find the type (i.e. first the nested types within this
     * message are searched, then within the parent, on up to the root
     * namespace).
     */
    type_name?: string | undefined;
    /**
     * For extensions, this is the name of the type being extended.  It is
     * resolved in the same manner as type_name.
     */
    extendee?: string | undefined;
    /**
     * For numeric types, contains the original text representation of the value.
     * For booleans, "true" or "false".
     * For strings, contains the default text contents (not escaped in any way).
     * For bytes, contains the C escaped value.  All bytes >= 128 are escaped.
     */
    default_value?: string | undefined;
    /**
     * If set, gives the index of a oneof in the containing type's oneof_decl
     * list.  This field is a member of that oneof.
     */
    oneof_index?: number | undefined;
    /**
     * JSON name of this field. The value is set by protocol compiler. If the
     * user has set a "json_name" option on this field, that option's value
     * will be used. Otherwise, it's deduced from the field's name by converting
     * it to camelCase.
     */
    json_name?: string | undefined;
    options?: FieldOptions | undefined;
    /**
     * If true, this is a proto3 "optional". When a proto3 field is optional, it
     * tracks presence regardless of field type.
     *
     * When proto3_optional is true, this field must be belong to a oneof to
     * signal to old proto3 clients that presence is tracked for this field. This
     * oneof is known as a "synthetic" oneof, and this field must be its sole
     * member (each proto3 optional field gets its own synthetic oneof). Synthetic
     * oneofs exist in the descriptor only, and do not generate any API. Synthetic
     * oneofs must be ordered after all "real" oneofs.
     *
     * For message fields, proto3_optional doesn't create any semantic change,
     * since non-repeated message fields always track presence. However it still
     * indicates the semantic detail of whether the user wrote "optional" or not.
     * This can be useful for round-tripping the .proto file. For consistency we
     * give message fields a synthetic oneof also, even though it is not required
     * to track presence. This is especially important because the parser can't
     * tell if a field is a message or an enum, so it must always create a
     * synthetic oneof.
     *
     * Proto2 optional fields do not set this flag, because they already indicate
     * optional with `LABEL_OPTIONAL`.
     */
    proto3_optional?: boolean | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
export declare enum FieldDescriptorProto_Type {
    /**
     * TYPE_DOUBLE - 0 is reserved for errors.
     * Order is weird for historical reasons.
     */
    TYPE_DOUBLE = 1,
    TYPE_FLOAT = 2,
    /**
     * TYPE_INT64 - Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT64 if
     * negative values are likely.
     */
    TYPE_INT64 = 3,
    TYPE_UINT64 = 4,
    /**
     * TYPE_INT32 - Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT32 if
     * negative values are likely.
     */
    TYPE_INT32 = 5,
    TYPE_FIXED64 = 6,
    TYPE_FIXED32 = 7,
    TYPE_BOOL = 8,
    TYPE_STRING = 9,
    /**
     * TYPE_GROUP - Tag-delimited aggregate.
     * Group type is deprecated and not supported in proto3. However, Proto3
     * implementations should still be able to parse the group wire format and
     * treat group fields as unknown fields.
     */
    TYPE_GROUP = 10,
    /** TYPE_MESSAGE - Length-delimited aggregate. */
    TYPE_MESSAGE = 11,
    /** TYPE_BYTES - New in version 2. */
    TYPE_BYTES = 12,
    TYPE_UINT32 = 13,
    TYPE_ENUM = 14,
    TYPE_SFIXED32 = 15,
    TYPE_SFIXED64 = 16,
    /** TYPE_SINT32 - Uses ZigZag encoding. */
    TYPE_SINT32 = 17,
    /** TYPE_SINT64 - Uses ZigZag encoding. */
    TYPE_SINT64 = 18,
    UNRECOGNIZED = -1
}
export declare function fieldDescriptorProto_TypeFromJSON(object: any): FieldDescriptorProto_Type;
export declare function fieldDescriptorProto_TypeToJSON(object: FieldDescriptorProto_Type): string;
export declare enum FieldDescriptorProto_Label {
    /** LABEL_OPTIONAL - 0 is reserved for errors */
    LABEL_OPTIONAL = 1,
    LABEL_REQUIRED = 2,
    LABEL_REPEATED = 3,
    UNRECOGNIZED = -1
}
export declare function fieldDescriptorProto_LabelFromJSON(object: any): FieldDescriptorProto_Label;
export declare function fieldDescriptorProto_LabelToJSON(object: FieldDescriptorProto_Label): string;
/** Describes a oneof. */
export interface OneofDescriptorProto {
    name?: string | undefined;
    options?: OneofOptions | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
/** Describes an enum type. */
export interface EnumDescriptorProto {
    name?: string | undefined;
    value?: EnumValueDescriptorProto[] | undefined;
    options?: EnumOptions | undefined;
    /**
     * Range of reserved numeric values. Reserved numeric values may not be used
     * by enum values in the same enum declaration. Reserved ranges may not
     * overlap.
     */
    reserved_range?: EnumDescriptorProto_EnumReservedRange[] | undefined;
    /**
     * Reserved enum value names, which may not be reused. A given name may only
     * be reserved once.
     */
    reserved_name?: string[] | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
/**
 * Range of reserved numeric values. Reserved values may not be used by
 * entries in the same enum. Reserved ranges may not overlap.
 *
 * Note that this is distinct from DescriptorProto.ReservedRange in that it
 * is inclusive such that it can appropriately represent the entire int32
 * domain.
 */
export interface EnumDescriptorProto_EnumReservedRange {
    /** Inclusive. */
    start?: number | undefined;
    /** Inclusive. */
    end?: number | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
/** Describes a value within an enum. */
export interface EnumValueDescriptorProto {
    name?: string | undefined;
    number?: number | undefined;
    options?: EnumValueOptions | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
/** Describes a service. */
export interface ServiceDescriptorProto {
    name?: string | undefined;
    method?: MethodDescriptorProto[] | undefined;
    options?: ServiceOptions | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
/** Describes a method of a service. */
export interface MethodDescriptorProto {
    name?: string | undefined;
    /**
     * Input and output type names.  These are resolved in the same way as
     * FieldDescriptorProto.type_name, but must refer to a message type.
     */
    input_type?: string | undefined;
    output_type?: string | undefined;
    options?: MethodOptions | undefined;
    /** Identifies if client streams multiple client messages */
    client_streaming?: boolean | undefined;
    /** Identifies if server streams multiple server messages */
    server_streaming?: boolean | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
export interface FileOptions {
    /**
     * Sets the Java package where classes generated from this .proto will be
     * placed.  By default, the proto package is used, but this is often
     * inappropriate because proto packages do not normally start with backwards
     * domain names.
     */
    java_package?: string | undefined;
    /**
     * Controls the name of the wrapper Java class generated for the .proto file.
     * That class will always contain the .proto file's getDescriptor() method as
     * well as any top-level extensions defined in the .proto file.
     * If java_multiple_files is disabled, then all the other classes from the
     * .proto file will be nested inside the single wrapper outer class.
     */
    java_outer_classname?: string | undefined;
    /**
     * If enabled, then the Java code generator will generate a separate .java
     * file for each top-level message, enum, and service defined in the .proto
     * file.  Thus, these types will *not* be nested inside the wrapper class
     * named by java_outer_classname.  However, the wrapper class will still be
     * generated to contain the file's getDescriptor() method as well as any
     * top-level extensions defined in the file.
     */
    java_multiple_files?: boolean | undefined;
    /**
     * This option does nothing.
     *
     * @deprecated
     */
    java_generate_equals_and_hash?: boolean | undefined;
    /**
     * If set true, then the Java2 code generator will generate code that
     * throws an exception whenever an attempt is made to assign a non-UTF-8
     * byte sequence to a string field.
     * Message reflection will do the same.
     * However, an extension field still accepts non-UTF-8 byte sequences.
     * This option has no effect on when used with the lite runtime.
     */
    java_string_check_utf8?: boolean | undefined;
    optimize_for?: FileOptions_OptimizeMode | undefined;
    /**
     * Sets the Go package where structs generated from this .proto will be
     * placed. If omitted, the Go package will be derived from the following:
     *   - The basename of the package import path, if provided.
     *   - Otherwise, the package statement in the .proto file, if present.
     *   - Otherwise, the basename of the .proto file, without extension.
     */
    go_package?: string | undefined;
    /**
     * Should generic services be generated in each language?  "Generic" services
     * are not specific to any particular RPC system.  They are generated by the
     * main code generators in each language (without additional plugins).
     * Generic services were the only kind of service generation supported by
     * early versions of google.protobuf.
     *
     * Generic services are now considered deprecated in favor of using plugins
     * that generate code specific to your particular RPC system.  Therefore,
     * these default to false.  Old code which depends on generic services should
     * explicitly set them to true.
     */
    cc_generic_services?: boolean | undefined;
    java_generic_services?: boolean | undefined;
    py_generic_services?: boolean | undefined;
    php_generic_services?: boolean | undefined;
    /**
     * Is this file deprecated?
     * Depending on the target platform, this can emit Deprecated annotations
     * for everything in the file, or it will be completely ignored; in the very
     * least, this is a formalization for deprecating files.
     */
    deprecated?: boolean | undefined;
    /**
     * Enables the use of arenas for the proto messages in this file. This applies
     * only to generated classes for C++.
     */
    cc_enable_arenas?: boolean | undefined;
    /**
     * Sets the objective c class prefix which is prepended to all objective c
     * generated classes from this .proto. There is no default.
     */
    objc_class_prefix?: string | undefined;
    /** Namespace for generated classes; defaults to the package. */
    csharp_namespace?: string | undefined;
    /**
     * By default Swift generators will take the proto package and CamelCase it
     * replacing '.' with underscore and use that to prefix the types/symbols
     * defined. When this options is provided, they will use this value instead
     * to prefix the types/symbols defined.
     */
    swift_prefix?: string | undefined;
    /**
     * Sets the php class prefix which is prepended to all php generated classes
     * from this .proto. Default is empty.
     */
    php_class_prefix?: string | undefined;
    /**
     * Use this option to change the namespace of php generated classes. Default
     * is empty. When this option is empty, the package name will be used for
     * determining the namespace.
     */
    php_namespace?: string | undefined;
    /**
     * Use this option to change the namespace of php generated metadata classes.
     * Default is empty. When this option is empty, the proto file name will be
     * used for determining the namespace.
     */
    php_metadata_namespace?: string | undefined;
    /**
     * Use this option to change the package of ruby generated classes. Default
     * is empty. When this option is not set, the package name will be used for
     * determining the ruby package.
     */
    ruby_package?: string | undefined;
    /**
     * The parser stores options it doesn't recognize here.
     * See the documentation for the "Options" section above.
     */
    uninterpreted_option?: UninterpretedOption[] | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
/** Generated classes can be optimized for speed or code size. */
export declare enum FileOptions_OptimizeMode {
    /** SPEED - Generate complete code for parsing, serialization, */
    SPEED = 1,
    /** CODE_SIZE - etc. */
    CODE_SIZE = 2,
    /** LITE_RUNTIME - Generate code using MessageLite and the lite runtime. */
    LITE_RUNTIME = 3,
    UNRECOGNIZED = -1
}
export declare function fileOptions_OptimizeModeFromJSON(object: any): FileOptions_OptimizeMode;
export declare function fileOptions_OptimizeModeToJSON(object: FileOptions_OptimizeMode): string;
export interface MessageOptions {
    /**
     * Set true to use the old proto1 MessageSet wire format for extensions.
     * This is provided for backwards-compatibility with the MessageSet wire
     * format.  You should not use this for any other reason:  It's less
     * efficient, has fewer features, and is more complicated.
     *
     * The message must be defined exactly as follows:
     *   message Foo {
     *     option message_set_wire_format = true;
     *     extensions 4 to max;
     *   }
     * Note that the message cannot have any defined fields; MessageSets only
     * have extensions.
     *
     * All extensions of your type must be singular messages; e.g. they cannot
     * be int32s, enums, or repeated messages.
     *
     * Because this is an option, the above two restrictions are not enforced by
     * the protocol compiler.
     */
    message_set_wire_format?: boolean | undefined;
    /**
     * Disables the generation of the standard "descriptor()" accessor, which can
     * conflict with a field of the same name.  This is meant to make migration
     * from proto1 easier; new code should avoid fields named "descriptor".
     */
    no_standard_descriptor_accessor?: boolean | undefined;
    /**
     * Is this message deprecated?
     * Depending on the target platform, this can emit Deprecated annotations
     * for the message, or it will be completely ignored; in the very least,
     * this is a formalization for deprecating messages.
     */
    deprecated?: boolean | undefined;
    /**
     * NOTE: Do not set the option in .proto files. Always use the maps syntax
     * instead. The option should only be implicitly set by the proto compiler
     * parser.
     *
     * Whether the message is an automatically generated map entry type for the
     * maps field.
     *
     * For maps fields:
     *     map<KeyType, ValueType> map_field = 1;
     * The parsed descriptor looks like:
     *     message MapFieldEntry {
     *         option map_entry = true;
     *         optional KeyType key = 1;
     *         optional ValueType value = 2;
     *     }
     *     repeated MapFieldEntry map_field = 1;
     *
     * Implementations may choose not to generate the map_entry=true message, but
     * use a native map in the target language to hold the keys and values.
     * The reflection APIs in such implementations still need to work as
     * if the field is a repeated message field.
     */
    map_entry?: boolean | undefined;
    /**
     * Enable the legacy handling of JSON field name conflicts.  This lowercases
     * and strips underscored from the fields before comparison in proto3 only.
     * The new behavior takes `json_name` into account and applies to proto2 as
     * well.
     *
     * This should only be used as a temporary measure against broken builds due
     * to the change in behavior for JSON field name conflicts.
     *
     * TODO(b/261750190) This is legacy behavior we plan to remove once downstream
     * teams have had time to migrate.
     *
     * @deprecated
     */
    deprecated_legacy_json_field_conflicts?: boolean | undefined;
    /** The parser stores options it doesn't recognize here. See above. */
    uninterpreted_option?: UninterpretedOption[] | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
export interface FieldOptions {
    /**
     * The ctype option instructs the C++ code generator to use a different
     * representation of the field than it normally would.  See the specific
     * options below.  This option is not yet implemented in the open source
     * release -- sorry, we'll try to include it in a future version!
     */
    ctype?: FieldOptions_CType | undefined;
    /**
     * The packed option can be enabled for repeated primitive fields to enable
     * a more efficient representation on the wire. Rather than repeatedly
     * writing the tag and type for each element, the entire array is encoded as
     * a single length-delimited blob. In proto3, only explicit setting it to
     * false will avoid using packed encoding.
     */
    packed?: boolean | undefined;
    /**
     * The jstype option determines the JavaScript type used for values of the
     * field.  The option is permitted only for 64 bit integral and fixed types
     * (int64, uint64, sint64, fixed64, sfixed64).  A field with jstype JS_STRING
     * is represented as JavaScript string, which avoids loss of precision that
     * can happen when a large value is converted to a floating point JavaScript.
     * Specifying JS_NUMBER for the jstype causes the generated JavaScript code to
     * use the JavaScript "number" type.  The behavior of the default option
     * JS_NORMAL is implementation dependent.
     *
     * This option is an enum to permit additional types to be added, e.g.
     * goog.math.Integer.
     */
    jstype?: FieldOptions_JSType | undefined;
    /**
     * Should this field be parsed lazily?  Lazy applies only to message-type
     * fields.  It means that when the outer message is initially parsed, the
     * inner message's contents will not be parsed but instead stored in encoded
     * form.  The inner message will actually be parsed when it is first accessed.
     *
     * This is only a hint.  Implementations are free to choose whether to use
     * eager or lazy parsing regardless of the value of this option.  However,
     * setting this option true suggests that the protocol author believes that
     * using lazy parsing on this field is worth the additional bookkeeping
     * overhead typically needed to implement it.
     *
     * This option does not affect the public interface of any generated code;
     * all method signatures remain the same.  Furthermore, thread-safety of the
     * interface is not affected by this option; const methods remain safe to
     * call from multiple threads concurrently, while non-const methods continue
     * to require exclusive access.
     *
     * Note that implementations may choose not to check required fields within
     * a lazy sub-message.  That is, calling IsInitialized() on the outer message
     * may return true even if the inner message has missing required fields.
     * This is necessary because otherwise the inner message would have to be
     * parsed in order to perform the check, defeating the purpose of lazy
     * parsing.  An implementation which chooses not to check required fields
     * must be consistent about it.  That is, for any particular sub-message, the
     * implementation must either *always* check its required fields, or *never*
     * check its required fields, regardless of whether or not the message has
     * been parsed.
     *
     * As of May 2022, lazy verifies the contents of the byte stream during
     * parsing.  An invalid byte stream will cause the overall parsing to fail.
     */
    lazy?: boolean | undefined;
    /**
     * unverified_lazy does no correctness checks on the byte stream. This should
     * only be used where lazy with verification is prohibitive for performance
     * reasons.
     */
    unverified_lazy?: boolean | undefined;
    /**
     * Is this field deprecated?
     * Depending on the target platform, this can emit Deprecated annotations
     * for accessors, or it will be completely ignored; in the very least, this
     * is a formalization for deprecating fields.
     */
    deprecated?: boolean | undefined;
    /** For Google-internal migration only. Do not use. */
    weak?: boolean | undefined;
    /**
     * Indicate that the field value should not be printed out when using debug
     * formats, e.g. when the field contains sensitive credentials.
     */
    debug_redact?: boolean | undefined;
    retention?: FieldOptions_OptionRetention | undefined;
    target?: FieldOptions_OptionTargetType | undefined;
    /** The parser stores options it doesn't recognize here. See above. */
    uninterpreted_option?: UninterpretedOption[] | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
export declare enum FieldOptions_CType {
    /** STRING - Default mode. */
    STRING = 0,
    CORD = 1,
    STRING_PIECE = 2,
    UNRECOGNIZED = -1
}
export declare function fieldOptions_CTypeFromJSON(object: any): FieldOptions_CType;
export declare function fieldOptions_CTypeToJSON(object: FieldOptions_CType): string;
export declare enum FieldOptions_JSType {
    /** JS_NORMAL - Use the default type. */
    JS_NORMAL = 0,
    /** JS_STRING - Use JavaScript strings. */
    JS_STRING = 1,
    /** JS_NUMBER - Use JavaScript numbers. */
    JS_NUMBER = 2,
    UNRECOGNIZED = -1
}
export declare function fieldOptions_JSTypeFromJSON(object: any): FieldOptions_JSType;
export declare function fieldOptions_JSTypeToJSON(object: FieldOptions_JSType): string;
/**
 * If set to RETENTION_SOURCE, the option will be omitted from the binary.
 * Note: as of January 2023, support for this is in progress and does not yet
 * have an effect (b/264593489).
 */
export declare enum FieldOptions_OptionRetention {
    RETENTION_UNKNOWN = 0,
    RETENTION_RUNTIME = 1,
    RETENTION_SOURCE = 2,
    UNRECOGNIZED = -1
}
export declare function fieldOptions_OptionRetentionFromJSON(object: any): FieldOptions_OptionRetention;
export declare function fieldOptions_OptionRetentionToJSON(object: FieldOptions_OptionRetention): string;
/**
 * This indicates the types of entities that the field may apply to when used
 * as an option. If it is unset, then the field may be freely used as an
 * option on any kind of entity. Note: as of January 2023, support for this is
 * in progress and does not yet have an effect (b/264593489).
 */
export declare enum FieldOptions_OptionTargetType {
    TARGET_TYPE_UNKNOWN = 0,
    TARGET_TYPE_FILE = 1,
    TARGET_TYPE_EXTENSION_RANGE = 2,
    TARGET_TYPE_MESSAGE = 3,
    TARGET_TYPE_FIELD = 4,
    TARGET_TYPE_ONEOF = 5,
    TARGET_TYPE_ENUM = 6,
    TARGET_TYPE_ENUM_ENTRY = 7,
    TARGET_TYPE_SERVICE = 8,
    TARGET_TYPE_METHOD = 9,
    UNRECOGNIZED = -1
}
export declare function fieldOptions_OptionTargetTypeFromJSON(object: any): FieldOptions_OptionTargetType;
export declare function fieldOptions_OptionTargetTypeToJSON(object: FieldOptions_OptionTargetType): string;
export interface OneofOptions {
    /** The parser stores options it doesn't recognize here. See above. */
    uninterpreted_option?: UninterpretedOption[] | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
export interface EnumOptions {
    /**
     * Set this option to true to allow mapping different tag names to the same
     * value.
     */
    allow_alias?: boolean | undefined;
    /**
     * Is this enum deprecated?
     * Depending on the target platform, this can emit Deprecated annotations
     * for the enum, or it will be completely ignored; in the very least, this
     * is a formalization for deprecating enums.
     */
    deprecated?: boolean | undefined;
    /**
     * Enable the legacy handling of JSON field name conflicts.  This lowercases
     * and strips underscored from the fields before comparison in proto3 only.
     * The new behavior takes `json_name` into account and applies to proto2 as
     * well.
     * TODO(b/261750190) Remove this legacy behavior once downstream teams have
     * had time to migrate.
     *
     * @deprecated
     */
    deprecated_legacy_json_field_conflicts?: boolean | undefined;
    /** The parser stores options it doesn't recognize here. See above. */
    uninterpreted_option?: UninterpretedOption[] | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
export interface EnumValueOptions {
    /**
     * Is this enum value deprecated?
     * Depending on the target platform, this can emit Deprecated annotations
     * for the enum value, or it will be completely ignored; in the very least,
     * this is a formalization for deprecating enum values.
     */
    deprecated?: boolean | undefined;
    /** The parser stores options it doesn't recognize here. See above. */
    uninterpreted_option?: UninterpretedOption[] | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
export interface ServiceOptions {
    /**
     * Is this service deprecated?
     * Depending on the target platform, this can emit Deprecated annotations
     * for the service, or it will be completely ignored; in the very least,
     * this is a formalization for deprecating services.
     */
    deprecated?: boolean | undefined;
    /** The parser stores options it doesn't recognize here. See above. */
    uninterpreted_option?: UninterpretedOption[] | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
export interface MethodOptions {
    /**
     * Is this method deprecated?
     * Depending on the target platform, this can emit Deprecated annotations
     * for the method, or it will be completely ignored; in the very least,
     * this is a formalization for deprecating methods.
     */
    deprecated?: boolean | undefined;
    idempotency_level?: MethodOptions_IdempotencyLevel | undefined;
    /** The parser stores options it doesn't recognize here. See above. */
    uninterpreted_option?: UninterpretedOption[] | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
/**
 * Is this method side-effect-free (or safe in HTTP parlance), or idempotent,
 * or neither? HTTP based RPC implementation may choose GET verb for safe
 * methods, and PUT verb for idempotent methods instead of the default POST.
 */
export declare enum MethodOptions_IdempotencyLevel {
    IDEMPOTENCY_UNKNOWN = 0,
    /** NO_SIDE_EFFECTS - implies idempotent */
    NO_SIDE_EFFECTS = 1,
    /** IDEMPOTENT - idempotent, but may have side effects */
    IDEMPOTENT = 2,
    UNRECOGNIZED = -1
}
export declare function methodOptions_IdempotencyLevelFromJSON(object: any): MethodOptions_IdempotencyLevel;
export declare function methodOptions_IdempotencyLevelToJSON(object: MethodOptions_IdempotencyLevel): string;
/**
 * A message representing a option the parser does not recognize. This only
 * appears in options protos created by the compiler::Parser class.
 * DescriptorPool resolves these when building Descriptor objects. Therefore,
 * options protos in descriptor objects (e.g. returned by Descriptor::options(),
 * or produced by Descriptor::CopyTo()) will never have UninterpretedOptions
 * in them.
 */
export interface UninterpretedOption {
    name?: UninterpretedOption_NamePart[] | undefined;
    /**
     * The value of the uninterpreted option, in whatever type the tokenizer
     * identified it as during parsing. Exactly one of these should be set.
     */
    identifier_value?: string | undefined;
    positive_int_value?: bigint | undefined;
    negative_int_value?: bigint | undefined;
    double_value?: number | undefined;
    string_value?: Buffer | undefined;
    aggregate_value?: string | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
/**
 * The name of the uninterpreted option.  Each string represents a segment in
 * a dot-separated name.  is_extension is true iff a segment represents an
 * extension (denoted with parentheses in options specs in .proto files).
 * E.g.,{ ["foo", false], ["bar.baz", true], ["moo", false] } represents
 * "foo.(bar.baz).moo".
 */
export interface UninterpretedOption_NamePart {
    name_part?: string | undefined;
    is_extension?: boolean | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
/**
 * Encapsulates information about the original source file from which a
 * FileDescriptorProto was generated.
 */
export interface SourceCodeInfo {
    /**
     * A Location identifies a piece of source code in a .proto file which
     * corresponds to a particular definition.  This information is intended
     * to be useful to IDEs, code indexers, documentation generators, and similar
     * tools.
     *
     * For example, say we have a file like:
     *   message Foo {
     *     optional string foo = 1;
     *   }
     * Let's look at just the field definition:
     *   optional string foo = 1;
     *   ^       ^^     ^^  ^  ^^^
     *   a       bc     de  f  ghi
     * We have the following locations:
     *   span   path               represents
     *   [a,i)  [ 4, 0, 2, 0 ]     The whole field definition.
     *   [a,b)  [ 4, 0, 2, 0, 4 ]  The label (optional).
     *   [c,d)  [ 4, 0, 2, 0, 5 ]  The type (string).
     *   [e,f)  [ 4, 0, 2, 0, 1 ]  The name (foo).
     *   [g,h)  [ 4, 0, 2, 0, 3 ]  The number (1).
     *
     * Notes:
     * - A location may refer to a repeated field itself (i.e. not to any
     *   particular index within it).  This is used whenever a set of elements are
     *   logically enclosed in a single code segment.  For example, an entire
     *   extend block (possibly containing multiple extension definitions) will
     *   have an outer location whose path refers to the "extensions" repeated
     *   field without an index.
     * - Multiple locations may have the same path.  This happens when a single
     *   logical declaration is spread out across multiple places.  The most
     *   obvious example is the "extend" block again -- there may be multiple
     *   extend blocks in the same scope, each of which will have the same path.
     * - A location's span is not always a subset of its parent's span.  For
     *   example, the "extendee" of an extension declaration appears at the
     *   beginning of the "extend" block and is shared by all extensions within
     *   the block.
     * - Just because a location's span is a subset of some other location's span
     *   does not mean that it is a descendant.  For example, a "group" defines
     *   both a type and a field in a single declaration.  Thus, the locations
     *   corresponding to the type and field and their components will overlap.
     * - Code which tries to interpret locations should probably be designed to
     *   ignore those that it doesn't understand, as more types of locations could
     *   be recorded in the future.
     */
    location?: SourceCodeInfo_Location[] | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
export interface SourceCodeInfo_Location {
    /**
     * Identifies which part of the FileDescriptorProto was defined at this
     * location.
     *
     * Each element is a field number or an index.  They form a path from
     * the root FileDescriptorProto to the place where the definition occurs.
     * For example, this path:
     *   [ 4, 3, 2, 7, 1 ]
     * refers to:
     *   file.message_type(3)  // 4, 3
     *       .field(7)         // 2, 7
     *       .name()           // 1
     * This is because FileDescriptorProto.message_type has field number 4:
     *   repeated DescriptorProto message_type = 4;
     * and DescriptorProto.field has field number 2:
     *   repeated FieldDescriptorProto field = 2;
     * and FieldDescriptorProto.name has field number 1:
     *   optional string name = 1;
     *
     * Thus, the above path gives the location of a field name.  If we removed
     * the last element:
     *   [ 4, 3, 2, 7 ]
     * this path refers to the whole field declaration (from the beginning
     * of the label to the terminating semicolon).
     */
    path?: number[] | undefined;
    /**
     * Always has exactly three or four elements: start line, start column,
     * end line (optional, otherwise assumed same as start line), end column.
     * These are packed into a single field for efficiency.  Note that line
     * and column numbers are zero-based -- typically you will want to add
     * 1 to each before displaying to a user.
     */
    span?: number[] | undefined;
    /**
     * If this SourceCodeInfo represents a complete declaration, these are any
     * comments appearing before and after the declaration which appear to be
     * attached to the declaration.
     *
     * A series of line comments appearing on consecutive lines, with no other
     * tokens appearing on those lines, will be treated as a single comment.
     *
     * leading_detached_comments will keep paragraphs of comments that appear
     * before (but not connected to) the current element. Each paragraph,
     * separated by empty lines, will be one comment element in the repeated
     * field.
     *
     * Only the comment content is provided; comment markers (e.g. //) are
     * stripped out.  For block comments, leading whitespace and an asterisk
     * will be stripped from the beginning of each line other than the first.
     * Newlines are included in the output.
     *
     * Examples:
     *
     *   optional int32 foo = 1;  // Comment attached to foo.
     *   // Comment attached to bar.
     *   optional int32 bar = 2;
     *
     *   optional string baz = 3;
     *   // Comment attached to baz.
     *   // Another line attached to baz.
     *
     *   // Comment attached to moo.
     *   //
     *   // Another line attached to moo.
     *   optional double moo = 4;
     *
     *   // Detached comment for corge. This is not leading or trailing comments
     *   // to moo or corge because there are blank lines separating it from
     *   // both.
     *
     *   // Detached comment for corge paragraph 2.
     *
     *   optional string corge = 5;
     *   /* Block comment attached
     *    * to corge.  Leading asterisks
     *    * will be removed. * /
     *   /* Block comment attached to
     *    * grault. * /
     *   optional int32 grault = 6;
     *
     *   // ignored detached comments.
     */
    leading_comments?: string | undefined;
    trailing_comments?: string | undefined;
    leading_detached_comments?: string[] | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
/**
 * Describes the relationship between generated code and its original source
 * file. A GeneratedCodeInfo message is associated with only one generated
 * source file, but may contain references to different source .proto files.
 */
export interface GeneratedCodeInfo {
    /**
     * An Annotation connects some span of text in generated code to an element
     * of its generating .proto file.
     */
    annotation?: GeneratedCodeInfo_Annotation[] | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
export interface GeneratedCodeInfo_Annotation {
    /**
     * Identifies the element in the original source .proto file. This field
     * is formatted the same as SourceCodeInfo.Location.path.
     */
    path?: number[] | undefined;
    /** Identifies the filesystem path to the original source .proto. */
    source_file?: string | undefined;
    /**
     * Identifies the starting offset in bytes in the generated code
     * that relates to the identified object.
     */
    begin?: number | undefined;
    /**
     * Identifies the ending offset in bytes in the generated code that
     * relates to the identified object. The end offset should be one past
     * the last relevant byte (so the length of the text = end - begin).
     */
    end?: number | undefined;
    semantic?: GeneratedCodeInfo_Annotation_Semantic | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
/**
 * Represents the identified object's effect on the element in the original
 * .proto file.
 */
export declare enum GeneratedCodeInfo_Annotation_Semantic {
    /** NONE - There is no effect or the effect is indescribable. */
    NONE = 0,
    /** SET - The element is set or otherwise mutated. */
    SET = 1,
    /** ALIAS - An alias to the element is returned. */
    ALIAS = 2,
    UNRECOGNIZED = -1
}
export declare function generatedCodeInfo_Annotation_SemanticFromJSON(object: any): GeneratedCodeInfo_Annotation_Semantic;
export declare function generatedCodeInfo_Annotation_SemanticToJSON(object: GeneratedCodeInfo_Annotation_Semantic): string;
export declare const FileDescriptorSet: {
    encode(message: FileDescriptorSet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FileDescriptorSet;
    fromJSON(object: any): FileDescriptorSet;
    toJSON(message: FileDescriptorSet): unknown;
};
export declare const FileDescriptorProto: {
    encode(message: FileDescriptorProto, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FileDescriptorProto;
    fromJSON(object: any): FileDescriptorProto;
    toJSON(message: FileDescriptorProto): unknown;
};
export declare const DescriptorProto: {
    encode(message: DescriptorProto, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DescriptorProto;
    fromJSON(object: any): DescriptorProto;
    toJSON(message: DescriptorProto): unknown;
};
export declare const DescriptorProto_ExtensionRange: {
    encode(message: DescriptorProto_ExtensionRange, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DescriptorProto_ExtensionRange;
    fromJSON(object: any): DescriptorProto_ExtensionRange;
    toJSON(message: DescriptorProto_ExtensionRange): unknown;
};
export declare const DescriptorProto_ReservedRange: {
    encode(message: DescriptorProto_ReservedRange, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DescriptorProto_ReservedRange;
    fromJSON(object: any): DescriptorProto_ReservedRange;
    toJSON(message: DescriptorProto_ReservedRange): unknown;
};
export declare const ExtensionRangeOptions: {
    encode(message: ExtensionRangeOptions, writer?: _m0.Writer): _m0.Writer;
    setExtension<T>(message: ExtensionRangeOptions, extension: Extension<T>, value: T): void;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExtensionRangeOptions;
    getExtension<T_1>(message: ExtensionRangeOptions, extension: Extension<T_1>): T_1 | undefined;
    fromJSON(object: any): ExtensionRangeOptions;
    toJSON(message: ExtensionRangeOptions): unknown;
};
export declare const FieldDescriptorProto: {
    encode(message: FieldDescriptorProto, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FieldDescriptorProto;
    fromJSON(object: any): FieldDescriptorProto;
    toJSON(message: FieldDescriptorProto): unknown;
};
export declare const OneofDescriptorProto: {
    encode(message: OneofDescriptorProto, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OneofDescriptorProto;
    fromJSON(object: any): OneofDescriptorProto;
    toJSON(message: OneofDescriptorProto): unknown;
};
export declare const EnumDescriptorProto: {
    encode(message: EnumDescriptorProto, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EnumDescriptorProto;
    fromJSON(object: any): EnumDescriptorProto;
    toJSON(message: EnumDescriptorProto): unknown;
};
export declare const EnumDescriptorProto_EnumReservedRange: {
    encode(message: EnumDescriptorProto_EnumReservedRange, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EnumDescriptorProto_EnumReservedRange;
    fromJSON(object: any): EnumDescriptorProto_EnumReservedRange;
    toJSON(message: EnumDescriptorProto_EnumReservedRange): unknown;
};
export declare const EnumValueDescriptorProto: {
    encode(message: EnumValueDescriptorProto, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EnumValueDescriptorProto;
    fromJSON(object: any): EnumValueDescriptorProto;
    toJSON(message: EnumValueDescriptorProto): unknown;
};
export declare const ServiceDescriptorProto: {
    encode(message: ServiceDescriptorProto, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ServiceDescriptorProto;
    fromJSON(object: any): ServiceDescriptorProto;
    toJSON(message: ServiceDescriptorProto): unknown;
};
export declare const MethodDescriptorProto: {
    encode(message: MethodDescriptorProto, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MethodDescriptorProto;
    fromJSON(object: any): MethodDescriptorProto;
    toJSON(message: MethodDescriptorProto): unknown;
};
export declare const FileOptions: {
    encode(message: FileOptions, writer?: _m0.Writer): _m0.Writer;
    setExtension<T>(message: FileOptions, extension: Extension<T>, value: T): void;
    decode(input: _m0.Reader | Uint8Array, length?: number): FileOptions;
    getExtension<T_1>(message: FileOptions, extension: Extension<T_1>): T_1 | undefined;
    fromJSON(object: any): FileOptions;
    toJSON(message: FileOptions): unknown;
};
export declare const MessageOptions: {
    encode(message: MessageOptions, writer?: _m0.Writer): _m0.Writer;
    setExtension<T>(message: MessageOptions, extension: Extension<T>, value: T): void;
    decode(input: _m0.Reader | Uint8Array, length?: number): MessageOptions;
    getExtension<T_1>(message: MessageOptions, extension: Extension<T_1>): T_1 | undefined;
    fromJSON(object: any): MessageOptions;
    toJSON(message: MessageOptions): unknown;
};
export declare const FieldOptions: {
    encode(message: FieldOptions, writer?: _m0.Writer): _m0.Writer;
    setExtension<T>(message: FieldOptions, extension: Extension<T>, value: T): void;
    decode(input: _m0.Reader | Uint8Array, length?: number): FieldOptions;
    getExtension<T_1>(message: FieldOptions, extension: Extension<T_1>): T_1 | undefined;
    fromJSON(object: any): FieldOptions;
    toJSON(message: FieldOptions): unknown;
};
export declare const OneofOptions: {
    encode(message: OneofOptions, writer?: _m0.Writer): _m0.Writer;
    setExtension<T>(message: OneofOptions, extension: Extension<T>, value: T): void;
    decode(input: _m0.Reader | Uint8Array, length?: number): OneofOptions;
    getExtension<T_1>(message: OneofOptions, extension: Extension<T_1>): T_1 | undefined;
    fromJSON(object: any): OneofOptions;
    toJSON(message: OneofOptions): unknown;
};
export declare const EnumOptions: {
    encode(message: EnumOptions, writer?: _m0.Writer): _m0.Writer;
    setExtension<T>(message: EnumOptions, extension: Extension<T>, value: T): void;
    decode(input: _m0.Reader | Uint8Array, length?: number): EnumOptions;
    getExtension<T_1>(message: EnumOptions, extension: Extension<T_1>): T_1 | undefined;
    fromJSON(object: any): EnumOptions;
    toJSON(message: EnumOptions): unknown;
};
export declare const EnumValueOptions: {
    encode(message: EnumValueOptions, writer?: _m0.Writer): _m0.Writer;
    setExtension<T>(message: EnumValueOptions, extension: Extension<T>, value: T): void;
    decode(input: _m0.Reader | Uint8Array, length?: number): EnumValueOptions;
    getExtension<T_1>(message: EnumValueOptions, extension: Extension<T_1>): T_1 | undefined;
    fromJSON(object: any): EnumValueOptions;
    toJSON(message: EnumValueOptions): unknown;
};
export declare const ServiceOptions: {
    encode(message: ServiceOptions, writer?: _m0.Writer): _m0.Writer;
    setExtension<T>(message: ServiceOptions, extension: Extension<T>, value: T): void;
    decode(input: _m0.Reader | Uint8Array, length?: number): ServiceOptions;
    getExtension<T_1>(message: ServiceOptions, extension: Extension<T_1>): T_1 | undefined;
    fromJSON(object: any): ServiceOptions;
    toJSON(message: ServiceOptions): unknown;
};
export declare const MethodOptions: {
    encode(message: MethodOptions, writer?: _m0.Writer): _m0.Writer;
    setExtension<T>(message: MethodOptions, extension: Extension<T>, value: T): void;
    decode(input: _m0.Reader | Uint8Array, length?: number): MethodOptions;
    getExtension<T_1>(message: MethodOptions, extension: Extension<T_1>): T_1 | undefined;
    fromJSON(object: any): MethodOptions;
    toJSON(message: MethodOptions): unknown;
};
export declare const UninterpretedOption: {
    encode(message: UninterpretedOption, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UninterpretedOption;
    fromJSON(object: any): UninterpretedOption;
    toJSON(message: UninterpretedOption): unknown;
};
export declare const UninterpretedOption_NamePart: {
    encode(message: UninterpretedOption_NamePart, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UninterpretedOption_NamePart;
    fromJSON(object: any): UninterpretedOption_NamePart;
    toJSON(message: UninterpretedOption_NamePart): unknown;
};
export declare const SourceCodeInfo: {
    encode(message: SourceCodeInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SourceCodeInfo;
    fromJSON(object: any): SourceCodeInfo;
    toJSON(message: SourceCodeInfo): unknown;
};
export declare const SourceCodeInfo_Location: {
    encode(message: SourceCodeInfo_Location, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SourceCodeInfo_Location;
    fromJSON(object: any): SourceCodeInfo_Location;
    toJSON(message: SourceCodeInfo_Location): unknown;
};
export declare const GeneratedCodeInfo: {
    encode(message: GeneratedCodeInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GeneratedCodeInfo;
    fromJSON(object: any): GeneratedCodeInfo;
    toJSON(message: GeneratedCodeInfo): unknown;
};
export declare const GeneratedCodeInfo_Annotation: {
    encode(message: GeneratedCodeInfo_Annotation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GeneratedCodeInfo_Annotation;
    fromJSON(object: any): GeneratedCodeInfo_Annotation;
    toJSON(message: GeneratedCodeInfo_Annotation): unknown;
};
export interface Extension<T> {
    number: number;
    tag: number;
    singularTag?: number;
    encode?: (message: T) => Uint8Array[];
    decode?: (tag: number, input: Uint8Array[]) => T;
    repeated: boolean;
    packed: boolean;
}