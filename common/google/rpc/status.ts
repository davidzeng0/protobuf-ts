/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Any } from "../protobuf/any";

/**
 * The `Status` type defines a logical error model that is suitable for
 * different programming environments, including REST APIs and RPC APIs. It is
 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
 * three pieces of data: error code, error message, and error details.
 *
 * You can find out more about this error model and how to work with it in the
 * [API Design Guide](https://cloud.google.com/apis/design/errors).
 */
export interface Status {
  /**
   * The status code, which should be an enum value of
   * [google.rpc.Code][google.rpc.Code].
   */
  code?:
    | number
    | undefined;
  /**
   * A developer-facing error message, which should be in English. Any
   * user-facing error message should be localized and sent in the
   * [google.rpc.Status.details][google.rpc.Status.details] field, or localized
   * by the client.
   */
  message?:
    | string
    | undefined;
  /**
   * A list of messages that carry the error details.  There is a common set of
   * message types for APIs to use.
   */
  details?: Any[] | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

function createBaseStatus(): Status {
  return {};
}

export const Status = {
  encode(message: Status, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== undefined && message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.message !== undefined && message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.details !== undefined && message.details.length !== 0) {
      for (const v of message.details) {
        Any.encode(v!, writer.uint32(26).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Status {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.code = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.message = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          if (message.details === undefined) {
            message.details = [];
          }
          message.details!.push(Any.decode(reader, reader.uint32()));
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

  fromJSON(object: any): Status {
    return {
      code: isSet(object.code) ? Number(object.code) : undefined,
      message: isSet(object.message) ? String(object.message) : undefined,
      details: Array.isArray(object?.details) ? object.details.map((e: any) => Any.fromJSON(e)) : undefined,
    };
  },

  toJSON(message: Status): unknown {
    const obj: any = {};
    if (message.code !== undefined && message.code !== 0) {
      obj.code = Math.round(message.code);
    }
    if (message.message !== undefined && message.message !== "") {
      obj.message = message.message;
    }
    if (message.details?.length) {
      obj.details = message.details.map((e) => Any.toJSON(e));
    }
    return obj;
  },
};

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
