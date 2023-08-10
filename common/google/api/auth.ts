/* eslint-disable */
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
  rules?:
    | AuthenticationRule[]
    | undefined;
  /** Defines a set of authentication providers that a service supports. */
  providers?: AuthProvider[] | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
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
  selector?:
    | string
    | undefined;
  /** The requirements for OAuth credentials. */
  oauth?:
    | OAuthRequirements
    | undefined;
  /**
   * If true, the service accepts API keys without any other credential.
   * This flag only applies to HTTP and gRPC requests.
   */
  allow_without_credential?:
    | boolean
    | undefined;
  /** Requirements for additional authentication providers. */
  requirements?: AuthRequirement[] | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/** Specifies a location to extract JWT from an API request. */
export interface JwtLocation {
  /** Specifies HTTP header name to extract JWT token. */
  header?:
    | string
    | undefined;
  /** Specifies URL query parameter name to extract JWT token. */
  query?:
    | string
    | undefined;
  /** Specifies cookie name to extract JWT token. */
  cookie?:
    | string
    | undefined;
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
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
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
  id?:
    | string
    | undefined;
  /**
   * Identifies the principal that issued the JWT. See
   * https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.1
   * Usually a URL or an email address.
   *
   * Example: https://securetoken.google.com
   * Example: 1234567-compute@developer.gserviceaccount.com
   */
  issuer?:
    | string
    | undefined;
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
  jwks_uri?:
    | string
    | undefined;
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
  audiences?:
    | string
    | undefined;
  /**
   * Redirect URL if JWT token is required but not present or is expired.
   * Implement authorizationUrl of securityDefinitions in OpenAPI spec.
   */
  authorization_url?:
    | string
    | undefined;
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
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
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
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
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
  provider_id?:
    | string
    | undefined;
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
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

function createBaseAuthentication(): Authentication {
  return {};
}

export const Authentication = {
  encode(message: Authentication, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rules !== undefined && message.rules.length !== 0) {
      for (const v of message.rules) {
        AuthenticationRule.encode(v!, writer.uint32(26).fork()).ldelim();
      }
    }
    if (message.providers !== undefined && message.providers.length !== 0) {
      for (const v of message.providers) {
        AuthProvider.encode(v!, writer.uint32(34).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Authentication {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthentication();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag !== 26) {
            break;
          }

          if (message.rules === undefined) {
            message.rules = [];
          }
          message.rules!.push(AuthenticationRule.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          if (message.providers === undefined) {
            message.providers = [];
          }
          message.providers!.push(AuthProvider.decode(reader, reader.uint32()));
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

  fromJSON(object: any): Authentication {
    return {
      rules: Array.isArray(object?.rules) ? object.rules.map((e: any) => AuthenticationRule.fromJSON(e)) : undefined,
      providers: Array.isArray(object?.providers)
        ? object.providers.map((e: any) => AuthProvider.fromJSON(e))
        : undefined,
    };
  },

  toJSON(message: Authentication): unknown {
    const obj: any = {};
    if (message.rules?.length) {
      obj.rules = message.rules.map((e) => AuthenticationRule.toJSON(e));
    }
    if (message.providers?.length) {
      obj.providers = message.providers.map((e) => AuthProvider.toJSON(e));
    }
    return obj;
  },
};

function createBaseAuthenticationRule(): AuthenticationRule {
  return {};
}

export const AuthenticationRule = {
  encode(message: AuthenticationRule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.selector !== undefined && message.selector !== "") {
      writer.uint32(10).string(message.selector);
    }
    if (message.oauth !== undefined) {
      OAuthRequirements.encode(message.oauth, writer.uint32(18).fork()).ldelim();
    }
    if (message.allow_without_credential === true) {
      writer.uint32(40).bool(message.allow_without_credential);
    }
    if (message.requirements !== undefined && message.requirements.length !== 0) {
      for (const v of message.requirements) {
        AuthRequirement.encode(v!, writer.uint32(58).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthenticationRule {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthenticationRule();
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

          message.oauth = OAuthRequirements.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.allow_without_credential = reader.bool();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          if (message.requirements === undefined) {
            message.requirements = [];
          }
          message.requirements!.push(AuthRequirement.decode(reader, reader.uint32()));
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

  fromJSON(object: any): AuthenticationRule {
    return {
      selector: isSet(object.selector) ? String(object.selector) : undefined,
      oauth: isSet(object.oauth) ? OAuthRequirements.fromJSON(object.oauth) : undefined,
      allow_without_credential: isSet(object.allow_without_credential)
        ? Boolean(object.allow_without_credential)
        : undefined,
      requirements: Array.isArray(object?.requirements)
        ? object.requirements.map((e: any) => AuthRequirement.fromJSON(e))
        : undefined,
    };
  },

  toJSON(message: AuthenticationRule): unknown {
    const obj: any = {};
    if (message.selector !== undefined && message.selector !== "") {
      obj.selector = message.selector;
    }
    if (message.oauth !== undefined) {
      obj.oauth = OAuthRequirements.toJSON(message.oauth);
    }
    if (message.allow_without_credential === true) {
      obj.allow_without_credential = message.allow_without_credential;
    }
    if (message.requirements?.length) {
      obj.requirements = message.requirements.map((e) => AuthRequirement.toJSON(e));
    }
    return obj;
  },
};

function createBaseJwtLocation(): JwtLocation {
  return {};
}

export const JwtLocation = {
  encode(message: JwtLocation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.header !== undefined) {
      writer.uint32(10).string(message.header);
    }
    if (message.query !== undefined) {
      writer.uint32(18).string(message.query);
    }
    if (message.cookie !== undefined) {
      writer.uint32(34).string(message.cookie);
    }
    if (message.value_prefix !== undefined && message.value_prefix !== "") {
      writer.uint32(26).string(message.value_prefix);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): JwtLocation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJwtLocation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.header = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.query = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.cookie = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.value_prefix = reader.string();
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

  fromJSON(object: any): JwtLocation {
    return {
      header: isSet(object.header) ? String(object.header) : undefined,
      query: isSet(object.query) ? String(object.query) : undefined,
      cookie: isSet(object.cookie) ? String(object.cookie) : undefined,
      value_prefix: isSet(object.value_prefix) ? String(object.value_prefix) : undefined,
    };
  },

  toJSON(message: JwtLocation): unknown {
    const obj: any = {};
    if (message.header !== undefined) {
      obj.header = message.header;
    }
    if (message.query !== undefined) {
      obj.query = message.query;
    }
    if (message.cookie !== undefined) {
      obj.cookie = message.cookie;
    }
    if (message.value_prefix !== undefined && message.value_prefix !== "") {
      obj.value_prefix = message.value_prefix;
    }
    return obj;
  },
};

function createBaseAuthProvider(): AuthProvider {
  return {};
}

export const AuthProvider = {
  encode(message: AuthProvider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined && message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.issuer !== undefined && message.issuer !== "") {
      writer.uint32(18).string(message.issuer);
    }
    if (message.jwks_uri !== undefined && message.jwks_uri !== "") {
      writer.uint32(26).string(message.jwks_uri);
    }
    if (message.audiences !== undefined && message.audiences !== "") {
      writer.uint32(34).string(message.audiences);
    }
    if (message.authorization_url !== undefined && message.authorization_url !== "") {
      writer.uint32(42).string(message.authorization_url);
    }
    if (message.jwt_locations !== undefined && message.jwt_locations.length !== 0) {
      for (const v of message.jwt_locations) {
        JwtLocation.encode(v!, writer.uint32(50).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthProvider {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthProvider();
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

          message.issuer = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.jwks_uri = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.audiences = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.authorization_url = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          if (message.jwt_locations === undefined) {
            message.jwt_locations = [];
          }
          message.jwt_locations!.push(JwtLocation.decode(reader, reader.uint32()));
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

  fromJSON(object: any): AuthProvider {
    return {
      id: isSet(object.id) ? String(object.id) : undefined,
      issuer: isSet(object.issuer) ? String(object.issuer) : undefined,
      jwks_uri: isSet(object.jwks_uri) ? String(object.jwks_uri) : undefined,
      audiences: isSet(object.audiences) ? String(object.audiences) : undefined,
      authorization_url: isSet(object.authorization_url) ? String(object.authorization_url) : undefined,
      jwt_locations: Array.isArray(object?.jwt_locations)
        ? object.jwt_locations.map((e: any) => JwtLocation.fromJSON(e))
        : undefined,
    };
  },

  toJSON(message: AuthProvider): unknown {
    const obj: any = {};
    if (message.id !== undefined && message.id !== "") {
      obj.id = message.id;
    }
    if (message.issuer !== undefined && message.issuer !== "") {
      obj.issuer = message.issuer;
    }
    if (message.jwks_uri !== undefined && message.jwks_uri !== "") {
      obj.jwks_uri = message.jwks_uri;
    }
    if (message.audiences !== undefined && message.audiences !== "") {
      obj.audiences = message.audiences;
    }
    if (message.authorization_url !== undefined && message.authorization_url !== "") {
      obj.authorization_url = message.authorization_url;
    }
    if (message.jwt_locations?.length) {
      obj.jwt_locations = message.jwt_locations.map((e) => JwtLocation.toJSON(e));
    }
    return obj;
  },
};

function createBaseOAuthRequirements(): OAuthRequirements {
  return {};
}

export const OAuthRequirements = {
  encode(message: OAuthRequirements, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.canonical_scopes !== undefined && message.canonical_scopes !== "") {
      writer.uint32(10).string(message.canonical_scopes);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): OAuthRequirements {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOAuthRequirements();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.canonical_scopes = reader.string();
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

  fromJSON(object: any): OAuthRequirements {
    return { canonical_scopes: isSet(object.canonical_scopes) ? String(object.canonical_scopes) : undefined };
  },

  toJSON(message: OAuthRequirements): unknown {
    const obj: any = {};
    if (message.canonical_scopes !== undefined && message.canonical_scopes !== "") {
      obj.canonical_scopes = message.canonical_scopes;
    }
    return obj;
  },
};

function createBaseAuthRequirement(): AuthRequirement {
  return {};
}

export const AuthRequirement = {
  encode(message: AuthRequirement, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.provider_id !== undefined && message.provider_id !== "") {
      writer.uint32(10).string(message.provider_id);
    }
    if (message.audiences !== undefined && message.audiences !== "") {
      writer.uint32(18).string(message.audiences);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthRequirement {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthRequirement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.provider_id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.audiences = reader.string();
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

  fromJSON(object: any): AuthRequirement {
    return {
      provider_id: isSet(object.provider_id) ? String(object.provider_id) : undefined,
      audiences: isSet(object.audiences) ? String(object.audiences) : undefined,
    };
  },

  toJSON(message: AuthRequirement): unknown {
    const obj: any = {};
    if (message.provider_id !== undefined && message.provider_id !== "") {
      obj.provider_id = message.provider_id;
    }
    if (message.audiences !== undefined && message.audiences !== "") {
      obj.audiences = message.audiences;
    }
    return obj;
  },
};

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
