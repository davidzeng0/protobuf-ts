import _m0 from "protobufjs/minimal";
import { Any } from "./any";
import { SourceContext } from "./source_context";
/** The syntax in which a protocol buffer element is defined. */
export declare enum Syntax {
    /** SYNTAX_PROTO2 - Syntax `proto2`. */
    SYNTAX_PROTO2 = "SYNTAX_PROTO2",
    /** SYNTAX_PROTO3 - Syntax `proto3`. */
    SYNTAX_PROTO3 = "SYNTAX_PROTO3",
    /** SYNTAX_EDITIONS - Syntax `editions`. */
    SYNTAX_EDITIONS = "SYNTAX_EDITIONS",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function syntaxFromJSON(object: any): Syntax;
export declare function syntaxToJSON(object: Syntax): string;
export declare function syntaxToNumber(object: Syntax): number;
/** A protocol buffer message type. */
export interface Type {
    /** The fully qualified message name. */
    name?: string | undefined;
    /** The list of fields. */
    fields?: Field[] | undefined;
    /** The list of types appearing in `oneof` definitions in this type. */
    oneofs?: string[] | undefined;
    /** The protocol buffer options. */
    options?: Option[] | undefined;
    /** The source context. */
    source_context?: SourceContext | undefined;
    /** The source syntax. */
    syntax?: Syntax | undefined;
    /** The source edition string, only valid when syntax is SYNTAX_EDITIONS. */
    edition?: string | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
/** A single field of a message type. */
export interface Field {
    /** The field type. */
    kind?: Field_Kind | undefined;
    /** The field cardinality. */
    cardinality?: Field_Cardinality | undefined;
    /** The field number. */
    number?: number | undefined;
    /** The field name. */
    name?: string | undefined;
    /**
     * The field type URL, without the scheme, for message or enumeration
     * types. Example: `"type.googleapis.com/google.protobuf.Timestamp"`.
     */
    type_url?: string | undefined;
    /**
     * The index of the field type in `Type.oneofs`, for message or enumeration
     * types. The first type has index 1; zero means the type is not in the list.
     */
    oneof_index?: number | undefined;
    /** Whether to use alternative packed wire representation. */
    packed?: boolean | undefined;
    /** The protocol buffer options. */
    options?: Option[] | undefined;
    /** The field JSON name. */
    json_name?: string | undefined;
    /** The string value of the default value of this field. Proto2 syntax only. */
    default_value?: string | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
/** Basic field types. */
export declare enum Field_Kind {
    /** TYPE_UNKNOWN - Field type unknown. */
    TYPE_UNKNOWN = "TYPE_UNKNOWN",
    /** TYPE_DOUBLE - Field type double. */
    TYPE_DOUBLE = "TYPE_DOUBLE",
    /** TYPE_FLOAT - Field type float. */
    TYPE_FLOAT = "TYPE_FLOAT",
    /** TYPE_INT64 - Field type int64. */
    TYPE_INT64 = "TYPE_INT64",
    /** TYPE_UINT64 - Field type uint64. */
    TYPE_UINT64 = "TYPE_UINT64",
    /** TYPE_INT32 - Field type int32. */
    TYPE_INT32 = "TYPE_INT32",
    /** TYPE_FIXED64 - Field type fixed64. */
    TYPE_FIXED64 = "TYPE_FIXED64",
    /** TYPE_FIXED32 - Field type fixed32. */
    TYPE_FIXED32 = "TYPE_FIXED32",
    /** TYPE_BOOL - Field type bool. */
    TYPE_BOOL = "TYPE_BOOL",
    /** TYPE_STRING - Field type string. */
    TYPE_STRING = "TYPE_STRING",
    /** TYPE_GROUP - Field type group. Proto2 syntax only, and deprecated. */
    TYPE_GROUP = "TYPE_GROUP",
    /** TYPE_MESSAGE - Field type message. */
    TYPE_MESSAGE = "TYPE_MESSAGE",
    /** TYPE_BYTES - Field type bytes. */
    TYPE_BYTES = "TYPE_BYTES",
    /** TYPE_UINT32 - Field type uint32. */
    TYPE_UINT32 = "TYPE_UINT32",
    /** TYPE_ENUM - Field type enum. */
    TYPE_ENUM = "TYPE_ENUM",
    /** TYPE_SFIXED32 - Field type sfixed32. */
    TYPE_SFIXED32 = "TYPE_SFIXED32",
    /** TYPE_SFIXED64 - Field type sfixed64. */
    TYPE_SFIXED64 = "TYPE_SFIXED64",
    /** TYPE_SINT32 - Field type sint32. */
    TYPE_SINT32 = "TYPE_SINT32",
    /** TYPE_SINT64 - Field type sint64. */
    TYPE_SINT64 = "TYPE_SINT64",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function field_KindFromJSON(object: any): Field_Kind;
export declare function field_KindToJSON(object: Field_Kind): string;
export declare function field_KindToNumber(object: Field_Kind): number;
/** Whether a field is optional, required, or repeated. */
export declare enum Field_Cardinality {
    /** CARDINALITY_UNKNOWN - For fields with unknown cardinality. */
    CARDINALITY_UNKNOWN = "CARDINALITY_UNKNOWN",
    /** CARDINALITY_OPTIONAL - For optional fields. */
    CARDINALITY_OPTIONAL = "CARDINALITY_OPTIONAL",
    /** CARDINALITY_REQUIRED - For required fields. Proto2 syntax only. */
    CARDINALITY_REQUIRED = "CARDINALITY_REQUIRED",
    /** CARDINALITY_REPEATED - For repeated fields. */
    CARDINALITY_REPEATED = "CARDINALITY_REPEATED",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function field_CardinalityFromJSON(object: any): Field_Cardinality;
export declare function field_CardinalityToJSON(object: Field_Cardinality): string;
export declare function field_CardinalityToNumber(object: Field_Cardinality): number;
/** Enum type definition. */
export interface Enum {
    /** Enum type name. */
    name?: string | undefined;
    /** Enum value definitions. */
    enumvalue?: EnumValue[] | undefined;
    /** Protocol buffer options. */
    options?: Option[] | undefined;
    /** The source context. */
    source_context?: SourceContext | undefined;
    /** The source syntax. */
    syntax?: Syntax | undefined;
    /** The source edition string, only valid when syntax is SYNTAX_EDITIONS. */
    edition?: string | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
/** Enum value definition. */
export interface EnumValue {
    /** Enum value name. */
    name?: string | undefined;
    /** Enum value number. */
    number?: number | undefined;
    /** Protocol buffer options. */
    options?: Option[] | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
/**
 * A protocol buffer option, which can be attached to a message, field,
 * enumeration, etc.
 */
export interface Option {
    /**
     * The option's name. For protobuf built-in options (options defined in
     * descriptor.proto), this is the short name. For example, `"map_entry"`.
     * For custom options, it should be the fully-qualified name. For example,
     * `"google.api.http"`.
     */
    name?: string | undefined;
    /**
     * The option's value packed in an Any message. If the value is a primitive,
     * the corresponding wrapper type defined in google/protobuf/wrappers.proto
     * should be used. If the value is an enum, it should be stored as an int32
     * value using the google.protobuf.Int32Value type.
     */
    value?: Any | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
export declare const Type: {
    encode(message: Type, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Type;
    fromJSON(object: any): Type;
    toJSON(message: Type): unknown;
};
export declare const Field: {
    encode(message: Field, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Field;
    fromJSON(object: any): Field;
    toJSON(message: Field): unknown;
};
export declare const Enum: {
    encode(message: Enum, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Enum;
    fromJSON(object: any): Enum;
    toJSON(message: Enum): unknown;
};
export declare const EnumValue: {
    encode(message: EnumValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EnumValue;
    fromJSON(object: any): EnumValue;
    toJSON(message: EnumValue): unknown;
};
export declare const Option: {
    encode(message: Option, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Option;
    fromJSON(object: any): Option;
    toJSON(message: Option): unknown;
};
