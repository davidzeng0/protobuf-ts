/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Struct } from "../../protobuf/struct";

/** `AuditContext` provides information that is needed for audit logging. */
export interface AuditContext {
  /** Serialized audit log. */
  audit_log?:
    | Buffer
    | undefined;
  /**
   * An API request message that is scrubbed based on the method annotation.
   * This field should only be filled if audit_log field is present.
   * Service Control will use this to assemble a complete log for Cloud Audit
   * Logs and Google internal audit logs.
   */
  scrubbed_request?:
    | { [key: string]: any }
    | undefined;
  /**
   * An API response message that is scrubbed based on the method annotation.
   * This field should only be filled if audit_log field is present.
   * Service Control will use this to assemble a complete log for Cloud Audit
   * Logs and Google internal audit logs.
   */
  scrubbed_response?:
    | { [key: string]: any }
    | undefined;
  /** Number of scrubbed response items. */
  scrubbed_response_item_count?:
    | number
    | undefined;
  /** Audit resource name which is scrubbed. */
  target_resource?: string | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

function createBaseAuditContext(): AuditContext {
  return {};
}

export const AuditContext = {
  encode(message: AuditContext, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.audit_log !== undefined && message.audit_log.length !== 0) {
      writer.uint32(10).bytes(message.audit_log);
    }
    if (message.scrubbed_request !== undefined) {
      Struct.encode(Struct.wrap(message.scrubbed_request), writer.uint32(18).fork()).ldelim();
    }
    if (message.scrubbed_response !== undefined) {
      Struct.encode(Struct.wrap(message.scrubbed_response), writer.uint32(26).fork()).ldelim();
    }
    if (message.scrubbed_response_item_count !== undefined && message.scrubbed_response_item_count !== 0) {
      writer.uint32(32).int32(message.scrubbed_response_item_count);
    }
    if (message.target_resource !== undefined && message.target_resource !== "") {
      writer.uint32(42).string(message.target_resource);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): AuditContext {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuditContext();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.audit_log = reader.bytes() as Buffer;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.scrubbed_request = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.scrubbed_response = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.scrubbed_response_item_count = reader.int32();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.target_resource = reader.string();
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

  fromJSON(object: any): AuditContext {
    return {
      audit_log: isSet(object.audit_log) ? Buffer.from(bytesFromBase64(object.audit_log)) : undefined,
      scrubbed_request: isObject(object.scrubbed_request) ? object.scrubbed_request : undefined,
      scrubbed_response: isObject(object.scrubbed_response) ? object.scrubbed_response : undefined,
      scrubbed_response_item_count: isSet(object.scrubbed_response_item_count)
        ? Number(object.scrubbed_response_item_count)
        : undefined,
      target_resource: isSet(object.target_resource) ? String(object.target_resource) : undefined,
    };
  },

  toJSON(message: AuditContext): unknown {
    const obj: any = {};
    if (message.audit_log !== undefined && message.audit_log.length !== 0) {
      obj.audit_log = base64FromBytes(message.audit_log);
    }
    if (message.scrubbed_request !== undefined) {
      obj.scrubbed_request = message.scrubbed_request;
    }
    if (message.scrubbed_response !== undefined) {
      obj.scrubbed_response = message.scrubbed_response;
    }
    if (message.scrubbed_response_item_count !== undefined && message.scrubbed_response_item_count !== 0) {
      obj.scrubbed_response_item_count = Math.round(message.scrubbed_response_item_count);
    }
    if (message.target_resource !== undefined && message.target_resource !== "") {
      obj.target_resource = message.target_resource;
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
