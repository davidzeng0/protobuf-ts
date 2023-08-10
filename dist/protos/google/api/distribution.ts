/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../protobuf/any";
import { Timestamp } from "../protobuf/timestamp";

/**
 * `Distribution` contains summary statistics for a population of values. It
 * optionally contains a histogram representing the distribution of those values
 * across a set of buckets.
 *
 * The summary statistics are the count, mean, sum of the squared deviation from
 * the mean, the minimum, and the maximum of the set of population of values.
 * The histogram is based on a sequence of buckets and gives a count of values
 * that fall into each bucket. The boundaries of the buckets are given either
 * explicitly or by formulas for buckets of fixed or exponentially increasing
 * widths.
 *
 * Although it is not forbidden, it is generally a bad idea to include
 * non-finite values (infinities or NaNs) in the population of values, as this
 * will render the `mean` and `sum_of_squared_deviation` fields meaningless.
 */
export interface Distribution {
  /**
   * The number of values in the population. Must be non-negative. This value
   * must equal the sum of the values in `bucket_counts` if a histogram is
   * provided.
   */
  count?:
    | bigint
    | undefined;
  /**
   * The arithmetic mean of the values in the population. If `count` is zero
   * then this field must be zero.
   */
  mean?:
    | number
    | undefined;
  /**
   * The sum of squared deviations from the mean of the values in the
   * population. For values x_i this is:
   *
   *     Sum[i=1..n]((x_i - mean)^2)
   *
   * Knuth, "The Art of Computer Programming", Vol. 2, page 232, 3rd edition
   * describes Welford's method for accumulating this sum in one pass.
   *
   * If `count` is zero then this field must be zero.
   */
  sum_of_squared_deviation?:
    | number
    | undefined;
  /**
   * If specified, contains the range of the population values. The field
   * must not be present if the `count` is zero.
   */
  range?:
    | Distribution_Range
    | undefined;
  /**
   * Defines the histogram bucket boundaries. If the distribution does not
   * contain a histogram, then omit this field.
   */
  bucket_options?:
    | Distribution_BucketOptions
    | undefined;
  /**
   * The number of values in each bucket of the histogram, as described in
   * `bucket_options`. If the distribution does not have a histogram, then omit
   * this field. If there is a histogram, then the sum of the values in
   * `bucket_counts` must equal the value in the `count` field of the
   * distribution.
   *
   * If present, `bucket_counts` should contain N values, where N is the number
   * of buckets specified in `bucket_options`. If you supply fewer than N
   * values, the remaining values are assumed to be 0.
   *
   * The order of the values in `bucket_counts` follows the bucket numbering
   * schemes described for the three bucket types. The first value must be the
   * count for the underflow bucket (number 0). The next N-2 values are the
   * counts for the finite buckets (number 1 through N-2). The N'th value in
   * `bucket_counts` is the count for the overflow bucket (number N-1).
   */
  bucket_counts?:
    | bigint[]
    | undefined;
  /** Must be in increasing order of `value` field. */
  exemplars?: Distribution_Exemplar[] | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/** The range of the population values. */
export interface Distribution_Range {
  /** The minimum of the population values. */
  min?:
    | number
    | undefined;
  /** The maximum of the population values. */
  max?: number | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/**
 * `BucketOptions` describes the bucket boundaries used to create a histogram
 * for the distribution. The buckets can be in a linear sequence, an
 * exponential sequence, or each bucket can be specified explicitly.
 * `BucketOptions` does not include the number of values in each bucket.
 *
 * A bucket has an inclusive lower bound and exclusive upper bound for the
 * values that are counted for that bucket. The upper bound of a bucket must
 * be strictly greater than the lower bound. The sequence of N buckets for a
 * distribution consists of an underflow bucket (number 0), zero or more
 * finite buckets (number 1 through N - 2) and an overflow bucket (number N -
 * 1). The buckets are contiguous: the lower bound of bucket i (i > 0) is the
 * same as the upper bound of bucket i - 1. The buckets span the whole range
 * of finite values: lower bound of the underflow bucket is -infinity and the
 * upper bound of the overflow bucket is +infinity. The finite buckets are
 * so-called because both bounds are finite.
 */
export interface Distribution_BucketOptions {
  /** The linear bucket. */
  linear_buckets?:
    | Distribution_BucketOptions_Linear
    | undefined;
  /** The exponential buckets. */
  exponential_buckets?:
    | Distribution_BucketOptions_Exponential
    | undefined;
  /** The explicit buckets. */
  explicit_buckets?: Distribution_BucketOptions_Explicit | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/**
 * Specifies a linear sequence of buckets that all have the same width
 * (except overflow and underflow). Each bucket represents a constant
 * absolute uncertainty on the specific value in the bucket.
 *
 * There are `num_finite_buckets + 2` (= N) buckets. Bucket `i` has the
 * following boundaries:
 *
 *    Upper bound (0 <= i < N-1):     offset + (width * i).
 *    Lower bound (1 <= i < N):       offset + (width * (i - 1)).
 */
export interface Distribution_BucketOptions_Linear {
  /** Must be greater than 0. */
  num_finite_buckets?:
    | number
    | undefined;
  /** Must be greater than 0. */
  width?:
    | number
    | undefined;
  /** Lower bound of the first bucket. */
  offset?: number | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/**
 * Specifies an exponential sequence of buckets that have a width that is
 * proportional to the value of the lower bound. Each bucket represents a
 * constant relative uncertainty on a specific value in the bucket.
 *
 * There are `num_finite_buckets + 2` (= N) buckets. Bucket `i` has the
 * following boundaries:
 *
 *    Upper bound (0 <= i < N-1):     scale * (growth_factor ^ i).
 *    Lower bound (1 <= i < N):       scale * (growth_factor ^ (i - 1)).
 */
export interface Distribution_BucketOptions_Exponential {
  /** Must be greater than 0. */
  num_finite_buckets?:
    | number
    | undefined;
  /** Must be greater than 1. */
  growth_factor?:
    | number
    | undefined;
  /** Must be greater than 0. */
  scale?: number | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/**
 * Specifies a set of buckets with arbitrary widths.
 *
 * There are `size(bounds) + 1` (= N) buckets. Bucket `i` has the following
 * boundaries:
 *
 *    Upper bound (0 <= i < N-1):     bounds[i]
 *    Lower bound (1 <= i < N);       bounds[i - 1]
 *
 * The `bounds` field must contain at least one element. If `bounds` has
 * only one element, then there are no finite buckets, and that single
 * element is the common boundary of the overflow and underflow buckets.
 */
export interface Distribution_BucketOptions_Explicit {
  /** The values must be monotonically increasing. */
  bounds?: number[] | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/**
 * Exemplars are example points that may be used to annotate aggregated
 * distribution values. They are metadata that gives information about a
 * particular value added to a Distribution bucket, such as a trace ID that
 * was active when a value was added. They may contain further information,
 * such as a example values and timestamps, origin, etc.
 */
export interface Distribution_Exemplar {
  /**
   * Value of the exemplar point. This value determines to which bucket the
   * exemplar belongs.
   */
  value?:
    | number
    | undefined;
  /** The observation (sampling) time of the above value. */
  timestamp?:
    | Timestamp
    | undefined;
  /**
   * Contextual information about the example value. Examples are:
   *
   *   Trace: type.googleapis.com/google.monitoring.v3.SpanContext
   *
   *   Literal string: type.googleapis.com/google.protobuf.StringValue
   *
   *   Labels dropped during aggregation:
   *     type.googleapis.com/google.monitoring.v3.DroppedLabels
   *
   * There may be only a single attachment of any given message type in a
   * single exemplar, and this is enforced by the system.
   */
  attachments?: Any[] | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

function createBaseDistribution(): Distribution {
  return {};
}

export const Distribution = {
  encode(message: Distribution, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      Distribution_Range.encode(message.range, writer.uint32(34).fork()).ldelim();
    }
    if (message.bucket_options !== undefined) {
      Distribution_BucketOptions.encode(message.bucket_options, writer.uint32(50).fork()).ldelim();
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
        Distribution_Exemplar.encode(v!, writer.uint32(82).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Distribution {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistribution();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.count = longToBigint(reader.int64() as Long);
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

          message.range = Distribution_Range.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.bucket_options = Distribution_BucketOptions.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag === 56) {
            if (message.bucket_counts === undefined) {
              message.bucket_counts = [];
            }
            message.bucket_counts!.push(longToBigint(reader.int64() as Long));

            continue;
          }

          if (tag === 58) {
            if (message.bucket_counts === undefined) {
              message.bucket_counts = [];
            }
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.bucket_counts!.push(longToBigint(reader.int64() as Long));
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
          message.exemplars!.push(Distribution_Exemplar.decode(reader, reader.uint32()));
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

  fromJSON(object: any): Distribution {
    return {
      count: isSet(object.count) ? BigInt(object.count) : undefined,
      mean: isSet(object.mean) ? Number(object.mean) : undefined,
      sum_of_squared_deviation: isSet(object.sum_of_squared_deviation)
        ? Number(object.sum_of_squared_deviation)
        : undefined,
      range: isSet(object.range) ? Distribution_Range.fromJSON(object.range) : undefined,
      bucket_options: isSet(object.bucket_options)
        ? Distribution_BucketOptions.fromJSON(object.bucket_options)
        : undefined,
      bucket_counts: Array.isArray(object?.bucket_counts) ? object.bucket_counts.map((e: any) => BigInt(e)) : undefined,
      exemplars: Array.isArray(object?.exemplars)
        ? object.exemplars.map((e: any) => Distribution_Exemplar.fromJSON(e))
        : undefined,
    };
  },

  toJSON(message: Distribution): unknown {
    const obj: any = {};
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
      obj.range = Distribution_Range.toJSON(message.range);
    }
    if (message.bucket_options !== undefined) {
      obj.bucket_options = Distribution_BucketOptions.toJSON(message.bucket_options);
    }
    if (message.bucket_counts?.length) {
      obj.bucket_counts = message.bucket_counts.map((e) => e.toString());
    }
    if (message.exemplars?.length) {
      obj.exemplars = message.exemplars.map((e) => Distribution_Exemplar.toJSON(e));
    }
    return obj;
  },
};

function createBaseDistribution_Range(): Distribution_Range {
  return {};
}

export const Distribution_Range = {
  encode(message: Distribution_Range, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Distribution_Range {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
      } else {
        list.push(buf);
      }
    }
    return message;
  },

  fromJSON(object: any): Distribution_Range {
    return {
      min: isSet(object.min) ? Number(object.min) : undefined,
      max: isSet(object.max) ? Number(object.max) : undefined,
    };
  },

  toJSON(message: Distribution_Range): unknown {
    const obj: any = {};
    if (message.min !== undefined && message.min !== 0) {
      obj.min = message.min;
    }
    if (message.max !== undefined && message.max !== 0) {
      obj.max = message.max;
    }
    return obj;
  },
};

function createBaseDistribution_BucketOptions(): Distribution_BucketOptions {
  return {};
}

export const Distribution_BucketOptions = {
  encode(message: Distribution_BucketOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.linear_buckets !== undefined) {
      Distribution_BucketOptions_Linear.encode(message.linear_buckets, writer.uint32(10).fork()).ldelim();
    }
    if (message.exponential_buckets !== undefined) {
      Distribution_BucketOptions_Exponential.encode(message.exponential_buckets, writer.uint32(18).fork()).ldelim();
    }
    if (message.explicit_buckets !== undefined) {
      Distribution_BucketOptions_Explicit.encode(message.explicit_buckets, writer.uint32(26).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Distribution_BucketOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistribution_BucketOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.linear_buckets = Distribution_BucketOptions_Linear.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.exponential_buckets = Distribution_BucketOptions_Exponential.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.explicit_buckets = Distribution_BucketOptions_Explicit.decode(reader, reader.uint32());
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

  fromJSON(object: any): Distribution_BucketOptions {
    return {
      linear_buckets: isSet(object.linear_buckets)
        ? Distribution_BucketOptions_Linear.fromJSON(object.linear_buckets)
        : undefined,
      exponential_buckets: isSet(object.exponential_buckets)
        ? Distribution_BucketOptions_Exponential.fromJSON(object.exponential_buckets)
        : undefined,
      explicit_buckets: isSet(object.explicit_buckets)
        ? Distribution_BucketOptions_Explicit.fromJSON(object.explicit_buckets)
        : undefined,
    };
  },

  toJSON(message: Distribution_BucketOptions): unknown {
    const obj: any = {};
    if (message.linear_buckets !== undefined) {
      obj.linear_buckets = Distribution_BucketOptions_Linear.toJSON(message.linear_buckets);
    }
    if (message.exponential_buckets !== undefined) {
      obj.exponential_buckets = Distribution_BucketOptions_Exponential.toJSON(message.exponential_buckets);
    }
    if (message.explicit_buckets !== undefined) {
      obj.explicit_buckets = Distribution_BucketOptions_Explicit.toJSON(message.explicit_buckets);
    }
    return obj;
  },
};

function createBaseDistribution_BucketOptions_Linear(): Distribution_BucketOptions_Linear {
  return {};
}

export const Distribution_BucketOptions_Linear = {
  encode(message: Distribution_BucketOptions_Linear, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Distribution_BucketOptions_Linear {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
      } else {
        list.push(buf);
      }
    }
    return message;
  },

  fromJSON(object: any): Distribution_BucketOptions_Linear {
    return {
      num_finite_buckets: isSet(object.num_finite_buckets) ? Number(object.num_finite_buckets) : undefined,
      width: isSet(object.width) ? Number(object.width) : undefined,
      offset: isSet(object.offset) ? Number(object.offset) : undefined,
    };
  },

  toJSON(message: Distribution_BucketOptions_Linear): unknown {
    const obj: any = {};
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

function createBaseDistribution_BucketOptions_Exponential(): Distribution_BucketOptions_Exponential {
  return {};
}

export const Distribution_BucketOptions_Exponential = {
  encode(message: Distribution_BucketOptions_Exponential, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Distribution_BucketOptions_Exponential {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
      } else {
        list.push(buf);
      }
    }
    return message;
  },

  fromJSON(object: any): Distribution_BucketOptions_Exponential {
    return {
      num_finite_buckets: isSet(object.num_finite_buckets) ? Number(object.num_finite_buckets) : undefined,
      growth_factor: isSet(object.growth_factor) ? Number(object.growth_factor) : undefined,
      scale: isSet(object.scale) ? Number(object.scale) : undefined,
    };
  },

  toJSON(message: Distribution_BucketOptions_Exponential): unknown {
    const obj: any = {};
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

function createBaseDistribution_BucketOptions_Explicit(): Distribution_BucketOptions_Explicit {
  return {};
}

export const Distribution_BucketOptions_Explicit = {
  encode(message: Distribution_BucketOptions_Explicit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Distribution_BucketOptions_Explicit {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
            message.bounds!.push(reader.double());

            continue;
          }

          if (tag === 10) {
            if (message.bounds === undefined) {
              message.bounds = [];
            }
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.bounds!.push(reader.double());
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
      } else {
        list.push(buf);
      }
    }
    return message;
  },

  fromJSON(object: any): Distribution_BucketOptions_Explicit {
    return { bounds: Array.isArray(object?.bounds) ? object.bounds.map((e: any) => Number(e)) : undefined };
  },

  toJSON(message: Distribution_BucketOptions_Explicit): unknown {
    const obj: any = {};
    if (message.bounds?.length) {
      obj.bounds = message.bounds;
    }
    return obj;
  },
};

function createBaseDistribution_Exemplar(): Distribution_Exemplar {
  return {};
}

export const Distribution_Exemplar = {
  encode(message: Distribution_Exemplar, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== undefined && message.value !== 0) {
      writer.uint32(9).double(message.value);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(18).fork()).ldelim();
    }
    if (message.attachments !== undefined && message.attachments.length !== 0) {
      for (const v of message.attachments) {
        Any.encode(v!, writer.uint32(26).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Distribution_Exemplar {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

          message.timestamp = Timestamp.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          if (message.attachments === undefined) {
            message.attachments = [];
          }
          message.attachments!.push(Any.decode(reader, reader.uint32()));
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

  fromJSON(object: any): Distribution_Exemplar {
    return {
      value: isSet(object.value) ? Number(object.value) : undefined,
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      attachments: Array.isArray(object?.attachments) ? object.attachments.map((e: any) => Any.fromJSON(e)) : undefined,
    };
  },

  toJSON(message: Distribution_Exemplar): unknown {
    const obj: any = {};
    if (message.value !== undefined && message.value !== 0) {
      obj.value = message.value;
    }
    if (message.timestamp !== undefined) {
      obj.timestamp = fromTimestamp(message.timestamp).toISOString();
    }
    if (message.attachments?.length) {
      obj.attachments = message.attachments.map((e) => Any.toJSON(e));
    }
    return obj;
  },
};

function toTimestamp(date: Date): Timestamp {
  const seconds = BigInt(Math.trunc(date.getTime() / 1_000));
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (Number(t.seconds.toString()) || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Timestamp {
  if (o instanceof Date) {
    return toTimestamp(o);
  } else if (typeof o === "string") {
    return toTimestamp(new Date(o));
  } else {
    return Timestamp.fromJSON(o);
  }
}

function longToBigint(long: Long) {
  return BigInt(long.toString());
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
