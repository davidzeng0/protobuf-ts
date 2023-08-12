"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRequirement = exports.OAuthRequirements = exports.AuthProvider = exports.JwtLocation = exports.AuthenticationRule = exports.Authentication = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
function createBaseAuthentication() {
    return {};
}
exports.Authentication = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.rules !== undefined && message.rules.length !== 0) {
            for (const v of message.rules) {
                exports.AuthenticationRule.encode(v, writer.uint32(26).fork()).ldelim();
            }
        }
        if (message.providers !== undefined && message.providers.length !== 0) {
            for (const v of message.providers) {
                exports.AuthProvider.encode(v, writer.uint32(34).fork()).ldelim();
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
        const message = createBaseAuthentication();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    if (message.rules === undefined) {
                        message.rules = [];
                    }
                    message.rules.push(exports.AuthenticationRule.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    if (message.providers === undefined) {
                        message.providers = [];
                    }
                    message.providers.push(exports.AuthProvider.decode(reader, reader.uint32()));
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
            rules: Array.isArray(object?.rules) ? object.rules.map((e) => exports.AuthenticationRule.fromJSON(e)) : undefined,
            providers: Array.isArray(object?.providers)
                ? object.providers.map((e) => exports.AuthProvider.fromJSON(e))
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.rules?.length) {
            obj.rules = message.rules.map((e) => exports.AuthenticationRule.toJSON(e));
        }
        if (message.providers?.length) {
            obj.providers = message.providers.map((e) => exports.AuthProvider.toJSON(e));
        }
        return obj;
    },
};
function createBaseAuthenticationRule() {
    return {};
}
exports.AuthenticationRule = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.selector !== undefined && message.selector !== "") {
            writer.uint32(10).string(message.selector);
        }
        if (message.oauth !== undefined) {
            exports.OAuthRequirements.encode(message.oauth, writer.uint32(18).fork()).ldelim();
        }
        if (message.allow_without_credential === true) {
            writer.uint32(40).bool(message.allow_without_credential);
        }
        if (message.requirements !== undefined && message.requirements.length !== 0) {
            for (const v of message.requirements) {
                exports.AuthRequirement.encode(v, writer.uint32(58).fork()).ldelim();
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
        const message = createBaseAuthenticationRule();
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
                    message.oauth = exports.OAuthRequirements.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.allow_without_credential = reader.bool();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    if (message.requirements === undefined) {
                        message.requirements = [];
                    }
                    message.requirements.push(exports.AuthRequirement.decode(reader, reader.uint32()));
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
            oauth: isSet(object.oauth) ? exports.OAuthRequirements.fromJSON(object.oauth) : undefined,
            allow_without_credential: isSet(object.allow_without_credential)
                ? Boolean(object.allow_without_credential)
                : undefined,
            requirements: Array.isArray(object?.requirements)
                ? object.requirements.map((e) => exports.AuthRequirement.fromJSON(e))
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.selector !== undefined && message.selector !== "") {
            obj.selector = message.selector;
        }
        if (message.oauth !== undefined) {
            obj.oauth = exports.OAuthRequirements.toJSON(message.oauth);
        }
        if (message.allow_without_credential === true) {
            obj.allow_without_credential = message.allow_without_credential;
        }
        if (message.requirements?.length) {
            obj.requirements = message.requirements.map((e) => exports.AuthRequirement.toJSON(e));
        }
        return obj;
    },
};
function createBaseJwtLocation() {
    return {};
}
exports.JwtLocation = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.header !== undefined) {
            writer.uint32(10).string(message.header);
        }
        if (message.query !== undefined) {
            writer.uint32(18).string(message.query);
        }
        if (message.cookie !== undefined) {
            writer.uint32(34).string(message.cookie);
        }
        if (message.value_prefix !== undefined && message.value_prefix !== "") {
            writer.uint32(26).string(message.value_prefix);
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
        const message = createBaseJwtLocation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.header = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.query = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.cookie = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.value_prefix = reader.string();
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
            header: isSet(object.header) ? String(object.header) : undefined,
            query: isSet(object.query) ? String(object.query) : undefined,
            cookie: isSet(object.cookie) ? String(object.cookie) : undefined,
            value_prefix: isSet(object.value_prefix) ? String(object.value_prefix) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.header !== undefined) {
            obj.header = message.header;
        }
        if (message.query !== undefined) {
            obj.query = message.query;
        }
        if (message.cookie !== undefined) {
            obj.cookie = message.cookie;
        }
        if (message.value_prefix !== undefined && message.value_prefix !== "") {
            obj.value_prefix = message.value_prefix;
        }
        return obj;
    },
};
function createBaseAuthProvider() {
    return {};
}
exports.AuthProvider = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== undefined && message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.issuer !== undefined && message.issuer !== "") {
            writer.uint32(18).string(message.issuer);
        }
        if (message.jwks_uri !== undefined && message.jwks_uri !== "") {
            writer.uint32(26).string(message.jwks_uri);
        }
        if (message.audiences !== undefined && message.audiences !== "") {
            writer.uint32(34).string(message.audiences);
        }
        if (message.authorization_url !== undefined && message.authorization_url !== "") {
            writer.uint32(42).string(message.authorization_url);
        }
        if (message.jwt_locations !== undefined && message.jwt_locations.length !== 0) {
            for (const v of message.jwt_locations) {
                exports.JwtLocation.encode(v, writer.uint32(50).fork()).ldelim();
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
        const message = createBaseAuthProvider();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.issuer = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.jwks_uri = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.audiences = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.authorization_url = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    if (message.jwt_locations === undefined) {
                        message.jwt_locations = [];
                    }
                    message.jwt_locations.push(exports.JwtLocation.decode(reader, reader.uint32()));
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
            id: isSet(object.id) ? String(object.id) : undefined,
            issuer: isSet(object.issuer) ? String(object.issuer) : undefined,
            jwks_uri: isSet(object.jwks_uri) ? String(object.jwks_uri) : undefined,
            audiences: isSet(object.audiences) ? String(object.audiences) : undefined,
            authorization_url: isSet(object.authorization_url) ? String(object.authorization_url) : undefined,
            jwt_locations: Array.isArray(object?.jwt_locations)
                ? object.jwt_locations.map((e) => exports.JwtLocation.fromJSON(e))
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== undefined && message.id !== "") {
            obj.id = message.id;
        }
        if (message.issuer !== undefined && message.issuer !== "") {
            obj.issuer = message.issuer;
        }
        if (message.jwks_uri !== undefined && message.jwks_uri !== "") {
            obj.jwks_uri = message.jwks_uri;
        }
        if (message.audiences !== undefined && message.audiences !== "") {
            obj.audiences = message.audiences;
        }
        if (message.authorization_url !== undefined && message.authorization_url !== "") {
            obj.authorization_url = message.authorization_url;
        }
        if (message.jwt_locations?.length) {
            obj.jwt_locations = message.jwt_locations.map((e) => exports.JwtLocation.toJSON(e));
        }
        return obj;
    },
};
function createBaseOAuthRequirements() {
    return {};
}
exports.OAuthRequirements = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.canonical_scopes !== undefined && message.canonical_scopes !== "") {
            writer.uint32(10).string(message.canonical_scopes);
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
        const message = createBaseOAuthRequirements();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.canonical_scopes = reader.string();
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
        return { canonical_scopes: isSet(object.canonical_scopes) ? String(object.canonical_scopes) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.canonical_scopes !== undefined && message.canonical_scopes !== "") {
            obj.canonical_scopes = message.canonical_scopes;
        }
        return obj;
    },
};
function createBaseAuthRequirement() {
    return {};
}
exports.AuthRequirement = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.provider_id !== undefined && message.provider_id !== "") {
            writer.uint32(10).string(message.provider_id);
        }
        if (message.audiences !== undefined && message.audiences !== "") {
            writer.uint32(18).string(message.audiences);
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
        const message = createBaseAuthRequirement();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.provider_id = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.audiences = reader.string();
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
            provider_id: isSet(object.provider_id) ? String(object.provider_id) : undefined,
            audiences: isSet(object.audiences) ? String(object.audiences) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.provider_id !== undefined && message.provider_id !== "") {
            obj.provider_id = message.provider_id;
        }
        if (message.audiences !== undefined && message.audiences !== "") {
            obj.audiences = message.audiences;
        }
        return obj;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
