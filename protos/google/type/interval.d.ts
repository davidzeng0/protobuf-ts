import _m0 from "protobufjs/minimal";
import { Timestamp } from "../protobuf/timestamp";
/**
 * Represents a time interval, encoded as a Timestamp start (inclusive) and a
 * Timestamp end (exclusive).
 *
 * The start must be less than or equal to the end.
 * When the start equals the end, the interval is empty (matches no time).
 * When both start and end are unspecified, the interval matches any time.
 */
export interface Interval {
    /**
     * Optional. Inclusive start of the interval.
     *
     * If specified, a Timestamp matching this interval will have to be the same
     * or after the start.
     */
    start_time?: Timestamp | undefined;
    /**
     * Optional. Exclusive end of the interval.
     *
     * If specified, a Timestamp matching this interval will have to be before the
     * end.
     */
    end_time?: Timestamp | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
export declare const Interval: {
    encode(message: Interval, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Interval;
    fromJSON(object: any): Interval;
    toJSON(message: Interval): unknown;
};
