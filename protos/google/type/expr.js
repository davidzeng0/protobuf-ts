"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Expr = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
function createBaseExpr() {
    return {};
}
exports.Expr = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.expression !== undefined && message.expression !== "") {
            writer.uint32(10).string(message.expression);
        }
        if (message.title !== undefined && message.title !== "") {
            writer.uint32(18).string(message.title);
        }
        if (message.description !== undefined && message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        if (message.location !== undefined && message.location !== "") {
            writer.uint32(34).string(message.location);
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
        const message = createBaseExpr();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.expression = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.location = reader.string();
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
            expression: isSet(object.expression) ? String(object.expression) : undefined,
            title: isSet(object.title) ? String(object.title) : undefined,
            description: isSet(object.description) ? String(object.description) : undefined,
            location: isSet(object.location) ? String(object.location) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.expression !== undefined && message.expression !== "") {
            obj.expression = message.expression;
        }
        if (message.title !== undefined && message.title !== "") {
            obj.title = message.title;
        }
        if (message.description !== undefined && message.description !== "") {
            obj.description = message.description;
        }
        if (message.location !== undefined && message.location !== "") {
            obj.location = message.location;
        }
        return obj;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
