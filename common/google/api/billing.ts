/* eslint-disable */
import _m0 from "protobufjs/minimal";

/**
 * Billing related configuration of the service.
 *
 * The following example shows how to configure monitored resources and metrics
 * for billing, `consumer_destinations` is the only supported destination and
 * the monitored resources need at least one label key
 * `cloud.googleapis.com/location` to indicate the location of the billing
 * usage, using different monitored resources between monitoring and billing is
 * recommended so they can be evolved independently:
 *
 *     monitored_resources:
 *     - type: library.googleapis.com/billing_branch
 *       labels:
 *       - key: cloud.googleapis.com/location
 *         description: |
 *           Predefined label to support billing location restriction.
 *       - key: city
 *         description: |
 *           Custom label to define the city where the library branch is located
 *           in.
 *       - key: name
 *         description: Custom label to define the name of the library branch.
 *     metrics:
 *     - name: library.googleapis.com/book/borrowed_count
 *       metric_kind: DELTA
 *       value_type: INT64
 *       unit: "1"
 *     billing:
 *       consumer_destinations:
 *       - monitored_resource: library.googleapis.com/billing_branch
 *         metrics:
 *         - library.googleapis.com/book/borrowed_count
 */
export interface Billing {
  /**
   * Billing configurations for sending metrics to the consumer project.
   * There can be multiple consumer destinations per service, each one must have
   * a different monitored resource type. A metric can be used in at most
   * one consumer destination.
   */
  consumer_destinations?: Billing_BillingDestination[] | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/**
 * Configuration of a specific billing destination (Currently only support
 * bill against consumer project).
 */
export interface Billing_BillingDestination {
  /**
   * The monitored resource type. The type must be defined in
   * [Service.monitored_resources][google.api.Service.monitored_resources] section.
   */
  monitored_resource?:
    | string
    | undefined;
  /**
   * Names of the metrics to report to this billing destination.
   * Each name must be defined in [Service.metrics][google.api.Service.metrics] section.
   */
  metrics?: string[] | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

function createBaseBilling(): Billing {
  return {};
}

export const Billing = {
  encode(message: Billing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.consumer_destinations !== undefined && message.consumer_destinations.length !== 0) {
      for (const v of message.consumer_destinations) {
        Billing_BillingDestination.encode(v!, writer.uint32(66).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Billing {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBilling();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 8:
          if (tag !== 66) {
            break;
          }

          if (message.consumer_destinations === undefined) {
            message.consumer_destinations = [];
          }
          message.consumer_destinations!.push(Billing_BillingDestination.decode(reader, reader.uint32()));
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

  fromJSON(object: any): Billing {
    return {
      consumer_destinations: Array.isArray(object?.consumer_destinations)
        ? object.consumer_destinations.map((e: any) => Billing_BillingDestination.fromJSON(e))
        : undefined,
    };
  },

  toJSON(message: Billing): unknown {
    const obj: any = {};
    if (message.consumer_destinations?.length) {
      obj.consumer_destinations = message.consumer_destinations.map((e) => Billing_BillingDestination.toJSON(e));
    }
    return obj;
  },
};

function createBaseBilling_BillingDestination(): Billing_BillingDestination {
  return {};
}

export const Billing_BillingDestination = {
  encode(message: Billing_BillingDestination, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.monitored_resource !== undefined && message.monitored_resource !== "") {
      writer.uint32(10).string(message.monitored_resource);
    }
    if (message.metrics !== undefined && message.metrics.length !== 0) {
      for (const v of message.metrics) {
        writer.uint32(18).string(v!);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Billing_BillingDestination {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBilling_BillingDestination();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.monitored_resource = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          if (message.metrics === undefined) {
            message.metrics = [];
          }
          message.metrics!.push(reader.string());
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

  fromJSON(object: any): Billing_BillingDestination {
    return {
      monitored_resource: isSet(object.monitored_resource) ? String(object.monitored_resource) : undefined,
      metrics: Array.isArray(object?.metrics) ? object.metrics.map((e: any) => String(e)) : undefined,
    };
  },

  toJSON(message: Billing_BillingDestination): unknown {
    const obj: any = {};
    if (message.monitored_resource !== undefined && message.monitored_resource !== "") {
      obj.monitored_resource = message.monitored_resource;
    }
    if (message.metrics?.length) {
      obj.metrics = message.metrics;
    }
    return obj;
  },
};

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
