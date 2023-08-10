/* eslint-disable */
import _m0 from "protobufjs/minimal";

/**
 * `Endpoint` describes a network address of a service that serves a set of
 * APIs. It is commonly known as a service endpoint. A service may expose
 * any number of service endpoints, and all service endpoints share the same
 * service definition, such as quota limits and monitoring metrics.
 *
 * Example:
 *
 *     type: google.api.Service
 *     name: library-example.googleapis.com
 *     endpoints:
 *       # Declares network address `https://library-example.googleapis.com`
 *       # for service `library-example.googleapis.com`. The `https` scheme
 *       # is implicit for all service endpoints. Other schemes may be
 *       # supported in the future.
 *     - name: library-example.googleapis.com
 *       allow_cors: false
 *     - name: content-staging-library-example.googleapis.com
 *       # Allows HTTP OPTIONS calls to be passed to the API frontend, for it
 *       # to decide whether the subsequent cross-origin request is allowed
 *       # to proceed.
 *       allow_cors: true
 */
export interface Endpoint {
  /** The canonical name of this endpoint. */
  name?:
    | string
    | undefined;
  /**
   * Unimplemented. Dot not use.
   *
   * DEPRECATED: This field is no longer supported. Instead of using aliases,
   * please specify multiple [google.api.Endpoint][google.api.Endpoint] for each
   * of the intended aliases.
   *
   * Additional names that this endpoint will be hosted on.
   *
   * @deprecated
   */
  aliases?:
    | string[]
    | undefined;
  /**
   * The specification of an Internet routable address of API frontend that will
   * handle requests to this [API
   * Endpoint](https://cloud.google.com/apis/design/glossary). It should be
   * either a valid IPv4 address or a fully-qualified domain name. For example,
   * "8.8.8.8" or "myservice.appspot.com".
   */
  target?:
    | string
    | undefined;
  /**
   * Allowing
   * [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing), aka
   * cross-domain traffic, would allow the backends served from this endpoint to
   * receive and respond to HTTP OPTIONS requests. The response will be used by
   * the browser to determine whether the subsequent cross-origin request is
   * allowed to proceed.
   */
  allow_cors?: boolean | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

function createBaseEndpoint(): Endpoint {
  return {};
}

export const Endpoint = {
  encode(message: Endpoint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined && message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.aliases !== undefined && message.aliases.length !== 0) {
      for (const v of message.aliases) {
        writer.uint32(18).string(v!);
      }
    }
    if (message.target !== undefined && message.target !== "") {
      writer.uint32(810).string(message.target);
    }
    if (message.allow_cors === true) {
      writer.uint32(40).bool(message.allow_cors);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Endpoint {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEndpoint();
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

          if (message.aliases === undefined) {
            message.aliases = [];
          }
          message.aliases!.push(reader.string());
          continue;
        case 101:
          if (tag !== 810) {
            break;
          }

          message.target = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.allow_cors = reader.bool();
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

  fromJSON(object: any): Endpoint {
    return {
      name: isSet(object.name) ? String(object.name) : undefined,
      aliases: Array.isArray(object?.aliases) ? object.aliases.map((e: any) => String(e)) : undefined,
      target: isSet(object.target) ? String(object.target) : undefined,
      allow_cors: isSet(object.allow_cors) ? Boolean(object.allow_cors) : undefined,
    };
  },

  toJSON(message: Endpoint): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.aliases?.length) {
      obj.aliases = message.aliases;
    }
    if (message.target !== undefined && message.target !== "") {
      obj.target = message.target;
    }
    if (message.allow_cors === true) {
      obj.allow_cors = message.allow_cors;
    }
    return obj;
  },
};

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
