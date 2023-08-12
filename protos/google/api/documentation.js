"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page = exports.DocumentationRule = exports.Documentation = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
function createBaseDocumentation() {
    return {};
}
exports.Documentation = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.summary !== undefined && message.summary !== "") {
            writer.uint32(10).string(message.summary);
        }
        if (message.pages !== undefined && message.pages.length !== 0) {
            for (const v of message.pages) {
                exports.Page.encode(v, writer.uint32(42).fork()).ldelim();
            }
        }
        if (message.rules !== undefined && message.rules.length !== 0) {
            for (const v of message.rules) {
                exports.DocumentationRule.encode(v, writer.uint32(26).fork()).ldelim();
            }
        }
        if (message.documentation_root_url !== undefined && message.documentation_root_url !== "") {
            writer.uint32(34).string(message.documentation_root_url);
        }
        if (message.service_root_url !== undefined && message.service_root_url !== "") {
            writer.uint32(50).string(message.service_root_url);
        }
        if (message.overview !== undefined && message.overview !== "") {
            writer.uint32(18).string(message.overview);
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
        const message = createBaseDocumentation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.summary = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    if (message.pages === undefined) {
                        message.pages = [];
                    }
                    message.pages.push(exports.Page.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    if (message.rules === undefined) {
                        message.rules = [];
                    }
                    message.rules.push(exports.DocumentationRule.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.documentation_root_url = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.service_root_url = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.overview = reader.string();
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
            summary: isSet(object.summary) ? String(object.summary) : undefined,
            pages: Array.isArray(object?.pages) ? object.pages.map((e) => exports.Page.fromJSON(e)) : undefined,
            rules: Array.isArray(object?.rules) ? object.rules.map((e) => exports.DocumentationRule.fromJSON(e)) : undefined,
            documentation_root_url: isSet(object.documentation_root_url) ? String(object.documentation_root_url) : undefined,
            service_root_url: isSet(object.service_root_url) ? String(object.service_root_url) : undefined,
            overview: isSet(object.overview) ? String(object.overview) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.summary !== undefined && message.summary !== "") {
            obj.summary = message.summary;
        }
        if (message.pages?.length) {
            obj.pages = message.pages.map((e) => exports.Page.toJSON(e));
        }
        if (message.rules?.length) {
            obj.rules = message.rules.map((e) => exports.DocumentationRule.toJSON(e));
        }
        if (message.documentation_root_url !== undefined && message.documentation_root_url !== "") {
            obj.documentation_root_url = message.documentation_root_url;
        }
        if (message.service_root_url !== undefined && message.service_root_url !== "") {
            obj.service_root_url = message.service_root_url;
        }
        if (message.overview !== undefined && message.overview !== "") {
            obj.overview = message.overview;
        }
        return obj;
    },
};
function createBaseDocumentationRule() {
    return {};
}
exports.DocumentationRule = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.selector !== undefined && message.selector !== "") {
            writer.uint32(10).string(message.selector);
        }
        if (message.description !== undefined && message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.deprecation_description !== undefined && message.deprecation_description !== "") {
            writer.uint32(26).string(message.deprecation_description);
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
        const message = createBaseDocumentationRule();
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
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.deprecation_description = reader.string();
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
            description: isSet(object.description) ? String(object.description) : undefined,
            deprecation_description: isSet(object.deprecation_description)
                ? String(object.deprecation_description)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.selector !== undefined && message.selector !== "") {
            obj.selector = message.selector;
        }
        if (message.description !== undefined && message.description !== "") {
            obj.description = message.description;
        }
        if (message.deprecation_description !== undefined && message.deprecation_description !== "") {
            obj.deprecation_description = message.deprecation_description;
        }
        return obj;
    },
};
function createBasePage() {
    return {};
}
exports.Page = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== undefined && message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.content !== undefined && message.content !== "") {
            writer.uint32(18).string(message.content);
        }
        if (message.subpages !== undefined && message.subpages.length !== 0) {
            for (const v of message.subpages) {
                exports.Page.encode(v, writer.uint32(26).fork()).ldelim();
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
        const message = createBasePage();
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
                    message.content = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    if (message.subpages === undefined) {
                        message.subpages = [];
                    }
                    message.subpages.push(exports.Page.decode(reader, reader.uint32()));
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
            content: isSet(object.content) ? String(object.content) : undefined,
            subpages: Array.isArray(object?.subpages) ? object.subpages.map((e) => exports.Page.fromJSON(e)) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== undefined && message.name !== "") {
            obj.name = message.name;
        }
        if (message.content !== undefined && message.content !== "") {
            obj.content = message.content;
        }
        if (message.subpages?.length) {
            obj.subpages = message.subpages.map((e) => exports.Page.toJSON(e));
        }
        return obj;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
