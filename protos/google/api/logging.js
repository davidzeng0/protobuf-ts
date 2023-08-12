"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logging_LoggingDestination = exports.Logging = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
function createBaseLogging() {
    return {};
}
exports.Logging = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.producer_destinations !== undefined && message.producer_destinations.length !== 0) {
            for (const v of message.producer_destinations) {
                exports.Logging_LoggingDestination.encode(v, writer.uint32(10).fork()).ldelim();
            }
        }
        if (message.consumer_destinations !== undefined && message.consumer_destinations.length !== 0) {
            for (const v of message.consumer_destinations) {
                exports.Logging_LoggingDestination.encode(v, writer.uint32(18).fork()).ldelim();
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
        const message = createBaseLogging();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    if (message.producer_destinations === undefined) {
                        message.producer_destinations = [];
                    }
                    message.producer_destinations.push(exports.Logging_LoggingDestination.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    if (message.consumer_destinations === undefined) {
                        message.consumer_destinations = [];
                    }
                    message.consumer_destinations.push(exports.Logging_LoggingDestination.decode(reader, reader.uint32()));
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
            producer_destinations: Array.isArray(object?.producer_destinations)
                ? object.producer_destinations.map((e) => exports.Logging_LoggingDestination.fromJSON(e))
                : undefined,
            consumer_destinations: Array.isArray(object?.consumer_destinations)
                ? object.consumer_destinations.map((e) => exports.Logging_LoggingDestination.fromJSON(e))
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.producer_destinations?.length) {
            obj.producer_destinations = message.producer_destinations.map((e) => exports.Logging_LoggingDestination.toJSON(e));
        }
        if (message.consumer_destinations?.length) {
            obj.consumer_destinations = message.consumer_destinations.map((e) => exports.Logging_LoggingDestination.toJSON(e));
        }
        return obj;
    },
};
function createBaseLogging_LoggingDestination() {
    return {};
}
exports.Logging_LoggingDestination = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.monitored_resource !== undefined && message.monitored_resource !== "") {
            writer.uint32(26).string(message.monitored_resource);
        }
        if (message.logs !== undefined && message.logs.length !== 0) {
            for (const v of message.logs) {
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
        const message = createBaseLogging_LoggingDestination();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.monitored_resource = reader.string();
                    continue;
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    if (message.logs === undefined) {
                        message.logs = [];
                    }
                    message.logs.push(reader.string());
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
            monitored_resource: isSet(object.monitored_resource) ? String(object.monitored_resource) : undefined,
            logs: Array.isArray(object?.logs) ? object.logs.map((e) => String(e)) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.monitored_resource !== undefined && message.monitored_resource !== "") {
            obj.monitored_resource = message.monitored_resource;
        }
        if (message.logs?.length) {
            obj.logs = message.logs;
        }
        return obj;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
