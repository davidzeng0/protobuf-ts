/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Any } from "../protobuf/any";

/** Source information used to create a Service Config */
export interface SourceInfo {
  /** All files used during config generation. */
  source_files?: Any[] | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

function createBaseSourceInfo(): SourceInfo {
  return {};
}

export const SourceInfo = {
  encode(message: SourceInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.source_files !== undefined && message.source_files.length !== 0) {
      for (const v of message.source_files) {
        Any.encode(v!, writer.uint32(10).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): SourceInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          if (message.source_files === undefined) {
            message.source_files = [];
          }
          message.source_files!.push(Any.decode(reader, reader.uint32()));
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

  fromJSON(object: any): SourceInfo {
    return {
      source_files: Array.isArray(object?.source_files)
        ? object.source_files.map((e: any) => Any.fromJSON(e))
        : undefined,
    };
  },

  toJSON(message: SourceInfo): unknown {
    const obj: any = {};
    if (message.source_files?.length) {
      obj.source_files = message.source_files.map((e) => Any.toJSON(e));
    }
    return obj;
  },
};
