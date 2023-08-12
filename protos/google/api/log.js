"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogDescriptor = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const label_1 = require("./label");
function createBaseLogDescriptor() {
    return {};
}
exports.LogDescriptor = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== undefined && message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.labels !== undefined && message.labels.length !== 0) {
            for (const v of message.labels) {
                label_1.LabelDescriptor.encode(v, writer.uint32(18).fork()).ldelim();
            }
        }
        if (message.description !== undefined && message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        if (message.display_name !== undefined && message.display_name !== "") {
            writer.uint32(34).string(message.display_name);
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
        const message = createBaseLogDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    if (message.labels === undefined) {
                        message.labels = [];
                    }
                    message.labels.push(label_1.LabelDescriptor.decode(reader, reader.uint32()));
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
                    message.display_name = reader.string();
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
            name: isSet(object.name) ? String(object.name) : undefined,
            labels: Array.isArray(object?.labels) ? object.labels.map((e) => label_1.LabelDescriptor.fromJSON(e)) : undefined,
            description: isSet(object.description) ? String(object.description) : undefined,
            display_name: isSet(object.display_name) ? String(object.display_name) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== undefined && message.name !== "") {
            obj.name = message.name;
        }
        if (message.labels?.length) {
            obj.labels = message.labels.map((e) => label_1.LabelDescriptor.toJSON(e));
        }
        if (message.description !== undefined && message.description !== "") {
            obj.description = message.description;
        }
        if (message.display_name !== undefined && message.display_name !== "") {
            obj.display_name = message.display_name;
        }
        return obj;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
