"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Option = exports.EnumValue = exports.Enum = exports.Field = exports.Type = exports.field_CardinalityToJSON = exports.field_CardinalityFromJSON = exports.Field_Cardinality = exports.field_KindToJSON = exports.field_KindFromJSON = exports.Field_Kind = exports.syntaxToJSON = exports.syntaxFromJSON = exports.Syntax = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const any_1 = require("./any");
const source_context_1 = require("./source_context");
/** The syntax in which a protocol buffer element is defined. */
var Syntax;
(function (Syntax) {
    /** SYNTAX_PROTO2 - Syntax `proto2`. */
    Syntax[Syntax["SYNTAX_PROTO2"] = 0] = "SYNTAX_PROTO2";
    /** SYNTAX_PROTO3 - Syntax `proto3`. */
    Syntax[Syntax["SYNTAX_PROTO3"] = 1] = "SYNTAX_PROTO3";
    /** SYNTAX_EDITIONS - Syntax `editions`. */
    Syntax[Syntax["SYNTAX_EDITIONS"] = 2] = "SYNTAX_EDITIONS";
    Syntax[Syntax["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Syntax || (exports.Syntax = Syntax = {}));
function syntaxFromJSON(object) {
    switch (object) {
        case 0:
        case "SYNTAX_PROTO2":
            return Syntax.SYNTAX_PROTO2;
        case 1:
        case "SYNTAX_PROTO3":
            return Syntax.SYNTAX_PROTO3;
        case 2:
        case "SYNTAX_EDITIONS":
            return Syntax.SYNTAX_EDITIONS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Syntax.UNRECOGNIZED;
    }
}
exports.syntaxFromJSON = syntaxFromJSON;
function syntaxToJSON(object) {
    switch (object) {
        case Syntax.SYNTAX_PROTO2:
            return "SYNTAX_PROTO2";
        case Syntax.SYNTAX_PROTO3:
            return "SYNTAX_PROTO3";
        case Syntax.SYNTAX_EDITIONS:
            return "SYNTAX_EDITIONS";
        case Syntax.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.syntaxToJSON = syntaxToJSON;
/** Basic field types. */
var Field_Kind;
(function (Field_Kind) {
    /** TYPE_UNKNOWN - Field type unknown. */
    Field_Kind[Field_Kind["TYPE_UNKNOWN"] = 0] = "TYPE_UNKNOWN";
    /** TYPE_DOUBLE - Field type double. */
    Field_Kind[Field_Kind["TYPE_DOUBLE"] = 1] = "TYPE_DOUBLE";
    /** TYPE_FLOAT - Field type float. */
    Field_Kind[Field_Kind["TYPE_FLOAT"] = 2] = "TYPE_FLOAT";
    /** TYPE_INT64 - Field type int64. */
    Field_Kind[Field_Kind["TYPE_INT64"] = 3] = "TYPE_INT64";
    /** TYPE_UINT64 - Field type uint64. */
    Field_Kind[Field_Kind["TYPE_UINT64"] = 4] = "TYPE_UINT64";
    /** TYPE_INT32 - Field type int32. */
    Field_Kind[Field_Kind["TYPE_INT32"] = 5] = "TYPE_INT32";
    /** TYPE_FIXED64 - Field type fixed64. */
    Field_Kind[Field_Kind["TYPE_FIXED64"] = 6] = "TYPE_FIXED64";
    /** TYPE_FIXED32 - Field type fixed32. */
    Field_Kind[Field_Kind["TYPE_FIXED32"] = 7] = "TYPE_FIXED32";
    /** TYPE_BOOL - Field type bool. */
    Field_Kind[Field_Kind["TYPE_BOOL"] = 8] = "TYPE_BOOL";
    /** TYPE_STRING - Field type string. */
    Field_Kind[Field_Kind["TYPE_STRING"] = 9] = "TYPE_STRING";
    /** TYPE_GROUP - Field type group. Proto2 syntax only, and deprecated. */
    Field_Kind[Field_Kind["TYPE_GROUP"] = 10] = "TYPE_GROUP";
    /** TYPE_MESSAGE - Field type message. */
    Field_Kind[Field_Kind["TYPE_MESSAGE"] = 11] = "TYPE_MESSAGE";
    /** TYPE_BYTES - Field type bytes. */
    Field_Kind[Field_Kind["TYPE_BYTES"] = 12] = "TYPE_BYTES";
    /** TYPE_UINT32 - Field type uint32. */
    Field_Kind[Field_Kind["TYPE_UINT32"] = 13] = "TYPE_UINT32";
    /** TYPE_ENUM - Field type enum. */
    Field_Kind[Field_Kind["TYPE_ENUM"] = 14] = "TYPE_ENUM";
    /** TYPE_SFIXED32 - Field type sfixed32. */
    Field_Kind[Field_Kind["TYPE_SFIXED32"] = 15] = "TYPE_SFIXED32";
    /** TYPE_SFIXED64 - Field type sfixed64. */
    Field_Kind[Field_Kind["TYPE_SFIXED64"] = 16] = "TYPE_SFIXED64";
    /** TYPE_SINT32 - Field type sint32. */
    Field_Kind[Field_Kind["TYPE_SINT32"] = 17] = "TYPE_SINT32";
    /** TYPE_SINT64 - Field type sint64. */
    Field_Kind[Field_Kind["TYPE_SINT64"] = 18] = "TYPE_SINT64";
    Field_Kind[Field_Kind["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Field_Kind || (exports.Field_Kind = Field_Kind = {}));
function field_KindFromJSON(object) {
    switch (object) {
        case 0:
        case "TYPE_UNKNOWN":
            return Field_Kind.TYPE_UNKNOWN;
        case 1:
        case "TYPE_DOUBLE":
            return Field_Kind.TYPE_DOUBLE;
        case 2:
        case "TYPE_FLOAT":
            return Field_Kind.TYPE_FLOAT;
        case 3:
        case "TYPE_INT64":
            return Field_Kind.TYPE_INT64;
        case 4:
        case "TYPE_UINT64":
            return Field_Kind.TYPE_UINT64;
        case 5:
        case "TYPE_INT32":
            return Field_Kind.TYPE_INT32;
        case 6:
        case "TYPE_FIXED64":
            return Field_Kind.TYPE_FIXED64;
        case 7:
        case "TYPE_FIXED32":
            return Field_Kind.TYPE_FIXED32;
        case 8:
        case "TYPE_BOOL":
            return Field_Kind.TYPE_BOOL;
        case 9:
        case "TYPE_STRING":
            return Field_Kind.TYPE_STRING;
        case 10:
        case "TYPE_GROUP":
            return Field_Kind.TYPE_GROUP;
        case 11:
        case "TYPE_MESSAGE":
            return Field_Kind.TYPE_MESSAGE;
        case 12:
        case "TYPE_BYTES":
            return Field_Kind.TYPE_BYTES;
        case 13:
        case "TYPE_UINT32":
            return Field_Kind.TYPE_UINT32;
        case 14:
        case "TYPE_ENUM":
            return Field_Kind.TYPE_ENUM;
        case 15:
        case "TYPE_SFIXED32":
            return Field_Kind.TYPE_SFIXED32;
        case 16:
        case "TYPE_SFIXED64":
            return Field_Kind.TYPE_SFIXED64;
        case 17:
        case "TYPE_SINT32":
            return Field_Kind.TYPE_SINT32;
        case 18:
        case "TYPE_SINT64":
            return Field_Kind.TYPE_SINT64;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Field_Kind.UNRECOGNIZED;
    }
}
exports.field_KindFromJSON = field_KindFromJSON;
function field_KindToJSON(object) {
    switch (object) {
        case Field_Kind.TYPE_UNKNOWN:
            return "TYPE_UNKNOWN";
        case Field_Kind.TYPE_DOUBLE:
            return "TYPE_DOUBLE";
        case Field_Kind.TYPE_FLOAT:
            return "TYPE_FLOAT";
        case Field_Kind.TYPE_INT64:
            return "TYPE_INT64";
        case Field_Kind.TYPE_UINT64:
            return "TYPE_UINT64";
        case Field_Kind.TYPE_INT32:
            return "TYPE_INT32";
        case Field_Kind.TYPE_FIXED64:
            return "TYPE_FIXED64";
        case Field_Kind.TYPE_FIXED32:
            return "TYPE_FIXED32";
        case Field_Kind.TYPE_BOOL:
            return "TYPE_BOOL";
        case Field_Kind.TYPE_STRING:
            return "TYPE_STRING";
        case Field_Kind.TYPE_GROUP:
            return "TYPE_GROUP";
        case Field_Kind.TYPE_MESSAGE:
            return "TYPE_MESSAGE";
        case Field_Kind.TYPE_BYTES:
            return "TYPE_BYTES";
        case Field_Kind.TYPE_UINT32:
            return "TYPE_UINT32";
        case Field_Kind.TYPE_ENUM:
            return "TYPE_ENUM";
        case Field_Kind.TYPE_SFIXED32:
            return "TYPE_SFIXED32";
        case Field_Kind.TYPE_SFIXED64:
            return "TYPE_SFIXED64";
        case Field_Kind.TYPE_SINT32:
            return "TYPE_SINT32";
        case Field_Kind.TYPE_SINT64:
            return "TYPE_SINT64";
        case Field_Kind.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.field_KindToJSON = field_KindToJSON;
/** Whether a field is optional, required, or repeated. */
var Field_Cardinality;
(function (Field_Cardinality) {
    /** CARDINALITY_UNKNOWN - For fields with unknown cardinality. */
    Field_Cardinality[Field_Cardinality["CARDINALITY_UNKNOWN"] = 0] = "CARDINALITY_UNKNOWN";
    /** CARDINALITY_OPTIONAL - For optional fields. */
    Field_Cardinality[Field_Cardinality["CARDINALITY_OPTIONAL"] = 1] = "CARDINALITY_OPTIONAL";
    /** CARDINALITY_REQUIRED - For required fields. Proto2 syntax only. */
    Field_Cardinality[Field_Cardinality["CARDINALITY_REQUIRED"] = 2] = "CARDINALITY_REQUIRED";
    /** CARDINALITY_REPEATED - For repeated fields. */
    Field_Cardinality[Field_Cardinality["CARDINALITY_REPEATED"] = 3] = "CARDINALITY_REPEATED";
    Field_Cardinality[Field_Cardinality["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Field_Cardinality || (exports.Field_Cardinality = Field_Cardinality = {}));
function field_CardinalityFromJSON(object) {
    switch (object) {
        case 0:
        case "CARDINALITY_UNKNOWN":
            return Field_Cardinality.CARDINALITY_UNKNOWN;
        case 1:
        case "CARDINALITY_OPTIONAL":
            return Field_Cardinality.CARDINALITY_OPTIONAL;
        case 2:
        case "CARDINALITY_REQUIRED":
            return Field_Cardinality.CARDINALITY_REQUIRED;
        case 3:
        case "CARDINALITY_REPEATED":
            return Field_Cardinality.CARDINALITY_REPEATED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Field_Cardinality.UNRECOGNIZED;
    }
}
exports.field_CardinalityFromJSON = field_CardinalityFromJSON;
function field_CardinalityToJSON(object) {
    switch (object) {
        case Field_Cardinality.CARDINALITY_UNKNOWN:
            return "CARDINALITY_UNKNOWN";
        case Field_Cardinality.CARDINALITY_OPTIONAL:
            return "CARDINALITY_OPTIONAL";
        case Field_Cardinality.CARDINALITY_REQUIRED:
            return "CARDINALITY_REQUIRED";
        case Field_Cardinality.CARDINALITY_REPEATED:
            return "CARDINALITY_REPEATED";
        case Field_Cardinality.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.field_CardinalityToJSON = field_CardinalityToJSON;
function createBaseType() {
    return {};
}
exports.Type = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== undefined && message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.fields !== undefined && message.fields.length !== 0) {
            for (const v of message.fields) {
                exports.Field.encode(v, writer.uint32(18).fork()).ldelim();
            }
        }
        if (message.oneofs !== undefined && message.oneofs.length !== 0) {
            for (const v of message.oneofs) {
                writer.uint32(26).string(v);
            }
        }
        if (message.options !== undefined && message.options.length !== 0) {
            for (const v of message.options) {
                exports.Option.encode(v, writer.uint32(34).fork()).ldelim();
            }
        }
        if (message.source_context !== undefined) {
            source_context_1.SourceContext.encode(message.source_context, writer.uint32(42).fork()).ldelim();
        }
        if (message.syntax !== undefined && message.syntax !== 0) {
            writer.uint32(48).int32(message.syntax);
        }
        if (message.edition !== undefined && message.edition !== "") {
            writer.uint32(58).string(message.edition);
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
        const message = createBaseType();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    if (message.fields === undefined) {
                        message.fields = [];
                    }
                    message.fields.push(exports.Field.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    if (message.oneofs === undefined) {
                        message.oneofs = [];
                    }
                    message.oneofs.push(reader.string());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    if (message.options === undefined) {
                        message.options = [];
                    }
                    message.options.push(exports.Option.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.source_context = source_context_1.SourceContext.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.syntax = reader.int32();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.edition = reader.string();
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
            name: isSet(object.name) ? String(object.name) : undefined,
            fields: Array.isArray(object?.fields) ? object.fields.map((e) => exports.Field.fromJSON(e)) : undefined,
            oneofs: Array.isArray(object?.oneofs) ? object.oneofs.map((e) => String(e)) : undefined,
            options: Array.isArray(object?.options) ? object.options.map((e) => exports.Option.fromJSON(e)) : undefined,
            source_context: isSet(object.source_context) ? source_context_1.SourceContext.fromJSON(object.source_context) : undefined,
            syntax: isSet(object.syntax) ? syntaxFromJSON(object.syntax) : undefined,
            edition: isSet(object.edition) ? String(object.edition) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== undefined && message.name !== "") {
            obj.name = message.name;
        }
        if (message.fields?.length) {
            obj.fields = message.fields.map((e) => exports.Field.toJSON(e));
        }
        if (message.oneofs?.length) {
            obj.oneofs = message.oneofs;
        }
        if (message.options?.length) {
            obj.options = message.options.map((e) => exports.Option.toJSON(e));
        }
        if (message.source_context !== undefined) {
            obj.source_context = source_context_1.SourceContext.toJSON(message.source_context);
        }
        if (message.syntax !== undefined && message.syntax !== 0) {
            obj.syntax = syntaxToJSON(message.syntax);
        }
        if (message.edition !== undefined && message.edition !== "") {
            obj.edition = message.edition;
        }
        return obj;
    },
};
function createBaseField() {
    return {};
}
exports.Field = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.kind !== undefined && message.kind !== 0) {
            writer.uint32(8).int32(message.kind);
        }
        if (message.cardinality !== undefined && message.cardinality !== 0) {
            writer.uint32(16).int32(message.cardinality);
        }
        if (message.number !== undefined && message.number !== 0) {
            writer.uint32(24).int32(message.number);
        }
        if (message.name !== undefined && message.name !== "") {
            writer.uint32(34).string(message.name);
        }
        if (message.type_url !== undefined && message.type_url !== "") {
            writer.uint32(50).string(message.type_url);
        }
        if (message.oneof_index !== undefined && message.oneof_index !== 0) {
            writer.uint32(56).int32(message.oneof_index);
        }
        if (message.packed === true) {
            writer.uint32(64).bool(message.packed);
        }
        if (message.options !== undefined && message.options.length !== 0) {
            for (const v of message.options) {
                exports.Option.encode(v, writer.uint32(74).fork()).ldelim();
            }
        }
        if (message.json_name !== undefined && message.json_name !== "") {
            writer.uint32(82).string(message.json_name);
        }
        if (message.default_value !== undefined && message.default_value !== "") {
            writer.uint32(90).string(message.default_value);
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
        const message = createBaseField();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.kind = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.cardinality = reader.int32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.number = reader.int32();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.type_url = reader.string();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.oneof_index = reader.int32();
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.packed = reader.bool();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    if (message.options === undefined) {
                        message.options = [];
                    }
                    message.options.push(exports.Option.decode(reader, reader.uint32()));
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.json_name = reader.string();
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.default_value = reader.string();
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
            kind: isSet(object.kind) ? field_KindFromJSON(object.kind) : undefined,
            cardinality: isSet(object.cardinality) ? field_CardinalityFromJSON(object.cardinality) : undefined,
            number: isSet(object.number) ? Number(object.number) : undefined,
            name: isSet(object.name) ? String(object.name) : undefined,
            type_url: isSet(object.type_url) ? String(object.type_url) : undefined,
            oneof_index: isSet(object.oneof_index) ? Number(object.oneof_index) : undefined,
            packed: isSet(object.packed) ? Boolean(object.packed) : undefined,
            options: Array.isArray(object?.options) ? object.options.map((e) => exports.Option.fromJSON(e)) : undefined,
            json_name: isSet(object.json_name) ? String(object.json_name) : undefined,
            default_value: isSet(object.default_value) ? String(object.default_value) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.kind !== undefined && message.kind !== 0) {
            obj.kind = field_KindToJSON(message.kind);
        }
        if (message.cardinality !== undefined && message.cardinality !== 0) {
            obj.cardinality = field_CardinalityToJSON(message.cardinality);
        }
        if (message.number !== undefined && message.number !== 0) {
            obj.number = Math.round(message.number);
        }
        if (message.name !== undefined && message.name !== "") {
            obj.name = message.name;
        }
        if (message.type_url !== undefined && message.type_url !== "") {
            obj.type_url = message.type_url;
        }
        if (message.oneof_index !== undefined && message.oneof_index !== 0) {
            obj.oneof_index = Math.round(message.oneof_index);
        }
        if (message.packed === true) {
            obj.packed = message.packed;
        }
        if (message.options?.length) {
            obj.options = message.options.map((e) => exports.Option.toJSON(e));
        }
        if (message.json_name !== undefined && message.json_name !== "") {
            obj.json_name = message.json_name;
        }
        if (message.default_value !== undefined && message.default_value !== "") {
            obj.default_value = message.default_value;
        }
        return obj;
    },
};
function createBaseEnum() {
    return {};
}
exports.Enum = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== undefined && message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.enumvalue !== undefined && message.enumvalue.length !== 0) {
            for (const v of message.enumvalue) {
                exports.EnumValue.encode(v, writer.uint32(18).fork()).ldelim();
            }
        }
        if (message.options !== undefined && message.options.length !== 0) {
            for (const v of message.options) {
                exports.Option.encode(v, writer.uint32(26).fork()).ldelim();
            }
        }
        if (message.source_context !== undefined) {
            source_context_1.SourceContext.encode(message.source_context, writer.uint32(34).fork()).ldelim();
        }
        if (message.syntax !== undefined && message.syntax !== 0) {
            writer.uint32(40).int32(message.syntax);
        }
        if (message.edition !== undefined && message.edition !== "") {
            writer.uint32(50).string(message.edition);
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
        const message = createBaseEnum();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    if (message.enumvalue === undefined) {
                        message.enumvalue = [];
                    }
                    message.enumvalue.push(exports.EnumValue.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    if (message.options === undefined) {
                        message.options = [];
                    }
                    message.options.push(exports.Option.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.source_context = source_context_1.SourceContext.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.syntax = reader.int32();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.edition = reader.string();
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
            name: isSet(object.name) ? String(object.name) : undefined,
            enumvalue: Array.isArray(object?.enumvalue) ? object.enumvalue.map((e) => exports.EnumValue.fromJSON(e)) : undefined,
            options: Array.isArray(object?.options) ? object.options.map((e) => exports.Option.fromJSON(e)) : undefined,
            source_context: isSet(object.source_context) ? source_context_1.SourceContext.fromJSON(object.source_context) : undefined,
            syntax: isSet(object.syntax) ? syntaxFromJSON(object.syntax) : undefined,
            edition: isSet(object.edition) ? String(object.edition) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== undefined && message.name !== "") {
            obj.name = message.name;
        }
        if (message.enumvalue?.length) {
            obj.enumvalue = message.enumvalue.map((e) => exports.EnumValue.toJSON(e));
        }
        if (message.options?.length) {
            obj.options = message.options.map((e) => exports.Option.toJSON(e));
        }
        if (message.source_context !== undefined) {
            obj.source_context = source_context_1.SourceContext.toJSON(message.source_context);
        }
        if (message.syntax !== undefined && message.syntax !== 0) {
            obj.syntax = syntaxToJSON(message.syntax);
        }
        if (message.edition !== undefined && message.edition !== "") {
            obj.edition = message.edition;
        }
        return obj;
    },
};
function createBaseEnumValue() {
    return {};
}
exports.EnumValue = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== undefined && message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.number !== undefined && message.number !== 0) {
            writer.uint32(16).int32(message.number);
        }
        if (message.options !== undefined && message.options.length !== 0) {
            for (const v of message.options) {
                exports.Option.encode(v, writer.uint32(26).fork()).ldelim();
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
        const message = createBaseEnumValue();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.number = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    if (message.options === undefined) {
                        message.options = [];
                    }
                    message.options.push(exports.Option.decode(reader, reader.uint32()));
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
            name: isSet(object.name) ? String(object.name) : undefined,
            number: isSet(object.number) ? Number(object.number) : undefined,
            options: Array.isArray(object?.options) ? object.options.map((e) => exports.Option.fromJSON(e)) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== undefined && message.name !== "") {
            obj.name = message.name;
        }
        if (message.number !== undefined && message.number !== 0) {
            obj.number = Math.round(message.number);
        }
        if (message.options?.length) {
            obj.options = message.options.map((e) => exports.Option.toJSON(e));
        }
        return obj;
    },
};
function createBaseOption() {
    return {};
}
exports.Option = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== undefined && message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.value !== undefined) {
            any_1.Any.encode(message.value, writer.uint32(18).fork()).ldelim();
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
        const message = createBaseOption();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value = any_1.Any.decode(reader, reader.uint32());
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
            name: isSet(object.name) ? String(object.name) : undefined,
            value: isSet(object.value) ? any_1.Any.fromJSON(object.value) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== undefined && message.name !== "") {
            obj.name = message.name;
        }
        if (message.value !== undefined) {
            obj.value = any_1.Any.toJSON(message.value);
        }
        return obj;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
