import _m0 from "protobufjs/minimal";
/**
 * `Authentication` defines the authentication configuration for API methods
 * provided by an API service.
 *
 * Example:
 *
 *     name: calendar.googleapis.com
 *     authentication:
 *       providers:
 *       - id: google_calendar_auth
 *         jwks_uri: https://www.googleapis.com/oauth2/v1/certs
 *         issuer: https://securetoken.google.com
 *       rules:
 *       - selector: "*"
 *         requirements:
 *           provider_id: google_calendar_auth
 *       - selector: google.calendar.Delegate
 *         oauth:
 *           canonical_scopes: https://www.googleapis.com/auth/calendar.read
 */
export interface Authentication {
    /**
     * A list of authentication rules that apply to individual API methods.
     *
     * **NOTE:** All service configuration rules follow "last one wins" order.
     */
    rules?: AuthenticationRule[] | undefined;
    /** Defines a set of authentication providers that a service supports. */
    providers?: AuthProvider[] | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
/**
 * Authentication rules for the service.
 *
 * By default, if a method has any authentication requirements, every request
 * must include a valid credential matching one of the requirements.
 * It's an error to include more than one kind of credential in a single
 * request.
 *
 * If a method doesn't have any auth requirements, request credentials will be
 * ignored.
 */
export interface AuthenticationRule {
    /**
     * Selects the methods to which this rule applies.
     *
     * Refer to [selector][google.api.DocumentationRule.selector] for syntax details.
     */
    selector?: string | undefined;
    /** The requirements for OAuth credentials. */
    oauth?: OAuthRequirements | undefined;
    /**
     * If true, the service accepts API keys without any other credential.
     * This flag only applies to HTTP and gRPC requests.
     */
    allow_without_credential?: boolean | undefined;
    /** Requirements for additional authentication providers. */
    requirements?: AuthRequirement[] | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
/** Specifies a location to extract JWT from an API request. */
export interface JwtLocation {
    /** Specifies HTTP header name to extract JWT token. */
    header?: string | undefined;
    /** Specifies URL query parameter name to extract JWT token. */
    query?: string | undefined;
    /** Specifies cookie name to extract JWT token. */
    cookie?: string | undefined;
    /**
     * The value prefix. The value format is "value_prefix{token}"
     * Only applies to "in" header type. Must be empty for "in" query type.
     * If not empty, the header value has to match (case sensitive) this prefix.
     * If not matched, JWT will not be extracted. If matched, JWT will be
     * extracted after the prefix is removed.
     *
     * For example, for "Authorization: Bearer {JWT}",
     * value_prefix="Bearer " with a space at the end.
     */
    value_prefix?: string | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
/**
 * Configuration for an authentication provider, including support for
 * [JSON Web Token
 * (JWT)](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32).
 */
export interface AuthProvider {
    /**
     * The unique identifier of the auth provider. It will be referred to by
     * `AuthRequirement.provider_id`.
     *
     * Example: "bookstore_auth".
     */
    id?: string | undefined;
    /**
     * Identifies the principal that issued the JWT. See
     * https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.1
     * Usually a URL or an email address.
     *
     * Example: https://securetoken.google.com
     * Example: 1234567-compute@developer.gserviceaccount.com
     */
    issuer?: string | undefined;
    /**
     * URL of the provider's public key set to validate signature of the JWT. See
     * [OpenID
     * Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata).
     * Optional if the key set document:
     *  - can be retrieved from
     *    [OpenID
     *    Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html)
     *    of the issuer.
     *  - can be inferred from the email domain of the issuer (e.g. a Google
     *  service account).
     *
     * Example: https://www.googleapis.com/oauth2/v1/certs
     */
    jwks_uri?: string | undefined;
    /**
     * The list of JWT
     * [audiences](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.3).
     * that are allowed to access. A JWT containing any of these audiences will
     * be accepted. When this setting is absent, JWTs with audiences:
     *   - "https://[service.name]/[google.protobuf.Api.name]"
     *   - "https://[service.name]/"
     * will be accepted.
     * For example, if no audiences are in the setting, LibraryService API will
     * accept JWTs with the following audiences:
     *   -
     *   https://library-example.googleapis.com/google.example.library.v1.LibraryService
     *   - https://library-example.googleapis.com/
     *
     * Example:
     *
     *     audiences: bookstore_android.apps.googleusercontent.com,
     *                bookstore_web.apps.googleusercontent.com
     */
    audiences?: string | undefined;
    /**
     * Redirect URL if JWT token is required but not present or is expired.
     * Implement authorizationUrl of securityDefinitions in OpenAPI spec.
     */
    authorization_url?: string | undefined;
    /**
     * Defines the locations to extract the JWT.  For now it is only used by the
     * Cloud Endpoints to store the OpenAPI extension [x-google-jwt-locations]
     * (https://cloud.google.com/endpoints/docs/openapi/openapi-extensions#x-google-jwt-locations)
     *
     * JWT locations can be one of HTTP headers, URL query parameters or
     * cookies. The rule is that the first match wins.
     *
     * If not specified,  default to use following 3 locations:
     *    1) Authorization: Bearer
     *    2) x-goog-iap-jwt-assertion
     *    3) access_token query parameter
     *
     * Default locations can be specified as followings:
     *    jwt_locations:
     *    - header: Authorization
     *      value_prefix: "Bearer "
     *    - header: x-goog-iap-jwt-assertion
     *    - query: access_token
     */
    jwt_locations?: JwtLocation[] | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
/**
 * OAuth scopes are a way to define data and permissions on data. For example,
 * there are scopes defined for "Read-only access to Google Calendar" and
 * "Access to Cloud Platform". Users can consent to a scope for an application,
 * giving it permission to access that data on their behalf.
 *
 * OAuth scope specifications should be fairly coarse grained; a user will need
 * to see and understand the text description of what your scope means.
 *
 * In most cases: use one or at most two OAuth scopes for an entire family of
 * products. If your product has multiple APIs, you should probably be sharing
 * the OAuth scope across all of those APIs.
 *
 * When you need finer grained OAuth consent screens: talk with your product
 * management about how developers will use them in practice.
 *
 * Please note that even though each of the canonical scopes is enough for a
 * request to be accepted and passed to the backend, a request can still fail
 * due to the backend requiring additional scopes or permissions.
 */
export interface OAuthRequirements {
    /**
     * The list of publicly documented OAuth scopes that are allowed access. An
     * OAuth token containing any of these scopes will be accepted.
     *
     * Example:
     *
     *      canonical_scopes: https://www.googleapis.com/auth/calendar,
     *                        https://www.googleapis.com/auth/calendar.read
     */
    canonical_scopes?: string | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
/**
 * User-defined authentication requirements, including support for
 * [JSON Web Token
 * (JWT)](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32).
 */
export interface AuthRequirement {
    /**
     * [id][google.api.AuthProvider.id] from authentication provider.
     *
     * Example:
     *
     *     provider_id: bookstore_auth
     */
    provider_id?: string | undefined;
    /**
     * NOTE: This will be deprecated soon, once AuthProvider.audiences is
     * implemented and accepted in all the runtime components.
     *
     * The list of JWT
     * [audiences](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.3).
     * that are allowed to access. A JWT containing any of these audiences will
     * be accepted. When this setting is absent, only JWTs with audience
     * "https://[Service_name][google.api.Service.name]/[API_name][google.protobuf.Api.name]"
     * will be accepted. For example, if no audiences are in the setting,
     * LibraryService API will only accept JWTs with the following audience
     * "https://library-example.googleapis.com/google.example.library.v1.LibraryService".
     *
     * Example:
     *
     *     audiences: bookstore_android.apps.googleusercontent.com,
     *                bookstore_web.apps.googleusercontent.com
     */
    audiences?: string | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
export declare const Authentication: {
    encode(message: Authentication, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Authentication;
    fromJSON(object: any): Authentication;
    toJSON(message: Authentication): unknown;
};
export declare const AuthenticationRule: {
    encode(message: AuthenticationRule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AuthenticationRule;
    fromJSON(object: any): AuthenticationRule;
    toJSON(message: AuthenticationRule): unknown;
};
export declare const JwtLocation: {
    encode(message: JwtLocation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): JwtLocation;
    fromJSON(object: any): JwtLocation;
    toJSON(message: JwtLocation): unknown;
};
export declare const AuthProvider: {
    encode(message: AuthProvider, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AuthProvider;
    fromJSON(object: any): AuthProvider;
    toJSON(message: AuthProvider): unknown;
};
export declare const OAuthRequirements: {
    encode(message: OAuthRequirements, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OAuthRequirements;
    fromJSON(object: any): OAuthRequirements;
    toJSON(message: OAuthRequirements): unknown;
};
export declare const AuthRequirement: {
    encode(message: AuthRequirement, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AuthRequirement;
    fromJSON(object: any): AuthRequirement;
    toJSON(message: AuthRequirement): unknown;
};
