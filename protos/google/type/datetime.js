"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeZone = exports.DateTime = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const duration_1 = require("../protobuf/duration");
function createBaseDateTime() {
    return {};
}
exports.DateTime = {
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
        if (message.hours !== undefined && message.hours !== 0) {
            writer.uint32(32).int32(message.hours);
        }
        if (message.minutes !== undefined && message.minutes !== 0) {
            writer.uint32(40).int32(message.minutes);
        }
        if (message.seconds !== undefined && message.seconds !== 0) {
            writer.uint32(48).int32(message.seconds);
        }
        if (message.nanos !== undefined && message.nanos !== 0) {
            writer.uint32(56).int32(message.nanos);
        }
        if (message.utc_offset !== undefined) {
            duration_1.Duration.encode(message.utc_offset, writer.uint32(66).fork()).ldelim();
        }
        if (message.time_zone !== undefined) {
            exports.TimeZone.encode(message.time_zone, writer.uint32(74).fork()).ldelim();
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
        const message = createBaseDateTime();
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
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.hours = reader.int32();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.minutes = reader.int32();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.seconds = reader.int32();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.nanos = reader.int32();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.utc_offset = duration_1.Duration.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.time_zone = exports.TimeZone.decode(reader, reader.uint32());
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
            hours: isSet(object.hours) ? Number(object.hours) : undefined,
            minutes: isSet(object.minutes) ? Number(object.minutes) : undefined,
            seconds: isSet(object.seconds) ? Number(object.seconds) : undefined,
            nanos: isSet(object.nanos) ? Number(object.nanos) : undefined,
            utc_offset: isSet(object.utc_offset) ? duration_1.Duration.fromJSON(object.utc_offset) : undefined,
            time_zone: isSet(object.time_zone) ? exports.TimeZone.fromJSON(object.time_zone) : undefined,
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
        if (message.utc_offset !== undefined) {
            obj.utc_offset = duration_1.Duration.toJSON(message.utc_offset);
        }
        if (message.time_zone !== undefined) {
            obj.time_zone = exports.TimeZone.toJSON(message.time_zone);
        }
        return obj;
    },
};
function createBaseTimeZone() {
    return {};
}
exports.TimeZone = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== undefined && message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.version !== undefined && message.version !== "") {
            writer.uint32(18).string(message.version);
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
        const message = createBaseTimeZone();
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
            id: isSet(object.id) ? String(object.id) : undefined,
            version: isSet(object.version) ? String(object.version) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== undefined && message.id !== "") {
            obj.id = message.id;
        }
        if (message.version !== undefined && message.version !== "") {
            obj.version = message.version;
        }
        return obj;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
