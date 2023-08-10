/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { LabelDescriptor } from "./label";

/**
 * A description of a log type. Example in YAML format:
 *
 *     - name: library.googleapis.com/activity_history
 *       description: The history of borrowing and returning library items.
 *       display_name: Activity
 *       labels:
 *       - key: /customer_id
 *         description: Identifier of a library customer
 */
export interface LogDescriptor {
  /**
   * The name of the log. It must be less than 512 characters long and can
   * include the following characters: upper- and lower-case alphanumeric
   * characters [A-Za-z0-9], and punctuation characters including
   * slash, underscore, hyphen, period [/_-.].
   */
  name?:
    | string
    | undefined;
  /**
   * The set of labels that are available to describe a specific log entry.
   * Runtime requests that contain labels not specified here are
   * considered invalid.
   */
  labels?:
    | LabelDescriptor[]
    | undefined;
  /**
   * A human-readable description of this log. This information appears in
   * the documentation and can contain details.
   */
  description?:
    | string
    | undefined;
  /**
   * The human-readable name for this log. This information appears on
   * the user interface and should be concise.
   */
  display_name?: string | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

function createBaseLogDescriptor(): LogDescriptor {
  return {};
}

export const LogDescriptor = {
  encode(message: LogDescriptor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined && message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.labels !== undefined && message.labels.length !== 0) {
      for (const v of message.labels) {
        LabelDescriptor.encode(v!, writer.uint32(18).fork()).ldelim();
      }
    }
    if (message.description !== undefined && message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.display_name !== undefined && message.display_name !== "") {
      writer.uint32(34).string(message.display_name);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): LogDescriptor {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogDescriptor();
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

          if (message.labels === undefined) {
            message.labels = [];
          }
          message.labels!.push(LabelDescriptor.decode(reader, reader.uint32()));
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

          message.display_name = reader.string();
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

  fromJSON(object: any): LogDescriptor {
    return {
      name: isSet(object.name) ? String(object.name) : undefined,
      labels: Array.isArray(object?.labels) ? object.labels.map((e: any) => LabelDescriptor.fromJSON(e)) : undefined,
      description: isSet(object.description) ? String(object.description) : undefined,
      display_name: isSet(object.display_name) ? String(object.display_name) : undefined,
    };
  },

  toJSON(message: LogDescriptor): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.labels?.length) {
      obj.labels = message.labels.map((e) => LabelDescriptor.toJSON(e));
    }
    if (message.description !== undefined && message.description !== "") {
      obj.description = message.description;
    }
    if (message.display_name !== undefined && message.display_name !== "") {
      obj.display_name = message.display_name;
    }
    return obj;
  },
};

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
