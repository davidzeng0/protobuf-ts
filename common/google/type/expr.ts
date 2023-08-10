/* eslint-disable */
import _m0 from "protobufjs/minimal";

/**
 * Represents a textual expression in the Common Expression Language (CEL)
 * syntax. CEL is a C-like expression language. The syntax and semantics of CEL
 * are documented at https://github.com/google/cel-spec.
 *
 * Example (Comparison):
 *
 *     title: "Summary size limit"
 *     description: "Determines if a summary is less than 100 chars"
 *     expression: "document.summary.size() < 100"
 *
 * Example (Equality):
 *
 *     title: "Requestor is owner"
 *     description: "Determines if requestor is the document owner"
 *     expression: "document.owner == request.auth.claims.email"
 *
 * Example (Logic):
 *
 *     title: "Public documents"
 *     description: "Determine whether the document should be publicly visible"
 *     expression: "document.type != 'private' && document.type != 'internal'"
 *
 * Example (Data Manipulation):
 *
 *     title: "Notification string"
 *     description: "Create a notification string with a timestamp."
 *     expression: "'New message received at ' + string(document.create_time)"
 *
 * The exact variables and functions that may be referenced within an expression
 * are determined by the service that evaluates it. See the service
 * documentation for additional information.
 */
export interface Expr {
  /**
   * Textual representation of an expression in Common Expression Language
   * syntax.
   */
  expression?:
    | string
    | undefined;
  /**
   * Optional. Title for the expression, i.e. a short string describing
   * its purpose. This can be used e.g. in UIs which allow to enter the
   * expression.
   */
  title?:
    | string
    | undefined;
  /**
   * Optional. Description of the expression. This is a longer text which
   * describes the expression, e.g. when hovered over it in a UI.
   */
  description?:
    | string
    | undefined;
  /**
   * Optional. String indicating the location of the expression for error
   * reporting, e.g. a file name and a position in the file.
   */
  location?: string | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

function createBaseExpr(): Expr {
  return {};
}

export const Expr = {
  encode(message: Expr, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.expression !== undefined && message.expression !== "") {
      writer.uint32(10).string(message.expression);
    }
    if (message.title !== undefined && message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.description !== undefined && message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.location !== undefined && message.location !== "") {
      writer.uint32(34).string(message.location);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Expr {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpr();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.expression = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.title = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.description = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.location = reader.string();
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

  fromJSON(object: any): Expr {
    return {
      expression: isSet(object.expression) ? String(object.expression) : undefined,
      title: isSet(object.title) ? String(object.title) : undefined,
      description: isSet(object.description) ? String(object.description) : undefined,
      location: isSet(object.location) ? String(object.location) : undefined,
    };
  },

  toJSON(message: Expr): unknown {
    const obj: any = {};
    if (message.expression !== undefined && message.expression !== "") {
      obj.expression = message.expression;
    }
    if (message.title !== undefined && message.title !== "") {
      obj.title = message.title;
    }
    if (message.description !== undefined && message.description !== "") {
      obj.description = message.description;
    }
    if (message.location !== undefined && message.location !== "") {
      obj.location = message.location;
    }
    return obj;
  },
};

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
