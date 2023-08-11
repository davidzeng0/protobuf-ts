/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { FloatValue } from "../protobuf/wrappers";

/**
 * Represents a color in the RGBA color space. This representation is designed
 * for simplicity of conversion to/from color representations in various
 * languages over compactness. For example, the fields of this representation
 * can be trivially provided to the constructor of `java.awt.Color` in Java; it
 * can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha`
 * method in iOS; and, with just a little work, it can be easily formatted into
 * a CSS `rgba()` string in JavaScript.
 *
 * This reference page doesn't carry information about the absolute color
 * space
 * that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB,
 * DCI-P3, BT.2020, etc.). By default, applications should assume the sRGB color
 * space.
 *
 * When color equality needs to be decided, implementations, unless
 * documented otherwise, treat two colors as equal if all their red,
 * green, blue, and alpha values each differ by at most 1e-5.
 *
 * Example (Java):
 *
 *      import com.google.type.Color;
 *
 *      // ...
 *      public static java.awt.Color fromProto(Color protocolor) {
 *        float alpha = protocolor.hasAlpha()
 *            ? protocolor.getAlpha().getValue()
 *            : 1.0;
 *
 *        return new java.awt.Color(
 *            protocolor.getRed(),
 *            protocolor.getGreen(),
 *            protocolor.getBlue(),
 *            alpha);
 *      }
 *
 *      public static Color toProto(java.awt.Color color) {
 *        float red = (float) color.getRed();
 *        float green = (float) color.getGreen();
 *        float blue = (float) color.getBlue();
 *        float denominator = 255.0;
 *        Color.Builder resultBuilder =
 *            Color
 *                .newBuilder()
 *                .setRed(red / denominator)
 *                .setGreen(green / denominator)
 *                .setBlue(blue / denominator);
 *        int alpha = color.getAlpha();
 *        if (alpha != 255) {
 *          result.setAlpha(
 *              FloatValue
 *                  .newBuilder()
 *                  .setValue(((float) alpha) / denominator)
 *                  .build());
 *        }
 *        return resultBuilder.build();
 *      }
 *      // ...
 *
 * Example (iOS / Obj-C):
 *
 *      // ...
 *      static UIColor* fromProto(Color* protocolor) {
 *         float red = [protocolor red];
 *         float green = [protocolor green];
 *         float blue = [protocolor blue];
 *         FloatValue* alpha_wrapper = [protocolor alpha];
 *         float alpha = 1.0;
 *         if (alpha_wrapper != nil) {
 *           alpha = [alpha_wrapper value];
 *         }
 *         return [UIColor colorWithRed:red green:green blue:blue alpha:alpha];
 *      }
 *
 *      static Color* toProto(UIColor* color) {
 *          CGFloat red, green, blue, alpha;
 *          if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) {
 *            return nil;
 *          }
 *          Color* result = [[Color alloc] init];
 *          [result setRed:red];
 *          [result setGreen:green];
 *          [result setBlue:blue];
 *          if (alpha <= 0.9999) {
 *            [result setAlpha:floatWrapperWithValue(alpha)];
 *          }
 *          [result autorelease];
 *          return result;
 *     }
 *     // ...
 *
 *  Example (JavaScript):
 *
 *     // ...
 *
 *     var protoToCssColor = function(rgb_color) {
 *        var redFrac = rgb_color.red || 0.0;
 *        var greenFrac = rgb_color.green || 0.0;
 *        var blueFrac = rgb_color.blue || 0.0;
 *        var red = Math.floor(redFrac * 255);
 *        var green = Math.floor(greenFrac * 255);
 *        var blue = Math.floor(blueFrac * 255);
 *
 *        if (!('alpha' in rgb_color)) {
 *           return rgbToCssColor(red, green, blue);
 *        }
 *
 *        var alphaFrac = rgb_color.alpha.value || 0.0;
 *        var rgbParams = [red, green, blue].join(',');
 *        return ['rgba(', rgbParams, ',', alphaFrac, ')'].join('');
 *     };
 *
 *     var rgbToCssColor = function(red, green, blue) {
 *       var rgbNumber = new Number((red << 16) | (green << 8) | blue);
 *       var hexString = rgbNumber.toString(16);
 *       var missingZeros = 6 - hexString.length;
 *       var resultBuilder = ['#'];
 *       for (var i = 0; i < missingZeros; i++) {
 *          resultBuilder.push('0');
 *       }
 *       resultBuilder.push(hexString);
 *       return resultBuilder.join('');
 *     };
 *
 *     // ...
 */
export interface Color {
  /** The amount of red in the color as a value in the interval [0, 1]. */
  red?:
    | number
    | undefined;
  /** The amount of green in the color as a value in the interval [0, 1]. */
  green?:
    | number
    | undefined;
  /** The amount of blue in the color as a value in the interval [0, 1]. */
  blue?:
    | number
    | undefined;
  /**
   * The fraction of this color that should be applied to the pixel. That is,
   * the final pixel color is defined by the equation:
   *
   *   `pixel color = alpha * (this color) + (1.0 - alpha) * (background color)`
   *
   * This means that a value of 1.0 corresponds to a solid color, whereas
   * a value of 0.0 corresponds to a completely transparent color. This
   * uses a wrapper message rather than a simple float scalar so that it is
   * possible to distinguish between a default value and the value being unset.
   * If omitted, this color object is rendered as a solid color
   * (as if the alpha value had been explicitly given a value of 1.0).
   */
  alpha?: number | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

function createBaseColor(): Color {
  return {};
}

export const Color = {
  encode(message: Color, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.red !== undefined && message.red !== 0) {
      writer.uint32(13).float(message.red);
    }
    if (message.green !== undefined && message.green !== 0) {
      writer.uint32(21).float(message.green);
    }
    if (message.blue !== undefined && message.blue !== 0) {
      writer.uint32(29).float(message.blue);
    }
    if (message.alpha !== undefined) {
      FloatValue.encode({ value: message.alpha! }, writer.uint32(34).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Color {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseColor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 13) {
            break;
          }

          message.red = reader.float();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.green = reader.float();
          continue;
        case 3:
          if (tag !== 29) {
            break;
          }

          message.blue = reader.float();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.alpha = FloatValue.decode(reader, reader.uint32()).value;
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

  fromJSON(object: any): Color {
    return {
      red: isSet(object.red) ? Number(object.red) : undefined,
      green: isSet(object.green) ? Number(object.green) : undefined,
      blue: isSet(object.blue) ? Number(object.blue) : undefined,
      alpha: isSet(object.alpha) ? Number(object.alpha) : undefined,
    };
  },

  toJSON(message: Color): unknown {
    const obj: any = {};
    if (message.red !== undefined && message.red !== 0) {
      obj.red = message.red;
    }
    if (message.green !== undefined && message.green !== 0) {
      obj.green = message.green;
    }
    if (message.blue !== undefined && message.blue !== 0) {
      obj.blue = message.blue;
    }
    if (message.alpha !== undefined) {
      obj.alpha = message.alpha;
    }
    return obj;
  },
};

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}