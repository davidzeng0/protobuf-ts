"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Advice = exports.ConfigChange = exports.changeTypeToJSON = exports.changeTypeFromJSON = exports.ChangeType = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
/**
 * Classifies set of possible modifications to an object in the service
 * configuration.
 */
var ChangeType;
(function (ChangeType) {
    /** CHANGE_TYPE_UNSPECIFIED - No value was provided. */
    ChangeType[ChangeType["CHANGE_TYPE_UNSPECIFIED"] = 0] = "CHANGE_TYPE_UNSPECIFIED";
    /**
     * ADDED - The changed object exists in the 'new' service configuration, but not
     * in the 'old' service configuration.
     */
    ChangeType[ChangeType["ADDED"] = 1] = "ADDED";
    /**
     * REMOVED - The changed object exists in the 'old' service configuration, but not
     * in the 'new' service configuration.
     */
    ChangeType[ChangeType["REMOVED"] = 2] = "REMOVED";
    /**
     * MODIFIED - The changed object exists in both service configurations, but its value
     * is different.
     */
    ChangeType[ChangeType["MODIFIED"] = 3] = "MODIFIED";
    ChangeType[ChangeType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ChangeType = exports.ChangeType || (exports.ChangeType = {}));
function changeTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "CHANGE_TYPE_UNSPECIFIED":
            return ChangeType.CHANGE_TYPE_UNSPECIFIED;
        case 1:
        case "ADDED":
            return ChangeType.ADDED;
        case 2:
        case "REMOVED":
            return ChangeType.REMOVED;
        case 3:
        case "MODIFIED":
            return ChangeType.MODIFIED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ChangeType.UNRECOGNIZED;
    }
}
exports.changeTypeFromJSON = changeTypeFromJSON;
function changeTypeToJSON(object) {
    switch (object) {
        case ChangeType.CHANGE_TYPE_UNSPECIFIED:
            return "CHANGE_TYPE_UNSPECIFIED";
        case ChangeType.ADDED:
            return "ADDED";
        case ChangeType.REMOVED:
            return "REMOVED";
        case ChangeType.MODIFIED:
            return "MODIFIED";
        case ChangeType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.changeTypeToJSON = changeTypeToJSON;
function createBaseConfigChange() {
    return {};
}
exports.ConfigChange = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.element !== undefined && message.element !== "") {
            writer.uint32(10).string(message.element);
        }
        if (message.old_value !== undefined && message.old_value !== "") {
            writer.uint32(18).string(message.old_value);
        }
        if (message.new_value !== undefined && message.new_value !== "") {
            writer.uint32(26).string(message.new_value);
        }
        if (message.change_type !== undefined && message.change_type !== 0) {
            writer.uint32(32).int32(message.change_type);
        }
        if (message.advices !== undefined && message.advices.length !== 0) {
            for (const v of message.advices) {
                exports.Advice.encode(v, writer.uint32(42).fork()).ldelim();
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
        const message = createBaseConfigChange();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.element = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.old_value = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.new_value = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.change_type = reader.int32();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    if (message.advices === undefined) {
                        message.advices = [];
                    }
                    message.advices.push(exports.Advice.decode(reader, reader.uint32()));
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
            element: isSet(object.element) ? String(object.element) : undefined,
            old_value: isSet(object.old_value) ? String(object.old_value) : undefined,
            new_value: isSet(object.new_value) ? String(object.new_value) : undefined,
            change_type: isSet(object.change_type) ? changeTypeFromJSON(object.change_type) : undefined,
            advices: Array.isArray(object?.advices) ? object.advices.map((e) => exports.Advice.fromJSON(e)) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.element !== undefined && message.element !== "") {
            obj.element = message.element;
        }
        if (message.old_value !== undefined && message.old_value !== "") {
            obj.old_value = message.old_value;
        }
        if (message.new_value !== undefined && message.new_value !== "") {
            obj.new_value = message.new_value;
        }
        if (message.change_type !== undefined && message.change_type !== 0) {
            obj.change_type = changeTypeToJSON(message.change_type);
        }
        if (message.advices?.length) {
            obj.advices = message.advices.map((e) => exports.Advice.toJSON(e));
        }
        return obj;
    },
};
function createBaseAdvice() {
    return {};
}
exports.Advice = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.description !== undefined && message.description !== "") {
            writer.uint32(18).string(message.description);
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
        const message = createBaseAdvice();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 18) {
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
        return { description: isSet(object.description) ? String(object.description) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.description !== undefined && message.description !== "") {
            obj.description = message.description;
        }
        return obj;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
