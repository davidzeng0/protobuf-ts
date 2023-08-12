"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageRule = exports.Usage = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
function createBaseUsage() {
    return {};
}
exports.Usage = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.requirements !== undefined && message.requirements.length !== 0) {
            for (const v of message.requirements) {
                writer.uint32(10).string(v);
            }
        }
        if (message.rules !== undefined && message.rules.length !== 0) {
            for (const v of message.rules) {
                exports.UsageRule.encode(v, writer.uint32(50).fork()).ldelim();
            }
        }
        if (message.producer_notification_channel !== undefined && message.producer_notification_channel !== "") {
            writer.uint32(58).string(message.producer_notification_channel);
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
        const message = createBaseUsage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    if (message.requirements === undefined) {
                        message.requirements = [];
                    }
                    message.requirements.push(reader.string());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    if (message.rules === undefined) {
                        message.rules = [];
                    }
                    message.rules.push(exports.UsageRule.decode(reader, reader.uint32()));
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.producer_notification_channel = reader.string();
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
            requirements: Array.isArray(object?.requirements) ? object.requirements.map((e) => String(e)) : undefined,
            rules: Array.isArray(object?.rules) ? object.rules.map((e) => exports.UsageRule.fromJSON(e)) : undefined,
            producer_notification_channel: isSet(object.producer_notification_channel)
                ? String(object.producer_notification_channel)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.requirements?.length) {
            obj.requirements = message.requirements;
        }
        if (message.rules?.length) {
            obj.rules = message.rules.map((e) => exports.UsageRule.toJSON(e));
        }
        if (message.producer_notification_channel !== undefined && message.producer_notification_channel !== "") {
            obj.producer_notification_channel = message.producer_notification_channel;
        }
        return obj;
    },
};
function createBaseUsageRule() {
    return {};
}
exports.UsageRule = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.selector !== undefined && message.selector !== "") {
            writer.uint32(10).string(message.selector);
        }
        if (message.allow_unregistered_calls === true) {
            writer.uint32(16).bool(message.allow_unregistered_calls);
        }
        if (message.skip_service_control === true) {
            writer.uint32(24).bool(message.skip_service_control);
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
        const message = createBaseUsageRule();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.selector = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.allow_unregistered_calls = reader.bool();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.skip_service_control = reader.bool();
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
            selector: isSet(object.selector) ? String(object.selector) : undefined,
            allow_unregistered_calls: isSet(object.allow_unregistered_calls)
                ? Boolean(object.allow_unregistered_calls)
                : undefined,
            skip_service_control: isSet(object.skip_service_control) ? Boolean(object.skip_service_control) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.selector !== undefined && message.selector !== "") {
            obj.selector = message.selector;
        }
        if (message.allow_unregistered_calls === true) {
            obj.allow_unregistered_calls = message.allow_unregistered_calls;
        }
        if (message.skip_service_control === true) {
            obj.skip_service_control = message.skip_service_control;
        }
        return obj;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
