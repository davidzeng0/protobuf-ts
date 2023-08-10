/* eslint-disable */
import _m0 from "protobufjs/minimal";

/**
 * A quaternion is defined as the quotient of two directed lines in a
 * three-dimensional space or equivalently as the quotient of two Euclidean
 * vectors (https://en.wikipedia.org/wiki/Quaternion).
 *
 * Quaternions are often used in calculations involving three-dimensional
 * rotations (https://en.wikipedia.org/wiki/Quaternions_and_spatial_rotation),
 * as they provide greater mathematical robustness by avoiding the gimbal lock
 * problems that can be encountered when using Euler angles
 * (https://en.wikipedia.org/wiki/Gimbal_lock).
 *
 * Quaternions are generally represented in this form:
 *
 *     w + xi + yj + zk
 *
 * where x, y, z, and w are real numbers, and i, j, and k are three imaginary
 * numbers.
 *
 * Our naming choice `(x, y, z, w)` comes from the desire to avoid confusion for
 * those interested in the geometric properties of the quaternion in the 3D
 * Cartesian space. Other texts often use alternative names or subscripts, such
 * as `(a, b, c, d)`, `(1, i, j, k)`, or `(0, 1, 2, 3)`, which are perhaps
 * better suited for mathematical interpretations.
 *
 * To avoid any confusion, as well as to maintain compatibility with a large
 * number of software libraries, the quaternions represented using the protocol
 * buffer below *must* follow the Hamilton convention, which defines `ij = k`
 * (i.e. a right-handed algebra), and therefore:
 *
 *     i^2 = j^2 = k^2 = ijk = −1
 *     ij = −ji = k
 *     jk = −kj = i
 *     ki = −ik = j
 *
 * Please DO NOT use this to represent quaternions that follow the JPL
 * convention, or any of the other quaternion flavors out there.
 *
 * Definitions:
 *
 *   - Quaternion norm (or magnitude): `sqrt(x^2 + y^2 + z^2 + w^2)`.
 *   - Unit (or normalized) quaternion: a quaternion whose norm is 1.
 *   - Pure quaternion: a quaternion whose scalar component (`w`) is 0.
 *   - Rotation quaternion: a unit quaternion used to represent rotation.
 *   - Orientation quaternion: a unit quaternion used to represent orientation.
 *
 * A quaternion can be normalized by dividing it by its norm. The resulting
 * quaternion maintains the same direction, but has a norm of 1, i.e. it moves
 * on the unit sphere. This is generally necessary for rotation and orientation
 * quaternions, to avoid rounding errors:
 * https://en.wikipedia.org/wiki/Rotation_formalisms_in_three_dimensions
 *
 * Note that `(x, y, z, w)` and `(-x, -y, -z, -w)` represent the same rotation,
 * but normalization would be even more useful, e.g. for comparison purposes, if
 * it would produce a unique representation. It is thus recommended that `w` be
 * kept positive, which can be achieved by changing all the signs when `w` is
 * negative.
 */
export interface Quaternion {
  /** The x component. */
  x?:
    | number
    | undefined;
  /** The y component. */
  y?:
    | number
    | undefined;
  /** The z component. */
  z?:
    | number
    | undefined;
  /** The scalar component. */
  w?: number | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

function createBaseQuaternion(): Quaternion {
  return {};
}

export const Quaternion = {
  encode(message: Quaternion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x !== undefined && message.x !== 0) {
      writer.uint32(9).double(message.x);
    }
    if (message.y !== undefined && message.y !== 0) {
      writer.uint32(17).double(message.y);
    }
    if (message.z !== undefined && message.z !== 0) {
      writer.uint32(25).double(message.z);
    }
    if (message.w !== undefined && message.w !== 0) {
      writer.uint32(33).double(message.w);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Quaternion {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuaternion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.x = reader.double();
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.y = reader.double();
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.z = reader.double();
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.w = reader.double();
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

  fromJSON(object: any): Quaternion {
    return {
      x: isSet(object.x) ? Number(object.x) : undefined,
      y: isSet(object.y) ? Number(object.y) : undefined,
      z: isSet(object.z) ? Number(object.z) : undefined,
      w: isSet(object.w) ? Number(object.w) : undefined,
    };
  },

  toJSON(message: Quaternion): unknown {
    const obj: any = {};
    if (message.x !== undefined && message.x !== 0) {
      obj.x = message.x;
    }
    if (message.y !== undefined && message.y !== 0) {
      obj.y = message.y;
    }
    if (message.z !== undefined && message.z !== 0) {
      obj.z = message.z;
    }
    if (message.w !== undefined && message.w !== 0) {
      obj.w = message.w;
    }
    return obj;
  },
};

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
