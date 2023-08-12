import _m0 from "protobufjs/minimal";
/** A description of a label. */
export interface LabelDescriptor {
    /** The label key. */
    key?: string | undefined;
    /** The type of data that can be assigned to the label. */
    value_type?: LabelDescriptor_ValueType | undefined;
    /** A human-readable description for the label. */
    description?: string | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
/** Value types that can be used as label values. */
export declare enum LabelDescriptor_ValueType {
    /** STRING - A variable-length string. This is the default. */
    STRING = "STRING",
    /** BOOL - Boolean; true or false. */
    BOOL = "BOOL",
    /** INT64 - A 64-bit signed integer. */
    INT64 = "INT64",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function labelDescriptor_ValueTypeFromJSON(object: any): LabelDescriptor_ValueType;
export declare function labelDescriptor_ValueTypeToJSON(object: LabelDescriptor_ValueType): string;
export declare function labelDescriptor_ValueTypeToNumber(object: LabelDescriptor_ValueType): number;
export declare const LabelDescriptor: {
    encode(message: LabelDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LabelDescriptor;
    fromJSON(object: any): LabelDescriptor;
    toJSON(message: LabelDescriptor): unknown;
};
