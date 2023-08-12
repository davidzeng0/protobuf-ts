import _m0 from "protobufjs/minimal";
/** Localized variant of a text in a particular language. */
export interface LocalizedText {
    /** Localized string in the language corresponding to `language_code' below. */
    text?: string | undefined;
    /**
     * The text's BCP-47 language code, such as "en-US" or "sr-Latn".
     *
     * For more information, see
     * http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
     */
    language_code?: string | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
export declare const LocalizedText: {
    encode(message: LocalizedText, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LocalizedText;
    fromJSON(object: any): LocalizedText;
    toJSON(message: LocalizedText): unknown;
};
