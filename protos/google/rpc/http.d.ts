/// <reference types="node" />
import _m0 from "protobufjs/minimal";
/** Represents an HTTP request. */
export interface HttpRequest {
    /** The HTTP request method. */
    method?: string | undefined;
    /** The HTTP request URI. */
    uri?: string | undefined;
    /**
     * The HTTP request headers. The ordering of the headers is significant.
     * Multiple headers with the same key may present for the request.
     */
    headers?: HttpHeader[] | undefined;
    /** The HTTP request body. If the body is not expected, it should be empty. */
    body?: Buffer | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
/** Represents an HTTP response. */
export interface HttpResponse {
    /** The HTTP status code, such as 200 or 404. */
    status?: number | undefined;
    /** The HTTP reason phrase, such as "OK" or "Not Found". */
    reason?: string | undefined;
    /**
     * The HTTP response headers. The ordering of the headers is significant.
     * Multiple headers with the same key may present for the response.
     */
    headers?: HttpHeader[] | undefined;
    /** The HTTP response body. If the body is not expected, it should be empty. */
    body?: Buffer | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
/** Represents an HTTP header. */
export interface HttpHeader {
    /** The HTTP header key. It is case insensitive. */
    key?: string | undefined;
    /** The HTTP header value. */
    value?: string | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
export declare const HttpRequest: {
    encode(message: HttpRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HttpRequest;
    fromJSON(object: any): HttpRequest;
    toJSON(message: HttpRequest): unknown;
};
export declare const HttpResponse: {
    encode(message: HttpResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HttpResponse;
    fromJSON(object: any): HttpResponse;
    toJSON(message: HttpResponse): unknown;
};
export declare const HttpHeader: {
    encode(message: HttpHeader, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HttpHeader;
    fromJSON(object: any): HttpHeader;
    toJSON(message: HttpHeader): unknown;
};
