import _m0 from "protobufjs/minimal";
/** `Backend` defines the backend configuration for a service. */
export interface Backend {
    /**
     * A list of API backend rules that apply to individual API methods.
     *
     * **NOTE:** All service configuration rules follow "last one wins" order.
     */
    rules?: BackendRule[] | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
/** A backend rule provides configuration for an individual API element. */
export interface BackendRule {
    /**
     * Selects the methods to which this rule applies.
     *
     * Refer to [selector][google.api.DocumentationRule.selector] for syntax details.
     */
    selector?: string | undefined;
    /**
     * The address of the API backend.
     *
     * The scheme is used to determine the backend protocol and security.
     * The following schemes are accepted:
     *
     *    SCHEME        PROTOCOL    SECURITY
     *    http://       HTTP        None
     *    https://      HTTP        TLS
     *    grpc://       gRPC        None
     *    grpcs://      gRPC        TLS
     *
     * It is recommended to explicitly include a scheme. Leaving out the scheme
     * may cause constrasting behaviors across platforms.
     *
     * If the port is unspecified, the default is:
     * - 80 for schemes without TLS
     * - 443 for schemes with TLS
     *
     * For HTTP backends, use [protocol][google.api.BackendRule.protocol]
     * to specify the protocol version.
     */
    address?: string | undefined;
    /**
     * The number of seconds to wait for a response from a request. The default
     * varies based on the request protocol and deployment environment.
     */
    deadline?: number | undefined;
    /**
     * Deprecated, do not use.
     *
     * @deprecated
     */
    min_deadline?: number | undefined;
    /**
     * The number of seconds to wait for the completion of a long running
     * operation. The default is no deadline.
     */
    operation_deadline?: number | undefined;
    path_translation?: BackendRule_PathTranslation | undefined;
    /**
     * The JWT audience is used when generating a JWT ID token for the backend.
     * This ID token will be added in the HTTP "authorization" header, and sent
     * to the backend.
     */
    jwt_audience?: string | undefined;
    /**
     * When disable_auth is true, a JWT ID token won't be generated and the
     * original "Authorization" HTTP header will be preserved. If the header is
     * used to carry the original token and is expected by the backend, this
     * field must be set to true to preserve the header.
     */
    disable_auth?: boolean | undefined;
    /**
     * The protocol used for sending a request to the backend.
     * The supported values are "http/1.1" and "h2".
     *
     * The default value is inferred from the scheme in the
     * [address][google.api.BackendRule.address] field:
     *
     *    SCHEME        PROTOCOL
     *    http://       http/1.1
     *    https://      http/1.1
     *    grpc://       h2
     *    grpcs://      h2
     *
     * For secure HTTP backends (https://) that support HTTP/2, set this field
     * to "h2" for improved performance.
     *
     * Configuring this field to non-default values is only supported for secure
     * HTTP backends. This field will be ignored for all other backends.
     *
     * See
     * https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids
     * for more details on the supported values.
     */
    protocol?: string | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
/**
 * Path Translation specifies how to combine the backend address with the
 * request path in order to produce the appropriate forwarding URL for the
 * request.
 *
 * Path Translation is applicable only to HTTP-based backends. Backends which
 * do not accept requests over HTTP/HTTPS should leave `path_translation`
 * unspecified.
 */
export declare enum BackendRule_PathTranslation {
    PATH_TRANSLATION_UNSPECIFIED = "PATH_TRANSLATION_UNSPECIFIED",
    /**
     * CONSTANT_ADDRESS - Use the backend address as-is, with no modification to the path. If the
     * URL pattern contains variables, the variable names and values will be
     * appended to the query string. If a query string parameter and a URL
     * pattern variable have the same name, this may result in duplicate keys in
     * the query string.
     *
     * # Examples
     *
     * Given the following operation config:
     *
     *     Method path:        /api/company/{cid}/user/{uid}
     *     Backend address:    https://example.cloudfunctions.net/getUser
     *
     * Requests to the following request paths will call the backend at the
     * translated path:
     *
     *     Request path: /api/company/widgetworks/user/johndoe
     *     Translated:
     *     https://example.cloudfunctions.net/getUser?cid=widgetworks&uid=johndoe
     *
     *     Request path: /api/company/widgetworks/user/johndoe?timezone=EST
     *     Translated:
     *     https://example.cloudfunctions.net/getUser?timezone=EST&cid=widgetworks&uid=johndoe
     */
    CONSTANT_ADDRESS = "CONSTANT_ADDRESS",
    /**
     * APPEND_PATH_TO_ADDRESS - The request path will be appended to the backend address.
     *
     * # Examples
     *
     * Given the following operation config:
     *
     *     Method path:        /api/company/{cid}/user/{uid}
     *     Backend address:    https://example.appspot.com
     *
     * Requests to the following request paths will call the backend at the
     * translated path:
     *
     *     Request path: /api/company/widgetworks/user/johndoe
     *     Translated:
     *     https://example.appspot.com/api/company/widgetworks/user/johndoe
     *
     *     Request path: /api/company/widgetworks/user/johndoe?timezone=EST
     *     Translated:
     *     https://example.appspot.com/api/company/widgetworks/user/johndoe?timezone=EST
     */
    APPEND_PATH_TO_ADDRESS = "APPEND_PATH_TO_ADDRESS",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function backendRule_PathTranslationFromJSON(object: any): BackendRule_PathTranslation;
export declare function backendRule_PathTranslationToJSON(object: BackendRule_PathTranslation): string;
export declare function backendRule_PathTranslationToNumber(object: BackendRule_PathTranslation): number;
export declare const Backend: {
    encode(message: Backend, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Backend;
    fromJSON(object: any): Backend;
    toJSON(message: Backend): unknown;
};
export declare const BackendRule: {
    encode(message: BackendRule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BackendRule;
    fromJSON(object: any): BackendRule;
    toJSON(message: BackendRule): unknown;
};
