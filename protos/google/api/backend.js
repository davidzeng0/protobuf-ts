"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackendRule = exports.Backend = exports.backendRule_PathTranslationToJSON = exports.backendRule_PathTranslationFromJSON = exports.BackendRule_PathTranslation = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
/**
 * Path Translation specifies how to combine the backend address with the
 * request path in order to produce the appropriate forwarding URL for the
 * request.
 *
 * Path Translation is applicable only to HTTP-based backends. Backends which
 * do not accept requests over HTTP/HTTPS should leave `path_translation`
 * unspecified.
 */
var BackendRule_PathTranslation;
(function (BackendRule_PathTranslation) {
    BackendRule_PathTranslation[BackendRule_PathTranslation["PATH_TRANSLATION_UNSPECIFIED"] = 0] = "PATH_TRANSLATION_UNSPECIFIED";
    /**
     * CONSTANT_ADDRESS - Use the backend address as-is, with no modification to the path. If the
     * URL pattern contains variables, the variable names and values will be
     * appended to the query string. If a query string parameter and a URL
     * pattern variable have the same name, this may result in duplicate keys in
     * the query string.
     *
     * # Examples
     *
     * Given the following operation config:
     *
     *     Method path:        /api/company/{cid}/user/{uid}
     *     Backend address:    https://example.cloudfunctions.net/getUser
     *
     * Requests to the following request paths will call the backend at the
     * translated path:
     *
     *     Request path: /api/company/widgetworks/user/johndoe
     *     Translated:
     *     https://example.cloudfunctions.net/getUser?cid=widgetworks&uid=johndoe
     *
     *     Request path: /api/company/widgetworks/user/johndoe?timezone=EST
     *     Translated:
     *     https://example.cloudfunctions.net/getUser?timezone=EST&cid=widgetworks&uid=johndoe
     */
    BackendRule_PathTranslation[BackendRule_PathTranslation["CONSTANT_ADDRESS"] = 1] = "CONSTANT_ADDRESS";
    /**
     * APPEND_PATH_TO_ADDRESS - The request path will be appended to the backend address.
     *
     * # Examples
     *
     * Given the following operation config:
     *
     *     Method path:        /api/company/{cid}/user/{uid}
     *     Backend address:    https://example.appspot.com
     *
     * Requests to the following request paths will call the backend at the
     * translated path:
     *
     *     Request path: /api/company/widgetworks/user/johndoe
     *     Translated:
     *     https://example.appspot.com/api/company/widgetworks/user/johndoe
     *
     *     Request path: /api/company/widgetworks/user/johndoe?timezone=EST
     *     Translated:
     *     https://example.appspot.com/api/company/widgetworks/user/johndoe?timezone=EST
     */
    BackendRule_PathTranslation[BackendRule_PathTranslation["APPEND_PATH_TO_ADDRESS"] = 2] = "APPEND_PATH_TO_ADDRESS";
    BackendRule_PathTranslation[BackendRule_PathTranslation["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(BackendRule_PathTranslation || (exports.BackendRule_PathTranslation = BackendRule_PathTranslation = {}));
function backendRule_PathTranslationFromJSON(object) {
    switch (object) {
        case 0:
        case "PATH_TRANSLATION_UNSPECIFIED":
            return BackendRule_PathTranslation.PATH_TRANSLATION_UNSPECIFIED;
        case 1:
        case "CONSTANT_ADDRESS":
            return BackendRule_PathTranslation.CONSTANT_ADDRESS;
        case 2:
        case "APPEND_PATH_TO_ADDRESS":
            return BackendRule_PathTranslation.APPEND_PATH_TO_ADDRESS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return BackendRule_PathTranslation.UNRECOGNIZED;
    }
}
exports.backendRule_PathTranslationFromJSON = backendRule_PathTranslationFromJSON;
function backendRule_PathTranslationToJSON(object) {
    switch (object) {
        case BackendRule_PathTranslation.PATH_TRANSLATION_UNSPECIFIED:
            return "PATH_TRANSLATION_UNSPECIFIED";
        case BackendRule_PathTranslation.CONSTANT_ADDRESS:
            return "CONSTANT_ADDRESS";
        case BackendRule_PathTranslation.APPEND_PATH_TO_ADDRESS:
            return "APPEND_PATH_TO_ADDRESS";
        case BackendRule_PathTranslation.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.backendRule_PathTranslationToJSON = backendRule_PathTranslationToJSON;
function createBaseBackend() {
    return {};
}
exports.Backend = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.rules !== undefined && message.rules.length !== 0) {
            for (const v of message.rules) {
                exports.BackendRule.encode(v, writer.uint32(10).fork()).ldelim();
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
        const message = createBaseBackend();
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
                    message.rules.push(exports.BackendRule.decode(reader, reader.uint32()));
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
        return { rules: Array.isArray(object?.rules) ? object.rules.map((e) => exports.BackendRule.fromJSON(e)) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.rules?.length) {
            obj.rules = message.rules.map((e) => exports.BackendRule.toJSON(e));
        }
        return obj;
    },
};
function createBaseBackendRule() {
    return {};
}
exports.BackendRule = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.selector !== undefined && message.selector !== "") {
            writer.uint32(10).string(message.selector);
        }
        if (message.address !== undefined && message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        if (message.deadline !== undefined && message.deadline !== 0) {
            writer.uint32(25).double(message.deadline);
        }
        if (message.min_deadline !== undefined && message.min_deadline !== 0) {
            writer.uint32(33).double(message.min_deadline);
        }
        if (message.operation_deadline !== undefined && message.operation_deadline !== 0) {
            writer.uint32(41).double(message.operation_deadline);
        }
        if (message.path_translation !== undefined && message.path_translation !== 0) {
            writer.uint32(48).int32(message.path_translation);
        }
        if (message.jwt_audience !== undefined) {
            writer.uint32(58).string(message.jwt_audience);
        }
        if (message.disable_auth !== undefined) {
            writer.uint32(64).bool(message.disable_auth);
        }
        if (message.protocol !== undefined && message.protocol !== "") {
            writer.uint32(74).string(message.protocol);
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
        const message = createBaseBackendRule();
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
                    message.address = reader.string();
                    continue;
                case 3:
                    if (tag !== 25) {
                        break;
                    }
                    message.deadline = reader.double();
                    continue;
                case 4:
                    if (tag !== 33) {
                        break;
                    }
                    message.min_deadline = reader.double();
                    continue;
                case 5:
                    if (tag !== 41) {
                        break;
                    }
                    message.operation_deadline = reader.double();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.path_translation = reader.int32();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.jwt_audience = reader.string();
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.disable_auth = reader.bool();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.protocol = reader.string();
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
            address: isSet(object.address) ? String(object.address) : undefined,
            deadline: isSet(object.deadline) ? Number(object.deadline) : undefined,
            min_deadline: isSet(object.min_deadline) ? Number(object.min_deadline) : undefined,
            operation_deadline: isSet(object.operation_deadline) ? Number(object.operation_deadline) : undefined,
            path_translation: isSet(object.path_translation)
                ? backendRule_PathTranslationFromJSON(object.path_translation)
                : undefined,
            jwt_audience: isSet(object.jwt_audience) ? String(object.jwt_audience) : undefined,
            disable_auth: isSet(object.disable_auth) ? Boolean(object.disable_auth) : undefined,
            protocol: isSet(object.protocol) ? String(object.protocol) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.selector !== undefined && message.selector !== "") {
            obj.selector = message.selector;
        }
        if (message.address !== undefined && message.address !== "") {
            obj.address = message.address;
        }
        if (message.deadline !== undefined && message.deadline !== 0) {
            obj.deadline = message.deadline;
        }
        if (message.min_deadline !== undefined && message.min_deadline !== 0) {
            obj.min_deadline = message.min_deadline;
        }
        if (message.operation_deadline !== undefined && message.operation_deadline !== 0) {
            obj.operation_deadline = message.operation_deadline;
        }
        if (message.path_translation !== undefined && message.path_translation !== 0) {
            obj.path_translation = backendRule_PathTranslationToJSON(message.path_translation);
        }
        if (message.jwt_audience !== undefined) {
            obj.jwt_audience = message.jwt_audience;
        }
        if (message.disable_auth !== undefined) {
            obj.disable_auth = message.disable_auth;
        }
        if (message.protocol !== undefined && message.protocol !== "") {
            obj.protocol = message.protocol;
        }
        return obj;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
