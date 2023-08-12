/// <reference types="node" />
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
    name?: string | undefined;
    /**
     * Service-specific metadata associated with the operation.  It typically
     * contains progress information and common metadata such as create time.
     * Some services might not provide such metadata.  Any method that returns a
     * long-running operation should document the metadata type, if any.
     */
    metadata?: Any | undefined;
    /**
     * If the value is `false`, it means the operation is still in progress.
     * If `true`, the operation is completed, and either `error` or `response` is
     * available.
     */
    done?: boolean | undefined;
    /** The error result of the operation in case of failure or cancellation. */
    error?: Status | undefined;
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
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
/** The request message for [Operations.GetOperation][google.longrunning.Operations.GetOperation]. */
export interface GetOperationRequest {
    /** The name of the operation resource. */
    name?: string | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
/** The request message for [Operations.ListOperations][google.longrunning.Operations.ListOperations]. */
export interface ListOperationsRequest {
    /** The name of the operation's parent resource. */
    name?: string | undefined;
    /** The standard list filter. */
    filter?: string | undefined;
    /** The standard list page size. */
    page_size?: number | undefined;
    /** The standard list page token. */
    page_token?: string | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
/** The response message for [Operations.ListOperations][google.longrunning.Operations.ListOperations]. */
export interface ListOperationsResponse {
    /** A list of operations that matches the specified filter in the request. */
    operations?: Operation[] | undefined;
    /** The standard List next-page token. */
    next_page_token?: string | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
/** The request message for [Operations.CancelOperation][google.longrunning.Operations.CancelOperation]. */
export interface CancelOperationRequest {
    /** The name of the operation resource to be cancelled. */
    name?: string | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
/** The request message for [Operations.DeleteOperation][google.longrunning.Operations.DeleteOperation]. */
export interface DeleteOperationRequest {
    /** The name of the operation resource to be deleted. */
    name?: string | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
/** The request message for [Operations.WaitOperation][google.longrunning.Operations.WaitOperation]. */
export interface WaitOperationRequest {
    /** The name of the operation resource to wait on. */
    name?: string | undefined;
    /**
     * The maximum duration to wait before timing out. If left blank, the wait
     * will be at most the time permitted by the underlying HTTP/RPC protocol.
     * If RPC context deadline is also specified, the shorter one will be used.
     */
    timeout?: Duration | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
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
    response_type?: string | undefined;
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
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
export declare const Operation: {
    encode(message: Operation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Operation;
    fromJSON(object: any): Operation;
    toJSON(message: Operation): unknown;
};
export declare const GetOperationRequest: {
    encode(message: GetOperationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetOperationRequest;
    fromJSON(object: any): GetOperationRequest;
    toJSON(message: GetOperationRequest): unknown;
};
export declare const ListOperationsRequest: {
    encode(message: ListOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListOperationsRequest;
    fromJSON(object: any): ListOperationsRequest;
    toJSON(message: ListOperationsRequest): unknown;
};
export declare const ListOperationsResponse: {
    encode(message: ListOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListOperationsResponse;
    fromJSON(object: any): ListOperationsResponse;
    toJSON(message: ListOperationsResponse): unknown;
};
export declare const CancelOperationRequest: {
    encode(message: CancelOperationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CancelOperationRequest;
    fromJSON(object: any): CancelOperationRequest;
    toJSON(message: CancelOperationRequest): unknown;
};
export declare const DeleteOperationRequest: {
    encode(message: DeleteOperationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteOperationRequest;
    fromJSON(object: any): DeleteOperationRequest;
    toJSON(message: DeleteOperationRequest): unknown;
};
export declare const WaitOperationRequest: {
    encode(message: WaitOperationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WaitOperationRequest;
    fromJSON(object: any): WaitOperationRequest;
    toJSON(message: WaitOperationRequest): unknown;
};
export declare const OperationInfo: {
    encode(message: OperationInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OperationInfo;
    fromJSON(object: any): OperationInfo;
    toJSON(message: OperationInfo): unknown;
};
export declare const operation_info: Extension<OperationInfo>;
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
export declare const OperationsDefinition: {
    readonly name: "Operations";
    readonly fullName: "google.longrunning.Operations";
    readonly methods: {
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
        readonly listOperations: {
            readonly name: "ListOperations";
            readonly requestType: {
                encode(message: ListOperationsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListOperationsRequest;
                fromJSON(object: any): ListOperationsRequest;
                toJSON(message: ListOperationsRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: ListOperationsResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): ListOperationsResponse;
                fromJSON(object: any): ListOperationsResponse;
                toJSON(message: ListOperationsResponse): unknown;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8410: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Gets the latest state of a long-running operation.  Clients can use this
         * method to poll the operation result at intervals as recommended by the API
         * service.
         */
        readonly getOperation: {
            readonly name: "GetOperation";
            readonly requestType: {
                encode(message: GetOperationRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetOperationRequest;
                fromJSON(object: any): GetOperationRequest;
                toJSON(message: GetOperationRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: Operation, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): Operation;
                fromJSON(object: any): Operation;
                toJSON(message: Operation): unknown;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8410: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        /**
         * Deletes a long-running operation. This method indicates that the client is
         * no longer interested in the operation result. It does not cancel the
         * operation. If the server doesn't support this method, it returns
         * `google.rpc.Code.UNIMPLEMENTED`.
         */
        readonly deleteOperation: {
            readonly name: "DeleteOperation";
            readonly requestType: {
                encode(message: DeleteOperationRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): DeleteOperationRequest;
                fromJSON(object: any): DeleteOperationRequest;
                toJSON(message: DeleteOperationRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: Empty, writer?: _m0.Writer): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number | undefined): Empty;
                fromJSON(_: any): Empty;
                toJSON(_: Empty): unknown;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8410: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
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
        readonly cancelOperation: {
            readonly name: "CancelOperation";
            readonly requestType: {
                encode(message: CancelOperationRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): CancelOperationRequest;
                fromJSON(object: any): CancelOperationRequest;
                toJSON(message: CancelOperationRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: Empty, writer?: _m0.Writer): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number | undefined): Empty;
                fromJSON(_: any): Empty;
                toJSON(_: Empty): unknown;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8410: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
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
        readonly waitOperation: {
            readonly name: "WaitOperation";
            readonly requestType: {
                encode(message: WaitOperationRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): WaitOperationRequest;
                fromJSON(object: any): WaitOperationRequest;
                toJSON(message: WaitOperationRequest): unknown;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: Operation, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): Operation;
                fromJSON(object: any): Operation;
                toJSON(message: Operation): unknown;
            };
            readonly responseStream: false;
            readonly options: {};
        };
    };
};
export interface Extension<T> {
    number: number;
    tag: number;
    singularTag?: number;
    encode?: (message: T) => Uint8Array[];
    decode?: (tag: number, input: Uint8Array[]) => T;
    repeated: boolean;
    packed: boolean;
}
