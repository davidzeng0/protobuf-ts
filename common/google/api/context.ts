/* eslint-disable */
import _m0 from "protobufjs/minimal";

/**
 * `Context` defines which contexts an API requests.
 *
 * Example:
 *
 *     context:
 *       rules:
 *       - selector: "*"
 *         requested:
 *         - google.rpc.context.ProjectContext
 *         - google.rpc.context.OriginContext
 *
 * The above specifies that all methods in the API request
 * `google.rpc.context.ProjectContext` and
 * `google.rpc.context.OriginContext`.
 *
 * Available context types are defined in package
 * `google.rpc.context`.
 *
 * This also provides mechanism to allowlist any protobuf message extension that
 * can be sent in grpc metadata using “x-goog-ext-<extension_id>-bin” and
 * “x-goog-ext-<extension_id>-jspb” format. For example, list any service
 * specific protobuf types that can appear in grpc metadata as follows in your
 * yaml file:
 *
 * Example:
 *
 *     context:
 *       rules:
 *        - selector: "google.example.library.v1.LibraryService.CreateBook"
 *          allowed_request_extensions:
 *          - google.foo.v1.NewExtension
 *          allowed_response_extensions:
 *          - google.foo.v1.NewExtension
 *
 * You can also specify extension ID instead of fully qualified extension name
 * here.
 */
export interface Context {
  /**
   * A list of RPC context rules that apply to individual API methods.
   *
   * **NOTE:** All service configuration rules follow "last one wins" order.
   */
  rules?: ContextRule[] | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/**
 * A context rule provides information about the context for an individual API
 * element.
 */
export interface ContextRule {
  /**
   * Selects the methods to which this rule applies.
   *
   * Refer to [selector][google.api.DocumentationRule.selector] for syntax details.
   */
  selector?:
    | string
    | undefined;
  /** A list of full type names of requested contexts. */
  requested?:
    | string[]
    | undefined;
  /** A list of full type names of provided contexts. */
  provided?:
    | string[]
    | undefined;
  /**
   * A list of full type names or extension IDs of extensions allowed in grpc
   * side channel from client to backend.
   */
  allowed_request_extensions?:
    | string[]
    | undefined;
  /**
   * A list of full type names or extension IDs of extensions allowed in grpc
   * side channel from backend to client.
   */
  allowed_response_extensions?: string[] | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

function createBaseContext(): Context {
  return {};
}

export const Context = {
  encode(message: Context, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rules !== undefined && message.rules.length !== 0) {
      for (const v of message.rules) {
        ContextRule.encode(v!, writer.uint32(10).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Context {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContext();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          if (message.rules === undefined) {
            message.rules = [];
          }
          message.rules!.push(ContextRule.decode(reader, reader.uint32()));
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

  fromJSON(object: any): Context {
    return { rules: Array.isArray(object?.rules) ? object.rules.map((e: any) => ContextRule.fromJSON(e)) : undefined };
  },

  toJSON(message: Context): unknown {
    const obj: any = {};
    if (message.rules?.length) {
      obj.rules = message.rules.map((e) => ContextRule.toJSON(e));
    }
    return obj;
  },
};

function createBaseContextRule(): ContextRule {
  return {};
}

export const ContextRule = {
  encode(message: ContextRule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.selector !== undefined && message.selector !== "") {
      writer.uint32(10).string(message.selector);
    }
    if (message.requested !== undefined && message.requested.length !== 0) {
      for (const v of message.requested) {
        writer.uint32(18).string(v!);
      }
    }
    if (message.provided !== undefined && message.provided.length !== 0) {
      for (const v of message.provided) {
        writer.uint32(26).string(v!);
      }
    }
    if (message.allowed_request_extensions !== undefined && message.allowed_request_extensions.length !== 0) {
      for (const v of message.allowed_request_extensions) {
        writer.uint32(34).string(v!);
      }
    }
    if (message.allowed_response_extensions !== undefined && message.allowed_response_extensions.length !== 0) {
      for (const v of message.allowed_response_extensions) {
        writer.uint32(42).string(v!);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ContextRule {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContextRule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.selector = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          if (message.requested === undefined) {
            message.requested = [];
          }
          message.requested!.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          if (message.provided === undefined) {
            message.provided = [];
          }
          message.provided!.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          if (message.allowed_request_extensions === undefined) {
            message.allowed_request_extensions = [];
          }
          message.allowed_request_extensions!.push(reader.string());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          if (message.allowed_response_extensions === undefined) {
            message.allowed_response_extensions = [];
          }
          message.allowed_response_extensions!.push(reader.string());
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

  fromJSON(object: any): ContextRule {
    return {
      selector: isSet(object.selector) ? String(object.selector) : undefined,
      requested: Array.isArray(object?.requested) ? object.requested.map((e: any) => String(e)) : undefined,
      provided: Array.isArray(object?.provided) ? object.provided.map((e: any) => String(e)) : undefined,
      allowed_request_extensions: Array.isArray(object?.allowed_request_extensions)
        ? object.allowed_request_extensions.map((e: any) => String(e))
        : undefined,
      allowed_response_extensions: Array.isArray(object?.allowed_response_extensions)
        ? object.allowed_response_extensions.map((e: any) => String(e))
        : undefined,
    };
  },

  toJSON(message: ContextRule): unknown {
    const obj: any = {};
    if (message.selector !== undefined && message.selector !== "") {
      obj.selector = message.selector;
    }
    if (message.requested?.length) {
      obj.requested = message.requested;
    }
    if (message.provided?.length) {
      obj.provided = message.provided;
    }
    if (message.allowed_request_extensions?.length) {
      obj.allowed_request_extensions = message.allowed_request_extensions;
    }
    if (message.allowed_response_extensions?.length) {
      obj.allowed_response_extensions = message.allowed_response_extensions;
    }
    return obj;
  },
};

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
