"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Color = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const wrappers_1 = require("../protobuf/wrappers");
function createBaseColor() {
    return {};
}
exports.Color = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.red !== undefined && message.red !== 0) {
            writer.uint32(13).float(message.red);
        }
        if (message.green !== undefined && message.green !== 0) {
            writer.uint32(21).float(message.green);
        }
        if (message.blue !== undefined && message.blue !== 0) {
            writer.uint32(29).float(message.blue);
        }
        if (message.alpha !== undefined) {
            wrappers_1.FloatValue.encode({ value: message.alpha }, writer.uint32(34).fork()).ldelim();
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
        const message = createBaseColor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 13) {
                        break;
                    }
                    message.red = reader.float();
                    continue;
                case 2:
                    if (tag !== 21) {
                        break;
                    }
                    message.green = reader.float();
                    continue;
                case 3:
                    if (tag !== 29) {
                        break;
                    }
                    message.blue = reader.float();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.alpha = wrappers_1.FloatValue.decode(reader, reader.uint32()).value;
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
            red: isSet(object.red) ? Number(object.red) : undefined,
            green: isSet(object.green) ? Number(object.green) : undefined,
            blue: isSet(object.blue) ? Number(object.blue) : undefined,
            alpha: isSet(object.alpha) ? Number(object.alpha) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.red !== undefined && message.red !== 0) {
            obj.red = message.red;
        }
        if (message.green !== undefined && message.green !== 0) {
            obj.green = message.green;
        }
        if (message.blue !== undefined && message.blue !== 0) {
            obj.blue = message.blue;
        }
        if (message.alpha !== undefined) {
            obj.alpha = message.alpha;
        }
        return obj;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
