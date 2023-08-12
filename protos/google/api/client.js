"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.oauth_scopes = exports.default_host = exports.method_signature = exports.MethodSettings_LongRunning = exports.MethodSettings = exports.GoSettings = exports.RubySettings = exports.DotnetSettings = exports.NodeSettings = exports.PythonSettings = exports.PhpSettings = exports.CppSettings = exports.JavaSettings_ServiceClassNamesEntry = exports.JavaSettings = exports.Publishing = exports.ClientLibrarySettings = exports.CommonLanguageSettings = exports.clientLibraryDestinationToJSON = exports.clientLibraryDestinationFromJSON = exports.ClientLibraryDestination = exports.clientLibraryOrganizationToJSON = exports.clientLibraryOrganizationFromJSON = exports.ClientLibraryOrganization = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const duration_1 = require("../protobuf/duration");
const launch_stage_1 = require("./launch_stage");
/**
 * The organization for which the client libraries are being published.
 * Affects the url where generated docs are published, etc.
 */
var ClientLibraryOrganization;
(function (ClientLibraryOrganization) {
    /** CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED - Not useful. */
    ClientLibraryOrganization[ClientLibraryOrganization["CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED"] = 0] = "CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED";
    /** CLOUD - Google Cloud Platform Org. */
    ClientLibraryOrganization[ClientLibraryOrganization["CLOUD"] = 1] = "CLOUD";
    /** ADS - Ads (Advertising) Org. */
    ClientLibraryOrganization[ClientLibraryOrganization["ADS"] = 2] = "ADS";
    /** PHOTOS - Photos Org. */
    ClientLibraryOrganization[ClientLibraryOrganization["PHOTOS"] = 3] = "PHOTOS";
    /** STREET_VIEW - Street View Org. */
    ClientLibraryOrganization[ClientLibraryOrganization["STREET_VIEW"] = 4] = "STREET_VIEW";
    ClientLibraryOrganization[ClientLibraryOrganization["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ClientLibraryOrganization = exports.ClientLibraryOrganization || (exports.ClientLibraryOrganization = {}));
function clientLibraryOrganizationFromJSON(object) {
    switch (object) {
        case 0:
        case "CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED":
            return ClientLibraryOrganization.CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED;
        case 1:
        case "CLOUD":
            return ClientLibraryOrganization.CLOUD;
        case 2:
        case "ADS":
            return ClientLibraryOrganization.ADS;
        case 3:
        case "PHOTOS":
            return ClientLibraryOrganization.PHOTOS;
        case 4:
        case "STREET_VIEW":
            return ClientLibraryOrganization.STREET_VIEW;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ClientLibraryOrganization.UNRECOGNIZED;
    }
}
exports.clientLibraryOrganizationFromJSON = clientLibraryOrganizationFromJSON;
function clientLibraryOrganizationToJSON(object) {
    switch (object) {
        case ClientLibraryOrganization.CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED:
            return "CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED";
        case ClientLibraryOrganization.CLOUD:
            return "CLOUD";
        case ClientLibraryOrganization.ADS:
            return "ADS";
        case ClientLibraryOrganization.PHOTOS:
            return "PHOTOS";
        case ClientLibraryOrganization.STREET_VIEW:
            return "STREET_VIEW";
        case ClientLibraryOrganization.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.clientLibraryOrganizationToJSON = clientLibraryOrganizationToJSON;
/** To where should client libraries be published? */
var ClientLibraryDestination;
(function (ClientLibraryDestination) {
    /**
     * CLIENT_LIBRARY_DESTINATION_UNSPECIFIED - Client libraries will neither be generated nor published to package
     * managers.
     */
    ClientLibraryDestination[ClientLibraryDestination["CLIENT_LIBRARY_DESTINATION_UNSPECIFIED"] = 0] = "CLIENT_LIBRARY_DESTINATION_UNSPECIFIED";
    /**
     * GITHUB - Generate the client library in a repo under github.com/googleapis,
     * but don't publish it to package managers.
     */
    ClientLibraryDestination[ClientLibraryDestination["GITHUB"] = 10] = "GITHUB";
    /** PACKAGE_MANAGER - Publish the library to package managers like nuget.org and npmjs.com. */
    ClientLibraryDestination[ClientLibraryDestination["PACKAGE_MANAGER"] = 20] = "PACKAGE_MANAGER";
    ClientLibraryDestination[ClientLibraryDestination["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ClientLibraryDestination = exports.ClientLibraryDestination || (exports.ClientLibraryDestination = {}));
function clientLibraryDestinationFromJSON(object) {
    switch (object) {
        case 0:
        case "CLIENT_LIBRARY_DESTINATION_UNSPECIFIED":
            return ClientLibraryDestination.CLIENT_LIBRARY_DESTINATION_UNSPECIFIED;
        case 10:
        case "GITHUB":
            return ClientLibraryDestination.GITHUB;
        case 20:
        case "PACKAGE_MANAGER":
            return ClientLibraryDestination.PACKAGE_MANAGER;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ClientLibraryDestination.UNRECOGNIZED;
    }
}
exports.clientLibraryDestinationFromJSON = clientLibraryDestinationFromJSON;
function clientLibraryDestinationToJSON(object) {
    switch (object) {
        case ClientLibraryDestination.CLIENT_LIBRARY_DESTINATION_UNSPECIFIED:
            return "CLIENT_LIBRARY_DESTINATION_UNSPECIFIED";
        case ClientLibraryDestination.GITHUB:
            return "GITHUB";
        case ClientLibraryDestination.PACKAGE_MANAGER:
            return "PACKAGE_MANAGER";
        case ClientLibraryDestination.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.clientLibraryDestinationToJSON = clientLibraryDestinationToJSON;
function createBaseCommonLanguageSettings() {
    return {};
}
exports.CommonLanguageSettings = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.reference_docs_uri !== undefined && message.reference_docs_uri !== "") {
            writer.uint32(10).string(message.reference_docs_uri);
        }
        if (message.destinations !== undefined && message.destinations.length !== 0) {
            writer.uint32(18).fork();
            for (const v of message.destinations) {
                writer.int32(v);
            }
            writer.ldelim();
        }
        if (message._unknownFields !== undefined) {
            for (const [key, values] of Object.entries(message._unknownFields)) {
                const tag = parseInt(key, 10);
                for (const value of values) {
                    writer.uint32(tag);
                    writer["_push"]((val, buf, pos) => buf.set(val, pos), value.length, value);
                }
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommonLanguageSettings();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.reference_docs_uri = reader.string();
                    continue;
                case 2:
                    if (tag === 16) {
                        if (message.destinations === undefined) {
                            message.destinations = [];
                        }
                        message.destinations.push(reader.int32());
                        continue;
                    }
                    if (tag === 18) {
                        if (message.destinations === undefined) {
                            message.destinations = [];
                        }
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.destinations.push(reader.int32());
                        }
                        continue;
                    }
                    break;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            const startPos = reader.pos;
            reader.skipType(tag & 7);
            const buf = reader.buf.slice(startPos, reader.pos);
            if (message._unknownFields === undefined) {
                message._unknownFields = {};
            }
            const list = message._unknownFields[tag];
            if (list === undefined) {
                message._unknownFields[tag] = [buf];
            }
            else {
                list.push(buf);
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            reference_docs_uri: isSet(object.reference_docs_uri) ? String(object.reference_docs_uri) : undefined,
            destinations: Array.isArray(object?.destinations)
                ? object.destinations.map((e) => clientLibraryDestinationFromJSON(e))
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.reference_docs_uri !== undefined && message.reference_docs_uri !== "") {
            obj.reference_docs_uri = message.reference_docs_uri;
        }
        if (message.destinations?.length) {
            obj.destinations = message.destinations.map((e) => clientLibraryDestinationToJSON(e));
        }
        return obj;
    },
};
function createBaseClientLibrarySettings() {
    return {};
}
exports.ClientLibrarySettings = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.version !== undefined && message.version !== "") {
            writer.uint32(10).string(message.version);
        }
        if (message.launch_stage !== undefined && message.launch_stage !== 0) {
            writer.uint32(16).int32(message.launch_stage);
        }
        if (message.rest_numeric_enums === true) {
            writer.uint32(24).bool(message.rest_numeric_enums);
        }
        if (message.java_settings !== undefined) {
            exports.JavaSettings.encode(message.java_settings, writer.uint32(170).fork()).ldelim();
        }
        if (message.cpp_settings !== undefined) {
            exports.CppSettings.encode(message.cpp_settings, writer.uint32(178).fork()).ldelim();
        }
        if (message.php_settings !== undefined) {
            exports.PhpSettings.encode(message.php_settings, writer.uint32(186).fork()).ldelim();
        }
        if (message.python_settings !== undefined) {
            exports.PythonSettings.encode(message.python_settings, writer.uint32(194).fork()).ldelim();
        }
        if (message.node_settings !== undefined) {
            exports.NodeSettings.encode(message.node_settings, writer.uint32(202).fork()).ldelim();
        }
        if (message.dotnet_settings !== undefined) {
            exports.DotnetSettings.encode(message.dotnet_settings, writer.uint32(210).fork()).ldelim();
        }
        if (message.ruby_settings !== undefined) {
            exports.RubySettings.encode(message.ruby_settings, writer.uint32(218).fork()).ldelim();
        }
        if (message.go_settings !== undefined) {
            exports.GoSettings.encode(message.go_settings, writer.uint32(226).fork()).ldelim();
        }
        if (message._unknownFields !== undefined) {
            for (const [key, values] of Object.entries(message._unknownFields)) {
                const tag = parseInt(key, 10);
                for (const value of values) {
                    writer.uint32(tag);
                    writer["_push"]((val, buf, pos) => buf.set(val, pos), value.length, value);
                }
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClientLibrarySettings();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.version = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.launch_stage = reader.int32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.rest_numeric_enums = reader.bool();
                    continue;
                case 21:
                    if (tag !== 170) {
                        break;
                    }
                    message.java_settings = exports.JavaSettings.decode(reader, reader.uint32());
                    continue;
                case 22:
                    if (tag !== 178) {
                        break;
                    }
                    message.cpp_settings = exports.CppSettings.decode(reader, reader.uint32());
                    continue;
                case 23:
                    if (tag !== 186) {
                        break;
                    }
                    message.php_settings = exports.PhpSettings.decode(reader, reader.uint32());
                    continue;
                case 24:
                    if (tag !== 194) {
                        break;
                    }
                    message.python_settings = exports.PythonSettings.decode(reader, reader.uint32());
                    continue;
                case 25:
                    if (tag !== 202) {
                        break;
                    }
                    message.node_settings = exports.NodeSettings.decode(reader, reader.uint32());
                    continue;
                case 26:
                    if (tag !== 210) {
                        break;
                    }
                    message.dotnet_settings = exports.DotnetSettings.decode(reader, reader.uint32());
                    continue;
                case 27:
                    if (tag !== 218) {
                        break;
                    }
                    message.ruby_settings = exports.RubySettings.decode(reader, reader.uint32());
                    continue;
                case 28:
                    if (tag !== 226) {
                        break;
                    }
                    message.go_settings = exports.GoSettings.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            const startPos = reader.pos;
            reader.skipType(tag & 7);
            const buf = reader.buf.slice(startPos, reader.pos);
            if (message._unknownFields === undefined) {
                message._unknownFields = {};
            }
            const list = message._unknownFields[tag];
            if (list === undefined) {
                message._unknownFields[tag] = [buf];
            }
            else {
                list.push(buf);
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            version: isSet(object.version) ? String(object.version) : undefined,
            launch_stage: isSet(object.launch_stage) ? (0, launch_stage_1.launchStageFromJSON)(object.launch_stage) : undefined,
            rest_numeric_enums: isSet(object.rest_numeric_enums) ? Boolean(object.rest_numeric_enums) : undefined,
            java_settings: isSet(object.java_settings) ? exports.JavaSettings.fromJSON(object.java_settings) : undefined,
            cpp_settings: isSet(object.cpp_settings) ? exports.CppSettings.fromJSON(object.cpp_settings) : undefined,
            php_settings: isSet(object.php_settings) ? exports.PhpSettings.fromJSON(object.php_settings) : undefined,
            python_settings: isSet(object.python_settings) ? exports.PythonSettings.fromJSON(object.python_settings) : undefined,
            node_settings: isSet(object.node_settings) ? exports.NodeSettings.fromJSON(object.node_settings) : undefined,
            dotnet_settings: isSet(object.dotnet_settings) ? exports.DotnetSettings.fromJSON(object.dotnet_settings) : undefined,
            ruby_settings: isSet(object.ruby_settings) ? exports.RubySettings.fromJSON(object.ruby_settings) : undefined,
            go_settings: isSet(object.go_settings) ? exports.GoSettings.fromJSON(object.go_settings) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.version !== undefined && message.version !== "") {
            obj.version = message.version;
        }
        if (message.launch_stage !== undefined && message.launch_stage !== 0) {
            obj.launch_stage = (0, launch_stage_1.launchStageToJSON)(message.launch_stage);
        }
        if (message.rest_numeric_enums === true) {
            obj.rest_numeric_enums = message.rest_numeric_enums;
        }
        if (message.java_settings !== undefined) {
            obj.java_settings = exports.JavaSettings.toJSON(message.java_settings);
        }
        if (message.cpp_settings !== undefined) {
            obj.cpp_settings = exports.CppSettings.toJSON(message.cpp_settings);
        }
        if (message.php_settings !== undefined) {
            obj.php_settings = exports.PhpSettings.toJSON(message.php_settings);
        }
        if (message.python_settings !== undefined) {
            obj.python_settings = exports.PythonSettings.toJSON(message.python_settings);
        }
        if (message.node_settings !== undefined) {
            obj.node_settings = exports.NodeSettings.toJSON(message.node_settings);
        }
        if (message.dotnet_settings !== undefined) {
            obj.dotnet_settings = exports.DotnetSettings.toJSON(message.dotnet_settings);
        }
        if (message.ruby_settings !== undefined) {
            obj.ruby_settings = exports.RubySettings.toJSON(message.ruby_settings);
        }
        if (message.go_settings !== undefined) {
            obj.go_settings = exports.GoSettings.toJSON(message.go_settings);
        }
        return obj;
    },
};
function createBasePublishing() {
    return {};
}
exports.Publishing = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.method_settings !== undefined && message.method_settings.length !== 0) {
            for (const v of message.method_settings) {
                exports.MethodSettings.encode(v, writer.uint32(18).fork()).ldelim();
            }
        }
        if (message.new_issue_uri !== undefined && message.new_issue_uri !== "") {
            writer.uint32(810).string(message.new_issue_uri);
        }
        if (message.documentation_uri !== undefined && message.documentation_uri !== "") {
            writer.uint32(818).string(message.documentation_uri);
        }
        if (message.api_short_name !== undefined && message.api_short_name !== "") {
            writer.uint32(826).string(message.api_short_name);
        }
        if (message.github_label !== undefined && message.github_label !== "") {
            writer.uint32(834).string(message.github_label);
        }
        if (message.codeowner_github_teams !== undefined && message.codeowner_github_teams.length !== 0) {
            for (const v of message.codeowner_github_teams) {
                writer.uint32(842).string(v);
            }
        }
        if (message.doc_tag_prefix !== undefined && message.doc_tag_prefix !== "") {
            writer.uint32(850).string(message.doc_tag_prefix);
        }
        if (message.organization !== undefined && message.organization !== 0) {
            writer.uint32(856).int32(message.organization);
        }
        if (message.library_settings !== undefined && message.library_settings.length !== 0) {
            for (const v of message.library_settings) {
                exports.ClientLibrarySettings.encode(v, writer.uint32(874).fork()).ldelim();
            }
        }
        if (message._unknownFields !== undefined) {
            for (const [key, values] of Object.entries(message._unknownFields)) {
                const tag = parseInt(key, 10);
                for (const value of values) {
                    writer.uint32(tag);
                    writer["_push"]((val, buf, pos) => buf.set(val, pos), value.length, value);
                }
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePublishing();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    if (message.method_settings === undefined) {
                        message.method_settings = [];
                    }
                    message.method_settings.push(exports.MethodSettings.decode(reader, reader.uint32()));
                    continue;
                case 101:
                    if (tag !== 810) {
                        break;
                    }
                    message.new_issue_uri = reader.string();
                    continue;
                case 102:
                    if (tag !== 818) {
                        break;
                    }
                    message.documentation_uri = reader.string();
                    continue;
                case 103:
                    if (tag !== 826) {
                        break;
                    }
                    message.api_short_name = reader.string();
                    continue;
                case 104:
                    if (tag !== 834) {
                        break;
                    }
                    message.github_label = reader.string();
                    continue;
                case 105:
                    if (tag !== 842) {
                        break;
                    }
                    if (message.codeowner_github_teams === undefined) {
                        message.codeowner_github_teams = [];
                    }
                    message.codeowner_github_teams.push(reader.string());
                    continue;
                case 106:
                    if (tag !== 850) {
                        break;
                    }
                    message.doc_tag_prefix = reader.string();
                    continue;
                case 107:
                    if (tag !== 856) {
                        break;
                    }
                    message.organization = reader.int32();
                    continue;
                case 109:
                    if (tag !== 874) {
                        break;
                    }
                    if (message.library_settings === undefined) {
                        message.library_settings = [];
                    }
                    message.library_settings.push(exports.ClientLibrarySettings.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            const startPos = reader.pos;
            reader.skipType(tag & 7);
            const buf = reader.buf.slice(startPos, reader.pos);
            if (message._unknownFields === undefined) {
                message._unknownFields = {};
            }
            const list = message._unknownFields[tag];
            if (list === undefined) {
                message._unknownFields[tag] = [buf];
            }
            else {
                list.push(buf);
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            method_settings: Array.isArray(object?.method_settings)
                ? object.method_settings.map((e) => exports.MethodSettings.fromJSON(e))
                : undefined,
            new_issue_uri: isSet(object.new_issue_uri) ? String(object.new_issue_uri) : undefined,
            documentation_uri: isSet(object.documentation_uri) ? String(object.documentation_uri) : undefined,
            api_short_name: isSet(object.api_short_name) ? String(object.api_short_name) : undefined,
            github_label: isSet(object.github_label) ? String(object.github_label) : undefined,
            codeowner_github_teams: Array.isArray(object?.codeowner_github_teams)
                ? object.codeowner_github_teams.map((e) => String(e))
                : undefined,
            doc_tag_prefix: isSet(object.doc_tag_prefix) ? String(object.doc_tag_prefix) : undefined,
            organization: isSet(object.organization) ? clientLibraryOrganizationFromJSON(object.organization) : undefined,
            library_settings: Array.isArray(object?.library_settings)
                ? object.library_settings.map((e) => exports.ClientLibrarySettings.fromJSON(e))
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.method_settings?.length) {
            obj.method_settings = message.method_settings.map((e) => exports.MethodSettings.toJSON(e));
        }
        if (message.new_issue_uri !== undefined && message.new_issue_uri !== "") {
            obj.new_issue_uri = message.new_issue_uri;
        }
        if (message.documentation_uri !== undefined && message.documentation_uri !== "") {
            obj.documentation_uri = message.documentation_uri;
        }
        if (message.api_short_name !== undefined && message.api_short_name !== "") {
            obj.api_short_name = message.api_short_name;
        }
        if (message.github_label !== undefined && message.github_label !== "") {
            obj.github_label = message.github_label;
        }
        if (message.codeowner_github_teams?.length) {
            obj.codeowner_github_teams = message.codeowner_github_teams;
        }
        if (message.doc_tag_prefix !== undefined && message.doc_tag_prefix !== "") {
            obj.doc_tag_prefix = message.doc_tag_prefix;
        }
        if (message.organization !== undefined && message.organization !== 0) {
            obj.organization = clientLibraryOrganizationToJSON(message.organization);
        }
        if (message.library_settings?.length) {
            obj.library_settings = message.library_settings.map((e) => exports.ClientLibrarySettings.toJSON(e));
        }
        return obj;
    },
};
function createBaseJavaSettings() {
    return {};
}
exports.JavaSettings = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.library_package !== undefined && message.library_package !== "") {
            writer.uint32(10).string(message.library_package);
        }
        (message.service_class_names || new Map()).forEach((value, key) => {
            exports.JavaSettings_ServiceClassNamesEntry.encode({ key: key, value }, writer.uint32(18).fork()).ldelim();
        });
        if (message.common !== undefined) {
            exports.CommonLanguageSettings.encode(message.common, writer.uint32(26).fork()).ldelim();
        }
        if (message._unknownFields !== undefined) {
            for (const [key, values] of Object.entries(message._unknownFields)) {
                const tag = parseInt(key, 10);
                for (const value of values) {
                    writer.uint32(tag);
                    writer["_push"]((val, buf, pos) => buf.set(val, pos), value.length, value);
                }
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseJavaSettings();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.library_package = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    const entry2 = exports.JavaSettings_ServiceClassNamesEntry.decode(reader, reader.uint32());
                    if (entry2.value !== undefined) {
                        if (message.service_class_names === undefined) {
                            message.service_class_names = new Map();
                        }
                        message.service_class_names.set(entry2.key, entry2.value);
                    }
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.common = exports.CommonLanguageSettings.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            const startPos = reader.pos;
            reader.skipType(tag & 7);
            const buf = reader.buf.slice(startPos, reader.pos);
            if (message._unknownFields === undefined) {
                message._unknownFields = {};
            }
            const list = message._unknownFields[tag];
            if (list === undefined) {
                message._unknownFields[tag] = [buf];
            }
            else {
                list.push(buf);
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            library_package: isSet(object.library_package) ? String(object.library_package) : undefined,
            service_class_names: isObject(object.service_class_names)
                ? Object.entries(object.service_class_names).reduce((acc, [key, value]) => {
                    acc.set(key, String(value));
                    return acc;
                }, new Map())
                : undefined,
            common: isSet(object.common) ? exports.CommonLanguageSettings.fromJSON(object.common) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.library_package !== undefined && message.library_package !== "") {
            obj.library_package = message.library_package;
        }
        if (message.service_class_names?.size) {
            obj.service_class_names = {};
            message.service_class_names.forEach((v, k) => {
                obj.service_class_names[k] = v;
            });
        }
        if (message.common !== undefined) {
            obj.common = exports.CommonLanguageSettings.toJSON(message.common);
        }
        return obj;
    },
};
function createBaseJavaSettings_ServiceClassNamesEntry() {
    return { key: "", value: "" };
}
exports.JavaSettings_ServiceClassNamesEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        if (message._unknownFields !== undefined) {
            for (const [key, values] of Object.entries(message._unknownFields)) {
                const tag = parseInt(key, 10);
                for (const value of values) {
                    writer.uint32(tag);
                    writer["_push"]((val, buf, pos) => buf.set(val, pos), value.length, value);
                }
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseJavaSettings_ServiceClassNamesEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            const startPos = reader.pos;
            reader.skipType(tag & 7);
            const buf = reader.buf.slice(startPos, reader.pos);
            if (message._unknownFields === undefined) {
                message._unknownFields = {};
            }
            const list = message._unknownFields[tag];
            if (list === undefined) {
                message._unknownFields[tag] = [buf];
            }
            else {
                list.push(buf);
            }
        }
        return message;
    },
    fromJSON(object) {
        return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.value !== "") {
            obj.value = message.value;
        }
        return obj;
    },
};
function createBaseCppSettings() {
    return {};
}
exports.CppSettings = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.common !== undefined) {
            exports.CommonLanguageSettings.encode(message.common, writer.uint32(10).fork()).ldelim();
        }
        if (message._unknownFields !== undefined) {
            for (const [key, values] of Object.entries(message._unknownFields)) {
                const tag = parseInt(key, 10);
                for (const value of values) {
                    writer.uint32(tag);
                    writer["_push"]((val, buf, pos) => buf.set(val, pos), value.length, value);
                }
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCppSettings();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.common = exports.CommonLanguageSettings.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            const startPos = reader.pos;
            reader.skipType(tag & 7);
            const buf = reader.buf.slice(startPos, reader.pos);
            if (message._unknownFields === undefined) {
                message._unknownFields = {};
            }
            const list = message._unknownFields[tag];
            if (list === undefined) {
                message._unknownFields[tag] = [buf];
            }
            else {
                list.push(buf);
            }
        }
        return message;
    },
    fromJSON(object) {
        return { common: isSet(object.common) ? exports.CommonLanguageSettings.fromJSON(object.common) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.common !== undefined) {
            obj.common = exports.CommonLanguageSettings.toJSON(message.common);
        }
        return obj;
    },
};
function createBasePhpSettings() {
    return {};
}
exports.PhpSettings = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.common !== undefined) {
            exports.CommonLanguageSettings.encode(message.common, writer.uint32(10).fork()).ldelim();
        }
        if (message._unknownFields !== undefined) {
            for (const [key, values] of Object.entries(message._unknownFields)) {
                const tag = parseInt(key, 10);
                for (const value of values) {
                    writer.uint32(tag);
                    writer["_push"]((val, buf, pos) => buf.set(val, pos), value.length, value);
                }
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePhpSettings();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.common = exports.CommonLanguageSettings.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            const startPos = reader.pos;
            reader.skipType(tag & 7);
            const buf = reader.buf.slice(startPos, reader.pos);
            if (message._unknownFields === undefined) {
                message._unknownFields = {};
            }
            const list = message._unknownFields[tag];
            if (list === undefined) {
                message._unknownFields[tag] = [buf];
            }
            else {
                list.push(buf);
            }
        }
        return message;
    },
    fromJSON(object) {
        return { common: isSet(object.common) ? exports.CommonLanguageSettings.fromJSON(object.common) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.common !== undefined) {
            obj.common = exports.CommonLanguageSettings.toJSON(message.common);
        }
        return obj;
    },
};
function createBasePythonSettings() {
    return {};
}
exports.PythonSettings = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.common !== undefined) {
            exports.CommonLanguageSettings.encode(message.common, writer.uint32(10).fork()).ldelim();
        }
        if (message._unknownFields !== undefined) {
            for (const [key, values] of Object.entries(message._unknownFields)) {
                const tag = parseInt(key, 10);
                for (const value of values) {
                    writer.uint32(tag);
                    writer["_push"]((val, buf, pos) => buf.set(val, pos), value.length, value);
                }
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePythonSettings();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.common = exports.CommonLanguageSettings.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            const startPos = reader.pos;
            reader.skipType(tag & 7);
            const buf = reader.buf.slice(startPos, reader.pos);
            if (message._unknownFields === undefined) {
                message._unknownFields = {};
            }
            const list = message._unknownFields[tag];
            if (list === undefined) {
                message._unknownFields[tag] = [buf];
            }
            else {
                list.push(buf);
            }
        }
        return message;
    },
    fromJSON(object) {
        return { common: isSet(object.common) ? exports.CommonLanguageSettings.fromJSON(object.common) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.common !== undefined) {
            obj.common = exports.CommonLanguageSettings.toJSON(message.common);
        }
        return obj;
    },
};
function createBaseNodeSettings() {
    return {};
}
exports.NodeSettings = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.common !== undefined) {
            exports.CommonLanguageSettings.encode(message.common, writer.uint32(10).fork()).ldelim();
        }
        if (message._unknownFields !== undefined) {
            for (const [key, values] of Object.entries(message._unknownFields)) {
                const tag = parseInt(key, 10);
                for (const value of values) {
                    writer.uint32(tag);
                    writer["_push"]((val, buf, pos) => buf.set(val, pos), value.length, value);
                }
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNodeSettings();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.common = exports.CommonLanguageSettings.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            const startPos = reader.pos;
            reader.skipType(tag & 7);
            const buf = reader.buf.slice(startPos, reader.pos);
            if (message._unknownFields === undefined) {
                message._unknownFields = {};
            }
            const list = message._unknownFields[tag];
            if (list === undefined) {
                message._unknownFields[tag] = [buf];
            }
            else {
                list.push(buf);
            }
        }
        return message;
    },
    fromJSON(object) {
        return { common: isSet(object.common) ? exports.CommonLanguageSettings.fromJSON(object.common) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.common !== undefined) {
            obj.common = exports.CommonLanguageSettings.toJSON(message.common);
        }
        return obj;
    },
};
function createBaseDotnetSettings() {
    return {};
}
exports.DotnetSettings = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.common !== undefined) {
            exports.CommonLanguageSettings.encode(message.common, writer.uint32(10).fork()).ldelim();
        }
        if (message._unknownFields !== undefined) {
            for (const [key, values] of Object.entries(message._unknownFields)) {
                const tag = parseInt(key, 10);
                for (const value of values) {
                    writer.uint32(tag);
                    writer["_push"]((val, buf, pos) => buf.set(val, pos), value.length, value);
                }
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDotnetSettings();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.common = exports.CommonLanguageSettings.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            const startPos = reader.pos;
            reader.skipType(tag & 7);
            const buf = reader.buf.slice(startPos, reader.pos);
            if (message._unknownFields === undefined) {
                message._unknownFields = {};
            }
            const list = message._unknownFields[tag];
            if (list === undefined) {
                message._unknownFields[tag] = [buf];
            }
            else {
                list.push(buf);
            }
        }
        return message;
    },
    fromJSON(object) {
        return { common: isSet(object.common) ? exports.CommonLanguageSettings.fromJSON(object.common) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.common !== undefined) {
            obj.common = exports.CommonLanguageSettings.toJSON(message.common);
        }
        return obj;
    },
};
function createBaseRubySettings() {
    return {};
}
exports.RubySettings = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.common !== undefined) {
            exports.CommonLanguageSettings.encode(message.common, writer.uint32(10).fork()).ldelim();
        }
        if (message._unknownFields !== undefined) {
            for (const [key, values] of Object.entries(message._unknownFields)) {
                const tag = parseInt(key, 10);
                for (const value of values) {
                    writer.uint32(tag);
                    writer["_push"]((val, buf, pos) => buf.set(val, pos), value.length, value);
                }
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRubySettings();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.common = exports.CommonLanguageSettings.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            const startPos = reader.pos;
            reader.skipType(tag & 7);
            const buf = reader.buf.slice(startPos, reader.pos);
            if (message._unknownFields === undefined) {
                message._unknownFields = {};
            }
            const list = message._unknownFields[tag];
            if (list === undefined) {
                message._unknownFields[tag] = [buf];
            }
            else {
                list.push(buf);
            }
        }
        return message;
    },
    fromJSON(object) {
        return { common: isSet(object.common) ? exports.CommonLanguageSettings.fromJSON(object.common) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.common !== undefined) {
            obj.common = exports.CommonLanguageSettings.toJSON(message.common);
        }
        return obj;
    },
};
function createBaseGoSettings() {
    return {};
}
exports.GoSettings = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.common !== undefined) {
            exports.CommonLanguageSettings.encode(message.common, writer.uint32(10).fork()).ldelim();
        }
        if (message._unknownFields !== undefined) {
            for (const [key, values] of Object.entries(message._unknownFields)) {
                const tag = parseInt(key, 10);
                for (const value of values) {
                    writer.uint32(tag);
                    writer["_push"]((val, buf, pos) => buf.set(val, pos), value.length, value);
                }
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGoSettings();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.common = exports.CommonLanguageSettings.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            const startPos = reader.pos;
            reader.skipType(tag & 7);
            const buf = reader.buf.slice(startPos, reader.pos);
            if (message._unknownFields === undefined) {
                message._unknownFields = {};
            }
            const list = message._unknownFields[tag];
            if (list === undefined) {
                message._unknownFields[tag] = [buf];
            }
            else {
                list.push(buf);
            }
        }
        return message;
    },
    fromJSON(object) {
        return { common: isSet(object.common) ? exports.CommonLanguageSettings.fromJSON(object.common) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.common !== undefined) {
            obj.common = exports.CommonLanguageSettings.toJSON(message.common);
        }
        return obj;
    },
};
function createBaseMethodSettings() {
    return {};
}
exports.MethodSettings = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.selector !== undefined && message.selector !== "") {
            writer.uint32(10).string(message.selector);
        }
        if (message.long_running !== undefined) {
            exports.MethodSettings_LongRunning.encode(message.long_running, writer.uint32(18).fork()).ldelim();
        }
        if (message._unknownFields !== undefined) {
            for (const [key, values] of Object.entries(message._unknownFields)) {
                const tag = parseInt(key, 10);
                for (const value of values) {
                    writer.uint32(tag);
                    writer["_push"]((val, buf, pos) => buf.set(val, pos), value.length, value);
                }
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMethodSettings();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.selector = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.long_running = exports.MethodSettings_LongRunning.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            const startPos = reader.pos;
            reader.skipType(tag & 7);
            const buf = reader.buf.slice(startPos, reader.pos);
            if (message._unknownFields === undefined) {
                message._unknownFields = {};
            }
            const list = message._unknownFields[tag];
            if (list === undefined) {
                message._unknownFields[tag] = [buf];
            }
            else {
                list.push(buf);
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            selector: isSet(object.selector) ? String(object.selector) : undefined,
            long_running: isSet(object.long_running) ? exports.MethodSettings_LongRunning.fromJSON(object.long_running) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.selector !== undefined && message.selector !== "") {
            obj.selector = message.selector;
        }
        if (message.long_running !== undefined) {
            obj.long_running = exports.MethodSettings_LongRunning.toJSON(message.long_running);
        }
        return obj;
    },
};
function createBaseMethodSettings_LongRunning() {
    return {};
}
exports.MethodSettings_LongRunning = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.initial_poll_delay !== undefined) {
            duration_1.Duration.encode(message.initial_poll_delay, writer.uint32(10).fork()).ldelim();
        }
        if (message.poll_delay_multiplier !== undefined && message.poll_delay_multiplier !== 0) {
            writer.uint32(21).float(message.poll_delay_multiplier);
        }
        if (message.max_poll_delay !== undefined) {
            duration_1.Duration.encode(message.max_poll_delay, writer.uint32(26).fork()).ldelim();
        }
        if (message.total_poll_timeout !== undefined) {
            duration_1.Duration.encode(message.total_poll_timeout, writer.uint32(34).fork()).ldelim();
        }
        if (message._unknownFields !== undefined) {
            for (const [key, values] of Object.entries(message._unknownFields)) {
                const tag = parseInt(key, 10);
                for (const value of values) {
                    writer.uint32(tag);
                    writer["_push"]((val, buf, pos) => buf.set(val, pos), value.length, value);
                }
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMethodSettings_LongRunning();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.initial_poll_delay = duration_1.Duration.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 21) {
                        break;
                    }
                    message.poll_delay_multiplier = reader.float();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.max_poll_delay = duration_1.Duration.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.total_poll_timeout = duration_1.Duration.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            const startPos = reader.pos;
            reader.skipType(tag & 7);
            const buf = reader.buf.slice(startPos, reader.pos);
            if (message._unknownFields === undefined) {
                message._unknownFields = {};
            }
            const list = message._unknownFields[tag];
            if (list === undefined) {
                message._unknownFields[tag] = [buf];
            }
            else {
                list.push(buf);
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            initial_poll_delay: isSet(object.initial_poll_delay) ? duration_1.Duration.fromJSON(object.initial_poll_delay) : undefined,
            poll_delay_multiplier: isSet(object.poll_delay_multiplier) ? Number(object.poll_delay_multiplier) : undefined,
            max_poll_delay: isSet(object.max_poll_delay) ? duration_1.Duration.fromJSON(object.max_poll_delay) : undefined,
            total_poll_timeout: isSet(object.total_poll_timeout) ? duration_1.Duration.fromJSON(object.total_poll_timeout) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.initial_poll_delay !== undefined) {
            obj.initial_poll_delay = duration_1.Duration.toJSON(message.initial_poll_delay);
        }
        if (message.poll_delay_multiplier !== undefined && message.poll_delay_multiplier !== 0) {
            obj.poll_delay_multiplier = message.poll_delay_multiplier;
        }
        if (message.max_poll_delay !== undefined) {
            obj.max_poll_delay = duration_1.Duration.toJSON(message.max_poll_delay);
        }
        if (message.total_poll_timeout !== undefined) {
            obj.total_poll_timeout = duration_1.Duration.toJSON(message.total_poll_timeout);
        }
        return obj;
    },
};
exports.method_signature = {
    number: 1051,
    tag: 8410,
    repeated: true,
    packed: false,
    encode: (value) => {
        const encoded = [];
        for (const v of value) {
            const writer = minimal_1.default.Writer.create();
            writer.string(v);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        const values = [];
        for (const buffer of input) {
            const reader = minimal_1.default.Reader.create(buffer);
            values.push(reader.string());
        }
        return values;
    },
};
exports.default_host = {
    number: 1049,
    tag: 8394,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value !== undefined && value !== "") {
            const writer = minimal_1.default.Writer.create();
            writer.string(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        const reader = minimal_1.default.Reader.create(input[input.length - 1] ?? fail());
        return reader.string();
    },
};
exports.oauth_scopes = {
    number: 1050,
    tag: 8402,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        if (value !== undefined && value !== "") {
            const writer = minimal_1.default.Writer.create();
            writer.string(value);
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        const reader = minimal_1.default.Reader.create(input[input.length - 1] ?? fail());
        return reader.string();
    },
};
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
function fail(message) {
    throw new Error(message ?? "Failed");
}
