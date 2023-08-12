import _m0 from "protobufjs/minimal";
/** Represents an amount of money with its currency type. */
export interface Money {
    /** The three-letter currency code defined in ISO 4217. */
    currency_code?: string | undefined;
    /**
     * The whole units of the amount.
     * For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.
     */
    units?: bigint | undefined;
    /**
     * Number of nano (10^-9) units of the amount.
     * The value must be between -999,999,999 and +999,999,999 inclusive.
     * If `units` is positive, `nanos` must be positive or zero.
     * If `units` is zero, `nanos` can be positive, zero, or negative.
     * If `units` is negative, `nanos` must be negative or zero.
     * For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
     */
    nanos?: number | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
export declare const Money: {
    encode(message: Money, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Money;
    fromJSON(object: any): Money;
    toJSON(message: Money): unknown;
};
