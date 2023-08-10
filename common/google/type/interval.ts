/* eslint-disable */
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
  start_time?:
    | Timestamp
    | undefined;
  /**
   * Optional. Exclusive end of the interval.
   *
   * If specified, a Timestamp matching this interval will have to be before the
   * end.
   */
  end_time?: Timestamp | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

function createBaseInterval(): Interval {
  return {};
}

export const Interval = {
  encode(message: Interval, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.start_time !== undefined) {
      Timestamp.encode(message.start_time, writer.uint32(10).fork()).ldelim();
    }
    if (message.end_time !== undefined) {
      Timestamp.encode(message.end_time, writer.uint32(18).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Interval {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInterval();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.start_time = Timestamp.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.end_time = Timestamp.decode(reader, reader.uint32());
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

  fromJSON(object: any): Interval {
    return {
      start_time: isSet(object.start_time) ? fromJsonTimestamp(object.start_time) : undefined,
      end_time: isSet(object.end_time) ? fromJsonTimestamp(object.end_time) : undefined,
    };
  },

  toJSON(message: Interval): unknown {
    const obj: any = {};
    if (message.start_time !== undefined) {
      obj.start_time = fromTimestamp(message.start_time).toISOString();
    }
    if (message.end_time !== undefined) {
      obj.end_time = fromTimestamp(message.end_time).toISOString();
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
