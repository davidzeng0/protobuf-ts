"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property = exports.ProjectProperties = exports.property_PropertyTypeToNumber = exports.property_PropertyTypeToJSON = exports.property_PropertyTypeFromJSON = exports.Property_PropertyType = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
/** Supported data type of the property values */
var Property_PropertyType;
(function (Property_PropertyType) {
    /** UNSPECIFIED - The type is unspecified, and will result in an error. */
    Property_PropertyType["UNSPECIFIED"] = "UNSPECIFIED";
    /** INT64 - The type is `int64`. */
    Property_PropertyType["INT64"] = "INT64";
    /** BOOL - The type is `bool`. */
    Property_PropertyType["BOOL"] = "BOOL";
    /** STRING - The type is `string`. */
    Property_PropertyType["STRING"] = "STRING";
    /** DOUBLE - The type is 'double'. */
    Property_PropertyType["DOUBLE"] = "DOUBLE";
    Property_PropertyType["UNRECOGNIZED"] = "UNRECOGNIZED";
})(Property_PropertyType || (exports.Property_PropertyType = Property_PropertyType = {}));
function property_PropertyTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "UNSPECIFIED":
            return Property_PropertyType.UNSPECIFIED;
        case 1:
        case "INT64":
            return Property_PropertyType.INT64;
        case 2:
        case "BOOL":
            return Property_PropertyType.BOOL;
        case 3:
        case "STRING":
            return Property_PropertyType.STRING;
        case 4:
        case "DOUBLE":
            return Property_PropertyType.DOUBLE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Property_PropertyType.UNRECOGNIZED;
    }
}
exports.property_PropertyTypeFromJSON = property_PropertyTypeFromJSON;
function property_PropertyTypeToJSON(object) {
    switch (object) {
        case Property_PropertyType.UNSPECIFIED:
            return "UNSPECIFIED";
        case Property_PropertyType.INT64:
            return "INT64";
        case Property_PropertyType.BOOL:
            return "BOOL";
        case Property_PropertyType.STRING:
            return "STRING";
        case Property_PropertyType.DOUBLE:
            return "DOUBLE";
        case Property_PropertyType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.property_PropertyTypeToJSON = property_PropertyTypeToJSON;
function property_PropertyTypeToNumber(object) {
    switch (object) {
        case Property_PropertyType.UNSPECIFIED:
            return 0;
        case Property_PropertyType.INT64:
            return 1;
        case Property_PropertyType.BOOL:
            return 2;
        case Property_PropertyType.STRING:
            return 3;
        case Property_PropertyType.DOUBLE:
            return 4;
        case Property_PropertyType.UNRECOGNIZED:
        default:
            return -1;
    }
}
exports.property_PropertyTypeToNumber = property_PropertyTypeToNumber;
function createBaseProjectProperties() {
    return {};
}
exports.ProjectProperties = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.properties !== undefined && message.properties.length !== 0) {
            for (const v of message.properties) {
                exports.Property.encode(v, writer.uint32(10).fork()).ldelim();
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
        const message = createBaseProjectProperties();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    if (message.properties === undefined) {
                        message.properties = [];
                    }
                    message.properties.push(exports.Property.decode(reader, reader.uint32()));
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
            properties: Array.isArray(object?.properties)
                ? object.properties.map((e) => exports.Property.fromJSON(e))
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.properties?.length) {
            obj.properties = message.properties.map((e) => exports.Property.toJSON(e));
        }
        return obj;
    },
};
function createBaseProperty() {
    return {};
}
exports.Property = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== undefined && message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.type !== undefined && message.type !== Property_PropertyType.UNSPECIFIED) {
            writer.uint32(16).int32(property_PropertyTypeToNumber(message.type));
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
        const message = createBaseProperty();
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
                    message.type = property_PropertyTypeFromJSON(reader.int32());
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
            name: isSet(object.name) ? String(object.name) : undefined,
            type: isSet(object.type) ? property_PropertyTypeFromJSON(object.type) : undefined,
            description: isSet(object.description) ? String(object.description) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== undefined && message.name !== "") {
            obj.name = message.name;
        }
        if (message.type !== undefined && message.type !== Property_PropertyType.UNSPECIFIED) {
            obj.type = property_PropertyTypeToJSON(message.type);
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
