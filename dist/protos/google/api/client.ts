/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Duration } from "../protobuf/duration";
import { LaunchStage, launchStageFromJSON, launchStageToJSON } from "./launch_stage";

/**
 * The organization for which the client libraries are being published.
 * Affects the url where generated docs are published, etc.
 */
export enum ClientLibraryOrganization {
  /** CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED - Not useful. */
  CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED = 0,
  /** CLOUD - Google Cloud Platform Org. */
  CLOUD = 1,
  /** ADS - Ads (Advertising) Org. */
  ADS = 2,
  /** PHOTOS - Photos Org. */
  PHOTOS = 3,
  /** STREET_VIEW - Street View Org. */
  STREET_VIEW = 4,
  UNRECOGNIZED = -1,
}

export function clientLibraryOrganizationFromJSON(object: any): ClientLibraryOrganization {
  switch (object) {
    case 0:
    case "CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED":
      return ClientLibraryOrganization.CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED;
    case 1:
    case "CLOUD":
      return ClientLibraryOrganization.CLOUD;
    case 2:
    case "ADS":
      return ClientLibraryOrganization.ADS;
    case 3:
    case "PHOTOS":
      return ClientLibraryOrganization.PHOTOS;
    case 4:
    case "STREET_VIEW":
      return ClientLibraryOrganization.STREET_VIEW;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ClientLibraryOrganization.UNRECOGNIZED;
  }
}

export function clientLibraryOrganizationToJSON(object: ClientLibraryOrganization): string {
  switch (object) {
    case ClientLibraryOrganization.CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED:
      return "CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED";
    case ClientLibraryOrganization.CLOUD:
      return "CLOUD";
    case ClientLibraryOrganization.ADS:
      return "ADS";
    case ClientLibraryOrganization.PHOTOS:
      return "PHOTOS";
    case ClientLibraryOrganization.STREET_VIEW:
      return "STREET_VIEW";
    case ClientLibraryOrganization.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** To where should client libraries be published? */
export enum ClientLibraryDestination {
  /**
   * CLIENT_LIBRARY_DESTINATION_UNSPECIFIED - Client libraries will neither be generated nor published to package
   * managers.
   */
  CLIENT_LIBRARY_DESTINATION_UNSPECIFIED = 0,
  /**
   * GITHUB - Generate the client library in a repo under github.com/googleapis,
   * but don't publish it to package managers.
   */
  GITHUB = 10,
  /** PACKAGE_MANAGER - Publish the library to package managers like nuget.org and npmjs.com. */
  PACKAGE_MANAGER = 20,
  UNRECOGNIZED = -1,
}

export function clientLibraryDestinationFromJSON(object: any): ClientLibraryDestination {
  switch (object) {
    case 0:
    case "CLIENT_LIBRARY_DESTINATION_UNSPECIFIED":
      return ClientLibraryDestination.CLIENT_LIBRARY_DESTINATION_UNSPECIFIED;
    case 10:
    case "GITHUB":
      return ClientLibraryDestination.GITHUB;
    case 20:
    case "PACKAGE_MANAGER":
      return ClientLibraryDestination.PACKAGE_MANAGER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ClientLibraryDestination.UNRECOGNIZED;
  }
}

export function clientLibraryDestinationToJSON(object: ClientLibraryDestination): string {
  switch (object) {
    case ClientLibraryDestination.CLIENT_LIBRARY_DESTINATION_UNSPECIFIED:
      return "CLIENT_LIBRARY_DESTINATION_UNSPECIFIED";
    case ClientLibraryDestination.GITHUB:
      return "GITHUB";
    case ClientLibraryDestination.PACKAGE_MANAGER:
      return "PACKAGE_MANAGER";
    case ClientLibraryDestination.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Required information for every language. */
export interface CommonLanguageSettings {
  /**
   * Link to automatically generated reference documentation.  Example:
   * https://cloud.google.com/nodejs/docs/reference/asset/latest
   *
   * @deprecated
   */
  reference_docs_uri?:
    | string
    | undefined;
  /** The destination where API teams want this client library to be published. */
  destinations?: ClientLibraryDestination[] | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/** Details about how and where to publish client libraries. */
export interface ClientLibrarySettings {
  /** Version of the API to apply these settings to. */
  version?:
    | string
    | undefined;
  /** Launch stage of this version of the API. */
  launch_stage?:
    | LaunchStage
    | undefined;
  /**
   * When using transport=rest, the client request will encode enums as
   * numbers rather than strings.
   */
  rest_numeric_enums?:
    | boolean
    | undefined;
  /** Settings for legacy Java features, supported in the Service YAML. */
  java_settings?:
    | JavaSettings
    | undefined;
  /** Settings for C++ client libraries. */
  cpp_settings?:
    | CppSettings
    | undefined;
  /** Settings for PHP client libraries. */
  php_settings?:
    | PhpSettings
    | undefined;
  /** Settings for Python client libraries. */
  python_settings?:
    | PythonSettings
    | undefined;
  /** Settings for Node client libraries. */
  node_settings?:
    | NodeSettings
    | undefined;
  /** Settings for .NET client libraries. */
  dotnet_settings?:
    | DotnetSettings
    | undefined;
  /** Settings for Ruby client libraries. */
  ruby_settings?:
    | RubySettings
    | undefined;
  /** Settings for Go client libraries. */
  go_settings?: GoSettings | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/**
 * This message configures the settings for publishing [Google Cloud Client
 * libraries](https://cloud.google.com/apis/docs/cloud-client-libraries)
 * generated from the service config.
 */
export interface Publishing {
  /**
   * A list of API method settings, e.g. the behavior for methods that use the
   * long-running operation pattern.
   */
  method_settings?:
    | MethodSettings[]
    | undefined;
  /**
   * Link to a place that API users can report issues.  Example:
   * https://issuetracker.google.com/issues/new?component=190865&template=1161103
   */
  new_issue_uri?:
    | string
    | undefined;
  /**
   * Link to product home page.  Example:
   * https://cloud.google.com/asset-inventory/docs/overview
   */
  documentation_uri?:
    | string
    | undefined;
  /**
   * Used as a tracking tag when collecting data about the APIs developer
   * relations artifacts like docs, packages delivered to package managers,
   * etc.  Example: "speech".
   */
  api_short_name?:
    | string
    | undefined;
  /** GitHub label to apply to issues and pull requests opened for this API. */
  github_label?:
    | string
    | undefined;
  /**
   * GitHub teams to be added to CODEOWNERS in the directory in GitHub
   * containing source code for the client libraries for this API.
   */
  codeowner_github_teams?:
    | string[]
    | undefined;
  /**
   * A prefix used in sample code when demarking regions to be included in
   * documentation.
   */
  doc_tag_prefix?:
    | string
    | undefined;
  /** For whom the client library is being published. */
  organization?:
    | ClientLibraryOrganization
    | undefined;
  /**
   * Client library settings.  If the same version string appears multiple
   * times in this list, then the last one wins.  Settings from earlier
   * settings with the same version string are discarded.
   */
  library_settings?: ClientLibrarySettings[] | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/** Settings for Java client libraries. */
export interface JavaSettings {
  /**
   * The package name to use in Java. Clobbers the java_package option
   * set in the protobuf. This should be used **only** by APIs
   * who have already set the language_settings.java.package_name" field
   * in gapic.yaml. API teams should use the protobuf java_package option
   * where possible.
   *
   * Example of a YAML configuration::
   *
   *  publishing:
   *    java_settings:
   *      library_package: com.google.cloud.pubsub.v1
   */
  library_package?:
    | string
    | undefined;
  /**
   * Configure the Java class name to use instead of the service's for its
   * corresponding generated GAPIC client. Keys are fully-qualified
   * service names as they appear in the protobuf (including the full
   * the language_settings.java.interface_names" field in gapic.yaml. API
   * teams should otherwise use the service name as it appears in the
   * protobuf.
   *
   * Example of a YAML configuration::
   *
   *  publishing:
   *    java_settings:
   *      service_class_names:
   *        - google.pubsub.v1.Publisher: TopicAdmin
   *        - google.pubsub.v1.Subscriber: SubscriptionAdmin
   */
  service_class_names?:
    | Map<string, string>
    | undefined;
  /** Some settings. */
  common?: CommonLanguageSettings | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

export interface JavaSettings_ServiceClassNamesEntry {
  key: string;
  value: string;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/** Settings for C++ client libraries. */
export interface CppSettings {
  /** Some settings. */
  common?: CommonLanguageSettings | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/** Settings for Php client libraries. */
export interface PhpSettings {
  /** Some settings. */
  common?: CommonLanguageSettings | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/** Settings for Python client libraries. */
export interface PythonSettings {
  /** Some settings. */
  common?: CommonLanguageSettings | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/** Settings for Node client libraries. */
export interface NodeSettings {
  /** Some settings. */
  common?: CommonLanguageSettings | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/** Settings for Dotnet client libraries. */
export interface DotnetSettings {
  /** Some settings. */
  common?: CommonLanguageSettings | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/** Settings for Ruby client libraries. */
export interface RubySettings {
  /** Some settings. */
  common?: CommonLanguageSettings | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/** Settings for Go client libraries. */
export interface GoSettings {
  /** Some settings. */
  common?: CommonLanguageSettings | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/** Describes the generator configuration for a method. */
export interface MethodSettings {
  /**
   * The fully qualified name of the method, for which the options below apply.
   * This is used to find the method to apply the options.
   */
  selector?:
    | string
    | undefined;
  /**
   * Describes settings to use for long-running operations when generating
   * API methods for RPCs. Complements RPCs that use the annotations in
   * google/longrunning/operations.proto.
   *
   * Example of a YAML configuration::
   *
   *  publishing:
   *    method_behavior:
   *      - selector: CreateAdDomain
   *        long_running:
   *          initial_poll_delay:
   *            seconds: 60 # 1 minute
   *          poll_delay_multiplier: 1.5
   *          max_poll_delay:
   *            seconds: 360 # 6 minutes
   *          total_poll_timeout:
   *             seconds: 54000 # 90 minutes
   */
  long_running?: MethodSettings_LongRunning | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/**
 * Describes settings to use when generating API methods that use the
 * long-running operation pattern.
 * All default values below are from those used in the client library
 * generators (e.g.
 * [Java](https://github.com/googleapis/gapic-generator-java/blob/04c2faa191a9b5a10b92392fe8482279c4404803/src/main/java/com/google/api/generator/gapic/composer/common/RetrySettingsComposer.java)).
 */
export interface MethodSettings_LongRunning {
  /**
   * Initial delay after which the first poll request will be made.
   * Default value: 5 seconds.
   */
  initial_poll_delay?:
    | Duration
    | undefined;
  /**
   * Multiplier to gradually increase delay between subsequent polls until it
   * reaches max_poll_delay.
   * Default value: 1.5.
   */
  poll_delay_multiplier?:
    | number
    | undefined;
  /**
   * Maximum time between two subsequent poll requests.
   * Default value: 45 seconds.
   */
  max_poll_delay?:
    | Duration
    | undefined;
  /**
   * Total polling timeout.
   * Default value: 5 minutes.
   */
  total_poll_timeout?: Duration | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

function createBaseCommonLanguageSettings(): CommonLanguageSettings {
  return {};
}

export const CommonLanguageSettings = {
  encode(message: CommonLanguageSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reference_docs_uri !== undefined && message.reference_docs_uri !== "") {
      writer.uint32(10).string(message.reference_docs_uri);
    }
    if (message.destinations !== undefined && message.destinations.length !== 0) {
      writer.uint32(18).fork();
      for (const v of message.destinations) {
        writer.int32(v);
      }
      writer.ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): CommonLanguageSettings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommonLanguageSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.reference_docs_uri = reader.string();
          continue;
        case 2:
          if (tag === 16) {
            if (message.destinations === undefined) {
              message.destinations = [];
            }
            message.destinations!.push(reader.int32() as any);

            continue;
          }

          if (tag === 18) {
            if (message.destinations === undefined) {
              message.destinations = [];
            }
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.destinations!.push(reader.int32() as any);
            }

            continue;
          }

          break;
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

  fromJSON(object: any): CommonLanguageSettings {
    return {
      reference_docs_uri: isSet(object.reference_docs_uri) ? String(object.reference_docs_uri) : undefined,
      destinations: Array.isArray(object?.destinations)
        ? object.destinations.map((e: any) => clientLibraryDestinationFromJSON(e))
        : undefined,
    };
  },

  toJSON(message: CommonLanguageSettings): unknown {
    const obj: any = {};
    if (message.reference_docs_uri !== undefined && message.reference_docs_uri !== "") {
      obj.reference_docs_uri = message.reference_docs_uri;
    }
    if (message.destinations?.length) {
      obj.destinations = message.destinations.map((e) => clientLibraryDestinationToJSON(e));
    }
    return obj;
  },
};

function createBaseClientLibrarySettings(): ClientLibrarySettings {
  return {};
}

export const ClientLibrarySettings = {
  encode(message: ClientLibrarySettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== undefined && message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.launch_stage !== undefined && message.launch_stage !== 0) {
      writer.uint32(16).int32(message.launch_stage);
    }
    if (message.rest_numeric_enums === true) {
      writer.uint32(24).bool(message.rest_numeric_enums);
    }
    if (message.java_settings !== undefined) {
      JavaSettings.encode(message.java_settings, writer.uint32(170).fork()).ldelim();
    }
    if (message.cpp_settings !== undefined) {
      CppSettings.encode(message.cpp_settings, writer.uint32(178).fork()).ldelim();
    }
    if (message.php_settings !== undefined) {
      PhpSettings.encode(message.php_settings, writer.uint32(186).fork()).ldelim();
    }
    if (message.python_settings !== undefined) {
      PythonSettings.encode(message.python_settings, writer.uint32(194).fork()).ldelim();
    }
    if (message.node_settings !== undefined) {
      NodeSettings.encode(message.node_settings, writer.uint32(202).fork()).ldelim();
    }
    if (message.dotnet_settings !== undefined) {
      DotnetSettings.encode(message.dotnet_settings, writer.uint32(210).fork()).ldelim();
    }
    if (message.ruby_settings !== undefined) {
      RubySettings.encode(message.ruby_settings, writer.uint32(218).fork()).ldelim();
    }
    if (message.go_settings !== undefined) {
      GoSettings.encode(message.go_settings, writer.uint32(226).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ClientLibrarySettings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientLibrarySettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.version = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.launch_stage = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.rest_numeric_enums = reader.bool();
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.java_settings = JavaSettings.decode(reader, reader.uint32());
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.cpp_settings = CppSettings.decode(reader, reader.uint32());
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.php_settings = PhpSettings.decode(reader, reader.uint32());
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.python_settings = PythonSettings.decode(reader, reader.uint32());
          continue;
        case 25:
          if (tag !== 202) {
            break;
          }

          message.node_settings = NodeSettings.decode(reader, reader.uint32());
          continue;
        case 26:
          if (tag !== 210) {
            break;
          }

          message.dotnet_settings = DotnetSettings.decode(reader, reader.uint32());
          continue;
        case 27:
          if (tag !== 218) {
            break;
          }

          message.ruby_settings = RubySettings.decode(reader, reader.uint32());
          continue;
        case 28:
          if (tag !== 226) {
            break;
          }

          message.go_settings = GoSettings.decode(reader, reader.uint32());
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

  fromJSON(object: any): ClientLibrarySettings {
    return {
      version: isSet(object.version) ? String(object.version) : undefined,
      launch_stage: isSet(object.launch_stage) ? launchStageFromJSON(object.launch_stage) : undefined,
      rest_numeric_enums: isSet(object.rest_numeric_enums) ? Boolean(object.rest_numeric_enums) : undefined,
      java_settings: isSet(object.java_settings) ? JavaSettings.fromJSON(object.java_settings) : undefined,
      cpp_settings: isSet(object.cpp_settings) ? CppSettings.fromJSON(object.cpp_settings) : undefined,
      php_settings: isSet(object.php_settings) ? PhpSettings.fromJSON(object.php_settings) : undefined,
      python_settings: isSet(object.python_settings) ? PythonSettings.fromJSON(object.python_settings) : undefined,
      node_settings: isSet(object.node_settings) ? NodeSettings.fromJSON(object.node_settings) : undefined,
      dotnet_settings: isSet(object.dotnet_settings) ? DotnetSettings.fromJSON(object.dotnet_settings) : undefined,
      ruby_settings: isSet(object.ruby_settings) ? RubySettings.fromJSON(object.ruby_settings) : undefined,
      go_settings: isSet(object.go_settings) ? GoSettings.fromJSON(object.go_settings) : undefined,
    };
  },

  toJSON(message: ClientLibrarySettings): unknown {
    const obj: any = {};
    if (message.version !== undefined && message.version !== "") {
      obj.version = message.version;
    }
    if (message.launch_stage !== undefined && message.launch_stage !== 0) {
      obj.launch_stage = launchStageToJSON(message.launch_stage);
    }
    if (message.rest_numeric_enums === true) {
      obj.rest_numeric_enums = message.rest_numeric_enums;
    }
    if (message.java_settings !== undefined) {
      obj.java_settings = JavaSettings.toJSON(message.java_settings);
    }
    if (message.cpp_settings !== undefined) {
      obj.cpp_settings = CppSettings.toJSON(message.cpp_settings);
    }
    if (message.php_settings !== undefined) {
      obj.php_settings = PhpSettings.toJSON(message.php_settings);
    }
    if (message.python_settings !== undefined) {
      obj.python_settings = PythonSettings.toJSON(message.python_settings);
    }
    if (message.node_settings !== undefined) {
      obj.node_settings = NodeSettings.toJSON(message.node_settings);
    }
    if (message.dotnet_settings !== undefined) {
      obj.dotnet_settings = DotnetSettings.toJSON(message.dotnet_settings);
    }
    if (message.ruby_settings !== undefined) {
      obj.ruby_settings = RubySettings.toJSON(message.ruby_settings);
    }
    if (message.go_settings !== undefined) {
      obj.go_settings = GoSettings.toJSON(message.go_settings);
    }
    return obj;
  },
};

function createBasePublishing(): Publishing {
  return {};
}

export const Publishing = {
  encode(message: Publishing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.method_settings !== undefined && message.method_settings.length !== 0) {
      for (const v of message.method_settings) {
        MethodSettings.encode(v!, writer.uint32(18).fork()).ldelim();
      }
    }
    if (message.new_issue_uri !== undefined && message.new_issue_uri !== "") {
      writer.uint32(810).string(message.new_issue_uri);
    }
    if (message.documentation_uri !== undefined && message.documentation_uri !== "") {
      writer.uint32(818).string(message.documentation_uri);
    }
    if (message.api_short_name !== undefined && message.api_short_name !== "") {
      writer.uint32(826).string(message.api_short_name);
    }
    if (message.github_label !== undefined && message.github_label !== "") {
      writer.uint32(834).string(message.github_label);
    }
    if (message.codeowner_github_teams !== undefined && message.codeowner_github_teams.length !== 0) {
      for (const v of message.codeowner_github_teams) {
        writer.uint32(842).string(v!);
      }
    }
    if (message.doc_tag_prefix !== undefined && message.doc_tag_prefix !== "") {
      writer.uint32(850).string(message.doc_tag_prefix);
    }
    if (message.organization !== undefined && message.organization !== 0) {
      writer.uint32(856).int32(message.organization);
    }
    if (message.library_settings !== undefined && message.library_settings.length !== 0) {
      for (const v of message.library_settings) {
        ClientLibrarySettings.encode(v!, writer.uint32(874).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Publishing {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublishing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          if (message.method_settings === undefined) {
            message.method_settings = [];
          }
          message.method_settings!.push(MethodSettings.decode(reader, reader.uint32()));
          continue;
        case 101:
          if (tag !== 810) {
            break;
          }

          message.new_issue_uri = reader.string();
          continue;
        case 102:
          if (tag !== 818) {
            break;
          }

          message.documentation_uri = reader.string();
          continue;
        case 103:
          if (tag !== 826) {
            break;
          }

          message.api_short_name = reader.string();
          continue;
        case 104:
          if (tag !== 834) {
            break;
          }

          message.github_label = reader.string();
          continue;
        case 105:
          if (tag !== 842) {
            break;
          }

          if (message.codeowner_github_teams === undefined) {
            message.codeowner_github_teams = [];
          }
          message.codeowner_github_teams!.push(reader.string());
          continue;
        case 106:
          if (tag !== 850) {
            break;
          }

          message.doc_tag_prefix = reader.string();
          continue;
        case 107:
          if (tag !== 856) {
            break;
          }

          message.organization = reader.int32() as any;
          continue;
        case 109:
          if (tag !== 874) {
            break;
          }

          if (message.library_settings === undefined) {
            message.library_settings = [];
          }
          message.library_settings!.push(ClientLibrarySettings.decode(reader, reader.uint32()));
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

  fromJSON(object: any): Publishing {
    return {
      method_settings: Array.isArray(object?.method_settings)
        ? object.method_settings.map((e: any) => MethodSettings.fromJSON(e))
        : undefined,
      new_issue_uri: isSet(object.new_issue_uri) ? String(object.new_issue_uri) : undefined,
      documentation_uri: isSet(object.documentation_uri) ? String(object.documentation_uri) : undefined,
      api_short_name: isSet(object.api_short_name) ? String(object.api_short_name) : undefined,
      github_label: isSet(object.github_label) ? String(object.github_label) : undefined,
      codeowner_github_teams: Array.isArray(object?.codeowner_github_teams)
        ? object.codeowner_github_teams.map((e: any) => String(e))
        : undefined,
      doc_tag_prefix: isSet(object.doc_tag_prefix) ? String(object.doc_tag_prefix) : undefined,
      organization: isSet(object.organization) ? clientLibraryOrganizationFromJSON(object.organization) : undefined,
      library_settings: Array.isArray(object?.library_settings)
        ? object.library_settings.map((e: any) => ClientLibrarySettings.fromJSON(e))
        : undefined,
    };
  },

  toJSON(message: Publishing): unknown {
    const obj: any = {};
    if (message.method_settings?.length) {
      obj.method_settings = message.method_settings.map((e) => MethodSettings.toJSON(e));
    }
    if (message.new_issue_uri !== undefined && message.new_issue_uri !== "") {
      obj.new_issue_uri = message.new_issue_uri;
    }
    if (message.documentation_uri !== undefined && message.documentation_uri !== "") {
      obj.documentation_uri = message.documentation_uri;
    }
    if (message.api_short_name !== undefined && message.api_short_name !== "") {
      obj.api_short_name = message.api_short_name;
    }
    if (message.github_label !== undefined && message.github_label !== "") {
      obj.github_label = message.github_label;
    }
    if (message.codeowner_github_teams?.length) {
      obj.codeowner_github_teams = message.codeowner_github_teams;
    }
    if (message.doc_tag_prefix !== undefined && message.doc_tag_prefix !== "") {
      obj.doc_tag_prefix = message.doc_tag_prefix;
    }
    if (message.organization !== undefined && message.organization !== 0) {
      obj.organization = clientLibraryOrganizationToJSON(message.organization);
    }
    if (message.library_settings?.length) {
      obj.library_settings = message.library_settings.map((e) => ClientLibrarySettings.toJSON(e));
    }
    return obj;
  },
};

function createBaseJavaSettings(): JavaSettings {
  return {};
}

export const JavaSettings = {
  encode(message: JavaSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.library_package !== undefined && message.library_package !== "") {
      writer.uint32(10).string(message.library_package);
    }
    (message.service_class_names || new Map()).forEach((value, key) => {
      JavaSettings_ServiceClassNamesEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim();
    });
    if (message.common !== undefined) {
      CommonLanguageSettings.encode(message.common, writer.uint32(26).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): JavaSettings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJavaSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.library_package = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          const entry2 = JavaSettings_ServiceClassNamesEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            if (message.service_class_names === undefined) {
              message.service_class_names = new Map();
            }
            message.service_class_names!.set(entry2.key, entry2.value);
          }
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.common = CommonLanguageSettings.decode(reader, reader.uint32());
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

  fromJSON(object: any): JavaSettings {
    return {
      library_package: isSet(object.library_package) ? String(object.library_package) : undefined,
      service_class_names: isObject(object.service_class_names)
        ? Object.entries(object.service_class_names).reduce<Map<string, string>>((acc, [key, value]) => {
          acc.set(key, String(value));
          return acc;
        }, new Map())
        : undefined,
      common: isSet(object.common) ? CommonLanguageSettings.fromJSON(object.common) : undefined,
    };
  },

  toJSON(message: JavaSettings): unknown {
    const obj: any = {};
    if (message.library_package !== undefined && message.library_package !== "") {
      obj.library_package = message.library_package;
    }
    if (message.service_class_names?.size) {
      obj.service_class_names = {};
      message.service_class_names.forEach((v, k) => {
        obj.service_class_names[k] = v;
      });
    }
    if (message.common !== undefined) {
      obj.common = CommonLanguageSettings.toJSON(message.common);
    }
    return obj;
  },
};

function createBaseJavaSettings_ServiceClassNamesEntry(): JavaSettings_ServiceClassNamesEntry {
  return { key: "", value: "" };
}

export const JavaSettings_ServiceClassNamesEntry = {
  encode(message: JavaSettings_ServiceClassNamesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): JavaSettings_ServiceClassNamesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJavaSettings_ServiceClassNamesEntry();
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

  fromJSON(object: any): JavaSettings_ServiceClassNamesEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: JavaSettings_ServiceClassNamesEntry): unknown {
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

function createBaseCppSettings(): CppSettings {
  return {};
}

export const CppSettings = {
  encode(message: CppSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.common !== undefined) {
      CommonLanguageSettings.encode(message.common, writer.uint32(10).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): CppSettings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCppSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.common = CommonLanguageSettings.decode(reader, reader.uint32());
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

  fromJSON(object: any): CppSettings {
    return { common: isSet(object.common) ? CommonLanguageSettings.fromJSON(object.common) : undefined };
  },

  toJSON(message: CppSettings): unknown {
    const obj: any = {};
    if (message.common !== undefined) {
      obj.common = CommonLanguageSettings.toJSON(message.common);
    }
    return obj;
  },
};

function createBasePhpSettings(): PhpSettings {
  return {};
}

export const PhpSettings = {
  encode(message: PhpSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.common !== undefined) {
      CommonLanguageSettings.encode(message.common, writer.uint32(10).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): PhpSettings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePhpSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.common = CommonLanguageSettings.decode(reader, reader.uint32());
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

  fromJSON(object: any): PhpSettings {
    return { common: isSet(object.common) ? CommonLanguageSettings.fromJSON(object.common) : undefined };
  },

  toJSON(message: PhpSettings): unknown {
    const obj: any = {};
    if (message.common !== undefined) {
      obj.common = CommonLanguageSettings.toJSON(message.common);
    }
    return obj;
  },
};

function createBasePythonSettings(): PythonSettings {
  return {};
}

export const PythonSettings = {
  encode(message: PythonSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.common !== undefined) {
      CommonLanguageSettings.encode(message.common, writer.uint32(10).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): PythonSettings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePythonSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.common = CommonLanguageSettings.decode(reader, reader.uint32());
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

  fromJSON(object: any): PythonSettings {
    return { common: isSet(object.common) ? CommonLanguageSettings.fromJSON(object.common) : undefined };
  },

  toJSON(message: PythonSettings): unknown {
    const obj: any = {};
    if (message.common !== undefined) {
      obj.common = CommonLanguageSettings.toJSON(message.common);
    }
    return obj;
  },
};

function createBaseNodeSettings(): NodeSettings {
  return {};
}

export const NodeSettings = {
  encode(message: NodeSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.common !== undefined) {
      CommonLanguageSettings.encode(message.common, writer.uint32(10).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): NodeSettings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.common = CommonLanguageSettings.decode(reader, reader.uint32());
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

  fromJSON(object: any): NodeSettings {
    return { common: isSet(object.common) ? CommonLanguageSettings.fromJSON(object.common) : undefined };
  },

  toJSON(message: NodeSettings): unknown {
    const obj: any = {};
    if (message.common !== undefined) {
      obj.common = CommonLanguageSettings.toJSON(message.common);
    }
    return obj;
  },
};

function createBaseDotnetSettings(): DotnetSettings {
  return {};
}

export const DotnetSettings = {
  encode(message: DotnetSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.common !== undefined) {
      CommonLanguageSettings.encode(message.common, writer.uint32(10).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): DotnetSettings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDotnetSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.common = CommonLanguageSettings.decode(reader, reader.uint32());
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

  fromJSON(object: any): DotnetSettings {
    return { common: isSet(object.common) ? CommonLanguageSettings.fromJSON(object.common) : undefined };
  },

  toJSON(message: DotnetSettings): unknown {
    const obj: any = {};
    if (message.common !== undefined) {
      obj.common = CommonLanguageSettings.toJSON(message.common);
    }
    return obj;
  },
};

function createBaseRubySettings(): RubySettings {
  return {};
}

export const RubySettings = {
  encode(message: RubySettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.common !== undefined) {
      CommonLanguageSettings.encode(message.common, writer.uint32(10).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): RubySettings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRubySettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.common = CommonLanguageSettings.decode(reader, reader.uint32());
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

  fromJSON(object: any): RubySettings {
    return { common: isSet(object.common) ? CommonLanguageSettings.fromJSON(object.common) : undefined };
  },

  toJSON(message: RubySettings): unknown {
    const obj: any = {};
    if (message.common !== undefined) {
      obj.common = CommonLanguageSettings.toJSON(message.common);
    }
    return obj;
  },
};

function createBaseGoSettings(): GoSettings {
  return {};
}

export const GoSettings = {
  encode(message: GoSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.common !== undefined) {
      CommonLanguageSettings.encode(message.common, writer.uint32(10).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): GoSettings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGoSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.common = CommonLanguageSettings.decode(reader, reader.uint32());
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

  fromJSON(object: any): GoSettings {
    return { common: isSet(object.common) ? CommonLanguageSettings.fromJSON(object.common) : undefined };
  },

  toJSON(message: GoSettings): unknown {
    const obj: any = {};
    if (message.common !== undefined) {
      obj.common = CommonLanguageSettings.toJSON(message.common);
    }
    return obj;
  },
};

function createBaseMethodSettings(): MethodSettings {
  return {};
}

export const MethodSettings = {
  encode(message: MethodSettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.selector !== undefined && message.selector !== "") {
      writer.uint32(10).string(message.selector);
    }
    if (message.long_running !== undefined) {
      MethodSettings_LongRunning.encode(message.long_running, writer.uint32(18).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MethodSettings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMethodSettings();
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

          message.long_running = MethodSettings_LongRunning.decode(reader, reader.uint32());
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

  fromJSON(object: any): MethodSettings {
    return {
      selector: isSet(object.selector) ? String(object.selector) : undefined,
      long_running: isSet(object.long_running) ? MethodSettings_LongRunning.fromJSON(object.long_running) : undefined,
    };
  },

  toJSON(message: MethodSettings): unknown {
    const obj: any = {};
    if (message.selector !== undefined && message.selector !== "") {
      obj.selector = message.selector;
    }
    if (message.long_running !== undefined) {
      obj.long_running = MethodSettings_LongRunning.toJSON(message.long_running);
    }
    return obj;
  },
};

function createBaseMethodSettings_LongRunning(): MethodSettings_LongRunning {
  return {};
}

export const MethodSettings_LongRunning = {
  encode(message: MethodSettings_LongRunning, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.initial_poll_delay !== undefined) {
      Duration.encode(message.initial_poll_delay, writer.uint32(10).fork()).ldelim();
    }
    if (message.poll_delay_multiplier !== undefined && message.poll_delay_multiplier !== 0) {
      writer.uint32(21).float(message.poll_delay_multiplier);
    }
    if (message.max_poll_delay !== undefined) {
      Duration.encode(message.max_poll_delay, writer.uint32(26).fork()).ldelim();
    }
    if (message.total_poll_timeout !== undefined) {
      Duration.encode(message.total_poll_timeout, writer.uint32(34).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MethodSettings_LongRunning {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMethodSettings_LongRunning();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.initial_poll_delay = Duration.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.poll_delay_multiplier = reader.float();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.max_poll_delay = Duration.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.total_poll_timeout = Duration.decode(reader, reader.uint32());
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

  fromJSON(object: any): MethodSettings_LongRunning {
    return {
      initial_poll_delay: isSet(object.initial_poll_delay) ? Duration.fromJSON(object.initial_poll_delay) : undefined,
      poll_delay_multiplier: isSet(object.poll_delay_multiplier) ? Number(object.poll_delay_multiplier) : undefined,
      max_poll_delay: isSet(object.max_poll_delay) ? Duration.fromJSON(object.max_poll_delay) : undefined,
      total_poll_timeout: isSet(object.total_poll_timeout) ? Duration.fromJSON(object.total_poll_timeout) : undefined,
    };
  },

  toJSON(message: MethodSettings_LongRunning): unknown {
    const obj: any = {};
    if (message.initial_poll_delay !== undefined) {
      obj.initial_poll_delay = Duration.toJSON(message.initial_poll_delay);
    }
    if (message.poll_delay_multiplier !== undefined && message.poll_delay_multiplier !== 0) {
      obj.poll_delay_multiplier = message.poll_delay_multiplier;
    }
    if (message.max_poll_delay !== undefined) {
      obj.max_poll_delay = Duration.toJSON(message.max_poll_delay);
    }
    if (message.total_poll_timeout !== undefined) {
      obj.total_poll_timeout = Duration.toJSON(message.total_poll_timeout);
    }
    return obj;
  },
};

export const method_signature: Extension<string[]> = {
  number: 1051,
  tag: 8410,
  repeated: true,
  packed: false,
  encode: (value: string[]): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    for (const v of value) {
      const writer = _m0.Writer.create();
      writer.string(v);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): string[] => {
    const values: string[] = [];
    for (const buffer of input) {
      const reader = _m0.Reader.create(buffer);
      values.push(reader.string());
    }

    return values;
  },
};

export const default_host: Extension<string> = {
  number: 1049,
  tag: 8394,
  repeated: false,
  packed: false,
  encode: (value: string): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value !== undefined && value !== "") {
      const writer = _m0.Writer.create();
      writer.string(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): string => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.string();
  },
};

export const oauth_scopes: Extension<string> = {
  number: 1050,
  tag: 8402,
  repeated: false,
  packed: false,
  encode: (value: string): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    if (value !== undefined && value !== "") {
      const writer = _m0.Writer.create();
      writer.string(value);
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): string => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return reader.string();
  },
};

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface Extension<T> {
  number: number;
  tag: number;
  singularTag?: number;
  encode?: (message: T) => Uint8Array[];
  decode?: (tag: number, input: Uint8Array[]) => T;
  repeated: boolean;
  packed: boolean;
}

function fail(message?: string): never {
  throw new Error(message ?? "Failed");
}
