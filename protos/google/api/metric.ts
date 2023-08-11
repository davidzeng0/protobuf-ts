/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Duration } from "../protobuf/duration";
import { LabelDescriptor } from "./label";
import { LaunchStage, launchStageFromJSON, launchStageToJSON } from "./launch_stage";

/**
 * Defines a metric type and its schema. Once a metric descriptor is created,
 * deleting or altering it stops data collection and makes the metric type's
 * existing data unusable.
 */
export interface MetricDescriptor {
  /** The resource name of the metric descriptor. */
  name?:
    | string
    | undefined;
  /**
   * The metric type, including its DNS name prefix. The type is not
   * URL-encoded. All user-defined metric types have the DNS name
   * `custom.googleapis.com` or `external.googleapis.com`. Metric types should
   * use a natural hierarchical grouping. For example:
   *
   *     "custom.googleapis.com/invoice/paid/amount"
   *     "external.googleapis.com/prometheus/up"
   *     "appengine.googleapis.com/http/server/response_latencies"
   */
  type?:
    | string
    | undefined;
  /**
   * The set of labels that can be used to describe a specific
   * instance of this metric type. For example, the
   * `appengine.googleapis.com/http/server/response_latencies` metric
   * type has a label for the HTTP response code, `response_code`, so
   * you can look at latencies for successful responses or just
   * for responses that failed.
   */
  labels?:
    | LabelDescriptor[]
    | undefined;
  /**
   * Whether the metric records instantaneous values, changes to a value, etc.
   * Some combinations of `metric_kind` and `value_type` might not be supported.
   */
  metric_kind?:
    | MetricDescriptor_MetricKind
    | undefined;
  /**
   * Whether the measurement is an integer, a floating-point number, etc.
   * Some combinations of `metric_kind` and `value_type` might not be supported.
   */
  value_type?:
    | MetricDescriptor_ValueType
    | undefined;
  /**
   * The units in which the metric value is reported. It is only applicable
   * if the `value_type` is `INT64`, `DOUBLE`, or `DISTRIBUTION`. The `unit`
   * defines the representation of the stored metric values.
   *
   * Different systems might scale the values to be more easily displayed (so a
   * value of `0.02kBy` _might_ be displayed as `20By`, and a value of
   * `3523kBy` _might_ be displayed as `3.5MBy`). However, if the `unit` is
   * `kBy`, then the value of the metric is always in thousands of bytes, no
   * matter how it might be displayed.
   *
   * If you want a custom metric to record the exact number of CPU-seconds used
   * by a job, you can create an `INT64 CUMULATIVE` metric whose `unit` is
   * `s{CPU}` (or equivalently `1s{CPU}` or just `s`). If the job uses 12,005
   * CPU-seconds, then the value is written as `12005`.
   *
   * Alternatively, if you want a custom metric to record data in a more
   * granular way, you can create a `DOUBLE CUMULATIVE` metric whose `unit` is
   * `ks{CPU}`, and then write the value `12.005` (which is `12005/1000`),
   * or use `Kis{CPU}` and write `11.723` (which is `12005/1024`).
   *
   * The supported units are a subset of [The Unified Code for Units of
   * Measure](https://unitsofmeasure.org/ucum.html) standard:
   *
   * **Basic units (UNIT)**
   *
   * * `bit`   bit
   * * `By`    byte
   * * `s`     second
   * * `min`   minute
   * * `h`     hour
   * * `d`     day
   * * `1`     dimensionless
   *
   * **Prefixes (PREFIX)**
   *
   * * `k`     kilo    (10^3)
   * * `M`     mega    (10^6)
   * * `G`     giga    (10^9)
   * * `T`     tera    (10^12)
   * * `P`     peta    (10^15)
   * * `E`     exa     (10^18)
   * * `Z`     zetta   (10^21)
   * * `Y`     yotta   (10^24)
   *
   * * `m`     milli   (10^-3)
   * * `u`     micro   (10^-6)
   * * `n`     nano    (10^-9)
   * * `p`     pico    (10^-12)
   * * `f`     femto   (10^-15)
   * * `a`     atto    (10^-18)
   * * `z`     zepto   (10^-21)
   * * `y`     yocto   (10^-24)
   *
   * * `Ki`    kibi    (2^10)
   * * `Mi`    mebi    (2^20)
   * * `Gi`    gibi    (2^30)
   * * `Ti`    tebi    (2^40)
   * * `Pi`    pebi    (2^50)
   *
   * **Grammar**
   *
   * The grammar also includes these connectors:
   *
   * * `/`    division or ratio (as an infix operator). For examples,
   *          `kBy/{email}` or `MiBy/10ms` (although you should almost never
   *          have `/s` in a metric `unit`; rates should always be computed at
   *          query time from the underlying cumulative or delta value).
   * * `.`    multiplication or composition (as an infix operator). For
   *          examples, `GBy.d` or `k{watt}.h`.
   *
   * The grammar for a unit is as follows:
   *
   *     Expression = Component { "." Component } { "/" Component } ;
   *
   *     Component = ( [ PREFIX ] UNIT | "%" ) [ Annotation ]
   *               | Annotation
   *               | "1"
   *               ;
   *
   *     Annotation = "{" NAME "}" ;
   *
   * Notes:
   *
   * * `Annotation` is just a comment if it follows a `UNIT`. If the annotation
   *    is used alone, then the unit is equivalent to `1`. For examples,
   *    `{request}/s == 1/s`, `By{transmitted}/s == By/s`.
   * * `NAME` is a sequence of non-blank printable ASCII characters not
   *    containing `{` or `}`.
   * * `1` represents a unitary [dimensionless
   *    unit](https://en.wikipedia.org/wiki/Dimensionless_quantity) of 1, such
   *    as in `1/s`. It is typically used when none of the basic units are
   *    appropriate. For example, "new users per day" can be represented as
   *    `1/d` or `{new-users}/d` (and a metric value `5` would mean "5 new
   *    users). Alternatively, "thousands of page views per day" would be
   *    represented as `1000/d` or `k1/d` or `k{page_views}/d` (and a metric
   *    value of `5.3` would mean "5300 page views per day").
   * * `%` represents dimensionless value of 1/100, and annotates values giving
   *    a percentage (so the metric values are typically in the range of 0..100,
   *    and a metric value `3` means "3 percent").
   * * `10^2.%` indicates a metric contains a ratio, typically in the range
   *    0..1, that will be multiplied by 100 and displayed as a percentage
   *    (so a metric value `0.03` means "3 percent").
   */
  unit?:
    | string
    | undefined;
  /** A detailed description of the metric, which can be used in documentation. */
  description?:
    | string
    | undefined;
  /**
   * A concise name for the metric, which can be displayed in user interfaces.
   * Use sentence case without an ending period, for example "Request count".
   * This field is optional but it is recommended to be set for any metrics
   * associated with user-visible concepts, such as Quota.
   */
  display_name?:
    | string
    | undefined;
  /** Optional. Metadata which can be used to guide usage of the metric. */
  metadata?:
    | MetricDescriptor_MetricDescriptorMetadata
    | undefined;
  /** Optional. The launch stage of the metric definition. */
  launch_stage?:
    | LaunchStage
    | undefined;
  /**
   * Read-only. If present, then a [time
   * series][google.monitoring.v3.TimeSeries], which is identified partially by
   * a metric type and a [MonitoredResourceDescriptor][google.api.MonitoredResourceDescriptor], that is associated
   * with this metric type can only be associated with one of the monitored
   * resource types listed here.
   */
  monitored_resource_types?: string[] | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/**
 * The kind of measurement. It describes how the data is reported.
 * For information on setting the start time and end time based on
 * the MetricKind, see [TimeInterval][google.monitoring.v3.TimeInterval].
 */
export enum MetricDescriptor_MetricKind {
  /** METRIC_KIND_UNSPECIFIED - Do not use this default value. */
  METRIC_KIND_UNSPECIFIED = 0,
  /** GAUGE - An instantaneous measurement of a value. */
  GAUGE = 1,
  /** DELTA - The change in a value during a time interval. */
  DELTA = 2,
  /**
   * CUMULATIVE - A value accumulated over a time interval.  Cumulative
   * measurements in a time series should have the same start time
   * and increasing end times, until an event resets the cumulative
   * value to zero and sets a new start time for the following
   * points.
   */
  CUMULATIVE = 3,
  UNRECOGNIZED = -1,
}

export function metricDescriptor_MetricKindFromJSON(object: any): MetricDescriptor_MetricKind {
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

export function metricDescriptor_MetricKindToJSON(object: MetricDescriptor_MetricKind): string {
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

/** The value type of a metric. */
export enum MetricDescriptor_ValueType {
  /** VALUE_TYPE_UNSPECIFIED - Do not use this default value. */
  VALUE_TYPE_UNSPECIFIED = 0,
  /**
   * BOOL - The value is a boolean.
   * This value type can be used only if the metric kind is `GAUGE`.
   */
  BOOL = 1,
  /** INT64 - The value is a signed 64-bit integer. */
  INT64 = 2,
  /** DOUBLE - The value is a double precision floating point number. */
  DOUBLE = 3,
  /**
   * STRING - The value is a text string.
   * This value type can be used only if the metric kind is `GAUGE`.
   */
  STRING = 4,
  /** DISTRIBUTION - The value is a [`Distribution`][google.api.Distribution]. */
  DISTRIBUTION = 5,
  /** MONEY - The value is money. */
  MONEY = 6,
  UNRECOGNIZED = -1,
}

export function metricDescriptor_ValueTypeFromJSON(object: any): MetricDescriptor_ValueType {
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

export function metricDescriptor_ValueTypeToJSON(object: MetricDescriptor_ValueType): string {
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

/** Additional annotations that can be used to guide the usage of a metric. */
export interface MetricDescriptor_MetricDescriptorMetadata {
  /**
   * Deprecated. Must use the [MetricDescriptor.launch_stage][google.api.MetricDescriptor.launch_stage] instead.
   *
   * @deprecated
   */
  launch_stage?:
    | LaunchStage
    | undefined;
  /**
   * The sampling period of metric data points. For metrics which are written
   * periodically, consecutive data points are stored at this time interval,
   * excluding data loss due to errors. Metrics with a higher granularity have
   * a smaller sampling period.
   */
  sample_period?:
    | Duration
    | undefined;
  /**
   * The delay of data points caused by ingestion. Data points older than this
   * age are guaranteed to be ingested and available to be read, excluding
   * data loss due to errors.
   */
  ingest_delay?: Duration | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/**
 * A specific metric, identified by specifying values for all of the
 * labels of a [`MetricDescriptor`][google.api.MetricDescriptor].
 */
export interface Metric {
  /**
   * An existing metric type, see [google.api.MetricDescriptor][google.api.MetricDescriptor].
   * For example, `custom.googleapis.com/invoice/paid/amount`.
   */
  type?:
    | string
    | undefined;
  /**
   * The set of label values that uniquely identify this metric. All
   * labels listed in the `MetricDescriptor` must be assigned values.
   */
  labels?: Map<string, string> | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

export interface Metric_LabelsEntry {
  key: string;
  value: string;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

function createBaseMetricDescriptor(): MetricDescriptor {
  return {};
}

export const MetricDescriptor = {
  encode(message: MetricDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined && message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.type !== undefined && message.type !== "") {
      writer.uint32(66).string(message.type);
    }
    if (message.labels !== undefined && message.labels.length !== 0) {
      for (const v of message.labels) {
        LabelDescriptor.encode(v!, writer.uint32(18).fork()).ldelim();
      }
    }
    if (message.metric_kind !== undefined && message.metric_kind !== 0) {
      writer.uint32(24).int32(message.metric_kind);
    }
    if (message.value_type !== undefined && message.value_type !== 0) {
      writer.uint32(32).int32(message.value_type);
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
      MetricDescriptor_MetricDescriptorMetadata.encode(message.metadata, writer.uint32(82).fork()).ldelim();
    }
    if (message.launch_stage !== undefined && message.launch_stage !== 0) {
      writer.uint32(96).int32(message.launch_stage);
    }
    if (message.monitored_resource_types !== undefined && message.monitored_resource_types.length !== 0) {
      for (const v of message.monitored_resource_types) {
        writer.uint32(106).string(v!);
      }
    }
    if (message._unknownFields !== undefined) {
      for (const [key, values] of Object.entries(message._unknownFields)) {
        const tag = parseInt(key, 10);
        for (const value of values) {
          writer.uint32(tag);
          (writer as any)["_push"](
            (val: Uint8Array, buf: Buffer, pos: number) => buf.set(val, pos),
            value.length,
            value,
          );
        }
      }
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MetricDescriptor {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
          message.labels!.push(LabelDescriptor.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.metric_kind = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.value_type = reader.int32() as any;
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

          message.metadata = MetricDescriptor_MetricDescriptorMetadata.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.launch_stage = reader.int32() as any;
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          if (message.monitored_resource_types === undefined) {
            message.monitored_resource_types = [];
          }
          message.monitored_resource_types!.push(reader.string());
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
      } else {
        list.push(buf);
      }
    }
    return message;
  },

  fromJSON(object: any): MetricDescriptor {
    return {
      name: isSet(object.name) ? String(object.name) : undefined,
      type: isSet(object.type) ? String(object.type) : undefined,
      labels: Array.isArray(object?.labels) ? object.labels.map((e: any) => LabelDescriptor.fromJSON(e)) : undefined,
      metric_kind: isSet(object.metric_kind) ? metricDescriptor_MetricKindFromJSON(object.metric_kind) : undefined,
      value_type: isSet(object.value_type) ? metricDescriptor_ValueTypeFromJSON(object.value_type) : undefined,
      unit: isSet(object.unit) ? String(object.unit) : undefined,
      description: isSet(object.description) ? String(object.description) : undefined,
      display_name: isSet(object.display_name) ? String(object.display_name) : undefined,
      metadata: isSet(object.metadata)
        ? MetricDescriptor_MetricDescriptorMetadata.fromJSON(object.metadata)
        : undefined,
      launch_stage: isSet(object.launch_stage) ? launchStageFromJSON(object.launch_stage) : undefined,
      monitored_resource_types: Array.isArray(object?.monitored_resource_types)
        ? object.monitored_resource_types.map((e: any) => String(e))
        : undefined,
    };
  },

  toJSON(message: MetricDescriptor): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.type !== undefined && message.type !== "") {
      obj.type = message.type;
    }
    if (message.labels?.length) {
      obj.labels = message.labels.map((e) => LabelDescriptor.toJSON(e));
    }
    if (message.metric_kind !== undefined && message.metric_kind !== 0) {
      obj.metric_kind = metricDescriptor_MetricKindToJSON(message.metric_kind);
    }
    if (message.value_type !== undefined && message.value_type !== 0) {
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
      obj.metadata = MetricDescriptor_MetricDescriptorMetadata.toJSON(message.metadata);
    }
    if (message.launch_stage !== undefined && message.launch_stage !== 0) {
      obj.launch_stage = launchStageToJSON(message.launch_stage);
    }
    if (message.monitored_resource_types?.length) {
      obj.monitored_resource_types = message.monitored_resource_types;
    }
    return obj;
  },
};

function createBaseMetricDescriptor_MetricDescriptorMetadata(): MetricDescriptor_MetricDescriptorMetadata {
  return {};
}

export const MetricDescriptor_MetricDescriptorMetadata = {
  encode(message: MetricDescriptor_MetricDescriptorMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.launch_stage !== undefined && message.launch_stage !== 0) {
      writer.uint32(8).int32(message.launch_stage);
    }
    if (message.sample_period !== undefined) {
      Duration.encode(message.sample_period, writer.uint32(18).fork()).ldelim();
    }
    if (message.ingest_delay !== undefined) {
      Duration.encode(message.ingest_delay, writer.uint32(26).fork()).ldelim();
    }
    if (message._unknownFields !== undefined) {
      for (const [key, values] of Object.entries(message._unknownFields)) {
        const tag = parseInt(key, 10);
        for (const value of values) {
          writer.uint32(tag);
          (writer as any)["_push"](
            (val: Uint8Array, buf: Buffer, pos: number) => buf.set(val, pos),
            value.length,
            value,
          );
        }
      }
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MetricDescriptor_MetricDescriptorMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetricDescriptor_MetricDescriptorMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.launch_stage = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sample_period = Duration.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.ingest_delay = Duration.decode(reader, reader.uint32());
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
      } else {
        list.push(buf);
      }
    }
    return message;
  },

  fromJSON(object: any): MetricDescriptor_MetricDescriptorMetadata {
    return {
      launch_stage: isSet(object.launch_stage) ? launchStageFromJSON(object.launch_stage) : undefined,
      sample_period: isSet(object.sample_period) ? Duration.fromJSON(object.sample_period) : undefined,
      ingest_delay: isSet(object.ingest_delay) ? Duration.fromJSON(object.ingest_delay) : undefined,
    };
  },

  toJSON(message: MetricDescriptor_MetricDescriptorMetadata): unknown {
    const obj: any = {};
    if (message.launch_stage !== undefined && message.launch_stage !== 0) {
      obj.launch_stage = launchStageToJSON(message.launch_stage);
    }
    if (message.sample_period !== undefined) {
      obj.sample_period = Duration.toJSON(message.sample_period);
    }
    if (message.ingest_delay !== undefined) {
      obj.ingest_delay = Duration.toJSON(message.ingest_delay);
    }
    return obj;
  },
};

function createBaseMetric(): Metric {
  return {};
}

export const Metric = {
  encode(message: Metric, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== undefined && message.type !== "") {
      writer.uint32(26).string(message.type);
    }
    (message.labels || new Map()).forEach((value, key) => {
      Metric_LabelsEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim();
    });
    if (message._unknownFields !== undefined) {
      for (const [key, values] of Object.entries(message._unknownFields)) {
        const tag = parseInt(key, 10);
        for (const value of values) {
          writer.uint32(tag);
          (writer as any)["_push"](
            (val: Uint8Array, buf: Buffer, pos: number) => buf.set(val, pos),
            value.length,
            value,
          );
        }
      }
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Metric {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

          const entry2 = Metric_LabelsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            if (message.labels === undefined) {
              message.labels = new Map();
            }
            message.labels!.set(entry2.key, entry2.value);
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
      } else {
        list.push(buf);
      }
    }
    return message;
  },

  fromJSON(object: any): Metric {
    return {
      type: isSet(object.type) ? String(object.type) : undefined,
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<Map<string, string>>((acc, [key, value]) => {
          acc.set(key, String(value));
          return acc;
        }, new Map())
        : undefined,
    };
  },

  toJSON(message: Metric): unknown {
    const obj: any = {};
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

function createBaseMetric_LabelsEntry(): Metric_LabelsEntry {
  return { key: "", value: "" };
}

export const Metric_LabelsEntry = {
  encode(message: Metric_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
          (writer as any)["_push"](
            (val: Uint8Array, buf: Buffer, pos: number) => buf.set(val, pos),
            value.length,
            value,
          );
        }
      }
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Metric_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
      } else {
        list.push(buf);
      }
    }
    return message;
  },

  fromJSON(object: any): Metric_LabelsEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: Metric_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },
};

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}