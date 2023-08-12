"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomHttpPattern = exports.HttpRule = exports.Http = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
function createBaseHttp() {
    return {};
}
exports.Http = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.rules !== undefined && message.rules.length !== 0) {
            for (const v of message.rules) {
                exports.HttpRule.encode(v, writer.uint32(10).fork()).ldelim();
            }
        }
        if (message.fully_decode_reserved_expansion === true) {
            writer.uint32(16).bool(message.fully_decode_reserved_expansion);
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
        const message = createBaseHttp();
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
                    message.rules.push(exports.HttpRule.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.fully_decode_reserved_expansion = reader.bool();
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
            rules: Array.isArray(object?.rules) ? object.rules.map((e) => exports.HttpRule.fromJSON(e)) : undefined,
            fully_decode_reserved_expansion: isSet(object.fully_decode_reserved_expansion)
                ? Boolean(object.fully_decode_reserved_expansion)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.rules?.length) {
            obj.rules = message.rules.map((e) => exports.HttpRule.toJSON(e));
        }
        if (message.fully_decode_reserved_expansion === true) {
            obj.fully_decode_reserved_expansion = message.fully_decode_reserved_expansion;
        }
        return obj;
    },
};
function createBaseHttpRule() {
    return {};
}
exports.HttpRule = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.selector !== undefined && message.selector !== "") {
            writer.uint32(10).string(message.selector);
        }
        if (message.get !== undefined) {
            writer.uint32(18).string(message.get);
        }
        if (message.put !== undefined) {
            writer.uint32(26).string(message.put);
        }
        if (message.post !== undefined) {
            writer.uint32(34).string(message.post);
        }
        if (message.delete !== undefined) {
            writer.uint32(42).string(message.delete);
        }
        if (message.patch !== undefined) {
            writer.uint32(50).string(message.patch);
        }
        if (message.custom !== undefined) {
            exports.CustomHttpPattern.encode(message.custom, writer.uint32(66).fork()).ldelim();
        }
        if (message.body !== undefined && message.body !== "") {
            writer.uint32(58).string(message.body);
        }
        if (message.response_body !== undefined && message.response_body !== "") {
            writer.uint32(98).string(message.response_body);
        }
        if (message.additional_bindings !== undefined && message.additional_bindings.length !== 0) {
            for (const v of message.additional_bindings) {
                exports.HttpRule.encode(v, writer.uint32(90).fork()).ldelim();
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
        const message = createBaseHttpRule();
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
                    message.get = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.put = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.post = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.delete = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.patch = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.custom = exports.CustomHttpPattern.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.body = reader.string();
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.response_body = reader.string();
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    if (message.additional_bindings === undefined) {
                        message.additional_bindings = [];
                    }
                    message.additional_bindings.push(exports.HttpRule.decode(reader, reader.uint32()));
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
            get: isSet(object.get) ? String(object.get) : undefined,
            put: isSet(object.put) ? String(object.put) : undefined,
            post: isSet(object.post) ? String(object.post) : undefined,
            delete: isSet(object.delete) ? String(object.delete) : undefined,
            patch: isSet(object.patch) ? String(object.patch) : undefined,
            custom: isSet(object.custom) ? exports.CustomHttpPattern.fromJSON(object.custom) : undefined,
            body: isSet(object.body) ? String(object.body) : undefined,
            response_body: isSet(object.response_body) ? String(object.response_body) : undefined,
            additional_bindings: Array.isArray(object?.additional_bindings)
                ? object.additional_bindings.map((e) => exports.HttpRule.fromJSON(e))
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.selector !== undefined && message.selector !== "") {
            obj.selector = message.selector;
        }
        if (message.get !== undefined) {
            obj.get = message.get;
        }
        if (message.put !== undefined) {
            obj.put = message.put;
        }
        if (message.post !== undefined) {
            obj.post = message.post;
        }
        if (message.delete !== undefined) {
            obj.delete = message.delete;
        }
        if (message.patch !== undefined) {
            obj.patch = message.patch;
        }
        if (message.custom !== undefined) {
            obj.custom = exports.CustomHttpPattern.toJSON(message.custom);
        }
        if (message.body !== undefined && message.body !== "") {
            obj.body = message.body;
        }
        if (message.response_body !== undefined && message.response_body !== "") {
            obj.response_body = message.response_body;
        }
        if (message.additional_bindings?.length) {
            obj.additional_bindings = message.additional_bindings.map((e) => exports.HttpRule.toJSON(e));
        }
        return obj;
    },
};
function createBaseCustomHttpPattern() {
    return {};
}
exports.CustomHttpPattern = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.kind !== undefined && message.kind !== "") {
            writer.uint32(10).string(message.kind);
        }
        if (message.path !== undefined && message.path !== "") {
            writer.uint32(18).string(message.path);
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
        const message = createBaseCustomHttpPattern();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.kind = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.path = reader.string();
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
            kind: isSet(object.kind) ? String(object.kind) : undefined,
            path: isSet(object.path) ? String(object.path) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.kind !== undefined && message.kind !== "") {
            obj.kind = message.kind;
        }
        if (message.path !== undefined && message.path !== "") {
            obj.path = message.path;
        }
        return obj;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
