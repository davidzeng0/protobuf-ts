"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.api_visibility = exports.method_visibility = exports.message_visibility = exports.field_visibility = exports.value_visibility = exports.enum_visibility = exports.VisibilityRule = exports.Visibility = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
function createBaseVisibility() {
    return {};
}
exports.Visibility = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.rules !== undefined && message.rules.length !== 0) {
            for (const v of message.rules) {
                exports.VisibilityRule.encode(v, writer.uint32(10).fork()).ldelim();
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
        const message = createBaseVisibility();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    if (message.rules === undefined) {
                        message.rules = [];
                    }
                    message.rules.push(exports.VisibilityRule.decode(reader, reader.uint32()));
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
            rules: Array.isArray(object?.rules) ? object.rules.map((e) => exports.VisibilityRule.fromJSON(e)) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.rules?.length) {
            obj.rules = message.rules.map((e) => exports.VisibilityRule.toJSON(e));
        }
        return obj;
    },
};
function createBaseVisibilityRule() {
    return {};
}
exports.VisibilityRule = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.selector !== undefined && message.selector !== "") {
            writer.uint32(10).string(message.selector);
        }
        if (message.restriction !== undefined && message.restriction !== "") {
            writer.uint32(18).string(message.restriction);
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
        const message = createBaseVisibilityRule();
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
                    if (tag !== 18) {
                        break;
                    }
                    message.restriction = reader.string();
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
            restriction: isSet(object.restriction) ? String(object.restriction) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.selector !== undefined && message.selector !== "") {
            obj.selector = message.selector;
        }
        if (message.restriction !== undefined && message.restriction !== "") {
            obj.restriction = message.restriction;
        }
        return obj;
    },
};
exports.enum_visibility = {
    number: 72295727,
    tag: 578365818,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        const writer = minimal_1.default.Writer.create();
        exports.VisibilityRule.encode(value, writer.fork()).ldelim();
        encoded.push(writer.finish());
        return encoded;
    },
    decode: (tag, input) => {
        const reader = minimal_1.default.Reader.create(input[input.length - 1] ?? fail());
        return exports.VisibilityRule.decode(reader, reader.uint32());
    },
};
exports.value_visibility = {
    number: 72295727,
    tag: 578365818,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        const writer = minimal_1.default.Writer.create();
        exports.VisibilityRule.encode(value, writer.fork()).ldelim();
        encoded.push(writer.finish());
        return encoded;
    },
    decode: (tag, input) => {
        const reader = minimal_1.default.Reader.create(input[input.length - 1] ?? fail());
        return exports.VisibilityRule.decode(reader, reader.uint32());
    },
};
exports.field_visibility = {
    number: 72295727,
    tag: 578365818,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        const writer = minimal_1.default.Writer.create();
        exports.VisibilityRule.encode(value, writer.fork()).ldelim();
        encoded.push(writer.finish());
        return encoded;
    },
    decode: (tag, input) => {
        const reader = minimal_1.default.Reader.create(input[input.length - 1] ?? fail());
        return exports.VisibilityRule.decode(reader, reader.uint32());
    },
};
exports.message_visibility = {
    number: 72295727,
    tag: 578365818,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        const writer = minimal_1.default.Writer.create();
        exports.VisibilityRule.encode(value, writer.fork()).ldelim();
        encoded.push(writer.finish());
        return encoded;
    },
    decode: (tag, input) => {
        const reader = minimal_1.default.Reader.create(input[input.length - 1] ?? fail());
        return exports.VisibilityRule.decode(reader, reader.uint32());
    },
};
exports.method_visibility = {
    number: 72295727,
    tag: 578365818,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        const writer = minimal_1.default.Writer.create();
        exports.VisibilityRule.encode(value, writer.fork()).ldelim();
        encoded.push(writer.finish());
        return encoded;
    },
    decode: (tag, input) => {
        const reader = minimal_1.default.Reader.create(input[input.length - 1] ?? fail());
        return exports.VisibilityRule.decode(reader, reader.uint32());
    },
};
exports.api_visibility = {
    number: 72295727,
    tag: 578365818,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        const writer = minimal_1.default.Writer.create();
        exports.VisibilityRule.encode(value, writer.fork()).ldelim();
        encoded.push(writer.finish());
        return encoded;
    },
    decode: (tag, input) => {
        const reader = minimal_1.default.Reader.create(input[input.length - 1] ?? fail());
        return exports.VisibilityRule.decode(reader, reader.uint32());
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
function fail(message) {
    throw new Error(message ?? "Failed");
}
