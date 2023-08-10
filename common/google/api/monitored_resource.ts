/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Struct } from "../protobuf/struct";
import { LabelDescriptor } from "./label";
import { LaunchStage, launchStageFromJSON, launchStageToJSON } from "./launch_stage";

/**
 * An object that describes the schema of a [MonitoredResource][google.api.MonitoredResource] object using a
 * type name and a set of labels.  For example, the monitored resource
 * descriptor for Google Compute Engine VM instances has a type of
 * `"gce_instance"` and specifies the use of the labels `"instance_id"` and
 * `"zone"` to identify particular VM instances.
 *
 * Different APIs can support different monitored resource types. APIs generally
 * provide a `list` method that returns the monitored resource descriptors used
 * by the API.
 */
export interface MonitoredResourceDescriptor {
  /**
   * Optional. The resource name of the monitored resource descriptor:
   * `"projects/{project_id}/monitoredResourceDescriptors/{type}"` where
   * {type} is the value of the `type` field in this object and
   * {project_id} is a project ID that provides API-specific context for
   * accessing the type.  APIs that do not use project information can use the
   * resource name format `"monitoredResourceDescriptors/{type}"`.
   */
  name?:
    | string
    | undefined;
  /**
   * Required. The monitored resource type. For example, the type
   * `"cloudsql_database"` represents databases in Google Cloud SQL.
   *  For a list of types, see [Monitoring resource
   *  types](https://cloud.google.com/monitoring/api/resources)
   * and [Logging resource
   * types](https://cloud.google.com/logging/docs/api/v2/resource-list).
   */
  type?:
    | string
    | undefined;
  /**
   * Optional. A concise name for the monitored resource type that might be
   * displayed in user interfaces. It should be a Title Cased Noun Phrase,
   * without any article or other determiners. For example,
   * `"Google Cloud SQL Database"`.
   */
  display_name?:
    | string
    | undefined;
  /**
   * Optional. A detailed description of the monitored resource type that might
   * be used in documentation.
   */
  description?:
    | string
    | undefined;
  /**
   * Required. A set of labels used to describe instances of this monitored
   * resource type. For example, an individual Google Cloud SQL database is
   * identified by values for the labels `"database_id"` and `"zone"`.
   */
  labels?:
    | LabelDescriptor[]
    | undefined;
  /** Optional. The launch stage of the monitored resource definition. */
  launch_stage?: LaunchStage | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/**
 * An object representing a resource that can be used for monitoring, logging,
 * billing, or other purposes. Examples include virtual machine instances,
 * databases, and storage devices such as disks. The `type` field identifies a
 * [MonitoredResourceDescriptor][google.api.MonitoredResourceDescriptor] object that describes the resource's
 * schema. Information in the `labels` field identifies the actual resource and
 * its attributes according to the schema. For example, a particular Compute
 * Engine VM instance could be represented by the following object, because the
 * [MonitoredResourceDescriptor][google.api.MonitoredResourceDescriptor] for `"gce_instance"` has labels
 * `"project_id"`, `"instance_id"` and `"zone"`:
 *
 *     { "type": "gce_instance",
 *       "labels": { "project_id": "my-project",
 *                   "instance_id": "12345678901234",
 *                   "zone": "us-central1-a" }}
 */
export interface MonitoredResource {
  /**
   * Required. The monitored resource type. This field must match
   * the `type` field of a [MonitoredResourceDescriptor][google.api.MonitoredResourceDescriptor] object. For
   * example, the type of a Compute Engine VM instance is `gce_instance`.
   * Some descriptors include the service name in the type; for example,
   * the type of a Datastream stream is `datastream.googleapis.com/Stream`.
   */
  type?:
    | string
    | undefined;
  /**
   * Required. Values for all of the labels listed in the associated monitored
   * resource descriptor. For example, Compute Engine VM instances use the
   * labels `"project_id"`, `"instance_id"`, and `"zone"`.
   */
  labels?: Map<string, string> | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

export interface MonitoredResource_LabelsEntry {
  key: string;
  value: string;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/**
 * Auxiliary metadata for a [MonitoredResource][google.api.MonitoredResource] object.
 * [MonitoredResource][google.api.MonitoredResource] objects contain the minimum set of information to
 * uniquely identify a monitored resource instance. There is some other useful
 * auxiliary metadata. Monitoring and Logging use an ingestion
 * pipeline to extract metadata for cloud resources of all types, and store
 * the metadata in this message.
 */
export interface MonitoredResourceMetadata {
  /**
   * Output only. Values for predefined system metadata labels.
   * System labels are a kind of metadata extracted by Google, including
   * "machine_image", "vpc", "subnet_id",
   * "security_group", "name", etc.
   * System label values can be only strings, Boolean values, or a list of
   * strings. For example:
   *
   *     { "name": "my-test-instance",
   *       "security_group": ["a", "b", "c"],
   *       "spot_instance": false }
   */
  system_labels?:
    | { [key: string]: any }
    | undefined;
  /** Output only. A map of user-defined metadata labels. */
  user_labels?: Map<string, string> | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

export interface MonitoredResourceMetadata_UserLabelsEntry {
  key: string;
  value: string;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

function createBaseMonitoredResourceDescriptor(): MonitoredResourceDescriptor {
  return {};
}

export const MonitoredResourceDescriptor = {
  encode(message: MonitoredResourceDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined && message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    if (message.type !== undefined && message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.display_name !== undefined && message.display_name !== "") {
      writer.uint32(18).string(message.display_name);
    }
    if (message.description !== undefined && message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.labels !== undefined && message.labels.length !== 0) {
      for (const v of message.labels) {
        LabelDescriptor.encode(v!, writer.uint32(34).fork()).ldelim();
      }
    }
    if (message.launch_stage !== undefined && message.launch_stage !== 0) {
      writer.uint32(56).int32(message.launch_stage);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MonitoredResourceDescriptor {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMonitoredResourceDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 5:
          if (tag !== 42) {
            break;
          }

          message.name = reader.string();
          continue;
        case 1:
          if (tag !== 10) {
            break;
          }

          message.type = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.display_name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.description = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          if (message.labels === undefined) {
            message.labels = [];
          }
          message.labels!.push(LabelDescriptor.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.launch_stage = reader.int32() as any;
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

  fromJSON(object: any): MonitoredResourceDescriptor {
    return {
      name: isSet(object.name) ? String(object.name) : undefined,
      type: isSet(object.type) ? String(object.type) : undefined,
      display_name: isSet(object.display_name) ? String(object.display_name) : undefined,
      description: isSet(object.description) ? String(object.description) : undefined,
      labels: Array.isArray(object?.labels) ? object.labels.map((e: any) => LabelDescriptor.fromJSON(e)) : undefined,
      launch_stage: isSet(object.launch_stage) ? launchStageFromJSON(object.launch_stage) : undefined,
    };
  },

  toJSON(message: MonitoredResourceDescriptor): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.type !== undefined && message.type !== "") {
      obj.type = message.type;
    }
    if (message.display_name !== undefined && message.display_name !== "") {
      obj.display_name = message.display_name;
    }
    if (message.description !== undefined && message.description !== "") {
      obj.description = message.description;
    }
    if (message.labels?.length) {
      obj.labels = message.labels.map((e) => LabelDescriptor.toJSON(e));
    }
    if (message.launch_stage !== undefined && message.launch_stage !== 0) {
      obj.launch_stage = launchStageToJSON(message.launch_stage);
    }
    return obj;
  },
};

function createBaseMonitoredResource(): MonitoredResource {
  return {};
}

export const MonitoredResource = {
  encode(message: MonitoredResource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== undefined && message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    (message.labels || new Map()).forEach((value, key) => {
      MonitoredResource_LabelsEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim();
    });
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MonitoredResource {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMonitoredResource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.type = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          const entry2 = MonitoredResource_LabelsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            if (message.labels === undefined) {
              message.labels = new Map();
            }
            message.labels!.set(entry2.key, entry2.value);
          }
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

  fromJSON(object: any): MonitoredResource {
    return {
      type: isSet(object.type) ? String(object.type) : undefined,
      labels: isObject(object.labels)
        ? Object.entries(object.labels).reduce<Map<string, string>>((acc, [key, value]) => {
          acc.set(key, String(value));
          return acc;
        }, new Map())
        : undefined,
    };
  },

  toJSON(message: MonitoredResource): unknown {
    const obj: any = {};
    if (message.type !== undefined && message.type !== "") {
      obj.type = message.type;
    }
    if (message.labels?.size) {
      obj.labels = {};
      message.labels.forEach((v, k) => {
        obj.labels[k] = v;
      });
    }
    return obj;
  },
};

function createBaseMonitoredResource_LabelsEntry(): MonitoredResource_LabelsEntry {
  return { key: "", value: "" };
}

export const MonitoredResource_LabelsEntry = {
  encode(message: MonitoredResource_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MonitoredResource_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMonitoredResource_LabelsEntry();
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

  fromJSON(object: any): MonitoredResource_LabelsEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: MonitoredResource_LabelsEntry): unknown {
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

function createBaseMonitoredResourceMetadata(): MonitoredResourceMetadata {
  return {};
}

export const MonitoredResourceMetadata = {
  encode(message: MonitoredResourceMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.system_labels !== undefined) {
      Struct.encode(Struct.wrap(message.system_labels), writer.uint32(10).fork()).ldelim();
    }
    (message.user_labels || new Map()).forEach((value, key) => {
      MonitoredResourceMetadata_UserLabelsEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim();
    });
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MonitoredResourceMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMonitoredResourceMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.system_labels = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          const entry2 = MonitoredResourceMetadata_UserLabelsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            if (message.user_labels === undefined) {
              message.user_labels = new Map();
            }
            message.user_labels!.set(entry2.key, entry2.value);
          }
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

  fromJSON(object: any): MonitoredResourceMetadata {
    return {
      system_labels: isObject(object.system_labels) ? object.system_labels : undefined,
      user_labels: isObject(object.user_labels)
        ? Object.entries(object.user_labels).reduce<Map<string, string>>((acc, [key, value]) => {
          acc.set(key, String(value));
          return acc;
        }, new Map())
        : undefined,
    };
  },

  toJSON(message: MonitoredResourceMetadata): unknown {
    const obj: any = {};
    if (message.system_labels !== undefined) {
      obj.system_labels = message.system_labels;
    }
    if (message.user_labels?.size) {
      obj.user_labels = {};
      message.user_labels.forEach((v, k) => {
        obj.user_labels[k] = v;
      });
    }
    return obj;
  },
};

function createBaseMonitoredResourceMetadata_UserLabelsEntry(): MonitoredResourceMetadata_UserLabelsEntry {
  return { key: "", value: "" };
}

export const MonitoredResourceMetadata_UserLabelsEntry = {
  encode(message: MonitoredResourceMetadata_UserLabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MonitoredResourceMetadata_UserLabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMonitoredResourceMetadata_UserLabelsEntry();
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

  fromJSON(object: any): MonitoredResourceMetadata_UserLabelsEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: MonitoredResourceMetadata_UserLabelsEntry): unknown {
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
