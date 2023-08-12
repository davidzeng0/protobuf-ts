import _m0 from "protobufjs/minimal";
/**
 * Represents a time of day. The date and time zone are either not significant
 * or are specified elsewhere. An API may choose to allow leap seconds. Related
 * types are [google.type.Date][google.type.Date] and
 * `google.protobuf.Timestamp`.
 */
export interface TimeOfDay {
    /**
     * Hours of day in 24 hour format. Should be from 0 to 23. An API may choose
     * to allow the value "24:00:00" for scenarios like business closing time.
     */
    hours?: number | undefined;
    /** Minutes of hour of day. Must be from 0 to 59. */
    minutes?: number | undefined;
    /**
     * Seconds of minutes of the time. Must normally be from 0 to 59. An API may
     * allow the value 60 if it allows leap-seconds.
     */
    seconds?: number | undefined;
    /** Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. */
    nanos?: number | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
export declare const TimeOfDay: {
    encode(message: TimeOfDay, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TimeOfDay;
    fromJSON(object: any): TimeOfDay;
    toJSON(message: TimeOfDay): unknown;
};
