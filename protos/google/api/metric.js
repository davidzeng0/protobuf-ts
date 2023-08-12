"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Metric_LabelsEntry = exports.Metric = exports.MetricDescriptor_MetricDescriptorMetadata = exports.MetricDescriptor = exports.metricDescriptor_ValueTypeToNumber = exports.metricDescriptor_ValueTypeToJSON = exports.metricDescriptor_ValueTypeFromJSON = exports.MetricDescriptor_ValueType = exports.metricDescriptor_MetricKindToNumber = exports.metricDescriptor_MetricKindToJSON = exports.metricDescriptor_MetricKindFromJSON = exports.MetricDescriptor_MetricKind = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const duration_1 = require("../protobuf/duration");
const label_1 = require("./label");
const launch_stage_1 = require("./launch_stage");
/**
 * The kind of measurement. It describes how the data is reported.
 * For information on setting the start time and end time based on
 * the MetricKind, see [TimeInterval][google.monitoring.v3.TimeInterval].
 */
var MetricDescriptor_MetricKind;
(function (MetricDescriptor_MetricKind) {
    /** METRIC_KIND_UNSPECIFIED - Do not use this default value. */
    MetricDescriptor_MetricKind["METRIC_KIND_UNSPECIFIED"] = "METRIC_KIND_UNSPECIFIED";
    /** GAUGE - An instantaneous measurement of a value. */
    MetricDescriptor_MetricKind["GAUGE"] = "GAUGE";
    /** DELTA - The change in a value during a time interval. */
    MetricDescriptor_MetricKind["DELTA"] = "DELTA";
    /**
     * CUMULATIVE - A value accumulated over a time interval.  Cumulative
     * measurements in a time series should have the same start time
     * and increasing end times, until an event resets the cumulative
     * value to zero and sets a new start time for the following
     * points.
     */
    MetricDescriptor_MetricKind["CUMULATIVE"] = "CUMULATIVE";
    MetricDescriptor_MetricKind["UNRECOGNIZED"] = "UNRECOGNIZED";
})(MetricDescriptor_MetricKind || (exports.MetricDescriptor_MetricKind = MetricDescriptor_MetricKind = {}));
function metricDescriptor_MetricKindFromJSON(object) {
    switch (object) {
        case 0:
        case "METRIC_KIND_UNSPECIFIED":
            return MetricDescriptor_MetricKind.METRIC_KIND_UNSPECIFIED;
        case 1:
        case "GAUGE":
            return MetricDescriptor_MetricKind.GAUGE;
        case 2:
        case "DELTA":
            return MetricDescriptor_MetricKind.DELTA;
        case 3:
        case "CUMULATIVE":
            return MetricDescriptor_MetricKind.CUMULATIVE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return MetricDescriptor_MetricKind.UNRECOGNIZED;
    }
}
exports.metricDescriptor_MetricKindFromJSON = metricDescriptor_MetricKindFromJSON;
function metricDescriptor_MetricKindToJSON(object) {
    switch (object) {
        case MetricDescriptor_MetricKind.METRIC_KIND_UNSPECIFIED:
            return "METRIC_KIND_UNSPECIFIED";
        case MetricDescriptor_MetricKind.GAUGE:
            return "GAUGE";
        case MetricDescriptor_MetricKind.DELTA:
            return "DELTA";
        case MetricDescriptor_MetricKind.CUMULATIVE:
            return "CUMULATIVE";
        case MetricDescriptor_MetricKind.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.metricDescriptor_MetricKindToJSON = metricDescriptor_MetricKindToJSON;
function metricDescriptor_MetricKindToNumber(object) {
    switch (object) {
        case MetricDescriptor_MetricKind.METRIC_KIND_UNSPECIFIED:
            return 0;
        case MetricDescriptor_MetricKind.GAUGE:
            return 1;
        case MetricDescriptor_MetricKind.DELTA:
            return 2;
        case MetricDescriptor_MetricKind.CUMULATIVE:
            return 3;
        case MetricDescriptor_MetricKind.UNRECOGNIZED:
        default:
            return -1;
    }
}
exports.metricDescriptor_MetricKindToNumber = metricDescriptor_MetricKindToNumber;
/** The value type of a metric. */
var MetricDescriptor_ValueType;
(function (MetricDescriptor_ValueType) {
    /** VALUE_TYPE_UNSPECIFIED - Do not use this default value. */
    MetricDescriptor_ValueType["VALUE_TYPE_UNSPECIFIED"] = "VALUE_TYPE_UNSPECIFIED";
    /**
     * BOOL - The value is a boolean.
     * This value type can be used only if the metric kind is `GAUGE`.
     */
    MetricDescriptor_ValueType["BOOL"] = "BOOL";
    /** INT64 - The value is a signed 64-bit integer. */
    MetricDescriptor_ValueType["INT64"] = "INT64";
    /** DOUBLE - The value is a double precision floating point number. */
    MetricDescriptor_ValueType["DOUBLE"] = "DOUBLE";
    /**
     * STRING - The value is a text string.
     * This value type can be used only if the metric kind is `GAUGE`.
     */
    MetricDescriptor_ValueType["STRING"] = "STRING";
    /** DISTRIBUTION - The value is a [`Distribution`][google.api.Distribution]. */
    MetricDescriptor_ValueType["DISTRIBUTION"] = "DISTRIBUTION";
    /** MONEY - The value is money. */
    MetricDescriptor_ValueType["MONEY"] = "MONEY";
    MetricDescriptor_ValueType["UNRECOGNIZED"] = "UNRECOGNIZED";
})(MetricDescriptor_ValueType || (exports.MetricDescriptor_ValueType = MetricDescriptor_ValueType = {}));
function metricDescriptor_ValueTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "VALUE_TYPE_UNSPECIFIED":
            return MetricDescriptor_ValueType.VALUE_TYPE_UNSPECIFIED;
        case 1:
        case "BOOL":
            return MetricDescriptor_ValueType.BOOL;
        case 2:
        case "INT64":
            return MetricDescriptor_ValueType.INT64;
        case 3:
        case "DOUBLE":
            return MetricDescriptor_ValueType.DOUBLE;
        case 4:
        case "STRING":
            return MetricDescriptor_ValueType.STRING;
        case 5:
        case "DISTRIBUTION":
            return MetricDescriptor_ValueType.DISTRIBUTION;
        case 6:
        case "MONEY":
            return MetricDescriptor_ValueType.MONEY;
        case -1:
        case "UNRECOGNIZED":
        default:
            return MetricDescriptor_ValueType.UNRECOGNIZED;
    }
}
exports.metricDescriptor_ValueTypeFromJSON = metricDescriptor_ValueTypeFromJSON;
function metricDescriptor_ValueTypeToJSON(object) {
    switch (object) {
        case MetricDescriptor_ValueType.VALUE_TYPE_UNSPECIFIED:
            return "VALUE_TYPE_UNSPECIFIED";
        case MetricDescriptor_ValueType.BOOL:
            return "BOOL";
        case MetricDescriptor_ValueType.INT64:
            return "INT64";
        case MetricDescriptor_ValueType.DOUBLE:
            return "DOUBLE";
        case MetricDescriptor_ValueType.STRING:
            return "STRING";
        case MetricDescriptor_ValueType.DISTRIBUTION:
            return "DISTRIBUTION";
        case MetricDescriptor_ValueType.MONEY:
            return "MONEY";
        case MetricDescriptor_ValueType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.metricDescriptor_ValueTypeToJSON = metricDescriptor_ValueTypeToJSON;
function metricDescriptor_ValueTypeToNumber(object) {
    switch (object) {
        case MetricDescriptor_ValueType.VALUE_TYPE_UNSPECIFIED:
            return 0;
        case MetricDescriptor_ValueType.BOOL:
            return 1;
        case MetricDescriptor_ValueType.INT64:
            return 2;
        case MetricDescriptor_ValueType.DOUBLE:
            return 3;
        case MetricDescriptor_ValueType.STRING:
            return 4;
        case MetricDescriptor_ValueType.DISTRIBUTION:
            return 5;
        case MetricDescriptor_ValueType.MONEY:
            return 6;
        case MetricDescriptor_ValueType.UNRECOGNIZED:
        default:
            return -1;
    }
}
exports.metricDescriptor_ValueTypeToNumber = metricDescriptor_ValueTypeToNumber;
function createBaseMetricDescriptor() {
    return {};
}
exports.MetricDescriptor = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== undefined && message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.type !== undefined && message.type !== "") {
            writer.uint32(66).string(message.type);
        }
        if (message.labels !== undefined && message.labels.length !== 0) {
            for (const v of message.labels) {
                label_1.LabelDescriptor.encode(v, writer.uint32(18).fork()).ldelim();
            }
        }
        if (message.metric_kind !== undefined && message.metric_kind !== MetricDescriptor_MetricKind.METRIC_KIND_UNSPECIFIED) {
            writer.uint32(24).int32(metricDescriptor_MetricKindToNumber(message.metric_kind));
        }
        if (message.value_type !== undefined && message.value_type !== MetricDescriptor_ValueType.VALUE_TYPE_UNSPECIFIED) {
            writer.uint32(32).int32(metricDescriptor_ValueTypeToNumber(message.value_type));
        }
        if (message.unit !== undefined && message.unit !== "") {
            writer.uint32(42).string(message.unit);
        }
        if (message.description !== undefined && message.description !== "") {
            writer.uint32(50).string(message.description);
        }
        if (message.display_name !== undefined && message.display_name !== "") {
            writer.uint32(58).string(message.display_name);
        }
        if (message.metadata !== undefined) {
            exports.MetricDescriptor_MetricDescriptorMetadata.encode(message.metadata, writer.uint32(82).fork()).ldelim();
        }
        if (message.launch_stage !== undefined && message.launch_stage !== launch_stage_1.LaunchStage.LAUNCH_STAGE_UNSPECIFIED) {
            writer.uint32(96).int32((0, launch_stage_1.launchStageToNumber)(message.launch_stage));
        }
        if (message.monitored_resource_types !== undefined && message.monitored_resource_types.length !== 0) {
            for (const v of message.monitored_resource_types) {
                writer.uint32(106).string(v);
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
        const message = createBaseMetricDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.type = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    if (message.labels === undefined) {
                        message.labels = [];
                    }
                    message.labels.push(label_1.LabelDescriptor.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.metric_kind = metricDescriptor_MetricKindFromJSON(reader.int32());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.value_type = metricDescriptor_ValueTypeFromJSON(reader.int32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.unit = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.display_name = reader.string();
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.metadata = exports.MetricDescriptor_MetricDescriptorMetadata.decode(reader, reader.uint32());
                    continue;
                case 12:
                    if (tag !== 96) {
                        break;
                    }
                    message.launch_stage = (0, launch_stage_1.launchStageFromJSON)(reader.int32());
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    if (message.monitored_resource_types === undefined) {
                        message.monitored_resource_types = [];
                    }
                    message.monitored_resource_types.push(reader.string());
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
            type: isSet(object.type) ? String(object.type) : undefined,
            labels: Array.isArray(object?.labels) ? object.labels.map((e) => label_1.LabelDescriptor.fromJSON(e)) : undefined,
            metric_kind: isSet(object.metric_kind) ? metricDescriptor_MetricKindFromJSON(object.metric_kind) : undefined,
            value_type: isSet(object.value_type) ? metricDescriptor_ValueTypeFromJSON(object.value_type) : undefined,
            unit: isSet(object.unit) ? String(object.unit) : undefined,
            description: isSet(object.description) ? String(object.description) : undefined,
            display_name: isSet(object.display_name) ? String(object.display_name) : undefined,
            metadata: isSet(object.metadata)
                ? exports.MetricDescriptor_MetricDescriptorMetadata.fromJSON(object.metadata)
                : undefined,
            launch_stage: isSet(object.launch_stage) ? (0, launch_stage_1.launchStageFromJSON)(object.launch_stage) : undefined,
            monitored_resource_types: Array.isArray(object?.monitored_resource_types)
                ? object.monitored_resource_types.map((e) => String(e))
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== undefined && message.name !== "") {
            obj.name = message.name;
        }
        if (message.type !== undefined && message.type !== "") {
            obj.type = message.type;
        }
        if (message.labels?.length) {
            obj.labels = message.labels.map((e) => label_1.LabelDescriptor.toJSON(e));
        }
        if (message.metric_kind !== undefined && message.metric_kind !== MetricDescriptor_MetricKind.METRIC_KIND_UNSPECIFIED) {
            obj.metric_kind = metricDescriptor_MetricKindToJSON(message.metric_kind);
        }
        if (message.value_type !== undefined && message.value_type !== MetricDescriptor_ValueType.VALUE_TYPE_UNSPECIFIED) {
            obj.value_type = metricDescriptor_ValueTypeToJSON(message.value_type);
        }
        if (message.unit !== undefined && message.unit !== "") {
            obj.unit = message.unit;
        }
        if (message.description !== undefined && message.description !== "") {
            obj.description = message.description;
        }
        if (message.display_name !== undefined && message.display_name !== "") {
            obj.display_name = message.display_name;
        }
        if (message.metadata !== undefined) {
            obj.metadata = exports.MetricDescriptor_MetricDescriptorMetadata.toJSON(message.metadata);
        }
        if (message.launch_stage !== undefined && message.launch_stage !== launch_stage_1.LaunchStage.LAUNCH_STAGE_UNSPECIFIED) {
            obj.launch_stage = (0, launch_stage_1.launchStageToJSON)(message.launch_stage);
        }
        if (message.monitored_resource_types?.length) {
            obj.monitored_resource_types = message.monitored_resource_types;
        }
        return obj;
    },
};
function createBaseMetricDescriptor_MetricDescriptorMetadata() {
    return {};
}
exports.MetricDescriptor_MetricDescriptorMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.launch_stage !== undefined && message.launch_stage !== launch_stage_1.LaunchStage.LAUNCH_STAGE_UNSPECIFIED) {
            writer.uint32(8).int32((0, launch_stage_1.launchStageToNumber)(message.launch_stage));
        }
        if (message.sample_period !== undefined) {
            duration_1.Duration.encode(message.sample_period, writer.uint32(18).fork()).ldelim();
        }
        if (message.ingest_delay !== undefined) {
            duration_1.Duration.encode(message.ingest_delay, writer.uint32(26).fork()).ldelim();
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
        const message = createBaseMetricDescriptor_MetricDescriptorMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.launch_stage = (0, launch_stage_1.launchStageFromJSON)(reader.int32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.sample_period = duration_1.Duration.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.ingest_delay = duration_1.Duration.decode(reader, reader.uint32());
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
            launch_stage: isSet(object.launch_stage) ? (0, launch_stage_1.launchStageFromJSON)(object.launch_stage) : undefined,
            sample_period: isSet(object.sample_period) ? duration_1.Duration.fromJSON(object.sample_period) : undefined,
            ingest_delay: isSet(object.ingest_delay) ? duration_1.Duration.fromJSON(object.ingest_delay) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.launch_stage !== undefined && message.launch_stage !== launch_stage_1.LaunchStage.LAUNCH_STAGE_UNSPECIFIED) {
            obj.launch_stage = (0, launch_stage_1.launchStageToJSON)(message.launch_stage);
        }
        if (message.sample_period !== undefined) {
            obj.sample_period = duration_1.Duration.toJSON(message.sample_period);
        }
        if (message.ingest_delay !== undefined) {
            obj.ingest_delay = duration_1.Duration.toJSON(message.ingest_delay);
        }
        return obj;
    },
};
function createBaseMetric() {
    return {};
}
exports.Metric = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.type !== undefined && message.type !== "") {
            writer.uint32(26).string(message.type);
        }
        (message.labels || new Map()).forEach((value, key) => {
            exports.Metric_LabelsEntry.encode({ key: key, value }, writer.uint32(18).fork()).ldelim();
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
        const message = createBaseMetric();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.type = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    const entry2 = exports.Metric_LabelsEntry.decode(reader, reader.uint32());
                    if (entry2.value !== undefined) {
                        if (message.labels === undefined) {
                            message.labels = new Map();
                        }
                        message.labels.set(entry2.key, entry2.value);
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
            type: isSet(object.type) ? String(object.type) : undefined,
            labels: isObject(object.labels)
                ? Object.entries(object.labels).reduce((acc, [key, value]) => {
                    acc.set(key, String(value));
                    return acc;
                }, new Map())
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.type !== undefined && message.type !== "") {
            obj.type = message.type;
        }
        if (message.labels?.size) {
            obj.labels = {};
            message.labels.forEach((v, k) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },
};
function createBaseMetric_LabelsEntry() {
    return { key: "", value: "" };
}
exports.Metric_LabelsEntry = {
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
        const message = createBaseMetric_LabelsEntry();
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
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
