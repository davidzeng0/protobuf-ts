"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneNumber_ShortCode = exports.PhoneNumber = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
function createBasePhoneNumber() {
    return {};
}
exports.PhoneNumber = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.e164_number !== undefined) {
            writer.uint32(10).string(message.e164_number);
        }
        if (message.short_code !== undefined) {
            exports.PhoneNumber_ShortCode.encode(message.short_code, writer.uint32(18).fork()).ldelim();
        }
        if (message.extension !== undefined && message.extension !== "") {
            writer.uint32(26).string(message.extension);
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
        const message = createBasePhoneNumber();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.e164_number = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.short_code = exports.PhoneNumber_ShortCode.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.extension = reader.string();
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
            e164_number: isSet(object.e164_number) ? String(object.e164_number) : undefined,
            short_code: isSet(object.short_code) ? exports.PhoneNumber_ShortCode.fromJSON(object.short_code) : undefined,
            extension: isSet(object.extension) ? String(object.extension) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.e164_number !== undefined) {
            obj.e164_number = message.e164_number;
        }
        if (message.short_code !== undefined) {
            obj.short_code = exports.PhoneNumber_ShortCode.toJSON(message.short_code);
        }
        if (message.extension !== undefined && message.extension !== "") {
            obj.extension = message.extension;
        }
        return obj;
    },
};
function createBasePhoneNumber_ShortCode() {
    return {};
}
exports.PhoneNumber_ShortCode = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.region_code !== undefined && message.region_code !== "") {
            writer.uint32(10).string(message.region_code);
        }
        if (message.number !== undefined && message.number !== "") {
            writer.uint32(18).string(message.number);
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
        const message = createBasePhoneNumber_ShortCode();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.region_code = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.number = reader.string();
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
            region_code: isSet(object.region_code) ? String(object.region_code) : undefined,
            number: isSet(object.number) ? String(object.number) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.region_code !== undefined && message.region_code !== "") {
            obj.region_code = message.region_code;
        }
        if (message.number !== undefined && message.number !== "") {
            obj.number = message.number;
        }
        return obj;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
