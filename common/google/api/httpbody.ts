/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Any } from "../protobuf/any";

/**
 * Message that represents an arbitrary HTTP body. It should only be used for
 * payload formats that can't be represented as JSON, such as raw binary or
 * an HTML page.
 *
 * This message can be used both in streaming and non-streaming API methods in
 * the request as well as the response.
 *
 * It can be used as a top-level request field, which is convenient if one
 * wants to extract parameters from either the URL or HTTP template into the
 * request fields and also want access to the raw HTTP body.
 *
 * Example:
 *
 *     message GetResourceRequest {
 *       // A unique request id.
 *       string request_id = 1;
 *
 *       // The raw HTTP body is bound to this field.
 *       google.api.HttpBody http_body = 2;
 *
 *     }
 *
 *     service ResourceService {
 *       rpc GetResource(GetResourceRequest)
 *         returns (google.api.HttpBody);
 *       rpc UpdateResource(google.api.HttpBody)
 *         returns (google.protobuf.Empty);
 *
 *     }
 *
 * Example with streaming methods:
 *
 *     service CaldavService {
 *       rpc GetCalendar(stream google.api.HttpBody)
 *         returns (stream google.api.HttpBody);
 *       rpc UpdateCalendar(stream google.api.HttpBody)
 *         returns (stream google.api.HttpBody);
 *
 *     }
 *
 * Use of this type only changes how the request and response bodies are
 * handled, all other features will continue to work unchanged.
 */
export interface HttpBody {
  /** The HTTP Content-Type header value specifying the content type of the body. */
  content_type?:
    | string
    | undefined;
  /** The HTTP request/response body as raw binary. */
  data?:
    | Buffer
    | undefined;
  /**
   * Application specific response metadata. Must be set in the first response
   * for streaming APIs.
   */
  extensions?: Any[] | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

function createBaseHttpBody(): HttpBody {
  return {};
}

export const HttpBody = {
  encode(message: HttpBody, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.content_type !== undefined && message.content_type !== "") {
      writer.uint32(10).string(message.content_type);
    }
    if (message.data !== undefined && message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (message.extensions !== undefined && message.extensions.length !== 0) {
      for (const v of message.extensions) {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): HttpBody {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHttpBody();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.content_type = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.data = reader.bytes() as Buffer;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          if (message.extensions === undefined) {
            message.extensions = [];
          }
          message.extensions!.push(Any.decode(reader, reader.uint32()));
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

  fromJSON(object: any): HttpBody {
    return {
      content_type: isSet(object.content_type) ? String(object.content_type) : undefined,
      data: isSet(object.data) ? Buffer.from(bytesFromBase64(object.data)) : undefined,
      extensions: Array.isArray(object?.extensions) ? object.extensions.map((e: any) => Any.fromJSON(e)) : undefined,
    };
  },

  toJSON(message: HttpBody): unknown {
    const obj: any = {};
    if (message.content_type !== undefined && message.content_type !== "") {
      obj.content_type = message.content_type;
    }
    if (message.data !== undefined && message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    if (message.extensions?.length) {
      obj.extensions = message.extensions.map((e) => Any.toJSON(e));
    }
    return obj;
  },
};

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
