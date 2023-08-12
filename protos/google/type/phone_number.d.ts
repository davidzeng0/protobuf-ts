import _m0 from "protobufjs/minimal";
/**
 * An object representing a phone number, suitable as an API wire format.
 *
 * This representation:
 *
 *  - should not be used for locale-specific formatting of a phone number, such
 *    as "+1 (650) 253-0000 ext. 123"
 *
 *  - is not designed for efficient storage
 *  - may not be suitable for dialing - specialized libraries (see references)
 *    should be used to parse the number for that purpose
 *
 * To do something meaningful with this number, such as format it for various
 * use-cases, convert it to an `i18n.phonenumbers.PhoneNumber` object first.
 *
 * For instance, in Java this would be:
 *
 *    com.google.type.PhoneNumber wireProto =
 *        com.google.type.PhoneNumber.newBuilder().build();
 *    com.google.i18n.phonenumbers.Phonenumber.PhoneNumber phoneNumber =
 *        PhoneNumberUtil.getInstance().parse(wireProto.getE164Number(), "ZZ");
 *    if (!wireProto.getExtension().isEmpty()) {
 *      phoneNumber.setExtension(wireProto.getExtension());
 *    }
 *
 *  Reference(s):
 *   - https://github.com/google/libphonenumber
 */
export interface PhoneNumber {
    /**
     * The phone number, represented as a leading plus sign ('+'), followed by a
     * phone number that uses a relaxed ITU E.164 format consisting of the
     * country calling code (1 to 3 digits) and the subscriber number, with no
     * additional spaces or formatting, e.g.:
     *  - correct: "+15552220123"
     *  - incorrect: "+1 (555) 222-01234 x123".
     *
     * The ITU E.164 format limits the latter to 12 digits, but in practice not
     * all countries respect that, so we relax that restriction here.
     * National-only numbers are not allowed.
     *
     * References:
     *  - https://www.itu.int/rec/T-REC-E.164-201011-I
     *  - https://en.wikipedia.org/wiki/E.164.
     *  - https://en.wikipedia.org/wiki/List_of_country_calling_codes
     */
    e164_number?: string | undefined;
    /**
     * A short code.
     *
     * Reference(s):
     *  - https://en.wikipedia.org/wiki/Short_code
     */
    short_code?: PhoneNumber_ShortCode | undefined;
    /**
     * The phone number's extension. The extension is not standardized in ITU
     * recommendations, except for being defined as a series of numbers with a
     * maximum length of 40 digits. Other than digits, some other dialing
     * characters such as ',' (indicating a wait) or '#' may be stored here.
     *
     * Note that no regions currently use extensions with short codes, so this
     * field is normally only set in conjunction with an E.164 number. It is held
     * separately from the E.164 number to allow for short code extensions in the
     * future.
     */
    extension?: string | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
/**
 * An object representing a short code, which is a phone number that is
 * typically much shorter than regular phone numbers and can be used to
 * address messages in MMS and SMS systems, as well as for abbreviated dialing
 * (e.g. "Text 611 to see how many minutes you have remaining on your plan.").
 *
 * Short codes are restricted to a region and are not internationally
 * dialable, which means the same short code can exist in different regions,
 * with different usage and pricing, even if those regions share the same
 * country calling code (e.g. US and CA).
 */
export interface PhoneNumber_ShortCode {
    /**
     * Required. The BCP-47 region code of the location where calls to this
     * short code can be made, such as "US" and "BB".
     *
     * Reference(s):
     *  - http://www.unicode.org/reports/tr35/#unicode_region_subtag
     */
    region_code?: string | undefined;
    /**
     * Required. The short code digits, without a leading plus ('+') or country
     * calling code, e.g. "611".
     */
    number?: string | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
export declare const PhoneNumber: {
    encode(message: PhoneNumber, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PhoneNumber;
    fromJSON(object: any): PhoneNumber;
    toJSON(message: PhoneNumber): unknown;
};
export declare const PhoneNumber_ShortCode: {
    encode(message: PhoneNumber_ShortCode, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PhoneNumber_ShortCode;
    fromJSON(object: any): PhoneNumber_ShortCode;
    toJSON(message: PhoneNumber_ShortCode): unknown;
};
