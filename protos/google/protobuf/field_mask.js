"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldMask = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
function createBaseFieldMask() {
    return {};
}
exports.FieldMask = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.paths !== undefined && message.paths.length !== 0) {
            for (const v of message.paths) {
                writer.uint32(10).string(v);
            }
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
        const message = createBaseFieldMask();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    if (message.paths === undefined) {
                        message.paths = [];
                    }
                    message.paths.push(reader.string());
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
            paths: typeof (object) === "string"
                ? object.split(",").filter(Boolean)
                : Array.isArray(object?.paths)
                    ? object.paths.map(String)
                    : [],
        };
    },
    toJSON(message) {
        return message.paths.join(",");
    },
    wrap(paths) {
        const result = createBaseFieldMask();
        result.paths = paths;
        return result;
    },
    unwrap(message) {
        return message.paths;
    },
};
