"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalizedText = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
function createBaseLocalizedText() {
    return {};
}
exports.LocalizedText = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.text !== undefined && message.text !== "") {
            writer.uint32(10).string(message.text);
        }
        if (message.language_code !== undefined && message.language_code !== "") {
            writer.uint32(18).string(message.language_code);
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
        const message = createBaseLocalizedText();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.text = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.language_code = reader.string();
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
            text: isSet(object.text) ? String(object.text) : undefined,
            language_code: isSet(object.language_code) ? String(object.language_code) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.text !== undefined && message.text !== "") {
            obj.text = message.text;
        }
        if (message.language_code !== undefined && message.language_code !== "") {
            obj.language_code = message.language_code;
        }
        return obj;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
