/* eslint-disable */
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
  hours?:
    | number
    | undefined;
  /** Minutes of hour of day. Must be from 0 to 59. */
  minutes?:
    | number
    | undefined;
  /**
   * Seconds of minutes of the time. Must normally be from 0 to 59. An API may
   * allow the value 60 if it allows leap-seconds.
   */
  seconds?:
    | number
    | undefined;
  /** Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. */
  nanos?: number | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

function createBaseTimeOfDay(): TimeOfDay {
  return {};
}

export const TimeOfDay = {
  encode(message: TimeOfDay, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hours !== undefined && message.hours !== 0) {
      writer.uint32(8).int32(message.hours);
    }
    if (message.minutes !== undefined && message.minutes !== 0) {
      writer.uint32(16).int32(message.minutes);
    }
    if (message.seconds !== undefined && message.seconds !== 0) {
      writer.uint32(24).int32(message.seconds);
    }
    if (message.nanos !== undefined && message.nanos !== 0) {
      writer.uint32(32).int32(message.nanos);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): TimeOfDay {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimeOfDay();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.hours = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.minutes = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.seconds = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.nanos = reader.int32();
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

  fromJSON(object: any): TimeOfDay {
    return {
      hours: isSet(object.hours) ? Number(object.hours) : undefined,
      minutes: isSet(object.minutes) ? Number(object.minutes) : undefined,
      seconds: isSet(object.seconds) ? Number(object.seconds) : undefined,
      nanos: isSet(object.nanos) ? Number(object.nanos) : undefined,
    };
  },

  toJSON(message: TimeOfDay): unknown {
    const obj: any = {};
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
    return obj;
  },
};

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
