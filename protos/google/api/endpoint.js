"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endpoint = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
function createBaseEndpoint() {
    return {};
}
exports.Endpoint = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== undefined && message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.aliases !== undefined && message.aliases.length !== 0) {
            for (const v of message.aliases) {
                writer.uint32(18).string(v);
            }
        }
        if (message.target !== undefined && message.target !== "") {
            writer.uint32(810).string(message.target);
        }
        if (message.allow_cors === true) {
            writer.uint32(40).bool(message.allow_cors);
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
        const message = createBaseEndpoint();
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
                    if (message.aliases === undefined) {
                        message.aliases = [];
                    }
                    message.aliases.push(reader.string());
                    continue;
                case 101:
                    if (tag !== 810) {
                        break;
                    }
                    message.target = reader.string();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.allow_cors = reader.bool();
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
            aliases: Array.isArray(object?.aliases) ? object.aliases.map((e) => String(e)) : undefined,
            target: isSet(object.target) ? String(object.target) : undefined,
            allow_cors: isSet(object.allow_cors) ? Boolean(object.allow_cors) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== undefined && message.name !== "") {
            obj.name = message.name;
        }
        if (message.aliases?.length) {
            obj.aliases = message.aliases;
        }
        if (message.target !== undefined && message.target !== "") {
            obj.target = message.target;
        }
        if (message.allow_cors === true) {
            obj.allow_cors = message.allow_cors;
        }
        return obj;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
