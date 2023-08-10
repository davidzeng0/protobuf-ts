/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../protobuf/any";
import { Duration } from "../../protobuf/duration";
import { Struct } from "../../protobuf/struct";
import { Timestamp } from "../../protobuf/timestamp";

/**
 * This message defines the standard attribute vocabulary for Google APIs.
 *
 * An attribute is a piece of metadata that describes an activity on a network
 * service. For example, the size of an HTTP request, or the status code of
 * an HTTP response.
 *
 * Each attribute has a type and a name, which is logically defined as
 * a proto message field in `AttributeContext`. The field type becomes the
 * attribute type, and the field path becomes the attribute name. For example,
 * the attribute `source.ip` maps to field `AttributeContext.source.ip`.
 *
 * This message definition is guaranteed not to have any wire breaking change.
 * So you can use it directly for passing attributes across different systems.
 *
 * NOTE: Different system may generate different subset of attributes. Please
 * verify the system specification before relying on an attribute generated
 * a system.
 */
export interface AttributeContext {
  /**
   * The origin of a network activity. In a multi hop network activity,
   * the origin represents the sender of the first hop. For the first hop,
   * the `source` and the `origin` must have the same content.
   */
  origin?:
    | AttributeContext_Peer
    | undefined;
  /**
   * The source of a network activity, such as starting a TCP connection.
   * In a multi hop network activity, the source represents the sender of the
   * last hop.
   */
  source?:
    | AttributeContext_Peer
    | undefined;
  /**
   * The destination of a network activity, such as accepting a TCP connection.
   * In a multi hop network activity, the destination represents the receiver of
   * the last hop.
   */
  destination?:
    | AttributeContext_Peer
    | undefined;
  /** Represents a network request, such as an HTTP request. */
  request?:
    | AttributeContext_Request
    | undefined;
  /** Represents a network response, such as an HTTP response. */
  response?:
    | AttributeContext_Response
    | undefined;
  /**
   * Represents a target resource that is involved with a network activity.
   * If multiple resources are involved with an activity, this must be the
   * primary one.
   */
  resource?:
    | AttributeContext_Resource
    | undefined;
  /** Represents an API operation that is involved to a network activity. */
  api?:
    | AttributeContext_Api
    | undefined;
  /** Supports extensions for advanced use cases, such as logs and metrics. */
  extensions?: Any[] | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/**
 * This message defines attributes for a node that handles a network request.
 * The node can be either a service or an application that sends, forwards,
 * or receives the request. Service peers should fill in
 * `principal` and `labels` as appropriate.
 */
export interface AttributeContext_Peer {
  /** The IP address of the peer. */
  ip?:
    | string
    | undefined;
  /** The network port of the peer. */
  port?:
    | bigint
    | undefined;
  /** The labels associated with the peer. */
  labels?:
    | Map<string, string>
    | undefined;
  /**
   * The identity of this peer. Similar to `Request.auth.principal`, but
   * relative to the peer instead of the request. For example, the
   * identity associated with a load balancer that forwarded the request.
   */
  principal?:
    | string
    | undefined;
  /**
   * The CLDR country/region code associated with the above IP address.
   * If the IP address is private, the `region_code` should reflect the
   * physical location where this peer is running.
   */
  region_code?: string | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

export interface AttributeContext_Peer_LabelsEntry {
  key: string;
  value: string;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/**
 * This message defines attributes associated with API operations, such as
 * a network API request. The terminology is based on the conventions used
 * by Google APIs, Istio, and OpenAPI.
 */
export interface AttributeContext_Api {
  /**
   * The API service name. It is a logical identifier for a networked API,
   * such as "pubsub.googleapis.com". The naming syntax depends on the
   * API management system being used for handling the request.
   */
  service?:
    | string
    | undefined;
  /**
   * The API operation name. For gRPC requests, it is the fully qualified API
   * method name, such as "google.pubsub.v1.Publisher.Publish". For OpenAPI
   * requests, it is the `operationId`, such as "getPet".
   */
  operation?:
    | string
    | undefined;
  /**
   * The API protocol used for sending the request, such as "http", "https",
   * "grpc", or "internal".
   */
  protocol?:
    | string
    | undefined;
  /**
   * The API version associated with the API operation above, such as "v1" or
   * "v1alpha1".
   */
  version?: string | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/**
 * This message defines request authentication attributes. Terminology is
 * based on the JSON Web Token (JWT) standard, but the terms also
 * correlate to concepts in other standards.
 */
export interface AttributeContext_Auth {
  /**
   * The authenticated principal. Reflects the issuer (`iss`) and subject
   * (`sub`) claims within a JWT. The issuer and subject should be `/`
   * delimited, with `/` percent-encoded within the subject fragment. For
   * Google accounts, the principal format is:
   * "https://accounts.google.com/{id}"
   */
  principal?:
    | string
    | undefined;
  /**
   * The intended audience(s) for this authentication information. Reflects
   * the audience (`aud`) claim within a JWT. The audience
   * value(s) depends on the `issuer`, but typically include one or more of
   * the following pieces of information:
   *
   * *  The services intended to receive the credential. For example,
   *    ["https://pubsub.googleapis.com/", "https://storage.googleapis.com/"].
   * *  A set of service-based scopes. For example,
   *    ["https://www.googleapis.com/auth/cloud-platform"].
   * *  The client id of an app, such as the Firebase project id for JWTs
   *    from Firebase Auth.
   *
   * Consult the documentation for the credential issuer to determine the
   * information provided.
   */
  audiences?:
    | string[]
    | undefined;
  /**
   * The authorized presenter of the credential. Reflects the optional
   * Authorized Presenter (`azp`) claim within a JWT or the
   * OAuth client id. For example, a Google Cloud Platform client id looks
   * as follows: "123456789012.apps.googleusercontent.com".
   */
  presenter?:
    | string
    | undefined;
  /**
   * Structured claims presented with the credential. JWTs include
   * `{key: value}` pairs for standard and private claims. The following
   * is a subset of the standard required and optional claims that would
   * typically be presented for a Google-based JWT:
   *
   *    {'iss': 'accounts.google.com',
   *     'sub': '113289723416554971153',
   *     'aud': ['123456789012', 'pubsub.googleapis.com'],
   *     'azp': '123456789012.apps.googleusercontent.com',
   *     'email': 'jsmith@example.com',
   *     'iat': 1353601026,
   *     'exp': 1353604926}
   *
   * SAML assertions are similarly specified, but with an identity provider
   * dependent structure.
   */
  claims?:
    | { [key: string]: any }
    | undefined;
  /**
   * A list of access level resource names that allow resources to be
   * accessed by authenticated requester. It is part of Secure GCP processing
   * for the incoming request. An access level string has the format:
   * "//{api_service_name}/accessPolicies/{policy_id}/accessLevels/{short_name}"
   *
   * Example:
   * "//accesscontextmanager.googleapis.com/accessPolicies/MY_POLICY_ID/accessLevels/MY_LEVEL"
   */
  access_levels?: string[] | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/**
 * This message defines attributes for an HTTP request. If the actual
 * request is not an HTTP request, the runtime system should try to map
 * the actual request to an equivalent HTTP request.
 */
export interface AttributeContext_Request {
  /**
   * The unique ID for a request, which can be propagated to downstream
   * systems. The ID should have low probability of collision
   * within a single day for a specific service.
   */
  id?:
    | string
    | undefined;
  /** The HTTP request method, such as `GET`, `POST`. */
  method?:
    | string
    | undefined;
  /**
   * The HTTP request headers. If multiple headers share the same key, they
   * must be merged according to the HTTP spec. All header keys must be
   * lowercased, because HTTP header keys are case-insensitive.
   */
  headers?:
    | Map<string, string>
    | undefined;
  /** The HTTP URL path, excluding the query parameters. */
  path?:
    | string
    | undefined;
  /** The HTTP request `Host` header value. */
  host?:
    | string
    | undefined;
  /** The HTTP URL scheme, such as `http` and `https`. */
  scheme?:
    | string
    | undefined;
  /**
   * The HTTP URL query in the format of `name1=value1&name2=value2`, as it
   * appears in the first line of the HTTP request. No decoding is performed.
   */
  query?:
    | string
    | undefined;
  /**
   * The timestamp when the `destination` service receives the last byte of
   * the request.
   */
  time?:
    | Timestamp
    | undefined;
  /** The HTTP request size in bytes. If unknown, it must be -1. */
  size?:
    | bigint
    | undefined;
  /**
   * The network protocol used with the request, such as "http/1.1",
   * "spdy/3", "h2", "h2c", "webrtc", "tcp", "udp", "quic". See
   * https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids
   * for details.
   */
  protocol?:
    | string
    | undefined;
  /**
   * A special parameter for request reason. It is used by security systems
   * to associate auditing information with a request.
   */
  reason?:
    | string
    | undefined;
  /**
   * The request authentication. May be absent for unauthenticated requests.
   * Derived from the HTTP request `Authorization` header or equivalent.
   */
  auth?: AttributeContext_Auth | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

export interface AttributeContext_Request_HeadersEntry {
  key: string;
  value: string;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/**
 * This message defines attributes for a typical network response. It
 * generally models semantics of an HTTP response.
 */
export interface AttributeContext_Response {
  /** The HTTP response status code, such as `200` and `404`. */
  code?:
    | bigint
    | undefined;
  /** The HTTP response size in bytes. If unknown, it must be -1. */
  size?:
    | bigint
    | undefined;
  /**
   * The HTTP response headers. If multiple headers share the same key, they
   * must be merged according to HTTP spec. All header keys must be
   * lowercased, because HTTP header keys are case-insensitive.
   */
  headers?:
    | Map<string, string>
    | undefined;
  /**
   * The timestamp when the `destination` service sends the last byte of
   * the response.
   */
  time?:
    | Timestamp
    | undefined;
  /**
   * The amount of time it takes the backend service to fully respond to a
   * request. Measured from when the destination service starts to send the
   * request to the backend until when the destination service receives the
   * complete response from the backend.
   */
  backend_latency?: Duration | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

export interface AttributeContext_Response_HeadersEntry {
  key: string;
  value: string;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/**
 * This message defines core attributes for a resource. A resource is an
 * addressable (named) entity provided by the destination service. For
 * example, a file stored on a network storage service.
 */
export interface AttributeContext_Resource {
  /**
   * The name of the service that this resource belongs to, such as
   * `pubsub.googleapis.com`. The service may be different from the DNS
   * hostname that actually serves the request.
   */
  service?:
    | string
    | undefined;
  /**
   * The stable identifier (name) of a resource on the `service`. A resource
   * can be logically identified as "//{resource.service}/{resource.name}".
   * The differences between a resource name and a URI are:
   *
   * *   Resource name is a logical identifier, independent of network
   *     protocol and API version. For example,
   *     `//pubsub.googleapis.com/projects/123/topics/news-feed`.
   * *   URI often includes protocol and version information, so it can
   *     be used directly by applications. For example,
   *     `https://pubsub.googleapis.com/v1/projects/123/topics/news-feed`.
   *
   * See https://cloud.google.com/apis/design/resource_names for details.
   */
  name?:
    | string
    | undefined;
  /**
   * The type of the resource. The syntax is platform-specific because
   * different platforms define their resources differently.
   *
   * For Google APIs, the type format must be "{service}/{kind}", such as
   * "pubsub.googleapis.com/Topic".
   */
  type?:
    | string
    | undefined;
  /**
   * The labels or tags on the resource, such as AWS resource tags and
   * Kubernetes resource labels.
   */
  labels?:
    | Map<string, string>
    | undefined;
  /**
   * The unique identifier of the resource. UID is unique in the time
   * and space for this resource within the scope of the service. It is
   * typically generated by the server on successful creation of a resource
   * and must not be changed. UID is used to uniquely identify resources
   * with resource name reuses. This should be a UUID4.
   */
  uid?:
    | string
    | undefined;
  /**
   * Annotations is an unstructured key-value map stored with a resource that
   * may be set by external tools to store and retrieve arbitrary metadata.
   * They are not queryable and should be preserved when modifying objects.
   *
   * More info: https://kubernetes.io/docs/user-guide/annotations
   */
  annotations?:
    | Map<string, string>
    | undefined;
  /** Mutable. The display name set by clients. Must be <= 63 characters. */
  display_name?:
    | string
    | undefined;
  /**
   * Output only. The timestamp when the resource was created. This may
   * be either the time creation was initiated or when it was completed.
   */
  create_time?:
    | Timestamp
    | undefined;
  /**
   * Output only. The timestamp when the resource was last updated. Any
   * change to the resource made by users must refresh this value.
   * Changes to a resource made by the service should refresh this value.
   */
  update_time?:
    | Timestamp
    | undefined;
  /**
   * Output only. The timestamp when the resource was deleted.
   * If the resource is not deleted, this must be empty.
   */
  delete_time?:
    | Timestamp
    | undefined;
  /**
   * Output only. An opaque value that uniquely identifies a version or
   * generation of a resource. It can be used to confirm that the client
   * and server agree on the ordering of a resource being written.
   */
  etag?:
    | string
    | undefined;
  /**
   * Immutable. The location of the resource. The location encoding is
   * specific to the service provider, and new encoding may be introduced
   * as the service evolves.
   *
   * For Google Cloud products, the encoding is what is used by Google Cloud
   * APIs, such as `us-east1`, `aws-us-east-1`, and `azure-eastus2`. The
   * semantics of `location` is identical to the
   * `cloud.googleapis.com/location` label used by some Google Cloud APIs.
   */
  location?: string | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

export interface AttributeContext_Resource_LabelsEntry {
  key: string;
  value: string;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

export interface AttributeContext_Resource_AnnotationsEntry {
  key: string;
  value: string;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

function createBaseAttributeContext(): AttributeContext {
  return {};
}

export const AttributeContext = {
  encode(message: AttributeContext, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.origin !== undefined) {
      AttributeContext_Peer.encode(message.origin, writer.uint32(58).fork()).ldelim();
    }
    if (message.source !== undefined) {
      AttributeContext_Peer.encode(message.source, writer.uint32(10).fork()).ldelim();
    }
    if (message.destination !== undefined) {
      AttributeContext_Peer.encode(message.destination, writer.uint32(18).fork()).ldelim();
    }
    if (message.request !== undefined) {
      AttributeContext_Request.encode(message.request, writer.uint32(26).fork()).ldelim();
    }
    if (message.response !== undefined) {
      AttributeContext_Response.encode(message.response, writer.uint32(34).fork()).ldelim();
    }
    if (message.resource !== undefined) {
      AttributeContext_Resource.encode(message.resource, writer.uint32(42).fork()).ldelim();
    }
    if (message.api !== undefined) {
      AttributeContext_Api.encode(message.api, writer.uint32(50).fork()).ldelim();
    }
    if (message.extensions !== undefined && message.extensions.length !== 0) {
      for (const v of message.extensions) {
        Any.encode(v!, writer.uint32(66).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): AttributeContext {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeContext();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 7:
          if (tag !== 58) {
            break;
          }

          message.origin = AttributeContext_Peer.decode(reader, reader.uint32());
          continue;
        case 1:
          if (tag !== 10) {
            break;
          }

          message.source = AttributeContext_Peer.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.destination = AttributeContext_Peer.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.request = AttributeContext_Request.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.response = AttributeContext_Response.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.resource = AttributeContext_Resource.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.api = AttributeContext_Api.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
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

  fromJSON(object: any): AttributeContext {
    return {
      origin: isSet(object.origin) ? AttributeContext_Peer.fromJSON(object.origin) : undefined,
      source: isSet(object.source) ? AttributeContext_Peer.fromJSON(object.source) : undefined,
      destination: isSet(object.destination) ? AttributeContext_Peer.fromJSON(object.destination) : undefined,
      request: isSet(object.request) ? AttributeContext_Request.fromJSON(object.request) : undefined,
      response: isSet(object.response) ? AttributeContext_Response.fromJSON(object.response) : undefined,
      resource: isSet(object.resource) ? AttributeContext_Resource.fromJSON(object.resource) : undefined,
      api: isSet(object.api) ? AttributeContext_Api.fromJSON(object.api) : undefined,
      extensions: Array.isArray(object?.extensions) ? object.extensions.map((e: any) => Any.fromJSON(e)) : undefined,
    };
  },

  toJSON(message: AttributeContext): unknown {
    const obj: any = {};
    if (message.origin !== undefined) {
      obj.origin = AttributeContext_Peer.toJSON(message.origin);
    }
    if (message.source !== undefined) {
      obj.source = AttributeContext_Peer.toJSON(message.source);
    }
    if (message.destination !== undefined) {
      obj.destination = AttributeContext_Peer.toJSON(message.destination);
    }
    if (message.request !== undefined) {
      obj.request = AttributeContext_Request.toJSON(message.request);
    }
    if (message.response !== undefined) {
      obj.response = AttributeContext_Response.toJSON(message.response);
    }
    if (message.resource !== undefined) {
      obj.resource = AttributeContext_Resource.toJSON(message.resource);
    }
    if (message.api !== undefined) {
      obj.api = AttributeContext_Api.toJSON(message.api);
    }
    if (message.extensions?.length) {
      obj.extensions = message.extensions.map((e) => Any.toJSON(e));
    }
    return obj;
  },
};

function createBaseAttributeContext_Peer(): AttributeContext_Peer {
  return {};
}

export const AttributeContext_Peer = {
  encode(message: AttributeContext_Peer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ip !== undefined && message.ip !== "") {
      writer.uint32(10).string(message.ip);
    }
    if (message.port !== undefined && message.port !== BigInt("0")) {
      writer.uint32(16).int64(message.port.toString());
    }
    (message.labels || new Map()).forEach((value, key) => {
      AttributeContext_Peer_LabelsEntry.encode({ key: key as any, value }, writer.uint32(50).fork()).ldelim();
    });
    if (message.principal !== undefined && message.principal !== "") {
      writer.uint32(58).string(message.principal);
    }
    if (message.region_code !== undefined && message.region_code !== "") {
      writer.uint32(66).string(message.region_code);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): AttributeContext_Peer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeContext_Peer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ip = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.port = longToBigint(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          const entry6 = AttributeContext_Peer_LabelsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            if (message.labels === undefined) {
              message.labels = new Map();
            }
            message.labels!.set(entry6.key, entry6.value);
          }
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.principal = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.region_code = reader.string();
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

  fromJSON(object: any): AttributeContext_Peer {
    return {
      ip: isSet(object.ip) ? String(object.ip) : undefined,
      port: isSet(object.port) ? BigInt(object.port) : undefined,
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<Map<string, string>>((acc, [key, value]) => {
          acc.set(key, String(value));
          return acc;
        }, new Map())
        : undefined,
      principal: isSet(object.principal) ? String(object.principal) : undefined,
      region_code: isSet(object.region_code) ? String(object.region_code) : undefined,
    };
  },

  toJSON(message: AttributeContext_Peer): unknown {
    const obj: any = {};
    if (message.ip !== undefined && message.ip !== "") {
      obj.ip = message.ip;
    }
    if (message.port !== undefined && message.port !== BigInt("0")) {
      obj.port = message.port.toString();
    }
    if (message.labels?.size) {
      obj.labels = {};
      message.labels.forEach((v, k) => {
        obj.labels[k] = v;
      });
    }
    if (message.principal !== undefined && message.principal !== "") {
      obj.principal = message.principal;
    }
    if (message.region_code !== undefined && message.region_code !== "") {
      obj.region_code = message.region_code;
    }
    return obj;
  },
};

function createBaseAttributeContext_Peer_LabelsEntry(): AttributeContext_Peer_LabelsEntry {
  return { key: "", value: "" };
}

export const AttributeContext_Peer_LabelsEntry = {
  encode(message: AttributeContext_Peer_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): AttributeContext_Peer_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeContext_Peer_LabelsEntry();
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

  fromJSON(object: any): AttributeContext_Peer_LabelsEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: AttributeContext_Peer_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },
};

function createBaseAttributeContext_Api(): AttributeContext_Api {
  return {};
}

export const AttributeContext_Api = {
  encode(message: AttributeContext_Api, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.service !== undefined && message.service !== "") {
      writer.uint32(10).string(message.service);
    }
    if (message.operation !== undefined && message.operation !== "") {
      writer.uint32(18).string(message.operation);
    }
    if (message.protocol !== undefined && message.protocol !== "") {
      writer.uint32(26).string(message.protocol);
    }
    if (message.version !== undefined && message.version !== "") {
      writer.uint32(34).string(message.version);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): AttributeContext_Api {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeContext_Api();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.service = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.operation = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.protocol = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.version = reader.string();
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

  fromJSON(object: any): AttributeContext_Api {
    return {
      service: isSet(object.service) ? String(object.service) : undefined,
      operation: isSet(object.operation) ? String(object.operation) : undefined,
      protocol: isSet(object.protocol) ? String(object.protocol) : undefined,
      version: isSet(object.version) ? String(object.version) : undefined,
    };
  },

  toJSON(message: AttributeContext_Api): unknown {
    const obj: any = {};
    if (message.service !== undefined && message.service !== "") {
      obj.service = message.service;
    }
    if (message.operation !== undefined && message.operation !== "") {
      obj.operation = message.operation;
    }
    if (message.protocol !== undefined && message.protocol !== "") {
      obj.protocol = message.protocol;
    }
    if (message.version !== undefined && message.version !== "") {
      obj.version = message.version;
    }
    return obj;
  },
};

function createBaseAttributeContext_Auth(): AttributeContext_Auth {
  return {};
}

export const AttributeContext_Auth = {
  encode(message: AttributeContext_Auth, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.principal !== undefined && message.principal !== "") {
      writer.uint32(10).string(message.principal);
    }
    if (message.audiences !== undefined && message.audiences.length !== 0) {
      for (const v of message.audiences) {
        writer.uint32(18).string(v!);
      }
    }
    if (message.presenter !== undefined && message.presenter !== "") {
      writer.uint32(26).string(message.presenter);
    }
    if (message.claims !== undefined) {
      Struct.encode(Struct.wrap(message.claims), writer.uint32(34).fork()).ldelim();
    }
    if (message.access_levels !== undefined && message.access_levels.length !== 0) {
      for (const v of message.access_levels) {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): AttributeContext_Auth {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeContext_Auth();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.principal = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          if (message.audiences === undefined) {
            message.audiences = [];
          }
          message.audiences!.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.presenter = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.claims = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          if (message.access_levels === undefined) {
            message.access_levels = [];
          }
          message.access_levels!.push(reader.string());
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

  fromJSON(object: any): AttributeContext_Auth {
    return {
      principal: isSet(object.principal) ? String(object.principal) : undefined,
      audiences: Array.isArray(object?.audiences) ? object.audiences.map((e: any) => String(e)) : undefined,
      presenter: isSet(object.presenter) ? String(object.presenter) : undefined,
      claims: isObject(object.claims) ? object.claims : undefined,
      access_levels: Array.isArray(object?.access_levels) ? object.access_levels.map((e: any) => String(e)) : undefined,
    };
  },

  toJSON(message: AttributeContext_Auth): unknown {
    const obj: any = {};
    if (message.principal !== undefined && message.principal !== "") {
      obj.principal = message.principal;
    }
    if (message.audiences?.length) {
      obj.audiences = message.audiences;
    }
    if (message.presenter !== undefined && message.presenter !== "") {
      obj.presenter = message.presenter;
    }
    if (message.claims !== undefined) {
      obj.claims = message.claims;
    }
    if (message.access_levels?.length) {
      obj.access_levels = message.access_levels;
    }
    return obj;
  },
};

function createBaseAttributeContext_Request(): AttributeContext_Request {
  return {};
}

export const AttributeContext_Request = {
  encode(message: AttributeContext_Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined && message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.method !== undefined && message.method !== "") {
      writer.uint32(18).string(message.method);
    }
    (message.headers || new Map()).forEach((value, key) => {
      AttributeContext_Request_HeadersEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).ldelim();
    });
    if (message.path !== undefined && message.path !== "") {
      writer.uint32(34).string(message.path);
    }
    if (message.host !== undefined && message.host !== "") {
      writer.uint32(42).string(message.host);
    }
    if (message.scheme !== undefined && message.scheme !== "") {
      writer.uint32(50).string(message.scheme);
    }
    if (message.query !== undefined && message.query !== "") {
      writer.uint32(58).string(message.query);
    }
    if (message.time !== undefined) {
      Timestamp.encode(message.time, writer.uint32(74).fork()).ldelim();
    }
    if (message.size !== undefined && message.size !== BigInt("0")) {
      writer.uint32(80).int64(message.size.toString());
    }
    if (message.protocol !== undefined && message.protocol !== "") {
      writer.uint32(90).string(message.protocol);
    }
    if (message.reason !== undefined && message.reason !== "") {
      writer.uint32(98).string(message.reason);
    }
    if (message.auth !== undefined) {
      AttributeContext_Auth.encode(message.auth, writer.uint32(106).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): AttributeContext_Request {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeContext_Request();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.method = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          const entry3 = AttributeContext_Request_HeadersEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            if (message.headers === undefined) {
              message.headers = new Map();
            }
            message.headers!.set(entry3.key, entry3.value);
          }
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.path = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.host = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.scheme = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.query = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.time = Timestamp.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.size = longToBigint(reader.int64() as Long);
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.protocol = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.reason = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.auth = AttributeContext_Auth.decode(reader, reader.uint32());
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

  fromJSON(object: any): AttributeContext_Request {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      method: isSet(object.method) ? String(object.method) : undefined,
      headers: isObject(object.headers)
        ? Object.entries(object.headers).reduce<Map<string, string>>((acc, [key, value]) => {
          acc.set(key, String(value));
          return acc;
        }, new Map())
        : undefined,
      path: isSet(object.path) ? String(object.path) : undefined,
      host: isSet(object.host) ? String(object.host) : undefined,
      scheme: isSet(object.scheme) ? String(object.scheme) : undefined,
      query: isSet(object.query) ? String(object.query) : undefined,
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      size: isSet(object.size) ? BigInt(object.size) : undefined,
      protocol: isSet(object.protocol) ? String(object.protocol) : undefined,
      reason: isSet(object.reason) ? String(object.reason) : undefined,
      auth: isSet(object.auth) ? AttributeContext_Auth.fromJSON(object.auth) : undefined,
    };
  },

  toJSON(message: AttributeContext_Request): unknown {
    const obj: any = {};
    if (message.id !== undefined && message.id !== "") {
      obj.id = message.id;
    }
    if (message.method !== undefined && message.method !== "") {
      obj.method = message.method;
    }
    if (message.headers?.size) {
      obj.headers = {};
      message.headers.forEach((v, k) => {
        obj.headers[k] = v;
      });
    }
    if (message.path !== undefined && message.path !== "") {
      obj.path = message.path;
    }
    if (message.host !== undefined && message.host !== "") {
      obj.host = message.host;
    }
    if (message.scheme !== undefined && message.scheme !== "") {
      obj.scheme = message.scheme;
    }
    if (message.query !== undefined && message.query !== "") {
      obj.query = message.query;
    }
    if (message.time !== undefined) {
      obj.time = fromTimestamp(message.time).toISOString();
    }
    if (message.size !== undefined && message.size !== BigInt("0")) {
      obj.size = message.size.toString();
    }
    if (message.protocol !== undefined && message.protocol !== "") {
      obj.protocol = message.protocol;
    }
    if (message.reason !== undefined && message.reason !== "") {
      obj.reason = message.reason;
    }
    if (message.auth !== undefined) {
      obj.auth = AttributeContext_Auth.toJSON(message.auth);
    }
    return obj;
  },
};

function createBaseAttributeContext_Request_HeadersEntry(): AttributeContext_Request_HeadersEntry {
  return { key: "", value: "" };
}

export const AttributeContext_Request_HeadersEntry = {
  encode(message: AttributeContext_Request_HeadersEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): AttributeContext_Request_HeadersEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeContext_Request_HeadersEntry();
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

  fromJSON(object: any): AttributeContext_Request_HeadersEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: AttributeContext_Request_HeadersEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },
};

function createBaseAttributeContext_Response(): AttributeContext_Response {
  return {};
}

export const AttributeContext_Response = {
  encode(message: AttributeContext_Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== undefined && message.code !== BigInt("0")) {
      writer.uint32(8).int64(message.code.toString());
    }
    if (message.size !== undefined && message.size !== BigInt("0")) {
      writer.uint32(16).int64(message.size.toString());
    }
    (message.headers || new Map()).forEach((value, key) => {
      AttributeContext_Response_HeadersEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).ldelim();
    });
    if (message.time !== undefined) {
      Timestamp.encode(message.time, writer.uint32(34).fork()).ldelim();
    }
    if (message.backend_latency !== undefined) {
      Duration.encode(message.backend_latency, writer.uint32(42).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): AttributeContext_Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeContext_Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.code = longToBigint(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.size = longToBigint(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          const entry3 = AttributeContext_Response_HeadersEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            if (message.headers === undefined) {
              message.headers = new Map();
            }
            message.headers!.set(entry3.key, entry3.value);
          }
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.time = Timestamp.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.backend_latency = Duration.decode(reader, reader.uint32());
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

  fromJSON(object: any): AttributeContext_Response {
    return {
      code: isSet(object.code) ? BigInt(object.code) : undefined,
      size: isSet(object.size) ? BigInt(object.size) : undefined,
      headers: isObject(object.headers)
        ? Object.entries(object.headers).reduce<Map<string, string>>((acc, [key, value]) => {
          acc.set(key, String(value));
          return acc;
        }, new Map())
        : undefined,
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      backend_latency: isSet(object.backend_latency) ? Duration.fromJSON(object.backend_latency) : undefined,
    };
  },

  toJSON(message: AttributeContext_Response): unknown {
    const obj: any = {};
    if (message.code !== undefined && message.code !== BigInt("0")) {
      obj.code = message.code.toString();
    }
    if (message.size !== undefined && message.size !== BigInt("0")) {
      obj.size = message.size.toString();
    }
    if (message.headers?.size) {
      obj.headers = {};
      message.headers.forEach((v, k) => {
        obj.headers[k] = v;
      });
    }
    if (message.time !== undefined) {
      obj.time = fromTimestamp(message.time).toISOString();
    }
    if (message.backend_latency !== undefined) {
      obj.backend_latency = Duration.toJSON(message.backend_latency);
    }
    return obj;
  },
};

function createBaseAttributeContext_Response_HeadersEntry(): AttributeContext_Response_HeadersEntry {
  return { key: "", value: "" };
}

export const AttributeContext_Response_HeadersEntry = {
  encode(message: AttributeContext_Response_HeadersEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): AttributeContext_Response_HeadersEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeContext_Response_HeadersEntry();
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

  fromJSON(object: any): AttributeContext_Response_HeadersEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: AttributeContext_Response_HeadersEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },
};

function createBaseAttributeContext_Resource(): AttributeContext_Resource {
  return {};
}

export const AttributeContext_Resource = {
  encode(message: AttributeContext_Resource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.service !== undefined && message.service !== "") {
      writer.uint32(10).string(message.service);
    }
    if (message.name !== undefined && message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.type !== undefined && message.type !== "") {
      writer.uint32(26).string(message.type);
    }
    (message.labels || new Map()).forEach((value, key) => {
      AttributeContext_Resource_LabelsEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).ldelim();
    });
    if (message.uid !== undefined && message.uid !== "") {
      writer.uint32(42).string(message.uid);
    }
    (message.annotations || new Map()).forEach((value, key) => {
      AttributeContext_Resource_AnnotationsEntry.encode({ key: key as any, value }, writer.uint32(50).fork()).ldelim();
    });
    if (message.display_name !== undefined && message.display_name !== "") {
      writer.uint32(58).string(message.display_name);
    }
    if (message.create_time !== undefined) {
      Timestamp.encode(message.create_time, writer.uint32(66).fork()).ldelim();
    }
    if (message.update_time !== undefined) {
      Timestamp.encode(message.update_time, writer.uint32(74).fork()).ldelim();
    }
    if (message.delete_time !== undefined) {
      Timestamp.encode(message.delete_time, writer.uint32(82).fork()).ldelim();
    }
    if (message.etag !== undefined && message.etag !== "") {
      writer.uint32(90).string(message.etag);
    }
    if (message.location !== undefined && message.location !== "") {
      writer.uint32(98).string(message.location);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): AttributeContext_Resource {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeContext_Resource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.service = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.type = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          const entry4 = AttributeContext_Resource_LabelsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            if (message.labels === undefined) {
              message.labels = new Map();
            }
            message.labels!.set(entry4.key, entry4.value);
          }
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.uid = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          const entry6 = AttributeContext_Resource_AnnotationsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            if (message.annotations === undefined) {
              message.annotations = new Map();
            }
            message.annotations!.set(entry6.key, entry6.value);
          }
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.display_name = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.create_time = Timestamp.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.update_time = Timestamp.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.delete_time = Timestamp.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.etag = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.location = reader.string();
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

  fromJSON(object: any): AttributeContext_Resource {
    return {
      service: isSet(object.service) ? String(object.service) : undefined,
      name: isSet(object.name) ? String(object.name) : undefined,
      type: isSet(object.type) ? String(object.type) : undefined,
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<Map<string, string>>((acc, [key, value]) => {
          acc.set(key, String(value));
          return acc;
        }, new Map())
        : undefined,
      uid: isSet(object.uid) ? String(object.uid) : undefined,
      annotations: isObject(object.annotations)
        ? Object.entries(object.annotations).reduce<Map<string, string>>((acc, [key, value]) => {
          acc.set(key, String(value));
          return acc;
        }, new Map())
        : undefined,
      display_name: isSet(object.display_name) ? String(object.display_name) : undefined,
      create_time: isSet(object.create_time) ? fromJsonTimestamp(object.create_time) : undefined,
      update_time: isSet(object.update_time) ? fromJsonTimestamp(object.update_time) : undefined,
      delete_time: isSet(object.delete_time) ? fromJsonTimestamp(object.delete_time) : undefined,
      etag: isSet(object.etag) ? String(object.etag) : undefined,
      location: isSet(object.location) ? String(object.location) : undefined,
    };
  },

  toJSON(message: AttributeContext_Resource): unknown {
    const obj: any = {};
    if (message.service !== undefined && message.service !== "") {
      obj.service = message.service;
    }
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.type !== undefined && message.type !== "") {
      obj.type = message.type;
    }
    if (message.labels?.size) {
      obj.labels = {};
      message.labels.forEach((v, k) => {
        obj.labels[k] = v;
      });
    }
    if (message.uid !== undefined && message.uid !== "") {
      obj.uid = message.uid;
    }
    if (message.annotations?.size) {
      obj.annotations = {};
      message.annotations.forEach((v, k) => {
        obj.annotations[k] = v;
      });
    }
    if (message.display_name !== undefined && message.display_name !== "") {
      obj.display_name = message.display_name;
    }
    if (message.create_time !== undefined) {
      obj.create_time = fromTimestamp(message.create_time).toISOString();
    }
    if (message.update_time !== undefined) {
      obj.update_time = fromTimestamp(message.update_time).toISOString();
    }
    if (message.delete_time !== undefined) {
      obj.delete_time = fromTimestamp(message.delete_time).toISOString();
    }
    if (message.etag !== undefined && message.etag !== "") {
      obj.etag = message.etag;
    }
    if (message.location !== undefined && message.location !== "") {
      obj.location = message.location;
    }
    return obj;
  },
};

function createBaseAttributeContext_Resource_LabelsEntry(): AttributeContext_Resource_LabelsEntry {
  return { key: "", value: "" };
}

export const AttributeContext_Resource_LabelsEntry = {
  encode(message: AttributeContext_Resource_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): AttributeContext_Resource_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeContext_Resource_LabelsEntry();
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

  fromJSON(object: any): AttributeContext_Resource_LabelsEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: AttributeContext_Resource_LabelsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },
};

function createBaseAttributeContext_Resource_AnnotationsEntry(): AttributeContext_Resource_AnnotationsEntry {
  return { key: "", value: "" };
}

export const AttributeContext_Resource_AnnotationsEntry = {
  encode(message: AttributeContext_Resource_AnnotationsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): AttributeContext_Resource_AnnotationsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeContext_Resource_AnnotationsEntry();
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

  fromJSON(object: any): AttributeContext_Resource_AnnotationsEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: AttributeContext_Resource_AnnotationsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },
};

function toTimestamp(date: Date): Timestamp {
  const seconds = BigInt(Math.trunc(date.getTime() / 1_000));
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (Number(t.seconds.toString()) || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Timestamp {
  if (o instanceof Date) {
    return toTimestamp(o);
  } else if (typeof o === "string") {
    return toTimestamp(new Date(o));
  } else {
    return Timestamp.fromJSON(o);
  }
}

function longToBigint(long: Long) {
  return BigInt(long.toString());
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
