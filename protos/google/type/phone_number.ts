/* eslint-disable */
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
  e164_number?:
    | string
    | undefined;
  /**
   * A short code.
   *
   * Reference(s):
   *  - https://en.wikipedia.org/wiki/Short_code
   */
  short_code?:
    | PhoneNumber_ShortCode
    | undefined;
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
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
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
  region_code?:
    | string
    | undefined;
  /**
   * Required. The short code digits, without a leading plus ('+') or country
   * calling code, e.g. "611".
   */
  number?: string | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

function createBasePhoneNumber(): PhoneNumber {
  return {};
}

export const PhoneNumber = {
  encode(message: PhoneNumber, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.e164_number !== undefined) {
      writer.uint32(10).string(message.e164_number);
    }
    if (message.short_code !== undefined) {
      PhoneNumber_ShortCode.encode(message.short_code, writer.uint32(18).fork()).ldelim();
    }
    if (message.extension !== undefined && message.extension !== "") {
      writer.uint32(26).string(message.extension);
    }
    if (message._unknownFields !== undefined) {
      for (const [key, values] of Object.entries(message._unknownFields)) {
        const tag = parseInt(key, 10);
        for (const value of values) {
          writer.uint32(tag);
          (writer as any)["_push"](
            (val: Uint8Array, buf: Buffer, pos: number) => buf.set(val, pos),
            value.length,
            value,
          );
        }
      }
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PhoneNumber {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePhoneNumber();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.e164_number = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.short_code = PhoneNumber_ShortCode.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.extension = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      const startPos = reader.pos;
      reader.skipType(tag & 7);
      const buf = reader.buf.slice(startPos, reader.pos);

      if (message._unknownFields === undefined) {
        message._unknownFields = {};
      }

      const list = message._unknownFields[tag];

      if (list === undefined) {
        message._unknownFields[tag] = [buf];
      } else {
        list.push(buf);
      }
    }
    return message;
  },

  fromJSON(object: any): PhoneNumber {
    return {
      e164_number: isSet(object.e164_number) ? String(object.e164_number) : undefined,
      short_code: isSet(object.short_code) ? PhoneNumber_ShortCode.fromJSON(object.short_code) : undefined,
      extension: isSet(object.extension) ? String(object.extension) : undefined,
    };
  },

  toJSON(message: PhoneNumber): unknown {
    const obj: any = {};
    if (message.e164_number !== undefined) {
      obj.e164_number = message.e164_number;
    }
    if (message.short_code !== undefined) {
      obj.short_code = PhoneNumber_ShortCode.toJSON(message.short_code);
    }
    if (message.extension !== undefined && message.extension !== "") {
      obj.extension = message.extension;
    }
    return obj;
  },
};

function createBasePhoneNumber_ShortCode(): PhoneNumber_ShortCode {
  return {};
}

export const PhoneNumber_ShortCode = {
  encode(message: PhoneNumber_ShortCode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.region_code !== undefined && message.region_code !== "") {
      writer.uint32(10).string(message.region_code);
    }
    if (message.number !== undefined && message.number !== "") {
      writer.uint32(18).string(message.number);
    }
    if (message._unknownFields !== undefined) {
      for (const [key, values] of Object.entries(message._unknownFields)) {
        const tag = parseInt(key, 10);
        for (const value of values) {
          writer.uint32(tag);
          (writer as any)["_push"](
            (val: Uint8Array, buf: Buffer, pos: number) => buf.set(val, pos),
            value.length,
            value,
          );
        }
      }
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PhoneNumber_ShortCode {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePhoneNumber_ShortCode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.region_code = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.number = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      const startPos = reader.pos;
      reader.skipType(tag & 7);
      const buf = reader.buf.slice(startPos, reader.pos);

      if (message._unknownFields === undefined) {
        message._unknownFields = {};
      }

      const list = message._unknownFields[tag];

      if (list === undefined) {
        message._unknownFields[tag] = [buf];
      } else {
        list.push(buf);
      }
    }
    return message;
  },

  fromJSON(object: any): PhoneNumber_ShortCode {
    return {
      region_code: isSet(object.region_code) ? String(object.region_code) : undefined,
      number: isSet(object.number) ? String(object.number) : undefined,
    };
  },

  toJSON(message: PhoneNumber_ShortCode): unknown {
    const obj: any = {};
    if (message.region_code !== undefined && message.region_code !== "") {
      obj.region_code = message.region_code;
    }
    if (message.number !== undefined && message.number !== "") {
      obj.number = message.number;
    }
    return obj;
  },
};

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
