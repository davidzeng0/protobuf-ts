"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabelDescriptor = exports.labelDescriptor_ValueTypeToJSON = exports.labelDescriptor_ValueTypeFromJSON = exports.LabelDescriptor_ValueType = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
/** Value types that can be used as label values. */
var LabelDescriptor_ValueType;
(function (LabelDescriptor_ValueType) {
    /** STRING - A variable-length string. This is the default. */
    LabelDescriptor_ValueType[LabelDescriptor_ValueType["STRING"] = 0] = "STRING";
    /** BOOL - Boolean; true or false. */
    LabelDescriptor_ValueType[LabelDescriptor_ValueType["BOOL"] = 1] = "BOOL";
    /** INT64 - A 64-bit signed integer. */
    LabelDescriptor_ValueType[LabelDescriptor_ValueType["INT64"] = 2] = "INT64";
    LabelDescriptor_ValueType[LabelDescriptor_ValueType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(LabelDescriptor_ValueType = exports.LabelDescriptor_ValueType || (exports.LabelDescriptor_ValueType = {}));
function labelDescriptor_ValueTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "STRING":
            return LabelDescriptor_ValueType.STRING;
        case 1:
        case "BOOL":
            return LabelDescriptor_ValueType.BOOL;
        case 2:
        case "INT64":
            return LabelDescriptor_ValueType.INT64;
        case -1:
        case "UNRECOGNIZED":
        default:
            return LabelDescriptor_ValueType.UNRECOGNIZED;
    }
}
exports.labelDescriptor_ValueTypeFromJSON = labelDescriptor_ValueTypeFromJSON;
function labelDescriptor_ValueTypeToJSON(object) {
    switch (object) {
        case LabelDescriptor_ValueType.STRING:
            return "STRING";
        case LabelDescriptor_ValueType.BOOL:
            return "BOOL";
        case LabelDescriptor_ValueType.INT64:
            return "INT64";
        case LabelDescriptor_ValueType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.labelDescriptor_ValueTypeToJSON = labelDescriptor_ValueTypeToJSON;
function createBaseLabelDescriptor() {
    return {};
}
exports.LabelDescriptor = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== undefined && message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value_type !== undefined && message.value_type !== 0) {
            writer.uint32(16).int32(message.value_type);
        }
        if (message.description !== undefined && message.description !== "") {
            writer.uint32(26).string(message.description);
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
        const message = createBaseLabelDescriptor();
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
                    if (tag !== 16) {
                        break;
                    }
                    message.value_type = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.description = reader.string();
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
            key: isSet(object.key) ? String(object.key) : undefined,
            value_type: isSet(object.value_type) ? labelDescriptor_ValueTypeFromJSON(object.value_type) : undefined,
            description: isSet(object.description) ? String(object.description) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.key !== undefined && message.key !== "") {
            obj.key = message.key;
        }
        if (message.value_type !== undefined && message.value_type !== 0) {
            obj.value_type = labelDescriptor_ValueTypeToJSON(message.value_type);
        }
        if (message.description !== undefined && message.description !== "") {
            obj.description = message.description;
        }
        return obj;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
