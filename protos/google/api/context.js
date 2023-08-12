"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextRule = exports.Context = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
function createBaseContext() {
    return {};
}
exports.Context = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.rules !== undefined && message.rules.length !== 0) {
            for (const v of message.rules) {
                exports.ContextRule.encode(v, writer.uint32(10).fork()).ldelim();
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
        const message = createBaseContext();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    if (message.rules === undefined) {
                        message.rules = [];
                    }
                    message.rules.push(exports.ContextRule.decode(reader, reader.uint32()));
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
        return { rules: Array.isArray(object?.rules) ? object.rules.map((e) => exports.ContextRule.fromJSON(e)) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.rules?.length) {
            obj.rules = message.rules.map((e) => exports.ContextRule.toJSON(e));
        }
        return obj;
    },
};
function createBaseContextRule() {
    return {};
}
exports.ContextRule = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.selector !== undefined && message.selector !== "") {
            writer.uint32(10).string(message.selector);
        }
        if (message.requested !== undefined && message.requested.length !== 0) {
            for (const v of message.requested) {
                writer.uint32(18).string(v);
            }
        }
        if (message.provided !== undefined && message.provided.length !== 0) {
            for (const v of message.provided) {
                writer.uint32(26).string(v);
            }
        }
        if (message.allowed_request_extensions !== undefined && message.allowed_request_extensions.length !== 0) {
            for (const v of message.allowed_request_extensions) {
                writer.uint32(34).string(v);
            }
        }
        if (message.allowed_response_extensions !== undefined && message.allowed_response_extensions.length !== 0) {
            for (const v of message.allowed_response_extensions) {
                writer.uint32(42).string(v);
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
        const message = createBaseContextRule();
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
                    if (message.requested === undefined) {
                        message.requested = [];
                    }
                    message.requested.push(reader.string());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    if (message.provided === undefined) {
                        message.provided = [];
                    }
                    message.provided.push(reader.string());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    if (message.allowed_request_extensions === undefined) {
                        message.allowed_request_extensions = [];
                    }
                    message.allowed_request_extensions.push(reader.string());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    if (message.allowed_response_extensions === undefined) {
                        message.allowed_response_extensions = [];
                    }
                    message.allowed_response_extensions.push(reader.string());
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
            requested: Array.isArray(object?.requested) ? object.requested.map((e) => String(e)) : undefined,
            provided: Array.isArray(object?.provided) ? object.provided.map((e) => String(e)) : undefined,
            allowed_request_extensions: Array.isArray(object?.allowed_request_extensions)
                ? object.allowed_request_extensions.map((e) => String(e))
                : undefined,
            allowed_response_extensions: Array.isArray(object?.allowed_response_extensions)
                ? object.allowed_response_extensions.map((e) => String(e))
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.selector !== undefined && message.selector !== "") {
            obj.selector = message.selector;
        }
        if (message.requested?.length) {
            obj.requested = message.requested;
        }
        if (message.provided?.length) {
            obj.provided = message.provided;
        }
        if (message.allowed_request_extensions?.length) {
            obj.allowed_request_extensions = message.allowed_request_extensions;
        }
        if (message.allowed_response_extensions?.length) {
            obj.allowed_response_extensions = message.allowed_response_extensions;
        }
        return obj;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
