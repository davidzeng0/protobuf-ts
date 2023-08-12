/// <reference types="node" />
import _m0 from "protobufjs/minimal";
/** `AuditContext` provides information that is needed for audit logging. */
export interface AuditContext {
    /** Serialized audit log. */
    audit_log?: Buffer | undefined;
    /**
     * An API request message that is scrubbed based on the method annotation.
     * This field should only be filled if audit_log field is present.
     * Service Control will use this to assemble a complete log for Cloud Audit
     * Logs and Google internal audit logs.
     */
    scrubbed_request?: {
        [key: string]: any;
    } | undefined;
    /**
     * An API response message that is scrubbed based on the method annotation.
     * This field should only be filled if audit_log field is present.
     * Service Control will use this to assemble a complete log for Cloud Audit
     * Logs and Google internal audit logs.
     */
    scrubbed_response?: {
        [key: string]: any;
    } | undefined;
    /** Number of scrubbed response items. */
    scrubbed_response_item_count?: number | undefined;
    /** Audit resource name which is scrubbed. */
    target_resource?: string | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
export declare const AuditContext: {
    encode(message: AuditContext, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AuditContext;
    fromJSON(object: any): AuditContext;
    toJSON(message: AuditContext): unknown;
};
