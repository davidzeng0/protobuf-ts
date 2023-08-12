"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListValue = exports.Value = exports.Struct_FieldsEntry = exports.Struct = exports.nullValueToJSON = exports.nullValueFromJSON = exports.NullValue = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
/**
 * `NullValue` is a singleton enumeration to represent the null value for the
 * `Value` type union.
 *
 * The JSON representation for `NullValue` is JSON `null`.
 */
var NullValue;
(function (NullValue) {
    /** NULL_VALUE - Null value. */
    NullValue[NullValue["NULL_VALUE"] = 0] = "NULL_VALUE";
    NullValue[NullValue["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(NullValue = exports.NullValue || (exports.NullValue = {}));
function nullValueFromJSON(object) {
    switch (object) {
        case 0:
        case "NULL_VALUE":
            return NullValue.NULL_VALUE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return NullValue.UNRECOGNIZED;
    }
}
exports.nullValueFromJSON = nullValueFromJSON;
function nullValueToJSON(object) {
    switch (object) {
        case NullValue.NULL_VALUE:
            return "NULL_VALUE";
        case NullValue.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.nullValueToJSON = nullValueToJSON;
function createBaseStruct() {
    return {};
}
exports.Struct = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        (message.fields || new Map()).forEach((value, key) => {
            if (value !== undefined) {
                exports.Struct_FieldsEntry.encode({ key: key, value }, writer.uint32(10).fork()).ldelim();
            }
        });
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
        const message = createBaseStruct();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    const entry1 = exports.Struct_FieldsEntry.decode(reader, reader.uint32());
                    if (entry1.value !== undefined) {
                        if (message.fields === undefined) {
                            message.fields = new Map();
                        }
                        message.fields.set(entry1.key, entry1.value);
                    }
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
            fields: isObject(object.fields)
                ? Object.entries(object.fields).reduce((acc, [key, value]) => {
                    acc.set(key, value);
                    return acc;
                }, new Map())
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.fields?.size) {
            obj.fields = {};
            message.fields.forEach((v, k) => {
                obj.fields[k] = v;
            });
        }
        return obj;
    },
    wrap(object) {
        const struct = createBaseStruct();
        if (object !== undefined) {
            Object.keys(object).forEach((key) => {
                struct.fields.set(key, object[key]);
            });
        }
        return struct;
    },
    unwrap(message) {
        const object = {};
        [...message.fields.keys()].forEach((key) => {
            object[key] = message.fields.get(key);
        });
        return object;
    },
};
function createBaseStruct_FieldsEntry() {
    return { key: "" };
}
exports.Struct_FieldsEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.Value.encode(exports.Value.wrap(message.value), writer.uint32(18).fork()).ldelim();
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
        const message = createBaseStruct_FieldsEntry();
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
                    message.value = exports.Value.unwrap(exports.Value.decode(reader, reader.uint32()));
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
        return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object?.value) ? object.value : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.value !== undefined) {
            obj.value = message.value;
        }
        return obj;
    },
};
function createBaseValue() {
    return {};
}
exports.Value = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.null_value !== undefined) {
            writer.uint32(8).int32(message.null_value);
        }
        if (message.number_value !== undefined) {
            writer.uint32(17).double(message.number_value);
        }
        if (message.string_value !== undefined) {
            writer.uint32(26).string(message.string_value);
        }
        if (message.bool_value !== undefined) {
            writer.uint32(32).bool(message.bool_value);
        }
        if (message.struct_value !== undefined) {
            exports.Struct.encode(exports.Struct.wrap(message.struct_value), writer.uint32(42).fork()).ldelim();
        }
        if (message.list_value !== undefined) {
            exports.ListValue.encode(exports.ListValue.wrap(message.list_value), writer.uint32(50).fork()).ldelim();
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
        const message = createBaseValue();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.null_value = reader.int32();
                    continue;
                case 2:
                    if (tag !== 17) {
                        break;
                    }
                    message.number_value = reader.double();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.string_value = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.bool_value = reader.bool();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.struct_value = exports.Struct.unwrap(exports.Struct.decode(reader, reader.uint32()));
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.list_value = exports.ListValue.unwrap(exports.ListValue.decode(reader, reader.uint32()));
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
            null_value: isSet(object.null_value) ? nullValueFromJSON(object.null_value) : undefined,
            number_value: isSet(object.number_value) ? Number(object.number_value) : undefined,
            string_value: isSet(object.string_value) ? String(object.string_value) : undefined,
            bool_value: isSet(object.bool_value) ? Boolean(object.bool_value) : undefined,
            struct_value: isObject(object.struct_value) ? object.struct_value : undefined,
            list_value: Array.isArray(object.list_value) ? [...object.list_value] : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.null_value !== undefined) {
            obj.null_value = nullValueToJSON(message.null_value);
        }
        if (message.number_value !== undefined) {
            obj.number_value = message.number_value;
        }
        if (message.string_value !== undefined) {
            obj.string_value = message.string_value;
        }
        if (message.bool_value !== undefined) {
            obj.bool_value = message.bool_value;
        }
        if (message.struct_value !== undefined) {
            obj.struct_value = message.struct_value;
        }
        if (message.list_value !== undefined) {
            obj.list_value = message.list_value;
        }
        return obj;
    },
    wrap(value) {
        const result = createBaseValue();
        if (value === null) {
            result.null_value = NullValue.NULL_VALUE;
        }
        else if (typeof value === "boolean") {
            result.bool_value = value;
        }
        else if (typeof value === "number") {
            result.number_value = value;
        }
        else if (typeof value === "string") {
            result.string_value = value;
        }
        else if (Array.isArray(value)) {
            result.list_value = value;
        }
        else if (typeof value === "object") {
            result.struct_value = value;
        }
        else if (typeof value !== "undefined") {
            throw new Error("Unsupported any value type: " + typeof value);
        }
        return result;
    },
    unwrap(message) {
        if (message.string_value !== undefined) {
            return message.string_value;
        }
        else if (message?.number_value !== undefined) {
            return message.number_value;
        }
        else if (message?.bool_value !== undefined) {
            return message.bool_value;
        }
        else if (message?.struct_value !== undefined) {
            return message.struct_value;
        }
        else if (message?.list_value !== undefined) {
            return message.list_value;
        }
        else if (message?.null_value !== undefined) {
            return null;
        }
        return undefined;
    },
};
function createBaseListValue() {
    return {};
}
exports.ListValue = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.values !== undefined && message.values.length !== 0) {
            for (const v of message.values) {
                exports.Value.encode(exports.Value.wrap(v), writer.uint32(10).fork()).ldelim();
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
        const message = createBaseListValue();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    if (message.values === undefined) {
                        message.values = [];
                    }
                    message.values.push(exports.Value.unwrap(exports.Value.decode(reader, reader.uint32())));
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
        return { values: Array.isArray(object?.values) ? [...object.values] : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.values?.length) {
            obj.values = message.values;
        }
        return obj;
    },
    wrap(array) {
        const result = createBaseListValue();
        result.values = array ?? [];
        return result;
    },
    unwrap(message) {
        if (message?.hasOwnProperty("values") && Array.isArray(message.values)) {
            return message.values;
        }
        else {
            return message;
        }
    },
};
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
