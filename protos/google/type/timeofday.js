"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeOfDay = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
function createBaseTimeOfDay() {
    return {};
}
exports.TimeOfDay = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.hours !== undefined && message.hours !== 0) {
            writer.uint32(8).int32(message.hours);
        }
        if (message.minutes !== undefined && message.minutes !== 0) {
            writer.uint32(16).int32(message.minutes);
        }
        if (message.seconds !== undefined && message.seconds !== 0) {
            writer.uint32(24).int32(message.seconds);
        }
        if (message.nanos !== undefined && message.nanos !== 0) {
            writer.uint32(32).int32(message.nanos);
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
        const message = createBaseTimeOfDay();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.hours = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.minutes = reader.int32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.seconds = reader.int32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.nanos = reader.int32();
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
            hours: isSet(object.hours) ? Number(object.hours) : undefined,
            minutes: isSet(object.minutes) ? Number(object.minutes) : undefined,
            seconds: isSet(object.seconds) ? Number(object.seconds) : undefined,
            nanos: isSet(object.nanos) ? Number(object.nanos) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.hours !== undefined && message.hours !== 0) {
            obj.hours = Math.round(message.hours);
        }
        if (message.minutes !== undefined && message.minutes !== 0) {
            obj.minutes = Math.round(message.minutes);
        }
        if (message.seconds !== undefined && message.seconds !== 0) {
            obj.seconds = Math.round(message.seconds);
        }
        if (message.nanos !== undefined && message.nanos !== 0) {
            obj.nanos = Math.round(message.nanos);
        }
        return obj;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
