/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

/**
 * Quota configuration helps to achieve fairness and budgeting in service
 * usage.
 *
 * The metric based quota configuration works this way:
 * - The service configuration defines a set of metrics.
 * - For API calls, the quota.metric_rules maps methods to metrics with
 *   corresponding costs.
 * - The quota.limits defines limits on the metrics, which will be used for
 *   quota checks at runtime.
 *
 * An example quota configuration in yaml format:
 *
 *    quota:
 *      limits:
 *
 *      - name: apiWriteQpsPerProject
 *        metric: library.googleapis.com/write_calls
 *        unit: "1/min/{project}"  # rate limit for consumer projects
 *        values:
 *          STANDARD: 10000
 *
 *      (The metric rules bind all methods to the read_calls metric,
 *       except for the UpdateBook and DeleteBook methods. These two methods
 *       are mapped to the write_calls metric, with the UpdateBook method
 *       consuming at twice rate as the DeleteBook method.)
 *      metric_rules:
 *      - selector: "*"
 *        metric_costs:
 *          library.googleapis.com/read_calls: 1
 *      - selector: google.example.library.v1.LibraryService.UpdateBook
 *        metric_costs:
 *          library.googleapis.com/write_calls: 2
 *      - selector: google.example.library.v1.LibraryService.DeleteBook
 *        metric_costs:
 *          library.googleapis.com/write_calls: 1
 *
 *  Corresponding Metric definition:
 *
 *      metrics:
 *      - name: library.googleapis.com/read_calls
 *        display_name: Read requests
 *        metric_kind: DELTA
 *        value_type: INT64
 *
 *      - name: library.googleapis.com/write_calls
 *        display_name: Write requests
 *        metric_kind: DELTA
 *        value_type: INT64
 */
export interface Quota {
  /** List of QuotaLimit definitions for the service. */
  limits?:
    | QuotaLimit[]
    | undefined;
  /**
   * List of MetricRule definitions, each one mapping a selected method to one
   * or more metrics.
   */
  metric_rules?: MetricRule[] | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/**
 * Bind API methods to metrics. Binding a method to a metric causes that
 * metric's configured quota behaviors to apply to the method call.
 */
export interface MetricRule {
  /**
   * Selects the methods to which this rule applies.
   *
   * Refer to [selector][google.api.DocumentationRule.selector] for syntax details.
   */
  selector?:
    | string
    | undefined;
  /**
   * Metrics to update when the selected methods are called, and the associated
   * cost applied to each metric.
   *
   * The key of the map is the metric name, and the values are the amount
   * increased for the metric against which the quota limits are defined.
   * The value must not be negative.
   */
  metric_costs?: Map<string, bigint> | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

export interface MetricRule_MetricCostsEntry {
  key: string;
  value: bigint;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/**
 * `QuotaLimit` defines a specific limit that applies over a specified duration
 * for a limit type. There can be at most one limit for a duration and limit
 * type combination defined within a `QuotaGroup`.
 */
export interface QuotaLimit {
  /**
   * Name of the quota limit.
   *
   * The name must be provided, and it must be unique within the service. The
   * name can only include alphanumeric characters as well as '-'.
   *
   * The maximum length of the limit name is 64 characters.
   */
  name?:
    | string
    | undefined;
  /**
   * Optional. User-visible, extended description for this quota limit.
   * Should be used only when more context is needed to understand this limit
   * than provided by the limit's display name (see: `display_name`).
   */
  description?:
    | string
    | undefined;
  /**
   * Default number of tokens that can be consumed during the specified
   * duration. This is the number of tokens assigned when a client
   * application developer activates the service for his/her project.
   *
   * Specifying a value of 0 will block all requests. This can be used if you
   * are provisioning quota to selected consumers and blocking others.
   * Similarly, a value of -1 will indicate an unlimited quota. No other
   * negative values are allowed.
   *
   * Used by group-based quotas only.
   */
  default_limit?:
    | bigint
    | undefined;
  /**
   * Maximum number of tokens that can be consumed during the specified
   * duration. Client application developers can override the default limit up
   * to this maximum. If specified, this value cannot be set to a value less
   * than the default limit. If not specified, it is set to the default limit.
   *
   * To allow clients to apply overrides with no upper bound, set this to -1,
   * indicating unlimited maximum quota.
   *
   * Used by group-based quotas only.
   */
  max_limit?:
    | bigint
    | undefined;
  /**
   * Free tier value displayed in the Developers Console for this limit.
   * The free tier is the number of tokens that will be subtracted from the
   * billed amount when billing is enabled.
   * This field can only be set on a limit with duration "1d", in a billable
   * group; it is invalid on any other limit. If this field is not set, it
   * defaults to 0, indicating that there is no free tier for this service.
   *
   * Used by group-based quotas only.
   */
  free_tier?:
    | bigint
    | undefined;
  /**
   * Duration of this limit in textual notation. Must be "100s" or "1d".
   *
   * Used by group-based quotas only.
   */
  duration?:
    | string
    | undefined;
  /**
   * The name of the metric this quota limit applies to. The quota limits with
   * the same metric will be checked together during runtime. The metric must be
   * defined within the service config.
   */
  metric?:
    | string
    | undefined;
  /**
   * Specify the unit of the quota limit. It uses the same syntax as
   * [Metric.unit][]. The supported unit kinds are determined by the quota
   * backend system.
   *
   * Here are some examples:
   * * "1/min/{project}" for quota per minute per project.
   *
   * Note: the order of unit components is insignificant.
   * The "1" at the beginning is required to follow the metric unit syntax.
   */
  unit?:
    | string
    | undefined;
  /**
   * Tiered limit values. You must specify this as a key:value pair, with an
   * integer value that is the maximum number of requests allowed for the
   * specified unit. Currently only STANDARD is supported.
   */
  values?:
    | Map<string, bigint>
    | undefined;
  /**
   * User-visible display name for this limit.
   * Optional. If not set, the UI will provide a default display name based on
   * the quota configuration. This field can be used to override the default
   * display name generated from the configuration.
   */
  display_name?: string | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

export interface QuotaLimit_ValuesEntry {
  key: string;
  value: bigint;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

function createBaseQuota(): Quota {
  return {};
}

export const Quota = {
  encode(message: Quota, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limits !== undefined && message.limits.length !== 0) {
      for (const v of message.limits) {
        QuotaLimit.encode(v!, writer.uint32(26).fork()).ldelim();
      }
    }
    if (message.metric_rules !== undefined && message.metric_rules.length !== 0) {
      for (const v of message.metric_rules) {
        MetricRule.encode(v!, writer.uint32(34).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Quota {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
          message.limits!.push(QuotaLimit.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          if (message.metric_rules === undefined) {
            message.metric_rules = [];
          }
          message.metric_rules!.push(MetricRule.decode(reader, reader.uint32()));
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

  fromJSON(object: any): Quota {
    return {
      limits: Array.isArray(object?.limits) ? object.limits.map((e: any) => QuotaLimit.fromJSON(e)) : undefined,
      metric_rules: Array.isArray(object?.metric_rules)
        ? object.metric_rules.map((e: any) => MetricRule.fromJSON(e))
        : undefined,
    };
  },

  toJSON(message: Quota): unknown {
    const obj: any = {};
    if (message.limits?.length) {
      obj.limits = message.limits.map((e) => QuotaLimit.toJSON(e));
    }
    if (message.metric_rules?.length) {
      obj.metric_rules = message.metric_rules.map((e) => MetricRule.toJSON(e));
    }
    return obj;
  },
};

function createBaseMetricRule(): MetricRule {
  return {};
}

export const MetricRule = {
  encode(message: MetricRule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.selector !== undefined && message.selector !== "") {
      writer.uint32(10).string(message.selector);
    }
    (message.metric_costs || new Map()).forEach((value, key) => {
      MetricRule_MetricCostsEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MetricRule {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

          const entry2 = MetricRule_MetricCostsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            if (message.metric_costs === undefined) {
              message.metric_costs = new Map();
            }
            message.metric_costs!.set(entry2.key, entry2.value);
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

  fromJSON(object: any): MetricRule {
    return {
      selector: isSet(object.selector) ? String(object.selector) : undefined,
      metric_costs: isObject(object.metric_costs)
        ? Object.entries(object.metric_costs).reduce<Map<string, bigint>>((acc, [key, value]) => {
          acc.set(key, BigInt(value as string | number | bigint | boolean));
          return acc;
        }, new Map())
        : undefined,
    };
  },

  toJSON(message: MetricRule): unknown {
    const obj: any = {};
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

function createBaseMetricRule_MetricCostsEntry(): MetricRule_MetricCostsEntry {
  return { key: "", value: BigInt("0") };
}

export const MetricRule_MetricCostsEntry = {
  encode(message: MetricRule_MetricCostsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MetricRule_MetricCostsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

          message.value = longToBigint(reader.int64() as Long);
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

  fromJSON(object: any): MetricRule_MetricCostsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? BigInt(object.value) : BigInt("0"),
    };
  },

  toJSON(message: MetricRule_MetricCostsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== BigInt("0")) {
      obj.value = message.value.toString();
    }
    return obj;
  },
};

function createBaseQuotaLimit(): QuotaLimit {
  return {};
}

export const QuotaLimit = {
  encode(message: QuotaLimit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      QuotaLimit_ValuesEntry.encode({ key: key as any, value }, writer.uint32(82).fork()).ldelim();
    });
    if (message.display_name !== undefined && message.display_name !== "") {
      writer.uint32(98).string(message.display_name);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): QuotaLimit {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

          message.default_limit = longToBigint(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.max_limit = longToBigint(reader.int64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.free_tier = longToBigint(reader.int64() as Long);
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

          const entry10 = QuotaLimit_ValuesEntry.decode(reader, reader.uint32());
          if (entry10.value !== undefined) {
            if (message.values === undefined) {
              message.values = new Map();
            }
            message.values!.set(entry10.key, entry10.value);
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
      } else {
        list.push(buf);
      }
    }
    return message;
  },

  fromJSON(object: any): QuotaLimit {
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
        ? Object.entries(object.values).reduce<Map<string, bigint>>((acc, [key, value]) => {
          acc.set(key, BigInt(value as string | number | bigint | boolean));
          return acc;
        }, new Map())
        : undefined,
      display_name: isSet(object.display_name) ? String(object.display_name) : undefined,
    };
  },

  toJSON(message: QuotaLimit): unknown {
    const obj: any = {};
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

function createBaseQuotaLimit_ValuesEntry(): QuotaLimit_ValuesEntry {
  return { key: "", value: BigInt("0") };
}

export const QuotaLimit_ValuesEntry = {
  encode(message: QuotaLimit_ValuesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): QuotaLimit_ValuesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

          message.value = longToBigint(reader.int64() as Long);
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

  fromJSON(object: any): QuotaLimit_ValuesEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? BigInt(object.value) : BigInt("0"),
    };
  },

  toJSON(message: QuotaLimit_ValuesEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== BigInt("0")) {
      obj.value = message.value.toString();
    }
    return obj;
  },
};

function longToBigint(long: Long) {
  return BigInt(long.toString());
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
