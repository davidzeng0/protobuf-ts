"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotaLimit_ValuesEntry = exports.QuotaLimit = exports.MetricRule_MetricCostsEntry = exports.MetricRule = exports.Quota = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
function createBaseQuota() {
    return {};
}
exports.Quota = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.limits !== undefined && message.limits.length !== 0) {
            for (const v of message.limits) {
                exports.QuotaLimit.encode(v, writer.uint32(26).fork()).ldelim();
            }
        }
        if (message.metric_rules !== undefined && message.metric_rules.length !== 0) {
            for (const v of message.metric_rules) {
                exports.MetricRule.encode(v, writer.uint32(34).fork()).ldelim();
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
        const message = createBaseQuota();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    if (message.limits === undefined) {
                        message.limits = [];
                    }
                    message.limits.push(exports.QuotaLimit.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    if (message.metric_rules === undefined) {
                        message.metric_rules = [];
                    }
                    message.metric_rules.push(exports.MetricRule.decode(reader, reader.uint32()));
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
            limits: Array.isArray(object?.limits) ? object.limits.map((e) => exports.QuotaLimit.fromJSON(e)) : undefined,
            metric_rules: Array.isArray(object?.metric_rules)
                ? object.metric_rules.map((e) => exports.MetricRule.fromJSON(e))
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.limits?.length) {
            obj.limits = message.limits.map((e) => exports.QuotaLimit.toJSON(e));
        }
        if (message.metric_rules?.length) {
            obj.metric_rules = message.metric_rules.map((e) => exports.MetricRule.toJSON(e));
        }
        return obj;
    },
};
function createBaseMetricRule() {
    return {};
}
exports.MetricRule = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.selector !== undefined && message.selector !== "") {
            writer.uint32(10).string(message.selector);
        }
        (message.metric_costs || new Map()).forEach((value, key) => {
            exports.MetricRule_MetricCostsEntry.encode({ key: key, value }, writer.uint32(18).fork()).ldelim();
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
        const message = createBaseMetricRule();
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
                    const entry2 = exports.MetricRule_MetricCostsEntry.decode(reader, reader.uint32());
                    if (entry2.value !== undefined) {
                        if (message.metric_costs === undefined) {
                            message.metric_costs = new Map();
                        }
                        message.metric_costs.set(entry2.key, entry2.value);
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
            selector: isSet(object.selector) ? String(object.selector) : undefined,
            metric_costs: isObject(object.metric_costs)
                ? Object.entries(object.metric_costs).reduce((acc, [key, value]) => {
                    acc.set(key, BigInt(value));
                    return acc;
                }, new Map())
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.selector !== undefined && message.selector !== "") {
            obj.selector = message.selector;
        }
        if (message.metric_costs?.size) {
            obj.metric_costs = {};
            message.metric_costs.forEach((v, k) => {
                obj.metric_costs[k] = v.toString();
            });
        }
        return obj;
    },
};
function createBaseMetricRule_MetricCostsEntry() {
    return { key: "", value: BigInt("0") };
}
exports.MetricRule_MetricCostsEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== BigInt("0")) {
            writer.uint32(16).int64(message.value.toString());
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
        const message = createBaseMetricRule_MetricCostsEntry();
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
                    if (tag !== 16) {
                        break;
                    }
                    message.value = longToBigint(reader.int64());
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
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? BigInt(object.value) : BigInt("0"),
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.value !== BigInt("0")) {
            obj.value = message.value.toString();
        }
        return obj;
    },
};
function createBaseQuotaLimit() {
    return {};
}
exports.QuotaLimit = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== undefined && message.name !== "") {
            writer.uint32(50).string(message.name);
        }
        if (message.description !== undefined && message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.default_limit !== undefined && message.default_limit !== BigInt("0")) {
            writer.uint32(24).int64(message.default_limit.toString());
        }
        if (message.max_limit !== undefined && message.max_limit !== BigInt("0")) {
            writer.uint32(32).int64(message.max_limit.toString());
        }
        if (message.free_tier !== undefined && message.free_tier !== BigInt("0")) {
            writer.uint32(56).int64(message.free_tier.toString());
        }
        if (message.duration !== undefined && message.duration !== "") {
            writer.uint32(42).string(message.duration);
        }
        if (message.metric !== undefined && message.metric !== "") {
            writer.uint32(66).string(message.metric);
        }
        if (message.unit !== undefined && message.unit !== "") {
            writer.uint32(74).string(message.unit);
        }
        (message.values || new Map()).forEach((value, key) => {
            exports.QuotaLimit_ValuesEntry.encode({ key: key, value }, writer.uint32(82).fork()).ldelim();
        });
        if (message.display_name !== undefined && message.display_name !== "") {
            writer.uint32(98).string(message.display_name);
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
        const message = createBaseQuotaLimit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.default_limit = longToBigint(reader.int64());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.max_limit = longToBigint(reader.int64());
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.free_tier = longToBigint(reader.int64());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.duration = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.metric = reader.string();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.unit = reader.string();
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    const entry10 = exports.QuotaLimit_ValuesEntry.decode(reader, reader.uint32());
                    if (entry10.value !== undefined) {
                        if (message.values === undefined) {
                            message.values = new Map();
                        }
                        message.values.set(entry10.key, entry10.value);
                    }
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.display_name = reader.string();
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
            description: isSet(object.description) ? String(object.description) : undefined,
            default_limit: isSet(object.default_limit) ? BigInt(object.default_limit) : undefined,
            max_limit: isSet(object.max_limit) ? BigInt(object.max_limit) : undefined,
            free_tier: isSet(object.free_tier) ? BigInt(object.free_tier) : undefined,
            duration: isSet(object.duration) ? String(object.duration) : undefined,
            metric: isSet(object.metric) ? String(object.metric) : undefined,
            unit: isSet(object.unit) ? String(object.unit) : undefined,
            values: isObject(object.values)
                ? Object.entries(object.values).reduce((acc, [key, value]) => {
                    acc.set(key, BigInt(value));
                    return acc;
                }, new Map())
                : undefined,
            display_name: isSet(object.display_name) ? String(object.display_name) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== undefined && message.name !== "") {
            obj.name = message.name;
        }
        if (message.description !== undefined && message.description !== "") {
            obj.description = message.description;
        }
        if (message.default_limit !== undefined && message.default_limit !== BigInt("0")) {
            obj.default_limit = message.default_limit.toString();
        }
        if (message.max_limit !== undefined && message.max_limit !== BigInt("0")) {
            obj.max_limit = message.max_limit.toString();
        }
        if (message.free_tier !== undefined && message.free_tier !== BigInt("0")) {
            obj.free_tier = message.free_tier.toString();
        }
        if (message.duration !== undefined && message.duration !== "") {
            obj.duration = message.duration;
        }
        if (message.metric !== undefined && message.metric !== "") {
            obj.metric = message.metric;
        }
        if (message.unit !== undefined && message.unit !== "") {
            obj.unit = message.unit;
        }
        if (message.values?.size) {
            obj.values = {};
            message.values.forEach((v, k) => {
                obj.values[k] = v.toString();
            });
        }
        if (message.display_name !== undefined && message.display_name !== "") {
            obj.display_name = message.display_name;
        }
        return obj;
    },
};
function createBaseQuotaLimit_ValuesEntry() {
    return { key: "", value: BigInt("0") };
}
exports.QuotaLimit_ValuesEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== BigInt("0")) {
            writer.uint32(16).int64(message.value.toString());
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
        const message = createBaseQuotaLimit_ValuesEntry();
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
                    if (tag !== 16) {
                        break;
                    }
                    message.value = longToBigint(reader.int64());
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
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? BigInt(object.value) : BigInt("0"),
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.value !== BigInt("0")) {
            obj.value = message.value.toString();
        }
        return obj;
    },
};
function longToBigint(long) {
    return BigInt(long.toString());
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
