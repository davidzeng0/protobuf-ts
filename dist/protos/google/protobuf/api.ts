/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { SourceContext } from "./source_context";
import { Option, Syntax, syntaxFromJSON, syntaxToJSON } from "./type";

/**
 * Api is a light-weight descriptor for an API Interface.
 *
 * Interfaces are also described as "protocol buffer services" in some contexts,
 * such as by the "service" keyword in a .proto file, but they are different
 * from API Services, which represent a concrete implementation of an interface
 * as opposed to simply a description of methods and bindings. They are also
 * sometimes simply referred to as "APIs" in other contexts, such as the name of
 * this message itself. See https://cloud.google.com/apis/design/glossary for
 * detailed terminology.
 */
export interface Api {
  /**
   * The fully qualified name of this interface, including package name
   * followed by the interface's simple name.
   */
  name?:
    | string
    | undefined;
  /** The methods of this interface, in unspecified order. */
  methods?:
    | Method[]
    | undefined;
  /** Any metadata attached to the interface. */
  options?:
    | Option[]
    | undefined;
  /**
   * A version string for this interface. If specified, must have the form
   * `major-version.minor-version`, as in `1.10`. If the minor version is
   * omitted, it defaults to zero. If the entire version field is empty, the
   * major version is derived from the package name, as outlined below. If the
   * field is not empty, the version in the package name will be verified to be
   * consistent with what is provided here.
   *
   * The versioning schema uses [semantic
   * versioning](http://semver.org) where the major version number
   * indicates a breaking change and the minor version an additive,
   * non-breaking change. Both version numbers are signals to users
   * what to expect from different versions, and should be carefully
   * chosen based on the product plan.
   *
   * The major version is also reflected in the package name of the
   * interface, which must end in `v<major-version>`, as in
   * `google.feature.v1`. For major versions 0 and 1, the suffix can
   * be omitted. Zero major versions must only be used for
   * experimental, non-GA interfaces.
   */
  version?:
    | string
    | undefined;
  /**
   * Source context for the protocol buffer service represented by this
   * message.
   */
  source_context?:
    | SourceContext
    | undefined;
  /** Included interfaces. See [Mixin][]. */
  mixins?:
    | Mixin[]
    | undefined;
  /** The source syntax of the service. */
  syntax?: Syntax | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/** Method represents a method of an API interface. */
export interface Method {
  /** The simple name of this method. */
  name?:
    | string
    | undefined;
  /** A URL of the input message type. */
  request_type_url?:
    | string
    | undefined;
  /** If true, the request is streamed. */
  request_streaming?:
    | boolean
    | undefined;
  /** The URL of the output message type. */
  response_type_url?:
    | string
    | undefined;
  /** If true, the response is streamed. */
  response_streaming?:
    | boolean
    | undefined;
  /** Any metadata attached to the method. */
  options?:
    | Option[]
    | undefined;
  /** The source syntax of this method. */
  syntax?: Syntax | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/**
 * Declares an API Interface to be included in this interface. The including
 * interface must redeclare all the methods from the included interface, but
 * documentation and options are inherited as follows:
 *
 * - If after comment and whitespace stripping, the documentation
 *   string of the redeclared method is empty, it will be inherited
 *   from the original method.
 *
 * - Each annotation belonging to the service config (http,
 *   visibility) which is not set in the redeclared method will be
 *   inherited.
 *
 * - If an http annotation is inherited, the path pattern will be
 *   modified as follows. Any version prefix will be replaced by the
 *   version of the including interface plus the [root][] path if
 *   specified.
 *
 * Example of a simple mixin:
 *
 *     package google.acl.v1;
 *     service AccessControl {
 *       // Get the underlying ACL object.
 *       rpc GetAcl(GetAclRequest) returns (Acl) {
 *         option (google.api.http).get = "/v1/{resource=**}:getAcl";
 *       }
 *     }
 *
 *     package google.storage.v2;
 *     service Storage {
 *       rpc GetAcl(GetAclRequest) returns (Acl);
 *
 *       // Get a data record.
 *       rpc GetData(GetDataRequest) returns (Data) {
 *         option (google.api.http).get = "/v2/{resource=**}";
 *       }
 *     }
 *
 * Example of a mixin configuration:
 *
 *     apis:
 *     - name: google.storage.v2.Storage
 *       mixins:
 *       - name: google.acl.v1.AccessControl
 *
 * The mixin construct implies that all methods in `AccessControl` are
 * also declared with same name and request/response types in
 * `Storage`. A documentation generator or annotation processor will
 * see the effective `Storage.GetAcl` method after inheriting
 * documentation and annotations as follows:
 *
 *     service Storage {
 *       // Get the underlying ACL object.
 *       rpc GetAcl(GetAclRequest) returns (Acl) {
 *         option (google.api.http).get = "/v2/{resource=**}:getAcl";
 *       }
 *       ...
 *     }
 *
 * Note how the version in the path pattern changed from `v1` to `v2`.
 *
 * If the `root` field in the mixin is specified, it should be a
 * relative path under which inherited HTTP paths are placed. Example:
 *
 *     apis:
 *     - name: google.storage.v2.Storage
 *       mixins:
 *       - name: google.acl.v1.AccessControl
 *         root: acls
 *
 * This implies the following inherited HTTP annotation:
 *
 *     service Storage {
 *       // Get the underlying ACL object.
 *       rpc GetAcl(GetAclRequest) returns (Acl) {
 *         option (google.api.http).get = "/v2/acls/{resource=**}:getAcl";
 *       }
 *       ...
 *     }
 */
export interface Mixin {
  /** The fully qualified name of the interface which is included. */
  name?:
    | string
    | undefined;
  /**
   * If non-empty specifies a path under which inherited HTTP paths
   * are rooted.
   */
  root?: string | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

function createBaseApi(): Api {
  return {};
}

export const Api = {
  encode(message: Api, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined && message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.methods !== undefined && message.methods.length !== 0) {
      for (const v of message.methods) {
        Method.encode(v!, writer.uint32(18).fork()).ldelim();
      }
    }
    if (message.options !== undefined && message.options.length !== 0) {
      for (const v of message.options) {
        Option.encode(v!, writer.uint32(26).fork()).ldelim();
      }
    }
    if (message.version !== undefined && message.version !== "") {
      writer.uint32(34).string(message.version);
    }
    if (message.source_context !== undefined) {
      SourceContext.encode(message.source_context, writer.uint32(42).fork()).ldelim();
    }
    if (message.mixins !== undefined && message.mixins.length !== 0) {
      for (const v of message.mixins) {
        Mixin.encode(v!, writer.uint32(50).fork()).ldelim();
      }
    }
    if (message.syntax !== undefined && message.syntax !== 0) {
      writer.uint32(56).int32(message.syntax);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Api {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApi();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          if (message.methods === undefined) {
            message.methods = [];
          }
          message.methods!.push(Method.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          if (message.options === undefined) {
            message.options = [];
          }
          message.options!.push(Option.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.version = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.source_context = SourceContext.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          if (message.mixins === undefined) {
            message.mixins = [];
          }
          message.mixins!.push(Mixin.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.syntax = reader.int32() as any;
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

  fromJSON(object: any): Api {
    return {
      name: isSet(object.name) ? String(object.name) : undefined,
      methods: Array.isArray(object?.methods) ? object.methods.map((e: any) => Method.fromJSON(e)) : undefined,
      options: Array.isArray(object?.options) ? object.options.map((e: any) => Option.fromJSON(e)) : undefined,
      version: isSet(object.version) ? String(object.version) : undefined,
      source_context: isSet(object.source_context) ? SourceContext.fromJSON(object.source_context) : undefined,
      mixins: Array.isArray(object?.mixins) ? object.mixins.map((e: any) => Mixin.fromJSON(e)) : undefined,
      syntax: isSet(object.syntax) ? syntaxFromJSON(object.syntax) : undefined,
    };
  },

  toJSON(message: Api): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.methods?.length) {
      obj.methods = message.methods.map((e) => Method.toJSON(e));
    }
    if (message.options?.length) {
      obj.options = message.options.map((e) => Option.toJSON(e));
    }
    if (message.version !== undefined && message.version !== "") {
      obj.version = message.version;
    }
    if (message.source_context !== undefined) {
      obj.source_context = SourceContext.toJSON(message.source_context);
    }
    if (message.mixins?.length) {
      obj.mixins = message.mixins.map((e) => Mixin.toJSON(e));
    }
    if (message.syntax !== undefined && message.syntax !== 0) {
      obj.syntax = syntaxToJSON(message.syntax);
    }
    return obj;
  },
};

function createBaseMethod(): Method {
  return {};
}

export const Method = {
  encode(message: Method, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined && message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.request_type_url !== undefined && message.request_type_url !== "") {
      writer.uint32(18).string(message.request_type_url);
    }
    if (message.request_streaming === true) {
      writer.uint32(24).bool(message.request_streaming);
    }
    if (message.response_type_url !== undefined && message.response_type_url !== "") {
      writer.uint32(34).string(message.response_type_url);
    }
    if (message.response_streaming === true) {
      writer.uint32(40).bool(message.response_streaming);
    }
    if (message.options !== undefined && message.options.length !== 0) {
      for (const v of message.options) {
        Option.encode(v!, writer.uint32(50).fork()).ldelim();
      }
    }
    if (message.syntax !== undefined && message.syntax !== 0) {
      writer.uint32(56).int32(message.syntax);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Method {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMethod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.request_type_url = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.request_streaming = reader.bool();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.response_type_url = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.response_streaming = reader.bool();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          if (message.options === undefined) {
            message.options = [];
          }
          message.options!.push(Option.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.syntax = reader.int32() as any;
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

  fromJSON(object: any): Method {
    return {
      name: isSet(object.name) ? String(object.name) : undefined,
      request_type_url: isSet(object.request_type_url) ? String(object.request_type_url) : undefined,
      request_streaming: isSet(object.request_streaming) ? Boolean(object.request_streaming) : undefined,
      response_type_url: isSet(object.response_type_url) ? String(object.response_type_url) : undefined,
      response_streaming: isSet(object.response_streaming) ? Boolean(object.response_streaming) : undefined,
      options: Array.isArray(object?.options) ? object.options.map((e: any) => Option.fromJSON(e)) : undefined,
      syntax: isSet(object.syntax) ? syntaxFromJSON(object.syntax) : undefined,
    };
  },

  toJSON(message: Method): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.request_type_url !== undefined && message.request_type_url !== "") {
      obj.request_type_url = message.request_type_url;
    }
    if (message.request_streaming === true) {
      obj.request_streaming = message.request_streaming;
    }
    if (message.response_type_url !== undefined && message.response_type_url !== "") {
      obj.response_type_url = message.response_type_url;
    }
    if (message.response_streaming === true) {
      obj.response_streaming = message.response_streaming;
    }
    if (message.options?.length) {
      obj.options = message.options.map((e) => Option.toJSON(e));
    }
    if (message.syntax !== undefined && message.syntax !== 0) {
      obj.syntax = syntaxToJSON(message.syntax);
    }
    return obj;
  },
};

function createBaseMixin(): Mixin {
  return {};
}

export const Mixin = {
  encode(message: Mixin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined && message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.root !== undefined && message.root !== "") {
      writer.uint32(18).string(message.root);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Mixin {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMixin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.root = reader.string();
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

  fromJSON(object: any): Mixin {
    return {
      name: isSet(object.name) ? String(object.name) : undefined,
      root: isSet(object.root) ? String(object.root) : undefined,
    };
  },

  toJSON(message: Mixin): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.root !== undefined && message.root !== "") {
      obj.root = message.root;
    }
    return obj;
  },
};

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
