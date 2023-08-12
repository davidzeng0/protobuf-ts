import _m0 from "protobufjs/minimal";
import { Duration } from "../protobuf/duration";
/**
 * Represents civil time (or occasionally physical time).
 *
 * This type can represent a civil time in one of a few possible ways:
 *
 *  * When utc_offset is set and time_zone is unset: a civil time on a calendar
 *    day with a particular offset from UTC.
 *  * When time_zone is set and utc_offset is unset: a civil time on a calendar
 *    day in a particular time zone.
 *  * When neither time_zone nor utc_offset is set: a civil time on a calendar
 *    day in local time.
 *
 * The date is relative to the Proleptic Gregorian Calendar.
 *
 * If year is 0, the DateTime is considered not to have a specific year. month
 * and day must have valid, non-zero values.
 *
 * This type may also be used to represent a physical time if all the date and
 * time fields are set and either case of the `time_offset` oneof is set.
 * Consider using `Timestamp` message for physical time instead. If your use
 * case also would like to store the user's timezone, that can be done in
 * another field.
 *
 * This type is more flexible than some applications may want. Make sure to
 * document and validate your application's limitations.
 */
export interface DateTime {
    /**
     * Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a
     * datetime without a year.
     */
    year?: number | undefined;
    /** Required. Month of year. Must be from 1 to 12. */
    month?: number | undefined;
    /**
     * Required. Day of month. Must be from 1 to 31 and valid for the year and
     * month.
     */
    day?: number | undefined;
    /**
     * Required. Hours of day in 24 hour format. Should be from 0 to 23. An API
     * may choose to allow the value "24:00:00" for scenarios like business
     * closing time.
     */
    hours?: number | undefined;
    /** Required. Minutes of hour of day. Must be from 0 to 59. */
    minutes?: number | undefined;
    /**
     * Required. Seconds of minutes of the time. Must normally be from 0 to 59. An
     * API may allow the value 60 if it allows leap-seconds.
     */
    seconds?: number | undefined;
    /**
     * Required. Fractions of seconds in nanoseconds. Must be from 0 to
     * 999,999,999.
     */
    nanos?: number | undefined;
    /**
     * UTC offset. Must be whole seconds, between -18 hours and +18 hours.
     * For example, a UTC offset of -4:00 would be represented as
     * { seconds: -14400 }.
     */
    utc_offset?: Duration | undefined;
    /** Time zone. */
    time_zone?: TimeZone | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
/**
 * Represents a time zone from the
 * [IANA Time Zone Database](https://www.iana.org/time-zones).
 */
export interface TimeZone {
    /** IANA Time Zone Database time zone, e.g. "America/New_York". */
    id?: string | undefined;
    /** Optional. IANA Time Zone Database version number, e.g. "2019a". */
    version?: string | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
export declare const DateTime: {
    encode(message: DateTime, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DateTime;
    fromJSON(object: any): DateTime;
    toJSON(message: DateTime): unknown;
};
export declare const TimeZone: {
    encode(message: TimeZone, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TimeZone;
    fromJSON(object: any): TimeZone;
    toJSON(message: TimeZone): unknown;
};
