/* eslint-disable */
import _m0 from "protobufjs/minimal";

/**
 * Represents a whole or partial calendar date, such as a birthday. The time of
 * day and time zone are either specified elsewhere or are insignificant. The
 * date is relative to the Gregorian Calendar. This can represent one of the
 * following:
 *
 * * A full date, with non-zero year, month, and day values
 * * A month and day value, with a zero year, such as an anniversary
 * * A year on its own, with zero month and day values
 * * A year and month value, with a zero day, such as a credit card expiration
 * date
 *
 * Related types are [google.type.TimeOfDay][google.type.TimeOfDay] and
 * `google.protobuf.Timestamp`.
 */
export interface DateMessage {
  /**
   * Year of the date. Must be from 1 to 9999, or 0 to specify a date without
   * a year.
   */
  year?:
    | number
    | undefined;
  /**
   * Month of a year. Must be from 1 to 12, or 0 to specify a year without a
   * month and day.
   */
  month?:
    | number
    | undefined;
  /**
   * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0
   * to specify a year by itself or a year and month where the day isn't
   * significant.
   */
  day?: number | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

function createBaseDateMessage(): DateMessage {
  return {};
}

export const DateMessage = {
  encode(message: DateMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.year !== undefined && message.year !== 0) {
      writer.uint32(8).int32(message.year);
    }
    if (message.month !== undefined && message.month !== 0) {
      writer.uint32(16).int32(message.month);
    }
    if (message.day !== undefined && message.day !== 0) {
      writer.uint32(24).int32(message.day);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): DateMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDateMessage();
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

  fromJSON(object: any): DateMessage {
    return {
      year: isSet(object.year) ? Number(object.year) : undefined,
      month: isSet(object.month) ? Number(object.month) : undefined,
      day: isSet(object.day) ? Number(object.day) : undefined,
    };
  },

  toJSON(message: DateMessage): unknown {
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
    return obj;
  },
};

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
