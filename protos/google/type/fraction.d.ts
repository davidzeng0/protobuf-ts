import _m0 from "protobufjs/minimal";
/** Represents a fraction in terms of a numerator divided by a denominator. */
export interface Fraction {
    /** The numerator in the fraction, e.g. 2 in 2/3. */
    numerator?: bigint | undefined;
    /**
     * The value by which the numerator is divided, e.g. 3 in 2/3. Must be
     * positive.
     */
    denominator?: bigint | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
export declare const Fraction: {
    encode(message: Fraction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Fraction;
    fromJSON(object: any): Fraction;
    toJSON(message: Fraction): unknown;
};
