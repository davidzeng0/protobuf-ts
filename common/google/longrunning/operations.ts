/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Any } from "../protobuf/any";
import { Duration } from "../protobuf/duration";
import { Empty } from "../protobuf/empty";
import { Status } from "../rpc/status";

/**
 * This resource represents a long-running operation that is the result of a
 * network API call.
 */
export interface Operation {
  /**
   * The server-assigned name, which is only unique within the same service that
   * originally returns it. If you use the default HTTP mapping, the
   * `name` should be a resource name ending with `operations/{unique_id}`.
   */
  name?:
    | string
    | undefined;
  /**
   * Service-specific metadata associated with the operation.  It typically
   * contains progress information and common metadata such as create time.
   * Some services might not provide such metadata.  Any method that returns a
   * long-running operation should document the metadata type, if any.
   */
  metadata?:
    | Any
    | undefined;
  /**
   * If the value is `false`, it means the operation is still in progress.
   * If `true`, the operation is completed, and either `error` or `response` is
   * available.
   */
  done?:
    | boolean
    | undefined;
  /** The error result of the operation in case of failure or cancellation. */
  error?:
    | Status
    | undefined;
  /**
   * The normal response of the operation in case of success.  If the original
   * method returns no data on success, such as `Delete`, the response is
   * `google.protobuf.Empty`.  If the original method is standard
   * `Get`/`Create`/`Update`, the response should be the resource.  For other
   * methods, the response should have the type `XxxResponse`, where `Xxx`
   * is the original method name.  For example, if the original method name
   * is `TakeSnapshot()`, the inferred response type is
   * `TakeSnapshotResponse`.
   */
  response?: Any | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/** The request message for [Operations.GetOperation][google.longrunning.Operations.GetOperation]. */
export interface GetOperationRequest {
  /** The name of the operation resource. */
  name?: string | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/** The request message for [Operations.ListOperations][google.longrunning.Operations.ListOperations]. */
export interface ListOperationsRequest {
  /** The name of the operation's parent resource. */
  name?:
    | string
    | undefined;
  /** The standard list filter. */
  filter?:
    | string
    | undefined;
  /** The standard list page size. */
  page_size?:
    | number
    | undefined;
  /** The standard list page token. */
  page_token?: string | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/** The response message for [Operations.ListOperations][google.longrunning.Operations.ListOperations]. */
export interface ListOperationsResponse {
  /** A list of operations that matches the specified filter in the request. */
  operations?:
    | Operation[]
    | undefined;
  /** The standard List next-page token. */
  next_page_token?: string | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/** The request message for [Operations.CancelOperation][google.longrunning.Operations.CancelOperation]. */
export interface CancelOperationRequest {
  /** The name of the operation resource to be cancelled. */
  name?: string | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/** The request message for [Operations.DeleteOperation][google.longrunning.Operations.DeleteOperation]. */
export interface DeleteOperationRequest {
  /** The name of the operation resource to be deleted. */
  name?: string | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/** The request message for [Operations.WaitOperation][google.longrunning.Operations.WaitOperation]. */
export interface WaitOperationRequest {
  /** The name of the operation resource to wait on. */
  name?:
    | string
    | undefined;
  /**
   * The maximum duration to wait before timing out. If left blank, the wait
   * will be at most the time permitted by the underlying HTTP/RPC protocol.
   * If RPC context deadline is also specified, the shorter one will be used.
   */
  timeout?: Duration | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/**
 * A message representing the message types used by a long-running operation.
 *
 * Example:
 *
 *   rpc LongRunningRecognize(LongRunningRecognizeRequest)
 *       returns (google.longrunning.Operation) {
 *     option (google.longrunning.operation_info) = {
 *       response_type: "LongRunningRecognizeResponse"
 *       metadata_type: "LongRunningRecognizeMetadata"
 *     };
 *   }
 */
export interface OperationInfo {
  /**
   * Required. The message name of the primary return type for this
   * long-running operation.
   * This type will be used to deserialize the LRO's response.
   *
   * If the response is in a different package from the rpc, a fully-qualified
   * message name must be used (e.g. `google.protobuf.Struct`).
   *
   * Note: Altering this value constitutes a breaking change.
   */
  response_type?:
    | string
    | undefined;
  /**
   * Required. The message name of the metadata type for this long-running
   * operation.
   *
   * If the response is in a different package from the rpc, a fully-qualified
   * message name must be used (e.g. `google.protobuf.Struct`).
   *
   * Note: Altering this value constitutes a breaking change.
   */
  metadata_type?: string | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

function createBaseOperation(): Operation {
  return {};
}

export const Operation = {
  encode(message: Operation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined && message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.metadata !== undefined) {
      Any.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    if (message.done === true) {
      writer.uint32(24).bool(message.done);
    }
    if (message.error !== undefined) {
      Status.encode(message.error, writer.uint32(34).fork()).ldelim();
    }
    if (message.response !== undefined) {
      Any.encode(message.response, writer.uint32(42).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Operation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperation();
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

          message.metadata = Any.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.done = reader.bool();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.error = Status.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.response = Any.decode(reader, reader.uint32());
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

  fromJSON(object: any): Operation {
    return {
      name: isSet(object.name) ? String(object.name) : undefined,
      metadata: isSet(object.metadata) ? Any.fromJSON(object.metadata) : undefined,
      done: isSet(object.done) ? Boolean(object.done) : undefined,
      error: isSet(object.error) ? Status.fromJSON(object.error) : undefined,
      response: isSet(object.response) ? Any.fromJSON(object.response) : undefined,
    };
  },

  toJSON(message: Operation): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.metadata !== undefined) {
      obj.metadata = Any.toJSON(message.metadata);
    }
    if (message.done === true) {
      obj.done = message.done;
    }
    if (message.error !== undefined) {
      obj.error = Status.toJSON(message.error);
    }
    if (message.response !== undefined) {
      obj.response = Any.toJSON(message.response);
    }
    return obj;
  },
};

function createBaseGetOperationRequest(): GetOperationRequest {
  return {};
}

export const GetOperationRequest = {
  encode(message: GetOperationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined && message.name !== "") {
      writer.uint32(10).string(message.name);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): GetOperationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetOperationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
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

  fromJSON(object: any): GetOperationRequest {
    return { name: isSet(object.name) ? String(object.name) : undefined };
  },

  toJSON(message: GetOperationRequest): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },
};

function createBaseListOperationsRequest(): ListOperationsRequest {
  return {};
}

export const ListOperationsRequest = {
  encode(message: ListOperationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined && message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.filter !== undefined && message.filter !== "") {
      writer.uint32(10).string(message.filter);
    }
    if (message.page_size !== undefined && message.page_size !== 0) {
      writer.uint32(16).int32(message.page_size);
    }
    if (message.page_token !== undefined && message.page_token !== "") {
      writer.uint32(26).string(message.page_token);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListOperationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListOperationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          if (tag !== 34) {
            break;
          }

          message.name = reader.string();
          continue;
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filter = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.page_size = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.page_token = reader.string();
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

  fromJSON(object: any): ListOperationsRequest {
    return {
      name: isSet(object.name) ? String(object.name) : undefined,
      filter: isSet(object.filter) ? String(object.filter) : undefined,
      page_size: isSet(object.page_size) ? Number(object.page_size) : undefined,
      page_token: isSet(object.page_token) ? String(object.page_token) : undefined,
    };
  },

  toJSON(message: ListOperationsRequest): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.filter !== undefined && message.filter !== "") {
      obj.filter = message.filter;
    }
    if (message.page_size !== undefined && message.page_size !== 0) {
      obj.page_size = Math.round(message.page_size);
    }
    if (message.page_token !== undefined && message.page_token !== "") {
      obj.page_token = message.page_token;
    }
    return obj;
  },
};

function createBaseListOperationsResponse(): ListOperationsResponse {
  return {};
}

export const ListOperationsResponse = {
  encode(message: ListOperationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operations !== undefined && message.operations.length !== 0) {
      for (const v of message.operations) {
        Operation.encode(v!, writer.uint32(10).fork()).ldelim();
      }
    }
    if (message.next_page_token !== undefined && message.next_page_token !== "") {
      writer.uint32(18).string(message.next_page_token);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ListOperationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListOperationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          if (message.operations === undefined) {
            message.operations = [];
          }
          message.operations!.push(Operation.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.next_page_token = reader.string();
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

  fromJSON(object: any): ListOperationsResponse {
    return {
      operations: Array.isArray(object?.operations)
        ? object.operations.map((e: any) => Operation.fromJSON(e))
        : undefined,
      next_page_token: isSet(object.next_page_token) ? String(object.next_page_token) : undefined,
    };
  },

  toJSON(message: ListOperationsResponse): unknown {
    const obj: any = {};
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => Operation.toJSON(e));
    }
    if (message.next_page_token !== undefined && message.next_page_token !== "") {
      obj.next_page_token = message.next_page_token;
    }
    return obj;
  },
};

function createBaseCancelOperationRequest(): CancelOperationRequest {
  return {};
}

export const CancelOperationRequest = {
  encode(message: CancelOperationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined && message.name !== "") {
      writer.uint32(10).string(message.name);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): CancelOperationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCancelOperationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
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

  fromJSON(object: any): CancelOperationRequest {
    return { name: isSet(object.name) ? String(object.name) : undefined };
  },

  toJSON(message: CancelOperationRequest): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },
};

function createBaseDeleteOperationRequest(): DeleteOperationRequest {
  return {};
}

export const DeleteOperationRequest = {
  encode(message: DeleteOperationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined && message.name !== "") {
      writer.uint32(10).string(message.name);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteOperationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteOperationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
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

  fromJSON(object: any): DeleteOperationRequest {
    return { name: isSet(object.name) ? String(object.name) : undefined };
  },

  toJSON(message: DeleteOperationRequest): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },
};

function createBaseWaitOperationRequest(): WaitOperationRequest {
  return {};
}

export const WaitOperationRequest = {
  encode(message: WaitOperationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined && message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.timeout !== undefined) {
      Duration.encode(message.timeout, writer.uint32(18).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): WaitOperationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWaitOperationRequest();
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

          message.timeout = Duration.decode(reader, reader.uint32());
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

  fromJSON(object: any): WaitOperationRequest {
    return {
      name: isSet(object.name) ? String(object.name) : undefined,
      timeout: isSet(object.timeout) ? Duration.fromJSON(object.timeout) : undefined,
    };
  },

  toJSON(message: WaitOperationRequest): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.timeout !== undefined) {
      obj.timeout = Duration.toJSON(message.timeout);
    }
    return obj;
  },
};

function createBaseOperationInfo(): OperationInfo {
  return {};
}

export const OperationInfo = {
  encode(message: OperationInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response_type !== undefined && message.response_type !== "") {
      writer.uint32(10).string(message.response_type);
    }
    if (message.metadata_type !== undefined && message.metadata_type !== "") {
      writer.uint32(18).string(message.metadata_type);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): OperationInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperationInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.response_type = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.metadata_type = reader.string();
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

  fromJSON(object: any): OperationInfo {
    return {
      response_type: isSet(object.response_type) ? String(object.response_type) : undefined,
      metadata_type: isSet(object.metadata_type) ? String(object.metadata_type) : undefined,
    };
  },

  toJSON(message: OperationInfo): unknown {
    const obj: any = {};
    if (message.response_type !== undefined && message.response_type !== "") {
      obj.response_type = message.response_type;
    }
    if (message.metadata_type !== undefined && message.metadata_type !== "") {
      obj.metadata_type = message.metadata_type;
    }
    return obj;
  },
};

export const operation_info: Extension<OperationInfo> = {
  number: 1049,
  tag: 8394,
  repeated: false,
  packed: false,
  encode: (value: OperationInfo): Uint8Array[] => {
    const encoded: Uint8Array[] = [];
    const writer = _m0.Writer.create();
    OperationInfo.encode(value, writer.fork()).ldelim();
    encoded.push(writer.finish());
    return encoded;
  },
  decode: (tag: number, input: Uint8Array[]): OperationInfo => {
    const reader = _m0.Reader.create(input[input.length - 1] ?? fail());
    return OperationInfo.decode(reader, reader.uint32());
  },
};

/**
 * Manages long-running operations with an API service.
 *
 * When an API method normally takes long time to complete, it can be designed
 * to return [Operation][google.longrunning.Operation] to the client, and the client can use this
 * interface to receive the real response asynchronously by polling the
 * operation resource, or pass the operation resource to another API (such as
 * Google Cloud Pub/Sub API) to receive the response.  Any API service that
 * returns long-running operations should implement the `Operations` interface
 * so developers can have a consistent client experience.
 */
export interface Operations {
  /**
   * Lists operations that match the specified filter in the request. If the
   * server doesn't support this method, it returns `UNIMPLEMENTED`.
   *
   * NOTE: the `name` binding allows API services to override the binding
   * to use different resource name schemes, such as `users/* /operations`. To
   * override the binding, API services can add a binding such as
   * `"/v1/{name=users/*}/operations"` to their service configuration.
   * For backwards compatibility, the default name includes the operations
   * collection id, however overriding users must ensure the name binding
   * is the parent resource, without the operations collection id.
   */
  listOperations(request: ListOperationsRequest): Promise<ListOperationsResponse>;
  /**
   * Gets the latest state of a long-running operation.  Clients can use this
   * method to poll the operation result at intervals as recommended by the API
   * service.
   */
  getOperation(request: GetOperationRequest): Promise<Operation>;
  /**
   * Deletes a long-running operation. This method indicates that the client is
   * no longer interested in the operation result. It does not cancel the
   * operation. If the server doesn't support this method, it returns
   * `google.rpc.Code.UNIMPLEMENTED`.
   */
  deleteOperation(request: DeleteOperationRequest): Promise<Empty>;
  /**
   * Starts asynchronous cancellation on a long-running operation.  The server
   * makes a best effort to cancel the operation, but success is not
   * guaranteed.  If the server doesn't support this method, it returns
   * `google.rpc.Code.UNIMPLEMENTED`.  Clients can use
   * [Operations.GetOperation][google.longrunning.Operations.GetOperation] or
   * other methods to check whether the cancellation succeeded or whether the
   * operation completed despite cancellation. On successful cancellation,
   * the operation is not deleted; instead, it becomes an operation with
   * an [Operation.error][google.longrunning.Operation.error] value with a [google.rpc.Status.code][google.rpc.Status.code] of 1,
   * corresponding to `Code.CANCELLED`.
   */
  cancelOperation(request: CancelOperationRequest): Promise<Empty>;
  /**
   * Waits until the specified long-running operation is done or reaches at most
   * a specified timeout, returning the latest state.  If the operation is
   * already done, the latest state is immediately returned.  If the timeout
   * specified is greater than the default HTTP/RPC timeout, the HTTP/RPC
   * timeout is used.  If the server does not support this method, it returns
   * `google.rpc.Code.UNIMPLEMENTED`.
   * Note that this method is on a best-effort basis.  It may return the latest
   * state before the specified timeout (including immediately), meaning even an
   * immediate response is no guarantee that the operation is done.
   */
  waitOperation(request: WaitOperationRequest): Promise<Operation>;
}

/**
 * Manages long-running operations with an API service.
 *
 * When an API method normally takes long time to complete, it can be designed
 * to return [Operation][google.longrunning.Operation] to the client, and the client can use this
 * interface to receive the real response asynchronously by polling the
 * operation resource, or pass the operation resource to another API (such as
 * Google Cloud Pub/Sub API) to receive the response.  Any API service that
 * returns long-running operations should implement the `Operations` interface
 * so developers can have a consistent client experience.
 */
export type OperationsDefinition = typeof OperationsDefinition;
export const OperationsDefinition = {
  name: "Operations",
  fullName: "google.longrunning.Operations",
  methods: {
    /**
     * Lists operations that match the specified filter in the request. If the
     * server doesn't support this method, it returns `UNIMPLEMENTED`.
     *
     * NOTE: the `name` binding allows API services to override the binding
     * to use different resource name schemes, such as `users/* /operations`. To
     * override the binding, API services can add a binding such as
     * `"/v1/{name=users/*}/operations"` to their service configuration.
     * For backwards compatibility, the default name includes the operations
     * collection id, however overriding users must ensure the name binding
     * is the parent resource, without the operations collection id.
     */
    listOperations: {
      name: "ListOperations",
      requestType: ListOperationsRequest,
      requestStream: false,
      responseType: ListOperationsResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([11, 110, 97, 109, 101, 44, 102, 105, 108, 116, 101, 114])],
          578365826: [
            Buffer.from([
              23,
              18,
              21,
              47,
              118,
              49,
              47,
              123,
              110,
              97,
              109,
              101,
              61,
              111,
              112,
              101,
              114,
              97,
              116,
              105,
              111,
              110,
              115,
              125,
            ]),
          ],
        },
      },
    },
    /**
     * Gets the latest state of a long-running operation.  Clients can use this
     * method to poll the operation result at intervals as recommended by the API
     * service.
     */
    getOperation: {
      name: "GetOperation",
      requestType: GetOperationRequest,
      requestStream: false,
      responseType: Operation,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([4, 110, 97, 109, 101])],
          578365826: [
            Buffer.from([
              26,
              18,
              24,
              47,
              118,
              49,
              47,
              123,
              110,
              97,
              109,
              101,
              61,
              111,
              112,
              101,
              114,
              97,
              116,
              105,
              111,
              110,
              115,
              47,
              42,
              42,
              125,
            ]),
          ],
        },
      },
    },
    /**
     * Deletes a long-running operation. This method indicates that the client is
     * no longer interested in the operation result. It does not cancel the
     * operation. If the server doesn't support this method, it returns
     * `google.rpc.Code.UNIMPLEMENTED`.
     */
    deleteOperation: {
      name: "DeleteOperation",
      requestType: DeleteOperationRequest,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([4, 110, 97, 109, 101])],
          578365826: [
            Buffer.from([
              26,
              42,
              24,
              47,
              118,
              49,
              47,
              123,
              110,
              97,
              109,
              101,
              61,
              111,
              112,
              101,
              114,
              97,
              116,
              105,
              111,
              110,
              115,
              47,
              42,
              42,
              125,
            ]),
          ],
        },
      },
    },
    /**
     * Starts asynchronous cancellation on a long-running operation.  The server
     * makes a best effort to cancel the operation, but success is not
     * guaranteed.  If the server doesn't support this method, it returns
     * `google.rpc.Code.UNIMPLEMENTED`.  Clients can use
     * [Operations.GetOperation][google.longrunning.Operations.GetOperation] or
     * other methods to check whether the cancellation succeeded or whether the
     * operation completed despite cancellation. On successful cancellation,
     * the operation is not deleted; instead, it becomes an operation with
     * an [Operation.error][google.longrunning.Operation.error] value with a [google.rpc.Status.code][google.rpc.Status.code] of 1,
     * corresponding to `Code.CANCELLED`.
     */
    cancelOperation: {
      name: "CancelOperation",
      requestType: CancelOperationRequest,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([4, 110, 97, 109, 101])],
          578365826: [
            Buffer.from([
              36,
              34,
              31,
              47,
              118,
              49,
              47,
              123,
              110,
              97,
              109,
              101,
              61,
              111,
              112,
              101,
              114,
              97,
              116,
              105,
              111,
              110,
              115,
              47,
              42,
              42,
              125,
              58,
              99,
              97,
              110,
              99,
              101,
              108,
              58,
              1,
              42,
            ]),
          ],
        },
      },
    },
    /**
     * Waits until the specified long-running operation is done or reaches at most
     * a specified timeout, returning the latest state.  If the operation is
     * already done, the latest state is immediately returned.  If the timeout
     * specified is greater than the default HTTP/RPC timeout, the HTTP/RPC
     * timeout is used.  If the server does not support this method, it returns
     * `google.rpc.Code.UNIMPLEMENTED`.
     * Note that this method is on a best-effort basis.  It may return the latest
     * state before the specified timeout (including immediately), meaning even an
     * immediate response is no guarantee that the operation is done.
     */
    waitOperation: {
      name: "WaitOperation",
      requestType: WaitOperationRequest,
      requestStream: false,
      responseType: Operation,
      responseStream: false,
      options: {},
    },
  },
} as const;

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
