/* eslint-disable */
import _m0 from "protobufjs/minimal";

/**
 * A simple descriptor of a resource type.
 *
 * ResourceDescriptor annotates a resource message (either by means of a
 * protobuf annotation or use in the service config), and associates the
 * resource's schema, the resource type, and the pattern of the resource name.
 *
 * Example:
 *
 *     message Topic {
 *       // Indicates this message defines a resource schema.
 *       // Declares the resource type in the format of {service}/{kind}.
 *       // For Kubernetes resources, the format is {api group}/{kind}.
 *       option (google.api.resource) = {
 *         type: "pubsub.googleapis.com/Topic"
 *         pattern: "projects/{project}/topics/{topic}"
 *       };
 *     }
 *
 * The ResourceDescriptor Yaml config will look like:
 *
 *     resources:
 *     - type: "pubsub.googleapis.com/Topic"
 *       pattern: "projects/{project}/topics/{topic}"
 *
 * Sometimes, resources have multiple patterns, typically because they can
 * live under multiple parents.
 *
 * Example:
 *
 *     message LogEntry {
 *       option (google.api.resource) = {
 *         type: "logging.googleapis.com/LogEntry"
 *         pattern: "projects/{project}/logs/{log}"
 *         pattern: "folders/{folder}/logs/{log}"
 *         pattern: "organizations/{organization}/logs/{log}"
 *         pattern: "billingAccounts/{billing_account}/logs/{log}"
 *       };
 *     }
 *
 * The ResourceDescriptor Yaml config will look like:
 *
 *     resources:
 *     - type: 'logging.googleapis.com/LogEntry'
 *       pattern: "projects/{project}/logs/{log}"
 *       pattern: "folders/{folder}/logs/{log}"
 *       pattern: "organizations/{organization}/logs/{log}"
 *       pattern: "billingAccounts/{billing_account}/logs/{log}"
 */
export interface ResourceDescriptor {
  /**
   * The resource type. It must be in the format of
   * {service_name}/{resource_type_kind}. The `resource_type_kind` must be
   * singular and must not include version numbers.
   *
   * Example: `storage.googleapis.com/Bucket`
   *
   * The value of the resource_type_kind must follow the regular expression
   * /[A-Za-z][a-zA-Z0-9]+/. It should start with an upper case character and
   * should use PascalCase (UpperCamelCase). The maximum number of
   * characters allowed for the `resource_type_kind` is 100.
   */
  type?:
    | string
    | undefined;
  /**
   * Optional. The relative resource name pattern associated with this resource
   * type. The DNS prefix of the full resource name shouldn't be specified here.
   *
   * The path pattern must follow the syntax, which aligns with HTTP binding
   * syntax:
   *
   *     Template = Segment { "/" Segment } ;
   *     Segment = LITERAL | Variable ;
   *     Variable = "{" LITERAL "}" ;
   *
   * Examples:
   *
   *     - "projects/{project}/topics/{topic}"
   *     - "projects/{project}/knowledgeBases/{knowledge_base}"
   *
   * The components in braces correspond to the IDs for each resource in the
   * hierarchy. It is expected that, if multiple patterns are provided,
   * the same component name (e.g. "project") refers to IDs of the same
   * type of resource.
   */
  pattern?:
    | string[]
    | undefined;
  /**
   * Optional. The field on the resource that designates the resource name
   * field. If omitted, this is assumed to be "name".
   */
  name_field?:
    | string
    | undefined;
  /**
   * Optional. The historical or future-looking state of the resource pattern.
   *
   * Example:
   *
   *     // The InspectTemplate message originally only supported resource
   *     // names with organization, and project was added later.
   *     message InspectTemplate {
   *       option (google.api.resource) = {
   *         type: "dlp.googleapis.com/InspectTemplate"
   *         pattern:
   *         "organizations/{organization}/inspectTemplates/{inspect_template}"
   *         pattern: "projects/{project}/inspectTemplates/{inspect_template}"
   *         history: ORIGINALLY_SINGLE_PATTERN
   *       };
   *     }
   */
  history?:
    | ResourceDescriptor_History
    | undefined;
  /**
   * The plural name used in the resource name and permission names, such as
   * 'projects' for the resource name of 'projects/{project}' and the permission
   * name of 'cloudresourcemanager.googleapis.com/projects.get'. It is the same
   * concept of the `plural` field in k8s CRD spec
   * https://kubernetes.io/docs/tasks/access-kubernetes-api/custom-resources/custom-resource-definitions/
   *
   * Note: The plural form is required even for singleton resources. See
   * https://aip.dev/156
   */
  plural?:
    | string
    | undefined;
  /**
   * The same concept of the `singular` field in k8s CRD spec
   * https://kubernetes.io/docs/tasks/access-kubernetes-api/custom-resources/custom-resource-definitions/
   * Such as "project" for the `resourcemanager.googleapis.com/Project` type.
   */
  singular?:
    | string
    | undefined;
  /**
   * Style flag(s) for this resource.
   * These indicate that a resource is expected to conform to a given
   * style. See the specific style flags for additional information.
   */
  style?: ResourceDescriptor_Style[] | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/**
 * A description of the historical or future-looking state of the
 * resource pattern.
 */
export enum ResourceDescriptor_History {
  /** HISTORY_UNSPECIFIED - The "unset" value. */
  HISTORY_UNSPECIFIED = 0,
  /**
   * ORIGINALLY_SINGLE_PATTERN - The resource originally had one pattern and launched as such, and
   * additional patterns were added later.
   */
  ORIGINALLY_SINGLE_PATTERN = 1,
  /**
   * FUTURE_MULTI_PATTERN - The resource has one pattern, but the API owner expects to add more
   * later. (This is the inverse of ORIGINALLY_SINGLE_PATTERN, and prevents
   * that from being necessary once there are multiple patterns.)
   */
  FUTURE_MULTI_PATTERN = 2,
  UNRECOGNIZED = -1,
}

export function resourceDescriptor_HistoryFromJSON(object: any): ResourceDescriptor_History {
  switch (object) {
    case 0:
    case "HISTORY_UNSPECIFIED":
      return ResourceDescriptor_History.HISTORY_UNSPECIFIED;
    case 1:
    case "ORIGINALLY_SINGLE_PATTERN":
      return ResourceDescriptor_History.ORIGINALLY_SINGLE_PATTERN;
    case 2:
    case "FUTURE_MULTI_PATTERN":
      return ResourceDescriptor_History.FUTURE_MULTI_PATTERN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResourceDescriptor_History.UNRECOGNIZED;
  }
}

export function resourceDescriptor_HistoryToJSON(object: ResourceDescriptor_History): string {
  switch (object) {
    case ResourceDescriptor_History.HISTORY_UNSPECIFIED:
      return "HISTORY_UNSPECIFIED";
    case ResourceDescriptor_History.ORIGINALLY_SINGLE_PATTERN:
      return "ORIGINALLY_SINGLE_PATTERN";
    case ResourceDescriptor_History.FUTURE_MULTI_PATTERN:
      return "FUTURE_MULTI_PATTERN";
    case ResourceDescriptor_History.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** A flag representing a specific style that a resource claims to conform to. */
export enum ResourceDescriptor_Style {
  /** STYLE_UNSPECIFIED - The unspecified value. Do not use. */
  STYLE_UNSPECIFIED = 0,
  /**
   * DECLARATIVE_FRIENDLY - This resource is intended to be "declarative-friendly".
   *
   * Declarative-friendly resources must be more strictly consistent, and
   * setting this to true communicates to tools that this resource should
   * adhere to declarative-friendly expectations.
   *
   * Note: This is used by the API linter (linter.aip.dev) to enable
   * additional checks.
   */
  DECLARATIVE_FRIENDLY = 1,
  UNRECOGNIZED = -1,
}

export function resourceDescriptor_StyleFromJSON(object: any): ResourceDescriptor_Style {
  switch (object) {
    case 0:
    case "STYLE_UNSPECIFIED":
      return ResourceDescriptor_Style.STYLE_UNSPECIFIED;
    case 1:
    case "DECLARATIVE_FRIENDLY":
      return ResourceDescriptor_Style.DECLARATIVE_FRIENDLY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResourceDescriptor_Style.UNRECOGNIZED;
  }
}

export function resourceDescriptor_StyleToJSON(object: ResourceDescriptor_Style): string {
  switch (object) {
    case ResourceDescriptor_Style.STYLE_UNSPECIFIED:
      return "STYLE_UNSPECIFIED";
    case ResourceDescriptor_Style.DECLARATIVE_FRIENDLY:
      return "DECLARATIVE_FRIENDLY";
    case ResourceDescriptor_Style.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * Defines a proto annotation that describes a string field that refers to
 * an API resource.
 */
export interface ResourceReference {
  /**
   * The resource type that the annotated field references.
   *
   * Example:
   *
   *     message Subscription {
   *       string topic = 2 [(google.api.resource_reference) = {
   *         type: "pubsub.googleapis.com/Topic"
   *       }];
   *     }
   *
   * Occasionally, a field may reference an arbitrary resource. In this case,
   * APIs use the special value * in their resource reference.
   *
   * Example:
   *
   *     message GetIamPolicyRequest {
   *       string resource = 2 [(google.api.resource_reference) = {
   *         type: "*"
   *       }];
   *     }
   */
  type?:
    | string
    | undefined;
  /**
   * The resource type of a child collection that the annotated field
   * references. This is useful for annotating the `parent` field that
   * doesn't have a fixed resource type.
   *
   * Example:
   *
   *     message ListLogEntriesRequest {
   *       string parent = 1 [(google.api.resource_reference) = {
   *         child_type: "logging.googleapis.com/LogEntry"
   *       };
   *     }
   */
  child_type?: string | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

function createBaseResourceDescriptor(): ResourceDescriptor {
  return {};
}

export const ResourceDescriptor = {
  encode(message: ResourceDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== undefined && message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.pattern !== undefined && message.pattern.length !== 0) {
      for (const v of message.pattern) {
        writer.uint32(18).string(v!);
      }
    }
    if (message.name_field !== undefined && message.name_field !== "") {
      writer.uint32(26).string(message.name_field);
    }
    if (message.history !== undefined && message.history !== 0) {
      writer.uint32(32).int32(message.history);
    }
    if (message.plural !== undefined && message.plural !== "") {
      writer.uint32(42).string(message.plural);
    }
    if (message.singular !== undefined && message.singular !== "") {
      writer.uint32(50).string(message.singular);
    }
    if (message.style !== undefined && message.style.length !== 0) {
      writer.uint32(82).fork();
      for (const v of message.style) {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceDescriptor {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceDescriptor();
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

          if (message.pattern === undefined) {
            message.pattern = [];
          }
          message.pattern!.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name_field = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.history = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.plural = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.singular = reader.string();
          continue;
        case 10:
          if (tag === 80) {
            if (message.style === undefined) {
              message.style = [];
            }
            message.style!.push(reader.int32() as any);

            continue;
          }

          if (tag === 82) {
            if (message.style === undefined) {
              message.style = [];
            }
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.style!.push(reader.int32() as any);
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

  fromJSON(object: any): ResourceDescriptor {
    return {
      type: isSet(object.type) ? String(object.type) : undefined,
      pattern: Array.isArray(object?.pattern) ? object.pattern.map((e: any) => String(e)) : undefined,
      name_field: isSet(object.name_field) ? String(object.name_field) : undefined,
      history: isSet(object.history) ? resourceDescriptor_HistoryFromJSON(object.history) : undefined,
      plural: isSet(object.plural) ? String(object.plural) : undefined,
      singular: isSet(object.singular) ? String(object.singular) : undefined,
      style: Array.isArray(object?.style)
        ? object.style.map((e: any) => resourceDescriptor_StyleFromJSON(e))
        : undefined,
    };
  },

  toJSON(message: ResourceDescriptor): unknown {
    const obj: any = {};
    if (message.type !== undefined && message.type !== "") {
      obj.type = message.type;
    }
    if (message.pattern?.length) {
      obj.pattern = message.pattern;
    }
    if (message.name_field !== undefined && message.name_field !== "") {
      obj.name_field = message.name_field;
    }
    if (message.history !== undefined && message.history !== 0) {
      obj.history = resourceDescriptor_HistoryToJSON(message.history);
    }
    if (message.plural !== undefined && message.plural !== "") {
      obj.plural = message.plural;
    }
    if (message.singular !== undefined && message.singular !== "") {
      obj.singular = message.singular;
    }
    if (message.style?.length) {
      obj.style = message.style.map((e) => resourceDescriptor_StyleToJSON(e));
    }
    return obj;
  },
};

function createBaseResourceReference(): ResourceReference {
  return {};
}

export const ResourceReference = {
  encode(message: ResourceReference, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== undefined && message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.child_type !== undefined && message.child_type !== "") {
      writer.uint32(18).string(message.child_type);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceReference {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceReference();
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

          message.child_type = reader.string();
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

  fromJSON(object: any): ResourceReference {
    return {
      type: isSet(object.type) ? String(object.type) : undefined,
      child_type: isSet(object.child_type) ? String(object.child_type) : undefined,
    };
  },

  toJSON(message: ResourceReference): unknown {
    const obj: any = {};
    if (message.type !== undefined && message.type !== "") {
      obj.type = message.type;
    }
    if (message.child_type !== undefined && message.child_type !== "") {
      obj.child_type = message.child_type;
    }
    return obj;
  },
};

export const resource_reference: Extension<ResourceReference> = {
  number: 1055,
  tag: 8442,
  repeated: false,
  packed: false,
  encode: (value: ResourceReference): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    const writer = _m0.Writer.create();
    ResourceReference.encode(value, writer.fork()).ldelim();
    encoded.push(writer.finish());
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): ResourceReference => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return ResourceReference.decode(reader, reader.uint32());
  },
};

export const resource_definition: Extension<ResourceDescriptor[]> = {
  number: 1053,
  tag: 8426,
  repeated: true,
  packed: false,
  encode: (value: ResourceDescriptor[]): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    for (const v of value) {
      const writer = _m0.Writer.create();
      ResourceDescriptor.encode(v, writer.fork()).ldelim();
      encoded.push(writer.finish());
    }
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): ResourceDescriptor[] => {
    const values: ResourceDescriptor[] = [];
    for (const buffer of input) {
      const reader = _m0.Reader.create(buffer);
      values.push(ResourceDescriptor.decode(reader, reader.uint32()));
    }

    return values;
  },
};

export const resource: Extension<ResourceDescriptor> = {
  number: 1053,
  tag: 8426,
  repeated: false,
  packed: false,
  encode: (value: ResourceDescriptor): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    const writer = _m0.Writer.create();
    ResourceDescriptor.encode(value, writer.fork()).ldelim();
    encoded.push(writer.finish());
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): ResourceDescriptor => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return ResourceDescriptor.decode(reader, reader.uint32());
  },
};

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
