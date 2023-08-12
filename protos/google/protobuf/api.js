"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mixin = exports.Method = exports.Api = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const source_context_1 = require("./source_context");
const type_1 = require("./type");
function createBaseApi() {
    return {};
}
exports.Api = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== undefined && message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.methods !== undefined && message.methods.length !== 0) {
            for (const v of message.methods) {
                exports.Method.encode(v, writer.uint32(18).fork()).ldelim();
            }
        }
        if (message.options !== undefined && message.options.length !== 0) {
            for (const v of message.options) {
                type_1.Option.encode(v, writer.uint32(26).fork()).ldelim();
            }
        }
        if (message.version !== undefined && message.version !== "") {
            writer.uint32(34).string(message.version);
        }
        if (message.source_context !== undefined) {
            source_context_1.SourceContext.encode(message.source_context, writer.uint32(42).fork()).ldelim();
        }
        if (message.mixins !== undefined && message.mixins.length !== 0) {
            for (const v of message.mixins) {
                exports.Mixin.encode(v, writer.uint32(50).fork()).ldelim();
            }
        }
        if (message.syntax !== undefined && message.syntax !== type_1.Syntax.SYNTAX_PROTO2) {
            writer.uint32(56).int32((0, type_1.syntaxToNumber)(message.syntax));
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
        const message = createBaseApi();
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
                    if (message.methods === undefined) {
                        message.methods = [];
                    }
                    message.methods.push(exports.Method.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    if (message.options === undefined) {
                        message.options = [];
                    }
                    message.options.push(type_1.Option.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.version = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.source_context = source_context_1.SourceContext.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    if (message.mixins === undefined) {
                        message.mixins = [];
                    }
                    message.mixins.push(exports.Mixin.decode(reader, reader.uint32()));
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.syntax = (0, type_1.syntaxFromJSON)(reader.int32());
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
            methods: Array.isArray(object?.methods) ? object.methods.map((e) => exports.Method.fromJSON(e)) : undefined,
            options: Array.isArray(object?.options) ? object.options.map((e) => type_1.Option.fromJSON(e)) : undefined,
            version: isSet(object.version) ? String(object.version) : undefined,
            source_context: isSet(object.source_context) ? source_context_1.SourceContext.fromJSON(object.source_context) : undefined,
            mixins: Array.isArray(object?.mixins) ? object.mixins.map((e) => exports.Mixin.fromJSON(e)) : undefined,
            syntax: isSet(object.syntax) ? (0, type_1.syntaxFromJSON)(object.syntax) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== undefined && message.name !== "") {
            obj.name = message.name;
        }
        if (message.methods?.length) {
            obj.methods = message.methods.map((e) => exports.Method.toJSON(e));
        }
        if (message.options?.length) {
            obj.options = message.options.map((e) => type_1.Option.toJSON(e));
        }
        if (message.version !== undefined && message.version !== "") {
            obj.version = message.version;
        }
        if (message.source_context !== undefined) {
            obj.source_context = source_context_1.SourceContext.toJSON(message.source_context);
        }
        if (message.mixins?.length) {
            obj.mixins = message.mixins.map((e) => exports.Mixin.toJSON(e));
        }
        if (message.syntax !== undefined && message.syntax !== type_1.Syntax.SYNTAX_PROTO2) {
            obj.syntax = (0, type_1.syntaxToJSON)(message.syntax);
        }
        return obj;
    },
};
function createBaseMethod() {
    return {};
}
exports.Method = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== undefined && message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.request_type_url !== undefined && message.request_type_url !== "") {
            writer.uint32(18).string(message.request_type_url);
        }
        if (message.request_streaming === true) {
            writer.uint32(24).bool(message.request_streaming);
        }
        if (message.response_type_url !== undefined && message.response_type_url !== "") {
            writer.uint32(34).string(message.response_type_url);
        }
        if (message.response_streaming === true) {
            writer.uint32(40).bool(message.response_streaming);
        }
        if (message.options !== undefined && message.options.length !== 0) {
            for (const v of message.options) {
                type_1.Option.encode(v, writer.uint32(50).fork()).ldelim();
            }
        }
        if (message.syntax !== undefined && message.syntax !== type_1.Syntax.SYNTAX_PROTO2) {
            writer.uint32(56).int32((0, type_1.syntaxToNumber)(message.syntax));
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
        const message = createBaseMethod();
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
                    message.request_type_url = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.request_streaming = reader.bool();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.response_type_url = reader.string();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.response_streaming = reader.bool();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    if (message.options === undefined) {
                        message.options = [];
                    }
                    message.options.push(type_1.Option.decode(reader, reader.uint32()));
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.syntax = (0, type_1.syntaxFromJSON)(reader.int32());
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
            request_type_url: isSet(object.request_type_url) ? String(object.request_type_url) : undefined,
            request_streaming: isSet(object.request_streaming) ? Boolean(object.request_streaming) : undefined,
            response_type_url: isSet(object.response_type_url) ? String(object.response_type_url) : undefined,
            response_streaming: isSet(object.response_streaming) ? Boolean(object.response_streaming) : undefined,
            options: Array.isArray(object?.options) ? object.options.map((e) => type_1.Option.fromJSON(e)) : undefined,
            syntax: isSet(object.syntax) ? (0, type_1.syntaxFromJSON)(object.syntax) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== undefined && message.name !== "") {
            obj.name = message.name;
        }
        if (message.request_type_url !== undefined && message.request_type_url !== "") {
            obj.request_type_url = message.request_type_url;
        }
        if (message.request_streaming === true) {
            obj.request_streaming = message.request_streaming;
        }
        if (message.response_type_url !== undefined && message.response_type_url !== "") {
            obj.response_type_url = message.response_type_url;
        }
        if (message.response_streaming === true) {
            obj.response_streaming = message.response_streaming;
        }
        if (message.options?.length) {
            obj.options = message.options.map((e) => type_1.Option.toJSON(e));
        }
        if (message.syntax !== undefined && message.syntax !== type_1.Syntax.SYNTAX_PROTO2) {
            obj.syntax = (0, type_1.syntaxToJSON)(message.syntax);
        }
        return obj;
    },
};
function createBaseMixin() {
    return {};
}
exports.Mixin = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== undefined && message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.root !== undefined && message.root !== "") {
            writer.uint32(18).string(message.root);
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
        const message = createBaseMixin();
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
                    message.root = reader.string();
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
            root: isSet(object.root) ? String(object.root) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== undefined && message.name !== "") {
            obj.name = message.name;
        }
        if (message.root !== undefined && message.root !== "") {
            obj.root = message.root;
        }
        return obj;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
