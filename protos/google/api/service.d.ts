import _m0 from "protobufjs/minimal";
import { Api } from "../protobuf/api";
import { Enum, Type } from "../protobuf/type";
import { Authentication } from "./auth";
import { Backend } from "./backend";
import { Billing } from "./billing";
import { Publishing } from "./client";
import { Context } from "./context";
import { Control } from "./control";
import { Documentation } from "./documentation";
import { Endpoint } from "./endpoint";
import { Http } from "./http";
import { LogDescriptor } from "./log";
import { Logging } from "./logging";
import { MetricDescriptor } from "./metric";
import { MonitoredResourceDescriptor } from "./monitored_resource";
import { Monitoring } from "./monitoring";
import { Quota } from "./quota";
import { SourceInfo } from "./source_info";
import { SystemParameters } from "./system_parameter";
import { Usage } from "./usage";
/**
 * `Service` is the root object of Google API service configuration (service
 * config). It describes the basic information about a logical service,
 * such as the service name and the user-facing title, and delegates other
 * aspects to sub-sections. Each sub-section is either a proto message or a
 * repeated proto message that configures a specific aspect, such as auth.
 * For more information, see each proto message definition.
 *
 * Example:
 *
 *     type: google.api.Service
 *     name: calendar.googleapis.com
 *     title: Google Calendar API
 *     apis:
 *     - name: google.calendar.v3.Calendar
 *
 *     visibility:
 *       rules:
 *       - selector: "google.calendar.v3.*"
 *         restriction: PREVIEW
 *     backend:
 *       rules:
 *       - selector: "google.calendar.v3.*"
 *         address: calendar.example.com
 *
 *     authentication:
 *       providers:
 *       - id: google_calendar_auth
 *         jwks_uri: https://www.googleapis.com/oauth2/v1/certs
 *         issuer: https://securetoken.google.com
 *       rules:
 *       - selector: "*"
 *         requirements:
 *           provider_id: google_calendar_auth
 */
export interface Service {
    /**
     * The service name, which is a DNS-like logical identifier for the
     * service, such as `calendar.googleapis.com`. The service name
     * typically goes through DNS verification to make sure the owner
     * of the service also owns the DNS name.
     */
    name?: string | undefined;
    /**
     * The product title for this service, it is the name displayed in Google
     * Cloud Console.
     */
    title?: string | undefined;
    /** The Google project that owns this service. */
    producer_project_id?: string | undefined;
    /**
     * A unique ID for a specific instance of this message, typically assigned
     * by the client for tracking purpose. Must be no longer than 63 characters
     * and only lower case letters, digits, '.', '_' and '-' are allowed. If
     * empty, the server may choose to generate one instead.
     */
    id?: string | undefined;
    /**
     * A list of API interfaces exported by this service. Only the `name` field
     * of the [google.protobuf.Api][google.protobuf.Api] needs to be provided by the configuration
     * author, as the remaining fields will be derived from the IDL during the
     * normalization process. It is an error to specify an API interface here
     * which cannot be resolved against the associated IDL files.
     */
    apis?: Api[] | undefined;
    /**
     * A list of all proto message types included in this API service.
     * Types referenced directly or indirectly by the `apis` are automatically
     * included.  Messages which are not referenced but shall be included, such as
     * types used by the `google.protobuf.Any` type, should be listed here by
     * name by the configuration author. Example:
     *
     *     types:
     *     - name: google.protobuf.Int32
     */
    types?: Type[] | undefined;
    /**
     * A list of all enum types included in this API service.  Enums referenced
     * directly or indirectly by the `apis` are automatically included.  Enums
     * which are not referenced but shall be included should be listed here by
     * name by the configuration author. Example:
     *
     *     enums:
     *     - name: google.someapi.v1.SomeEnum
     */
    enums?: Enum[] | undefined;
    /** Additional API documentation. */
    documentation?: Documentation | undefined;
    /** API backend configuration. */
    backend?: Backend | undefined;
    /** HTTP configuration. */
    http?: Http | undefined;
    /** Quota configuration. */
    quota?: Quota | undefined;
    /** Auth configuration. */
    authentication?: Authentication | undefined;
    /** Context configuration. */
    context?: Context | undefined;
    /** Configuration controlling usage of this service. */
    usage?: Usage | undefined;
    /**
     * Configuration for network endpoints.  If this is empty, then an endpoint
     * with the same name as the service is automatically generated to service all
     * defined APIs.
     */
    endpoints?: Endpoint[] | undefined;
    /** Configuration for the service control plane. */
    control?: Control | undefined;
    /** Defines the logs used by this service. */
    logs?: LogDescriptor[] | undefined;
    /** Defines the metrics used by this service. */
    metrics?: MetricDescriptor[] | undefined;
    /**
     * Defines the monitored resources used by this service. This is required
     * by the [Service.monitoring][google.api.Service.monitoring] and [Service.logging][google.api.Service.logging] configurations.
     */
    monitored_resources?: MonitoredResourceDescriptor[] | undefined;
    /** Billing configuration. */
    billing?: Billing | undefined;
    /** Logging configuration. */
    logging?: Logging | undefined;
    /** Monitoring configuration. */
    monitoring?: Monitoring | undefined;
    /** System parameter configuration. */
    system_parameters?: SystemParameters | undefined;
    /** Output only. The source information for this configuration if available. */
    source_info?: SourceInfo | undefined;
    /**
     * Settings for [Google Cloud Client
     * libraries](https://cloud.google.com/apis/docs/cloud-client-libraries)
     * generated from APIs defined as protocol buffers.
     */
    publishing?: Publishing | undefined;
    /**
     * Obsolete. Do not use.
     *
     * This field has no semantic meaning. The service config compiler always
     * sets this field to `3`.
     */
    config_version?: number | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
export declare const Service: {
    encode(message: Service, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Service;
    fromJSON(object: any): Service;
    toJSON(message: Service): unknown;
};
