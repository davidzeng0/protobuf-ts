/* eslint-disable */
import _m0 from "protobufjs/minimal";

/**
 * Logging configuration of the service.
 *
 * The following example shows how to configure logs to be sent to the
 * producer and consumer projects. In the example, the `activity_history`
 * log is sent to both the producer and consumer projects, whereas the
 * `purchase_history` log is only sent to the producer project.
 *
 *     monitored_resources:
 *     - type: library.googleapis.com/branch
 *       labels:
 *       - key: /city
 *         description: The city where the library branch is located in.
 *       - key: /name
 *         description: The name of the branch.
 *     logs:
 *     - name: activity_history
 *       labels:
 *       - key: /customer_id
 *     - name: purchase_history
 *     logging:
 *       producer_destinations:
 *       - monitored_resource: library.googleapis.com/branch
 *         logs:
 *         - activity_history
 *         - purchase_history
 *       consumer_destinations:
 *       - monitored_resource: library.googleapis.com/branch
 *         logs:
 *         - activity_history
 */
export interface Logging {
  /**
   * Logging configurations for sending logs to the producer project.
   * There can be multiple producer destinations, each one must have a
   * different monitored resource type. A log can be used in at most
   * one producer destination.
   */
  producer_destinations?:
    | Logging_LoggingDestination[]
    | undefined;
  /**
   * Logging configurations for sending logs to the consumer project.
   * There can be multiple consumer destinations, each one must have a
   * different monitored resource type. A log can be used in at most
   * one consumer destination.
   */
  consumer_destinations?: Logging_LoggingDestination[] | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/**
 * Configuration of a specific logging destination (the producer project
 * or the consumer project).
 */
export interface Logging_LoggingDestination {
  /**
   * The monitored resource type. The type must be defined in the
   * [Service.monitored_resources][google.api.Service.monitored_resources] section.
   */
  monitored_resource?:
    | string
    | undefined;
  /**
   * Names of the logs to be sent to this destination. Each name must
   * be defined in the [Service.logs][google.api.Service.logs] section. If the log name is
   * not a domain scoped name, it will be automatically prefixed with
   * the service name followed by "/".
   */
  logs?: string[] | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

function createBaseLogging(): Logging {
  return {};
}

export const Logging = {
  encode(message: Logging, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.producer_destinations !== undefined && message.producer_destinations.length !== 0) {
      for (const v of message.producer_destinations) {
        Logging_LoggingDestination.encode(v!, writer.uint32(10).fork()).ldelim();
      }
    }
    if (message.consumer_destinations !== undefined && message.consumer_destinations.length !== 0) {
      for (const v of message.consumer_destinations) {
        Logging_LoggingDestination.encode(v!, writer.uint32(18).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Logging {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogging();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          if (message.producer_destinations === undefined) {
            message.producer_destinations = [];
          }
          message.producer_destinations!.push(Logging_LoggingDestination.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          if (message.consumer_destinations === undefined) {
            message.consumer_destinations = [];
          }
          message.consumer_destinations!.push(Logging_LoggingDestination.decode(reader, reader.uint32()));
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

  fromJSON(object: any): Logging {
    return {
      producer_destinations: Array.isArray(object?.producer_destinations)
        ? object.producer_destinations.map((e: any) => Logging_LoggingDestination.fromJSON(e))
        : undefined,
      consumer_destinations: Array.isArray(object?.consumer_destinations)
        ? object.consumer_destinations.map((e: any) => Logging_LoggingDestination.fromJSON(e))
        : undefined,
    };
  },

  toJSON(message: Logging): unknown {
    const obj: any = {};
    if (message.producer_destinations?.length) {
      obj.producer_destinations = message.producer_destinations.map((e) => Logging_LoggingDestination.toJSON(e));
    }
    if (message.consumer_destinations?.length) {
      obj.consumer_destinations = message.consumer_destinations.map((e) => Logging_LoggingDestination.toJSON(e));
    }
    return obj;
  },
};

function createBaseLogging_LoggingDestination(): Logging_LoggingDestination {
  return {};
}

export const Logging_LoggingDestination = {
  encode(message: Logging_LoggingDestination, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.monitored_resource !== undefined && message.monitored_resource !== "") {
      writer.uint32(26).string(message.monitored_resource);
    }
    if (message.logs !== undefined && message.logs.length !== 0) {
      for (const v of message.logs) {
        writer.uint32(10).string(v!);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Logging_LoggingDestination {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogging_LoggingDestination();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag !== 26) {
            break;
          }

          message.monitored_resource = reader.string();
          continue;
        case 1:
          if (tag !== 10) {
            break;
          }

          if (message.logs === undefined) {
            message.logs = [];
          }
          message.logs!.push(reader.string());
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

  fromJSON(object: any): Logging_LoggingDestination {
    return {
      monitored_resource: isSet(object.monitored_resource) ? String(object.monitored_resource) : undefined,
      logs: Array.isArray(object?.logs) ? object.logs.map((e: any) => String(e)) : undefined,
    };
  },

  toJSON(message: Logging_LoggingDestination): unknown {
    const obj: any = {};
    if (message.monitored_resource !== undefined && message.monitored_resource !== "") {
      obj.monitored_resource = message.monitored_resource;
    }
    if (message.logs?.length) {
      obj.logs = message.logs;
    }
    return obj;
  },
};

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
