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
    count?: bigint | undefined;
    /**
     * The arithmetic mean of the values in the population. If `count` is zero
     * then this field must be zero.
     */
    mean?: number | undefined;
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
    sum_of_squared_deviation?: number | undefined;
    /**
     * If specified, contains the range of the population values. The field
     * must not be present if the `count` is zero.
     */
    range?: Distribution_Range | undefined;
    /**
     * Defines the histogram bucket boundaries. If the distribution does not
     * contain a histogram, then omit this field.
     */
    bucket_options?: Distribution_BucketOptions | undefined;
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
    bucket_counts?: bigint[] | undefined;
    /** Must be in increasing order of `value` field. */
    exemplars?: Distribution_Exemplar[] | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
/** The range of the population values. */
export interface Distribution_Range {
    /** The minimum of the population values. */
    min?: number | undefined;
    /** The maximum of the population values. */
    max?: number | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
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
    linear_buckets?: Distribution_BucketOptions_Linear | undefined;
    /** The exponential buckets. */
    exponential_buckets?: Distribution_BucketOptions_Exponential | undefined;
    /** The explicit buckets. */
    explicit_buckets?: Distribution_BucketOptions_Explicit | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
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
    num_finite_buckets?: number | undefined;
    /** Must be greater than 0. */
    width?: number | undefined;
    /** Lower bound of the first bucket. */
    offset?: number | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
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
    num_finite_buckets?: number | undefined;
    /** Must be greater than 1. */
    growth_factor?: number | undefined;
    /** Must be greater than 0. */
    scale?: number | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
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
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
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
    value?: number | undefined;
    /** The observation (sampling) time of the above value. */
    timestamp?: Timestamp | undefined;
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
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
export declare const Distribution: {
    encode(message: Distribution, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Distribution;
    fromJSON(object: any): Distribution;
    toJSON(message: Distribution): unknown;
};
export declare const Distribution_Range: {
    encode(message: Distribution_Range, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Distribution_Range;
    fromJSON(object: any): Distribution_Range;
    toJSON(message: Distribution_Range): unknown;
};
export declare const Distribution_BucketOptions: {
    encode(message: Distribution_BucketOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Distribution_BucketOptions;
    fromJSON(object: any): Distribution_BucketOptions;
    toJSON(message: Distribution_BucketOptions): unknown;
};
export declare const Distribution_BucketOptions_Linear: {
    encode(message: Distribution_BucketOptions_Linear, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Distribution_BucketOptions_Linear;
    fromJSON(object: any): Distribution_BucketOptions_Linear;
    toJSON(message: Distribution_BucketOptions_Linear): unknown;
};
export declare const Distribution_BucketOptions_Exponential: {
    encode(message: Distribution_BucketOptions_Exponential, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Distribution_BucketOptions_Exponential;
    fromJSON(object: any): Distribution_BucketOptions_Exponential;
    toJSON(message: Distribution_BucketOptions_Exponential): unknown;
};
export declare const Distribution_BucketOptions_Explicit: {
    encode(message: Distribution_BucketOptions_Explicit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Distribution_BucketOptions_Explicit;
    fromJSON(object: any): Distribution_BucketOptions_Explicit;
    toJSON(message: Distribution_BucketOptions_Explicit): unknown;
};
export declare const Distribution_Exemplar: {
    encode(message: Distribution_Exemplar, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Distribution_Exemplar;
    fromJSON(object: any): Distribution_Exemplar;
    toJSON(message: Distribution_Exemplar): unknown;
};
