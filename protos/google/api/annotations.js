"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.http = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const http_1 = require("./http");
exports.http = {
    number: 72295728,
    tag: 578365826,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        const writer = minimal_1.default.Writer.create();
        http_1.HttpRule.encode(value, writer.fork()).ldelim();
        encoded.push(writer.finish());
        return encoded;
    },
    decode: (tag, input) => {
        const reader = minimal_1.default.Reader.create(input[input.length - 1] ?? fail());
        return http_1.HttpRule.decode(reader, reader.uint32());
    },
};
function fail(message) {
    throw new Error(message ?? "Failed");
}
