import _m0 from "protobufjs/minimal";
import { Any } from "../protobuf/any";
/** Source information used to create a Service Config */
export interface SourceInfo {
    /** All files used during config generation. */
    source_files?: Any[] | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
export declare const SourceInfo: {
    encode(message: SourceInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SourceInfo;
    fromJSON(object: any): SourceInfo;
    toJSON(message: SourceInfo): unknown;
};
