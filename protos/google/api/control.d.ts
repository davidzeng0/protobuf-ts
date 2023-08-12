import _m0 from "protobufjs/minimal";
/**
 * Selects and configures the service controller used by the service.
 *
 * Example:
 *
 *     control:
 *       environment: servicecontrol.googleapis.com
 */
export interface Control {
    /**
     * The service controller environment to use. If empty, no control plane
     * feature (like quota and billing) will be enabled. The recommended value for
     * most services is servicecontrol.googleapis.com
     */
    environment?: string | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
export declare const Control: {
    encode(message: Control, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Control;
    fromJSON(object: any): Control;
    toJSON(message: Control): unknown;
};
