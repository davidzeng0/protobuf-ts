"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fraction = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
function createBaseFraction() {
    return {};
}
exports.Fraction = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.numerator !== undefined && message.numerator !== BigInt("0")) {
            writer.uint32(8).int64(message.numerator.toString());
        }
        if (message.denominator !== undefined && message.denominator !== BigInt("0")) {
            writer.uint32(16).int64(message.denominator.toString());
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
        const message = createBaseFraction();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.numerator = longToBigint(reader.int64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.denominator = longToBigint(reader.int64());
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
            numerator: isSet(object.numerator) ? BigInt(object.numerator) : undefined,
            denominator: isSet(object.denominator) ? BigInt(object.denominator) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.numerator !== undefined && message.numerator !== BigInt("0")) {
            obj.numerator = message.numerator.toString();
        }
        if (message.denominator !== undefined && message.denominator !== BigInt("0")) {
            obj.denominator = message.denominator.toString();
        }
        return obj;
    },
};
function longToBigint(long) {
    return BigInt(long.toString());
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
