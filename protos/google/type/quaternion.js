"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quaternion = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
function createBaseQuaternion() {
    return {};
}
exports.Quaternion = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.x !== undefined && message.x !== 0) {
            writer.uint32(9).double(message.x);
        }
        if (message.y !== undefined && message.y !== 0) {
            writer.uint32(17).double(message.y);
        }
        if (message.z !== undefined && message.z !== 0) {
            writer.uint32(25).double(message.z);
        }
        if (message.w !== undefined && message.w !== 0) {
            writer.uint32(33).double(message.w);
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
        const message = createBaseQuaternion();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 9) {
                        break;
                    }
                    message.x = reader.double();
                    continue;
                case 2:
                    if (tag !== 17) {
                        break;
                    }
                    message.y = reader.double();
                    continue;
                case 3:
                    if (tag !== 25) {
                        break;
                    }
                    message.z = reader.double();
                    continue;
                case 4:
                    if (tag !== 33) {
                        break;
                    }
                    message.w = reader.double();
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
            x: isSet(object.x) ? Number(object.x) : undefined,
            y: isSet(object.y) ? Number(object.y) : undefined,
            z: isSet(object.z) ? Number(object.z) : undefined,
            w: isSet(object.w) ? Number(object.w) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.x !== undefined && message.x !== 0) {
            obj.x = message.x;
        }
        if (message.y !== undefined && message.y !== 0) {
            obj.y = message.y;
        }
        if (message.z !== undefined && message.z !== 0) {
            obj.z = message.z;
        }
        if (message.w !== undefined && message.w !== 0) {
            obj.w = message.w;
        }
        return obj;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
