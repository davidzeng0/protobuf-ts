/* eslint-disable */
import _m0 from "protobufjs/minimal";

/**
 * `SourceContext` represents information about the source of a
 * protobuf element, like the file in which it is defined.
 */
export interface SourceContext {
  /**
   * The path-qualified name of the .proto file that contained the associated
   * protobuf element.  For example: `"google/protobuf/source_context.proto"`.
   */
  file_name?: string | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

function createBaseSourceContext(): SourceContext {
  return {};
}

export const SourceContext = {
  encode(message: SourceContext, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.file_name !== undefined && message.file_name !== "") {
      writer.uint32(10).string(message.file_name);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): SourceContext {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceContext();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.file_name = reader.string();
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

  fromJSON(object: any): SourceContext {
    return { file_name: isSet(object.file_name) ? String(object.file_name) : undefined };
  },

  toJSON(message: SourceContext): unknown {
    const obj: any = {};
    if (message.file_name !== undefined && message.file_name !== "") {
      obj.file_name = message.file_name;
    }
    return obj;
  },
};

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
