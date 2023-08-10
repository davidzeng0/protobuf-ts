/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Api } from "../protobuf/api";
import { Enum, Type } from "../protobuf/type";
import { UInt32Value } from "../protobuf/wrappers";
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
  name?:
    | string
    | undefined;
  /**
   * The product title for this service, it is the name displayed in Google
   * Cloud Console.
   */
  title?:
    | string
    | undefined;
  /** The Google project that owns this service. */
  producer_project_id?:
    | string
    | undefined;
  /**
   * A unique ID for a specific instance of this message, typically assigned
   * by the client for tracking purpose. Must be no longer than 63 characters
   * and only lower case letters, digits, '.', '_' and '-' are allowed. If
   * empty, the server may choose to generate one instead.
   */
  id?:
    | string
    | undefined;
  /**
   * A list of API interfaces exported by this service. Only the `name` field
   * of the [google.protobuf.Api][google.protobuf.Api] needs to be provided by the configuration
   * author, as the remaining fields will be derived from the IDL during the
   * normalization process. It is an error to specify an API interface here
   * which cannot be resolved against the associated IDL files.
   */
  apis?:
    | Api[]
    | undefined;
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
  types?:
    | Type[]
    | undefined;
  /**
   * A list of all enum types included in this API service.  Enums referenced
   * directly or indirectly by the `apis` are automatically included.  Enums
   * which are not referenced but shall be included should be listed here by
   * name by the configuration author. Example:
   *
   *     enums:
   *     - name: google.someapi.v1.SomeEnum
   */
  enums?:
    | Enum[]
    | undefined;
  /** Additional API documentation. */
  documentation?:
    | Documentation
    | undefined;
  /** API backend configuration. */
  backend?:
    | Backend
    | undefined;
  /** HTTP configuration. */
  http?:
    | Http
    | undefined;
  /** Quota configuration. */
  quota?:
    | Quota
    | undefined;
  /** Auth configuration. */
  authentication?:
    | Authentication
    | undefined;
  /** Context configuration. */
  context?:
    | Context
    | undefined;
  /** Configuration controlling usage of this service. */
  usage?:
    | Usage
    | undefined;
  /**
   * Configuration for network endpoints.  If this is empty, then an endpoint
   * with the same name as the service is automatically generated to service all
   * defined APIs.
   */
  endpoints?:
    | Endpoint[]
    | undefined;
  /** Configuration for the service control plane. */
  control?:
    | Control
    | undefined;
  /** Defines the logs used by this service. */
  logs?:
    | LogDescriptor[]
    | undefined;
  /** Defines the metrics used by this service. */
  metrics?:
    | MetricDescriptor[]
    | undefined;
  /**
   * Defines the monitored resources used by this service. This is required
   * by the [Service.monitoring][google.api.Service.monitoring] and [Service.logging][google.api.Service.logging] configurations.
   */
  monitored_resources?:
    | MonitoredResourceDescriptor[]
    | undefined;
  /** Billing configuration. */
  billing?:
    | Billing
    | undefined;
  /** Logging configuration. */
  logging?:
    | Logging
    | undefined;
  /** Monitoring configuration. */
  monitoring?:
    | Monitoring
    | undefined;
  /** System parameter configuration. */
  system_parameters?:
    | SystemParameters
    | undefined;
  /** Output only. The source information for this configuration if available. */
  source_info?:
    | SourceInfo
    | undefined;
  /**
   * Settings for [Google Cloud Client
   * libraries](https://cloud.google.com/apis/docs/cloud-client-libraries)
   * generated from APIs defined as protocol buffers.
   */
  publishing?:
    | Publishing
    | undefined;
  /**
   * Obsolete. Do not use.
   *
   * This field has no semantic meaning. The service config compiler always
   * sets this field to `3`.
   */
  config_version?: number | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

function createBaseService(): Service {
  return {};
}

export const Service = {
  encode(message: Service, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined && message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.title !== undefined && message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.producer_project_id !== undefined && message.producer_project_id !== "") {
      writer.uint32(178).string(message.producer_project_id);
    }
    if (message.id !== undefined && message.id !== "") {
      writer.uint32(266).string(message.id);
    }
    if (message.apis !== undefined && message.apis.length !== 0) {
      for (const v of message.apis) {
        Api.encode(v!, writer.uint32(26).fork()).ldelim();
      }
    }
    if (message.types !== undefined && message.types.length !== 0) {
      for (const v of message.types) {
        Type.encode(v!, writer.uint32(34).fork()).ldelim();
      }
    }
    if (message.enums !== undefined && message.enums.length !== 0) {
      for (const v of message.enums) {
        Enum.encode(v!, writer.uint32(42).fork()).ldelim();
      }
    }
    if (message.documentation !== undefined) {
      Documentation.encode(message.documentation, writer.uint32(50).fork()).ldelim();
    }
    if (message.backend !== undefined) {
      Backend.encode(message.backend, writer.uint32(66).fork()).ldelim();
    }
    if (message.http !== undefined) {
      Http.encode(message.http, writer.uint32(74).fork()).ldelim();
    }
    if (message.quota !== undefined) {
      Quota.encode(message.quota, writer.uint32(82).fork()).ldelim();
    }
    if (message.authentication !== undefined) {
      Authentication.encode(message.authentication, writer.uint32(90).fork()).ldelim();
    }
    if (message.context !== undefined) {
      Context.encode(message.context, writer.uint32(98).fork()).ldelim();
    }
    if (message.usage !== undefined) {
      Usage.encode(message.usage, writer.uint32(122).fork()).ldelim();
    }
    if (message.endpoints !== undefined && message.endpoints.length !== 0) {
      for (const v of message.endpoints) {
        Endpoint.encode(v!, writer.uint32(146).fork()).ldelim();
      }
    }
    if (message.control !== undefined) {
      Control.encode(message.control, writer.uint32(170).fork()).ldelim();
    }
    if (message.logs !== undefined && message.logs.length !== 0) {
      for (const v of message.logs) {
        LogDescriptor.encode(v!, writer.uint32(186).fork()).ldelim();
      }
    }
    if (message.metrics !== undefined && message.metrics.length !== 0) {
      for (const v of message.metrics) {
        MetricDescriptor.encode(v!, writer.uint32(194).fork()).ldelim();
      }
    }
    if (message.monitored_resources !== undefined && message.monitored_resources.length !== 0) {
      for (const v of message.monitored_resources) {
        MonitoredResourceDescriptor.encode(v!, writer.uint32(202).fork()).ldelim();
      }
    }
    if (message.billing !== undefined) {
      Billing.encode(message.billing, writer.uint32(210).fork()).ldelim();
    }
    if (message.logging !== undefined) {
      Logging.encode(message.logging, writer.uint32(218).fork()).ldelim();
    }
    if (message.monitoring !== undefined) {
      Monitoring.encode(message.monitoring, writer.uint32(226).fork()).ldelim();
    }
    if (message.system_parameters !== undefined) {
      SystemParameters.encode(message.system_parameters, writer.uint32(234).fork()).ldelim();
    }
    if (message.source_info !== undefined) {
      SourceInfo.encode(message.source_info, writer.uint32(298).fork()).ldelim();
    }
    if (message.publishing !== undefined) {
      Publishing.encode(message.publishing, writer.uint32(362).fork()).ldelim();
    }
    if (message.config_version !== undefined) {
      UInt32Value.encode({ value: message.config_version! }, writer.uint32(162).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Service {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseService();
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

          message.title = reader.string();
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.producer_project_id = reader.string();
          continue;
        case 33:
          if (tag !== 266) {
            break;
          }

          message.id = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          if (message.apis === undefined) {
            message.apis = [];
          }
          message.apis!.push(Api.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          if (message.types === undefined) {
            message.types = [];
          }
          message.types!.push(Type.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          if (message.enums === undefined) {
            message.enums = [];
          }
          message.enums!.push(Enum.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.documentation = Documentation.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.backend = Backend.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.http = Http.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.quota = Quota.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.authentication = Authentication.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.context = Context.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.usage = Usage.decode(reader, reader.uint32());
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          if (message.endpoints === undefined) {
            message.endpoints = [];
          }
          message.endpoints!.push(Endpoint.decode(reader, reader.uint32()));
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.control = Control.decode(reader, reader.uint32());
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          if (message.logs === undefined) {
            message.logs = [];
          }
          message.logs!.push(LogDescriptor.decode(reader, reader.uint32()));
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          if (message.metrics === undefined) {
            message.metrics = [];
          }
          message.metrics!.push(MetricDescriptor.decode(reader, reader.uint32()));
          continue;
        case 25:
          if (tag !== 202) {
            break;
          }

          if (message.monitored_resources === undefined) {
            message.monitored_resources = [];
          }
          message.monitored_resources!.push(MonitoredResourceDescriptor.decode(reader, reader.uint32()));
          continue;
        case 26:
          if (tag !== 210) {
            break;
          }

          message.billing = Billing.decode(reader, reader.uint32());
          continue;
        case 27:
          if (tag !== 218) {
            break;
          }

          message.logging = Logging.decode(reader, reader.uint32());
          continue;
        case 28:
          if (tag !== 226) {
            break;
          }

          message.monitoring = Monitoring.decode(reader, reader.uint32());
          continue;
        case 29:
          if (tag !== 234) {
            break;
          }

          message.system_parameters = SystemParameters.decode(reader, reader.uint32());
          continue;
        case 37:
          if (tag !== 298) {
            break;
          }

          message.source_info = SourceInfo.decode(reader, reader.uint32());
          continue;
        case 45:
          if (tag !== 362) {
            break;
          }

          message.publishing = Publishing.decode(reader, reader.uint32());
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.config_version = UInt32Value.decode(reader, reader.uint32()).value;
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

  fromJSON(object: any): Service {
    return {
      name: isSet(object.name) ? String(object.name) : undefined,
      title: isSet(object.title) ? String(object.title) : undefined,
      producer_project_id: isSet(object.producer_project_id) ? String(object.producer_project_id) : undefined,
      id: isSet(object.id) ? String(object.id) : undefined,
      apis: Array.isArray(object?.apis) ? object.apis.map((e: any) => Api.fromJSON(e)) : undefined,
      types: Array.isArray(object?.types) ? object.types.map((e: any) => Type.fromJSON(e)) : undefined,
      enums: Array.isArray(object?.enums) ? object.enums.map((e: any) => Enum.fromJSON(e)) : undefined,
      documentation: isSet(object.documentation) ? Documentation.fromJSON(object.documentation) : undefined,
      backend: isSet(object.backend) ? Backend.fromJSON(object.backend) : undefined,
      http: isSet(object.http) ? Http.fromJSON(object.http) : undefined,
      quota: isSet(object.quota) ? Quota.fromJSON(object.quota) : undefined,
      authentication: isSet(object.authentication) ? Authentication.fromJSON(object.authentication) : undefined,
      context: isSet(object.context) ? Context.fromJSON(object.context) : undefined,
      usage: isSet(object.usage) ? Usage.fromJSON(object.usage) : undefined,
      endpoints: Array.isArray(object?.endpoints) ? object.endpoints.map((e: any) => Endpoint.fromJSON(e)) : undefined,
      control: isSet(object.control) ? Control.fromJSON(object.control) : undefined,
      logs: Array.isArray(object?.logs) ? object.logs.map((e: any) => LogDescriptor.fromJSON(e)) : undefined,
      metrics: Array.isArray(object?.metrics)
        ? object.metrics.map((e: any) => MetricDescriptor.fromJSON(e))
        : undefined,
      monitored_resources: Array.isArray(object?.monitored_resources)
        ? object.monitored_resources.map((e: any) => MonitoredResourceDescriptor.fromJSON(e))
        : undefined,
      billing: isSet(object.billing) ? Billing.fromJSON(object.billing) : undefined,
      logging: isSet(object.logging) ? Logging.fromJSON(object.logging) : undefined,
      monitoring: isSet(object.monitoring) ? Monitoring.fromJSON(object.monitoring) : undefined,
      system_parameters: isSet(object.system_parameters)
        ? SystemParameters.fromJSON(object.system_parameters)
        : undefined,
      source_info: isSet(object.source_info) ? SourceInfo.fromJSON(object.source_info) : undefined,
      publishing: isSet(object.publishing) ? Publishing.fromJSON(object.publishing) : undefined,
      config_version: isSet(object.config_version) ? Number(object.config_version) : undefined,
    };
  },

  toJSON(message: Service): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.title !== undefined && message.title !== "") {
      obj.title = message.title;
    }
    if (message.producer_project_id !== undefined && message.producer_project_id !== "") {
      obj.producer_project_id = message.producer_project_id;
    }
    if (message.id !== undefined && message.id !== "") {
      obj.id = message.id;
    }
    if (message.apis?.length) {
      obj.apis = message.apis.map((e) => Api.toJSON(e));
    }
    if (message.types?.length) {
      obj.types = message.types.map((e) => Type.toJSON(e));
    }
    if (message.enums?.length) {
      obj.enums = message.enums.map((e) => Enum.toJSON(e));
    }
    if (message.documentation !== undefined) {
      obj.documentation = Documentation.toJSON(message.documentation);
    }
    if (message.backend !== undefined) {
      obj.backend = Backend.toJSON(message.backend);
    }
    if (message.http !== undefined) {
      obj.http = Http.toJSON(message.http);
    }
    if (message.quota !== undefined) {
      obj.quota = Quota.toJSON(message.quota);
    }
    if (message.authentication !== undefined) {
      obj.authentication = Authentication.toJSON(message.authentication);
    }
    if (message.context !== undefined) {
      obj.context = Context.toJSON(message.context);
    }
    if (message.usage !== undefined) {
      obj.usage = Usage.toJSON(message.usage);
    }
    if (message.endpoints?.length) {
      obj.endpoints = message.endpoints.map((e) => Endpoint.toJSON(e));
    }
    if (message.control !== undefined) {
      obj.control = Control.toJSON(message.control);
    }
    if (message.logs?.length) {
      obj.logs = message.logs.map((e) => LogDescriptor.toJSON(e));
    }
    if (message.metrics?.length) {
      obj.metrics = message.metrics.map((e) => MetricDescriptor.toJSON(e));
    }
    if (message.monitored_resources?.length) {
      obj.monitored_resources = message.monitored_resources.map((e) => MonitoredResourceDescriptor.toJSON(e));
    }
    if (message.billing !== undefined) {
      obj.billing = Billing.toJSON(message.billing);
    }
    if (message.logging !== undefined) {
      obj.logging = Logging.toJSON(message.logging);
    }
    if (message.monitoring !== undefined) {
      obj.monitoring = Monitoring.toJSON(message.monitoring);
    }
    if (message.system_parameters !== undefined) {
      obj.system_parameters = SystemParameters.toJSON(message.system_parameters);
    }
    if (message.source_info !== undefined) {
      obj.source_info = SourceInfo.toJSON(message.source_info);
    }
    if (message.publishing !== undefined) {
      obj.publishing = Publishing.toJSON(message.publishing);
    }
    if (message.config_version !== undefined) {
      obj.config_version = message.config_version;
    }
    return obj;
  },
};

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
