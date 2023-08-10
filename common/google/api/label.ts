/* eslint-disable */
import _m0 from "protobufjs/minimal";

/** A description of a label. */
export interface LabelDescriptor {
  /** The label key. */
  key?:
    | string
    | undefined;
  /** The type of data that can be assigned to the label. */
  value_type?:
    | LabelDescriptor_ValueType
    | undefined;
  /** A human-readable description for the label. */
  description?: string | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/** Value types that can be used as label values. */
export enum LabelDescriptor_ValueType {
  /** STRING - A variable-length string. This is the default. */
  STRING = 0,
  /** BOOL - Boolean; true or false. */
  BOOL = 1,
  /** INT64 - A 64-bit signed integer. */
  INT64 = 2,
  UNRECOGNIZED = -1,
}

export function labelDescriptor_ValueTypeFromJSON(object: any): LabelDescriptor_ValueType {
  switch (object) {
    case 0:
    case "STRING":
      return LabelDescriptor_ValueType.STRING;
    case 1:
    case "BOOL":
      return LabelDescriptor_ValueType.BOOL;
    case 2:
    case "INT64":
      return LabelDescriptor_ValueType.INT64;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LabelDescriptor_ValueType.UNRECOGNIZED;
  }
}

export function labelDescriptor_ValueTypeToJSON(object: LabelDescriptor_ValueType): string {
  switch (object) {
    case LabelDescriptor_ValueType.STRING:
      return "STRING";
    case LabelDescriptor_ValueType.BOOL:
      return "BOOL";
    case LabelDescriptor_ValueType.INT64:
      return "INT64";
    case LabelDescriptor_ValueType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseLabelDescriptor(): LabelDescriptor {
  return {};
}

export const LabelDescriptor = {
  encode(message: LabelDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== undefined && message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value_type !== undefined && message.value_type !== 0) {
      writer.uint32(16).int32(message.value_type);
    }
    if (message.description !== undefined && message.description !== "") {
      writer.uint32(26).string(message.description);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): LabelDescriptor {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLabelDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.value_type = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.description = reader.string();
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

  fromJSON(object: any): LabelDescriptor {
    return {
      key: isSet(object.key) ? String(object.key) : undefined,
      value_type: isSet(object.value_type) ? labelDescriptor_ValueTypeFromJSON(object.value_type) : undefined,
      description: isSet(object.description) ? String(object.description) : undefined,
    };
  },

  toJSON(message: LabelDescriptor): unknown {
    const obj: any = {};
    if (message.key !== undefined && message.key !== "") {
      obj.key = message.key;
    }
    if (message.value_type !== undefined && message.value_type !== 0) {
      obj.value_type = labelDescriptor_ValueTypeToJSON(message.value_type);
    }
    if (message.description !== undefined && message.description !== "") {
      obj.description = message.description;
    }
    return obj;
  },
};

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
