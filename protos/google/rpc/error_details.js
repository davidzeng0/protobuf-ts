"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalizedMessage = exports.Help_Link = exports.Help = exports.ResourceInfo = exports.RequestInfo = exports.BadRequest_FieldViolation = exports.BadRequest = exports.PreconditionFailure_Violation = exports.PreconditionFailure = exports.QuotaFailure_Violation = exports.QuotaFailure = exports.DebugInfo = exports.RetryInfo = exports.ErrorInfo_MetadataEntry = exports.ErrorInfo = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const duration_1 = require("../protobuf/duration");
function createBaseErrorInfo() {
    return {};
}
exports.ErrorInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.reason !== undefined && message.reason !== "") {
            writer.uint32(10).string(message.reason);
        }
        if (message.domain !== undefined && message.domain !== "") {
            writer.uint32(18).string(message.domain);
        }
        (message.metadata || new Map()).forEach((value, key) => {
            exports.ErrorInfo_MetadataEntry.encode({ key: key, value }, writer.uint32(26).fork()).ldelim();
        });
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
        const message = createBaseErrorInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.reason = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.domain = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    const entry3 = exports.ErrorInfo_MetadataEntry.decode(reader, reader.uint32());
                    if (entry3.value !== undefined) {
                        if (message.metadata === undefined) {
                            message.metadata = new Map();
                        }
                        message.metadata.set(entry3.key, entry3.value);
                    }
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
            reason: isSet(object.reason) ? String(object.reason) : undefined,
            domain: isSet(object.domain) ? String(object.domain) : undefined,
            metadata: isObject(object.metadata)
                ? Object.entries(object.metadata).reduce((acc, [key, value]) => {
                    acc.set(key, String(value));
                    return acc;
                }, new Map())
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.reason !== undefined && message.reason !== "") {
            obj.reason = message.reason;
        }
        if (message.domain !== undefined && message.domain !== "") {
            obj.domain = message.domain;
        }
        if (message.metadata?.size) {
            obj.metadata = {};
            message.metadata.forEach((v, k) => {
                obj.metadata[k] = v;
            });
        }
        return obj;
    },
};
function createBaseErrorInfo_MetadataEntry() {
    return { key: "", value: "" };
}
exports.ErrorInfo_MetadataEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
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
        const message = createBaseErrorInfo_MetadataEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value = reader.string();
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
        return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.value !== "") {
            obj.value = message.value;
        }
        return obj;
    },
};
function createBaseRetryInfo() {
    return {};
}
exports.RetryInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.retry_delay !== undefined) {
            duration_1.Duration.encode(message.retry_delay, writer.uint32(10).fork()).ldelim();
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
        const message = createBaseRetryInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.retry_delay = duration_1.Duration.decode(reader, reader.uint32());
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
        return { retry_delay: isSet(object.retry_delay) ? duration_1.Duration.fromJSON(object.retry_delay) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.retry_delay !== undefined) {
            obj.retry_delay = duration_1.Duration.toJSON(message.retry_delay);
        }
        return obj;
    },
};
function createBaseDebugInfo() {
    return {};
}
exports.DebugInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.stack_entries !== undefined && message.stack_entries.length !== 0) {
            for (const v of message.stack_entries) {
                writer.uint32(10).string(v);
            }
        }
        if (message.detail !== undefined && message.detail !== "") {
            writer.uint32(18).string(message.detail);
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
        const message = createBaseDebugInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    if (message.stack_entries === undefined) {
                        message.stack_entries = [];
                    }
                    message.stack_entries.push(reader.string());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.detail = reader.string();
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
            stack_entries: Array.isArray(object?.stack_entries) ? object.stack_entries.map((e) => String(e)) : undefined,
            detail: isSet(object.detail) ? String(object.detail) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.stack_entries?.length) {
            obj.stack_entries = message.stack_entries;
        }
        if (message.detail !== undefined && message.detail !== "") {
            obj.detail = message.detail;
        }
        return obj;
    },
};
function createBaseQuotaFailure() {
    return {};
}
exports.QuotaFailure = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.violations !== undefined && message.violations.length !== 0) {
            for (const v of message.violations) {
                exports.QuotaFailure_Violation.encode(v, writer.uint32(10).fork()).ldelim();
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
        const message = createBaseQuotaFailure();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    if (message.violations === undefined) {
                        message.violations = [];
                    }
                    message.violations.push(exports.QuotaFailure_Violation.decode(reader, reader.uint32()));
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
            violations: Array.isArray(object?.violations)
                ? object.violations.map((e) => exports.QuotaFailure_Violation.fromJSON(e))
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.violations?.length) {
            obj.violations = message.violations.map((e) => exports.QuotaFailure_Violation.toJSON(e));
        }
        return obj;
    },
};
function createBaseQuotaFailure_Violation() {
    return {};
}
exports.QuotaFailure_Violation = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.subject !== undefined && message.subject !== "") {
            writer.uint32(10).string(message.subject);
        }
        if (message.description !== undefined && message.description !== "") {
            writer.uint32(18).string(message.description);
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
        const message = createBaseQuotaFailure_Violation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.subject = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
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
            subject: isSet(object.subject) ? String(object.subject) : undefined,
            description: isSet(object.description) ? String(object.description) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.subject !== undefined && message.subject !== "") {
            obj.subject = message.subject;
        }
        if (message.description !== undefined && message.description !== "") {
            obj.description = message.description;
        }
        return obj;
    },
};
function createBasePreconditionFailure() {
    return {};
}
exports.PreconditionFailure = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.violations !== undefined && message.violations.length !== 0) {
            for (const v of message.violations) {
                exports.PreconditionFailure_Violation.encode(v, writer.uint32(10).fork()).ldelim();
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
        const message = createBasePreconditionFailure();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    if (message.violations === undefined) {
                        message.violations = [];
                    }
                    message.violations.push(exports.PreconditionFailure_Violation.decode(reader, reader.uint32()));
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
            violations: Array.isArray(object?.violations)
                ? object.violations.map((e) => exports.PreconditionFailure_Violation.fromJSON(e))
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.violations?.length) {
            obj.violations = message.violations.map((e) => exports.PreconditionFailure_Violation.toJSON(e));
        }
        return obj;
    },
};
function createBasePreconditionFailure_Violation() {
    return {};
}
exports.PreconditionFailure_Violation = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.type !== undefined && message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        if (message.subject !== undefined && message.subject !== "") {
            writer.uint32(18).string(message.subject);
        }
        if (message.description !== undefined && message.description !== "") {
            writer.uint32(26).string(message.description);
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
        const message = createBasePreconditionFailure_Violation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.type = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.subject = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.description = reader.string();
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
            type: isSet(object.type) ? String(object.type) : undefined,
            subject: isSet(object.subject) ? String(object.subject) : undefined,
            description: isSet(object.description) ? String(object.description) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.type !== undefined && message.type !== "") {
            obj.type = message.type;
        }
        if (message.subject !== undefined && message.subject !== "") {
            obj.subject = message.subject;
        }
        if (message.description !== undefined && message.description !== "") {
            obj.description = message.description;
        }
        return obj;
    },
};
function createBaseBadRequest() {
    return {};
}
exports.BadRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.field_violations !== undefined && message.field_violations.length !== 0) {
            for (const v of message.field_violations) {
                exports.BadRequest_FieldViolation.encode(v, writer.uint32(10).fork()).ldelim();
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
        const message = createBaseBadRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    if (message.field_violations === undefined) {
                        message.field_violations = [];
                    }
                    message.field_violations.push(exports.BadRequest_FieldViolation.decode(reader, reader.uint32()));
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
            field_violations: Array.isArray(object?.field_violations)
                ? object.field_violations.map((e) => exports.BadRequest_FieldViolation.fromJSON(e))
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.field_violations?.length) {
            obj.field_violations = message.field_violations.map((e) => exports.BadRequest_FieldViolation.toJSON(e));
        }
        return obj;
    },
};
function createBaseBadRequest_FieldViolation() {
    return {};
}
exports.BadRequest_FieldViolation = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.field !== undefined && message.field !== "") {
            writer.uint32(10).string(message.field);
        }
        if (message.description !== undefined && message.description !== "") {
            writer.uint32(18).string(message.description);
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
        const message = createBaseBadRequest_FieldViolation();
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
                    message.description = reader.string();
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
            description: isSet(object.description) ? String(object.description) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.field !== undefined && message.field !== "") {
            obj.field = message.field;
        }
        if (message.description !== undefined && message.description !== "") {
            obj.description = message.description;
        }
        return obj;
    },
};
function createBaseRequestInfo() {
    return {};
}
exports.RequestInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.request_id !== undefined && message.request_id !== "") {
            writer.uint32(10).string(message.request_id);
        }
        if (message.serving_data !== undefined && message.serving_data !== "") {
            writer.uint32(18).string(message.serving_data);
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
        const message = createBaseRequestInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.request_id = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.serving_data = reader.string();
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
            request_id: isSet(object.request_id) ? String(object.request_id) : undefined,
            serving_data: isSet(object.serving_data) ? String(object.serving_data) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.request_id !== undefined && message.request_id !== "") {
            obj.request_id = message.request_id;
        }
        if (message.serving_data !== undefined && message.serving_data !== "") {
            obj.serving_data = message.serving_data;
        }
        return obj;
    },
};
function createBaseResourceInfo() {
    return {};
}
exports.ResourceInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resource_type !== undefined && message.resource_type !== "") {
            writer.uint32(10).string(message.resource_type);
        }
        if (message.resource_name !== undefined && message.resource_name !== "") {
            writer.uint32(18).string(message.resource_name);
        }
        if (message.owner !== undefined && message.owner !== "") {
            writer.uint32(26).string(message.owner);
        }
        if (message.description !== undefined && message.description !== "") {
            writer.uint32(34).string(message.description);
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
        const message = createBaseResourceInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.resource_type = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.resource_name = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.owner = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.description = reader.string();
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
            resource_type: isSet(object.resource_type) ? String(object.resource_type) : undefined,
            resource_name: isSet(object.resource_name) ? String(object.resource_name) : undefined,
            owner: isSet(object.owner) ? String(object.owner) : undefined,
            description: isSet(object.description) ? String(object.description) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.resource_type !== undefined && message.resource_type !== "") {
            obj.resource_type = message.resource_type;
        }
        if (message.resource_name !== undefined && message.resource_name !== "") {
            obj.resource_name = message.resource_name;
        }
        if (message.owner !== undefined && message.owner !== "") {
            obj.owner = message.owner;
        }
        if (message.description !== undefined && message.description !== "") {
            obj.description = message.description;
        }
        return obj;
    },
};
function createBaseHelp() {
    return {};
}
exports.Help = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.links !== undefined && message.links.length !== 0) {
            for (const v of message.links) {
                exports.Help_Link.encode(v, writer.uint32(10).fork()).ldelim();
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
        const message = createBaseHelp();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    if (message.links === undefined) {
                        message.links = [];
                    }
                    message.links.push(exports.Help_Link.decode(reader, reader.uint32()));
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
        return { links: Array.isArray(object?.links) ? object.links.map((e) => exports.Help_Link.fromJSON(e)) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.links?.length) {
            obj.links = message.links.map((e) => exports.Help_Link.toJSON(e));
        }
        return obj;
    },
};
function createBaseHelp_Link() {
    return {};
}
exports.Help_Link = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.description !== undefined && message.description !== "") {
            writer.uint32(10).string(message.description);
        }
        if (message.url !== undefined && message.url !== "") {
            writer.uint32(18).string(message.url);
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
        const message = createBaseHelp_Link();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.url = reader.string();
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
            description: isSet(object.description) ? String(object.description) : undefined,
            url: isSet(object.url) ? String(object.url) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.description !== undefined && message.description !== "") {
            obj.description = message.description;
        }
        if (message.url !== undefined && message.url !== "") {
            obj.url = message.url;
        }
        return obj;
    },
};
function createBaseLocalizedMessage() {
    return {};
}
exports.LocalizedMessage = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.locale !== undefined && message.locale !== "") {
            writer.uint32(10).string(message.locale);
        }
        if (message.message !== undefined && message.message !== "") {
            writer.uint32(18).string(message.message);
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
        const message = createBaseLocalizedMessage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.locale = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.message = reader.string();
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
            locale: isSet(object.locale) ? String(object.locale) : undefined,
            message: isSet(object.message) ? String(object.message) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.locale !== undefined && message.locale !== "") {
            obj.locale = message.locale;
        }
        if (message.message !== undefined && message.message !== "") {
            obj.message = message.message;
        }
        return obj;
    },
};
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
