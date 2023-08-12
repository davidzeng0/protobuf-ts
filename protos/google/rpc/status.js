"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const any_1 = require("../protobuf/any");
function createBaseStatus() {
    return {};
}
exports.Status = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.code !== undefined && message.code !== 0) {
            writer.uint32(8).int32(message.code);
        }
        if (message.message !== undefined && message.message !== "") {
            writer.uint32(18).string(message.message);
        }
        if (message.details !== undefined && message.details.length !== 0) {
            for (const v of message.details) {
                any_1.Any.encode(v, writer.uint32(26).fork()).ldelim();
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
        const message = createBaseStatus();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.code = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.message = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    if (message.details === undefined) {
                        message.details = [];
                    }
                    message.details.push(any_1.Any.decode(reader, reader.uint32()));
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
            code: isSet(object.code) ? Number(object.code) : undefined,
            message: isSet(object.message) ? String(object.message) : undefined,
            details: Array.isArray(object?.details) ? object.details.map((e) => any_1.Any.fromJSON(e)) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.code !== undefined && message.code !== 0) {
            obj.code = Math.round(message.code);
        }
        if (message.message !== undefined && message.message !== "") {
            obj.message = message.message;
        }
        if (message.details?.length) {
            obj.details = message.details.map((e) => any_1.Any.toJSON(e));
        }
        return obj;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
