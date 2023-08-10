/* eslint-disable */
import _m0 from "protobufjs/minimal";

/**
 * `NullValue` is a singleton enumeration to represent the null value for the
 * `Value` type union.
 *
 * The JSON representation for `NullValue` is JSON `null`.
 */
export enum NullValue {
  /** NULL_VALUE - Null value. */
  NULL_VALUE = 0,
  UNRECOGNIZED = -1,
}

export function nullValueFromJSON(object: any): NullValue {
  switch (object) {
    case 0:
    case "NULL_VALUE":
      return NullValue.NULL_VALUE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return NullValue.UNRECOGNIZED;
  }
}

export function nullValueToJSON(object: NullValue): string {
  switch (object) {
    case NullValue.NULL_VALUE:
      return "NULL_VALUE";
    case NullValue.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * `Struct` represents a structured data value, consisting of fields
 * which map to dynamically typed values. In some languages, `Struct`
 * might be supported by a native representation. For example, in
 * scripting languages like JS a struct is represented as an
 * object. The details of that representation are described together
 * with the proto support for the language.
 *
 * The JSON representation for `Struct` is JSON object.
 */
export interface Struct {
  /** Unordered map of dynamically typed values. */
  fields?: Map<string, any | undefined> | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

export interface Struct_FieldsEntry {
  key: string;
  value?: any | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/**
 * `Value` represents a dynamically typed value which can be either
 * null, a number, a string, a boolean, a recursive struct value, or a
 * list of values. A producer of value is expected to set one of these
 * variants. Absence of any variant indicates an error.
 *
 * The JSON representation for `Value` is JSON value.
 */
export interface Value {
  /** Represents a null value. */
  null_value?:
    | NullValue
    | undefined;
  /** Represents a double value. */
  number_value?:
    | number
    | undefined;
  /** Represents a string value. */
  string_value?:
    | string
    | undefined;
  /** Represents a boolean value. */
  bool_value?:
    | boolean
    | undefined;
  /** Represents a structured value. */
  struct_value?:
    | { [key: string]: any }
    | undefined;
  /** Represents a repeated `Value`. */
  list_value?: Array<any> | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/**
 * `ListValue` is a wrapper around a repeated field of values.
 *
 * The JSON representation for `ListValue` is JSON array.
 */
export interface ListValue {
  /** Repeated field of dynamically typed values. */
  values?: any[] | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

function createBaseStruct(): Struct {
  return {};
}

export const Struct = {
  encode(message: Struct, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    (message.fields || new Map()).forEach((value, key) => {
      if (value !== undefined) {
        Struct_FieldsEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
      }
    });
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Struct {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStruct();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = Struct_FieldsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            if (message.fields === undefined) {
              message.fields = new Map();
            }
            message.fields!.set(entry1.key, entry1.value);
          }
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

  fromJSON(object: any): Struct {
    return {
      fields: isObject(object.fields)
        ? Object.entries(object.fields).reduce<Map<string, any | undefined>>((acc, [key, value]) => {
          acc.set(key, value as any | undefined);
          return acc;
        }, new Map())
        : undefined,
    };
  },

  toJSON(message: Struct): unknown {
    const obj: any = {};
    if (message.fields?.size) {
      obj.fields = {};
      message.fields.forEach((v, k) => {
        obj.fields[k] = v;
      });
    }
    return obj;
  },

  wrap(object: { [key: string]: any } | undefined): Struct {
    const struct = createBaseStruct();
    if (object !== undefined) {
      Object.keys(object).forEach((key) => {
        struct.fields.set(key, object[key]);
      });
    }
    return struct;
  },

  unwrap(message: Struct): { [key: string]: any } {
    const object: { [key: string]: any } = {};
    [...message.fields.keys()].forEach((key) => {
      object[key] = message.fields.get(key);
    });
    return object;
  },
};

function createBaseStruct_FieldsEntry(): Struct_FieldsEntry {
  return { key: "" };
}

export const Struct_FieldsEntry = {
  encode(message: Struct_FieldsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Value.encode(Value.wrap(message.value), writer.uint32(18).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Struct_FieldsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStruct_FieldsEntry();
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
          if (tag !== 18) {
            break;
          }

          message.value = Value.unwrap(Value.decode(reader, reader.uint32()));
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

  fromJSON(object: any): Struct_FieldsEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object?.value) ? object.value : undefined };
  },

  toJSON(message: Struct_FieldsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = message.value;
    }
    return obj;
  },
};

function createBaseValue(): Value {
  return {};
}

export const Value = {
  encode(message: Value, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.null_value !== undefined) {
      writer.uint32(8).int32(message.null_value);
    }
    if (message.number_value !== undefined) {
      writer.uint32(17).double(message.number_value);
    }
    if (message.string_value !== undefined) {
      writer.uint32(26).string(message.string_value);
    }
    if (message.bool_value !== undefined) {
      writer.uint32(32).bool(message.bool_value);
    }
    if (message.struct_value !== undefined) {
      Struct.encode(Struct.wrap(message.struct_value), writer.uint32(42).fork()).ldelim();
    }
    if (message.list_value !== undefined) {
      ListValue.encode(ListValue.wrap(message.list_value), writer.uint32(50).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Value {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.null_value = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.number_value = reader.double();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.string_value = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.bool_value = reader.bool();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.struct_value = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.list_value = ListValue.unwrap(ListValue.decode(reader, reader.uint32()));
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

  fromJSON(object: any): Value {
    return {
      null_value: isSet(object.null_value) ? nullValueFromJSON(object.null_value) : undefined,
      number_value: isSet(object.number_value) ? Number(object.number_value) : undefined,
      string_value: isSet(object.string_value) ? String(object.string_value) : undefined,
      bool_value: isSet(object.bool_value) ? Boolean(object.bool_value) : undefined,
      struct_value: isObject(object.struct_value) ? object.struct_value : undefined,
      list_value: Array.isArray(object.list_value) ? [...object.list_value] : undefined,
    };
  },

  toJSON(message: Value): unknown {
    const obj: any = {};
    if (message.null_value !== undefined) {
      obj.null_value = nullValueToJSON(message.null_value);
    }
    if (message.number_value !== undefined) {
      obj.number_value = message.number_value;
    }
    if (message.string_value !== undefined) {
      obj.string_value = message.string_value;
    }
    if (message.bool_value !== undefined) {
      obj.bool_value = message.bool_value;
    }
    if (message.struct_value !== undefined) {
      obj.struct_value = message.struct_value;
    }
    if (message.list_value !== undefined) {
      obj.list_value = message.list_value;
    }
    return obj;
  },

  wrap(value: any): Value {
    const result = createBaseValue();
    if (value === null) {
      result.null_value = NullValue.NULL_VALUE;
    } else if (typeof value === "boolean") {
      result.bool_value = value;
    } else if (typeof value === "number") {
      result.number_value = value;
    } else if (typeof value === "string") {
      result.string_value = value;
    } else if (Array.isArray(value)) {
      result.list_value = value;
    } else if (typeof value === "object") {
      result.struct_value = value;
    } else if (typeof value !== "undefined") {
      throw new Error("Unsupported any value type: " + typeof value);
    }
    return result;
  },

  unwrap(message: any): string | number | boolean | Object | null | Array<any> | undefined {
    if (message.string_value !== undefined) {
      return message.string_value;
    } else if (message?.number_value !== undefined) {
      return message.number_value;
    } else if (message?.bool_value !== undefined) {
      return message.bool_value;
    } else if (message?.struct_value !== undefined) {
      return message.struct_value as any;
    } else if (message?.list_value !== undefined) {
      return message.list_value;
    } else if (message?.null_value !== undefined) {
      return null;
    }
    return undefined;
  },
};

function createBaseListValue(): ListValue {
  return {};
}

export const ListValue = {
  encode(message: ListValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.values !== undefined && message.values.length !== 0) {
      for (const v of message.values) {
        Value.encode(Value.wrap(v!), writer.uint32(10).fork()).ldelim();
      }
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListValue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          if (message.values === undefined) {
            message.values = [];
          }
          message.values!.push(Value.unwrap(Value.decode(reader, reader.uint32())));
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

  fromJSON(object: any): ListValue {
    return { values: Array.isArray(object?.values) ? [...object.values] : [] };
  },

  toJSON(message: ListValue): unknown {
    const obj: any = {};
    if (message.values?.length) {
      obj.values = message.values;
    }
    return obj;
  },

  wrap(array: Array<any> | undefined): ListValue {
    const result = createBaseListValue();
    result.values = array ?? [];
    return result;
  },

  unwrap(message: ListValue): Array<any> {
    if (message?.hasOwnProperty("values") && Array.isArray(message.values)) {
      return message.values;
    } else {
      return message as any;
    }
  },
};

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
