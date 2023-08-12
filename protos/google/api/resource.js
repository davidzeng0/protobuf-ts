"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resource = exports.resource_definition = exports.resource_reference = exports.ResourceReference = exports.ResourceDescriptor = exports.resourceDescriptor_StyleToJSON = exports.resourceDescriptor_StyleFromJSON = exports.ResourceDescriptor_Style = exports.resourceDescriptor_HistoryToJSON = exports.resourceDescriptor_HistoryFromJSON = exports.ResourceDescriptor_History = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
/**
 * A description of the historical or future-looking state of the
 * resource pattern.
 */
var ResourceDescriptor_History;
(function (ResourceDescriptor_History) {
    /** HISTORY_UNSPECIFIED - The "unset" value. */
    ResourceDescriptor_History[ResourceDescriptor_History["HISTORY_UNSPECIFIED"] = 0] = "HISTORY_UNSPECIFIED";
    /**
     * ORIGINALLY_SINGLE_PATTERN - The resource originally had one pattern and launched as such, and
     * additional patterns were added later.
     */
    ResourceDescriptor_History[ResourceDescriptor_History["ORIGINALLY_SINGLE_PATTERN"] = 1] = "ORIGINALLY_SINGLE_PATTERN";
    /**
     * FUTURE_MULTI_PATTERN - The resource has one pattern, but the API owner expects to add more
     * later. (This is the inverse of ORIGINALLY_SINGLE_PATTERN, and prevents
     * that from being necessary once there are multiple patterns.)
     */
    ResourceDescriptor_History[ResourceDescriptor_History["FUTURE_MULTI_PATTERN"] = 2] = "FUTURE_MULTI_PATTERN";
    ResourceDescriptor_History[ResourceDescriptor_History["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ResourceDescriptor_History = exports.ResourceDescriptor_History || (exports.ResourceDescriptor_History = {}));
function resourceDescriptor_HistoryFromJSON(object) {
    switch (object) {
        case 0:
        case "HISTORY_UNSPECIFIED":
            return ResourceDescriptor_History.HISTORY_UNSPECIFIED;
        case 1:
        case "ORIGINALLY_SINGLE_PATTERN":
            return ResourceDescriptor_History.ORIGINALLY_SINGLE_PATTERN;
        case 2:
        case "FUTURE_MULTI_PATTERN":
            return ResourceDescriptor_History.FUTURE_MULTI_PATTERN;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ResourceDescriptor_History.UNRECOGNIZED;
    }
}
exports.resourceDescriptor_HistoryFromJSON = resourceDescriptor_HistoryFromJSON;
function resourceDescriptor_HistoryToJSON(object) {
    switch (object) {
        case ResourceDescriptor_History.HISTORY_UNSPECIFIED:
            return "HISTORY_UNSPECIFIED";
        case ResourceDescriptor_History.ORIGINALLY_SINGLE_PATTERN:
            return "ORIGINALLY_SINGLE_PATTERN";
        case ResourceDescriptor_History.FUTURE_MULTI_PATTERN:
            return "FUTURE_MULTI_PATTERN";
        case ResourceDescriptor_History.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.resourceDescriptor_HistoryToJSON = resourceDescriptor_HistoryToJSON;
/** A flag representing a specific style that a resource claims to conform to. */
var ResourceDescriptor_Style;
(function (ResourceDescriptor_Style) {
    /** STYLE_UNSPECIFIED - The unspecified value. Do not use. */
    ResourceDescriptor_Style[ResourceDescriptor_Style["STYLE_UNSPECIFIED"] = 0] = "STYLE_UNSPECIFIED";
    /**
     * DECLARATIVE_FRIENDLY - This resource is intended to be "declarative-friendly".
     *
     * Declarative-friendly resources must be more strictly consistent, and
     * setting this to true communicates to tools that this resource should
     * adhere to declarative-friendly expectations.
     *
     * Note: This is used by the API linter (linter.aip.dev) to enable
     * additional checks.
     */
    ResourceDescriptor_Style[ResourceDescriptor_Style["DECLARATIVE_FRIENDLY"] = 1] = "DECLARATIVE_FRIENDLY";
    ResourceDescriptor_Style[ResourceDescriptor_Style["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ResourceDescriptor_Style = exports.ResourceDescriptor_Style || (exports.ResourceDescriptor_Style = {}));
function resourceDescriptor_StyleFromJSON(object) {
    switch (object) {
        case 0:
        case "STYLE_UNSPECIFIED":
            return ResourceDescriptor_Style.STYLE_UNSPECIFIED;
        case 1:
        case "DECLARATIVE_FRIENDLY":
            return ResourceDescriptor_Style.DECLARATIVE_FRIENDLY;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ResourceDescriptor_Style.UNRECOGNIZED;
    }
}
exports.resourceDescriptor_StyleFromJSON = resourceDescriptor_StyleFromJSON;
function resourceDescriptor_StyleToJSON(object) {
    switch (object) {
        case ResourceDescriptor_Style.STYLE_UNSPECIFIED:
            return "STYLE_UNSPECIFIED";
        case ResourceDescriptor_Style.DECLARATIVE_FRIENDLY:
            return "DECLARATIVE_FRIENDLY";
        case ResourceDescriptor_Style.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.resourceDescriptor_StyleToJSON = resourceDescriptor_StyleToJSON;
function createBaseResourceDescriptor() {
    return {};
}
exports.ResourceDescriptor = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.type !== undefined && message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        if (message.pattern !== undefined && message.pattern.length !== 0) {
            for (const v of message.pattern) {
                writer.uint32(18).string(v);
            }
        }
        if (message.name_field !== undefined && message.name_field !== "") {
            writer.uint32(26).string(message.name_field);
        }
        if (message.history !== undefined && message.history !== 0) {
            writer.uint32(32).int32(message.history);
        }
        if (message.plural !== undefined && message.plural !== "") {
            writer.uint32(42).string(message.plural);
        }
        if (message.singular !== undefined && message.singular !== "") {
            writer.uint32(50).string(message.singular);
        }
        if (message.style !== undefined && message.style.length !== 0) {
            writer.uint32(82).fork();
            for (const v of message.style) {
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
        const message = createBaseResourceDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.type = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    if (message.pattern === undefined) {
                        message.pattern = [];
                    }
                    message.pattern.push(reader.string());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.name_field = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.history = reader.int32();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.plural = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.singular = reader.string();
                    continue;
                case 10:
                    if (tag === 80) {
                        if (message.style === undefined) {
                            message.style = [];
                        }
                        message.style.push(reader.int32());
                        continue;
                    }
                    if (tag === 82) {
                        if (message.style === undefined) {
                            message.style = [];
                        }
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.style.push(reader.int32());
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
            type: isSet(object.type) ? String(object.type) : undefined,
            pattern: Array.isArray(object?.pattern) ? object.pattern.map((e) => String(e)) : undefined,
            name_field: isSet(object.name_field) ? String(object.name_field) : undefined,
            history: isSet(object.history) ? resourceDescriptor_HistoryFromJSON(object.history) : undefined,
            plural: isSet(object.plural) ? String(object.plural) : undefined,
            singular: isSet(object.singular) ? String(object.singular) : undefined,
            style: Array.isArray(object?.style)
                ? object.style.map((e) => resourceDescriptor_StyleFromJSON(e))
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.type !== undefined && message.type !== "") {
            obj.type = message.type;
        }
        if (message.pattern?.length) {
            obj.pattern = message.pattern;
        }
        if (message.name_field !== undefined && message.name_field !== "") {
            obj.name_field = message.name_field;
        }
        if (message.history !== undefined && message.history !== 0) {
            obj.history = resourceDescriptor_HistoryToJSON(message.history);
        }
        if (message.plural !== undefined && message.plural !== "") {
            obj.plural = message.plural;
        }
        if (message.singular !== undefined && message.singular !== "") {
            obj.singular = message.singular;
        }
        if (message.style?.length) {
            obj.style = message.style.map((e) => resourceDescriptor_StyleToJSON(e));
        }
        return obj;
    },
};
function createBaseResourceReference() {
    return {};
}
exports.ResourceReference = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.type !== undefined && message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        if (message.child_type !== undefined && message.child_type !== "") {
            writer.uint32(18).string(message.child_type);
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
        const message = createBaseResourceReference();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.type = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.child_type = reader.string();
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
            type: isSet(object.type) ? String(object.type) : undefined,
            child_type: isSet(object.child_type) ? String(object.child_type) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.type !== undefined && message.type !== "") {
            obj.type = message.type;
        }
        if (message.child_type !== undefined && message.child_type !== "") {
            obj.child_type = message.child_type;
        }
        return obj;
    },
};
exports.resource_reference = {
    number: 1055,
    tag: 8442,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        const writer = minimal_1.default.Writer.create();
        exports.ResourceReference.encode(value, writer.fork()).ldelim();
        encoded.push(writer.finish());
        return encoded;
    },
    decode: (tag, input) => {
        const reader = minimal_1.default.Reader.create(input[input.length - 1] ?? fail());
        return exports.ResourceReference.decode(reader, reader.uint32());
    },
};
exports.resource_definition = {
    number: 1053,
    tag: 8426,
    repeated: true,
    packed: false,
    encode: (value) => {
        const encoded = [];
        for (const v of value) {
            const writer = minimal_1.default.Writer.create();
            exports.ResourceDescriptor.encode(v, writer.fork()).ldelim();
            encoded.push(writer.finish());
        }
        return encoded;
    },
    decode: (tag, input) => {
        const values = [];
        for (const buffer of input) {
            const reader = minimal_1.default.Reader.create(buffer);
            values.push(exports.ResourceDescriptor.decode(reader, reader.uint32()));
        }
        return values;
    },
};
exports.resource = {
    number: 1053,
    tag: 8426,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        const writer = minimal_1.default.Writer.create();
        exports.ResourceDescriptor.encode(value, writer.fork()).ldelim();
        encoded.push(writer.finish());
        return encoded;
    },
    decode: (tag, input) => {
        const reader = minimal_1.default.Reader.create(input[input.length - 1] ?? fail());
        return exports.ResourceDescriptor.decode(reader, reader.uint32());
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
function fail(message) {
    throw new Error(message ?? "Failed");
}
