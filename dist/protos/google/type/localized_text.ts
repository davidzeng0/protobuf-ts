/* eslint-disable */
import _m0 from "protobufjs/minimal";

/** Localized variant of a text in a particular language. */
export interface LocalizedText {
  /** Localized string in the language corresponding to `language_code' below. */
  text?:
    | string
    | undefined;
  /**
   * The text's BCP-47 language code, such as "en-US" or "sr-Latn".
   *
   * For more information, see
   * http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
   */
  language_code?: string | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

function createBaseLocalizedText(): LocalizedText {
  return {};
}

export const LocalizedText = {
  encode(message: LocalizedText, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.text !== undefined && message.text !== "") {
      writer.uint32(10).string(message.text);
    }
    if (message.language_code !== undefined && message.language_code !== "") {
      writer.uint32(18).string(message.language_code);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): LocalizedText {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLocalizedText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.text = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.language_code = reader.string();
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

  fromJSON(object: any): LocalizedText {
    return {
      text: isSet(object.text) ? String(object.text) : undefined,
      language_code: isSet(object.language_code) ? String(object.language_code) : undefined,
    };
  },

  toJSON(message: LocalizedText): unknown {
    const obj: any = {};
    if (message.text !== undefined && message.text !== "") {
      obj.text = message.text;
    }
    if (message.language_code !== undefined && message.language_code !== "") {
      obj.language_code = message.language_code;
    }
    return obj;
  },
};

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
