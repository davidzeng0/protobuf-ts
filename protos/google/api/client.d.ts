import _m0 from "protobufjs/minimal";
import { Duration } from "../protobuf/duration";
import { LaunchStage } from "./launch_stage";
/**
 * The organization for which the client libraries are being published.
 * Affects the url where generated docs are published, etc.
 */
export declare enum ClientLibraryOrganization {
    /** CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED - Not useful. */
    CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED = "CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED",
    /** CLOUD - Google Cloud Platform Org. */
    CLOUD = "CLOUD",
    /** ADS - Ads (Advertising) Org. */
    ADS = "ADS",
    /** PHOTOS - Photos Org. */
    PHOTOS = "PHOTOS",
    /** STREET_VIEW - Street View Org. */
    STREET_VIEW = "STREET_VIEW",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function clientLibraryOrganizationFromJSON(object: any): ClientLibraryOrganization;
export declare function clientLibraryOrganizationToJSON(object: ClientLibraryOrganization): string;
export declare function clientLibraryOrganizationToNumber(object: ClientLibraryOrganization): number;
/** To where should client libraries be published? */
export declare enum ClientLibraryDestination {
    /**
     * CLIENT_LIBRARY_DESTINATION_UNSPECIFIED - Client libraries will neither be generated nor published to package
     * managers.
     */
    CLIENT_LIBRARY_DESTINATION_UNSPECIFIED = "CLIENT_LIBRARY_DESTINATION_UNSPECIFIED",
    /**
     * GITHUB - Generate the client library in a repo under github.com/googleapis,
     * but don't publish it to package managers.
     */
    GITHUB = "GITHUB",
    /** PACKAGE_MANAGER - Publish the library to package managers like nuget.org and npmjs.com. */
    PACKAGE_MANAGER = "PACKAGE_MANAGER",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function clientLibraryDestinationFromJSON(object: any): ClientLibraryDestination;
export declare function clientLibraryDestinationToJSON(object: ClientLibraryDestination): string;
export declare function clientLibraryDestinationToNumber(object: ClientLibraryDestination): number;
/** Required information for every language. */
export interface CommonLanguageSettings {
    /**
     * Link to automatically generated reference documentation.  Example:
     * https://cloud.google.com/nodejs/docs/reference/asset/latest
     *
     * @deprecated
     */
    reference_docs_uri?: string | undefined;
    /** The destination where API teams want this client library to be published. */
    destinations?: ClientLibraryDestination[] | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
/** Details about how and where to publish client libraries. */
export interface ClientLibrarySettings {
    /** Version of the API to apply these settings to. */
    version?: string | undefined;
    /** Launch stage of this version of the API. */
    launch_stage?: LaunchStage | undefined;
    /**
     * When using transport=rest, the client request will encode enums as
     * numbers rather than strings.
     */
    rest_numeric_enums?: boolean | undefined;
    /** Settings for legacy Java features, supported in the Service YAML. */
    java_settings?: JavaSettings | undefined;
    /** Settings for C++ client libraries. */
    cpp_settings?: CppSettings | undefined;
    /** Settings for PHP client libraries. */
    php_settings?: PhpSettings | undefined;
    /** Settings for Python client libraries. */
    python_settings?: PythonSettings | undefined;
    /** Settings for Node client libraries. */
    node_settings?: NodeSettings | undefined;
    /** Settings for .NET client libraries. */
    dotnet_settings?: DotnetSettings | undefined;
    /** Settings for Ruby client libraries. */
    ruby_settings?: RubySettings | undefined;
    /** Settings for Go client libraries. */
    go_settings?: GoSettings | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
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
    method_settings?: MethodSettings[] | undefined;
    /**
     * Link to a place that API users can report issues.  Example:
     * https://issuetracker.google.com/issues/new?component=190865&template=1161103
     */
    new_issue_uri?: string | undefined;
    /**
     * Link to product home page.  Example:
     * https://cloud.google.com/asset-inventory/docs/overview
     */
    documentation_uri?: string | undefined;
    /**
     * Used as a tracking tag when collecting data about the APIs developer
     * relations artifacts like docs, packages delivered to package managers,
     * etc.  Example: "speech".
     */
    api_short_name?: string | undefined;
    /** GitHub label to apply to issues and pull requests opened for this API. */
    github_label?: string | undefined;
    /**
     * GitHub teams to be added to CODEOWNERS in the directory in GitHub
     * containing source code for the client libraries for this API.
     */
    codeowner_github_teams?: string[] | undefined;
    /**
     * A prefix used in sample code when demarking regions to be included in
     * documentation.
     */
    doc_tag_prefix?: string | undefined;
    /** For whom the client library is being published. */
    organization?: ClientLibraryOrganization | undefined;
    /**
     * Client library settings.  If the same version string appears multiple
     * times in this list, then the last one wins.  Settings from earlier
     * settings with the same version string are discarded.
     */
    library_settings?: ClientLibrarySettings[] | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
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
    library_package?: string | undefined;
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
    service_class_names?: Map<string, string> | undefined;
    /** Some settings. */
    common?: CommonLanguageSettings | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
export interface JavaSettings_ServiceClassNamesEntry {
    key: string;
    value: string;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
/** Settings for C++ client libraries. */
export interface CppSettings {
    /** Some settings. */
    common?: CommonLanguageSettings | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
/** Settings for Php client libraries. */
export interface PhpSettings {
    /** Some settings. */
    common?: CommonLanguageSettings | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
/** Settings for Python client libraries. */
export interface PythonSettings {
    /** Some settings. */
    common?: CommonLanguageSettings | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
/** Settings for Node client libraries. */
export interface NodeSettings {
    /** Some settings. */
    common?: CommonLanguageSettings | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
/** Settings for Dotnet client libraries. */
export interface DotnetSettings {
    /** Some settings. */
    common?: CommonLanguageSettings | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
/** Settings for Ruby client libraries. */
export interface RubySettings {
    /** Some settings. */
    common?: CommonLanguageSettings | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
/** Settings for Go client libraries. */
export interface GoSettings {
    /** Some settings. */
    common?: CommonLanguageSettings | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
/** Describes the generator configuration for a method. */
export interface MethodSettings {
    /**
     * The fully qualified name of the method, for which the options below apply.
     * This is used to find the method to apply the options.
     */
    selector?: string | undefined;
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
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
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
    initial_poll_delay?: Duration | undefined;
    /**
     * Multiplier to gradually increase delay between subsequent polls until it
     * reaches max_poll_delay.
     * Default value: 1.5.
     */
    poll_delay_multiplier?: number | undefined;
    /**
     * Maximum time between two subsequent poll requests.
     * Default value: 45 seconds.
     */
    max_poll_delay?: Duration | undefined;
    /**
     * Total polling timeout.
     * Default value: 5 minutes.
     */
    total_poll_timeout?: Duration | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
export declare const CommonLanguageSettings: {
    encode(message: CommonLanguageSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CommonLanguageSettings;
    fromJSON(object: any): CommonLanguageSettings;
    toJSON(message: CommonLanguageSettings): unknown;
};
export declare const ClientLibrarySettings: {
    encode(message: ClientLibrarySettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClientLibrarySettings;
    fromJSON(object: any): ClientLibrarySettings;
    toJSON(message: ClientLibrarySettings): unknown;
};
export declare const Publishing: {
    encode(message: Publishing, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Publishing;
    fromJSON(object: any): Publishing;
    toJSON(message: Publishing): unknown;
};
export declare const JavaSettings: {
    encode(message: JavaSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): JavaSettings;
    fromJSON(object: any): JavaSettings;
    toJSON(message: JavaSettings): unknown;
};
export declare const JavaSettings_ServiceClassNamesEntry: {
    encode(message: JavaSettings_ServiceClassNamesEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): JavaSettings_ServiceClassNamesEntry;
    fromJSON(object: any): JavaSettings_ServiceClassNamesEntry;
    toJSON(message: JavaSettings_ServiceClassNamesEntry): unknown;
};
export declare const CppSettings: {
    encode(message: CppSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CppSettings;
    fromJSON(object: any): CppSettings;
    toJSON(message: CppSettings): unknown;
};
export declare const PhpSettings: {
    encode(message: PhpSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PhpSettings;
    fromJSON(object: any): PhpSettings;
    toJSON(message: PhpSettings): unknown;
};
export declare const PythonSettings: {
    encode(message: PythonSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PythonSettings;
    fromJSON(object: any): PythonSettings;
    toJSON(message: PythonSettings): unknown;
};
export declare const NodeSettings: {
    encode(message: NodeSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NodeSettings;
    fromJSON(object: any): NodeSettings;
    toJSON(message: NodeSettings): unknown;
};
export declare const DotnetSettings: {
    encode(message: DotnetSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DotnetSettings;
    fromJSON(object: any): DotnetSettings;
    toJSON(message: DotnetSettings): unknown;
};
export declare const RubySettings: {
    encode(message: RubySettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RubySettings;
    fromJSON(object: any): RubySettings;
    toJSON(message: RubySettings): unknown;
};
export declare const GoSettings: {
    encode(message: GoSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GoSettings;
    fromJSON(object: any): GoSettings;
    toJSON(message: GoSettings): unknown;
};
export declare const MethodSettings: {
    encode(message: MethodSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MethodSettings;
    fromJSON(object: any): MethodSettings;
    toJSON(message: MethodSettings): unknown;
};
export declare const MethodSettings_LongRunning: {
    encode(message: MethodSettings_LongRunning, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MethodSettings_LongRunning;
    fromJSON(object: any): MethodSettings_LongRunning;
    toJSON(message: MethodSettings_LongRunning): unknown;
};
export declare const method_signature: Extension<string[]>;
export declare const default_host: Extension<string>;
export declare const oauth_scopes: Extension<string>;
export interface Extension<T> {
    number: number;
    tag: number;
    singularTag?: number;
    encode?: (message: T) => Uint8Array[];
    decode?: (tag: number, input: Uint8Array[]) => T;
    repeated: boolean;
    packed: boolean;
}
