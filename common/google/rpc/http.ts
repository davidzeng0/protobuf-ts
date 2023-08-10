/* eslint-disable */
import _m0 from "protobufjs/minimal";

/** Represents an HTTP request. */
export interface HttpRequest {
  /** The HTTP request method. */
  method?:
    | string
    | undefined;
  /** The HTTP request URI. */
  uri?:
    | string
    | undefined;
  /**
   * The HTTP request headers. The ordering of the headers is significant.
   * Multiple headers with the same key may present for the request.
   */
  headers?:
    | HttpHeader[]
    | undefined;
  /** The HTTP request body. If the body is not expected, it should be empty. */
  body?: Buffer | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/** Represents an HTTP response. */
export interface HttpResponse {
  /** The HTTP status code, such as 200 or 404. */
  status?:
    | number
    | undefined;
  /** The HTTP reason phrase, such as "OK" or "Not Found". */
  reason?:
    | string
    | undefined;
  /**
   * The HTTP response headers. The ordering of the headers is significant.
   * Multiple headers with the same key may present for the response.
   */
  headers?:
    | HttpHeader[]
    | undefined;
  /** The HTTP response body. If the body is not expected, it should be empty. */
  body?: Buffer | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/** Represents an HTTP header. */
export interface HttpHeader {
  /** The HTTP header key. It is case insensitive. */
  key?:
    | string
    | undefined;
  /** The HTTP header value. */
  value?: string | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

function createBaseHttpRequest(): HttpRequest {
  return {};
}

export const HttpRequest = {
  encode(message: HttpRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.method !== undefined && message.method !== "") {
      writer.uint32(10).string(message.method);
    }
    if (message.uri !== undefined && message.uri !== "") {
      writer.uint32(18).string(message.uri);
    }
    if (message.headers !== undefined && message.headers.length !== 0) {
      for (const v of message.headers) {
        HttpHeader.encode(v!, writer.uint32(26).fork()).ldelim();
      }
    }
    if (message.body !== undefined && message.body.length !== 0) {
      writer.uint32(34).bytes(message.body);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): HttpRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHttpRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.method = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.uri = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          if (message.headers === undefined) {
            message.headers = [];
          }
          message.headers!.push(HttpHeader.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.body = reader.bytes() as Buffer;
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

  fromJSON(object: any): HttpRequest {
    return {
      method: isSet(object.method) ? String(object.method) : undefined,
      uri: isSet(object.uri) ? String(object.uri) : undefined,
      headers: Array.isArray(object?.headers) ? object.headers.map((e: any) => HttpHeader.fromJSON(e)) : undefined,
      body: isSet(object.body) ? Buffer.from(bytesFromBase64(object.body)) : undefined,
    };
  },

  toJSON(message: HttpRequest): unknown {
    const obj: any = {};
    if (message.method !== undefined && message.method !== "") {
      obj.method = message.method;
    }
    if (message.uri !== undefined && message.uri !== "") {
      obj.uri = message.uri;
    }
    if (message.headers?.length) {
      obj.headers = message.headers.map((e) => HttpHeader.toJSON(e));
    }
    if (message.body !== undefined && message.body.length !== 0) {
      obj.body = base64FromBytes(message.body);
    }
    return obj;
  },
};

function createBaseHttpResponse(): HttpResponse {
  return {};
}

export const HttpResponse = {
  encode(message: HttpResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== undefined && message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.reason !== undefined && message.reason !== "") {
      writer.uint32(18).string(message.reason);
    }
    if (message.headers !== undefined && message.headers.length !== 0) {
      for (const v of message.headers) {
        HttpHeader.encode(v!, writer.uint32(26).fork()).ldelim();
      }
    }
    if (message.body !== undefined && message.body.length !== 0) {
      writer.uint32(34).bytes(message.body);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): HttpResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHttpResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.status = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.reason = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          if (message.headers === undefined) {
            message.headers = [];
          }
          message.headers!.push(HttpHeader.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.body = reader.bytes() as Buffer;
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

  fromJSON(object: any): HttpResponse {
    return {
      status: isSet(object.status) ? Number(object.status) : undefined,
      reason: isSet(object.reason) ? String(object.reason) : undefined,
      headers: Array.isArray(object?.headers) ? object.headers.map((e: any) => HttpHeader.fromJSON(e)) : undefined,
      body: isSet(object.body) ? Buffer.from(bytesFromBase64(object.body)) : undefined,
    };
  },

  toJSON(message: HttpResponse): unknown {
    const obj: any = {};
    if (message.status !== undefined && message.status !== 0) {
      obj.status = Math.round(message.status);
    }
    if (message.reason !== undefined && message.reason !== "") {
      obj.reason = message.reason;
    }
    if (message.headers?.length) {
      obj.headers = message.headers.map((e) => HttpHeader.toJSON(e));
    }
    if (message.body !== undefined && message.body.length !== 0) {
      obj.body = base64FromBytes(message.body);
    }
    return obj;
  },
};

function createBaseHttpHeader(): HttpHeader {
  return {};
}

export const HttpHeader = {
  encode(message: HttpHeader, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== undefined && message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined && message.value !== "") {
      writer.uint32(18).string(message.value);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): HttpHeader {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHttpHeader();
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

          message.value = reader.string();
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

  fromJSON(object: any): HttpHeader {
    return {
      key: isSet(object.key) ? String(object.key) : undefined,
      value: isSet(object.value) ? String(object.value) : undefined,
    };
  },

  toJSON(message: HttpHeader): unknown {
    const obj: any = {};
    if (message.key !== undefined && message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined && message.value !== "") {
      obj.value = message.value;
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
