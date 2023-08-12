"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LatLng = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
function createBaseLatLng() {
    return {};
}
exports.LatLng = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.latitude !== undefined && message.latitude !== 0) {
            writer.uint32(9).double(message.latitude);
        }
        if (message.longitude !== undefined && message.longitude !== 0) {
            writer.uint32(17).double(message.longitude);
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
        const message = createBaseLatLng();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 9) {
                        break;
                    }
                    message.latitude = reader.double();
                    continue;
                case 2:
                    if (tag !== 17) {
                        break;
                    }
                    message.longitude = reader.double();
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
            latitude: isSet(object.latitude) ? Number(object.latitude) : undefined,
            longitude: isSet(object.longitude) ? Number(object.longitude) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.latitude !== undefined && message.latitude !== 0) {
            obj.latitude = message.latitude;
        }
        if (message.longitude !== undefined && message.longitude !== 0) {
            obj.longitude = message.longitude;
        }
        return obj;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
