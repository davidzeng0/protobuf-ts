"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpHeader = exports.HttpResponse = exports.HttpRequest = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
function createBaseHttpRequest() {
    return {};
}
exports.HttpRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.method !== undefined && message.method !== "") {
            writer.uint32(10).string(message.method);
        }
        if (message.uri !== undefined && message.uri !== "") {
            writer.uint32(18).string(message.uri);
        }
        if (message.headers !== undefined && message.headers.length !== 0) {
            for (const v of message.headers) {
                exports.HttpHeader.encode(v, writer.uint32(26).fork()).ldelim();
            }
        }
        if (message.body !== undefined && message.body.length !== 0) {
            writer.uint32(34).bytes(message.body);
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
        const message = createBaseHttpRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.method = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.uri = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    if (message.headers === undefined) {
                        message.headers = [];
                    }
                    message.headers.push(exports.HttpHeader.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.body = reader.bytes();
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
            method: isSet(object.method) ? String(object.method) : undefined,
            uri: isSet(object.uri) ? String(object.uri) : undefined,
            headers: Array.isArray(object?.headers) ? object.headers.map((e) => exports.HttpHeader.fromJSON(e)) : undefined,
            body: isSet(object.body) ? Buffer.from(bytesFromBase64(object.body)) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.method !== undefined && message.method !== "") {
            obj.method = message.method;
        }
        if (message.uri !== undefined && message.uri !== "") {
            obj.uri = message.uri;
        }
        if (message.headers?.length) {
            obj.headers = message.headers.map((e) => exports.HttpHeader.toJSON(e));
        }
        if (message.body !== undefined && message.body.length !== 0) {
            obj.body = base64FromBytes(message.body);
        }
        return obj;
    },
};
function createBaseHttpResponse() {
    return {};
}
exports.HttpResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.status !== undefined && message.status !== 0) {
            writer.uint32(8).int32(message.status);
        }
        if (message.reason !== undefined && message.reason !== "") {
            writer.uint32(18).string(message.reason);
        }
        if (message.headers !== undefined && message.headers.length !== 0) {
            for (const v of message.headers) {
                exports.HttpHeader.encode(v, writer.uint32(26).fork()).ldelim();
            }
        }
        if (message.body !== undefined && message.body.length !== 0) {
            writer.uint32(34).bytes(message.body);
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
        const message = createBaseHttpResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.status = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.reason = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    if (message.headers === undefined) {
                        message.headers = [];
                    }
                    message.headers.push(exports.HttpHeader.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.body = reader.bytes();
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
            status: isSet(object.status) ? Number(object.status) : undefined,
            reason: isSet(object.reason) ? String(object.reason) : undefined,
            headers: Array.isArray(object?.headers) ? object.headers.map((e) => exports.HttpHeader.fromJSON(e)) : undefined,
            body: isSet(object.body) ? Buffer.from(bytesFromBase64(object.body)) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.status !== undefined && message.status !== 0) {
            obj.status = Math.round(message.status);
        }
        if (message.reason !== undefined && message.reason !== "") {
            obj.reason = message.reason;
        }
        if (message.headers?.length) {
            obj.headers = message.headers.map((e) => exports.HttpHeader.toJSON(e));
        }
        if (message.body !== undefined && message.body.length !== 0) {
            obj.body = base64FromBytes(message.body);
        }
        return obj;
    },
};
function createBaseHttpHeader() {
    return {};
}
exports.HttpHeader = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== undefined && message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined && message.value !== "") {
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
        const message = createBaseHttpHeader();
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
        return {
            key: isSet(object.key) ? String(object.key) : undefined,
            value: isSet(object.value) ? String(object.value) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.key !== undefined && message.key !== "") {
            obj.key = message.key;
        }
        if (message.value !== undefined && message.value !== "") {
            obj.value = message.value;
        }
        return obj;
    },
};
const tsProtoGlobalThis = (() => {
    if (typeof globalThis !== "undefined") {
        return globalThis;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    throw "Unable to locate global object";
})();
function bytesFromBase64(b64) {
    if (tsProtoGlobalThis.Buffer) {
        return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
    }
    else {
        const bin = tsProtoGlobalThis.atob(b64);
        const arr = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; ++i) {
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}
function base64FromBytes(arr) {
    if (tsProtoGlobalThis.Buffer) {
        return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
    }
    else {
        const bin = [];
        arr.forEach((byte) => {
            bin.push(String.fromCharCode(byte));
        });
        return tsProtoGlobalThis.btoa(bin.join(""));
    }
}
function isSet(value) {
    return value !== null && value !== undefined;
}
