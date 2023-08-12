import _m0 from "protobufjs/minimal";
import { Any } from "../../protobuf/any";
import { Duration } from "../../protobuf/duration";
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
    origin?: AttributeContext_Peer | undefined;
    /**
     * The source of a network activity, such as starting a TCP connection.
     * In a multi hop network activity, the source represents the sender of the
     * last hop.
     */
    source?: AttributeContext_Peer | undefined;
    /**
     * The destination of a network activity, such as accepting a TCP connection.
     * In a multi hop network activity, the destination represents the receiver of
     * the last hop.
     */
    destination?: AttributeContext_Peer | undefined;
    /** Represents a network request, such as an HTTP request. */
    request?: AttributeContext_Request | undefined;
    /** Represents a network response, such as an HTTP response. */
    response?: AttributeContext_Response | undefined;
    /**
     * Represents a target resource that is involved with a network activity.
     * If multiple resources are involved with an activity, this must be the
     * primary one.
     */
    resource?: AttributeContext_Resource | undefined;
    /** Represents an API operation that is involved to a network activity. */
    api?: AttributeContext_Api | undefined;
    /** Supports extensions for advanced use cases, such as logs and metrics. */
    extensions?: Any[] | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
/**
 * This message defines attributes for a node that handles a network request.
 * The node can be either a service or an application that sends, forwards,
 * or receives the request. Service peers should fill in
 * `principal` and `labels` as appropriate.
 */
export interface AttributeContext_Peer {
    /** The IP address of the peer. */
    ip?: string | undefined;
    /** The network port of the peer. */
    port?: bigint | undefined;
    /** The labels associated with the peer. */
    labels?: Map<string, string> | undefined;
    /**
     * The identity of this peer. Similar to `Request.auth.principal`, but
     * relative to the peer instead of the request. For example, the
     * identity associated with a load balancer that forwarded the request.
     */
    principal?: string | undefined;
    /**
     * The CLDR country/region code associated with the above IP address.
     * If the IP address is private, the `region_code` should reflect the
     * physical location where this peer is running.
     */
    region_code?: string | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
export interface AttributeContext_Peer_LabelsEntry {
    key: string;
    value: string;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
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
    service?: string | undefined;
    /**
     * The API operation name. For gRPC requests, it is the fully qualified API
     * method name, such as "google.pubsub.v1.Publisher.Publish". For OpenAPI
     * requests, it is the `operationId`, such as "getPet".
     */
    operation?: string | undefined;
    /**
     * The API protocol used for sending the request, such as "http", "https",
     * "grpc", or "internal".
     */
    protocol?: string | undefined;
    /**
     * The API version associated with the API operation above, such as "v1" or
     * "v1alpha1".
     */
    version?: string | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
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
    principal?: string | undefined;
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
    audiences?: string[] | undefined;
    /**
     * The authorized presenter of the credential. Reflects the optional
     * Authorized Presenter (`azp`) claim within a JWT or the
     * OAuth client id. For example, a Google Cloud Platform client id looks
     * as follows: "123456789012.apps.googleusercontent.com".
     */
    presenter?: string | undefined;
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
    claims?: {
        [key: string]: any;
    } | undefined;
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
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
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
    id?: string | undefined;
    /** The HTTP request method, such as `GET`, `POST`. */
    method?: string | undefined;
    /**
     * The HTTP request headers. If multiple headers share the same key, they
     * must be merged according to the HTTP spec. All header keys must be
     * lowercased, because HTTP header keys are case-insensitive.
     */
    headers?: Map<string, string> | undefined;
    /** The HTTP URL path, excluding the query parameters. */
    path?: string | undefined;
    /** The HTTP request `Host` header value. */
    host?: string | undefined;
    /** The HTTP URL scheme, such as `http` and `https`. */
    scheme?: string | undefined;
    /**
     * The HTTP URL query in the format of `name1=value1&name2=value2`, as it
     * appears in the first line of the HTTP request. No decoding is performed.
     */
    query?: string | undefined;
    /**
     * The timestamp when the `destination` service receives the last byte of
     * the request.
     */
    time?: Timestamp | undefined;
    /** The HTTP request size in bytes. If unknown, it must be -1. */
    size?: bigint | undefined;
    /**
     * The network protocol used with the request, such as "http/1.1",
     * "spdy/3", "h2", "h2c", "webrtc", "tcp", "udp", "quic". See
     * https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids
     * for details.
     */
    protocol?: string | undefined;
    /**
     * A special parameter for request reason. It is used by security systems
     * to associate auditing information with a request.
     */
    reason?: string | undefined;
    /**
     * The request authentication. May be absent for unauthenticated requests.
     * Derived from the HTTP request `Authorization` header or equivalent.
     */
    auth?: AttributeContext_Auth | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
export interface AttributeContext_Request_HeadersEntry {
    key: string;
    value: string;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
/**
 * This message defines attributes for a typical network response. It
 * generally models semantics of an HTTP response.
 */
export interface AttributeContext_Response {
    /** The HTTP response status code, such as `200` and `404`. */
    code?: bigint | undefined;
    /** The HTTP response size in bytes. If unknown, it must be -1. */
    size?: bigint | undefined;
    /**
     * The HTTP response headers. If multiple headers share the same key, they
     * must be merged according to HTTP spec. All header keys must be
     * lowercased, because HTTP header keys are case-insensitive.
     */
    headers?: Map<string, string> | undefined;
    /**
     * The timestamp when the `destination` service sends the last byte of
     * the response.
     */
    time?: Timestamp | undefined;
    /**
     * The amount of time it takes the backend service to fully respond to a
     * request. Measured from when the destination service starts to send the
     * request to the backend until when the destination service receives the
     * complete response from the backend.
     */
    backend_latency?: Duration | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
export interface AttributeContext_Response_HeadersEntry {
    key: string;
    value: string;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
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
    service?: string | undefined;
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
    name?: string | undefined;
    /**
     * The type of the resource. The syntax is platform-specific because
     * different platforms define their resources differently.
     *
     * For Google APIs, the type format must be "{service}/{kind}", such as
     * "pubsub.googleapis.com/Topic".
     */
    type?: string | undefined;
    /**
     * The labels or tags on the resource, such as AWS resource tags and
     * Kubernetes resource labels.
     */
    labels?: Map<string, string> | undefined;
    /**
     * The unique identifier of the resource. UID is unique in the time
     * and space for this resource within the scope of the service. It is
     * typically generated by the server on successful creation of a resource
     * and must not be changed. UID is used to uniquely identify resources
     * with resource name reuses. This should be a UUID4.
     */
    uid?: string | undefined;
    /**
     * Annotations is an unstructured key-value map stored with a resource that
     * may be set by external tools to store and retrieve arbitrary metadata.
     * They are not queryable and should be preserved when modifying objects.
     *
     * More info: https://kubernetes.io/docs/user-guide/annotations
     */
    annotations?: Map<string, string> | undefined;
    /** Mutable. The display name set by clients. Must be <= 63 characters. */
    display_name?: string | undefined;
    /**
     * Output only. The timestamp when the resource was created. This may
     * be either the time creation was initiated or when it was completed.
     */
    create_time?: Timestamp | undefined;
    /**
     * Output only. The timestamp when the resource was last updated. Any
     * change to the resource made by users must refresh this value.
     * Changes to a resource made by the service should refresh this value.
     */
    update_time?: Timestamp | undefined;
    /**
     * Output only. The timestamp when the resource was deleted.
     * If the resource is not deleted, this must be empty.
     */
    delete_time?: Timestamp | undefined;
    /**
     * Output only. An opaque value that uniquely identifies a version or
     * generation of a resource. It can be used to confirm that the client
     * and server agree on the ordering of a resource being written.
     */
    etag?: string | undefined;
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
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
export interface AttributeContext_Resource_LabelsEntry {
    key: string;
    value: string;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
export interface AttributeContext_Resource_AnnotationsEntry {
    key: string;
    value: string;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
export declare const AttributeContext: {
    encode(message: AttributeContext, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AttributeContext;
    fromJSON(object: any): AttributeContext;
    toJSON(message: AttributeContext): unknown;
};
export declare const AttributeContext_Peer: {
    encode(message: AttributeContext_Peer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AttributeContext_Peer;
    fromJSON(object: any): AttributeContext_Peer;
    toJSON(message: AttributeContext_Peer): unknown;
};
export declare const AttributeContext_Peer_LabelsEntry: {
    encode(message: AttributeContext_Peer_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AttributeContext_Peer_LabelsEntry;
    fromJSON(object: any): AttributeContext_Peer_LabelsEntry;
    toJSON(message: AttributeContext_Peer_LabelsEntry): unknown;
};
export declare const AttributeContext_Api: {
    encode(message: AttributeContext_Api, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AttributeContext_Api;
    fromJSON(object: any): AttributeContext_Api;
    toJSON(message: AttributeContext_Api): unknown;
};
export declare const AttributeContext_Auth: {
    encode(message: AttributeContext_Auth, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AttributeContext_Auth;
    fromJSON(object: any): AttributeContext_Auth;
    toJSON(message: AttributeContext_Auth): unknown;
};
export declare const AttributeContext_Request: {
    encode(message: AttributeContext_Request, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AttributeContext_Request;
    fromJSON(object: any): AttributeContext_Request;
    toJSON(message: AttributeContext_Request): unknown;
};
export declare const AttributeContext_Request_HeadersEntry: {
    encode(message: AttributeContext_Request_HeadersEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AttributeContext_Request_HeadersEntry;
    fromJSON(object: any): AttributeContext_Request_HeadersEntry;
    toJSON(message: AttributeContext_Request_HeadersEntry): unknown;
};
export declare const AttributeContext_Response: {
    encode(message: AttributeContext_Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AttributeContext_Response;
    fromJSON(object: any): AttributeContext_Response;
    toJSON(message: AttributeContext_Response): unknown;
};
export declare const AttributeContext_Response_HeadersEntry: {
    encode(message: AttributeContext_Response_HeadersEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AttributeContext_Response_HeadersEntry;
    fromJSON(object: any): AttributeContext_Response_HeadersEntry;
    toJSON(message: AttributeContext_Response_HeadersEntry): unknown;
};
export declare const AttributeContext_Resource: {
    encode(message: AttributeContext_Resource, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AttributeContext_Resource;
    fromJSON(object: any): AttributeContext_Resource;
    toJSON(message: AttributeContext_Resource): unknown;
};
export declare const AttributeContext_Resource_LabelsEntry: {
    encode(message: AttributeContext_Resource_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AttributeContext_Resource_LabelsEntry;
    fromJSON(object: any): AttributeContext_Resource_LabelsEntry;
    toJSON(message: AttributeContext_Resource_LabelsEntry): unknown;
};
export declare const AttributeContext_Resource_AnnotationsEntry: {
    encode(message: AttributeContext_Resource_AnnotationsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AttributeContext_Resource_AnnotationsEntry;
    fromJSON(object: any): AttributeContext_Resource_AnnotationsEntry;
    toJSON(message: AttributeContext_Resource_AnnotationsEntry): unknown;
};
