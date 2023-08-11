/* eslint-disable */
import _m0 from "protobufjs/minimal";

/**
 * `Visibility` restricts service consumer's access to service elements,
 * such as whether an application can call a visibility-restricted method.
 * The restriction is expressed by applying visibility labels on service
 * elements. The visibility labels are elsewhere linked to service consumers.
 *
 * A service can define multiple visibility labels, but a service consumer
 * should be granted at most one visibility label. Multiple visibility
 * labels for a single service consumer are not supported.
 *
 * If an element and all its parents have no visibility label, its visibility
 * is unconditionally granted.
 *
 * Example:
 *
 *     visibility:
 *       rules:
 *       - selector: google.calendar.Calendar.EnhancedSearch
 *         restriction: PREVIEW
 *       - selector: google.calendar.Calendar.Delegate
 *         restriction: INTERNAL
 *
 * Here, all methods are publicly visible except for the restricted methods
 * EnhancedSearch and Delegate.
 */
export interface Visibility {
  /**
   * A list of visibility rules that apply to individual API elements.
   *
   * **NOTE:** All service configuration rules follow "last one wins" order.
   */
  rules?: VisibilityRule[] | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/**
 * A visibility rule provides visibility configuration for an individual API
 * element.
 */
export interface VisibilityRule {
  /**
   * Selects methods, messages, fields, enums, etc. to which this rule applies.
   *
   * Refer to [selector][google.api.DocumentationRule.selector] for syntax
   * details.
   */
  selector?:
    | string
    | undefined;
  /**
   * A comma-separated list of visibility labels that apply to the `selector`.
   * Any of the listed labels can be used to grant the visibility.
   *
   * If a rule has multiple labels, removing one of the labels but not all of
   * them can break clients.
   *
   * Example:
   *
   *     visibility:
   *       rules:
   *       - selector: google.calendar.Calendar.EnhancedSearch
   *         restriction: INTERNAL, PREVIEW
   *
   * Removing INTERNAL from this restriction will break clients that rely on
   * this method and only had access to it through INTERNAL.
   */
  restriction?: string | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

function createBaseVisibility(): Visibility {
  return {};
}

export const Visibility = {
  encode(message: Visibility, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rules !== undefined && message.rules.length !== 0) {
      for (const v of message.rules) {
        VisibilityRule.encode(v!, writer.uint32(10).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Visibility {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVisibility();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          if (message.rules === undefined) {
            message.rules = [];
          }
          message.rules!.push(VisibilityRule.decode(reader, reader.uint32()));
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

  fromJSON(object: any): Visibility {
    return {
      rules: Array.isArray(object?.rules) ? object.rules.map((e: any) => VisibilityRule.fromJSON(e)) : undefined,
    };
  },

  toJSON(message: Visibility): unknown {
    const obj: any = {};
    if (message.rules?.length) {
      obj.rules = message.rules.map((e) => VisibilityRule.toJSON(e));
    }
    return obj;
  },
};

function createBaseVisibilityRule(): VisibilityRule {
  return {};
}

export const VisibilityRule = {
  encode(message: VisibilityRule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.selector !== undefined && message.selector !== "") {
      writer.uint32(10).string(message.selector);
    }
    if (message.restriction !== undefined && message.restriction !== "") {
      writer.uint32(18).string(message.restriction);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): VisibilityRule {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVisibilityRule();
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

          message.restriction = reader.string();
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

  fromJSON(object: any): VisibilityRule {
    return {
      selector: isSet(object.selector) ? String(object.selector) : undefined,
      restriction: isSet(object.restriction) ? String(object.restriction) : undefined,
    };
  },

  toJSON(message: VisibilityRule): unknown {
    const obj: any = {};
    if (message.selector !== undefined && message.selector !== "") {
      obj.selector = message.selector;
    }
    if (message.restriction !== undefined && message.restriction !== "") {
      obj.restriction = message.restriction;
    }
    return obj;
  },
};

export const enum_visibility: Extension<VisibilityRule> = {
  number: 72295727,
  tag: 578365818,
  repeated: false,
  packed: false,
  encode: (value: VisibilityRule): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    const writer = _m0.Writer.create();
    VisibilityRule.encode(value, writer.fork()).ldelim();
    encoded.push(writer.finish());
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): VisibilityRule => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return VisibilityRule.decode(reader, reader.uint32());
  },
};

export const value_visibility: Extension<VisibilityRule> = {
  number: 72295727,
  tag: 578365818,
  repeated: false,
  packed: false,
  encode: (value: VisibilityRule): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    const writer = _m0.Writer.create();
    VisibilityRule.encode(value, writer.fork()).ldelim();
    encoded.push(writer.finish());
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): VisibilityRule => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return VisibilityRule.decode(reader, reader.uint32());
  },
};

export const field_visibility: Extension<VisibilityRule> = {
  number: 72295727,
  tag: 578365818,
  repeated: false,
  packed: false,
  encode: (value: VisibilityRule): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    const writer = _m0.Writer.create();
    VisibilityRule.encode(value, writer.fork()).ldelim();
    encoded.push(writer.finish());
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): VisibilityRule => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return VisibilityRule.decode(reader, reader.uint32());
  },
};

export const message_visibility: Extension<VisibilityRule> = {
  number: 72295727,
  tag: 578365818,
  repeated: false,
  packed: false,
  encode: (value: VisibilityRule): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    const writer = _m0.Writer.create();
    VisibilityRule.encode(value, writer.fork()).ldelim();
    encoded.push(writer.finish());
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): VisibilityRule => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return VisibilityRule.decode(reader, reader.uint32());
  },
};

export const method_visibility: Extension<VisibilityRule> = {
  number: 72295727,
  tag: 578365818,
  repeated: false,
  packed: false,
  encode: (value: VisibilityRule): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    const writer = _m0.Writer.create();
    VisibilityRule.encode(value, writer.fork()).ldelim();
    encoded.push(writer.finish());
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): VisibilityRule => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return VisibilityRule.decode(reader, reader.uint32());
  },
};

export const api_visibility: Extension<VisibilityRule> = {
  number: 72295727,
  tag: 578365818,
  repeated: false,
  packed: false,
  encode: (value: VisibilityRule): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    const writer = _m0.Writer.create();
    VisibilityRule.encode(value, writer.fork()).ldelim();
    encoded.push(writer.finish());
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): VisibilityRule => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return VisibilityRule.decode(reader, reader.uint32());
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
