/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

/**
 * The protocol compiler can output a FileDescriptorSet containing the .proto
 * files it parses.
 */
export interface FileDescriptorSet {
  file?: FileDescriptorProto[] | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/** Describes a complete .proto file. */
export interface FileDescriptorProto {
  /** file name, relative to root of source tree */
  name?:
    | string
    | undefined;
  /** e.g. "foo", "foo.bar", etc. */
  package?:
    | string
    | undefined;
  /** Names of files imported by this file. */
  dependency?:
    | string[]
    | undefined;
  /** Indexes of the public imported files in the dependency list above. */
  public_dependency?:
    | number[]
    | undefined;
  /**
   * Indexes of the weak imported files in the dependency list.
   * For Google-internal migration only. Do not use.
   */
  weak_dependency?:
    | number[]
    | undefined;
  /** All top-level definitions in this file. */
  message_type?: DescriptorProto[] | undefined;
  enum_type?: EnumDescriptorProto[] | undefined;
  service?: ServiceDescriptorProto[] | undefined;
  extension?: FieldDescriptorProto[] | undefined;
  options?:
    | FileOptions
    | undefined;
  /**
   * This field contains optional information about the original source code.
   * You may safely remove this entire field without harming runtime
   * functionality of the descriptors -- the information is needed only by
   * development tools.
   */
  source_code_info?:
    | SourceCodeInfo
    | undefined;
  /**
   * The syntax of the proto file.
   * The supported values are "proto2", "proto3", and "editions".
   *
   * If `edition` is present, this value must be "editions".
   */
  syntax?:
    | string
    | undefined;
  /** The edition of the proto file, which is an opaque string. */
  edition?: string | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/** Describes a message type. */
export interface DescriptorProto {
  name?: string | undefined;
  field?: FieldDescriptorProto[] | undefined;
  extension?: FieldDescriptorProto[] | undefined;
  nested_type?: DescriptorProto[] | undefined;
  enum_type?: EnumDescriptorProto[] | undefined;
  extension_range?: DescriptorProto_ExtensionRange[] | undefined;
  oneof_decl?: OneofDescriptorProto[] | undefined;
  options?: MessageOptions | undefined;
  reserved_range?:
    | DescriptorProto_ReservedRange[]
    | undefined;
  /**
   * Reserved field names, which may not be used by fields in the same message.
   * A given name may only be reserved once.
   */
  reserved_name?: string[] | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

export interface DescriptorProto_ExtensionRange {
  /** Inclusive. */
  start?:
    | number
    | undefined;
  /** Exclusive. */
  end?: number | undefined;
  options?: ExtensionRangeOptions | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/**
 * Range of reserved tag numbers. Reserved tag numbers may not be used by
 * fields or extension ranges in the same message. Reserved ranges may
 * not overlap.
 */
export interface DescriptorProto_ReservedRange {
  /** Inclusive. */
  start?:
    | number
    | undefined;
  /** Exclusive. */
  end?: number | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

export interface ExtensionRangeOptions {
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option?: UninterpretedOption[] | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/** Describes a field within a message. */
export interface FieldDescriptorProto {
  name?: string | undefined;
  number?: number | undefined;
  label?:
    | FieldDescriptorProto_Label
    | undefined;
  /**
   * If type_name is set, this need not be set.  If both this and type_name
   * are set, this must be one of TYPE_ENUM, TYPE_MESSAGE or TYPE_GROUP.
   */
  type?:
    | FieldDescriptorProto_Type
    | undefined;
  /**
   * For message and enum types, this is the name of the type.  If the name
   * starts with a '.', it is fully-qualified.  Otherwise, C++-like scoping
   * rules are used to find the type (i.e. first the nested types within this
   * message are searched, then within the parent, on up to the root
   * namespace).
   */
  type_name?:
    | string
    | undefined;
  /**
   * For extensions, this is the name of the type being extended.  It is
   * resolved in the same manner as type_name.
   */
  extendee?:
    | string
    | undefined;
  /**
   * For numeric types, contains the original text representation of the value.
   * For booleans, "true" or "false".
   * For strings, contains the default text contents (not escaped in any way).
   * For bytes, contains the C escaped value.  All bytes >= 128 are escaped.
   */
  default_value?:
    | string
    | undefined;
  /**
   * If set, gives the index of a oneof in the containing type's oneof_decl
   * list.  This field is a member of that oneof.
   */
  oneof_index?:
    | number
    | undefined;
  /**
   * JSON name of this field. The value is set by protocol compiler. If the
   * user has set a "json_name" option on this field, that option's value
   * will be used. Otherwise, it's deduced from the field's name by converting
   * it to camelCase.
   */
  json_name?: string | undefined;
  options?:
    | FieldOptions
    | undefined;
  /**
   * If true, this is a proto3 "optional". When a proto3 field is optional, it
   * tracks presence regardless of field type.
   *
   * When proto3_optional is true, this field must be belong to a oneof to
   * signal to old proto3 clients that presence is tracked for this field. This
   * oneof is known as a "synthetic" oneof, and this field must be its sole
   * member (each proto3 optional field gets its own synthetic oneof). Synthetic
   * oneofs exist in the descriptor only, and do not generate any API. Synthetic
   * oneofs must be ordered after all "real" oneofs.
   *
   * For message fields, proto3_optional doesn't create any semantic change,
   * since non-repeated message fields always track presence. However it still
   * indicates the semantic detail of whether the user wrote "optional" or not.
   * This can be useful for round-tripping the .proto file. For consistency we
   * give message fields a synthetic oneof also, even though it is not required
   * to track presence. This is especially important because the parser can't
   * tell if a field is a message or an enum, so it must always create a
   * synthetic oneof.
   *
   * Proto2 optional fields do not set this flag, because they already indicate
   * optional with `LABEL_OPTIONAL`.
   */
  proto3_optional?: boolean | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

export enum FieldDescriptorProto_Type {
  /**
   * TYPE_DOUBLE - 0 is reserved for errors.
   * Order is weird for historical reasons.
   */
  TYPE_DOUBLE = 1,
  TYPE_FLOAT = 2,
  /**
   * TYPE_INT64 - Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT64 if
   * negative values are likely.
   */
  TYPE_INT64 = 3,
  TYPE_UINT64 = 4,
  /**
   * TYPE_INT32 - Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT32 if
   * negative values are likely.
   */
  TYPE_INT32 = 5,
  TYPE_FIXED64 = 6,
  TYPE_FIXED32 = 7,
  TYPE_BOOL = 8,
  TYPE_STRING = 9,
  /**
   * TYPE_GROUP - Tag-delimited aggregate.
   * Group type is deprecated and not supported in proto3. However, Proto3
   * implementations should still be able to parse the group wire format and
   * treat group fields as unknown fields.
   */
  TYPE_GROUP = 10,
  /** TYPE_MESSAGE - Length-delimited aggregate. */
  TYPE_MESSAGE = 11,
  /** TYPE_BYTES - New in version 2. */
  TYPE_BYTES = 12,
  TYPE_UINT32 = 13,
  TYPE_ENUM = 14,
  TYPE_SFIXED32 = 15,
  TYPE_SFIXED64 = 16,
  /** TYPE_SINT32 - Uses ZigZag encoding. */
  TYPE_SINT32 = 17,
  /** TYPE_SINT64 - Uses ZigZag encoding. */
  TYPE_SINT64 = 18,
  UNRECOGNIZED = -1,
}

export function fieldDescriptorProto_TypeFromJSON(object: any): FieldDescriptorProto_Type {
  switch (object) {
    case 1:
    case "TYPE_DOUBLE":
      return FieldDescriptorProto_Type.TYPE_DOUBLE;
    case 2:
    case "TYPE_FLOAT":
      return FieldDescriptorProto_Type.TYPE_FLOAT;
    case 3:
    case "TYPE_INT64":
      return FieldDescriptorProto_Type.TYPE_INT64;
    case 4:
    case "TYPE_UINT64":
      return FieldDescriptorProto_Type.TYPE_UINT64;
    case 5:
    case "TYPE_INT32":
      return FieldDescriptorProto_Type.TYPE_INT32;
    case 6:
    case "TYPE_FIXED64":
      return FieldDescriptorProto_Type.TYPE_FIXED64;
    case 7:
    case "TYPE_FIXED32":
      return FieldDescriptorProto_Type.TYPE_FIXED32;
    case 8:
    case "TYPE_BOOL":
      return FieldDescriptorProto_Type.TYPE_BOOL;
    case 9:
    case "TYPE_STRING":
      return FieldDescriptorProto_Type.TYPE_STRING;
    case 10:
    case "TYPE_GROUP":
      return FieldDescriptorProto_Type.TYPE_GROUP;
    case 11:
    case "TYPE_MESSAGE":
      return FieldDescriptorProto_Type.TYPE_MESSAGE;
    case 12:
    case "TYPE_BYTES":
      return FieldDescriptorProto_Type.TYPE_BYTES;
    case 13:
    case "TYPE_UINT32":
      return FieldDescriptorProto_Type.TYPE_UINT32;
    case 14:
    case "TYPE_ENUM":
      return FieldDescriptorProto_Type.TYPE_ENUM;
    case 15:
    case "TYPE_SFIXED32":
      return FieldDescriptorProto_Type.TYPE_SFIXED32;
    case 16:
    case "TYPE_SFIXED64":
      return FieldDescriptorProto_Type.TYPE_SFIXED64;
    case 17:
    case "TYPE_SINT32":
      return FieldDescriptorProto_Type.TYPE_SINT32;
    case 18:
    case "TYPE_SINT64":
      return FieldDescriptorProto_Type.TYPE_SINT64;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldDescriptorProto_Type.UNRECOGNIZED;
  }
}

export function fieldDescriptorProto_TypeToJSON(object: FieldDescriptorProto_Type): string {
  switch (object) {
    case FieldDescriptorProto_Type.TYPE_DOUBLE:
      return "TYPE_DOUBLE";
    case FieldDescriptorProto_Type.TYPE_FLOAT:
      return "TYPE_FLOAT";
    case FieldDescriptorProto_Type.TYPE_INT64:
      return "TYPE_INT64";
    case FieldDescriptorProto_Type.TYPE_UINT64:
      return "TYPE_UINT64";
    case FieldDescriptorProto_Type.TYPE_INT32:
      return "TYPE_INT32";
    case FieldDescriptorProto_Type.TYPE_FIXED64:
      return "TYPE_FIXED64";
    case FieldDescriptorProto_Type.TYPE_FIXED32:
      return "TYPE_FIXED32";
    case FieldDescriptorProto_Type.TYPE_BOOL:
      return "TYPE_BOOL";
    case FieldDescriptorProto_Type.TYPE_STRING:
      return "TYPE_STRING";
    case FieldDescriptorProto_Type.TYPE_GROUP:
      return "TYPE_GROUP";
    case FieldDescriptorProto_Type.TYPE_MESSAGE:
      return "TYPE_MESSAGE";
    case FieldDescriptorProto_Type.TYPE_BYTES:
      return "TYPE_BYTES";
    case FieldDescriptorProto_Type.TYPE_UINT32:
      return "TYPE_UINT32";
    case FieldDescriptorProto_Type.TYPE_ENUM:
      return "TYPE_ENUM";
    case FieldDescriptorProto_Type.TYPE_SFIXED32:
      return "TYPE_SFIXED32";
    case FieldDescriptorProto_Type.TYPE_SFIXED64:
      return "TYPE_SFIXED64";
    case FieldDescriptorProto_Type.TYPE_SINT32:
      return "TYPE_SINT32";
    case FieldDescriptorProto_Type.TYPE_SINT64:
      return "TYPE_SINT64";
    case FieldDescriptorProto_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum FieldDescriptorProto_Label {
  /** LABEL_OPTIONAL - 0 is reserved for errors */
  LABEL_OPTIONAL = 1,
  LABEL_REQUIRED = 2,
  LABEL_REPEATED = 3,
  UNRECOGNIZED = -1,
}

export function fieldDescriptorProto_LabelFromJSON(object: any): FieldDescriptorProto_Label {
  switch (object) {
    case 1:
    case "LABEL_OPTIONAL":
      return FieldDescriptorProto_Label.LABEL_OPTIONAL;
    case 2:
    case "LABEL_REQUIRED":
      return FieldDescriptorProto_Label.LABEL_REQUIRED;
    case 3:
    case "LABEL_REPEATED":
      return FieldDescriptorProto_Label.LABEL_REPEATED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldDescriptorProto_Label.UNRECOGNIZED;
  }
}

export function fieldDescriptorProto_LabelToJSON(object: FieldDescriptorProto_Label): string {
  switch (object) {
    case FieldDescriptorProto_Label.LABEL_OPTIONAL:
      return "LABEL_OPTIONAL";
    case FieldDescriptorProto_Label.LABEL_REQUIRED:
      return "LABEL_REQUIRED";
    case FieldDescriptorProto_Label.LABEL_REPEATED:
      return "LABEL_REPEATED";
    case FieldDescriptorProto_Label.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Describes a oneof. */
export interface OneofDescriptorProto {
  name?: string | undefined;
  options?: OneofOptions | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/** Describes an enum type. */
export interface EnumDescriptorProto {
  name?: string | undefined;
  value?: EnumValueDescriptorProto[] | undefined;
  options?:
    | EnumOptions
    | undefined;
  /**
   * Range of reserved numeric values. Reserved numeric values may not be used
   * by enum values in the same enum declaration. Reserved ranges may not
   * overlap.
   */
  reserved_range?:
    | EnumDescriptorProto_EnumReservedRange[]
    | undefined;
  /**
   * Reserved enum value names, which may not be reused. A given name may only
   * be reserved once.
   */
  reserved_name?: string[] | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/**
 * Range of reserved numeric values. Reserved values may not be used by
 * entries in the same enum. Reserved ranges may not overlap.
 *
 * Note that this is distinct from DescriptorProto.ReservedRange in that it
 * is inclusive such that it can appropriately represent the entire int32
 * domain.
 */
export interface EnumDescriptorProto_EnumReservedRange {
  /** Inclusive. */
  start?:
    | number
    | undefined;
  /** Inclusive. */
  end?: number | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/** Describes a value within an enum. */
export interface EnumValueDescriptorProto {
  name?: string | undefined;
  number?: number | undefined;
  options?: EnumValueOptions | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/** Describes a service. */
export interface ServiceDescriptorProto {
  name?: string | undefined;
  method?: MethodDescriptorProto[] | undefined;
  options?: ServiceOptions | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/** Describes a method of a service. */
export interface MethodDescriptorProto {
  name?:
    | string
    | undefined;
  /**
   * Input and output type names.  These are resolved in the same way as
   * FieldDescriptorProto.type_name, but must refer to a message type.
   */
  input_type?: string | undefined;
  output_type?: string | undefined;
  options?:
    | MethodOptions
    | undefined;
  /** Identifies if client streams multiple client messages */
  client_streaming?:
    | boolean
    | undefined;
  /** Identifies if server streams multiple server messages */
  server_streaming?: boolean | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

export interface FileOptions {
  /**
   * Sets the Java package where classes generated from this .proto will be
   * placed.  By default, the proto package is used, but this is often
   * inappropriate because proto packages do not normally start with backwards
   * domain names.
   */
  java_package?:
    | string
    | undefined;
  /**
   * Controls the name of the wrapper Java class generated for the .proto file.
   * That class will always contain the .proto file's getDescriptor() method as
   * well as any top-level extensions defined in the .proto file.
   * If java_multiple_files is disabled, then all the other classes from the
   * .proto file will be nested inside the single wrapper outer class.
   */
  java_outer_classname?:
    | string
    | undefined;
  /**
   * If enabled, then the Java code generator will generate a separate .java
   * file for each top-level message, enum, and service defined in the .proto
   * file.  Thus, these types will *not* be nested inside the wrapper class
   * named by java_outer_classname.  However, the wrapper class will still be
   * generated to contain the file's getDescriptor() method as well as any
   * top-level extensions defined in the file.
   */
  java_multiple_files?:
    | boolean
    | undefined;
  /**
   * This option does nothing.
   *
   * @deprecated
   */
  java_generate_equals_and_hash?:
    | boolean
    | undefined;
  /**
   * If set true, then the Java2 code generator will generate code that
   * throws an exception whenever an attempt is made to assign a non-UTF-8
   * byte sequence to a string field.
   * Message reflection will do the same.
   * However, an extension field still accepts non-UTF-8 byte sequences.
   * This option has no effect on when used with the lite runtime.
   */
  java_string_check_utf8?: boolean | undefined;
  optimize_for?:
    | FileOptions_OptimizeMode
    | undefined;
  /**
   * Sets the Go package where structs generated from this .proto will be
   * placed. If omitted, the Go package will be derived from the following:
   *   - The basename of the package import path, if provided.
   *   - Otherwise, the package statement in the .proto file, if present.
   *   - Otherwise, the basename of the .proto file, without extension.
   */
  go_package?:
    | string
    | undefined;
  /**
   * Should generic services be generated in each language?  "Generic" services
   * are not specific to any particular RPC system.  They are generated by the
   * main code generators in each language (without additional plugins).
   * Generic services were the only kind of service generation supported by
   * early versions of google.protobuf.
   *
   * Generic services are now considered deprecated in favor of using plugins
   * that generate code specific to your particular RPC system.  Therefore,
   * these default to false.  Old code which depends on generic services should
   * explicitly set them to true.
   */
  cc_generic_services?: boolean | undefined;
  java_generic_services?: boolean | undefined;
  py_generic_services?: boolean | undefined;
  php_generic_services?:
    | boolean
    | undefined;
  /**
   * Is this file deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for everything in the file, or it will be completely ignored; in the very
   * least, this is a formalization for deprecating files.
   */
  deprecated?:
    | boolean
    | undefined;
  /**
   * Enables the use of arenas for the proto messages in this file. This applies
   * only to generated classes for C++.
   */
  cc_enable_arenas?:
    | boolean
    | undefined;
  /**
   * Sets the objective c class prefix which is prepended to all objective c
   * generated classes from this .proto. There is no default.
   */
  objc_class_prefix?:
    | string
    | undefined;
  /** Namespace for generated classes; defaults to the package. */
  csharp_namespace?:
    | string
    | undefined;
  /**
   * By default Swift generators will take the proto package and CamelCase it
   * replacing '.' with underscore and use that to prefix the types/symbols
   * defined. When this options is provided, they will use this value instead
   * to prefix the types/symbols defined.
   */
  swift_prefix?:
    | string
    | undefined;
  /**
   * Sets the php class prefix which is prepended to all php generated classes
   * from this .proto. Default is empty.
   */
  php_class_prefix?:
    | string
    | undefined;
  /**
   * Use this option to change the namespace of php generated classes. Default
   * is empty. When this option is empty, the package name will be used for
   * determining the namespace.
   */
  php_namespace?:
    | string
    | undefined;
  /**
   * Use this option to change the namespace of php generated metadata classes.
   * Default is empty. When this option is empty, the proto file name will be
   * used for determining the namespace.
   */
  php_metadata_namespace?:
    | string
    | undefined;
  /**
   * Use this option to change the package of ruby generated classes. Default
   * is empty. When this option is not set, the package name will be used for
   * determining the ruby package.
   */
  ruby_package?:
    | string
    | undefined;
  /**
   * The parser stores options it doesn't recognize here.
   * See the documentation for the "Options" section above.
   */
  uninterpreted_option?: UninterpretedOption[] | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/** Generated classes can be optimized for speed or code size. */
export enum FileOptions_OptimizeMode {
  /** SPEED - Generate complete code for parsing, serialization, */
  SPEED = 1,
  /** CODE_SIZE - etc. */
  CODE_SIZE = 2,
  /** LITE_RUNTIME - Generate code using MessageLite and the lite runtime. */
  LITE_RUNTIME = 3,
  UNRECOGNIZED = -1,
}

export function fileOptions_OptimizeModeFromJSON(object: any): FileOptions_OptimizeMode {
  switch (object) {
    case 1:
    case "SPEED":
      return FileOptions_OptimizeMode.SPEED;
    case 2:
    case "CODE_SIZE":
      return FileOptions_OptimizeMode.CODE_SIZE;
    case 3:
    case "LITE_RUNTIME":
      return FileOptions_OptimizeMode.LITE_RUNTIME;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FileOptions_OptimizeMode.UNRECOGNIZED;
  }
}

export function fileOptions_OptimizeModeToJSON(object: FileOptions_OptimizeMode): string {
  switch (object) {
    case FileOptions_OptimizeMode.SPEED:
      return "SPEED";
    case FileOptions_OptimizeMode.CODE_SIZE:
      return "CODE_SIZE";
    case FileOptions_OptimizeMode.LITE_RUNTIME:
      return "LITE_RUNTIME";
    case FileOptions_OptimizeMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface MessageOptions {
  /**
   * Set true to use the old proto1 MessageSet wire format for extensions.
   * This is provided for backwards-compatibility with the MessageSet wire
   * format.  You should not use this for any other reason:  It's less
   * efficient, has fewer features, and is more complicated.
   *
   * The message must be defined exactly as follows:
   *   message Foo {
   *     option message_set_wire_format = true;
   *     extensions 4 to max;
   *   }
   * Note that the message cannot have any defined fields; MessageSets only
   * have extensions.
   *
   * All extensions of your type must be singular messages; e.g. they cannot
   * be int32s, enums, or repeated messages.
   *
   * Because this is an option, the above two restrictions are not enforced by
   * the protocol compiler.
   */
  message_set_wire_format?:
    | boolean
    | undefined;
  /**
   * Disables the generation of the standard "descriptor()" accessor, which can
   * conflict with a field of the same name.  This is meant to make migration
   * from proto1 easier; new code should avoid fields named "descriptor".
   */
  no_standard_descriptor_accessor?:
    | boolean
    | undefined;
  /**
   * Is this message deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the message, or it will be completely ignored; in the very least,
   * this is a formalization for deprecating messages.
   */
  deprecated?:
    | boolean
    | undefined;
  /**
   * NOTE: Do not set the option in .proto files. Always use the maps syntax
   * instead. The option should only be implicitly set by the proto compiler
   * parser.
   *
   * Whether the message is an automatically generated map entry type for the
   * maps field.
   *
   * For maps fields:
   *     map<KeyType, ValueType> map_field = 1;
   * The parsed descriptor looks like:
   *     message MapFieldEntry {
   *         option map_entry = true;
   *         optional KeyType key = 1;
   *         optional ValueType value = 2;
   *     }
   *     repeated MapFieldEntry map_field = 1;
   *
   * Implementations may choose not to generate the map_entry=true message, but
   * use a native map in the target language to hold the keys and values.
   * The reflection APIs in such implementations still need to work as
   * if the field is a repeated message field.
   */
  map_entry?:
    | boolean
    | undefined;
  /**
   * Enable the legacy handling of JSON field name conflicts.  This lowercases
   * and strips underscored from the fields before comparison in proto3 only.
   * The new behavior takes `json_name` into account and applies to proto2 as
   * well.
   *
   * This should only be used as a temporary measure against broken builds due
   * to the change in behavior for JSON field name conflicts.
   *
   * TODO(b/261750190) This is legacy behavior we plan to remove once downstream
   * teams have had time to migrate.
   *
   * @deprecated
   */
  deprecated_legacy_json_field_conflicts?:
    | boolean
    | undefined;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option?: UninterpretedOption[] | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

export interface FieldOptions {
  /**
   * The ctype option instructs the C++ code generator to use a different
   * representation of the field than it normally would.  See the specific
   * options below.  This option is not yet implemented in the open source
   * release -- sorry, we'll try to include it in a future version!
   */
  ctype?:
    | FieldOptions_CType
    | undefined;
  /**
   * The packed option can be enabled for repeated primitive fields to enable
   * a more efficient representation on the wire. Rather than repeatedly
   * writing the tag and type for each element, the entire array is encoded as
   * a single length-delimited blob. In proto3, only explicit setting it to
   * false will avoid using packed encoding.
   */
  packed?:
    | boolean
    | undefined;
  /**
   * The jstype option determines the JavaScript type used for values of the
   * field.  The option is permitted only for 64 bit integral and fixed types
   * (int64, uint64, sint64, fixed64, sfixed64).  A field with jstype JS_STRING
   * is represented as JavaScript string, which avoids loss of precision that
   * can happen when a large value is converted to a floating point JavaScript.
   * Specifying JS_NUMBER for the jstype causes the generated JavaScript code to
   * use the JavaScript "number" type.  The behavior of the default option
   * JS_NORMAL is implementation dependent.
   *
   * This option is an enum to permit additional types to be added, e.g.
   * goog.math.Integer.
   */
  jstype?:
    | FieldOptions_JSType
    | undefined;
  /**
   * Should this field be parsed lazily?  Lazy applies only to message-type
   * fields.  It means that when the outer message is initially parsed, the
   * inner message's contents will not be parsed but instead stored in encoded
   * form.  The inner message will actually be parsed when it is first accessed.
   *
   * This is only a hint.  Implementations are free to choose whether to use
   * eager or lazy parsing regardless of the value of this option.  However,
   * setting this option true suggests that the protocol author believes that
   * using lazy parsing on this field is worth the additional bookkeeping
   * overhead typically needed to implement it.
   *
   * This option does not affect the public interface of any generated code;
   * all method signatures remain the same.  Furthermore, thread-safety of the
   * interface is not affected by this option; const methods remain safe to
   * call from multiple threads concurrently, while non-const methods continue
   * to require exclusive access.
   *
   * Note that implementations may choose not to check required fields within
   * a lazy sub-message.  That is, calling IsInitialized() on the outer message
   * may return true even if the inner message has missing required fields.
   * This is necessary because otherwise the inner message would have to be
   * parsed in order to perform the check, defeating the purpose of lazy
   * parsing.  An implementation which chooses not to check required fields
   * must be consistent about it.  That is, for any particular sub-message, the
   * implementation must either *always* check its required fields, or *never*
   * check its required fields, regardless of whether or not the message has
   * been parsed.
   *
   * As of May 2022, lazy verifies the contents of the byte stream during
   * parsing.  An invalid byte stream will cause the overall parsing to fail.
   */
  lazy?:
    | boolean
    | undefined;
  /**
   * unverified_lazy does no correctness checks on the byte stream. This should
   * only be used where lazy with verification is prohibitive for performance
   * reasons.
   */
  unverified_lazy?:
    | boolean
    | undefined;
  /**
   * Is this field deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for accessors, or it will be completely ignored; in the very least, this
   * is a formalization for deprecating fields.
   */
  deprecated?:
    | boolean
    | undefined;
  /** For Google-internal migration only. Do not use. */
  weak?:
    | boolean
    | undefined;
  /**
   * Indicate that the field value should not be printed out when using debug
   * formats, e.g. when the field contains sensitive credentials.
   */
  debug_redact?: boolean | undefined;
  retention?: FieldOptions_OptionRetention | undefined;
  target?:
    | FieldOptions_OptionTargetType
    | undefined;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option?: UninterpretedOption[] | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

export enum FieldOptions_CType {
  /** STRING - Default mode. */
  STRING = 0,
  CORD = 1,
  STRING_PIECE = 2,
  UNRECOGNIZED = -1,
}

export function fieldOptions_CTypeFromJSON(object: any): FieldOptions_CType {
  switch (object) {
    case 0:
    case "STRING":
      return FieldOptions_CType.STRING;
    case 1:
    case "CORD":
      return FieldOptions_CType.CORD;
    case 2:
    case "STRING_PIECE":
      return FieldOptions_CType.STRING_PIECE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldOptions_CType.UNRECOGNIZED;
  }
}

export function fieldOptions_CTypeToJSON(object: FieldOptions_CType): string {
  switch (object) {
    case FieldOptions_CType.STRING:
      return "STRING";
    case FieldOptions_CType.CORD:
      return "CORD";
    case FieldOptions_CType.STRING_PIECE:
      return "STRING_PIECE";
    case FieldOptions_CType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum FieldOptions_JSType {
  /** JS_NORMAL - Use the default type. */
  JS_NORMAL = 0,
  /** JS_STRING - Use JavaScript strings. */
  JS_STRING = 1,
  /** JS_NUMBER - Use JavaScript numbers. */
  JS_NUMBER = 2,
  UNRECOGNIZED = -1,
}

export function fieldOptions_JSTypeFromJSON(object: any): FieldOptions_JSType {
  switch (object) {
    case 0:
    case "JS_NORMAL":
      return FieldOptions_JSType.JS_NORMAL;
    case 1:
    case "JS_STRING":
      return FieldOptions_JSType.JS_STRING;
    case 2:
    case "JS_NUMBER":
      return FieldOptions_JSType.JS_NUMBER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldOptions_JSType.UNRECOGNIZED;
  }
}

export function fieldOptions_JSTypeToJSON(object: FieldOptions_JSType): string {
  switch (object) {
    case FieldOptions_JSType.JS_NORMAL:
      return "JS_NORMAL";
    case FieldOptions_JSType.JS_STRING:
      return "JS_STRING";
    case FieldOptions_JSType.JS_NUMBER:
      return "JS_NUMBER";
    case FieldOptions_JSType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * If set to RETENTION_SOURCE, the option will be omitted from the binary.
 * Note: as of January 2023, support for this is in progress and does not yet
 * have an effect (b/264593489).
 */
export enum FieldOptions_OptionRetention {
  RETENTION_UNKNOWN = 0,
  RETENTION_RUNTIME = 1,
  RETENTION_SOURCE = 2,
  UNRECOGNIZED = -1,
}

export function fieldOptions_OptionRetentionFromJSON(object: any): FieldOptions_OptionRetention {
  switch (object) {
    case 0:
    case "RETENTION_UNKNOWN":
      return FieldOptions_OptionRetention.RETENTION_UNKNOWN;
    case 1:
    case "RETENTION_RUNTIME":
      return FieldOptions_OptionRetention.RETENTION_RUNTIME;
    case 2:
    case "RETENTION_SOURCE":
      return FieldOptions_OptionRetention.RETENTION_SOURCE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldOptions_OptionRetention.UNRECOGNIZED;
  }
}

export function fieldOptions_OptionRetentionToJSON(object: FieldOptions_OptionRetention): string {
  switch (object) {
    case FieldOptions_OptionRetention.RETENTION_UNKNOWN:
      return "RETENTION_UNKNOWN";
    case FieldOptions_OptionRetention.RETENTION_RUNTIME:
      return "RETENTION_RUNTIME";
    case FieldOptions_OptionRetention.RETENTION_SOURCE:
      return "RETENTION_SOURCE";
    case FieldOptions_OptionRetention.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * This indicates the types of entities that the field may apply to when used
 * as an option. If it is unset, then the field may be freely used as an
 * option on any kind of entity. Note: as of January 2023, support for this is
 * in progress and does not yet have an effect (b/264593489).
 */
export enum FieldOptions_OptionTargetType {
  TARGET_TYPE_UNKNOWN = 0,
  TARGET_TYPE_FILE = 1,
  TARGET_TYPE_EXTENSION_RANGE = 2,
  TARGET_TYPE_MESSAGE = 3,
  TARGET_TYPE_FIELD = 4,
  TARGET_TYPE_ONEOF = 5,
  TARGET_TYPE_ENUM = 6,
  TARGET_TYPE_ENUM_ENTRY = 7,
  TARGET_TYPE_SERVICE = 8,
  TARGET_TYPE_METHOD = 9,
  UNRECOGNIZED = -1,
}

export function fieldOptions_OptionTargetTypeFromJSON(object: any): FieldOptions_OptionTargetType {
  switch (object) {
    case 0:
    case "TARGET_TYPE_UNKNOWN":
      return FieldOptions_OptionTargetType.TARGET_TYPE_UNKNOWN;
    case 1:
    case "TARGET_TYPE_FILE":
      return FieldOptions_OptionTargetType.TARGET_TYPE_FILE;
    case 2:
    case "TARGET_TYPE_EXTENSION_RANGE":
      return FieldOptions_OptionTargetType.TARGET_TYPE_EXTENSION_RANGE;
    case 3:
    case "TARGET_TYPE_MESSAGE":
      return FieldOptions_OptionTargetType.TARGET_TYPE_MESSAGE;
    case 4:
    case "TARGET_TYPE_FIELD":
      return FieldOptions_OptionTargetType.TARGET_TYPE_FIELD;
    case 5:
    case "TARGET_TYPE_ONEOF":
      return FieldOptions_OptionTargetType.TARGET_TYPE_ONEOF;
    case 6:
    case "TARGET_TYPE_ENUM":
      return FieldOptions_OptionTargetType.TARGET_TYPE_ENUM;
    case 7:
    case "TARGET_TYPE_ENUM_ENTRY":
      return FieldOptions_OptionTargetType.TARGET_TYPE_ENUM_ENTRY;
    case 8:
    case "TARGET_TYPE_SERVICE":
      return FieldOptions_OptionTargetType.TARGET_TYPE_SERVICE;
    case 9:
    case "TARGET_TYPE_METHOD":
      return FieldOptions_OptionTargetType.TARGET_TYPE_METHOD;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FieldOptions_OptionTargetType.UNRECOGNIZED;
  }
}

export function fieldOptions_OptionTargetTypeToJSON(object: FieldOptions_OptionTargetType): string {
  switch (object) {
    case FieldOptions_OptionTargetType.TARGET_TYPE_UNKNOWN:
      return "TARGET_TYPE_UNKNOWN";
    case FieldOptions_OptionTargetType.TARGET_TYPE_FILE:
      return "TARGET_TYPE_FILE";
    case FieldOptions_OptionTargetType.TARGET_TYPE_EXTENSION_RANGE:
      return "TARGET_TYPE_EXTENSION_RANGE";
    case FieldOptions_OptionTargetType.TARGET_TYPE_MESSAGE:
      return "TARGET_TYPE_MESSAGE";
    case FieldOptions_OptionTargetType.TARGET_TYPE_FIELD:
      return "TARGET_TYPE_FIELD";
    case FieldOptions_OptionTargetType.TARGET_TYPE_ONEOF:
      return "TARGET_TYPE_ONEOF";
    case FieldOptions_OptionTargetType.TARGET_TYPE_ENUM:
      return "TARGET_TYPE_ENUM";
    case FieldOptions_OptionTargetType.TARGET_TYPE_ENUM_ENTRY:
      return "TARGET_TYPE_ENUM_ENTRY";
    case FieldOptions_OptionTargetType.TARGET_TYPE_SERVICE:
      return "TARGET_TYPE_SERVICE";
    case FieldOptions_OptionTargetType.TARGET_TYPE_METHOD:
      return "TARGET_TYPE_METHOD";
    case FieldOptions_OptionTargetType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface OneofOptions {
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option?: UninterpretedOption[] | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

export interface EnumOptions {
  /**
   * Set this option to true to allow mapping different tag names to the same
   * value.
   */
  allow_alias?:
    | boolean
    | undefined;
  /**
   * Is this enum deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the enum, or it will be completely ignored; in the very least, this
   * is a formalization for deprecating enums.
   */
  deprecated?:
    | boolean
    | undefined;
  /**
   * Enable the legacy handling of JSON field name conflicts.  This lowercases
   * and strips underscored from the fields before comparison in proto3 only.
   * The new behavior takes `json_name` into account and applies to proto2 as
   * well.
   * TODO(b/261750190) Remove this legacy behavior once downstream teams have
   * had time to migrate.
   *
   * @deprecated
   */
  deprecated_legacy_json_field_conflicts?:
    | boolean
    | undefined;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option?: UninterpretedOption[] | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

export interface EnumValueOptions {
  /**
   * Is this enum value deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the enum value, or it will be completely ignored; in the very least,
   * this is a formalization for deprecating enum values.
   */
  deprecated?:
    | boolean
    | undefined;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option?: UninterpretedOption[] | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

export interface ServiceOptions {
  /**
   * Is this service deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the service, or it will be completely ignored; in the very least,
   * this is a formalization for deprecating services.
   */
  deprecated?:
    | boolean
    | undefined;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option?: UninterpretedOption[] | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

export interface MethodOptions {
  /**
   * Is this method deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the method, or it will be completely ignored; in the very least,
   * this is a formalization for deprecating methods.
   */
  deprecated?: boolean | undefined;
  idempotency_level?:
    | MethodOptions_IdempotencyLevel
    | undefined;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpreted_option?: UninterpretedOption[] | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/**
 * Is this method side-effect-free (or safe in HTTP parlance), or idempotent,
 * or neither? HTTP based RPC implementation may choose GET verb for safe
 * methods, and PUT verb for idempotent methods instead of the default POST.
 */
export enum MethodOptions_IdempotencyLevel {
  IDEMPOTENCY_UNKNOWN = 0,
  /** NO_SIDE_EFFECTS - implies idempotent */
  NO_SIDE_EFFECTS = 1,
  /** IDEMPOTENT - idempotent, but may have side effects */
  IDEMPOTENT = 2,
  UNRECOGNIZED = -1,
}

export function methodOptions_IdempotencyLevelFromJSON(object: any): MethodOptions_IdempotencyLevel {
  switch (object) {
    case 0:
    case "IDEMPOTENCY_UNKNOWN":
      return MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN;
    case 1:
    case "NO_SIDE_EFFECTS":
      return MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS;
    case 2:
    case "IDEMPOTENT":
      return MethodOptions_IdempotencyLevel.IDEMPOTENT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MethodOptions_IdempotencyLevel.UNRECOGNIZED;
  }
}

export function methodOptions_IdempotencyLevelToJSON(object: MethodOptions_IdempotencyLevel): string {
  switch (object) {
    case MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN:
      return "IDEMPOTENCY_UNKNOWN";
    case MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS:
      return "NO_SIDE_EFFECTS";
    case MethodOptions_IdempotencyLevel.IDEMPOTENT:
      return "IDEMPOTENT";
    case MethodOptions_IdempotencyLevel.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * A message representing a option the parser does not recognize. This only
 * appears in options protos created by the compiler::Parser class.
 * DescriptorPool resolves these when building Descriptor objects. Therefore,
 * options protos in descriptor objects (e.g. returned by Descriptor::options(),
 * or produced by Descriptor::CopyTo()) will never have UninterpretedOptions
 * in them.
 */
export interface UninterpretedOption {
  name?:
    | UninterpretedOption_NamePart[]
    | undefined;
  /**
   * The value of the uninterpreted option, in whatever type the tokenizer
   * identified it as during parsing. Exactly one of these should be set.
   */
  identifier_value?: string | undefined;
  positive_int_value?: bigint | undefined;
  negative_int_value?: bigint | undefined;
  double_value?: number | undefined;
  string_value?: Buffer | undefined;
  aggregate_value?: string | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/**
 * The name of the uninterpreted option.  Each string represents a segment in
 * a dot-separated name.  is_extension is true iff a segment represents an
 * extension (denoted with parentheses in options specs in .proto files).
 * E.g.,{ ["foo", false], ["bar.baz", true], ["moo", false] } represents
 * "foo.(bar.baz).moo".
 */
export interface UninterpretedOption_NamePart {
  name_part?: string | undefined;
  is_extension?: boolean | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/**
 * Encapsulates information about the original source file from which a
 * FileDescriptorProto was generated.
 */
export interface SourceCodeInfo {
  /**
   * A Location identifies a piece of source code in a .proto file which
   * corresponds to a particular definition.  This information is intended
   * to be useful to IDEs, code indexers, documentation generators, and similar
   * tools.
   *
   * For example, say we have a file like:
   *   message Foo {
   *     optional string foo = 1;
   *   }
   * Let's look at just the field definition:
   *   optional string foo = 1;
   *   ^       ^^     ^^  ^  ^^^
   *   a       bc     de  f  ghi
   * We have the following locations:
   *   span   path               represents
   *   [a,i)  [ 4, 0, 2, 0 ]     The whole field definition.
   *   [a,b)  [ 4, 0, 2, 0, 4 ]  The label (optional).
   *   [c,d)  [ 4, 0, 2, 0, 5 ]  The type (string).
   *   [e,f)  [ 4, 0, 2, 0, 1 ]  The name (foo).
   *   [g,h)  [ 4, 0, 2, 0, 3 ]  The number (1).
   *
   * Notes:
   * - A location may refer to a repeated field itself (i.e. not to any
   *   particular index within it).  This is used whenever a set of elements are
   *   logically enclosed in a single code segment.  For example, an entire
   *   extend block (possibly containing multiple extension definitions) will
   *   have an outer location whose path refers to the "extensions" repeated
   *   field without an index.
   * - Multiple locations may have the same path.  This happens when a single
   *   logical declaration is spread out across multiple places.  The most
   *   obvious example is the "extend" block again -- there may be multiple
   *   extend blocks in the same scope, each of which will have the same path.
   * - A location's span is not always a subset of its parent's span.  For
   *   example, the "extendee" of an extension declaration appears at the
   *   beginning of the "extend" block and is shared by all extensions within
   *   the block.
   * - Just because a location's span is a subset of some other location's span
   *   does not mean that it is a descendant.  For example, a "group" defines
   *   both a type and a field in a single declaration.  Thus, the locations
   *   corresponding to the type and field and their components will overlap.
   * - Code which tries to interpret locations should probably be designed to
   *   ignore those that it doesn't understand, as more types of locations could
   *   be recorded in the future.
   */
  location?: SourceCodeInfo_Location[] | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

export interface SourceCodeInfo_Location {
  /**
   * Identifies which part of the FileDescriptorProto was defined at this
   * location.
   *
   * Each element is a field number or an index.  They form a path from
   * the root FileDescriptorProto to the place where the definition occurs.
   * For example, this path:
   *   [ 4, 3, 2, 7, 1 ]
   * refers to:
   *   file.message_type(3)  // 4, 3
   *       .field(7)         // 2, 7
   *       .name()           // 1
   * This is because FileDescriptorProto.message_type has field number 4:
   *   repeated DescriptorProto message_type = 4;
   * and DescriptorProto.field has field number 2:
   *   repeated FieldDescriptorProto field = 2;
   * and FieldDescriptorProto.name has field number 1:
   *   optional string name = 1;
   *
   * Thus, the above path gives the location of a field name.  If we removed
   * the last element:
   *   [ 4, 3, 2, 7 ]
   * this path refers to the whole field declaration (from the beginning
   * of the label to the terminating semicolon).
   */
  path?:
    | number[]
    | undefined;
  /**
   * Always has exactly three or four elements: start line, start column,
   * end line (optional, otherwise assumed same as start line), end column.
   * These are packed into a single field for efficiency.  Note that line
   * and column numbers are zero-based -- typically you will want to add
   * 1 to each before displaying to a user.
   */
  span?:
    | number[]
    | undefined;
  /**
   * If this SourceCodeInfo represents a complete declaration, these are any
   * comments appearing before and after the declaration which appear to be
   * attached to the declaration.
   *
   * A series of line comments appearing on consecutive lines, with no other
   * tokens appearing on those lines, will be treated as a single comment.
   *
   * leading_detached_comments will keep paragraphs of comments that appear
   * before (but not connected to) the current element. Each paragraph,
   * separated by empty lines, will be one comment element in the repeated
   * field.
   *
   * Only the comment content is provided; comment markers (e.g. //) are
   * stripped out.  For block comments, leading whitespace and an asterisk
   * will be stripped from the beginning of each line other than the first.
   * Newlines are included in the output.
   *
   * Examples:
   *
   *   optional int32 foo = 1;  // Comment attached to foo.
   *   // Comment attached to bar.
   *   optional int32 bar = 2;
   *
   *   optional string baz = 3;
   *   // Comment attached to baz.
   *   // Another line attached to baz.
   *
   *   // Comment attached to moo.
   *   //
   *   // Another line attached to moo.
   *   optional double moo = 4;
   *
   *   // Detached comment for corge. This is not leading or trailing comments
   *   // to moo or corge because there are blank lines separating it from
   *   // both.
   *
   *   // Detached comment for corge paragraph 2.
   *
   *   optional string corge = 5;
   *   /* Block comment attached
   *    * to corge.  Leading asterisks
   *    * will be removed. * /
   *   /* Block comment attached to
   *    * grault. * /
   *   optional int32 grault = 6;
   *
   *   // ignored detached comments.
   */
  leading_comments?: string | undefined;
  trailing_comments?: string | undefined;
  leading_detached_comments?: string[] | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/**
 * Describes the relationship between generated code and its original source
 * file. A GeneratedCodeInfo message is associated with only one generated
 * source file, but may contain references to different source .proto files.
 */
export interface GeneratedCodeInfo {
  /**
   * An Annotation connects some span of text in generated code to an element
   * of its generating .proto file.
   */
  annotation?: GeneratedCodeInfo_Annotation[] | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

export interface GeneratedCodeInfo_Annotation {
  /**
   * Identifies the element in the original source .proto file. This field
   * is formatted the same as SourceCodeInfo.Location.path.
   */
  path?:
    | number[]
    | undefined;
  /** Identifies the filesystem path to the original source .proto. */
  source_file?:
    | string
    | undefined;
  /**
   * Identifies the starting offset in bytes in the generated code
   * that relates to the identified object.
   */
  begin?:
    | number
    | undefined;
  /**
   * Identifies the ending offset in bytes in the generated code that
   * relates to the identified object. The end offset should be one past
   * the last relevant byte (so the length of the text = end - begin).
   */
  end?: number | undefined;
  semantic?: GeneratedCodeInfo_Annotation_Semantic | undefined;
  _unknownFields?: { [key: number]: Uint8Array[] } | undefined;
}

/**
 * Represents the identified object's effect on the element in the original
 * .proto file.
 */
export enum GeneratedCodeInfo_Annotation_Semantic {
  /** NONE - There is no effect or the effect is indescribable. */
  NONE = 0,
  /** SET - The element is set or otherwise mutated. */
  SET = 1,
  /** ALIAS - An alias to the element is returned. */
  ALIAS = 2,
  UNRECOGNIZED = -1,
}

export function generatedCodeInfo_Annotation_SemanticFromJSON(object: any): GeneratedCodeInfo_Annotation_Semantic {
  switch (object) {
    case 0:
    case "NONE":
      return GeneratedCodeInfo_Annotation_Semantic.NONE;
    case 1:
    case "SET":
      return GeneratedCodeInfo_Annotation_Semantic.SET;
    case 2:
    case "ALIAS":
      return GeneratedCodeInfo_Annotation_Semantic.ALIAS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GeneratedCodeInfo_Annotation_Semantic.UNRECOGNIZED;
  }
}

export function generatedCodeInfo_Annotation_SemanticToJSON(object: GeneratedCodeInfo_Annotation_Semantic): string {
  switch (object) {
    case GeneratedCodeInfo_Annotation_Semantic.NONE:
      return "NONE";
    case GeneratedCodeInfo_Annotation_Semantic.SET:
      return "SET";
    case GeneratedCodeInfo_Annotation_Semantic.ALIAS:
      return "ALIAS";
    case GeneratedCodeInfo_Annotation_Semantic.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseFileDescriptorSet(): FileDescriptorSet {
  return {};
}

export const FileDescriptorSet = {
  encode(message: FileDescriptorSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.file !== undefined && message.file.length !== 0) {
      for (const v of message.file) {
        FileDescriptorProto.encode(v!, writer.uint32(10).fork()).ldelim();
      }
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

  decode(input: _m0.Reader | Uint8Array, length?: number): FileDescriptorSet {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileDescriptorSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          if (message.file === undefined) {
            message.file = [];
          }
          message.file!.push(FileDescriptorProto.decode(reader, reader.uint32()));
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

  fromJSON(object: any): FileDescriptorSet {
    return {
      file: Array.isArray(object?.file) ? object.file.map((e: any) => FileDescriptorProto.fromJSON(e)) : undefined,
    };
  },

  toJSON(message: FileDescriptorSet): unknown {
    const obj: any = {};
    if (message.file?.length) {
      obj.file = message.file.map((e) => FileDescriptorProto.toJSON(e));
    }
    return obj;
  },
};

function createBaseFileDescriptorProto(): FileDescriptorProto {
  return {};
}

export const FileDescriptorProto = {
  encode(message: FileDescriptorProto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined && message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.package !== undefined && message.package !== "") {
      writer.uint32(18).string(message.package);
    }
    if (message.dependency !== undefined && message.dependency.length !== 0) {
      for (const v of message.dependency) {
        writer.uint32(26).string(v!);
      }
    }
    if (message.public_dependency !== undefined && message.public_dependency.length !== 0) {
      writer.uint32(82).fork();
      for (const v of message.public_dependency) {
        writer.int32(v);
      }
      writer.ldelim();
    }
    if (message.weak_dependency !== undefined && message.weak_dependency.length !== 0) {
      writer.uint32(90).fork();
      for (const v of message.weak_dependency) {
        writer.int32(v);
      }
      writer.ldelim();
    }
    if (message.message_type !== undefined && message.message_type.length !== 0) {
      for (const v of message.message_type) {
        DescriptorProto.encode(v!, writer.uint32(34).fork()).ldelim();
      }
    }
    if (message.enum_type !== undefined && message.enum_type.length !== 0) {
      for (const v of message.enum_type) {
        EnumDescriptorProto.encode(v!, writer.uint32(42).fork()).ldelim();
      }
    }
    if (message.service !== undefined && message.service.length !== 0) {
      for (const v of message.service) {
        ServiceDescriptorProto.encode(v!, writer.uint32(50).fork()).ldelim();
      }
    }
    if (message.extension !== undefined && message.extension.length !== 0) {
      for (const v of message.extension) {
        FieldDescriptorProto.encode(v!, writer.uint32(58).fork()).ldelim();
      }
    }
    if (message.options !== undefined) {
      FileOptions.encode(message.options, writer.uint32(66).fork()).ldelim();
    }
    if (message.source_code_info !== undefined) {
      SourceCodeInfo.encode(message.source_code_info, writer.uint32(74).fork()).ldelim();
    }
    if (message.syntax !== undefined && message.syntax !== "") {
      writer.uint32(98).string(message.syntax);
    }
    if (message.edition !== undefined && message.edition !== "") {
      writer.uint32(106).string(message.edition);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): FileDescriptorProto {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.package = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          if (message.dependency === undefined) {
            message.dependency = [];
          }
          message.dependency!.push(reader.string());
          continue;
        case 10:
          if (tag === 80) {
            if (message.public_dependency === undefined) {
              message.public_dependency = [];
            }
            message.public_dependency!.push(reader.int32());

            continue;
          }

          if (tag === 82) {
            if (message.public_dependency === undefined) {
              message.public_dependency = [];
            }
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.public_dependency!.push(reader.int32());
            }

            continue;
          }

          break;
        case 11:
          if (tag === 88) {
            if (message.weak_dependency === undefined) {
              message.weak_dependency = [];
            }
            message.weak_dependency!.push(reader.int32());

            continue;
          }

          if (tag === 90) {
            if (message.weak_dependency === undefined) {
              message.weak_dependency = [];
            }
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.weak_dependency!.push(reader.int32());
            }

            continue;
          }

          break;
        case 4:
          if (tag !== 34) {
            break;
          }

          if (message.message_type === undefined) {
            message.message_type = [];
          }
          message.message_type!.push(DescriptorProto.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          if (message.enum_type === undefined) {
            message.enum_type = [];
          }
          message.enum_type!.push(EnumDescriptorProto.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          if (message.service === undefined) {
            message.service = [];
          }
          message.service!.push(ServiceDescriptorProto.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          if (message.extension === undefined) {
            message.extension = [];
          }
          message.extension!.push(FieldDescriptorProto.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.options = FileOptions.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.source_code_info = SourceCodeInfo.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.syntax = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.edition = reader.string();
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

  fromJSON(object: any): FileDescriptorProto {
    return {
      name: isSet(object.name) ? String(object.name) : undefined,
      package: isSet(object.package) ? String(object.package) : undefined,
      dependency: Array.isArray(object?.dependency) ? object.dependency.map((e: any) => String(e)) : undefined,
      public_dependency: Array.isArray(object?.public_dependency)
        ? object.public_dependency.map((e: any) => Number(e))
        : undefined,
      weak_dependency: Array.isArray(object?.weak_dependency)
        ? object.weak_dependency.map((e: any) => Number(e))
        : undefined,
      message_type: Array.isArray(object?.message_type)
        ? object.message_type.map((e: any) => DescriptorProto.fromJSON(e))
        : undefined,
      enum_type: Array.isArray(object?.enum_type)
        ? object.enum_type.map((e: any) => EnumDescriptorProto.fromJSON(e))
        : undefined,
      service: Array.isArray(object?.service)
        ? object.service.map((e: any) => ServiceDescriptorProto.fromJSON(e))
        : undefined,
      extension: Array.isArray(object?.extension)
        ? object.extension.map((e: any) => FieldDescriptorProto.fromJSON(e))
        : undefined,
      options: isSet(object.options) ? FileOptions.fromJSON(object.options) : undefined,
      source_code_info: isSet(object.source_code_info) ? SourceCodeInfo.fromJSON(object.source_code_info) : undefined,
      syntax: isSet(object.syntax) ? String(object.syntax) : undefined,
      edition: isSet(object.edition) ? String(object.edition) : undefined,
    };
  },

  toJSON(message: FileDescriptorProto): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.package !== undefined && message.package !== "") {
      obj.package = message.package;
    }
    if (message.dependency?.length) {
      obj.dependency = message.dependency;
    }
    if (message.public_dependency?.length) {
      obj.public_dependency = message.public_dependency.map((e) => Math.round(e));
    }
    if (message.weak_dependency?.length) {
      obj.weak_dependency = message.weak_dependency.map((e) => Math.round(e));
    }
    if (message.message_type?.length) {
      obj.message_type = message.message_type.map((e) => DescriptorProto.toJSON(e));
    }
    if (message.enum_type?.length) {
      obj.enum_type = message.enum_type.map((e) => EnumDescriptorProto.toJSON(e));
    }
    if (message.service?.length) {
      obj.service = message.service.map((e) => ServiceDescriptorProto.toJSON(e));
    }
    if (message.extension?.length) {
      obj.extension = message.extension.map((e) => FieldDescriptorProto.toJSON(e));
    }
    if (message.options !== undefined) {
      obj.options = FileOptions.toJSON(message.options);
    }
    if (message.source_code_info !== undefined) {
      obj.source_code_info = SourceCodeInfo.toJSON(message.source_code_info);
    }
    if (message.syntax !== undefined && message.syntax !== "") {
      obj.syntax = message.syntax;
    }
    if (message.edition !== undefined && message.edition !== "") {
      obj.edition = message.edition;
    }
    return obj;
  },
};

function createBaseDescriptorProto(): DescriptorProto {
  return {};
}

export const DescriptorProto = {
  encode(message: DescriptorProto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined && message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.field !== undefined && message.field.length !== 0) {
      for (const v of message.field) {
        FieldDescriptorProto.encode(v!, writer.uint32(18).fork()).ldelim();
      }
    }
    if (message.extension !== undefined && message.extension.length !== 0) {
      for (const v of message.extension) {
        FieldDescriptorProto.encode(v!, writer.uint32(50).fork()).ldelim();
      }
    }
    if (message.nested_type !== undefined && message.nested_type.length !== 0) {
      for (const v of message.nested_type) {
        DescriptorProto.encode(v!, writer.uint32(26).fork()).ldelim();
      }
    }
    if (message.enum_type !== undefined && message.enum_type.length !== 0) {
      for (const v of message.enum_type) {
        EnumDescriptorProto.encode(v!, writer.uint32(34).fork()).ldelim();
      }
    }
    if (message.extension_range !== undefined && message.extension_range.length !== 0) {
      for (const v of message.extension_range) {
        DescriptorProto_ExtensionRange.encode(v!, writer.uint32(42).fork()).ldelim();
      }
    }
    if (message.oneof_decl !== undefined && message.oneof_decl.length !== 0) {
      for (const v of message.oneof_decl) {
        OneofDescriptorProto.encode(v!, writer.uint32(66).fork()).ldelim();
      }
    }
    if (message.options !== undefined) {
      MessageOptions.encode(message.options, writer.uint32(58).fork()).ldelim();
    }
    if (message.reserved_range !== undefined && message.reserved_range.length !== 0) {
      for (const v of message.reserved_range) {
        DescriptorProto_ReservedRange.encode(v!, writer.uint32(74).fork()).ldelim();
      }
    }
    if (message.reserved_name !== undefined && message.reserved_name.length !== 0) {
      for (const v of message.reserved_name) {
        writer.uint32(82).string(v!);
      }
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

  decode(input: _m0.Reader | Uint8Array, length?: number): DescriptorProto {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          if (message.field === undefined) {
            message.field = [];
          }
          message.field!.push(FieldDescriptorProto.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          if (message.extension === undefined) {
            message.extension = [];
          }
          message.extension!.push(FieldDescriptorProto.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          if (message.nested_type === undefined) {
            message.nested_type = [];
          }
          message.nested_type!.push(DescriptorProto.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          if (message.enum_type === undefined) {
            message.enum_type = [];
          }
          message.enum_type!.push(EnumDescriptorProto.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          if (message.extension_range === undefined) {
            message.extension_range = [];
          }
          message.extension_range!.push(DescriptorProto_ExtensionRange.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          if (message.oneof_decl === undefined) {
            message.oneof_decl = [];
          }
          message.oneof_decl!.push(OneofDescriptorProto.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.options = MessageOptions.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          if (message.reserved_range === undefined) {
            message.reserved_range = [];
          }
          message.reserved_range!.push(DescriptorProto_ReservedRange.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          if (message.reserved_name === undefined) {
            message.reserved_name = [];
          }
          message.reserved_name!.push(reader.string());
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

  fromJSON(object: any): DescriptorProto {
    return {
      name: isSet(object.name) ? String(object.name) : undefined,
      field: Array.isArray(object?.field) ? object.field.map((e: any) => FieldDescriptorProto.fromJSON(e)) : undefined,
      extension: Array.isArray(object?.extension)
        ? object.extension.map((e: any) => FieldDescriptorProto.fromJSON(e))
        : undefined,
      nested_type: Array.isArray(object?.nested_type)
        ? object.nested_type.map((e: any) => DescriptorProto.fromJSON(e))
        : undefined,
      enum_type: Array.isArray(object?.enum_type)
        ? object.enum_type.map((e: any) => EnumDescriptorProto.fromJSON(e))
        : undefined,
      extension_range: Array.isArray(object?.extension_range)
        ? object.extension_range.map((e: any) => DescriptorProto_ExtensionRange.fromJSON(e))
        : undefined,
      oneof_decl: Array.isArray(object?.oneof_decl)
        ? object.oneof_decl.map((e: any) => OneofDescriptorProto.fromJSON(e))
        : undefined,
      options: isSet(object.options) ? MessageOptions.fromJSON(object.options) : undefined,
      reserved_range: Array.isArray(object?.reserved_range)
        ? object.reserved_range.map((e: any) => DescriptorProto_ReservedRange.fromJSON(e))
        : undefined,
      reserved_name: Array.isArray(object?.reserved_name) ? object.reserved_name.map((e: any) => String(e)) : undefined,
    };
  },

  toJSON(message: DescriptorProto): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.field?.length) {
      obj.field = message.field.map((e) => FieldDescriptorProto.toJSON(e));
    }
    if (message.extension?.length) {
      obj.extension = message.extension.map((e) => FieldDescriptorProto.toJSON(e));
    }
    if (message.nested_type?.length) {
      obj.nested_type = message.nested_type.map((e) => DescriptorProto.toJSON(e));
    }
    if (message.enum_type?.length) {
      obj.enum_type = message.enum_type.map((e) => EnumDescriptorProto.toJSON(e));
    }
    if (message.extension_range?.length) {
      obj.extension_range = message.extension_range.map((e) => DescriptorProto_ExtensionRange.toJSON(e));
    }
    if (message.oneof_decl?.length) {
      obj.oneof_decl = message.oneof_decl.map((e) => OneofDescriptorProto.toJSON(e));
    }
    if (message.options !== undefined) {
      obj.options = MessageOptions.toJSON(message.options);
    }
    if (message.reserved_range?.length) {
      obj.reserved_range = message.reserved_range.map((e) => DescriptorProto_ReservedRange.toJSON(e));
    }
    if (message.reserved_name?.length) {
      obj.reserved_name = message.reserved_name;
    }
    return obj;
  },
};

function createBaseDescriptorProto_ExtensionRange(): DescriptorProto_ExtensionRange {
  return {};
}

export const DescriptorProto_ExtensionRange = {
  encode(message: DescriptorProto_ExtensionRange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.start !== undefined && message.start !== 0) {
      writer.uint32(8).int32(message.start);
    }
    if (message.end !== undefined && message.end !== 0) {
      writer.uint32(16).int32(message.end);
    }
    if (message.options !== undefined) {
      ExtensionRangeOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): DescriptorProto_ExtensionRange {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDescriptorProto_ExtensionRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.start = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.end = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.options = ExtensionRangeOptions.decode(reader, reader.uint32());
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

  fromJSON(object: any): DescriptorProto_ExtensionRange {
    return {
      start: isSet(object.start) ? Number(object.start) : undefined,
      end: isSet(object.end) ? Number(object.end) : undefined,
      options: isSet(object.options) ? ExtensionRangeOptions.fromJSON(object.options) : undefined,
    };
  },

  toJSON(message: DescriptorProto_ExtensionRange): unknown {
    const obj: any = {};
    if (message.start !== undefined && message.start !== 0) {
      obj.start = Math.round(message.start);
    }
    if (message.end !== undefined && message.end !== 0) {
      obj.end = Math.round(message.end);
    }
    if (message.options !== undefined) {
      obj.options = ExtensionRangeOptions.toJSON(message.options);
    }
    return obj;
  },
};

function createBaseDescriptorProto_ReservedRange(): DescriptorProto_ReservedRange {
  return {};
}

export const DescriptorProto_ReservedRange = {
  encode(message: DescriptorProto_ReservedRange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.start !== undefined && message.start !== 0) {
      writer.uint32(8).int32(message.start);
    }
    if (message.end !== undefined && message.end !== 0) {
      writer.uint32(16).int32(message.end);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): DescriptorProto_ReservedRange {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDescriptorProto_ReservedRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.start = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.end = reader.int32();
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

  fromJSON(object: any): DescriptorProto_ReservedRange {
    return {
      start: isSet(object.start) ? Number(object.start) : undefined,
      end: isSet(object.end) ? Number(object.end) : undefined,
    };
  },

  toJSON(message: DescriptorProto_ReservedRange): unknown {
    const obj: any = {};
    if (message.start !== undefined && message.start !== 0) {
      obj.start = Math.round(message.start);
    }
    if (message.end !== undefined && message.end !== 0) {
      obj.end = Math.round(message.end);
    }
    return obj;
  },
};

function createBaseExtensionRangeOptions(): ExtensionRangeOptions {
  return {};
}

export const ExtensionRangeOptions = {
  encode(message: ExtensionRangeOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uninterpreted_option !== undefined && message.uninterpreted_option.length !== 0) {
      for (const v of message.uninterpreted_option) {
        UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
      }
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

  setExtension<T>(message: ExtensionRangeOptions, extension: Extension<T>, value: T): void {
    const encoded = extension.encode!(value);

    if (message._unknownFields !== undefined) {
      delete message._unknownFields[extension.tag];

      if (extension.singularTag !== undefined) {
        delete message._unknownFields[extension.singularTag];
      }
    }

    if (encoded.length !== 0) {
      if (message._unknownFields === undefined) {
        message._unknownFields = {};
      }

      message._unknownFields[extension.tag] = encoded;
    }
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExtensionRangeOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtensionRangeOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 999:
          if (tag !== 7994) {
            break;
          }

          if (message.uninterpreted_option === undefined) {
            message.uninterpreted_option = [];
          }
          message.uninterpreted_option!.push(UninterpretedOption.decode(reader, reader.uint32()));
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

  getExtension<T>(message: ExtensionRangeOptions, extension: Extension<T>): T | undefined {
    let results: T | undefined = undefined;

    if (message._unknownFields === undefined) {
      return undefined;
    }

    let list = message._unknownFields[extension.tag];

    if (list !== undefined) {
      results = extension.decode!(extension.tag, list);
    }

    if (extension.singularTag === undefined) {
      return results;
    }

    list = message._unknownFields[extension.singularTag];

    if (list !== undefined) {
      const results2 = extension.decode!(extension.singularTag, list);

      if (results !== undefined && (results as any).length !== 0) {
        results = (results as any).concat(results2);
      } else {
        results = results2;
      }
    }

    return results;
  },

  fromJSON(object: any): ExtensionRangeOptions {
    return {
      uninterpreted_option: Array.isArray(object?.uninterpreted_option)
        ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromJSON(e))
        : undefined,
    };
  },

  toJSON(message: ExtensionRangeOptions): unknown {
    const obj: any = {};
    if (message.uninterpreted_option?.length) {
      obj.uninterpreted_option = message.uninterpreted_option.map((e) => UninterpretedOption.toJSON(e));
    }
    return obj;
  },
};

function createBaseFieldDescriptorProto(): FieldDescriptorProto {
  return {};
}

export const FieldDescriptorProto = {
  encode(message: FieldDescriptorProto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined && message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.number !== undefined && message.number !== 0) {
      writer.uint32(24).int32(message.number);
    }
    if (message.label !== undefined && message.label !== 1) {
      writer.uint32(32).int32(message.label);
    }
    if (message.type !== undefined && message.type !== 1) {
      writer.uint32(40).int32(message.type);
    }
    if (message.type_name !== undefined && message.type_name !== "") {
      writer.uint32(50).string(message.type_name);
    }
    if (message.extendee !== undefined && message.extendee !== "") {
      writer.uint32(18).string(message.extendee);
    }
    if (message.default_value !== undefined && message.default_value !== "") {
      writer.uint32(58).string(message.default_value);
    }
    if (message.oneof_index !== undefined && message.oneof_index !== 0) {
      writer.uint32(72).int32(message.oneof_index);
    }
    if (message.json_name !== undefined && message.json_name !== "") {
      writer.uint32(82).string(message.json_name);
    }
    if (message.options !== undefined) {
      FieldOptions.encode(message.options, writer.uint32(66).fork()).ldelim();
    }
    if (message.proto3_optional === true) {
      writer.uint32(136).bool(message.proto3_optional);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): FieldDescriptorProto {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFieldDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.number = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.label = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.type_name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.extendee = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.default_value = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.oneof_index = reader.int32();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.json_name = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.options = FieldOptions.decode(reader, reader.uint32());
          continue;
        case 17:
          if (tag !== 136) {
            break;
          }

          message.proto3_optional = reader.bool();
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

  fromJSON(object: any): FieldDescriptorProto {
    return {
      name: isSet(object.name) ? String(object.name) : undefined,
      number: isSet(object.number) ? Number(object.number) : undefined,
      label: isSet(object.label) ? fieldDescriptorProto_LabelFromJSON(object.label) : undefined,
      type: isSet(object.type) ? fieldDescriptorProto_TypeFromJSON(object.type) : undefined,
      type_name: isSet(object.type_name) ? String(object.type_name) : undefined,
      extendee: isSet(object.extendee) ? String(object.extendee) : undefined,
      default_value: isSet(object.default_value) ? String(object.default_value) : undefined,
      oneof_index: isSet(object.oneof_index) ? Number(object.oneof_index) : undefined,
      json_name: isSet(object.json_name) ? String(object.json_name) : undefined,
      options: isSet(object.options) ? FieldOptions.fromJSON(object.options) : undefined,
      proto3_optional: isSet(object.proto3_optional) ? Boolean(object.proto3_optional) : undefined,
    };
  },

  toJSON(message: FieldDescriptorProto): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.number !== undefined && message.number !== 0) {
      obj.number = Math.round(message.number);
    }
    if (message.label !== undefined && message.label !== 1) {
      obj.label = fieldDescriptorProto_LabelToJSON(message.label);
    }
    if (message.type !== undefined && message.type !== 1) {
      obj.type = fieldDescriptorProto_TypeToJSON(message.type);
    }
    if (message.type_name !== undefined && message.type_name !== "") {
      obj.type_name = message.type_name;
    }
    if (message.extendee !== undefined && message.extendee !== "") {
      obj.extendee = message.extendee;
    }
    if (message.default_value !== undefined && message.default_value !== "") {
      obj.default_value = message.default_value;
    }
    if (message.oneof_index !== undefined && message.oneof_index !== 0) {
      obj.oneof_index = Math.round(message.oneof_index);
    }
    if (message.json_name !== undefined && message.json_name !== "") {
      obj.json_name = message.json_name;
    }
    if (message.options !== undefined) {
      obj.options = FieldOptions.toJSON(message.options);
    }
    if (message.proto3_optional === true) {
      obj.proto3_optional = message.proto3_optional;
    }
    return obj;
  },
};

function createBaseOneofDescriptorProto(): OneofDescriptorProto {
  return {};
}

export const OneofDescriptorProto = {
  encode(message: OneofDescriptorProto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined && message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.options !== undefined) {
      OneofOptions.encode(message.options, writer.uint32(18).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): OneofDescriptorProto {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOneofDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.options = OneofOptions.decode(reader, reader.uint32());
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

  fromJSON(object: any): OneofDescriptorProto {
    return {
      name: isSet(object.name) ? String(object.name) : undefined,
      options: isSet(object.options) ? OneofOptions.fromJSON(object.options) : undefined,
    };
  },

  toJSON(message: OneofDescriptorProto): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.options !== undefined) {
      obj.options = OneofOptions.toJSON(message.options);
    }
    return obj;
  },
};

function createBaseEnumDescriptorProto(): EnumDescriptorProto {
  return {};
}

export const EnumDescriptorProto = {
  encode(message: EnumDescriptorProto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined && message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== undefined && message.value.length !== 0) {
      for (const v of message.value) {
        EnumValueDescriptorProto.encode(v!, writer.uint32(18).fork()).ldelim();
      }
    }
    if (message.options !== undefined) {
      EnumOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
    }
    if (message.reserved_range !== undefined && message.reserved_range.length !== 0) {
      for (const v of message.reserved_range) {
        EnumDescriptorProto_EnumReservedRange.encode(v!, writer.uint32(34).fork()).ldelim();
      }
    }
    if (message.reserved_name !== undefined && message.reserved_name.length !== 0) {
      for (const v of message.reserved_name) {
        writer.uint32(42).string(v!);
      }
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

  decode(input: _m0.Reader | Uint8Array, length?: number): EnumDescriptorProto {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          if (message.value === undefined) {
            message.value = [];
          }
          message.value!.push(EnumValueDescriptorProto.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.options = EnumOptions.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          if (message.reserved_range === undefined) {
            message.reserved_range = [];
          }
          message.reserved_range!.push(EnumDescriptorProto_EnumReservedRange.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          if (message.reserved_name === undefined) {
            message.reserved_name = [];
          }
          message.reserved_name!.push(reader.string());
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

  fromJSON(object: any): EnumDescriptorProto {
    return {
      name: isSet(object.name) ? String(object.name) : undefined,
      value: Array.isArray(object?.value)
        ? object.value.map((e: any) => EnumValueDescriptorProto.fromJSON(e))
        : undefined,
      options: isSet(object.options) ? EnumOptions.fromJSON(object.options) : undefined,
      reserved_range: Array.isArray(object?.reserved_range)
        ? object.reserved_range.map((e: any) => EnumDescriptorProto_EnumReservedRange.fromJSON(e))
        : undefined,
      reserved_name: Array.isArray(object?.reserved_name) ? object.reserved_name.map((e: any) => String(e)) : undefined,
    };
  },

  toJSON(message: EnumDescriptorProto): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.value?.length) {
      obj.value = message.value.map((e) => EnumValueDescriptorProto.toJSON(e));
    }
    if (message.options !== undefined) {
      obj.options = EnumOptions.toJSON(message.options);
    }
    if (message.reserved_range?.length) {
      obj.reserved_range = message.reserved_range.map((e) => EnumDescriptorProto_EnumReservedRange.toJSON(e));
    }
    if (message.reserved_name?.length) {
      obj.reserved_name = message.reserved_name;
    }
    return obj;
  },
};

function createBaseEnumDescriptorProto_EnumReservedRange(): EnumDescriptorProto_EnumReservedRange {
  return {};
}

export const EnumDescriptorProto_EnumReservedRange = {
  encode(message: EnumDescriptorProto_EnumReservedRange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.start !== undefined && message.start !== 0) {
      writer.uint32(8).int32(message.start);
    }
    if (message.end !== undefined && message.end !== 0) {
      writer.uint32(16).int32(message.end);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): EnumDescriptorProto_EnumReservedRange {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumDescriptorProto_EnumReservedRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.start = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.end = reader.int32();
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

  fromJSON(object: any): EnumDescriptorProto_EnumReservedRange {
    return {
      start: isSet(object.start) ? Number(object.start) : undefined,
      end: isSet(object.end) ? Number(object.end) : undefined,
    };
  },

  toJSON(message: EnumDescriptorProto_EnumReservedRange): unknown {
    const obj: any = {};
    if (message.start !== undefined && message.start !== 0) {
      obj.start = Math.round(message.start);
    }
    if (message.end !== undefined && message.end !== 0) {
      obj.end = Math.round(message.end);
    }
    return obj;
  },
};

function createBaseEnumValueDescriptorProto(): EnumValueDescriptorProto {
  return {};
}

export const EnumValueDescriptorProto = {
  encode(message: EnumValueDescriptorProto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined && message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.number !== undefined && message.number !== 0) {
      writer.uint32(16).int32(message.number);
    }
    if (message.options !== undefined) {
      EnumValueOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): EnumValueDescriptorProto {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumValueDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.number = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.options = EnumValueOptions.decode(reader, reader.uint32());
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

  fromJSON(object: any): EnumValueDescriptorProto {
    return {
      name: isSet(object.name) ? String(object.name) : undefined,
      number: isSet(object.number) ? Number(object.number) : undefined,
      options: isSet(object.options) ? EnumValueOptions.fromJSON(object.options) : undefined,
    };
  },

  toJSON(message: EnumValueDescriptorProto): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.number !== undefined && message.number !== 0) {
      obj.number = Math.round(message.number);
    }
    if (message.options !== undefined) {
      obj.options = EnumValueOptions.toJSON(message.options);
    }
    return obj;
  },
};

function createBaseServiceDescriptorProto(): ServiceDescriptorProto {
  return {};
}

export const ServiceDescriptorProto = {
  encode(message: ServiceDescriptorProto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined && message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.method !== undefined && message.method.length !== 0) {
      for (const v of message.method) {
        MethodDescriptorProto.encode(v!, writer.uint32(18).fork()).ldelim();
      }
    }
    if (message.options !== undefined) {
      ServiceOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ServiceDescriptorProto {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          if (message.method === undefined) {
            message.method = [];
          }
          message.method!.push(MethodDescriptorProto.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.options = ServiceOptions.decode(reader, reader.uint32());
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

  fromJSON(object: any): ServiceDescriptorProto {
    return {
      name: isSet(object.name) ? String(object.name) : undefined,
      method: Array.isArray(object?.method)
        ? object.method.map((e: any) => MethodDescriptorProto.fromJSON(e))
        : undefined,
      options: isSet(object.options) ? ServiceOptions.fromJSON(object.options) : undefined,
    };
  },

  toJSON(message: ServiceDescriptorProto): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.method?.length) {
      obj.method = message.method.map((e) => MethodDescriptorProto.toJSON(e));
    }
    if (message.options !== undefined) {
      obj.options = ServiceOptions.toJSON(message.options);
    }
    return obj;
  },
};

function createBaseMethodDescriptorProto(): MethodDescriptorProto {
  return {};
}

export const MethodDescriptorProto = {
  encode(message: MethodDescriptorProto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined && message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.input_type !== undefined && message.input_type !== "") {
      writer.uint32(18).string(message.input_type);
    }
    if (message.output_type !== undefined && message.output_type !== "") {
      writer.uint32(26).string(message.output_type);
    }
    if (message.options !== undefined) {
      MethodOptions.encode(message.options, writer.uint32(34).fork()).ldelim();
    }
    if (message.client_streaming === true) {
      writer.uint32(40).bool(message.client_streaming);
    }
    if (message.server_streaming === true) {
      writer.uint32(48).bool(message.server_streaming);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MethodDescriptorProto {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMethodDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.input_type = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.output_type = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.options = MethodOptions.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.client_streaming = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.server_streaming = reader.bool();
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

  fromJSON(object: any): MethodDescriptorProto {
    return {
      name: isSet(object.name) ? String(object.name) : undefined,
      input_type: isSet(object.input_type) ? String(object.input_type) : undefined,
      output_type: isSet(object.output_type) ? String(object.output_type) : undefined,
      options: isSet(object.options) ? MethodOptions.fromJSON(object.options) : undefined,
      client_streaming: isSet(object.client_streaming) ? Boolean(object.client_streaming) : undefined,
      server_streaming: isSet(object.server_streaming) ? Boolean(object.server_streaming) : undefined,
    };
  },

  toJSON(message: MethodDescriptorProto): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.input_type !== undefined && message.input_type !== "") {
      obj.input_type = message.input_type;
    }
    if (message.output_type !== undefined && message.output_type !== "") {
      obj.output_type = message.output_type;
    }
    if (message.options !== undefined) {
      obj.options = MethodOptions.toJSON(message.options);
    }
    if (message.client_streaming === true) {
      obj.client_streaming = message.client_streaming;
    }
    if (message.server_streaming === true) {
      obj.server_streaming = message.server_streaming;
    }
    return obj;
  },
};

function createBaseFileOptions(): FileOptions {
  return {};
}

export const FileOptions = {
  encode(message: FileOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.java_package !== undefined && message.java_package !== "") {
      writer.uint32(10).string(message.java_package);
    }
    if (message.java_outer_classname !== undefined && message.java_outer_classname !== "") {
      writer.uint32(66).string(message.java_outer_classname);
    }
    if (message.java_multiple_files === true) {
      writer.uint32(80).bool(message.java_multiple_files);
    }
    if (message.java_generate_equals_and_hash === true) {
      writer.uint32(160).bool(message.java_generate_equals_and_hash);
    }
    if (message.java_string_check_utf8 === true) {
      writer.uint32(216).bool(message.java_string_check_utf8);
    }
    if (message.optimize_for !== undefined && message.optimize_for !== 1) {
      writer.uint32(72).int32(message.optimize_for);
    }
    if (message.go_package !== undefined && message.go_package !== "") {
      writer.uint32(90).string(message.go_package);
    }
    if (message.cc_generic_services === true) {
      writer.uint32(128).bool(message.cc_generic_services);
    }
    if (message.java_generic_services === true) {
      writer.uint32(136).bool(message.java_generic_services);
    }
    if (message.py_generic_services === true) {
      writer.uint32(144).bool(message.py_generic_services);
    }
    if (message.php_generic_services === true) {
      writer.uint32(336).bool(message.php_generic_services);
    }
    if (message.deprecated === true) {
      writer.uint32(184).bool(message.deprecated);
    }
    if (message.cc_enable_arenas === true) {
      writer.uint32(248).bool(message.cc_enable_arenas);
    }
    if (message.objc_class_prefix !== undefined && message.objc_class_prefix !== "") {
      writer.uint32(290).string(message.objc_class_prefix);
    }
    if (message.csharp_namespace !== undefined && message.csharp_namespace !== "") {
      writer.uint32(298).string(message.csharp_namespace);
    }
    if (message.swift_prefix !== undefined && message.swift_prefix !== "") {
      writer.uint32(314).string(message.swift_prefix);
    }
    if (message.php_class_prefix !== undefined && message.php_class_prefix !== "") {
      writer.uint32(322).string(message.php_class_prefix);
    }
    if (message.php_namespace !== undefined && message.php_namespace !== "") {
      writer.uint32(330).string(message.php_namespace);
    }
    if (message.php_metadata_namespace !== undefined && message.php_metadata_namespace !== "") {
      writer.uint32(354).string(message.php_metadata_namespace);
    }
    if (message.ruby_package !== undefined && message.ruby_package !== "") {
      writer.uint32(362).string(message.ruby_package);
    }
    if (message.uninterpreted_option !== undefined && message.uninterpreted_option.length !== 0) {
      for (const v of message.uninterpreted_option) {
        UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
      }
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

  setExtension<T>(message: FileOptions, extension: Extension<T>, value: T): void {
    const encoded = extension.encode!(value);

    if (message._unknownFields !== undefined) {
      delete message._unknownFields[extension.tag];

      if (extension.singularTag !== undefined) {
        delete message._unknownFields[extension.singularTag];
      }
    }

    if (encoded.length !== 0) {
      if (message._unknownFields === undefined) {
        message._unknownFields = {};
      }

      message._unknownFields[extension.tag] = encoded;
    }
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FileOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.java_package = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.java_outer_classname = reader.string();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.java_multiple_files = reader.bool();
          continue;
        case 20:
          if (tag !== 160) {
            break;
          }

          message.java_generate_equals_and_hash = reader.bool();
          continue;
        case 27:
          if (tag !== 216) {
            break;
          }

          message.java_string_check_utf8 = reader.bool();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.optimize_for = reader.int32() as any;
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.go_package = reader.string();
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.cc_generic_services = reader.bool();
          continue;
        case 17:
          if (tag !== 136) {
            break;
          }

          message.java_generic_services = reader.bool();
          continue;
        case 18:
          if (tag !== 144) {
            break;
          }

          message.py_generic_services = reader.bool();
          continue;
        case 42:
          if (tag !== 336) {
            break;
          }

          message.php_generic_services = reader.bool();
          continue;
        case 23:
          if (tag !== 184) {
            break;
          }

          message.deprecated = reader.bool();
          continue;
        case 31:
          if (tag !== 248) {
            break;
          }

          message.cc_enable_arenas = reader.bool();
          continue;
        case 36:
          if (tag !== 290) {
            break;
          }

          message.objc_class_prefix = reader.string();
          continue;
        case 37:
          if (tag !== 298) {
            break;
          }

          message.csharp_namespace = reader.string();
          continue;
        case 39:
          if (tag !== 314) {
            break;
          }

          message.swift_prefix = reader.string();
          continue;
        case 40:
          if (tag !== 322) {
            break;
          }

          message.php_class_prefix = reader.string();
          continue;
        case 41:
          if (tag !== 330) {
            break;
          }

          message.php_namespace = reader.string();
          continue;
        case 44:
          if (tag !== 354) {
            break;
          }

          message.php_metadata_namespace = reader.string();
          continue;
        case 45:
          if (tag !== 362) {
            break;
          }

          message.ruby_package = reader.string();
          continue;
        case 999:
          if (tag !== 7994) {
            break;
          }

          if (message.uninterpreted_option === undefined) {
            message.uninterpreted_option = [];
          }
          message.uninterpreted_option!.push(UninterpretedOption.decode(reader, reader.uint32()));
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

  getExtension<T>(message: FileOptions, extension: Extension<T>): T | undefined {
    let results: T | undefined = undefined;

    if (message._unknownFields === undefined) {
      return undefined;
    }

    let list = message._unknownFields[extension.tag];

    if (list !== undefined) {
      results = extension.decode!(extension.tag, list);
    }

    if (extension.singularTag === undefined) {
      return results;
    }

    list = message._unknownFields[extension.singularTag];

    if (list !== undefined) {
      const results2 = extension.decode!(extension.singularTag, list);

      if (results !== undefined && (results as any).length !== 0) {
        results = (results as any).concat(results2);
      } else {
        results = results2;
      }
    }

    return results;
  },

  fromJSON(object: any): FileOptions {
    return {
      java_package: isSet(object.java_package) ? String(object.java_package) : undefined,
      java_outer_classname: isSet(object.java_outer_classname) ? String(object.java_outer_classname) : undefined,
      java_multiple_files: isSet(object.java_multiple_files) ? Boolean(object.java_multiple_files) : undefined,
      java_generate_equals_and_hash: isSet(object.java_generate_equals_and_hash)
        ? Boolean(object.java_generate_equals_and_hash)
        : undefined,
      java_string_check_utf8: isSet(object.java_string_check_utf8) ? Boolean(object.java_string_check_utf8) : undefined,
      optimize_for: isSet(object.optimize_for) ? fileOptions_OptimizeModeFromJSON(object.optimize_for) : undefined,
      go_package: isSet(object.go_package) ? String(object.go_package) : undefined,
      cc_generic_services: isSet(object.cc_generic_services) ? Boolean(object.cc_generic_services) : undefined,
      java_generic_services: isSet(object.java_generic_services) ? Boolean(object.java_generic_services) : undefined,
      py_generic_services: isSet(object.py_generic_services) ? Boolean(object.py_generic_services) : undefined,
      php_generic_services: isSet(object.php_generic_services) ? Boolean(object.php_generic_services) : undefined,
      deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : undefined,
      cc_enable_arenas: isSet(object.cc_enable_arenas) ? Boolean(object.cc_enable_arenas) : undefined,
      objc_class_prefix: isSet(object.objc_class_prefix) ? String(object.objc_class_prefix) : undefined,
      csharp_namespace: isSet(object.csharp_namespace) ? String(object.csharp_namespace) : undefined,
      swift_prefix: isSet(object.swift_prefix) ? String(object.swift_prefix) : undefined,
      php_class_prefix: isSet(object.php_class_prefix) ? String(object.php_class_prefix) : undefined,
      php_namespace: isSet(object.php_namespace) ? String(object.php_namespace) : undefined,
      php_metadata_namespace: isSet(object.php_metadata_namespace) ? String(object.php_metadata_namespace) : undefined,
      ruby_package: isSet(object.ruby_package) ? String(object.ruby_package) : undefined,
      uninterpreted_option: Array.isArray(object?.uninterpreted_option)
        ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromJSON(e))
        : undefined,
    };
  },

  toJSON(message: FileOptions): unknown {
    const obj: any = {};
    if (message.java_package !== undefined && message.java_package !== "") {
      obj.java_package = message.java_package;
    }
    if (message.java_outer_classname !== undefined && message.java_outer_classname !== "") {
      obj.java_outer_classname = message.java_outer_classname;
    }
    if (message.java_multiple_files === true) {
      obj.java_multiple_files = message.java_multiple_files;
    }
    if (message.java_generate_equals_and_hash === true) {
      obj.java_generate_equals_and_hash = message.java_generate_equals_and_hash;
    }
    if (message.java_string_check_utf8 === true) {
      obj.java_string_check_utf8 = message.java_string_check_utf8;
    }
    if (message.optimize_for !== undefined && message.optimize_for !== 1) {
      obj.optimize_for = fileOptions_OptimizeModeToJSON(message.optimize_for);
    }
    if (message.go_package !== undefined && message.go_package !== "") {
      obj.go_package = message.go_package;
    }
    if (message.cc_generic_services === true) {
      obj.cc_generic_services = message.cc_generic_services;
    }
    if (message.java_generic_services === true) {
      obj.java_generic_services = message.java_generic_services;
    }
    if (message.py_generic_services === true) {
      obj.py_generic_services = message.py_generic_services;
    }
    if (message.php_generic_services === true) {
      obj.php_generic_services = message.php_generic_services;
    }
    if (message.deprecated === true) {
      obj.deprecated = message.deprecated;
    }
    if (message.cc_enable_arenas === true) {
      obj.cc_enable_arenas = message.cc_enable_arenas;
    }
    if (message.objc_class_prefix !== undefined && message.objc_class_prefix !== "") {
      obj.objc_class_prefix = message.objc_class_prefix;
    }
    if (message.csharp_namespace !== undefined && message.csharp_namespace !== "") {
      obj.csharp_namespace = message.csharp_namespace;
    }
    if (message.swift_prefix !== undefined && message.swift_prefix !== "") {
      obj.swift_prefix = message.swift_prefix;
    }
    if (message.php_class_prefix !== undefined && message.php_class_prefix !== "") {
      obj.php_class_prefix = message.php_class_prefix;
    }
    if (message.php_namespace !== undefined && message.php_namespace !== "") {
      obj.php_namespace = message.php_namespace;
    }
    if (message.php_metadata_namespace !== undefined && message.php_metadata_namespace !== "") {
      obj.php_metadata_namespace = message.php_metadata_namespace;
    }
    if (message.ruby_package !== undefined && message.ruby_package !== "") {
      obj.ruby_package = message.ruby_package;
    }
    if (message.uninterpreted_option?.length) {
      obj.uninterpreted_option = message.uninterpreted_option.map((e) => UninterpretedOption.toJSON(e));
    }
    return obj;
  },
};

function createBaseMessageOptions(): MessageOptions {
  return {};
}

export const MessageOptions = {
  encode(message: MessageOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message_set_wire_format === true) {
      writer.uint32(8).bool(message.message_set_wire_format);
    }
    if (message.no_standard_descriptor_accessor === true) {
      writer.uint32(16).bool(message.no_standard_descriptor_accessor);
    }
    if (message.deprecated === true) {
      writer.uint32(24).bool(message.deprecated);
    }
    if (message.map_entry === true) {
      writer.uint32(56).bool(message.map_entry);
    }
    if (message.deprecated_legacy_json_field_conflicts === true) {
      writer.uint32(88).bool(message.deprecated_legacy_json_field_conflicts);
    }
    if (message.uninterpreted_option !== undefined && message.uninterpreted_option.length !== 0) {
      for (const v of message.uninterpreted_option) {
        UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
      }
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

  setExtension<T>(message: MessageOptions, extension: Extension<T>, value: T): void {
    const encoded = extension.encode!(value);

    if (message._unknownFields !== undefined) {
      delete message._unknownFields[extension.tag];

      if (extension.singularTag !== undefined) {
        delete message._unknownFields[extension.singularTag];
      }
    }

    if (encoded.length !== 0) {
      if (message._unknownFields === undefined) {
        message._unknownFields = {};
      }

      message._unknownFields[extension.tag] = encoded;
    }
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.message_set_wire_format = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.no_standard_descriptor_accessor = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.deprecated = reader.bool();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.map_entry = reader.bool();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.deprecated_legacy_json_field_conflicts = reader.bool();
          continue;
        case 999:
          if (tag !== 7994) {
            break;
          }

          if (message.uninterpreted_option === undefined) {
            message.uninterpreted_option = [];
          }
          message.uninterpreted_option!.push(UninterpretedOption.decode(reader, reader.uint32()));
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

  getExtension<T>(message: MessageOptions, extension: Extension<T>): T | undefined {
    let results: T | undefined = undefined;

    if (message._unknownFields === undefined) {
      return undefined;
    }

    let list = message._unknownFields[extension.tag];

    if (list !== undefined) {
      results = extension.decode!(extension.tag, list);
    }

    if (extension.singularTag === undefined) {
      return results;
    }

    list = message._unknownFields[extension.singularTag];

    if (list !== undefined) {
      const results2 = extension.decode!(extension.singularTag, list);

      if (results !== undefined && (results as any).length !== 0) {
        results = (results as any).concat(results2);
      } else {
        results = results2;
      }
    }

    return results;
  },

  fromJSON(object: any): MessageOptions {
    return {
      message_set_wire_format: isSet(object.message_set_wire_format)
        ? Boolean(object.message_set_wire_format)
        : undefined,
      no_standard_descriptor_accessor: isSet(object.no_standard_descriptor_accessor)
        ? Boolean(object.no_standard_descriptor_accessor)
        : undefined,
      deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : undefined,
      map_entry: isSet(object.map_entry) ? Boolean(object.map_entry) : undefined,
      deprecated_legacy_json_field_conflicts: isSet(object.deprecated_legacy_json_field_conflicts)
        ? Boolean(object.deprecated_legacy_json_field_conflicts)
        : undefined,
      uninterpreted_option: Array.isArray(object?.uninterpreted_option)
        ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromJSON(e))
        : undefined,
    };
  },

  toJSON(message: MessageOptions): unknown {
    const obj: any = {};
    if (message.message_set_wire_format === true) {
      obj.message_set_wire_format = message.message_set_wire_format;
    }
    if (message.no_standard_descriptor_accessor === true) {
      obj.no_standard_descriptor_accessor = message.no_standard_descriptor_accessor;
    }
    if (message.deprecated === true) {
      obj.deprecated = message.deprecated;
    }
    if (message.map_entry === true) {
      obj.map_entry = message.map_entry;
    }
    if (message.deprecated_legacy_json_field_conflicts === true) {
      obj.deprecated_legacy_json_field_conflicts = message.deprecated_legacy_json_field_conflicts;
    }
    if (message.uninterpreted_option?.length) {
      obj.uninterpreted_option = message.uninterpreted_option.map((e) => UninterpretedOption.toJSON(e));
    }
    return obj;
  },
};

function createBaseFieldOptions(): FieldOptions {
  return {};
}

export const FieldOptions = {
  encode(message: FieldOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ctype !== undefined && message.ctype !== 0) {
      writer.uint32(8).int32(message.ctype);
    }
    if (message.packed === true) {
      writer.uint32(16).bool(message.packed);
    }
    if (message.jstype !== undefined && message.jstype !== 0) {
      writer.uint32(48).int32(message.jstype);
    }
    if (message.lazy === true) {
      writer.uint32(40).bool(message.lazy);
    }
    if (message.unverified_lazy === true) {
      writer.uint32(120).bool(message.unverified_lazy);
    }
    if (message.deprecated === true) {
      writer.uint32(24).bool(message.deprecated);
    }
    if (message.weak === true) {
      writer.uint32(80).bool(message.weak);
    }
    if (message.debug_redact === true) {
      writer.uint32(128).bool(message.debug_redact);
    }
    if (message.retention !== undefined && message.retention !== 0) {
      writer.uint32(136).int32(message.retention);
    }
    if (message.target !== undefined && message.target !== 0) {
      writer.uint32(144).int32(message.target);
    }
    if (message.uninterpreted_option !== undefined && message.uninterpreted_option.length !== 0) {
      for (const v of message.uninterpreted_option) {
        UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
      }
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

  setExtension<T>(message: FieldOptions, extension: Extension<T>, value: T): void {
    const encoded = extension.encode!(value);

    if (message._unknownFields !== undefined) {
      delete message._unknownFields[extension.tag];

      if (extension.singularTag !== undefined) {
        delete message._unknownFields[extension.singularTag];
      }
    }

    if (encoded.length !== 0) {
      if (message._unknownFields === undefined) {
        message._unknownFields = {};
      }

      message._unknownFields[extension.tag] = encoded;
    }
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FieldOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFieldOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.ctype = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.packed = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.jstype = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.lazy = reader.bool();
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.unverified_lazy = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.deprecated = reader.bool();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.weak = reader.bool();
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.debug_redact = reader.bool();
          continue;
        case 17:
          if (tag !== 136) {
            break;
          }

          message.retention = reader.int32() as any;
          continue;
        case 18:
          if (tag !== 144) {
            break;
          }

          message.target = reader.int32() as any;
          continue;
        case 999:
          if (tag !== 7994) {
            break;
          }

          if (message.uninterpreted_option === undefined) {
            message.uninterpreted_option = [];
          }
          message.uninterpreted_option!.push(UninterpretedOption.decode(reader, reader.uint32()));
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

  getExtension<T>(message: FieldOptions, extension: Extension<T>): T | undefined {
    let results: T | undefined = undefined;

    if (message._unknownFields === undefined) {
      return undefined;
    }

    let list = message._unknownFields[extension.tag];

    if (list !== undefined) {
      results = extension.decode!(extension.tag, list);
    }

    if (extension.singularTag === undefined) {
      return results;
    }

    list = message._unknownFields[extension.singularTag];

    if (list !== undefined) {
      const results2 = extension.decode!(extension.singularTag, list);

      if (results !== undefined && (results as any).length !== 0) {
        results = (results as any).concat(results2);
      } else {
        results = results2;
      }
    }

    return results;
  },

  fromJSON(object: any): FieldOptions {
    return {
      ctype: isSet(object.ctype) ? fieldOptions_CTypeFromJSON(object.ctype) : undefined,
      packed: isSet(object.packed) ? Boolean(object.packed) : undefined,
      jstype: isSet(object.jstype) ? fieldOptions_JSTypeFromJSON(object.jstype) : undefined,
      lazy: isSet(object.lazy) ? Boolean(object.lazy) : undefined,
      unverified_lazy: isSet(object.unverified_lazy) ? Boolean(object.unverified_lazy) : undefined,
      deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : undefined,
      weak: isSet(object.weak) ? Boolean(object.weak) : undefined,
      debug_redact: isSet(object.debug_redact) ? Boolean(object.debug_redact) : undefined,
      retention: isSet(object.retention) ? fieldOptions_OptionRetentionFromJSON(object.retention) : undefined,
      target: isSet(object.target) ? fieldOptions_OptionTargetTypeFromJSON(object.target) : undefined,
      uninterpreted_option: Array.isArray(object?.uninterpreted_option)
        ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromJSON(e))
        : undefined,
    };
  },

  toJSON(message: FieldOptions): unknown {
    const obj: any = {};
    if (message.ctype !== undefined && message.ctype !== 0) {
      obj.ctype = fieldOptions_CTypeToJSON(message.ctype);
    }
    if (message.packed === true) {
      obj.packed = message.packed;
    }
    if (message.jstype !== undefined && message.jstype !== 0) {
      obj.jstype = fieldOptions_JSTypeToJSON(message.jstype);
    }
    if (message.lazy === true) {
      obj.lazy = message.lazy;
    }
    if (message.unverified_lazy === true) {
      obj.unverified_lazy = message.unverified_lazy;
    }
    if (message.deprecated === true) {
      obj.deprecated = message.deprecated;
    }
    if (message.weak === true) {
      obj.weak = message.weak;
    }
    if (message.debug_redact === true) {
      obj.debug_redact = message.debug_redact;
    }
    if (message.retention !== undefined && message.retention !== 0) {
      obj.retention = fieldOptions_OptionRetentionToJSON(message.retention);
    }
    if (message.target !== undefined && message.target !== 0) {
      obj.target = fieldOptions_OptionTargetTypeToJSON(message.target);
    }
    if (message.uninterpreted_option?.length) {
      obj.uninterpreted_option = message.uninterpreted_option.map((e) => UninterpretedOption.toJSON(e));
    }
    return obj;
  },
};

function createBaseOneofOptions(): OneofOptions {
  return {};
}

export const OneofOptions = {
  encode(message: OneofOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uninterpreted_option !== undefined && message.uninterpreted_option.length !== 0) {
      for (const v of message.uninterpreted_option) {
        UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
      }
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

  setExtension<T>(message: OneofOptions, extension: Extension<T>, value: T): void {
    const encoded = extension.encode!(value);

    if (message._unknownFields !== undefined) {
      delete message._unknownFields[extension.tag];

      if (extension.singularTag !== undefined) {
        delete message._unknownFields[extension.singularTag];
      }
    }

    if (encoded.length !== 0) {
      if (message._unknownFields === undefined) {
        message._unknownFields = {};
      }

      message._unknownFields[extension.tag] = encoded;
    }
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OneofOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOneofOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 999:
          if (tag !== 7994) {
            break;
          }

          if (message.uninterpreted_option === undefined) {
            message.uninterpreted_option = [];
          }
          message.uninterpreted_option!.push(UninterpretedOption.decode(reader, reader.uint32()));
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

  getExtension<T>(message: OneofOptions, extension: Extension<T>): T | undefined {
    let results: T | undefined = undefined;

    if (message._unknownFields === undefined) {
      return undefined;
    }

    let list = message._unknownFields[extension.tag];

    if (list !== undefined) {
      results = extension.decode!(extension.tag, list);
    }

    if (extension.singularTag === undefined) {
      return results;
    }

    list = message._unknownFields[extension.singularTag];

    if (list !== undefined) {
      const results2 = extension.decode!(extension.singularTag, list);

      if (results !== undefined && (results as any).length !== 0) {
        results = (results as any).concat(results2);
      } else {
        results = results2;
      }
    }

    return results;
  },

  fromJSON(object: any): OneofOptions {
    return {
      uninterpreted_option: Array.isArray(object?.uninterpreted_option)
        ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromJSON(e))
        : undefined,
    };
  },

  toJSON(message: OneofOptions): unknown {
    const obj: any = {};
    if (message.uninterpreted_option?.length) {
      obj.uninterpreted_option = message.uninterpreted_option.map((e) => UninterpretedOption.toJSON(e));
    }
    return obj;
  },
};

function createBaseEnumOptions(): EnumOptions {
  return {};
}

export const EnumOptions = {
  encode(message: EnumOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.allow_alias === true) {
      writer.uint32(16).bool(message.allow_alias);
    }
    if (message.deprecated === true) {
      writer.uint32(24).bool(message.deprecated);
    }
    if (message.deprecated_legacy_json_field_conflicts === true) {
      writer.uint32(48).bool(message.deprecated_legacy_json_field_conflicts);
    }
    if (message.uninterpreted_option !== undefined && message.uninterpreted_option.length !== 0) {
      for (const v of message.uninterpreted_option) {
        UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
      }
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

  setExtension<T>(message: EnumOptions, extension: Extension<T>, value: T): void {
    const encoded = extension.encode!(value);

    if (message._unknownFields !== undefined) {
      delete message._unknownFields[extension.tag];

      if (extension.singularTag !== undefined) {
        delete message._unknownFields[extension.singularTag];
      }
    }

    if (encoded.length !== 0) {
      if (message._unknownFields === undefined) {
        message._unknownFields = {};
      }

      message._unknownFields[extension.tag] = encoded;
    }
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnumOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 16) {
            break;
          }

          message.allow_alias = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.deprecated = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.deprecated_legacy_json_field_conflicts = reader.bool();
          continue;
        case 999:
          if (tag !== 7994) {
            break;
          }

          if (message.uninterpreted_option === undefined) {
            message.uninterpreted_option = [];
          }
          message.uninterpreted_option!.push(UninterpretedOption.decode(reader, reader.uint32()));
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

  getExtension<T>(message: EnumOptions, extension: Extension<T>): T | undefined {
    let results: T | undefined = undefined;

    if (message._unknownFields === undefined) {
      return undefined;
    }

    let list = message._unknownFields[extension.tag];

    if (list !== undefined) {
      results = extension.decode!(extension.tag, list);
    }

    if (extension.singularTag === undefined) {
      return results;
    }

    list = message._unknownFields[extension.singularTag];

    if (list !== undefined) {
      const results2 = extension.decode!(extension.singularTag, list);

      if (results !== undefined && (results as any).length !== 0) {
        results = (results as any).concat(results2);
      } else {
        results = results2;
      }
    }

    return results;
  },

  fromJSON(object: any): EnumOptions {
    return {
      allow_alias: isSet(object.allow_alias) ? Boolean(object.allow_alias) : undefined,
      deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : undefined,
      deprecated_legacy_json_field_conflicts: isSet(object.deprecated_legacy_json_field_conflicts)
        ? Boolean(object.deprecated_legacy_json_field_conflicts)
        : undefined,
      uninterpreted_option: Array.isArray(object?.uninterpreted_option)
        ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromJSON(e))
        : undefined,
    };
  },

  toJSON(message: EnumOptions): unknown {
    const obj: any = {};
    if (message.allow_alias === true) {
      obj.allow_alias = message.allow_alias;
    }
    if (message.deprecated === true) {
      obj.deprecated = message.deprecated;
    }
    if (message.deprecated_legacy_json_field_conflicts === true) {
      obj.deprecated_legacy_json_field_conflicts = message.deprecated_legacy_json_field_conflicts;
    }
    if (message.uninterpreted_option?.length) {
      obj.uninterpreted_option = message.uninterpreted_option.map((e) => UninterpretedOption.toJSON(e));
    }
    return obj;
  },
};

function createBaseEnumValueOptions(): EnumValueOptions {
  return {};
}

export const EnumValueOptions = {
  encode(message: EnumValueOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deprecated === true) {
      writer.uint32(8).bool(message.deprecated);
    }
    if (message.uninterpreted_option !== undefined && message.uninterpreted_option.length !== 0) {
      for (const v of message.uninterpreted_option) {
        UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
      }
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

  setExtension<T>(message: EnumValueOptions, extension: Extension<T>, value: T): void {
    const encoded = extension.encode!(value);

    if (message._unknownFields !== undefined) {
      delete message._unknownFields[extension.tag];

      if (extension.singularTag !== undefined) {
        delete message._unknownFields[extension.singularTag];
      }
    }

    if (encoded.length !== 0) {
      if (message._unknownFields === undefined) {
        message._unknownFields = {};
      }

      message._unknownFields[extension.tag] = encoded;
    }
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnumValueOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumValueOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.deprecated = reader.bool();
          continue;
        case 999:
          if (tag !== 7994) {
            break;
          }

          if (message.uninterpreted_option === undefined) {
            message.uninterpreted_option = [];
          }
          message.uninterpreted_option!.push(UninterpretedOption.decode(reader, reader.uint32()));
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

  getExtension<T>(message: EnumValueOptions, extension: Extension<T>): T | undefined {
    let results: T | undefined = undefined;

    if (message._unknownFields === undefined) {
      return undefined;
    }

    let list = message._unknownFields[extension.tag];

    if (list !== undefined) {
      results = extension.decode!(extension.tag, list);
    }

    if (extension.singularTag === undefined) {
      return results;
    }

    list = message._unknownFields[extension.singularTag];

    if (list !== undefined) {
      const results2 = extension.decode!(extension.singularTag, list);

      if (results !== undefined && (results as any).length !== 0) {
        results = (results as any).concat(results2);
      } else {
        results = results2;
      }
    }

    return results;
  },

  fromJSON(object: any): EnumValueOptions {
    return {
      deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : undefined,
      uninterpreted_option: Array.isArray(object?.uninterpreted_option)
        ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromJSON(e))
        : undefined,
    };
  },

  toJSON(message: EnumValueOptions): unknown {
    const obj: any = {};
    if (message.deprecated === true) {
      obj.deprecated = message.deprecated;
    }
    if (message.uninterpreted_option?.length) {
      obj.uninterpreted_option = message.uninterpreted_option.map((e) => UninterpretedOption.toJSON(e));
    }
    return obj;
  },
};

function createBaseServiceOptions(): ServiceOptions {
  return {};
}

export const ServiceOptions = {
  encode(message: ServiceOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deprecated === true) {
      writer.uint32(264).bool(message.deprecated);
    }
    if (message.uninterpreted_option !== undefined && message.uninterpreted_option.length !== 0) {
      for (const v of message.uninterpreted_option) {
        UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
      }
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

  setExtension<T>(message: ServiceOptions, extension: Extension<T>, value: T): void {
    const encoded = extension.encode!(value);

    if (message._unknownFields !== undefined) {
      delete message._unknownFields[extension.tag];

      if (extension.singularTag !== undefined) {
        delete message._unknownFields[extension.singularTag];
      }
    }

    if (encoded.length !== 0) {
      if (message._unknownFields === undefined) {
        message._unknownFields = {};
      }

      message._unknownFields[extension.tag] = encoded;
    }
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServiceOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 33:
          if (tag !== 264) {
            break;
          }

          message.deprecated = reader.bool();
          continue;
        case 999:
          if (tag !== 7994) {
            break;
          }

          if (message.uninterpreted_option === undefined) {
            message.uninterpreted_option = [];
          }
          message.uninterpreted_option!.push(UninterpretedOption.decode(reader, reader.uint32()));
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

  getExtension<T>(message: ServiceOptions, extension: Extension<T>): T | undefined {
    let results: T | undefined = undefined;

    if (message._unknownFields === undefined) {
      return undefined;
    }

    let list = message._unknownFields[extension.tag];

    if (list !== undefined) {
      results = extension.decode!(extension.tag, list);
    }

    if (extension.singularTag === undefined) {
      return results;
    }

    list = message._unknownFields[extension.singularTag];

    if (list !== undefined) {
      const results2 = extension.decode!(extension.singularTag, list);

      if (results !== undefined && (results as any).length !== 0) {
        results = (results as any).concat(results2);
      } else {
        results = results2;
      }
    }

    return results;
  },

  fromJSON(object: any): ServiceOptions {
    return {
      deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : undefined,
      uninterpreted_option: Array.isArray(object?.uninterpreted_option)
        ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromJSON(e))
        : undefined,
    };
  },

  toJSON(message: ServiceOptions): unknown {
    const obj: any = {};
    if (message.deprecated === true) {
      obj.deprecated = message.deprecated;
    }
    if (message.uninterpreted_option?.length) {
      obj.uninterpreted_option = message.uninterpreted_option.map((e) => UninterpretedOption.toJSON(e));
    }
    return obj;
  },
};

function createBaseMethodOptions(): MethodOptions {
  return {};
}

export const MethodOptions = {
  encode(message: MethodOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deprecated === true) {
      writer.uint32(264).bool(message.deprecated);
    }
    if (message.idempotency_level !== undefined && message.idempotency_level !== 0) {
      writer.uint32(272).int32(message.idempotency_level);
    }
    if (message.uninterpreted_option !== undefined && message.uninterpreted_option.length !== 0) {
      for (const v of message.uninterpreted_option) {
        UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
      }
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

  setExtension<T>(message: MethodOptions, extension: Extension<T>, value: T): void {
    const encoded = extension.encode!(value);

    if (message._unknownFields !== undefined) {
      delete message._unknownFields[extension.tag];

      if (extension.singularTag !== undefined) {
        delete message._unknownFields[extension.singularTag];
      }
    }

    if (encoded.length !== 0) {
      if (message._unknownFields === undefined) {
        message._unknownFields = {};
      }

      message._unknownFields[extension.tag] = encoded;
    }
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MethodOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMethodOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 33:
          if (tag !== 264) {
            break;
          }

          message.deprecated = reader.bool();
          continue;
        case 34:
          if (tag !== 272) {
            break;
          }

          message.idempotency_level = reader.int32() as any;
          continue;
        case 999:
          if (tag !== 7994) {
            break;
          }

          if (message.uninterpreted_option === undefined) {
            message.uninterpreted_option = [];
          }
          message.uninterpreted_option!.push(UninterpretedOption.decode(reader, reader.uint32()));
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

  getExtension<T>(message: MethodOptions, extension: Extension<T>): T | undefined {
    let results: T | undefined = undefined;

    if (message._unknownFields === undefined) {
      return undefined;
    }

    let list = message._unknownFields[extension.tag];

    if (list !== undefined) {
      results = extension.decode!(extension.tag, list);
    }

    if (extension.singularTag === undefined) {
      return results;
    }

    list = message._unknownFields[extension.singularTag];

    if (list !== undefined) {
      const results2 = extension.decode!(extension.singularTag, list);

      if (results !== undefined && (results as any).length !== 0) {
        results = (results as any).concat(results2);
      } else {
        results = results2;
      }
    }

    return results;
  },

  fromJSON(object: any): MethodOptions {
    return {
      deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : undefined,
      idempotency_level: isSet(object.idempotency_level)
        ? methodOptions_IdempotencyLevelFromJSON(object.idempotency_level)
        : undefined,
      uninterpreted_option: Array.isArray(object?.uninterpreted_option)
        ? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromJSON(e))
        : undefined,
    };
  },

  toJSON(message: MethodOptions): unknown {
    const obj: any = {};
    if (message.deprecated === true) {
      obj.deprecated = message.deprecated;
    }
    if (message.idempotency_level !== undefined && message.idempotency_level !== 0) {
      obj.idempotency_level = methodOptions_IdempotencyLevelToJSON(message.idempotency_level);
    }
    if (message.uninterpreted_option?.length) {
      obj.uninterpreted_option = message.uninterpreted_option.map((e) => UninterpretedOption.toJSON(e));
    }
    return obj;
  },
};

function createBaseUninterpretedOption(): UninterpretedOption {
  return {};
}

export const UninterpretedOption = {
  encode(message: UninterpretedOption, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined && message.name.length !== 0) {
      for (const v of message.name) {
        UninterpretedOption_NamePart.encode(v!, writer.uint32(18).fork()).ldelim();
      }
    }
    if (message.identifier_value !== undefined && message.identifier_value !== "") {
      writer.uint32(26).string(message.identifier_value);
    }
    if (message.positive_int_value !== undefined && message.positive_int_value !== BigInt("0")) {
      writer.uint32(32).uint64(message.positive_int_value.toString());
    }
    if (message.negative_int_value !== undefined && message.negative_int_value !== BigInt("0")) {
      writer.uint32(40).int64(message.negative_int_value.toString());
    }
    if (message.double_value !== undefined && message.double_value !== 0) {
      writer.uint32(49).double(message.double_value);
    }
    if (message.string_value !== undefined && message.string_value.length !== 0) {
      writer.uint32(58).bytes(message.string_value);
    }
    if (message.aggregate_value !== undefined && message.aggregate_value !== "") {
      writer.uint32(66).string(message.aggregate_value);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): UninterpretedOption {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUninterpretedOption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          if (message.name === undefined) {
            message.name = [];
          }
          message.name!.push(UninterpretedOption_NamePart.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.identifier_value = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.positive_int_value = longToBigint(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.negative_int_value = longToBigint(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 49) {
            break;
          }

          message.double_value = reader.double();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.string_value = reader.bytes() as Buffer;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.aggregate_value = reader.string();
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

  fromJSON(object: any): UninterpretedOption {
    return {
      name: Array.isArray(object?.name)
        ? object.name.map((e: any) => UninterpretedOption_NamePart.fromJSON(e))
        : undefined,
      identifier_value: isSet(object.identifier_value) ? String(object.identifier_value) : undefined,
      positive_int_value: isSet(object.positive_int_value) ? BigInt(object.positive_int_value) : undefined,
      negative_int_value: isSet(object.negative_int_value) ? BigInt(object.negative_int_value) : undefined,
      double_value: isSet(object.double_value) ? Number(object.double_value) : undefined,
      string_value: isSet(object.string_value) ? Buffer.from(bytesFromBase64(object.string_value)) : undefined,
      aggregate_value: isSet(object.aggregate_value) ? String(object.aggregate_value) : undefined,
    };
  },

  toJSON(message: UninterpretedOption): unknown {
    const obj: any = {};
    if (message.name?.length) {
      obj.name = message.name.map((e) => UninterpretedOption_NamePart.toJSON(e));
    }
    if (message.identifier_value !== undefined && message.identifier_value !== "") {
      obj.identifier_value = message.identifier_value;
    }
    if (message.positive_int_value !== undefined && message.positive_int_value !== BigInt("0")) {
      obj.positive_int_value = message.positive_int_value.toString();
    }
    if (message.negative_int_value !== undefined && message.negative_int_value !== BigInt("0")) {
      obj.negative_int_value = message.negative_int_value.toString();
    }
    if (message.double_value !== undefined && message.double_value !== 0) {
      obj.double_value = message.double_value;
    }
    if (message.string_value !== undefined && message.string_value.length !== 0) {
      obj.string_value = base64FromBytes(message.string_value);
    }
    if (message.aggregate_value !== undefined && message.aggregate_value !== "") {
      obj.aggregate_value = message.aggregate_value;
    }
    return obj;
  },
};

function createBaseUninterpretedOption_NamePart(): UninterpretedOption_NamePart {
  return {};
}

export const UninterpretedOption_NamePart = {
  encode(message: UninterpretedOption_NamePart, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name_part !== undefined && message.name_part !== "") {
      writer.uint32(10).string(message.name_part);
    }
    if (message.is_extension === true) {
      writer.uint32(16).bool(message.is_extension);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): UninterpretedOption_NamePart {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUninterpretedOption_NamePart();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name_part = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.is_extension = reader.bool();
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

  fromJSON(object: any): UninterpretedOption_NamePart {
    return {
      name_part: isSet(object.name_part) ? String(object.name_part) : undefined,
      is_extension: isSet(object.is_extension) ? Boolean(object.is_extension) : undefined,
    };
  },

  toJSON(message: UninterpretedOption_NamePart): unknown {
    const obj: any = {};
    if (message.name_part !== undefined && message.name_part !== "") {
      obj.name_part = message.name_part;
    }
    if (message.is_extension === true) {
      obj.is_extension = message.is_extension;
    }
    return obj;
  },
};

function createBaseSourceCodeInfo(): SourceCodeInfo {
  return {};
}

export const SourceCodeInfo = {
  encode(message: SourceCodeInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.location !== undefined && message.location.length !== 0) {
      for (const v of message.location) {
        SourceCodeInfo_Location.encode(v!, writer.uint32(10).fork()).ldelim();
      }
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

  decode(input: _m0.Reader | Uint8Array, length?: number): SourceCodeInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceCodeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          if (message.location === undefined) {
            message.location = [];
          }
          message.location!.push(SourceCodeInfo_Location.decode(reader, reader.uint32()));
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

  fromJSON(object: any): SourceCodeInfo {
    return {
      location: Array.isArray(object?.location)
        ? object.location.map((e: any) => SourceCodeInfo_Location.fromJSON(e))
        : undefined,
    };
  },

  toJSON(message: SourceCodeInfo): unknown {
    const obj: any = {};
    if (message.location?.length) {
      obj.location = message.location.map((e) => SourceCodeInfo_Location.toJSON(e));
    }
    return obj;
  },
};

function createBaseSourceCodeInfo_Location(): SourceCodeInfo_Location {
  return {};
}

export const SourceCodeInfo_Location = {
  encode(message: SourceCodeInfo_Location, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path !== undefined && message.path.length !== 0) {
      writer.uint32(10).fork();
      for (const v of message.path) {
        writer.int32(v);
      }
      writer.ldelim();
    }
    if (message.span !== undefined && message.span.length !== 0) {
      writer.uint32(18).fork();
      for (const v of message.span) {
        writer.int32(v);
      }
      writer.ldelim();
    }
    if (message.leading_comments !== undefined && message.leading_comments !== "") {
      writer.uint32(26).string(message.leading_comments);
    }
    if (message.trailing_comments !== undefined && message.trailing_comments !== "") {
      writer.uint32(34).string(message.trailing_comments);
    }
    if (message.leading_detached_comments !== undefined && message.leading_detached_comments.length !== 0) {
      for (const v of message.leading_detached_comments) {
        writer.uint32(50).string(v!);
      }
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

  decode(input: _m0.Reader | Uint8Array, length?: number): SourceCodeInfo_Location {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceCodeInfo_Location();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            if (message.path === undefined) {
              message.path = [];
            }
            message.path!.push(reader.int32());

            continue;
          }

          if (tag === 10) {
            if (message.path === undefined) {
              message.path = [];
            }
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.path!.push(reader.int32());
            }

            continue;
          }

          break;
        case 2:
          if (tag === 16) {
            if (message.span === undefined) {
              message.span = [];
            }
            message.span!.push(reader.int32());

            continue;
          }

          if (tag === 18) {
            if (message.span === undefined) {
              message.span = [];
            }
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.span!.push(reader.int32());
            }

            continue;
          }

          break;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.leading_comments = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.trailing_comments = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          if (message.leading_detached_comments === undefined) {
            message.leading_detached_comments = [];
          }
          message.leading_detached_comments!.push(reader.string());
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

  fromJSON(object: any): SourceCodeInfo_Location {
    return {
      path: Array.isArray(object?.path) ? object.path.map((e: any) => Number(e)) : undefined,
      span: Array.isArray(object?.span) ? object.span.map((e: any) => Number(e)) : undefined,
      leading_comments: isSet(object.leading_comments) ? String(object.leading_comments) : undefined,
      trailing_comments: isSet(object.trailing_comments) ? String(object.trailing_comments) : undefined,
      leading_detached_comments: Array.isArray(object?.leading_detached_comments)
        ? object.leading_detached_comments.map((e: any) => String(e))
        : undefined,
    };
  },

  toJSON(message: SourceCodeInfo_Location): unknown {
    const obj: any = {};
    if (message.path?.length) {
      obj.path = message.path.map((e) => Math.round(e));
    }
    if (message.span?.length) {
      obj.span = message.span.map((e) => Math.round(e));
    }
    if (message.leading_comments !== undefined && message.leading_comments !== "") {
      obj.leading_comments = message.leading_comments;
    }
    if (message.trailing_comments !== undefined && message.trailing_comments !== "") {
      obj.trailing_comments = message.trailing_comments;
    }
    if (message.leading_detached_comments?.length) {
      obj.leading_detached_comments = message.leading_detached_comments;
    }
    return obj;
  },
};

function createBaseGeneratedCodeInfo(): GeneratedCodeInfo {
  return {};
}

export const GeneratedCodeInfo = {
  encode(message: GeneratedCodeInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.annotation !== undefined && message.annotation.length !== 0) {
      for (const v of message.annotation) {
        GeneratedCodeInfo_Annotation.encode(v!, writer.uint32(10).fork()).ldelim();
      }
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

  decode(input: _m0.Reader | Uint8Array, length?: number): GeneratedCodeInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeneratedCodeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          if (message.annotation === undefined) {
            message.annotation = [];
          }
          message.annotation!.push(GeneratedCodeInfo_Annotation.decode(reader, reader.uint32()));
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

  fromJSON(object: any): GeneratedCodeInfo {
    return {
      annotation: Array.isArray(object?.annotation)
        ? object.annotation.map((e: any) => GeneratedCodeInfo_Annotation.fromJSON(e))
        : undefined,
    };
  },

  toJSON(message: GeneratedCodeInfo): unknown {
    const obj: any = {};
    if (message.annotation?.length) {
      obj.annotation = message.annotation.map((e) => GeneratedCodeInfo_Annotation.toJSON(e));
    }
    return obj;
  },
};

function createBaseGeneratedCodeInfo_Annotation(): GeneratedCodeInfo_Annotation {
  return {};
}

export const GeneratedCodeInfo_Annotation = {
  encode(message: GeneratedCodeInfo_Annotation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path !== undefined && message.path.length !== 0) {
      writer.uint32(10).fork();
      for (const v of message.path) {
        writer.int32(v);
      }
      writer.ldelim();
    }
    if (message.source_file !== undefined && message.source_file !== "") {
      writer.uint32(18).string(message.source_file);
    }
    if (message.begin !== undefined && message.begin !== 0) {
      writer.uint32(24).int32(message.begin);
    }
    if (message.end !== undefined && message.end !== 0) {
      writer.uint32(32).int32(message.end);
    }
    if (message.semantic !== undefined && message.semantic !== 0) {
      writer.uint32(40).int32(message.semantic);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): GeneratedCodeInfo_Annotation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeneratedCodeInfo_Annotation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            if (message.path === undefined) {
              message.path = [];
            }
            message.path!.push(reader.int32());

            continue;
          }

          if (tag === 10) {
            if (message.path === undefined) {
              message.path = [];
            }
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.path!.push(reader.int32());
            }

            continue;
          }

          break;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.source_file = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.begin = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.end = reader.int32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.semantic = reader.int32() as any;
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

  fromJSON(object: any): GeneratedCodeInfo_Annotation {
    return {
      path: Array.isArray(object?.path) ? object.path.map((e: any) => Number(e)) : undefined,
      source_file: isSet(object.source_file) ? String(object.source_file) : undefined,
      begin: isSet(object.begin) ? Number(object.begin) : undefined,
      end: isSet(object.end) ? Number(object.end) : undefined,
      semantic: isSet(object.semantic) ? generatedCodeInfo_Annotation_SemanticFromJSON(object.semantic) : undefined,
    };
  },

  toJSON(message: GeneratedCodeInfo_Annotation): unknown {
    const obj: any = {};
    if (message.path?.length) {
      obj.path = message.path.map((e) => Math.round(e));
    }
    if (message.source_file !== undefined && message.source_file !== "") {
      obj.source_file = message.source_file;
    }
    if (message.begin !== undefined && message.begin !== 0) {
      obj.begin = Math.round(message.begin);
    }
    if (message.end !== undefined && message.end !== 0) {
      obj.end = Math.round(message.end);
    }
    if (message.semantic !== undefined && message.semantic !== 0) {
      obj.semantic = generatedCodeInfo_Annotation_SemanticToJSON(message.semantic);
    }
    return obj;
  },
};

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

function longToBigint(long: Long) {
  return BigInt(long.toString());
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface Extension<T> {
  number: number;
  tag: number;
  singularTag?: number;
  encode?: (message: T) => Uint8Array[];
  decode?: (tag: number, input: Uint8Array[]) => T;
  repeated: boolean;
  packed: boolean;
}
