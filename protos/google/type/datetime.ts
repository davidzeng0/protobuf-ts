/* eslint-disable */
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
  year?:
    | number
    | undefined;
  /** Required. Month of year. Must be from 1 to 12. */
  month?:
    | number
    | undefined;
  /**
   * Required. Day of month. Must be from 1 to 31 and valid for the year and
   * month.
   */
  day?:
    | number
    | undefined;
  /**
   * Required. Hours of day in 24 hour format. Should be from 0 to 23. An API
   * may choose to allow the value "24:00:00" for scenarios like business
   * closing time.
   */
  hours?:
    | number
    | undefined;
  /** Required. Minutes of hour of day. Must be from 0 to 59. */
  minutes?:
    | number
    | undefined;
  /**
   * Required. Seconds of minutes of the time. Must normally be from 0 to 59. An
   * API may allow the value 60 if it allows leap-seconds.
   */
  seconds?:
    | number
    | undefined;
  /**
   * Required. Fractions of seconds in nanoseconds. Must be from 0 to
   * 999,999,999.
   */
  nanos?:
    | number
    | undefined;
  /**
   * UTC offset. Must be whole seconds, between -18 hours and +18 hours.
   * For example, a UTC offset of -4:00 would be represented as
   * { seconds: -14400 }.
   */
  utc_offset?:
    | Duration
    | undefined;
  /** Time zone. */
  time_zone?: TimeZone | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/**
 * Represents a time zone from the
 * [IANA Time Zone Database](https://www.iana.org/time-zones).
 */
export interface TimeZone {
  /** IANA Time Zone Database time zone, e.g. "America/New_York". */
  id?:
    | string
    | undefined;
  /** Optional. IANA Time Zone Database version number, e.g. "2019a". */
  version?: string | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

function createBaseDateTime(): DateTime {
  return {};
}

export const DateTime = {
  encode(message: DateTime, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.year !== undefined && message.year !== 0) {
      writer.uint32(8).int32(message.year);
    }
    if (message.month !== undefined && message.month !== 0) {
      writer.uint32(16).int32(message.month);
    }
    if (message.day !== undefined && message.day !== 0) {
      writer.uint32(24).int32(message.day);
    }
    if (message.hours !== undefined && message.hours !== 0) {
      writer.uint32(32).int32(message.hours);
    }
    if (message.minutes !== undefined && message.minutes !== 0) {
      writer.uint32(40).int32(message.minutes);
    }
    if (message.seconds !== undefined && message.seconds !== 0) {
      writer.uint32(48).int32(message.seconds);
    }
    if (message.nanos !== undefined && message.nanos !== 0) {
      writer.uint32(56).int32(message.nanos);
    }
    if (message.utc_offset !== undefined) {
      Duration.encode(message.utc_offset, writer.uint32(66).fork()).ldelim();
    }
    if (message.time_zone !== undefined) {
      TimeZone.encode(message.time_zone, writer.uint32(74).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): DateTime {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDateTime();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.year = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.month = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.day = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.hours = reader.int32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.minutes = reader.int32();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.seconds = reader.int32();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.nanos = reader.int32();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.utc_offset = Duration.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.time_zone = TimeZone.decode(reader, reader.uint32());
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

  fromJSON(object: any): DateTime {
    return {
      year: isSet(object.year) ? Number(object.year) : undefined,
      month: isSet(object.month) ? Number(object.month) : undefined,
      day: isSet(object.day) ? Number(object.day) : undefined,
      hours: isSet(object.hours) ? Number(object.hours) : undefined,
      minutes: isSet(object.minutes) ? Number(object.minutes) : undefined,
      seconds: isSet(object.seconds) ? Number(object.seconds) : undefined,
      nanos: isSet(object.nanos) ? Number(object.nanos) : undefined,
      utc_offset: isSet(object.utc_offset) ? Duration.fromJSON(object.utc_offset) : undefined,
      time_zone: isSet(object.time_zone) ? TimeZone.fromJSON(object.time_zone) : undefined,
    };
  },

  toJSON(message: DateTime): unknown {
    const obj: any = {};
    if (message.year !== undefined && message.year !== 0) {
      obj.year = Math.round(message.year);
    }
    if (message.month !== undefined && message.month !== 0) {
      obj.month = Math.round(message.month);
    }
    if (message.day !== undefined && message.day !== 0) {
      obj.day = Math.round(message.day);
    }
    if (message.hours !== undefined && message.hours !== 0) {
      obj.hours = Math.round(message.hours);
    }
    if (message.minutes !== undefined && message.minutes !== 0) {
      obj.minutes = Math.round(message.minutes);
    }
    if (message.seconds !== undefined && message.seconds !== 0) {
      obj.seconds = Math.round(message.seconds);
    }
    if (message.nanos !== undefined && message.nanos !== 0) {
      obj.nanos = Math.round(message.nanos);
    }
    if (message.utc_offset !== undefined) {
      obj.utc_offset = Duration.toJSON(message.utc_offset);
    }
    if (message.time_zone !== undefined) {
      obj.time_zone = TimeZone.toJSON(message.time_zone);
    }
    return obj;
  },
};

function createBaseTimeZone(): TimeZone {
  return {};
}

export const TimeZone = {
  encode(message: TimeZone, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined && message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.version !== undefined && message.version !== "") {
      writer.uint32(18).string(message.version);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): TimeZone {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimeZone();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.version = reader.string();
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

  fromJSON(object: any): TimeZone {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      version: isSet(object.version) ? String(object.version) : undefined,
    };
  },

  toJSON(message: TimeZone): unknown {
    const obj: any = {};
    if (message.id !== undefined && message.id !== "") {
      obj.id = message.id;
    }
    if (message.version !== undefined && message.version !== "") {
      obj.version = message.version;
    }
    return obj;
  },
};

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
