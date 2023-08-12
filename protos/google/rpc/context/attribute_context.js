"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributeContext_Resource_AnnotationsEntry = exports.AttributeContext_Resource_LabelsEntry = exports.AttributeContext_Resource = exports.AttributeContext_Response_HeadersEntry = exports.AttributeContext_Response = exports.AttributeContext_Request_HeadersEntry = exports.AttributeContext_Request = exports.AttributeContext_Auth = exports.AttributeContext_Api = exports.AttributeContext_Peer_LabelsEntry = exports.AttributeContext_Peer = exports.AttributeContext = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const any_1 = require("../../protobuf/any");
const duration_1 = require("../../protobuf/duration");
const struct_1 = require("../../protobuf/struct");
const timestamp_1 = require("../../protobuf/timestamp");
function createBaseAttributeContext() {
    return {};
}
exports.AttributeContext = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.origin !== undefined) {
            exports.AttributeContext_Peer.encode(message.origin, writer.uint32(58).fork()).ldelim();
        }
        if (message.source !== undefined) {
            exports.AttributeContext_Peer.encode(message.source, writer.uint32(10).fork()).ldelim();
        }
        if (message.destination !== undefined) {
            exports.AttributeContext_Peer.encode(message.destination, writer.uint32(18).fork()).ldelim();
        }
        if (message.request !== undefined) {
            exports.AttributeContext_Request.encode(message.request, writer.uint32(26).fork()).ldelim();
        }
        if (message.response !== undefined) {
            exports.AttributeContext_Response.encode(message.response, writer.uint32(34).fork()).ldelim();
        }
        if (message.resource !== undefined) {
            exports.AttributeContext_Resource.encode(message.resource, writer.uint32(42).fork()).ldelim();
        }
        if (message.api !== undefined) {
            exports.AttributeContext_Api.encode(message.api, writer.uint32(50).fork()).ldelim();
        }
        if (message.extensions !== undefined && message.extensions.length !== 0) {
            for (const v of message.extensions) {
                any_1.Any.encode(v, writer.uint32(66).fork()).ldelim();
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
        const message = createBaseAttributeContext();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.origin = exports.AttributeContext_Peer.decode(reader, reader.uint32());
                    continue;
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.source = exports.AttributeContext_Peer.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.destination = exports.AttributeContext_Peer.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.request = exports.AttributeContext_Request.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.response = exports.AttributeContext_Response.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.resource = exports.AttributeContext_Resource.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.api = exports.AttributeContext_Api.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    if (message.extensions === undefined) {
                        message.extensions = [];
                    }
                    message.extensions.push(any_1.Any.decode(reader, reader.uint32()));
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
            origin: isSet(object.origin) ? exports.AttributeContext_Peer.fromJSON(object.origin) : undefined,
            source: isSet(object.source) ? exports.AttributeContext_Peer.fromJSON(object.source) : undefined,
            destination: isSet(object.destination) ? exports.AttributeContext_Peer.fromJSON(object.destination) : undefined,
            request: isSet(object.request) ? exports.AttributeContext_Request.fromJSON(object.request) : undefined,
            response: isSet(object.response) ? exports.AttributeContext_Response.fromJSON(object.response) : undefined,
            resource: isSet(object.resource) ? exports.AttributeContext_Resource.fromJSON(object.resource) : undefined,
            api: isSet(object.api) ? exports.AttributeContext_Api.fromJSON(object.api) : undefined,
            extensions: Array.isArray(object?.extensions) ? object.extensions.map((e) => any_1.Any.fromJSON(e)) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.origin !== undefined) {
            obj.origin = exports.AttributeContext_Peer.toJSON(message.origin);
        }
        if (message.source !== undefined) {
            obj.source = exports.AttributeContext_Peer.toJSON(message.source);
        }
        if (message.destination !== undefined) {
            obj.destination = exports.AttributeContext_Peer.toJSON(message.destination);
        }
        if (message.request !== undefined) {
            obj.request = exports.AttributeContext_Request.toJSON(message.request);
        }
        if (message.response !== undefined) {
            obj.response = exports.AttributeContext_Response.toJSON(message.response);
        }
        if (message.resource !== undefined) {
            obj.resource = exports.AttributeContext_Resource.toJSON(message.resource);
        }
        if (message.api !== undefined) {
            obj.api = exports.AttributeContext_Api.toJSON(message.api);
        }
        if (message.extensions?.length) {
            obj.extensions = message.extensions.map((e) => any_1.Any.toJSON(e));
        }
        return obj;
    },
};
function createBaseAttributeContext_Peer() {
    return {};
}
exports.AttributeContext_Peer = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.ip !== undefined && message.ip !== "") {
            writer.uint32(10).string(message.ip);
        }
        if (message.port !== undefined && message.port !== BigInt("0")) {
            writer.uint32(16).int64(message.port.toString());
        }
        (message.labels || new Map()).forEach((value, key) => {
            exports.AttributeContext_Peer_LabelsEntry.encode({ key: key, value }, writer.uint32(50).fork()).ldelim();
        });
        if (message.principal !== undefined && message.principal !== "") {
            writer.uint32(58).string(message.principal);
        }
        if (message.region_code !== undefined && message.region_code !== "") {
            writer.uint32(66).string(message.region_code);
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
        const message = createBaseAttributeContext_Peer();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.ip = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.port = longToBigint(reader.int64());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    const entry6 = exports.AttributeContext_Peer_LabelsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        if (message.labels === undefined) {
                            message.labels = new Map();
                        }
                        message.labels.set(entry6.key, entry6.value);
                    }
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.principal = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.region_code = reader.string();
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
            ip: isSet(object.ip) ? String(object.ip) : undefined,
            port: isSet(object.port) ? BigInt(object.port) : undefined,
            labels: isObject(object.labels)
                ? Object.entries(object.labels).reduce((acc, [key, value]) => {
                    acc.set(key, String(value));
                    return acc;
                }, new Map())
                : undefined,
            principal: isSet(object.principal) ? String(object.principal) : undefined,
            region_code: isSet(object.region_code) ? String(object.region_code) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.ip !== undefined && message.ip !== "") {
            obj.ip = message.ip;
        }
        if (message.port !== undefined && message.port !== BigInt("0")) {
            obj.port = message.port.toString();
        }
        if (message.labels?.size) {
            obj.labels = {};
            message.labels.forEach((v, k) => {
                obj.labels[k] = v;
            });
        }
        if (message.principal !== undefined && message.principal !== "") {
            obj.principal = message.principal;
        }
        if (message.region_code !== undefined && message.region_code !== "") {
            obj.region_code = message.region_code;
        }
        return obj;
    },
};
function createBaseAttributeContext_Peer_LabelsEntry() {
    return { key: "", value: "" };
}
exports.AttributeContext_Peer_LabelsEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
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
        const message = createBaseAttributeContext_Peer_LabelsEntry();
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
        return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.value !== "") {
            obj.value = message.value;
        }
        return obj;
    },
};
function createBaseAttributeContext_Api() {
    return {};
}
exports.AttributeContext_Api = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.service !== undefined && message.service !== "") {
            writer.uint32(10).string(message.service);
        }
        if (message.operation !== undefined && message.operation !== "") {
            writer.uint32(18).string(message.operation);
        }
        if (message.protocol !== undefined && message.protocol !== "") {
            writer.uint32(26).string(message.protocol);
        }
        if (message.version !== undefined && message.version !== "") {
            writer.uint32(34).string(message.version);
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
        const message = createBaseAttributeContext_Api();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.service = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.operation = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.protocol = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.version = reader.string();
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
            service: isSet(object.service) ? String(object.service) : undefined,
            operation: isSet(object.operation) ? String(object.operation) : undefined,
            protocol: isSet(object.protocol) ? String(object.protocol) : undefined,
            version: isSet(object.version) ? String(object.version) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.service !== undefined && message.service !== "") {
            obj.service = message.service;
        }
        if (message.operation !== undefined && message.operation !== "") {
            obj.operation = message.operation;
        }
        if (message.protocol !== undefined && message.protocol !== "") {
            obj.protocol = message.protocol;
        }
        if (message.version !== undefined && message.version !== "") {
            obj.version = message.version;
        }
        return obj;
    },
};
function createBaseAttributeContext_Auth() {
    return {};
}
exports.AttributeContext_Auth = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.principal !== undefined && message.principal !== "") {
            writer.uint32(10).string(message.principal);
        }
        if (message.audiences !== undefined && message.audiences.length !== 0) {
            for (const v of message.audiences) {
                writer.uint32(18).string(v);
            }
        }
        if (message.presenter !== undefined && message.presenter !== "") {
            writer.uint32(26).string(message.presenter);
        }
        if (message.claims !== undefined) {
            struct_1.Struct.encode(struct_1.Struct.wrap(message.claims), writer.uint32(34).fork()).ldelim();
        }
        if (message.access_levels !== undefined && message.access_levels.length !== 0) {
            for (const v of message.access_levels) {
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
        const message = createBaseAttributeContext_Auth();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.principal = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    if (message.audiences === undefined) {
                        message.audiences = [];
                    }
                    message.audiences.push(reader.string());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.presenter = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.claims = struct_1.Struct.unwrap(struct_1.Struct.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    if (message.access_levels === undefined) {
                        message.access_levels = [];
                    }
                    message.access_levels.push(reader.string());
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
            principal: isSet(object.principal) ? String(object.principal) : undefined,
            audiences: Array.isArray(object?.audiences) ? object.audiences.map((e) => String(e)) : undefined,
            presenter: isSet(object.presenter) ? String(object.presenter) : undefined,
            claims: isObject(object.claims) ? object.claims : undefined,
            access_levels: Array.isArray(object?.access_levels) ? object.access_levels.map((e) => String(e)) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.principal !== undefined && message.principal !== "") {
            obj.principal = message.principal;
        }
        if (message.audiences?.length) {
            obj.audiences = message.audiences;
        }
        if (message.presenter !== undefined && message.presenter !== "") {
            obj.presenter = message.presenter;
        }
        if (message.claims !== undefined) {
            obj.claims = message.claims;
        }
        if (message.access_levels?.length) {
            obj.access_levels = message.access_levels;
        }
        return obj;
    },
};
function createBaseAttributeContext_Request() {
    return {};
}
exports.AttributeContext_Request = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== undefined && message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.method !== undefined && message.method !== "") {
            writer.uint32(18).string(message.method);
        }
        (message.headers || new Map()).forEach((value, key) => {
            exports.AttributeContext_Request_HeadersEntry.encode({ key: key, value }, writer.uint32(26).fork()).ldelim();
        });
        if (message.path !== undefined && message.path !== "") {
            writer.uint32(34).string(message.path);
        }
        if (message.host !== undefined && message.host !== "") {
            writer.uint32(42).string(message.host);
        }
        if (message.scheme !== undefined && message.scheme !== "") {
            writer.uint32(50).string(message.scheme);
        }
        if (message.query !== undefined && message.query !== "") {
            writer.uint32(58).string(message.query);
        }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode(message.time, writer.uint32(74).fork()).ldelim();
        }
        if (message.size !== undefined && message.size !== BigInt("0")) {
            writer.uint32(80).int64(message.size.toString());
        }
        if (message.protocol !== undefined && message.protocol !== "") {
            writer.uint32(90).string(message.protocol);
        }
        if (message.reason !== undefined && message.reason !== "") {
            writer.uint32(98).string(message.reason);
        }
        if (message.auth !== undefined) {
            exports.AttributeContext_Auth.encode(message.auth, writer.uint32(106).fork()).ldelim();
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
        const message = createBaseAttributeContext_Request();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.method = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    const entry3 = exports.AttributeContext_Request_HeadersEntry.decode(reader, reader.uint32());
                    if (entry3.value !== undefined) {
                        if (message.headers === undefined) {
                            message.headers = new Map();
                        }
                        message.headers.set(entry3.key, entry3.value);
                    }
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.path = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.host = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.scheme = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.query = reader.string();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.time = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    continue;
                case 10:
                    if (tag !== 80) {
                        break;
                    }
                    message.size = longToBigint(reader.int64());
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.protocol = reader.string();
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.reason = reader.string();
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    message.auth = exports.AttributeContext_Auth.decode(reader, reader.uint32());
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
            id: isSet(object.id) ? String(object.id) : undefined,
            method: isSet(object.method) ? String(object.method) : undefined,
            headers: isObject(object.headers)
                ? Object.entries(object.headers).reduce((acc, [key, value]) => {
                    acc.set(key, String(value));
                    return acc;
                }, new Map())
                : undefined,
            path: isSet(object.path) ? String(object.path) : undefined,
            host: isSet(object.host) ? String(object.host) : undefined,
            scheme: isSet(object.scheme) ? String(object.scheme) : undefined,
            query: isSet(object.query) ? String(object.query) : undefined,
            time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
            size: isSet(object.size) ? BigInt(object.size) : undefined,
            protocol: isSet(object.protocol) ? String(object.protocol) : undefined,
            reason: isSet(object.reason) ? String(object.reason) : undefined,
            auth: isSet(object.auth) ? exports.AttributeContext_Auth.fromJSON(object.auth) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== undefined && message.id !== "") {
            obj.id = message.id;
        }
        if (message.method !== undefined && message.method !== "") {
            obj.method = message.method;
        }
        if (message.headers?.size) {
            obj.headers = {};
            message.headers.forEach((v, k) => {
                obj.headers[k] = v;
            });
        }
        if (message.path !== undefined && message.path !== "") {
            obj.path = message.path;
        }
        if (message.host !== undefined && message.host !== "") {
            obj.host = message.host;
        }
        if (message.scheme !== undefined && message.scheme !== "") {
            obj.scheme = message.scheme;
        }
        if (message.query !== undefined && message.query !== "") {
            obj.query = message.query;
        }
        if (message.time !== undefined) {
            obj.time = fromTimestamp(message.time).toISOString();
        }
        if (message.size !== undefined && message.size !== BigInt("0")) {
            obj.size = message.size.toString();
        }
        if (message.protocol !== undefined && message.protocol !== "") {
            obj.protocol = message.protocol;
        }
        if (message.reason !== undefined && message.reason !== "") {
            obj.reason = message.reason;
        }
        if (message.auth !== undefined) {
            obj.auth = exports.AttributeContext_Auth.toJSON(message.auth);
        }
        return obj;
    },
};
function createBaseAttributeContext_Request_HeadersEntry() {
    return { key: "", value: "" };
}
exports.AttributeContext_Request_HeadersEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
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
        const message = createBaseAttributeContext_Request_HeadersEntry();
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
        return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.value !== "") {
            obj.value = message.value;
        }
        return obj;
    },
};
function createBaseAttributeContext_Response() {
    return {};
}
exports.AttributeContext_Response = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.code !== undefined && message.code !== BigInt("0")) {
            writer.uint32(8).int64(message.code.toString());
        }
        if (message.size !== undefined && message.size !== BigInt("0")) {
            writer.uint32(16).int64(message.size.toString());
        }
        (message.headers || new Map()).forEach((value, key) => {
            exports.AttributeContext_Response_HeadersEntry.encode({ key: key, value }, writer.uint32(26).fork()).ldelim();
        });
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode(message.time, writer.uint32(34).fork()).ldelim();
        }
        if (message.backend_latency !== undefined) {
            duration_1.Duration.encode(message.backend_latency, writer.uint32(42).fork()).ldelim();
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
        const message = createBaseAttributeContext_Response();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.code = longToBigint(reader.int64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.size = longToBigint(reader.int64());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    const entry3 = exports.AttributeContext_Response_HeadersEntry.decode(reader, reader.uint32());
                    if (entry3.value !== undefined) {
                        if (message.headers === undefined) {
                            message.headers = new Map();
                        }
                        message.headers.set(entry3.key, entry3.value);
                    }
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.time = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.backend_latency = duration_1.Duration.decode(reader, reader.uint32());
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
            code: isSet(object.code) ? BigInt(object.code) : undefined,
            size: isSet(object.size) ? BigInt(object.size) : undefined,
            headers: isObject(object.headers)
                ? Object.entries(object.headers).reduce((acc, [key, value]) => {
                    acc.set(key, String(value));
                    return acc;
                }, new Map())
                : undefined,
            time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
            backend_latency: isSet(object.backend_latency) ? duration_1.Duration.fromJSON(object.backend_latency) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.code !== undefined && message.code !== BigInt("0")) {
            obj.code = message.code.toString();
        }
        if (message.size !== undefined && message.size !== BigInt("0")) {
            obj.size = message.size.toString();
        }
        if (message.headers?.size) {
            obj.headers = {};
            message.headers.forEach((v, k) => {
                obj.headers[k] = v;
            });
        }
        if (message.time !== undefined) {
            obj.time = fromTimestamp(message.time).toISOString();
        }
        if (message.backend_latency !== undefined) {
            obj.backend_latency = duration_1.Duration.toJSON(message.backend_latency);
        }
        return obj;
    },
};
function createBaseAttributeContext_Response_HeadersEntry() {
    return { key: "", value: "" };
}
exports.AttributeContext_Response_HeadersEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
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
        const message = createBaseAttributeContext_Response_HeadersEntry();
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
        return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.value !== "") {
            obj.value = message.value;
        }
        return obj;
    },
};
function createBaseAttributeContext_Resource() {
    return {};
}
exports.AttributeContext_Resource = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.service !== undefined && message.service !== "") {
            writer.uint32(10).string(message.service);
        }
        if (message.name !== undefined && message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.type !== undefined && message.type !== "") {
            writer.uint32(26).string(message.type);
        }
        (message.labels || new Map()).forEach((value, key) => {
            exports.AttributeContext_Resource_LabelsEntry.encode({ key: key, value }, writer.uint32(34).fork()).ldelim();
        });
        if (message.uid !== undefined && message.uid !== "") {
            writer.uint32(42).string(message.uid);
        }
        (message.annotations || new Map()).forEach((value, key) => {
            exports.AttributeContext_Resource_AnnotationsEntry.encode({ key: key, value }, writer.uint32(50).fork()).ldelim();
        });
        if (message.display_name !== undefined && message.display_name !== "") {
            writer.uint32(58).string(message.display_name);
        }
        if (message.create_time !== undefined) {
            timestamp_1.Timestamp.encode(message.create_time, writer.uint32(66).fork()).ldelim();
        }
        if (message.update_time !== undefined) {
            timestamp_1.Timestamp.encode(message.update_time, writer.uint32(74).fork()).ldelim();
        }
        if (message.delete_time !== undefined) {
            timestamp_1.Timestamp.encode(message.delete_time, writer.uint32(82).fork()).ldelim();
        }
        if (message.etag !== undefined && message.etag !== "") {
            writer.uint32(90).string(message.etag);
        }
        if (message.location !== undefined && message.location !== "") {
            writer.uint32(98).string(message.location);
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
        const message = createBaseAttributeContext_Resource();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.service = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.type = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    const entry4 = exports.AttributeContext_Resource_LabelsEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        if (message.labels === undefined) {
                            message.labels = new Map();
                        }
                        message.labels.set(entry4.key, entry4.value);
                    }
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.uid = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    const entry6 = exports.AttributeContext_Resource_AnnotationsEntry.decode(reader, reader.uint32());
                    if (entry6.value !== undefined) {
                        if (message.annotations === undefined) {
                            message.annotations = new Map();
                        }
                        message.annotations.set(entry6.key, entry6.value);
                    }
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.display_name = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.create_time = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.update_time = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.delete_time = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.etag = reader.string();
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.location = reader.string();
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
            service: isSet(object.service) ? String(object.service) : undefined,
            name: isSet(object.name) ? String(object.name) : undefined,
            type: isSet(object.type) ? String(object.type) : undefined,
            labels: isObject(object.labels)
                ? Object.entries(object.labels).reduce((acc, [key, value]) => {
                    acc.set(key, String(value));
                    return acc;
                }, new Map())
                : undefined,
            uid: isSet(object.uid) ? String(object.uid) : undefined,
            annotations: isObject(object.annotations)
                ? Object.entries(object.annotations).reduce((acc, [key, value]) => {
                    acc.set(key, String(value));
                    return acc;
                }, new Map())
                : undefined,
            display_name: isSet(object.display_name) ? String(object.display_name) : undefined,
            create_time: isSet(object.create_time) ? fromJsonTimestamp(object.create_time) : undefined,
            update_time: isSet(object.update_time) ? fromJsonTimestamp(object.update_time) : undefined,
            delete_time: isSet(object.delete_time) ? fromJsonTimestamp(object.delete_time) : undefined,
            etag: isSet(object.etag) ? String(object.etag) : undefined,
            location: isSet(object.location) ? String(object.location) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.service !== undefined && message.service !== "") {
            obj.service = message.service;
        }
        if (message.name !== undefined && message.name !== "") {
            obj.name = message.name;
        }
        if (message.type !== undefined && message.type !== "") {
            obj.type = message.type;
        }
        if (message.labels?.size) {
            obj.labels = {};
            message.labels.forEach((v, k) => {
                obj.labels[k] = v;
            });
        }
        if (message.uid !== undefined && message.uid !== "") {
            obj.uid = message.uid;
        }
        if (message.annotations?.size) {
            obj.annotations = {};
            message.annotations.forEach((v, k) => {
                obj.annotations[k] = v;
            });
        }
        if (message.display_name !== undefined && message.display_name !== "") {
            obj.display_name = message.display_name;
        }
        if (message.create_time !== undefined) {
            obj.create_time = fromTimestamp(message.create_time).toISOString();
        }
        if (message.update_time !== undefined) {
            obj.update_time = fromTimestamp(message.update_time).toISOString();
        }
        if (message.delete_time !== undefined) {
            obj.delete_time = fromTimestamp(message.delete_time).toISOString();
        }
        if (message.etag !== undefined && message.etag !== "") {
            obj.etag = message.etag;
        }
        if (message.location !== undefined && message.location !== "") {
            obj.location = message.location;
        }
        return obj;
    },
};
function createBaseAttributeContext_Resource_LabelsEntry() {
    return { key: "", value: "" };
}
exports.AttributeContext_Resource_LabelsEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
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
        const message = createBaseAttributeContext_Resource_LabelsEntry();
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
        return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.value !== "") {
            obj.value = message.value;
        }
        return obj;
    },
};
function createBaseAttributeContext_Resource_AnnotationsEntry() {
    return { key: "", value: "" };
}
exports.AttributeContext_Resource_AnnotationsEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
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
        const message = createBaseAttributeContext_Resource_AnnotationsEntry();
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
        return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.value !== "") {
            obj.value = message.value;
        }
        return obj;
    },
};
function toTimestamp(date) {
    const seconds = BigInt(Math.trunc(date.getTime() / 1_000));
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = (Number(t.seconds.toString()) || 0) * 1_000;
    millis += (t.nanos || 0) / 1_000_000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return toTimestamp(o);
    }
    else if (typeof o === "string") {
        return toTimestamp(new Date(o));
    }
    else {
        return timestamp_1.Timestamp.fromJSON(o);
    }
}
function longToBigint(long) {
    return BigInt(long.toString());
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
