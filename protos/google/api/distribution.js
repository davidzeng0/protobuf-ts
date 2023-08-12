"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Distribution_Exemplar = exports.Distribution_BucketOptions_Explicit = exports.Distribution_BucketOptions_Exponential = exports.Distribution_BucketOptions_Linear = exports.Distribution_BucketOptions = exports.Distribution_Range = exports.Distribution = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const any_1 = require("../protobuf/any");
const timestamp_1 = require("../protobuf/timestamp");
function createBaseDistribution() {
    return {};
}
exports.Distribution = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.count !== undefined && message.count !== BigInt("0")) {
            writer.uint32(8).int64(message.count.toString());
        }
        if (message.mean !== undefined && message.mean !== 0) {
            writer.uint32(17).double(message.mean);
        }
        if (message.sum_of_squared_deviation !== undefined && message.sum_of_squared_deviation !== 0) {
            writer.uint32(25).double(message.sum_of_squared_deviation);
        }
        if (message.range !== undefined) {
            exports.Distribution_Range.encode(message.range, writer.uint32(34).fork()).ldelim();
        }
        if (message.bucket_options !== undefined) {
            exports.Distribution_BucketOptions.encode(message.bucket_options, writer.uint32(50).fork()).ldelim();
        }
        if (message.bucket_counts !== undefined && message.bucket_counts.length !== 0) {
            writer.uint32(58).fork();
            for (const v of message.bucket_counts) {
                writer.int64(v.toString());
            }
            writer.ldelim();
        }
        if (message.exemplars !== undefined && message.exemplars.length !== 0) {
            for (const v of message.exemplars) {
                exports.Distribution_Exemplar.encode(v, writer.uint32(82).fork()).ldelim();
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
        const message = createBaseDistribution();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.count = longToBigint(reader.int64());
                    continue;
                case 2:
                    if (tag !== 17) {
                        break;
                    }
                    message.mean = reader.double();
                    continue;
                case 3:
                    if (tag !== 25) {
                        break;
                    }
                    message.sum_of_squared_deviation = reader.double();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.range = exports.Distribution_Range.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.bucket_options = exports.Distribution_BucketOptions.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag === 56) {
                        if (message.bucket_counts === undefined) {
                            message.bucket_counts = [];
                        }
                        message.bucket_counts.push(longToBigint(reader.int64()));
                        continue;
                    }
                    if (tag === 58) {
                        if (message.bucket_counts === undefined) {
                            message.bucket_counts = [];
                        }
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.bucket_counts.push(longToBigint(reader.int64()));
                        }
                        continue;
                    }
                    break;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    if (message.exemplars === undefined) {
                        message.exemplars = [];
                    }
                    message.exemplars.push(exports.Distribution_Exemplar.decode(reader, reader.uint32()));
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
            count: isSet(object.count) ? BigInt(object.count) : undefined,
            mean: isSet(object.mean) ? Number(object.mean) : undefined,
            sum_of_squared_deviation: isSet(object.sum_of_squared_deviation)
                ? Number(object.sum_of_squared_deviation)
                : undefined,
            range: isSet(object.range) ? exports.Distribution_Range.fromJSON(object.range) : undefined,
            bucket_options: isSet(object.bucket_options)
                ? exports.Distribution_BucketOptions.fromJSON(object.bucket_options)
                : undefined,
            bucket_counts: Array.isArray(object?.bucket_counts) ? object.bucket_counts.map((e) => BigInt(e)) : undefined,
            exemplars: Array.isArray(object?.exemplars)
                ? object.exemplars.map((e) => exports.Distribution_Exemplar.fromJSON(e))
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.count !== undefined && message.count !== BigInt("0")) {
            obj.count = message.count.toString();
        }
        if (message.mean !== undefined && message.mean !== 0) {
            obj.mean = message.mean;
        }
        if (message.sum_of_squared_deviation !== undefined && message.sum_of_squared_deviation !== 0) {
            obj.sum_of_squared_deviation = message.sum_of_squared_deviation;
        }
        if (message.range !== undefined) {
            obj.range = exports.Distribution_Range.toJSON(message.range);
        }
        if (message.bucket_options !== undefined) {
            obj.bucket_options = exports.Distribution_BucketOptions.toJSON(message.bucket_options);
        }
        if (message.bucket_counts?.length) {
            obj.bucket_counts = message.bucket_counts.map((e) => e.toString());
        }
        if (message.exemplars?.length) {
            obj.exemplars = message.exemplars.map((e) => exports.Distribution_Exemplar.toJSON(e));
        }
        return obj;
    },
};
function createBaseDistribution_Range() {
    return {};
}
exports.Distribution_Range = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.min !== undefined && message.min !== 0) {
            writer.uint32(9).double(message.min);
        }
        if (message.max !== undefined && message.max !== 0) {
            writer.uint32(17).double(message.max);
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
        const message = createBaseDistribution_Range();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 9) {
                        break;
                    }
                    message.min = reader.double();
                    continue;
                case 2:
                    if (tag !== 17) {
                        break;
                    }
                    message.max = reader.double();
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
            min: isSet(object.min) ? Number(object.min) : undefined,
            max: isSet(object.max) ? Number(object.max) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.min !== undefined && message.min !== 0) {
            obj.min = message.min;
        }
        if (message.max !== undefined && message.max !== 0) {
            obj.max = message.max;
        }
        return obj;
    },
};
function createBaseDistribution_BucketOptions() {
    return {};
}
exports.Distribution_BucketOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.linear_buckets !== undefined) {
            exports.Distribution_BucketOptions_Linear.encode(message.linear_buckets, writer.uint32(10).fork()).ldelim();
        }
        if (message.exponential_buckets !== undefined) {
            exports.Distribution_BucketOptions_Exponential.encode(message.exponential_buckets, writer.uint32(18).fork()).ldelim();
        }
        if (message.explicit_buckets !== undefined) {
            exports.Distribution_BucketOptions_Explicit.encode(message.explicit_buckets, writer.uint32(26).fork()).ldelim();
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
        const message = createBaseDistribution_BucketOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.linear_buckets = exports.Distribution_BucketOptions_Linear.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.exponential_buckets = exports.Distribution_BucketOptions_Exponential.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.explicit_buckets = exports.Distribution_BucketOptions_Explicit.decode(reader, reader.uint32());
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
            linear_buckets: isSet(object.linear_buckets)
                ? exports.Distribution_BucketOptions_Linear.fromJSON(object.linear_buckets)
                : undefined,
            exponential_buckets: isSet(object.exponential_buckets)
                ? exports.Distribution_BucketOptions_Exponential.fromJSON(object.exponential_buckets)
                : undefined,
            explicit_buckets: isSet(object.explicit_buckets)
                ? exports.Distribution_BucketOptions_Explicit.fromJSON(object.explicit_buckets)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.linear_buckets !== undefined) {
            obj.linear_buckets = exports.Distribution_BucketOptions_Linear.toJSON(message.linear_buckets);
        }
        if (message.exponential_buckets !== undefined) {
            obj.exponential_buckets = exports.Distribution_BucketOptions_Exponential.toJSON(message.exponential_buckets);
        }
        if (message.explicit_buckets !== undefined) {
            obj.explicit_buckets = exports.Distribution_BucketOptions_Explicit.toJSON(message.explicit_buckets);
        }
        return obj;
    },
};
function createBaseDistribution_BucketOptions_Linear() {
    return {};
}
exports.Distribution_BucketOptions_Linear = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.num_finite_buckets !== undefined && message.num_finite_buckets !== 0) {
            writer.uint32(8).int32(message.num_finite_buckets);
        }
        if (message.width !== undefined && message.width !== 0) {
            writer.uint32(17).double(message.width);
        }
        if (message.offset !== undefined && message.offset !== 0) {
            writer.uint32(25).double(message.offset);
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
        const message = createBaseDistribution_BucketOptions_Linear();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.num_finite_buckets = reader.int32();
                    continue;
                case 2:
                    if (tag !== 17) {
                        break;
                    }
                    message.width = reader.double();
                    continue;
                case 3:
                    if (tag !== 25) {
                        break;
                    }
                    message.offset = reader.double();
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
            num_finite_buckets: isSet(object.num_finite_buckets) ? Number(object.num_finite_buckets) : undefined,
            width: isSet(object.width) ? Number(object.width) : undefined,
            offset: isSet(object.offset) ? Number(object.offset) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.num_finite_buckets !== undefined && message.num_finite_buckets !== 0) {
            obj.num_finite_buckets = Math.round(message.num_finite_buckets);
        }
        if (message.width !== undefined && message.width !== 0) {
            obj.width = message.width;
        }
        if (message.offset !== undefined && message.offset !== 0) {
            obj.offset = message.offset;
        }
        return obj;
    },
};
function createBaseDistribution_BucketOptions_Exponential() {
    return {};
}
exports.Distribution_BucketOptions_Exponential = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.num_finite_buckets !== undefined && message.num_finite_buckets !== 0) {
            writer.uint32(8).int32(message.num_finite_buckets);
        }
        if (message.growth_factor !== undefined && message.growth_factor !== 0) {
            writer.uint32(17).double(message.growth_factor);
        }
        if (message.scale !== undefined && message.scale !== 0) {
            writer.uint32(25).double(message.scale);
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
        const message = createBaseDistribution_BucketOptions_Exponential();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.num_finite_buckets = reader.int32();
                    continue;
                case 2:
                    if (tag !== 17) {
                        break;
                    }
                    message.growth_factor = reader.double();
                    continue;
                case 3:
                    if (tag !== 25) {
                        break;
                    }
                    message.scale = reader.double();
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
            num_finite_buckets: isSet(object.num_finite_buckets) ? Number(object.num_finite_buckets) : undefined,
            growth_factor: isSet(object.growth_factor) ? Number(object.growth_factor) : undefined,
            scale: isSet(object.scale) ? Number(object.scale) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.num_finite_buckets !== undefined && message.num_finite_buckets !== 0) {
            obj.num_finite_buckets = Math.round(message.num_finite_buckets);
        }
        if (message.growth_factor !== undefined && message.growth_factor !== 0) {
            obj.growth_factor = message.growth_factor;
        }
        if (message.scale !== undefined && message.scale !== 0) {
            obj.scale = message.scale;
        }
        return obj;
    },
};
function createBaseDistribution_BucketOptions_Explicit() {
    return {};
}
exports.Distribution_BucketOptions_Explicit = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.bounds !== undefined && message.bounds.length !== 0) {
            writer.uint32(10).fork();
            for (const v of message.bounds) {
                writer.double(v);
            }
            writer.ldelim();
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
        const message = createBaseDistribution_BucketOptions_Explicit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag === 9) {
                        if (message.bounds === undefined) {
                            message.bounds = [];
                        }
                        message.bounds.push(reader.double());
                        continue;
                    }
                    if (tag === 10) {
                        if (message.bounds === undefined) {
                            message.bounds = [];
                        }
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.bounds.push(reader.double());
                        }
                        continue;
                    }
                    break;
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
        return { bounds: Array.isArray(object?.bounds) ? object.bounds.map((e) => Number(e)) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.bounds?.length) {
            obj.bounds = message.bounds;
        }
        return obj;
    },
};
function createBaseDistribution_Exemplar() {
    return {};
}
exports.Distribution_Exemplar = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.value !== undefined && message.value !== 0) {
            writer.uint32(9).double(message.value);
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode(message.timestamp, writer.uint32(18).fork()).ldelim();
        }
        if (message.attachments !== undefined && message.attachments.length !== 0) {
            for (const v of message.attachments) {
                any_1.Any.encode(v, writer.uint32(26).fork()).ldelim();
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
        const message = createBaseDistribution_Exemplar();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 9) {
                        break;
                    }
                    message.value = reader.double();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.timestamp = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    if (message.attachments === undefined) {
                        message.attachments = [];
                    }
                    message.attachments.push(any_1.Any.decode(reader, reader.uint32()));
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
            value: isSet(object.value) ? Number(object.value) : undefined,
            timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
            attachments: Array.isArray(object?.attachments) ? object.attachments.map((e) => any_1.Any.fromJSON(e)) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.value !== undefined && message.value !== 0) {
            obj.value = message.value;
        }
        if (message.timestamp !== undefined) {
            obj.timestamp = fromTimestamp(message.timestamp).toISOString();
        }
        if (message.attachments?.length) {
            obj.attachments = message.attachments.map((e) => any_1.Any.toJSON(e));
        }
        return obj;
    },
};
function toTimestamp(date) {
    const seconds = BigInt(Math.trunc(date.getTime() / 1_000));
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = (Number(t.seconds.toString()) || 0) * 1_000;
    millis += (t.nanos || 0) / 1_000_000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return toTimestamp(o);
    }
    else if (typeof o === "string") {
        return toTimestamp(new Date(o));
    }
    else {
        return timestamp_1.Timestamp.fromJSON(o);
    }
}
function longToBigint(long) {
    return BigInt(long.toString());
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
