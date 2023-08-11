/* eslint-disable */
import _m0 from "protobufjs/minimal";

/**
 * Monitoring configuration of the service.
 *
 * The example below shows how to configure monitored resources and metrics
 * for monitoring. In the example, a monitored resource and two metrics are
 * defined. The `library.googleapis.com/book/returned_count` metric is sent
 * to both producer and consumer projects, whereas the
 * `library.googleapis.com/book/num_overdue` metric is only sent to the
 * consumer project.
 *
 *     monitored_resources:
 *     - type: library.googleapis.com/Branch
 *       display_name: "Library Branch"
 *       description: "A branch of a library."
 *       launch_stage: GA
 *       labels:
 *       - key: resource_container
 *         description: "The Cloud container (ie. project id) for the Branch."
 *       - key: location
 *         description: "The location of the library branch."
 *       - key: branch_id
 *         description: "The id of the branch."
 *     metrics:
 *     - name: library.googleapis.com/book/returned_count
 *       display_name: "Books Returned"
 *       description: "The count of books that have been returned."
 *       launch_stage: GA
 *       metric_kind: DELTA
 *       value_type: INT64
 *       unit: "1"
 *       labels:
 *       - key: customer_id
 *         description: "The id of the customer."
 *     - name: library.googleapis.com/book/num_overdue
 *       display_name: "Books Overdue"
 *       description: "The current number of overdue books."
 *       launch_stage: GA
 *       metric_kind: GAUGE
 *       value_type: INT64
 *       unit: "1"
 *       labels:
 *       - key: customer_id
 *         description: "The id of the customer."
 *     monitoring:
 *       producer_destinations:
 *       - monitored_resource: library.googleapis.com/Branch
 *         metrics:
 *         - library.googleapis.com/book/returned_count
 *       consumer_destinations:
 *       - monitored_resource: library.googleapis.com/Branch
 *         metrics:
 *         - library.googleapis.com/book/returned_count
 *         - library.googleapis.com/book/num_overdue
 */
export interface Monitoring {
  /**
   * Monitoring configurations for sending metrics to the producer project.
   * There can be multiple producer destinations. A monitored resource type may
   * appear in multiple monitoring destinations if different aggregations are
   * needed for different sets of metrics associated with that monitored
   * resource type. A monitored resource and metric pair may only be used once
   * in the Monitoring configuration.
   */
  producer_destinations?:
    | Monitoring_MonitoringDestination[]
    | undefined;
  /**
   * Monitoring configurations for sending metrics to the consumer project.
   * There can be multiple consumer destinations. A monitored resource type may
   * appear in multiple monitoring destinations if different aggregations are
   * needed for different sets of metrics associated with that monitored
   * resource type. A monitored resource and metric pair may only be used once
   * in the Monitoring configuration.
   */
  consumer_destinations?: Monitoring_MonitoringDestination[] | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/**
 * Configuration of a specific monitoring destination (the producer project
 * or the consumer project).
 */
export interface Monitoring_MonitoringDestination {
  /**
   * The monitored resource type. The type must be defined in
   * [Service.monitored_resources][google.api.Service.monitored_resources] section.
   */
  monitored_resource?:
    | string
    | undefined;
  /**
   * Types of the metrics to report to this monitoring destination.
   * Each type must be defined in [Service.metrics][google.api.Service.metrics] section.
   */
  metrics?: string[] | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

function createBaseMonitoring(): Monitoring {
  return {};
}

export const Monitoring = {
  encode(message: Monitoring, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.producer_destinations !== undefined && message.producer_destinations.length !== 0) {
      for (const v of message.producer_destinations) {
        Monitoring_MonitoringDestination.encode(v!, writer.uint32(10).fork()).ldelim();
      }
    }
    if (message.consumer_destinations !== undefined && message.consumer_destinations.length !== 0) {
      for (const v of message.consumer_destinations) {
        Monitoring_MonitoringDestination.encode(v!, writer.uint32(18).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Monitoring {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMonitoring();
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
          message.producer_destinations!.push(Monitoring_MonitoringDestination.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          if (message.consumer_destinations === undefined) {
            message.consumer_destinations = [];
          }
          message.consumer_destinations!.push(Monitoring_MonitoringDestination.decode(reader, reader.uint32()));
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

  fromJSON(object: any): Monitoring {
    return {
      producer_destinations: Array.isArray(object?.producer_destinations)
        ? object.producer_destinations.map((e: any) => Monitoring_MonitoringDestination.fromJSON(e))
        : undefined,
      consumer_destinations: Array.isArray(object?.consumer_destinations)
        ? object.consumer_destinations.map((e: any) => Monitoring_MonitoringDestination.fromJSON(e))
        : undefined,
    };
  },

  toJSON(message: Monitoring): unknown {
    const obj: any = {};
    if (message.producer_destinations?.length) {
      obj.producer_destinations = message.producer_destinations.map((e) => Monitoring_MonitoringDestination.toJSON(e));
    }
    if (message.consumer_destinations?.length) {
      obj.consumer_destinations = message.consumer_destinations.map((e) => Monitoring_MonitoringDestination.toJSON(e));
    }
    return obj;
  },
};

function createBaseMonitoring_MonitoringDestination(): Monitoring_MonitoringDestination {
  return {};
}

export const Monitoring_MonitoringDestination = {
  encode(message: Monitoring_MonitoringDestination, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Monitoring_MonitoringDestination {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMonitoring_MonitoringDestination();
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

  fromJSON(object: any): Monitoring_MonitoringDestination {
    return {
      monitored_resource: isSet(object.monitored_resource) ? String(object.monitored_resource) : undefined,
      metrics: Array.isArray(object?.metrics) ? object.metrics.map((e: any) => String(e)) : undefined,
    };
  },

  toJSON(message: Monitoring_MonitoringDestination): unknown {
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
