"use strict";
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.codeToNumber = exports.codeToJSON = exports.codeFromJSON = exports.Code = void 0;
/**
 * The canonical error codes for gRPC APIs.
 *
 * Sometimes multiple error codes may apply.  Services should return
 * the most specific error code that applies.  For example, prefer
 * `OUT_OF_RANGE` over `FAILED_PRECONDITION` if both codes apply.
 * Similarly prefer `NOT_FOUND` or `ALREADY_EXISTS` over `FAILED_PRECONDITION`.
 */
var Code;
(function (Code) {
    /**
     * OK - Not an error; returned on success.
     *
     * HTTP Mapping: 200 OK
     */
    Code["OK"] = "OK";
    /**
     * CANCELLED - The operation was cancelled, typically by the caller.
     *
     * HTTP Mapping: 499 Client Closed Request
     */
    Code["CANCELLED"] = "CANCELLED";
    /**
     * UNKNOWN - Unknown error.  For example, this error may be returned when
     * a `Status` value received from another address space belongs to
     * an error space that is not known in this address space.  Also
     * errors raised by APIs that do not return enough error information
     * may be converted to this error.
     *
     * HTTP Mapping: 500 Internal Server Error
     */
    Code["UNKNOWN"] = "UNKNOWN";
    /**
     * INVALID_ARGUMENT - The client specified an invalid argument.  Note that this differs
     * from `FAILED_PRECONDITION`.  `INVALID_ARGUMENT` indicates arguments
     * that are problematic regardless of the state of the system
     * (e.g., a malformed file name).
     *
     * HTTP Mapping: 400 Bad Request
     */
    Code["INVALID_ARGUMENT"] = "INVALID_ARGUMENT";
    /**
     * DEADLINE_EXCEEDED - The deadline expired before the operation could complete. For operations
     * that change the state of the system, this error may be returned
     * even if the operation has completed successfully.  For example, a
     * successful response from a server could have been delayed long
     * enough for the deadline to expire.
     *
     * HTTP Mapping: 504 Gateway Timeout
     */
    Code["DEADLINE_EXCEEDED"] = "DEADLINE_EXCEEDED";
    /**
     * NOT_FOUND - Some requested entity (e.g., file or directory) was not found.
     *
     * Note to server developers: if a request is denied for an entire class
     * of users, such as gradual feature rollout or undocumented allowlist,
     * `NOT_FOUND` may be used. If a request is denied for some users within
     * a class of users, such as user-based access control, `PERMISSION_DENIED`
     * must be used.
     *
     * HTTP Mapping: 404 Not Found
     */
    Code["NOT_FOUND"] = "NOT_FOUND";
    /**
     * ALREADY_EXISTS - The entity that a client attempted to create (e.g., file or directory)
     * already exists.
     *
     * HTTP Mapping: 409 Conflict
     */
    Code["ALREADY_EXISTS"] = "ALREADY_EXISTS";
    /**
     * PERMISSION_DENIED - The caller does not have permission to execute the specified
     * operation. `PERMISSION_DENIED` must not be used for rejections
     * caused by exhausting some resource (use `RESOURCE_EXHAUSTED`
     * instead for those errors). `PERMISSION_DENIED` must not be
     * used if the caller can not be identified (use `UNAUTHENTICATED`
     * instead for those errors). This error code does not imply the
     * request is valid or the requested entity exists or satisfies
     * other pre-conditions.
     *
     * HTTP Mapping: 403 Forbidden
     */
    Code["PERMISSION_DENIED"] = "PERMISSION_DENIED";
    /**
     * UNAUTHENTICATED - The request does not have valid authentication credentials for the
     * operation.
     *
     * HTTP Mapping: 401 Unauthorized
     */
    Code["UNAUTHENTICATED"] = "UNAUTHENTICATED";
    /**
     * RESOURCE_EXHAUSTED - Some resource has been exhausted, perhaps a per-user quota, or
     * perhaps the entire file system is out of space.
     *
     * HTTP Mapping: 429 Too Many Requests
     */
    Code["RESOURCE_EXHAUSTED"] = "RESOURCE_EXHAUSTED";
    /**
     * FAILED_PRECONDITION - The operation was rejected because the system is not in a state
     * required for the operation's execution.  For example, the directory
     * to be deleted is non-empty, an rmdir operation is applied to
     * a non-directory, etc.
     *
     * Service implementors can use the following guidelines to decide
     * between `FAILED_PRECONDITION`, `ABORTED`, and `UNAVAILABLE`:
     *  (a) Use `UNAVAILABLE` if the client can retry just the failing call.
     *  (b) Use `ABORTED` if the client should retry at a higher level. For
     *      example, when a client-specified test-and-set fails, indicating the
     *      client should restart a read-modify-write sequence.
     *  (c) Use `FAILED_PRECONDITION` if the client should not retry until
     *      the system state has been explicitly fixed. For example, if an "rmdir"
     *      fails because the directory is non-empty, `FAILED_PRECONDITION`
     *      should be returned since the client should not retry unless
     *      the files are deleted from the directory.
     *
     * HTTP Mapping: 400 Bad Request
     */
    Code["FAILED_PRECONDITION"] = "FAILED_PRECONDITION";
    /**
     * ABORTED - The operation was aborted, typically due to a concurrency issue such as
     * a sequencer check failure or transaction abort.
     *
     * See the guidelines above for deciding between `FAILED_PRECONDITION`,
     * `ABORTED`, and `UNAVAILABLE`.
     *
     * HTTP Mapping: 409 Conflict
     */
    Code["ABORTED"] = "ABORTED";
    /**
     * OUT_OF_RANGE - The operation was attempted past the valid range.  E.g., seeking or
     * reading past end-of-file.
     *
     * Unlike `INVALID_ARGUMENT`, this error indicates a problem that may
     * be fixed if the system state changes. For example, a 32-bit file
     * system will generate `INVALID_ARGUMENT` if asked to read at an
     * offset that is not in the range [0,2^32-1], but it will generate
     * `OUT_OF_RANGE` if asked to read from an offset past the current
     * file size.
     *
     * There is a fair bit of overlap between `FAILED_PRECONDITION` and
     * `OUT_OF_RANGE`.  We recommend using `OUT_OF_RANGE` (the more specific
     * error) when it applies so that callers who are iterating through
     * a space can easily look for an `OUT_OF_RANGE` error to detect when
     * they are done.
     *
     * HTTP Mapping: 400 Bad Request
     */
    Code["OUT_OF_RANGE"] = "OUT_OF_RANGE";
    /**
     * UNIMPLEMENTED - The operation is not implemented or is not supported/enabled in this
     * service.
     *
     * HTTP Mapping: 501 Not Implemented
     */
    Code["UNIMPLEMENTED"] = "UNIMPLEMENTED";
    /**
     * INTERNAL - Internal errors.  This means that some invariants expected by the
     * underlying system have been broken.  This error code is reserved
     * for serious errors.
     *
     * HTTP Mapping: 500 Internal Server Error
     */
    Code["INTERNAL"] = "INTERNAL";
    /**
     * UNAVAILABLE - The service is currently unavailable.  This is most likely a
     * transient condition, which can be corrected by retrying with
     * a backoff. Note that it is not always safe to retry
     * non-idempotent operations.
     *
     * See the guidelines above for deciding between `FAILED_PRECONDITION`,
     * `ABORTED`, and `UNAVAILABLE`.
     *
     * HTTP Mapping: 503 Service Unavailable
     */
    Code["UNAVAILABLE"] = "UNAVAILABLE";
    /**
     * DATA_LOSS - Unrecoverable data loss or corruption.
     *
     * HTTP Mapping: 500 Internal Server Error
     */
    Code["DATA_LOSS"] = "DATA_LOSS";
    Code["UNRECOGNIZED"] = "UNRECOGNIZED";
})(Code || (exports.Code = Code = {}));
function codeFromJSON(object) {
    switch (object) {
        case 0:
        case "OK":
            return Code.OK;
        case 1:
        case "CANCELLED":
            return Code.CANCELLED;
        case 2:
        case "UNKNOWN":
            return Code.UNKNOWN;
        case 3:
        case "INVALID_ARGUMENT":
            return Code.INVALID_ARGUMENT;
        case 4:
        case "DEADLINE_EXCEEDED":
            return Code.DEADLINE_EXCEEDED;
        case 5:
        case "NOT_FOUND":
            return Code.NOT_FOUND;
        case 6:
        case "ALREADY_EXISTS":
            return Code.ALREADY_EXISTS;
        case 7:
        case "PERMISSION_DENIED":
            return Code.PERMISSION_DENIED;
        case 16:
        case "UNAUTHENTICATED":
            return Code.UNAUTHENTICATED;
        case 8:
        case "RESOURCE_EXHAUSTED":
            return Code.RESOURCE_EXHAUSTED;
        case 9:
        case "FAILED_PRECONDITION":
            return Code.FAILED_PRECONDITION;
        case 10:
        case "ABORTED":
            return Code.ABORTED;
        case 11:
        case "OUT_OF_RANGE":
            return Code.OUT_OF_RANGE;
        case 12:
        case "UNIMPLEMENTED":
            return Code.UNIMPLEMENTED;
        case 13:
        case "INTERNAL":
            return Code.INTERNAL;
        case 14:
        case "UNAVAILABLE":
            return Code.UNAVAILABLE;
        case 15:
        case "DATA_LOSS":
            return Code.DATA_LOSS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Code.UNRECOGNIZED;
    }
}
exports.codeFromJSON = codeFromJSON;
function codeToJSON(object) {
    switch (object) {
        case Code.OK:
            return "OK";
        case Code.CANCELLED:
            return "CANCELLED";
        case Code.UNKNOWN:
            return "UNKNOWN";
        case Code.INVALID_ARGUMENT:
            return "INVALID_ARGUMENT";
        case Code.DEADLINE_EXCEEDED:
            return "DEADLINE_EXCEEDED";
        case Code.NOT_FOUND:
            return "NOT_FOUND";
        case Code.ALREADY_EXISTS:
            return "ALREADY_EXISTS";
        case Code.PERMISSION_DENIED:
            return "PERMISSION_DENIED";
        case Code.UNAUTHENTICATED:
            return "UNAUTHENTICATED";
        case Code.RESOURCE_EXHAUSTED:
            return "RESOURCE_EXHAUSTED";
        case Code.FAILED_PRECONDITION:
            return "FAILED_PRECONDITION";
        case Code.ABORTED:
            return "ABORTED";
        case Code.OUT_OF_RANGE:
            return "OUT_OF_RANGE";
        case Code.UNIMPLEMENTED:
            return "UNIMPLEMENTED";
        case Code.INTERNAL:
            return "INTERNAL";
        case Code.UNAVAILABLE:
            return "UNAVAILABLE";
        case Code.DATA_LOSS:
            return "DATA_LOSS";
        case Code.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.codeToJSON = codeToJSON;
function codeToNumber(object) {
    switch (object) {
        case Code.OK:
            return 0;
        case Code.CANCELLED:
            return 1;
        case Code.UNKNOWN:
            return 2;
        case Code.INVALID_ARGUMENT:
            return 3;
        case Code.DEADLINE_EXCEEDED:
            return 4;
        case Code.NOT_FOUND:
            return 5;
        case Code.ALREADY_EXISTS:
            return 6;
        case Code.PERMISSION_DENIED:
            return 7;
        case Code.UNAUTHENTICATED:
            return 16;
        case Code.RESOURCE_EXHAUSTED:
            return 8;
        case Code.FAILED_PRECONDITION:
            return 9;
        case Code.ABORTED:
            return 10;
        case Code.OUT_OF_RANGE:
            return 11;
        case Code.UNIMPLEMENTED:
            return 12;
        case Code.INTERNAL:
            return 13;
        case Code.UNAVAILABLE:
            return 14;
        case Code.DATA_LOSS:
            return 15;
        case Code.UNRECOGNIZED:
        default:
            return -1;
    }
}
exports.codeToNumber = codeToNumber;
