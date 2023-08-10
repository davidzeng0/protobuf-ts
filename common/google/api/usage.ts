/* eslint-disable */
import _m0 from "protobufjs/minimal";

/** Configuration controlling usage of a service. */
export interface Usage {
  /**
   * Requirements that must be satisfied before a consumer project can use the
   * service. Each requirement is of the form <service.name>/<requirement-id>;
   * for example 'serviceusage.googleapis.com/billing-enabled'.
   *
   * For Google APIs, a Terms of Service requirement must be included here.
   * Google Cloud APIs must include "serviceusage.googleapis.com/tos/cloud".
   * Other Google APIs should include
   * "serviceusage.googleapis.com/tos/universal". Additional ToS can be
   * included based on the business needs.
   */
  requirements?:
    | string[]
    | undefined;
  /**
   * A list of usage rules that apply to individual API methods.
   *
   * **NOTE:** All service configuration rules follow "last one wins" order.
   */
  rules?:
    | UsageRule[]
    | undefined;
  /**
   * The full resource name of a channel used for sending notifications to the
   * service producer.
   *
   * Google Service Management currently only supports
   * [Google Cloud Pub/Sub](https://cloud.google.com/pubsub) as a notification
   * channel. To use Google Cloud Pub/Sub as the channel, this must be the name
   * of a Cloud Pub/Sub topic that uses the Cloud Pub/Sub topic name format
   * documented in https://cloud.google.com/pubsub/docs/overview.
   */
  producer_notification_channel?: string | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/**
 * Usage configuration rules for the service.
 *
 * NOTE: Under development.
 *
 * Use this rule to configure unregistered calls for the service. Unregistered
 * calls are calls that do not contain consumer project identity.
 * (Example: calls that do not contain an API key).
 * By default, API methods do not allow unregistered calls, and each method call
 * must be identified by a consumer project identity. Use this rule to
 * allow/disallow unregistered calls.
 *
 * Example of an API that wants to allow unregistered calls for entire service.
 *
 *     usage:
 *       rules:
 *       - selector: "*"
 *         allow_unregistered_calls: true
 *
 * Example of a method that wants to allow unregistered calls.
 *
 *     usage:
 *       rules:
 *       - selector: "google.example.library.v1.LibraryService.CreateBook"
 *         allow_unregistered_calls: true
 */
export interface UsageRule {
  /**
   * Selects the methods to which this rule applies. Use '*' to indicate all
   * methods in all APIs.
   *
   * Refer to [selector][google.api.DocumentationRule.selector] for syntax details.
   */
  selector?:
    | string
    | undefined;
  /**
   * If true, the selected method allows unregistered calls, e.g. calls
   * that don't identify any user or application.
   */
  allow_unregistered_calls?:
    | boolean
    | undefined;
  /**
   * If true, the selected method should skip service control and the control
   * plane features, such as quota and billing, will not be available.
   * This flag is used by Google Cloud Endpoints to bypass checks for internal
   * methods, such as service health check methods.
   */
  skip_service_control?: boolean | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

function createBaseUsage(): Usage {
  return {};
}

export const Usage = {
  encode(message: Usage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.requirements !== undefined && message.requirements.length !== 0) {
      for (const v of message.requirements) {
        writer.uint32(10).string(v!);
      }
    }
    if (message.rules !== undefined && message.rules.length !== 0) {
      for (const v of message.rules) {
        UsageRule.encode(v!, writer.uint32(50).fork()).ldelim();
      }
    }
    if (message.producer_notification_channel !== undefined && message.producer_notification_channel !== "") {
      writer.uint32(58).string(message.producer_notification_channel);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Usage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUsage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          if (message.requirements === undefined) {
            message.requirements = [];
          }
          message.requirements!.push(reader.string());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          if (message.rules === undefined) {
            message.rules = [];
          }
          message.rules!.push(UsageRule.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.producer_notification_channel = reader.string();
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

  fromJSON(object: any): Usage {
    return {
      requirements: Array.isArray(object?.requirements) ? object.requirements.map((e: any) => String(e)) : undefined,
      rules: Array.isArray(object?.rules) ? object.rules.map((e: any) => UsageRule.fromJSON(e)) : undefined,
      producer_notification_channel: isSet(object.producer_notification_channel)
        ? String(object.producer_notification_channel)
        : undefined,
    };
  },

  toJSON(message: Usage): unknown {
    const obj: any = {};
    if (message.requirements?.length) {
      obj.requirements = message.requirements;
    }
    if (message.rules?.length) {
      obj.rules = message.rules.map((e) => UsageRule.toJSON(e));
    }
    if (message.producer_notification_channel !== undefined && message.producer_notification_channel !== "") {
      obj.producer_notification_channel = message.producer_notification_channel;
    }
    return obj;
  },
};

function createBaseUsageRule(): UsageRule {
  return {};
}

export const UsageRule = {
  encode(message: UsageRule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.selector !== undefined && message.selector !== "") {
      writer.uint32(10).string(message.selector);
    }
    if (message.allow_unregistered_calls === true) {
      writer.uint32(16).bool(message.allow_unregistered_calls);
    }
    if (message.skip_service_control === true) {
      writer.uint32(24).bool(message.skip_service_control);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): UsageRule {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUsageRule();
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
          if (tag !== 16) {
            break;
          }

          message.allow_unregistered_calls = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.skip_service_control = reader.bool();
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

  fromJSON(object: any): UsageRule {
    return {
      selector: isSet(object.selector) ? String(object.selector) : undefined,
      allow_unregistered_calls: isSet(object.allow_unregistered_calls)
        ? Boolean(object.allow_unregistered_calls)
        : undefined,
      skip_service_control: isSet(object.skip_service_control) ? Boolean(object.skip_service_control) : undefined,
    };
  },

  toJSON(message: UsageRule): unknown {
    const obj: any = {};
    if (message.selector !== undefined && message.selector !== "") {
      obj.selector = message.selector;
    }
    if (message.allow_unregistered_calls === true) {
      obj.allow_unregistered_calls = message.allow_unregistered_calls;
    }
    if (message.skip_service_control === true) {
      obj.skip_service_control = message.skip_service_control;
    }
    return obj;
  },
};

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
