/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

/** Represents a fraction in terms of a numerator divided by a denominator. */
export interface Fraction {
  /** The numerator in the fraction, e.g. 2 in 2/3. */
  numerator?:
    | bigint
    | undefined;
  /**
   * The value by which the numerator is divided, e.g. 3 in 2/3. Must be
   * positive.
   */
  denominator?: bigint | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

function createBaseFraction(): Fraction {
  return {};
}

export const Fraction = {
  encode(message: Fraction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.numerator !== undefined && message.numerator !== BigInt("0")) {
      writer.uint32(8).int64(message.numerator.toString());
    }
    if (message.denominator !== undefined && message.denominator !== BigInt("0")) {
      writer.uint32(16).int64(message.denominator.toString());
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Fraction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFraction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.numerator = longToBigint(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.denominator = longToBigint(reader.int64() as Long);
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

  fromJSON(object: any): Fraction {
    return {
      numerator: isSet(object.numerator) ? BigInt(object.numerator) : undefined,
      denominator: isSet(object.denominator) ? BigInt(object.denominator) : undefined,
    };
  },

  toJSON(message: Fraction): unknown {
    const obj: any = {};
    if (message.numerator !== undefined && message.numerator !== BigInt("0")) {
      obj.numerator = message.numerator.toString();
    }
    if (message.denominator !== undefined && message.denominator !== BigInt("0")) {
      obj.denominator = message.denominator.toString();
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
