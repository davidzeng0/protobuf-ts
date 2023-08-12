"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateMessage = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
function createBaseDateMessage() {
    return {};
}
exports.DateMessage = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.year !== undefined && message.year !== 0) {
            writer.uint32(8).int32(message.year);
        }
        if (message.month !== undefined && message.month !== 0) {
            writer.uint32(16).int32(message.month);
        }
        if (message.day !== undefined && message.day !== 0) {
            writer.uint32(24).int32(message.day);
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
        const message = createBaseDateMessage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.year = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.month = reader.int32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.day = reader.int32();
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
            year: isSet(object.year) ? Number(object.year) : undefined,
            month: isSet(object.month) ? Number(object.month) : undefined,
            day: isSet(object.day) ? Number(object.day) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.year !== undefined && message.year !== 0) {
            obj.year = Math.round(message.year);
        }
        if (message.month !== undefined && message.month !== 0) {
            obj.month = Math.round(message.month);
        }
        if (message.day !== undefined && message.day !== 0) {
            obj.day = Math.round(message.day);
        }
        return obj;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
