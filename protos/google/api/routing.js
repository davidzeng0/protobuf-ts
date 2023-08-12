"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routing = exports.RoutingParameter = exports.RoutingRule = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
function createBaseRoutingRule() {
    return {};
}
exports.RoutingRule = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.routing_parameters !== undefined && message.routing_parameters.length !== 0) {
            for (const v of message.routing_parameters) {
                exports.RoutingParameter.encode(v, writer.uint32(18).fork()).ldelim();
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
        const message = createBaseRoutingRule();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    if (message.routing_parameters === undefined) {
                        message.routing_parameters = [];
                    }
                    message.routing_parameters.push(exports.RoutingParameter.decode(reader, reader.uint32()));
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
            routing_parameters: Array.isArray(object?.routing_parameters)
                ? object.routing_parameters.map((e) => exports.RoutingParameter.fromJSON(e))
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.routing_parameters?.length) {
            obj.routing_parameters = message.routing_parameters.map((e) => exports.RoutingParameter.toJSON(e));
        }
        return obj;
    },
};
function createBaseRoutingParameter() {
    return {};
}
exports.RoutingParameter = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.field !== undefined && message.field !== "") {
            writer.uint32(10).string(message.field);
        }
        if (message.path_template !== undefined && message.path_template !== "") {
            writer.uint32(18).string(message.path_template);
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
        const message = createBaseRoutingParameter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.field = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.path_template = reader.string();
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
            field: isSet(object.field) ? String(object.field) : undefined,
            path_template: isSet(object.path_template) ? String(object.path_template) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.field !== undefined && message.field !== "") {
            obj.field = message.field;
        }
        if (message.path_template !== undefined && message.path_template !== "") {
            obj.path_template = message.path_template;
        }
        return obj;
    },
};
exports.routing = {
    number: 72295729,
    tag: 578365834,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        const writer = minimal_1.default.Writer.create();
        exports.RoutingRule.encode(value, writer.fork()).ldelim();
        encoded.push(writer.finish());
        return encoded;
    },
    decode: (tag, input) => {
        const reader = minimal_1.default.Reader.create(input[input.length - 1] ?? fail());
        return exports.RoutingRule.decode(reader, reader.uint32());
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
function fail(message) {
    throw new Error(message ?? "Failed");
}
