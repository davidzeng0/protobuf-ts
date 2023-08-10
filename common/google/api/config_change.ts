/* eslint-disable */
import _m0 from "protobufjs/minimal";

/**
 * Classifies set of possible modifications to an object in the service
 * configuration.
 */
export enum ChangeType {
  /** CHANGE_TYPE_UNSPECIFIED - No value was provided. */
  CHANGE_TYPE_UNSPECIFIED = 0,
  /**
   * ADDED - The changed object exists in the 'new' service configuration, but not
   * in the 'old' service configuration.
   */
  ADDED = 1,
  /**
   * REMOVED - The changed object exists in the 'old' service configuration, but not
   * in the 'new' service configuration.
   */
  REMOVED = 2,
  /**
   * MODIFIED - The changed object exists in both service configurations, but its value
   * is different.
   */
  MODIFIED = 3,
  UNRECOGNIZED = -1,
}

export function changeTypeFromJSON(object: any): ChangeType {
  switch (object) {
    case 0:
    case "CHANGE_TYPE_UNSPECIFIED":
      return ChangeType.CHANGE_TYPE_UNSPECIFIED;
    case 1:
    case "ADDED":
      return ChangeType.ADDED;
    case 2:
    case "REMOVED":
      return ChangeType.REMOVED;
    case 3:
    case "MODIFIED":
      return ChangeType.MODIFIED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ChangeType.UNRECOGNIZED;
  }
}

export function changeTypeToJSON(object: ChangeType): string {
  switch (object) {
    case ChangeType.CHANGE_TYPE_UNSPECIFIED:
      return "CHANGE_TYPE_UNSPECIFIED";
    case ChangeType.ADDED:
      return "ADDED";
    case ChangeType.REMOVED:
      return "REMOVED";
    case ChangeType.MODIFIED:
      return "MODIFIED";
    case ChangeType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * Output generated from semantically comparing two versions of a service
 * configuration.
 *
 * Includes detailed information about a field that have changed with
 * applicable advice about potential consequences for the change, such as
 * backwards-incompatibility.
 */
export interface ConfigChange {
  /**
   * Object hierarchy path to the change, with levels separated by a '.'
   * character. For repeated fields, an applicable unique identifier field is
   * used for the index (usually selector, name, or id). For maps, the term
   * 'key' is used. If the field has no unique identifier, the numeric index
   * is used.
   * Examples:
   * - visibility.rules[selector=="google.LibraryService.ListBooks"].restriction
   * - quota.metric_rules[selector=="google"].metric_costs[key=="reads"].value
   * - logging.producer_destinations[0]
   */
  element?:
    | string
    | undefined;
  /**
   * Value of the changed object in the old Service configuration,
   * in JSON format. This field will not be populated if ChangeType == ADDED.
   */
  old_value?:
    | string
    | undefined;
  /**
   * Value of the changed object in the new Service configuration,
   * in JSON format. This field will not be populated if ChangeType == REMOVED.
   */
  new_value?:
    | string
    | undefined;
  /** The type for this change, either ADDED, REMOVED, or MODIFIED. */
  change_type?:
    | ChangeType
    | undefined;
  /**
   * Collection of advice provided for this change, useful for determining the
   * possible impact of this change.
   */
  advices?: Advice[] | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/**
 * Generated advice about this change, used for providing more
 * information about how a change will affect the existing service.
 */
export interface Advice {
  /**
   * Useful description for why this advice was applied and what actions should
   * be taken to mitigate any implied risks.
   */
  description?: string | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

function createBaseConfigChange(): ConfigChange {
  return {};
}

export const ConfigChange = {
  encode(message: ConfigChange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.element !== undefined && message.element !== "") {
      writer.uint32(10).string(message.element);
    }
    if (message.old_value !== undefined && message.old_value !== "") {
      writer.uint32(18).string(message.old_value);
    }
    if (message.new_value !== undefined && message.new_value !== "") {
      writer.uint32(26).string(message.new_value);
    }
    if (message.change_type !== undefined && message.change_type !== 0) {
      writer.uint32(32).int32(message.change_type);
    }
    if (message.advices !== undefined && message.advices.length !== 0) {
      for (const v of message.advices) {
        Advice.encode(v!, writer.uint32(42).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigChange {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigChange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.element = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.old_value = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.new_value = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.change_type = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          if (message.advices === undefined) {
            message.advices = [];
          }
          message.advices!.push(Advice.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ConfigChange {
    return {
      element: isSet(object.element) ? String(object.element) : undefined,
      old_value: isSet(object.old_value) ? String(object.old_value) : undefined,
      new_value: isSet(object.new_value) ? String(object.new_value) : undefined,
      change_type: isSet(object.change_type) ? changeTypeFromJSON(object.change_type) : undefined,
      advices: Array.isArray(object?.advices) ? object.advices.map((e: any) => Advice.fromJSON(e)) : undefined,
    };
  },

  toJSON(message: ConfigChange): unknown {
    const obj: any = {};
    if (message.element !== undefined && message.element !== "") {
      obj.element = message.element;
    }
    if (message.old_value !== undefined && message.old_value !== "") {
      obj.old_value = message.old_value;
    }
    if (message.new_value !== undefined && message.new_value !== "") {
      obj.new_value = message.new_value;
    }
    if (message.change_type !== undefined && message.change_type !== 0) {
      obj.change_type = changeTypeToJSON(message.change_type);
    }
    if (message.advices?.length) {
      obj.advices = message.advices.map((e) => Advice.toJSON(e));
    }
    return obj;
  },
};

function createBaseAdvice(): Advice {
  return {};
}

export const Advice = {
  encode(message: Advice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.description !== undefined && message.description !== "") {
      writer.uint32(18).string(message.description);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Advice {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdvice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
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

  fromJSON(object: any): Advice {
    return { description: isSet(object.description) ? String(object.description) : undefined };
  },

  toJSON(message: Advice): unknown {
    const obj: any = {};
    if (message.description !== undefined && message.description !== "") {
      obj.description = message.description;
    }
    return obj;
  },
};

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
