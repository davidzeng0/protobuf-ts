/* eslint-disable */
import _m0 from "protobufjs/minimal";

/**
 * ### System parameter configuration
 *
 * A system parameter is a special kind of parameter defined by the API
 * system, not by an individual API. It is typically mapped to an HTTP header
 * and/or a URL query parameter. This configuration specifies which methods
 * change the names of the system parameters.
 */
export interface SystemParameters {
  /**
   * Define system parameters.
   *
   * The parameters defined here will override the default parameters
   * implemented by the system. If this field is missing from the service
   * config, default system parameters will be used. Default system parameters
   * and names is implementation-dependent.
   *
   * Example: define api key for all methods
   *
   *     system_parameters
   *       rules:
   *         - selector: "*"
   *           parameters:
   *             - name: api_key
   *               url_query_parameter: api_key
   *
   * Example: define 2 api key names for a specific method.
   *
   *     system_parameters
   *       rules:
   *         - selector: "/ListShelves"
   *           parameters:
   *             - name: api_key
   *               http_header: Api-Key1
   *             - name: api_key
   *               http_header: Api-Key2
   *
   * **NOTE:** All service configuration rules follow "last one wins" order.
   */
  rules?: SystemParameterRule[] | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/**
 * Define a system parameter rule mapping system parameter definitions to
 * methods.
 */
export interface SystemParameterRule {
  /**
   * Selects the methods to which this rule applies. Use '*' to indicate all
   * methods in all APIs.
   *
   * Refer to [selector][google.api.DocumentationRule.selector] for syntax details.
   */
  selector?:
    | string
    | undefined;
  /**
   * Define parameters. Multiple names may be defined for a parameter.
   * For a given method call, only one of them should be used. If multiple
   * names are used the behavior is implementation-dependent.
   * If none of the specified names are present the behavior is
   * parameter-dependent.
   */
  parameters?: SystemParameter[] | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/**
 * Define a parameter's name and location. The parameter may be passed as either
 * an HTTP header or a URL query parameter, and if both are passed the behavior
 * is implementation-dependent.
 */
export interface SystemParameter {
  /** Define the name of the parameter, such as "api_key" . It is case sensitive. */
  name?:
    | string
    | undefined;
  /**
   * Define the HTTP header name to use for the parameter. It is case
   * insensitive.
   */
  http_header?:
    | string
    | undefined;
  /**
   * Define the URL query parameter name to use for the parameter. It is case
   * sensitive.
   */
  url_query_parameter?: string | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

function createBaseSystemParameters(): SystemParameters {
  return {};
}

export const SystemParameters = {
  encode(message: SystemParameters, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rules !== undefined && message.rules.length !== 0) {
      for (const v of message.rules) {
        SystemParameterRule.encode(v!, writer.uint32(10).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): SystemParameters {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSystemParameters();
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
          message.rules!.push(SystemParameterRule.decode(reader, reader.uint32()));
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

  fromJSON(object: any): SystemParameters {
    return {
      rules: Array.isArray(object?.rules) ? object.rules.map((e: any) => SystemParameterRule.fromJSON(e)) : undefined,
    };
  },

  toJSON(message: SystemParameters): unknown {
    const obj: any = {};
    if (message.rules?.length) {
      obj.rules = message.rules.map((e) => SystemParameterRule.toJSON(e));
    }
    return obj;
  },
};

function createBaseSystemParameterRule(): SystemParameterRule {
  return {};
}

export const SystemParameterRule = {
  encode(message: SystemParameterRule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.selector !== undefined && message.selector !== "") {
      writer.uint32(10).string(message.selector);
    }
    if (message.parameters !== undefined && message.parameters.length !== 0) {
      for (const v of message.parameters) {
        SystemParameter.encode(v!, writer.uint32(18).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): SystemParameterRule {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSystemParameterRule();
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

          if (message.parameters === undefined) {
            message.parameters = [];
          }
          message.parameters!.push(SystemParameter.decode(reader, reader.uint32()));
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

  fromJSON(object: any): SystemParameterRule {
    return {
      selector: isSet(object.selector) ? String(object.selector) : undefined,
      parameters: Array.isArray(object?.parameters)
        ? object.parameters.map((e: any) => SystemParameter.fromJSON(e))
        : undefined,
    };
  },

  toJSON(message: SystemParameterRule): unknown {
    const obj: any = {};
    if (message.selector !== undefined && message.selector !== "") {
      obj.selector = message.selector;
    }
    if (message.parameters?.length) {
      obj.parameters = message.parameters.map((e) => SystemParameter.toJSON(e));
    }
    return obj;
  },
};

function createBaseSystemParameter(): SystemParameter {
  return {};
}

export const SystemParameter = {
  encode(message: SystemParameter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined && message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.http_header !== undefined && message.http_header !== "") {
      writer.uint32(18).string(message.http_header);
    }
    if (message.url_query_parameter !== undefined && message.url_query_parameter !== "") {
      writer.uint32(26).string(message.url_query_parameter);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): SystemParameter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSystemParameter();
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

          message.http_header = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.url_query_parameter = reader.string();
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

  fromJSON(object: any): SystemParameter {
    return {
      name: isSet(object.name) ? String(object.name) : undefined,
      http_header: isSet(object.http_header) ? String(object.http_header) : undefined,
      url_query_parameter: isSet(object.url_query_parameter) ? String(object.url_query_parameter) : undefined,
    };
  },

  toJSON(message: SystemParameter): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.http_header !== undefined && message.http_header !== "") {
      obj.http_header = message.http_header;
    }
    if (message.url_query_parameter !== undefined && message.url_query_parameter !== "") {
      obj.url_query_parameter = message.url_query_parameter;
    }
    return obj;
  },
};

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
