/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

/** Represents an amount of money with its currency type. */
export interface Money {
  /** The three-letter currency code defined in ISO 4217. */
  currency_code?:
    | string
    | undefined;
  /**
   * The whole units of the amount.
   * For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.
   */
  units?:
    | bigint
    | undefined;
  /**
   * Number of nano (10^-9) units of the amount.
   * The value must be between -999,999,999 and +999,999,999 inclusive.
   * If `units` is positive, `nanos` must be positive or zero.
   * If `units` is zero, `nanos` can be positive, zero, or negative.
   * If `units` is negative, `nanos` must be negative or zero.
   * For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
   */
  nanos?: number | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

function createBaseMoney(): Money {
  return {};
}

export const Money = {
  encode(message: Money, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.currency_code !== undefined && message.currency_code !== "") {
      writer.uint32(10).string(message.currency_code);
    }
    if (message.units !== undefined && message.units !== BigInt("0")) {
      writer.uint32(16).int64(message.units.toString());
    }
    if (message.nanos !== undefined && message.nanos !== 0) {
      writer.uint32(24).int32(message.nanos);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Money {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMoney();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.currency_code = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.units = longToBigint(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
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

  fromJSON(object: any): Money {
    return {
      currency_code: isSet(object.currency_code) ? String(object.currency_code) : undefined,
      units: isSet(object.units) ? BigInt(object.units) : undefined,
      nanos: isSet(object.nanos) ? Number(object.nanos) : undefined,
    };
  },

  toJSON(message: Money): unknown {
    const obj: any = {};
    if (message.currency_code !== undefined && message.currency_code !== "") {
      obj.currency_code = message.currency_code;
    }
    if (message.units !== undefined && message.units !== BigInt("0")) {
      obj.units = message.units.toString();
    }
    if (message.nanos !== undefined && message.nanos !== 0) {
      obj.nanos = Math.round(message.nanos);
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
