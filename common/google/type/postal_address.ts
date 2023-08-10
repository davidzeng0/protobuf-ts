/* eslint-disable */
import _m0 from "protobufjs/minimal";

/**
 * Represents a postal address, e.g. for postal delivery or payments addresses.
 * Given a postal address, a postal service can deliver items to a premise, P.O.
 * Box or similar.
 * It is not intended to model geographical locations (roads, towns,
 * mountains).
 *
 * In typical usage an address would be created via user input or from importing
 * existing data, depending on the type of process.
 *
 * Advice on address input / editing:
 *  - Use an i18n-ready address widget such as
 *    https://github.com/google/libaddressinput)
 * - Users should not be presented with UI elements for input or editing of
 *   fields outside countries where that field is used.
 *
 * For more guidance on how to use this schema, please see:
 * https://support.google.com/business/answer/6397478
 */
export interface PostalAddress {
  /**
   * The schema revision of the `PostalAddress`. This must be set to 0, which is
   * the latest revision.
   *
   * All new revisions **must** be backward compatible with old revisions.
   */
  revision?:
    | number
    | undefined;
  /**
   * Required. CLDR region code of the country/region of the address. This
   * is never inferred and it is up to the user to ensure the value is
   * correct. See http://cldr.unicode.org/ and
   * http://www.unicode.org/cldr/charts/30/supplemental/territory_information.html
   * for details. Example: "CH" for Switzerland.
   */
  region_code?:
    | string
    | undefined;
  /**
   * Optional. BCP-47 language code of the contents of this address (if
   * known). This is often the UI language of the input form or is expected
   * to match one of the languages used in the address' country/region, or their
   * transliterated equivalents.
   * This can affect formatting in certain countries, but is not critical
   * to the correctness of the data and will never affect any validation or
   * other non-formatting related operations.
   *
   * If this value is not known, it should be omitted (rather than specifying a
   * possibly incorrect default).
   *
   * Examples: "zh-Hant", "ja", "ja-Latn", "en".
   */
  language_code?:
    | string
    | undefined;
  /**
   * Optional. Postal code of the address. Not all countries use or require
   * postal codes to be present, but where they are used, they may trigger
   * additional validation with other parts of the address (e.g. state/zip
   * validation in the U.S.A.).
   */
  postal_code?:
    | string
    | undefined;
  /**
   * Optional. Additional, country-specific, sorting code. This is not used
   * in most regions. Where it is used, the value is either a string like
   * "CEDEX", optionally followed by a number (e.g. "CEDEX 7"), or just a number
   * alone, representing the "sector code" (Jamaica), "delivery area indicator"
   * (Malawi) or "post office indicator" (e.g. Côte d'Ivoire).
   */
  sorting_code?:
    | string
    | undefined;
  /**
   * Optional. Highest administrative subdivision which is used for postal
   * addresses of a country or region.
   * For example, this can be a state, a province, an oblast, or a prefecture.
   * Specifically, for Spain this is the province and not the autonomous
   * community (e.g. "Barcelona" and not "Catalonia").
   * Many countries don't use an administrative area in postal addresses. E.g.
   * in Switzerland this should be left unpopulated.
   */
  administrative_area?:
    | string
    | undefined;
  /**
   * Optional. Generally refers to the city/town portion of the address.
   * Examples: US city, IT comune, UK post town.
   * In regions of the world where localities are not well defined or do not fit
   * into this structure well, leave locality empty and use address_lines.
   */
  locality?:
    | string
    | undefined;
  /**
   * Optional. Sublocality of the address.
   * For example, this can be neighborhoods, boroughs, districts.
   */
  sublocality?:
    | string
    | undefined;
  /**
   * Unstructured address lines describing the lower levels of an address.
   *
   * Because values in address_lines do not have type information and may
   * sometimes contain multiple values in a single field (e.g.
   * "Austin, TX"), it is important that the line order is clear. The order of
   * address lines should be "envelope order" for the country/region of the
   * address. In places where this can vary (e.g. Japan), address_language is
   * used to make it explicit (e.g. "ja" for large-to-small ordering and
   * "ja-Latn" or "en" for small-to-large). This way, the most specific line of
   * an address can be selected based on the language.
   *
   * The minimum permitted structural representation of an address consists
   * of a region_code with all remaining information placed in the
   * address_lines. It would be possible to format such an address very
   * approximately without geocoding, but no semantic reasoning could be
   * made about any of the address components until it was at least
   * partially resolved.
   *
   * Creating an address only containing a region_code and address_lines, and
   * then geocoding is the recommended way to handle completely unstructured
   * addresses (as opposed to guessing which parts of the address should be
   * localities or administrative areas).
   */
  address_lines?:
    | string[]
    | undefined;
  /**
   * Optional. The recipient at the address.
   * This field may, under certain circumstances, contain multiline information.
   * For example, it might contain "care of" information.
   */
  recipients?:
    | string[]
    | undefined;
  /** Optional. The name of the organization at the address. */
  organization?: string | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

function createBasePostalAddress(): PostalAddress {
  return {};
}

export const PostalAddress = {
  encode(message: PostalAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.revision !== undefined && message.revision !== 0) {
      writer.uint32(8).int32(message.revision);
    }
    if (message.region_code !== undefined && message.region_code !== "") {
      writer.uint32(18).string(message.region_code);
    }
    if (message.language_code !== undefined && message.language_code !== "") {
      writer.uint32(26).string(message.language_code);
    }
    if (message.postal_code !== undefined && message.postal_code !== "") {
      writer.uint32(34).string(message.postal_code);
    }
    if (message.sorting_code !== undefined && message.sorting_code !== "") {
      writer.uint32(42).string(message.sorting_code);
    }
    if (message.administrative_area !== undefined && message.administrative_area !== "") {
      writer.uint32(50).string(message.administrative_area);
    }
    if (message.locality !== undefined && message.locality !== "") {
      writer.uint32(58).string(message.locality);
    }
    if (message.sublocality !== undefined && message.sublocality !== "") {
      writer.uint32(66).string(message.sublocality);
    }
    if (message.address_lines !== undefined && message.address_lines.length !== 0) {
      for (const v of message.address_lines) {
        writer.uint32(74).string(v!);
      }
    }
    if (message.recipients !== undefined && message.recipients.length !== 0) {
      for (const v of message.recipients) {
        writer.uint32(82).string(v!);
      }
    }
    if (message.organization !== undefined && message.organization !== "") {
      writer.uint32(90).string(message.organization);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): PostalAddress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePostalAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.revision = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.region_code = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.language_code = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.postal_code = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.sorting_code = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.administrative_area = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.locality = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.sublocality = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          if (message.address_lines === undefined) {
            message.address_lines = [];
          }
          message.address_lines!.push(reader.string());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          if (message.recipients === undefined) {
            message.recipients = [];
          }
          message.recipients!.push(reader.string());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.organization = reader.string();
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

  fromJSON(object: any): PostalAddress {
    return {
      revision: isSet(object.revision) ? Number(object.revision) : undefined,
      region_code: isSet(object.region_code) ? String(object.region_code) : undefined,
      language_code: isSet(object.language_code) ? String(object.language_code) : undefined,
      postal_code: isSet(object.postal_code) ? String(object.postal_code) : undefined,
      sorting_code: isSet(object.sorting_code) ? String(object.sorting_code) : undefined,
      administrative_area: isSet(object.administrative_area) ? String(object.administrative_area) : undefined,
      locality: isSet(object.locality) ? String(object.locality) : undefined,
      sublocality: isSet(object.sublocality) ? String(object.sublocality) : undefined,
      address_lines: Array.isArray(object?.address_lines) ? object.address_lines.map((e: any) => String(e)) : undefined,
      recipients: Array.isArray(object?.recipients) ? object.recipients.map((e: any) => String(e)) : undefined,
      organization: isSet(object.organization) ? String(object.organization) : undefined,
    };
  },

  toJSON(message: PostalAddress): unknown {
    const obj: any = {};
    if (message.revision !== undefined && message.revision !== 0) {
      obj.revision = Math.round(message.revision);
    }
    if (message.region_code !== undefined && message.region_code !== "") {
      obj.region_code = message.region_code;
    }
    if (message.language_code !== undefined && message.language_code !== "") {
      obj.language_code = message.language_code;
    }
    if (message.postal_code !== undefined && message.postal_code !== "") {
      obj.postal_code = message.postal_code;
    }
    if (message.sorting_code !== undefined && message.sorting_code !== "") {
      obj.sorting_code = message.sorting_code;
    }
    if (message.administrative_area !== undefined && message.administrative_area !== "") {
      obj.administrative_area = message.administrative_area;
    }
    if (message.locality !== undefined && message.locality !== "") {
      obj.locality = message.locality;
    }
    if (message.sublocality !== undefined && message.sublocality !== "") {
      obj.sublocality = message.sublocality;
    }
    if (message.address_lines?.length) {
      obj.address_lines = message.address_lines;
    }
    if (message.recipients?.length) {
      obj.recipients = message.recipients;
    }
    if (message.organization !== undefined && message.organization !== "") {
      obj.organization = message.organization;
    }
    return obj;
  },
};

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
