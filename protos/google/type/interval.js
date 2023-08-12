"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Interval = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../protobuf/timestamp");
function createBaseInterval() {
    return {};
}
exports.Interval = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.start_time !== undefined) {
            timestamp_1.Timestamp.encode(message.start_time, writer.uint32(10).fork()).ldelim();
        }
        if (message.end_time !== undefined) {
            timestamp_1.Timestamp.encode(message.end_time, writer.uint32(18).fork()).ldelim();
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
        const message = createBaseInterval();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.start_time = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.end_time = timestamp_1.Timestamp.decode(reader, reader.uint32());
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
            start_time: isSet(object.start_time) ? fromJsonTimestamp(object.start_time) : undefined,
            end_time: isSet(object.end_time) ? fromJsonTimestamp(object.end_time) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.start_time !== undefined) {
            obj.start_time = fromTimestamp(message.start_time).toISOString();
        }
        if (message.end_time !== undefined) {
            obj.end_time = fromTimestamp(message.end_time).toISOString();
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
function isSet(value) {
    return value !== null && value !== undefined;
}
