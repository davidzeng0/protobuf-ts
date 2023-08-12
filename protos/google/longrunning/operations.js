"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperationsDefinition = exports.operation_info = exports.OperationInfo = exports.WaitOperationRequest = exports.DeleteOperationRequest = exports.CancelOperationRequest = exports.ListOperationsResponse = exports.ListOperationsRequest = exports.GetOperationRequest = exports.Operation = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const any_1 = require("../protobuf/any");
const duration_1 = require("../protobuf/duration");
const empty_1 = require("../protobuf/empty");
const status_1 = require("../rpc/status");
function createBaseOperation() {
    return {};
}
exports.Operation = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== undefined && message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.metadata !== undefined) {
            any_1.Any.encode(message.metadata, writer.uint32(18).fork()).ldelim();
        }
        if (message.done === true) {
            writer.uint32(24).bool(message.done);
        }
        if (message.error !== undefined) {
            status_1.Status.encode(message.error, writer.uint32(34).fork()).ldelim();
        }
        if (message.response !== undefined) {
            any_1.Any.encode(message.response, writer.uint32(42).fork()).ldelim();
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
        const message = createBaseOperation();
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
                    message.metadata = any_1.Any.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.done = reader.bool();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.error = status_1.Status.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.response = any_1.Any.decode(reader, reader.uint32());
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
            metadata: isSet(object.metadata) ? any_1.Any.fromJSON(object.metadata) : undefined,
            done: isSet(object.done) ? Boolean(object.done) : undefined,
            error: isSet(object.error) ? status_1.Status.fromJSON(object.error) : undefined,
            response: isSet(object.response) ? any_1.Any.fromJSON(object.response) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== undefined && message.name !== "") {
            obj.name = message.name;
        }
        if (message.metadata !== undefined) {
            obj.metadata = any_1.Any.toJSON(message.metadata);
        }
        if (message.done === true) {
            obj.done = message.done;
        }
        if (message.error !== undefined) {
            obj.error = status_1.Status.toJSON(message.error);
        }
        if (message.response !== undefined) {
            obj.response = any_1.Any.toJSON(message.response);
        }
        return obj;
    },
};
function createBaseGetOperationRequest() {
    return {};
}
exports.GetOperationRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== undefined && message.name !== "") {
            writer.uint32(10).string(message.name);
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
        const message = createBaseGetOperationRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
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
        return { name: isSet(object.name) ? String(object.name) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== undefined && message.name !== "") {
            obj.name = message.name;
        }
        return obj;
    },
};
function createBaseListOperationsRequest() {
    return {};
}
exports.ListOperationsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== undefined && message.name !== "") {
            writer.uint32(34).string(message.name);
        }
        if (message.filter !== undefined && message.filter !== "") {
            writer.uint32(10).string(message.filter);
        }
        if (message.page_size !== undefined && message.page_size !== 0) {
            writer.uint32(16).int32(message.page_size);
        }
        if (message.page_token !== undefined && message.page_token !== "") {
            writer.uint32(26).string(message.page_token);
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
        const message = createBaseListOperationsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.filter = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.page_size = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.page_token = reader.string();
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
            filter: isSet(object.filter) ? String(object.filter) : undefined,
            page_size: isSet(object.page_size) ? Number(object.page_size) : undefined,
            page_token: isSet(object.page_token) ? String(object.page_token) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== undefined && message.name !== "") {
            obj.name = message.name;
        }
        if (message.filter !== undefined && message.filter !== "") {
            obj.filter = message.filter;
        }
        if (message.page_size !== undefined && message.page_size !== 0) {
            obj.page_size = Math.round(message.page_size);
        }
        if (message.page_token !== undefined && message.page_token !== "") {
            obj.page_token = message.page_token;
        }
        return obj;
    },
};
function createBaseListOperationsResponse() {
    return {};
}
exports.ListOperationsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.operations !== undefined && message.operations.length !== 0) {
            for (const v of message.operations) {
                exports.Operation.encode(v, writer.uint32(10).fork()).ldelim();
            }
        }
        if (message.next_page_token !== undefined && message.next_page_token !== "") {
            writer.uint32(18).string(message.next_page_token);
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
        const message = createBaseListOperationsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    if (message.operations === undefined) {
                        message.operations = [];
                    }
                    message.operations.push(exports.Operation.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.next_page_token = reader.string();
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
            operations: Array.isArray(object?.operations)
                ? object.operations.map((e) => exports.Operation.fromJSON(e))
                : undefined,
            next_page_token: isSet(object.next_page_token) ? String(object.next_page_token) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.operations?.length) {
            obj.operations = message.operations.map((e) => exports.Operation.toJSON(e));
        }
        if (message.next_page_token !== undefined && message.next_page_token !== "") {
            obj.next_page_token = message.next_page_token;
        }
        return obj;
    },
};
function createBaseCancelOperationRequest() {
    return {};
}
exports.CancelOperationRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== undefined && message.name !== "") {
            writer.uint32(10).string(message.name);
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
        const message = createBaseCancelOperationRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
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
        return { name: isSet(object.name) ? String(object.name) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== undefined && message.name !== "") {
            obj.name = message.name;
        }
        return obj;
    },
};
function createBaseDeleteOperationRequest() {
    return {};
}
exports.DeleteOperationRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== undefined && message.name !== "") {
            writer.uint32(10).string(message.name);
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
        const message = createBaseDeleteOperationRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
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
        return { name: isSet(object.name) ? String(object.name) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== undefined && message.name !== "") {
            obj.name = message.name;
        }
        return obj;
    },
};
function createBaseWaitOperationRequest() {
    return {};
}
exports.WaitOperationRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== undefined && message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.timeout !== undefined) {
            duration_1.Duration.encode(message.timeout, writer.uint32(18).fork()).ldelim();
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
        const message = createBaseWaitOperationRequest();
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
                    message.timeout = duration_1.Duration.decode(reader, reader.uint32());
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
            timeout: isSet(object.timeout) ? duration_1.Duration.fromJSON(object.timeout) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== undefined && message.name !== "") {
            obj.name = message.name;
        }
        if (message.timeout !== undefined) {
            obj.timeout = duration_1.Duration.toJSON(message.timeout);
        }
        return obj;
    },
};
function createBaseOperationInfo() {
    return {};
}
exports.OperationInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.response_type !== undefined && message.response_type !== "") {
            writer.uint32(10).string(message.response_type);
        }
        if (message.metadata_type !== undefined && message.metadata_type !== "") {
            writer.uint32(18).string(message.metadata_type);
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
        const message = createBaseOperationInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.response_type = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.metadata_type = reader.string();
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
            response_type: isSet(object.response_type) ? String(object.response_type) : undefined,
            metadata_type: isSet(object.metadata_type) ? String(object.metadata_type) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.response_type !== undefined && message.response_type !== "") {
            obj.response_type = message.response_type;
        }
        if (message.metadata_type !== undefined && message.metadata_type !== "") {
            obj.metadata_type = message.metadata_type;
        }
        return obj;
    },
};
exports.operation_info = {
    number: 1049,
    tag: 8394,
    repeated: false,
    packed: false,
    encode: (value) => {
        const encoded = [];
        const writer = minimal_1.default.Writer.create();
        exports.OperationInfo.encode(value, writer.fork()).ldelim();
        encoded.push(writer.finish());
        return encoded;
    },
    decode: (tag, input) => {
        const reader = minimal_1.default.Reader.create(input[input.length - 1] ?? fail());
        return exports.OperationInfo.decode(reader, reader.uint32());
    },
};
exports.OperationsDefinition = {
    name: "Operations",
    fullName: "google.longrunning.Operations",
    methods: {
        /**
         * Lists operations that match the specified filter in the request. If the
         * server doesn't support this method, it returns `UNIMPLEMENTED`.
         *
         * NOTE: the `name` binding allows API services to override the binding
         * to use different resource name schemes, such as `users/* /operations`. To
         * override the binding, API services can add a binding such as
         * `"/v1/{name=users/*}/operations"` to their service configuration.
         * For backwards compatibility, the default name includes the operations
         * collection id, however overriding users must ensure the name binding
         * is the parent resource, without the operations collection id.
         */
        listOperations: {
            name: "ListOperations",
            requestType: exports.ListOperationsRequest,
            requestStream: false,
            responseType: exports.ListOperationsResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8410: [Buffer.from([11, 110, 97, 109, 101, 44, 102, 105, 108, 116, 101, 114])],
                    578365826: [
                        Buffer.from([
                            23,
                            18,
                            21,
                            47,
                            118,
                            49,
                            47,
                            123,
                            110,
                            97,
                            109,
                            101,
                            61,
                            111,
                            112,
                            101,
                            114,
                            97,
                            116,
                            105,
                            111,
                            110,
                            115,
                            125,
                        ]),
                    ],
                },
            },
        },
        /**
         * Gets the latest state of a long-running operation.  Clients can use this
         * method to poll the operation result at intervals as recommended by the API
         * service.
         */
        getOperation: {
            name: "GetOperation",
            requestType: exports.GetOperationRequest,
            requestStream: false,
            responseType: exports.Operation,
            responseStream: false,
            options: {
                _unknownFields: {
                    8410: [Buffer.from([4, 110, 97, 109, 101])],
                    578365826: [
                        Buffer.from([
                            26,
                            18,
                            24,
                            47,
                            118,
                            49,
                            47,
                            123,
                            110,
                            97,
                            109,
                            101,
                            61,
                            111,
                            112,
                            101,
                            114,
                            97,
                            116,
                            105,
                            111,
                            110,
                            115,
                            47,
                            42,
                            42,
                            125,
                        ]),
                    ],
                },
            },
        },
        /**
         * Deletes a long-running operation. This method indicates that the client is
         * no longer interested in the operation result. It does not cancel the
         * operation. If the server doesn't support this method, it returns
         * `google.rpc.Code.UNIMPLEMENTED`.
         */
        deleteOperation: {
            name: "DeleteOperation",
            requestType: exports.DeleteOperationRequest,
            requestStream: false,
            responseType: empty_1.Empty,
            responseStream: false,
            options: {
                _unknownFields: {
                    8410: [Buffer.from([4, 110, 97, 109, 101])],
                    578365826: [
                        Buffer.from([
                            26,
                            42,
                            24,
                            47,
                            118,
                            49,
                            47,
                            123,
                            110,
                            97,
                            109,
                            101,
                            61,
                            111,
                            112,
                            101,
                            114,
                            97,
                            116,
                            105,
                            111,
                            110,
                            115,
                            47,
                            42,
                            42,
                            125,
                        ]),
                    ],
                },
            },
        },
        /**
         * Starts asynchronous cancellation on a long-running operation.  The server
         * makes a best effort to cancel the operation, but success is not
         * guaranteed.  If the server doesn't support this method, it returns
         * `google.rpc.Code.UNIMPLEMENTED`.  Clients can use
         * [Operations.GetOperation][google.longrunning.Operations.GetOperation] or
         * other methods to check whether the cancellation succeeded or whether the
         * operation completed despite cancellation. On successful cancellation,
         * the operation is not deleted; instead, it becomes an operation with
         * an [Operation.error][google.longrunning.Operation.error] value with a [google.rpc.Status.code][google.rpc.Status.code] of 1,
         * corresponding to `Code.CANCELLED`.
         */
        cancelOperation: {
            name: "CancelOperation",
            requestType: exports.CancelOperationRequest,
            requestStream: false,
            responseType: empty_1.Empty,
            responseStream: false,
            options: {
                _unknownFields: {
                    8410: [Buffer.from([4, 110, 97, 109, 101])],
                    578365826: [
                        Buffer.from([
                            36,
                            34,
                            31,
                            47,
                            118,
                            49,
                            47,
                            123,
                            110,
                            97,
                            109,
                            101,
                            61,
                            111,
                            112,
                            101,
                            114,
                            97,
                            116,
                            105,
                            111,
                            110,
                            115,
                            47,
                            42,
                            42,
                            125,
                            58,
                            99,
                            97,
                            110,
                            99,
                            101,
                            108,
                            58,
                            1,
                            42,
                        ]),
                    ],
                },
            },
        },
        /**
         * Waits until the specified long-running operation is done or reaches at most
         * a specified timeout, returning the latest state.  If the operation is
         * already done, the latest state is immediately returned.  If the timeout
         * specified is greater than the default HTTP/RPC timeout, the HTTP/RPC
         * timeout is used.  If the server does not support this method, it returns
         * `google.rpc.Code.UNIMPLEMENTED`.
         * Note that this method is on a best-effort basis.  It may return the latest
         * state before the specified timeout (including immediately), meaning even an
         * immediate response is no guarantee that the operation is done.
         */
        waitOperation: {
            name: "WaitOperation",
            requestType: exports.WaitOperationRequest,
            requestStream: false,
            responseType: exports.Operation,
            responseStream: false,
            options: {},
        },
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
function fail(message) {
    throw new Error(message ?? "Failed");
}
