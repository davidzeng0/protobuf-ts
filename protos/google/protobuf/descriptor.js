"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UninterpretedOption_NamePart = exports.UninterpretedOption = exports.MethodOptions = exports.ServiceOptions = exports.EnumValueOptions = exports.EnumOptions = exports.OneofOptions = exports.FieldOptions = exports.MessageOptions = exports.FileOptions = exports.MethodDescriptorProto = exports.ServiceDescriptorProto = exports.EnumValueDescriptorProto = exports.EnumDescriptorProto_EnumReservedRange = exports.EnumDescriptorProto = exports.OneofDescriptorProto = exports.FieldDescriptorProto = exports.ExtensionRangeOptions = exports.DescriptorProto_ReservedRange = exports.DescriptorProto_ExtensionRange = exports.DescriptorProto = exports.FileDescriptorProto = exports.FileDescriptorSet = exports.generatedCodeInfo_Annotation_SemanticToJSON = exports.generatedCodeInfo_Annotation_SemanticFromJSON = exports.GeneratedCodeInfo_Annotation_Semantic = exports.methodOptions_IdempotencyLevelToJSON = exports.methodOptions_IdempotencyLevelFromJSON = exports.MethodOptions_IdempotencyLevel = exports.fieldOptions_OptionTargetTypeToJSON = exports.fieldOptions_OptionTargetTypeFromJSON = exports.FieldOptions_OptionTargetType = exports.fieldOptions_OptionRetentionToJSON = exports.fieldOptions_OptionRetentionFromJSON = exports.FieldOptions_OptionRetention = exports.fieldOptions_JSTypeToJSON = exports.fieldOptions_JSTypeFromJSON = exports.FieldOptions_JSType = exports.fieldOptions_CTypeToJSON = exports.fieldOptions_CTypeFromJSON = exports.FieldOptions_CType = exports.fileOptions_OptimizeModeToJSON = exports.fileOptions_OptimizeModeFromJSON = exports.FileOptions_OptimizeMode = exports.fieldDescriptorProto_LabelToJSON = exports.fieldDescriptorProto_LabelFromJSON = exports.FieldDescriptorProto_Label = exports.fieldDescriptorProto_TypeToJSON = exports.fieldDescriptorProto_TypeFromJSON = exports.FieldDescriptorProto_Type = void 0;
exports.GeneratedCodeInfo_Annotation = exports.GeneratedCodeInfo = exports.SourceCodeInfo_Location = exports.SourceCodeInfo = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
var FieldDescriptorProto_Type;
(function (FieldDescriptorProto_Type) {
    /**
     * TYPE_DOUBLE - 0 is reserved for errors.
     * Order is weird for historical reasons.
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_DOUBLE"] = 1] = "TYPE_DOUBLE";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_FLOAT"] = 2] = "TYPE_FLOAT";
    /**
     * TYPE_INT64 - Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT64 if
     * negative values are likely.
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_INT64"] = 3] = "TYPE_INT64";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_UINT64"] = 4] = "TYPE_UINT64";
    /**
     * TYPE_INT32 - Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT32 if
     * negative values are likely.
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_INT32"] = 5] = "TYPE_INT32";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_FIXED64"] = 6] = "TYPE_FIXED64";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_FIXED32"] = 7] = "TYPE_FIXED32";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_BOOL"] = 8] = "TYPE_BOOL";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_STRING"] = 9] = "TYPE_STRING";
    /**
     * TYPE_GROUP - Tag-delimited aggregate.
     * Group type is deprecated and not supported in proto3. However, Proto3
     * implementations should still be able to parse the group wire format and
     * treat group fields as unknown fields.
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_GROUP"] = 10] = "TYPE_GROUP";
    /** TYPE_MESSAGE - Length-delimited aggregate. */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_MESSAGE"] = 11] = "TYPE_MESSAGE";
    /** TYPE_BYTES - New in version 2. */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_BYTES"] = 12] = "TYPE_BYTES";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_UINT32"] = 13] = "TYPE_UINT32";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_ENUM"] = 14] = "TYPE_ENUM";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_SFIXED32"] = 15] = "TYPE_SFIXED32";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_SFIXED64"] = 16] = "TYPE_SFIXED64";
    /** TYPE_SINT32 - Uses ZigZag encoding. */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_SINT32"] = 17] = "TYPE_SINT32";
    /** TYPE_SINT64 - Uses ZigZag encoding. */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_SINT64"] = 18] = "TYPE_SINT64";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FieldDescriptorProto_Type || (exports.FieldDescriptorProto_Type = FieldDescriptorProto_Type = {}));
function fieldDescriptorProto_TypeFromJSON(object) {
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
exports.fieldDescriptorProto_TypeFromJSON = fieldDescriptorProto_TypeFromJSON;
function fieldDescriptorProto_TypeToJSON(object) {
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
exports.fieldDescriptorProto_TypeToJSON = fieldDescriptorProto_TypeToJSON;
var FieldDescriptorProto_Label;
(function (FieldDescriptorProto_Label) {
    /** LABEL_OPTIONAL - 0 is reserved for errors */
    FieldDescriptorProto_Label[FieldDescriptorProto_Label["LABEL_OPTIONAL"] = 1] = "LABEL_OPTIONAL";
    FieldDescriptorProto_Label[FieldDescriptorProto_Label["LABEL_REQUIRED"] = 2] = "LABEL_REQUIRED";
    FieldDescriptorProto_Label[FieldDescriptorProto_Label["LABEL_REPEATED"] = 3] = "LABEL_REPEATED";
    FieldDescriptorProto_Label[FieldDescriptorProto_Label["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FieldDescriptorProto_Label || (exports.FieldDescriptorProto_Label = FieldDescriptorProto_Label = {}));
function fieldDescriptorProto_LabelFromJSON(object) {
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
exports.fieldDescriptorProto_LabelFromJSON = fieldDescriptorProto_LabelFromJSON;
function fieldDescriptorProto_LabelToJSON(object) {
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
exports.fieldDescriptorProto_LabelToJSON = fieldDescriptorProto_LabelToJSON;
/** Generated classes can be optimized for speed or code size. */
var FileOptions_OptimizeMode;
(function (FileOptions_OptimizeMode) {
    /** SPEED - Generate complete code for parsing, serialization, */
    FileOptions_OptimizeMode[FileOptions_OptimizeMode["SPEED"] = 1] = "SPEED";
    /** CODE_SIZE - etc. */
    FileOptions_OptimizeMode[FileOptions_OptimizeMode["CODE_SIZE"] = 2] = "CODE_SIZE";
    /** LITE_RUNTIME - Generate code using MessageLite and the lite runtime. */
    FileOptions_OptimizeMode[FileOptions_OptimizeMode["LITE_RUNTIME"] = 3] = "LITE_RUNTIME";
    FileOptions_OptimizeMode[FileOptions_OptimizeMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FileOptions_OptimizeMode || (exports.FileOptions_OptimizeMode = FileOptions_OptimizeMode = {}));
function fileOptions_OptimizeModeFromJSON(object) {
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
exports.fileOptions_OptimizeModeFromJSON = fileOptions_OptimizeModeFromJSON;
function fileOptions_OptimizeModeToJSON(object) {
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
exports.fileOptions_OptimizeModeToJSON = fileOptions_OptimizeModeToJSON;
var FieldOptions_CType;
(function (FieldOptions_CType) {
    /** STRING - Default mode. */
    FieldOptions_CType[FieldOptions_CType["STRING"] = 0] = "STRING";
    FieldOptions_CType[FieldOptions_CType["CORD"] = 1] = "CORD";
    FieldOptions_CType[FieldOptions_CType["STRING_PIECE"] = 2] = "STRING_PIECE";
    FieldOptions_CType[FieldOptions_CType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FieldOptions_CType || (exports.FieldOptions_CType = FieldOptions_CType = {}));
function fieldOptions_CTypeFromJSON(object) {
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
exports.fieldOptions_CTypeFromJSON = fieldOptions_CTypeFromJSON;
function fieldOptions_CTypeToJSON(object) {
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
exports.fieldOptions_CTypeToJSON = fieldOptions_CTypeToJSON;
var FieldOptions_JSType;
(function (FieldOptions_JSType) {
    /** JS_NORMAL - Use the default type. */
    FieldOptions_JSType[FieldOptions_JSType["JS_NORMAL"] = 0] = "JS_NORMAL";
    /** JS_STRING - Use JavaScript strings. */
    FieldOptions_JSType[FieldOptions_JSType["JS_STRING"] = 1] = "JS_STRING";
    /** JS_NUMBER - Use JavaScript numbers. */
    FieldOptions_JSType[FieldOptions_JSType["JS_NUMBER"] = 2] = "JS_NUMBER";
    FieldOptions_JSType[FieldOptions_JSType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FieldOptions_JSType || (exports.FieldOptions_JSType = FieldOptions_JSType = {}));
function fieldOptions_JSTypeFromJSON(object) {
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
exports.fieldOptions_JSTypeFromJSON = fieldOptions_JSTypeFromJSON;
function fieldOptions_JSTypeToJSON(object) {
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
exports.fieldOptions_JSTypeToJSON = fieldOptions_JSTypeToJSON;
/**
 * If set to RETENTION_SOURCE, the option will be omitted from the binary.
 * Note: as of January 2023, support for this is in progress and does not yet
 * have an effect (b/264593489).
 */
var FieldOptions_OptionRetention;
(function (FieldOptions_OptionRetention) {
    FieldOptions_OptionRetention[FieldOptions_OptionRetention["RETENTION_UNKNOWN"] = 0] = "RETENTION_UNKNOWN";
    FieldOptions_OptionRetention[FieldOptions_OptionRetention["RETENTION_RUNTIME"] = 1] = "RETENTION_RUNTIME";
    FieldOptions_OptionRetention[FieldOptions_OptionRetention["RETENTION_SOURCE"] = 2] = "RETENTION_SOURCE";
    FieldOptions_OptionRetention[FieldOptions_OptionRetention["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FieldOptions_OptionRetention || (exports.FieldOptions_OptionRetention = FieldOptions_OptionRetention = {}));
function fieldOptions_OptionRetentionFromJSON(object) {
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
exports.fieldOptions_OptionRetentionFromJSON = fieldOptions_OptionRetentionFromJSON;
function fieldOptions_OptionRetentionToJSON(object) {
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
exports.fieldOptions_OptionRetentionToJSON = fieldOptions_OptionRetentionToJSON;
/**
 * This indicates the types of entities that the field may apply to when used
 * as an option. If it is unset, then the field may be freely used as an
 * option on any kind of entity. Note: as of January 2023, support for this is
 * in progress and does not yet have an effect (b/264593489).
 */
var FieldOptions_OptionTargetType;
(function (FieldOptions_OptionTargetType) {
    FieldOptions_OptionTargetType[FieldOptions_OptionTargetType["TARGET_TYPE_UNKNOWN"] = 0] = "TARGET_TYPE_UNKNOWN";
    FieldOptions_OptionTargetType[FieldOptions_OptionTargetType["TARGET_TYPE_FILE"] = 1] = "TARGET_TYPE_FILE";
    FieldOptions_OptionTargetType[FieldOptions_OptionTargetType["TARGET_TYPE_EXTENSION_RANGE"] = 2] = "TARGET_TYPE_EXTENSION_RANGE";
    FieldOptions_OptionTargetType[FieldOptions_OptionTargetType["TARGET_TYPE_MESSAGE"] = 3] = "TARGET_TYPE_MESSAGE";
    FieldOptions_OptionTargetType[FieldOptions_OptionTargetType["TARGET_TYPE_FIELD"] = 4] = "TARGET_TYPE_FIELD";
    FieldOptions_OptionTargetType[FieldOptions_OptionTargetType["TARGET_TYPE_ONEOF"] = 5] = "TARGET_TYPE_ONEOF";
    FieldOptions_OptionTargetType[FieldOptions_OptionTargetType["TARGET_TYPE_ENUM"] = 6] = "TARGET_TYPE_ENUM";
    FieldOptions_OptionTargetType[FieldOptions_OptionTargetType["TARGET_TYPE_ENUM_ENTRY"] = 7] = "TARGET_TYPE_ENUM_ENTRY";
    FieldOptions_OptionTargetType[FieldOptions_OptionTargetType["TARGET_TYPE_SERVICE"] = 8] = "TARGET_TYPE_SERVICE";
    FieldOptions_OptionTargetType[FieldOptions_OptionTargetType["TARGET_TYPE_METHOD"] = 9] = "TARGET_TYPE_METHOD";
    FieldOptions_OptionTargetType[FieldOptions_OptionTargetType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FieldOptions_OptionTargetType || (exports.FieldOptions_OptionTargetType = FieldOptions_OptionTargetType = {}));
function fieldOptions_OptionTargetTypeFromJSON(object) {
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
exports.fieldOptions_OptionTargetTypeFromJSON = fieldOptions_OptionTargetTypeFromJSON;
function fieldOptions_OptionTargetTypeToJSON(object) {
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
exports.fieldOptions_OptionTargetTypeToJSON = fieldOptions_OptionTargetTypeToJSON;
/**
 * Is this method side-effect-free (or safe in HTTP parlance), or idempotent,
 * or neither? HTTP based RPC implementation may choose GET verb for safe
 * methods, and PUT verb for idempotent methods instead of the default POST.
 */
var MethodOptions_IdempotencyLevel;
(function (MethodOptions_IdempotencyLevel) {
    MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["IDEMPOTENCY_UNKNOWN"] = 0] = "IDEMPOTENCY_UNKNOWN";
    /** NO_SIDE_EFFECTS - implies idempotent */
    MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["NO_SIDE_EFFECTS"] = 1] = "NO_SIDE_EFFECTS";
    /** IDEMPOTENT - idempotent, but may have side effects */
    MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["IDEMPOTENT"] = 2] = "IDEMPOTENT";
    MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(MethodOptions_IdempotencyLevel || (exports.MethodOptions_IdempotencyLevel = MethodOptions_IdempotencyLevel = {}));
function methodOptions_IdempotencyLevelFromJSON(object) {
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
exports.methodOptions_IdempotencyLevelFromJSON = methodOptions_IdempotencyLevelFromJSON;
function methodOptions_IdempotencyLevelToJSON(object) {
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
exports.methodOptions_IdempotencyLevelToJSON = methodOptions_IdempotencyLevelToJSON;
/**
 * Represents the identified object's effect on the element in the original
 * .proto file.
 */
var GeneratedCodeInfo_Annotation_Semantic;
(function (GeneratedCodeInfo_Annotation_Semantic) {
    /** NONE - There is no effect or the effect is indescribable. */
    GeneratedCodeInfo_Annotation_Semantic[GeneratedCodeInfo_Annotation_Semantic["NONE"] = 0] = "NONE";
    /** SET - The element is set or otherwise mutated. */
    GeneratedCodeInfo_Annotation_Semantic[GeneratedCodeInfo_Annotation_Semantic["SET"] = 1] = "SET";
    /** ALIAS - An alias to the element is returned. */
    GeneratedCodeInfo_Annotation_Semantic[GeneratedCodeInfo_Annotation_Semantic["ALIAS"] = 2] = "ALIAS";
    GeneratedCodeInfo_Annotation_Semantic[GeneratedCodeInfo_Annotation_Semantic["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(GeneratedCodeInfo_Annotation_Semantic || (exports.GeneratedCodeInfo_Annotation_Semantic = GeneratedCodeInfo_Annotation_Semantic = {}));
function generatedCodeInfo_Annotation_SemanticFromJSON(object) {
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
exports.generatedCodeInfo_Annotation_SemanticFromJSON = generatedCodeInfo_Annotation_SemanticFromJSON;
function generatedCodeInfo_Annotation_SemanticToJSON(object) {
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
exports.generatedCodeInfo_Annotation_SemanticToJSON = generatedCodeInfo_Annotation_SemanticToJSON;
function createBaseFileDescriptorSet() {
    return {};
}
exports.FileDescriptorSet = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.file !== undefined && message.file.length !== 0) {
            for (const v of message.file) {
                exports.FileDescriptorProto.encode(v, writer.uint32(10).fork()).ldelim();
            }
        }
        if (message._unknownFields !== undefined) {
            for (const [key, values] of Object.entries(message._unknownFields)) {
                const tag = parseInt(key, 10);
                for (const value of values) {
                    writer.uint32(tag);
                    writer["_push"]((val, buf, pos) => buf.set(val, pos), value.length, value);
                }
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.file.push(exports.FileDescriptorProto.decode(reader, reader.uint32()));
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
            }
            else {
                list.push(buf);
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            file: Array.isArray(object?.file) ? object.file.map((e) => exports.FileDescriptorProto.fromJSON(e)) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.file?.length) {
            obj.file = message.file.map((e) => exports.FileDescriptorProto.toJSON(e));
        }
        return obj;
    },
};
function createBaseFileDescriptorProto() {
    return {};
}
exports.FileDescriptorProto = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== undefined && message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.package !== undefined && message.package !== "") {
            writer.uint32(18).string(message.package);
        }
        if (message.dependency !== undefined && message.dependency.length !== 0) {
            for (const v of message.dependency) {
                writer.uint32(26).string(v);
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
                exports.DescriptorProto.encode(v, writer.uint32(34).fork()).ldelim();
            }
        }
        if (message.enum_type !== undefined && message.enum_type.length !== 0) {
            for (const v of message.enum_type) {
                exports.EnumDescriptorProto.encode(v, writer.uint32(42).fork()).ldelim();
            }
        }
        if (message.service !== undefined && message.service.length !== 0) {
            for (const v of message.service) {
                exports.ServiceDescriptorProto.encode(v, writer.uint32(50).fork()).ldelim();
            }
        }
        if (message.extension !== undefined && message.extension.length !== 0) {
            for (const v of message.extension) {
                exports.FieldDescriptorProto.encode(v, writer.uint32(58).fork()).ldelim();
            }
        }
        if (message.options !== undefined) {
            exports.FileOptions.encode(message.options, writer.uint32(66).fork()).ldelim();
        }
        if (message.source_code_info !== undefined) {
            exports.SourceCodeInfo.encode(message.source_code_info, writer.uint32(74).fork()).ldelim();
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
                    writer["_push"]((val, buf, pos) => buf.set(val, pos), value.length, value);
                }
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.dependency.push(reader.string());
                    continue;
                case 10:
                    if (tag === 80) {
                        if (message.public_dependency === undefined) {
                            message.public_dependency = [];
                        }
                        message.public_dependency.push(reader.int32());
                        continue;
                    }
                    if (tag === 82) {
                        if (message.public_dependency === undefined) {
                            message.public_dependency = [];
                        }
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.public_dependency.push(reader.int32());
                        }
                        continue;
                    }
                    break;
                case 11:
                    if (tag === 88) {
                        if (message.weak_dependency === undefined) {
                            message.weak_dependency = [];
                        }
                        message.weak_dependency.push(reader.int32());
                        continue;
                    }
                    if (tag === 90) {
                        if (message.weak_dependency === undefined) {
                            message.weak_dependency = [];
                        }
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.weak_dependency.push(reader.int32());
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
                    message.message_type.push(exports.DescriptorProto.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    if (message.enum_type === undefined) {
                        message.enum_type = [];
                    }
                    message.enum_type.push(exports.EnumDescriptorProto.decode(reader, reader.uint32()));
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    if (message.service === undefined) {
                        message.service = [];
                    }
                    message.service.push(exports.ServiceDescriptorProto.decode(reader, reader.uint32()));
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    if (message.extension === undefined) {
                        message.extension = [];
                    }
                    message.extension.push(exports.FieldDescriptorProto.decode(reader, reader.uint32()));
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.options = exports.FileOptions.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.source_code_info = exports.SourceCodeInfo.decode(reader, reader.uint32());
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
            }
            else {
                list.push(buf);
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            name: isSet(object.name) ? String(object.name) : undefined,
            package: isSet(object.package) ? String(object.package) : undefined,
            dependency: Array.isArray(object?.dependency) ? object.dependency.map((e) => String(e)) : undefined,
            public_dependency: Array.isArray(object?.public_dependency)
                ? object.public_dependency.map((e) => Number(e))
                : undefined,
            weak_dependency: Array.isArray(object?.weak_dependency)
                ? object.weak_dependency.map((e) => Number(e))
                : undefined,
            message_type: Array.isArray(object?.message_type)
                ? object.message_type.map((e) => exports.DescriptorProto.fromJSON(e))
                : undefined,
            enum_type: Array.isArray(object?.enum_type)
                ? object.enum_type.map((e) => exports.EnumDescriptorProto.fromJSON(e))
                : undefined,
            service: Array.isArray(object?.service)
                ? object.service.map((e) => exports.ServiceDescriptorProto.fromJSON(e))
                : undefined,
            extension: Array.isArray(object?.extension)
                ? object.extension.map((e) => exports.FieldDescriptorProto.fromJSON(e))
                : undefined,
            options: isSet(object.options) ? exports.FileOptions.fromJSON(object.options) : undefined,
            source_code_info: isSet(object.source_code_info) ? exports.SourceCodeInfo.fromJSON(object.source_code_info) : undefined,
            syntax: isSet(object.syntax) ? String(object.syntax) : undefined,
            edition: isSet(object.edition) ? String(object.edition) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
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
            obj.message_type = message.message_type.map((e) => exports.DescriptorProto.toJSON(e));
        }
        if (message.enum_type?.length) {
            obj.enum_type = message.enum_type.map((e) => exports.EnumDescriptorProto.toJSON(e));
        }
        if (message.service?.length) {
            obj.service = message.service.map((e) => exports.ServiceDescriptorProto.toJSON(e));
        }
        if (message.extension?.length) {
            obj.extension = message.extension.map((e) => exports.FieldDescriptorProto.toJSON(e));
        }
        if (message.options !== undefined) {
            obj.options = exports.FileOptions.toJSON(message.options);
        }
        if (message.source_code_info !== undefined) {
            obj.source_code_info = exports.SourceCodeInfo.toJSON(message.source_code_info);
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
function createBaseDescriptorProto() {
    return {};
}
exports.DescriptorProto = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== undefined && message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.field !== undefined && message.field.length !== 0) {
            for (const v of message.field) {
                exports.FieldDescriptorProto.encode(v, writer.uint32(18).fork()).ldelim();
            }
        }
        if (message.extension !== undefined && message.extension.length !== 0) {
            for (const v of message.extension) {
                exports.FieldDescriptorProto.encode(v, writer.uint32(50).fork()).ldelim();
            }
        }
        if (message.nested_type !== undefined && message.nested_type.length !== 0) {
            for (const v of message.nested_type) {
                exports.DescriptorProto.encode(v, writer.uint32(26).fork()).ldelim();
            }
        }
        if (message.enum_type !== undefined && message.enum_type.length !== 0) {
            for (const v of message.enum_type) {
                exports.EnumDescriptorProto.encode(v, writer.uint32(34).fork()).ldelim();
            }
        }
        if (message.extension_range !== undefined && message.extension_range.length !== 0) {
            for (const v of message.extension_range) {
                exports.DescriptorProto_ExtensionRange.encode(v, writer.uint32(42).fork()).ldelim();
            }
        }
        if (message.oneof_decl !== undefined && message.oneof_decl.length !== 0) {
            for (const v of message.oneof_decl) {
                exports.OneofDescriptorProto.encode(v, writer.uint32(66).fork()).ldelim();
            }
        }
        if (message.options !== undefined) {
            exports.MessageOptions.encode(message.options, writer.uint32(58).fork()).ldelim();
        }
        if (message.reserved_range !== undefined && message.reserved_range.length !== 0) {
            for (const v of message.reserved_range) {
                exports.DescriptorProto_ReservedRange.encode(v, writer.uint32(74).fork()).ldelim();
            }
        }
        if (message.reserved_name !== undefined && message.reserved_name.length !== 0) {
            for (const v of message.reserved_name) {
                writer.uint32(82).string(v);
            }
        }
        if (message._unknownFields !== undefined) {
            for (const [key, values] of Object.entries(message._unknownFields)) {
                const tag = parseInt(key, 10);
                for (const value of values) {
                    writer.uint32(tag);
                    writer["_push"]((val, buf, pos) => buf.set(val, pos), value.length, value);
                }
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.field.push(exports.FieldDescriptorProto.decode(reader, reader.uint32()));
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    if (message.extension === undefined) {
                        message.extension = [];
                    }
                    message.extension.push(exports.FieldDescriptorProto.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    if (message.nested_type === undefined) {
                        message.nested_type = [];
                    }
                    message.nested_type.push(exports.DescriptorProto.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    if (message.enum_type === undefined) {
                        message.enum_type = [];
                    }
                    message.enum_type.push(exports.EnumDescriptorProto.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    if (message.extension_range === undefined) {
                        message.extension_range = [];
                    }
                    message.extension_range.push(exports.DescriptorProto_ExtensionRange.decode(reader, reader.uint32()));
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    if (message.oneof_decl === undefined) {
                        message.oneof_decl = [];
                    }
                    message.oneof_decl.push(exports.OneofDescriptorProto.decode(reader, reader.uint32()));
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.options = exports.MessageOptions.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    if (message.reserved_range === undefined) {
                        message.reserved_range = [];
                    }
                    message.reserved_range.push(exports.DescriptorProto_ReservedRange.decode(reader, reader.uint32()));
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    if (message.reserved_name === undefined) {
                        message.reserved_name = [];
                    }
                    message.reserved_name.push(reader.string());
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
            }
            else {
                list.push(buf);
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            name: isSet(object.name) ? String(object.name) : undefined,
            field: Array.isArray(object?.field) ? object.field.map((e) => exports.FieldDescriptorProto.fromJSON(e)) : undefined,
            extension: Array.isArray(object?.extension)
                ? object.extension.map((e) => exports.FieldDescriptorProto.fromJSON(e))
                : undefined,
            nested_type: Array.isArray(object?.nested_type)
                ? object.nested_type.map((e) => exports.DescriptorProto.fromJSON(e))
                : undefined,
            enum_type: Array.isArray(object?.enum_type)
                ? object.enum_type.map((e) => exports.EnumDescriptorProto.fromJSON(e))
                : undefined,
            extension_range: Array.isArray(object?.extension_range)
                ? object.extension_range.map((e) => exports.DescriptorProto_ExtensionRange.fromJSON(e))
                : undefined,
            oneof_decl: Array.isArray(object?.oneof_decl)
                ? object.oneof_decl.map((e) => exports.OneofDescriptorProto.fromJSON(e))
                : undefined,
            options: isSet(object.options) ? exports.MessageOptions.fromJSON(object.options) : undefined,
            reserved_range: Array.isArray(object?.reserved_range)
                ? object.reserved_range.map((e) => exports.DescriptorProto_ReservedRange.fromJSON(e))
                : undefined,
            reserved_name: Array.isArray(object?.reserved_name) ? object.reserved_name.map((e) => String(e)) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== undefined && message.name !== "") {
            obj.name = message.name;
        }
        if (message.field?.length) {
            obj.field = message.field.map((e) => exports.FieldDescriptorProto.toJSON(e));
        }
        if (message.extension?.length) {
            obj.extension = message.extension.map((e) => exports.FieldDescriptorProto.toJSON(e));
        }
        if (message.nested_type?.length) {
            obj.nested_type = message.nested_type.map((e) => exports.DescriptorProto.toJSON(e));
        }
        if (message.enum_type?.length) {
            obj.enum_type = message.enum_type.map((e) => exports.EnumDescriptorProto.toJSON(e));
        }
        if (message.extension_range?.length) {
            obj.extension_range = message.extension_range.map((e) => exports.DescriptorProto_ExtensionRange.toJSON(e));
        }
        if (message.oneof_decl?.length) {
            obj.oneof_decl = message.oneof_decl.map((e) => exports.OneofDescriptorProto.toJSON(e));
        }
        if (message.options !== undefined) {
            obj.options = exports.MessageOptions.toJSON(message.options);
        }
        if (message.reserved_range?.length) {
            obj.reserved_range = message.reserved_range.map((e) => exports.DescriptorProto_ReservedRange.toJSON(e));
        }
        if (message.reserved_name?.length) {
            obj.reserved_name = message.reserved_name;
        }
        return obj;
    },
};
function createBaseDescriptorProto_ExtensionRange() {
    return {};
}
exports.DescriptorProto_ExtensionRange = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.start !== undefined && message.start !== 0) {
            writer.uint32(8).int32(message.start);
        }
        if (message.end !== undefined && message.end !== 0) {
            writer.uint32(16).int32(message.end);
        }
        if (message.options !== undefined) {
            exports.ExtensionRangeOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
        }
        if (message._unknownFields !== undefined) {
            for (const [key, values] of Object.entries(message._unknownFields)) {
                const tag = parseInt(key, 10);
                for (const value of values) {
                    writer.uint32(tag);
                    writer["_push"]((val, buf, pos) => buf.set(val, pos), value.length, value);
                }
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.options = exports.ExtensionRangeOptions.decode(reader, reader.uint32());
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
            }
            else {
                list.push(buf);
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            start: isSet(object.start) ? Number(object.start) : undefined,
            end: isSet(object.end) ? Number(object.end) : undefined,
            options: isSet(object.options) ? exports.ExtensionRangeOptions.fromJSON(object.options) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.start !== undefined && message.start !== 0) {
            obj.start = Math.round(message.start);
        }
        if (message.end !== undefined && message.end !== 0) {
            obj.end = Math.round(message.end);
        }
        if (message.options !== undefined) {
            obj.options = exports.ExtensionRangeOptions.toJSON(message.options);
        }
        return obj;
    },
};
function createBaseDescriptorProto_ReservedRange() {
    return {};
}
exports.DescriptorProto_ReservedRange = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
                    writer["_push"]((val, buf, pos) => buf.set(val, pos), value.length, value);
                }
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
            }
            else {
                list.push(buf);
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            start: isSet(object.start) ? Number(object.start) : undefined,
            end: isSet(object.end) ? Number(object.end) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.start !== undefined && message.start !== 0) {
            obj.start = Math.round(message.start);
        }
        if (message.end !== undefined && message.end !== 0) {
            obj.end = Math.round(message.end);
        }
        return obj;
    },
};
function createBaseExtensionRangeOptions() {
    return {};
}
exports.ExtensionRangeOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.uninterpreted_option !== undefined && message.uninterpreted_option.length !== 0) {
            for (const v of message.uninterpreted_option) {
                exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
            }
        }
        if (message._unknownFields !== undefined) {
            for (const [key, values] of Object.entries(message._unknownFields)) {
                const tag = parseInt(key, 10);
                for (const value of values) {
                    writer.uint32(tag);
                    writer["_push"]((val, buf, pos) => buf.set(val, pos), value.length, value);
                }
            }
        }
        return writer;
    },
    setExtension(message, extension, value) {
        const encoded = extension.encode(value);
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
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.uninterpreted_option.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
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
            }
            else {
                list.push(buf);
            }
        }
        return message;
    },
    getExtension(message, extension) {
        let results = undefined;
        if (message._unknownFields === undefined) {
            return undefined;
        }
        let list = message._unknownFields[extension.tag];
        if (list !== undefined) {
            results = extension.decode(extension.tag, list);
        }
        if (extension.singularTag === undefined) {
            return results;
        }
        list = message._unknownFields[extension.singularTag];
        if (list !== undefined) {
            const results2 = extension.decode(extension.singularTag, list);
            if (results !== undefined && results.length !== 0) {
                results = results.concat(results2);
            }
            else {
                results = results2;
            }
        }
        return results;
    },
    fromJSON(object) {
        return {
            uninterpreted_option: Array.isArray(object?.uninterpreted_option)
                ? object.uninterpreted_option.map((e) => exports.UninterpretedOption.fromJSON(e))
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.uninterpreted_option?.length) {
            obj.uninterpreted_option = message.uninterpreted_option.map((e) => exports.UninterpretedOption.toJSON(e));
        }
        return obj;
    },
};
function createBaseFieldDescriptorProto() {
    return {};
}
exports.FieldDescriptorProto = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
            exports.FieldOptions.encode(message.options, writer.uint32(66).fork()).ldelim();
        }
        if (message.proto3_optional === true) {
            writer.uint32(136).bool(message.proto3_optional);
        }
        if (message._unknownFields !== undefined) {
            for (const [key, values] of Object.entries(message._unknownFields)) {
                const tag = parseInt(key, 10);
                for (const value of values) {
                    writer.uint32(tag);
                    writer["_push"]((val, buf, pos) => buf.set(val, pos), value.length, value);
                }
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.label = reader.int32();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.type = reader.int32();
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
                    message.options = exports.FieldOptions.decode(reader, reader.uint32());
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
            }
            else {
                list.push(buf);
            }
        }
        return message;
    },
    fromJSON(object) {
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
            options: isSet(object.options) ? exports.FieldOptions.fromJSON(object.options) : undefined,
            proto3_optional: isSet(object.proto3_optional) ? Boolean(object.proto3_optional) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
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
            obj.options = exports.FieldOptions.toJSON(message.options);
        }
        if (message.proto3_optional === true) {
            obj.proto3_optional = message.proto3_optional;
        }
        return obj;
    },
};
function createBaseOneofDescriptorProto() {
    return {};
}
exports.OneofDescriptorProto = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== undefined && message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.options !== undefined) {
            exports.OneofOptions.encode(message.options, writer.uint32(18).fork()).ldelim();
        }
        if (message._unknownFields !== undefined) {
            for (const [key, values] of Object.entries(message._unknownFields)) {
                const tag = parseInt(key, 10);
                for (const value of values) {
                    writer.uint32(tag);
                    writer["_push"]((val, buf, pos) => buf.set(val, pos), value.length, value);
                }
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.options = exports.OneofOptions.decode(reader, reader.uint32());
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
            }
            else {
                list.push(buf);
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            name: isSet(object.name) ? String(object.name) : undefined,
            options: isSet(object.options) ? exports.OneofOptions.fromJSON(object.options) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== undefined && message.name !== "") {
            obj.name = message.name;
        }
        if (message.options !== undefined) {
            obj.options = exports.OneofOptions.toJSON(message.options);
        }
        return obj;
    },
};
function createBaseEnumDescriptorProto() {
    return {};
}
exports.EnumDescriptorProto = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== undefined && message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.value !== undefined && message.value.length !== 0) {
            for (const v of message.value) {
                exports.EnumValueDescriptorProto.encode(v, writer.uint32(18).fork()).ldelim();
            }
        }
        if (message.options !== undefined) {
            exports.EnumOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
        }
        if (message.reserved_range !== undefined && message.reserved_range.length !== 0) {
            for (const v of message.reserved_range) {
                exports.EnumDescriptorProto_EnumReservedRange.encode(v, writer.uint32(34).fork()).ldelim();
            }
        }
        if (message.reserved_name !== undefined && message.reserved_name.length !== 0) {
            for (const v of message.reserved_name) {
                writer.uint32(42).string(v);
            }
        }
        if (message._unknownFields !== undefined) {
            for (const [key, values] of Object.entries(message._unknownFields)) {
                const tag = parseInt(key, 10);
                for (const value of values) {
                    writer.uint32(tag);
                    writer["_push"]((val, buf, pos) => buf.set(val, pos), value.length, value);
                }
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.value.push(exports.EnumValueDescriptorProto.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.options = exports.EnumOptions.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    if (message.reserved_range === undefined) {
                        message.reserved_range = [];
                    }
                    message.reserved_range.push(exports.EnumDescriptorProto_EnumReservedRange.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    if (message.reserved_name === undefined) {
                        message.reserved_name = [];
                    }
                    message.reserved_name.push(reader.string());
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
            }
            else {
                list.push(buf);
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            name: isSet(object.name) ? String(object.name) : undefined,
            value: Array.isArray(object?.value)
                ? object.value.map((e) => exports.EnumValueDescriptorProto.fromJSON(e))
                : undefined,
            options: isSet(object.options) ? exports.EnumOptions.fromJSON(object.options) : undefined,
            reserved_range: Array.isArray(object?.reserved_range)
                ? object.reserved_range.map((e) => exports.EnumDescriptorProto_EnumReservedRange.fromJSON(e))
                : undefined,
            reserved_name: Array.isArray(object?.reserved_name) ? object.reserved_name.map((e) => String(e)) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== undefined && message.name !== "") {
            obj.name = message.name;
        }
        if (message.value?.length) {
            obj.value = message.value.map((e) => exports.EnumValueDescriptorProto.toJSON(e));
        }
        if (message.options !== undefined) {
            obj.options = exports.EnumOptions.toJSON(message.options);
        }
        if (message.reserved_range?.length) {
            obj.reserved_range = message.reserved_range.map((e) => exports.EnumDescriptorProto_EnumReservedRange.toJSON(e));
        }
        if (message.reserved_name?.length) {
            obj.reserved_name = message.reserved_name;
        }
        return obj;
    },
};
function createBaseEnumDescriptorProto_EnumReservedRange() {
    return {};
}
exports.EnumDescriptorProto_EnumReservedRange = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
                    writer["_push"]((val, buf, pos) => buf.set(val, pos), value.length, value);
                }
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
            }
            else {
                list.push(buf);
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            start: isSet(object.start) ? Number(object.start) : undefined,
            end: isSet(object.end) ? Number(object.end) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.start !== undefined && message.start !== 0) {
            obj.start = Math.round(message.start);
        }
        if (message.end !== undefined && message.end !== 0) {
            obj.end = Math.round(message.end);
        }
        return obj;
    },
};
function createBaseEnumValueDescriptorProto() {
    return {};
}
exports.EnumValueDescriptorProto = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== undefined && message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.number !== undefined && message.number !== 0) {
            writer.uint32(16).int32(message.number);
        }
        if (message.options !== undefined) {
            exports.EnumValueOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
        }
        if (message._unknownFields !== undefined) {
            for (const [key, values] of Object.entries(message._unknownFields)) {
                const tag = parseInt(key, 10);
                for (const value of values) {
                    writer.uint32(tag);
                    writer["_push"]((val, buf, pos) => buf.set(val, pos), value.length, value);
                }
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.options = exports.EnumValueOptions.decode(reader, reader.uint32());
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
            }
            else {
                list.push(buf);
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            name: isSet(object.name) ? String(object.name) : undefined,
            number: isSet(object.number) ? Number(object.number) : undefined,
            options: isSet(object.options) ? exports.EnumValueOptions.fromJSON(object.options) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== undefined && message.name !== "") {
            obj.name = message.name;
        }
        if (message.number !== undefined && message.number !== 0) {
            obj.number = Math.round(message.number);
        }
        if (message.options !== undefined) {
            obj.options = exports.EnumValueOptions.toJSON(message.options);
        }
        return obj;
    },
};
function createBaseServiceDescriptorProto() {
    return {};
}
exports.ServiceDescriptorProto = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== undefined && message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.method !== undefined && message.method.length !== 0) {
            for (const v of message.method) {
                exports.MethodDescriptorProto.encode(v, writer.uint32(18).fork()).ldelim();
            }
        }
        if (message.options !== undefined) {
            exports.ServiceOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
        }
        if (message._unknownFields !== undefined) {
            for (const [key, values] of Object.entries(message._unknownFields)) {
                const tag = parseInt(key, 10);
                for (const value of values) {
                    writer.uint32(tag);
                    writer["_push"]((val, buf, pos) => buf.set(val, pos), value.length, value);
                }
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.method.push(exports.MethodDescriptorProto.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.options = exports.ServiceOptions.decode(reader, reader.uint32());
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
            }
            else {
                list.push(buf);
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            name: isSet(object.name) ? String(object.name) : undefined,
            method: Array.isArray(object?.method)
                ? object.method.map((e) => exports.MethodDescriptorProto.fromJSON(e))
                : undefined,
            options: isSet(object.options) ? exports.ServiceOptions.fromJSON(object.options) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== undefined && message.name !== "") {
            obj.name = message.name;
        }
        if (message.method?.length) {
            obj.method = message.method.map((e) => exports.MethodDescriptorProto.toJSON(e));
        }
        if (message.options !== undefined) {
            obj.options = exports.ServiceOptions.toJSON(message.options);
        }
        return obj;
    },
};
function createBaseMethodDescriptorProto() {
    return {};
}
exports.MethodDescriptorProto = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
            exports.MethodOptions.encode(message.options, writer.uint32(34).fork()).ldelim();
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
                    writer["_push"]((val, buf, pos) => buf.set(val, pos), value.length, value);
                }
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.options = exports.MethodOptions.decode(reader, reader.uint32());
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
            }
            else {
                list.push(buf);
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            name: isSet(object.name) ? String(object.name) : undefined,
            input_type: isSet(object.input_type) ? String(object.input_type) : undefined,
            output_type: isSet(object.output_type) ? String(object.output_type) : undefined,
            options: isSet(object.options) ? exports.MethodOptions.fromJSON(object.options) : undefined,
            client_streaming: isSet(object.client_streaming) ? Boolean(object.client_streaming) : undefined,
            server_streaming: isSet(object.server_streaming) ? Boolean(object.server_streaming) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
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
            obj.options = exports.MethodOptions.toJSON(message.options);
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
function createBaseFileOptions() {
    return {};
}
exports.FileOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
                exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
            }
        }
        if (message._unknownFields !== undefined) {
            for (const [key, values] of Object.entries(message._unknownFields)) {
                const tag = parseInt(key, 10);
                for (const value of values) {
                    writer.uint32(tag);
                    writer["_push"]((val, buf, pos) => buf.set(val, pos), value.length, value);
                }
            }
        }
        return writer;
    },
    setExtension(message, extension, value) {
        const encoded = extension.encode(value);
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
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.optimize_for = reader.int32();
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
                    message.uninterpreted_option.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
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
            }
            else {
                list.push(buf);
            }
        }
        return message;
    },
    getExtension(message, extension) {
        let results = undefined;
        if (message._unknownFields === undefined) {
            return undefined;
        }
        let list = message._unknownFields[extension.tag];
        if (list !== undefined) {
            results = extension.decode(extension.tag, list);
        }
        if (extension.singularTag === undefined) {
            return results;
        }
        list = message._unknownFields[extension.singularTag];
        if (list !== undefined) {
            const results2 = extension.decode(extension.singularTag, list);
            if (results !== undefined && results.length !== 0) {
                results = results.concat(results2);
            }
            else {
                results = results2;
            }
        }
        return results;
    },
    fromJSON(object) {
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
                ? object.uninterpreted_option.map((e) => exports.UninterpretedOption.fromJSON(e))
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
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
            obj.uninterpreted_option = message.uninterpreted_option.map((e) => exports.UninterpretedOption.toJSON(e));
        }
        return obj;
    },
};
function createBaseMessageOptions() {
    return {};
}
exports.MessageOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
                exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
            }
        }
        if (message._unknownFields !== undefined) {
            for (const [key, values] of Object.entries(message._unknownFields)) {
                const tag = parseInt(key, 10);
                for (const value of values) {
                    writer.uint32(tag);
                    writer["_push"]((val, buf, pos) => buf.set(val, pos), value.length, value);
                }
            }
        }
        return writer;
    },
    setExtension(message, extension, value) {
        const encoded = extension.encode(value);
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
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.uninterpreted_option.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
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
            }
            else {
                list.push(buf);
            }
        }
        return message;
    },
    getExtension(message, extension) {
        let results = undefined;
        if (message._unknownFields === undefined) {
            return undefined;
        }
        let list = message._unknownFields[extension.tag];
        if (list !== undefined) {
            results = extension.decode(extension.tag, list);
        }
        if (extension.singularTag === undefined) {
            return results;
        }
        list = message._unknownFields[extension.singularTag];
        if (list !== undefined) {
            const results2 = extension.decode(extension.singularTag, list);
            if (results !== undefined && results.length !== 0) {
                results = results.concat(results2);
            }
            else {
                results = results2;
            }
        }
        return results;
    },
    fromJSON(object) {
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
                ? object.uninterpreted_option.map((e) => exports.UninterpretedOption.fromJSON(e))
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
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
            obj.uninterpreted_option = message.uninterpreted_option.map((e) => exports.UninterpretedOption.toJSON(e));
        }
        return obj;
    },
};
function createBaseFieldOptions() {
    return {};
}
exports.FieldOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
                exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
            }
        }
        if (message._unknownFields !== undefined) {
            for (const [key, values] of Object.entries(message._unknownFields)) {
                const tag = parseInt(key, 10);
                for (const value of values) {
                    writer.uint32(tag);
                    writer["_push"]((val, buf, pos) => buf.set(val, pos), value.length, value);
                }
            }
        }
        return writer;
    },
    setExtension(message, extension, value) {
        const encoded = extension.encode(value);
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
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFieldOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.ctype = reader.int32();
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
                    message.jstype = reader.int32();
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
                    message.retention = reader.int32();
                    continue;
                case 18:
                    if (tag !== 144) {
                        break;
                    }
                    message.target = reader.int32();
                    continue;
                case 999:
                    if (tag !== 7994) {
                        break;
                    }
                    if (message.uninterpreted_option === undefined) {
                        message.uninterpreted_option = [];
                    }
                    message.uninterpreted_option.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
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
            }
            else {
                list.push(buf);
            }
        }
        return message;
    },
    getExtension(message, extension) {
        let results = undefined;
        if (message._unknownFields === undefined) {
            return undefined;
        }
        let list = message._unknownFields[extension.tag];
        if (list !== undefined) {
            results = extension.decode(extension.tag, list);
        }
        if (extension.singularTag === undefined) {
            return results;
        }
        list = message._unknownFields[extension.singularTag];
        if (list !== undefined) {
            const results2 = extension.decode(extension.singularTag, list);
            if (results !== undefined && results.length !== 0) {
                results = results.concat(results2);
            }
            else {
                results = results2;
            }
        }
        return results;
    },
    fromJSON(object) {
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
                ? object.uninterpreted_option.map((e) => exports.UninterpretedOption.fromJSON(e))
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
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
            obj.uninterpreted_option = message.uninterpreted_option.map((e) => exports.UninterpretedOption.toJSON(e));
        }
        return obj;
    },
};
function createBaseOneofOptions() {
    return {};
}
exports.OneofOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.uninterpreted_option !== undefined && message.uninterpreted_option.length !== 0) {
            for (const v of message.uninterpreted_option) {
                exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
            }
        }
        if (message._unknownFields !== undefined) {
            for (const [key, values] of Object.entries(message._unknownFields)) {
                const tag = parseInt(key, 10);
                for (const value of values) {
                    writer.uint32(tag);
                    writer["_push"]((val, buf, pos) => buf.set(val, pos), value.length, value);
                }
            }
        }
        return writer;
    },
    setExtension(message, extension, value) {
        const encoded = extension.encode(value);
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
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.uninterpreted_option.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
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
            }
            else {
                list.push(buf);
            }
        }
        return message;
    },
    getExtension(message, extension) {
        let results = undefined;
        if (message._unknownFields === undefined) {
            return undefined;
        }
        let list = message._unknownFields[extension.tag];
        if (list !== undefined) {
            results = extension.decode(extension.tag, list);
        }
        if (extension.singularTag === undefined) {
            return results;
        }
        list = message._unknownFields[extension.singularTag];
        if (list !== undefined) {
            const results2 = extension.decode(extension.singularTag, list);
            if (results !== undefined && results.length !== 0) {
                results = results.concat(results2);
            }
            else {
                results = results2;
            }
        }
        return results;
    },
    fromJSON(object) {
        return {
            uninterpreted_option: Array.isArray(object?.uninterpreted_option)
                ? object.uninterpreted_option.map((e) => exports.UninterpretedOption.fromJSON(e))
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.uninterpreted_option?.length) {
            obj.uninterpreted_option = message.uninterpreted_option.map((e) => exports.UninterpretedOption.toJSON(e));
        }
        return obj;
    },
};
function createBaseEnumOptions() {
    return {};
}
exports.EnumOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
                exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
            }
        }
        if (message._unknownFields !== undefined) {
            for (const [key, values] of Object.entries(message._unknownFields)) {
                const tag = parseInt(key, 10);
                for (const value of values) {
                    writer.uint32(tag);
                    writer["_push"]((val, buf, pos) => buf.set(val, pos), value.length, value);
                }
            }
        }
        return writer;
    },
    setExtension(message, extension, value) {
        const encoded = extension.encode(value);
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
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.uninterpreted_option.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
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
            }
            else {
                list.push(buf);
            }
        }
        return message;
    },
    getExtension(message, extension) {
        let results = undefined;
        if (message._unknownFields === undefined) {
            return undefined;
        }
        let list = message._unknownFields[extension.tag];
        if (list !== undefined) {
            results = extension.decode(extension.tag, list);
        }
        if (extension.singularTag === undefined) {
            return results;
        }
        list = message._unknownFields[extension.singularTag];
        if (list !== undefined) {
            const results2 = extension.decode(extension.singularTag, list);
            if (results !== undefined && results.length !== 0) {
                results = results.concat(results2);
            }
            else {
                results = results2;
            }
        }
        return results;
    },
    fromJSON(object) {
        return {
            allow_alias: isSet(object.allow_alias) ? Boolean(object.allow_alias) : undefined,
            deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : undefined,
            deprecated_legacy_json_field_conflicts: isSet(object.deprecated_legacy_json_field_conflicts)
                ? Boolean(object.deprecated_legacy_json_field_conflicts)
                : undefined,
            uninterpreted_option: Array.isArray(object?.uninterpreted_option)
                ? object.uninterpreted_option.map((e) => exports.UninterpretedOption.fromJSON(e))
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
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
            obj.uninterpreted_option = message.uninterpreted_option.map((e) => exports.UninterpretedOption.toJSON(e));
        }
        return obj;
    },
};
function createBaseEnumValueOptions() {
    return {};
}
exports.EnumValueOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deprecated === true) {
            writer.uint32(8).bool(message.deprecated);
        }
        if (message.uninterpreted_option !== undefined && message.uninterpreted_option.length !== 0) {
            for (const v of message.uninterpreted_option) {
                exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
            }
        }
        if (message._unknownFields !== undefined) {
            for (const [key, values] of Object.entries(message._unknownFields)) {
                const tag = parseInt(key, 10);
                for (const value of values) {
                    writer.uint32(tag);
                    writer["_push"]((val, buf, pos) => buf.set(val, pos), value.length, value);
                }
            }
        }
        return writer;
    },
    setExtension(message, extension, value) {
        const encoded = extension.encode(value);
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
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.uninterpreted_option.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
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
            }
            else {
                list.push(buf);
            }
        }
        return message;
    },
    getExtension(message, extension) {
        let results = undefined;
        if (message._unknownFields === undefined) {
            return undefined;
        }
        let list = message._unknownFields[extension.tag];
        if (list !== undefined) {
            results = extension.decode(extension.tag, list);
        }
        if (extension.singularTag === undefined) {
            return results;
        }
        list = message._unknownFields[extension.singularTag];
        if (list !== undefined) {
            const results2 = extension.decode(extension.singularTag, list);
            if (results !== undefined && results.length !== 0) {
                results = results.concat(results2);
            }
            else {
                results = results2;
            }
        }
        return results;
    },
    fromJSON(object) {
        return {
            deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : undefined,
            uninterpreted_option: Array.isArray(object?.uninterpreted_option)
                ? object.uninterpreted_option.map((e) => exports.UninterpretedOption.fromJSON(e))
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.deprecated === true) {
            obj.deprecated = message.deprecated;
        }
        if (message.uninterpreted_option?.length) {
            obj.uninterpreted_option = message.uninterpreted_option.map((e) => exports.UninterpretedOption.toJSON(e));
        }
        return obj;
    },
};
function createBaseServiceOptions() {
    return {};
}
exports.ServiceOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deprecated === true) {
            writer.uint32(264).bool(message.deprecated);
        }
        if (message.uninterpreted_option !== undefined && message.uninterpreted_option.length !== 0) {
            for (const v of message.uninterpreted_option) {
                exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
            }
        }
        if (message._unknownFields !== undefined) {
            for (const [key, values] of Object.entries(message._unknownFields)) {
                const tag = parseInt(key, 10);
                for (const value of values) {
                    writer.uint32(tag);
                    writer["_push"]((val, buf, pos) => buf.set(val, pos), value.length, value);
                }
            }
        }
        return writer;
    },
    setExtension(message, extension, value) {
        const encoded = extension.encode(value);
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
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.uninterpreted_option.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
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
            }
            else {
                list.push(buf);
            }
        }
        return message;
    },
    getExtension(message, extension) {
        let results = undefined;
        if (message._unknownFields === undefined) {
            return undefined;
        }
        let list = message._unknownFields[extension.tag];
        if (list !== undefined) {
            results = extension.decode(extension.tag, list);
        }
        if (extension.singularTag === undefined) {
            return results;
        }
        list = message._unknownFields[extension.singularTag];
        if (list !== undefined) {
            const results2 = extension.decode(extension.singularTag, list);
            if (results !== undefined && results.length !== 0) {
                results = results.concat(results2);
            }
            else {
                results = results2;
            }
        }
        return results;
    },
    fromJSON(object) {
        return {
            deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : undefined,
            uninterpreted_option: Array.isArray(object?.uninterpreted_option)
                ? object.uninterpreted_option.map((e) => exports.UninterpretedOption.fromJSON(e))
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.deprecated === true) {
            obj.deprecated = message.deprecated;
        }
        if (message.uninterpreted_option?.length) {
            obj.uninterpreted_option = message.uninterpreted_option.map((e) => exports.UninterpretedOption.toJSON(e));
        }
        return obj;
    },
};
function createBaseMethodOptions() {
    return {};
}
exports.MethodOptions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deprecated === true) {
            writer.uint32(264).bool(message.deprecated);
        }
        if (message.idempotency_level !== undefined && message.idempotency_level !== 0) {
            writer.uint32(272).int32(message.idempotency_level);
        }
        if (message.uninterpreted_option !== undefined && message.uninterpreted_option.length !== 0) {
            for (const v of message.uninterpreted_option) {
                exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
            }
        }
        if (message._unknownFields !== undefined) {
            for (const [key, values] of Object.entries(message._unknownFields)) {
                const tag = parseInt(key, 10);
                for (const value of values) {
                    writer.uint32(tag);
                    writer["_push"]((val, buf, pos) => buf.set(val, pos), value.length, value);
                }
            }
        }
        return writer;
    },
    setExtension(message, extension, value) {
        const encoded = extension.encode(value);
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
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.idempotency_level = reader.int32();
                    continue;
                case 999:
                    if (tag !== 7994) {
                        break;
                    }
                    if (message.uninterpreted_option === undefined) {
                        message.uninterpreted_option = [];
                    }
                    message.uninterpreted_option.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
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
            }
            else {
                list.push(buf);
            }
        }
        return message;
    },
    getExtension(message, extension) {
        let results = undefined;
        if (message._unknownFields === undefined) {
            return undefined;
        }
        let list = message._unknownFields[extension.tag];
        if (list !== undefined) {
            results = extension.decode(extension.tag, list);
        }
        if (extension.singularTag === undefined) {
            return results;
        }
        list = message._unknownFields[extension.singularTag];
        if (list !== undefined) {
            const results2 = extension.decode(extension.singularTag, list);
            if (results !== undefined && results.length !== 0) {
                results = results.concat(results2);
            }
            else {
                results = results2;
            }
        }
        return results;
    },
    fromJSON(object) {
        return {
            deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : undefined,
            idempotency_level: isSet(object.idempotency_level)
                ? methodOptions_IdempotencyLevelFromJSON(object.idempotency_level)
                : undefined,
            uninterpreted_option: Array.isArray(object?.uninterpreted_option)
                ? object.uninterpreted_option.map((e) => exports.UninterpretedOption.fromJSON(e))
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.deprecated === true) {
            obj.deprecated = message.deprecated;
        }
        if (message.idempotency_level !== undefined && message.idempotency_level !== 0) {
            obj.idempotency_level = methodOptions_IdempotencyLevelToJSON(message.idempotency_level);
        }
        if (message.uninterpreted_option?.length) {
            obj.uninterpreted_option = message.uninterpreted_option.map((e) => exports.UninterpretedOption.toJSON(e));
        }
        return obj;
    },
};
function createBaseUninterpretedOption() {
    return {};
}
exports.UninterpretedOption = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== undefined && message.name.length !== 0) {
            for (const v of message.name) {
                exports.UninterpretedOption_NamePart.encode(v, writer.uint32(18).fork()).ldelim();
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
                    writer["_push"]((val, buf, pos) => buf.set(val, pos), value.length, value);
                }
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.name.push(exports.UninterpretedOption_NamePart.decode(reader, reader.uint32()));
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
                    message.positive_int_value = longToBigint(reader.uint64());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.negative_int_value = longToBigint(reader.int64());
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
                    message.string_value = reader.bytes();
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
            }
            else {
                list.push(buf);
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            name: Array.isArray(object?.name)
                ? object.name.map((e) => exports.UninterpretedOption_NamePart.fromJSON(e))
                : undefined,
            identifier_value: isSet(object.identifier_value) ? String(object.identifier_value) : undefined,
            positive_int_value: isSet(object.positive_int_value) ? BigInt(object.positive_int_value) : undefined,
            negative_int_value: isSet(object.negative_int_value) ? BigInt(object.negative_int_value) : undefined,
            double_value: isSet(object.double_value) ? Number(object.double_value) : undefined,
            string_value: isSet(object.string_value) ? Buffer.from(bytesFromBase64(object.string_value)) : undefined,
            aggregate_value: isSet(object.aggregate_value) ? String(object.aggregate_value) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name?.length) {
            obj.name = message.name.map((e) => exports.UninterpretedOption_NamePart.toJSON(e));
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
function createBaseUninterpretedOption_NamePart() {
    return {};
}
exports.UninterpretedOption_NamePart = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
                    writer["_push"]((val, buf, pos) => buf.set(val, pos), value.length, value);
                }
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
            }
            else {
                list.push(buf);
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            name_part: isSet(object.name_part) ? String(object.name_part) : undefined,
            is_extension: isSet(object.is_extension) ? Boolean(object.is_extension) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name_part !== undefined && message.name_part !== "") {
            obj.name_part = message.name_part;
        }
        if (message.is_extension === true) {
            obj.is_extension = message.is_extension;
        }
        return obj;
    },
};
function createBaseSourceCodeInfo() {
    return {};
}
exports.SourceCodeInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.location !== undefined && message.location.length !== 0) {
            for (const v of message.location) {
                exports.SourceCodeInfo_Location.encode(v, writer.uint32(10).fork()).ldelim();
            }
        }
        if (message._unknownFields !== undefined) {
            for (const [key, values] of Object.entries(message._unknownFields)) {
                const tag = parseInt(key, 10);
                for (const value of values) {
                    writer.uint32(tag);
                    writer["_push"]((val, buf, pos) => buf.set(val, pos), value.length, value);
                }
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.location.push(exports.SourceCodeInfo_Location.decode(reader, reader.uint32()));
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
            }
            else {
                list.push(buf);
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            location: Array.isArray(object?.location)
                ? object.location.map((e) => exports.SourceCodeInfo_Location.fromJSON(e))
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.location?.length) {
            obj.location = message.location.map((e) => exports.SourceCodeInfo_Location.toJSON(e));
        }
        return obj;
    },
};
function createBaseSourceCodeInfo_Location() {
    return {};
}
exports.SourceCodeInfo_Location = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
                writer.uint32(50).string(v);
            }
        }
        if (message._unknownFields !== undefined) {
            for (const [key, values] of Object.entries(message._unknownFields)) {
                const tag = parseInt(key, 10);
                for (const value of values) {
                    writer.uint32(tag);
                    writer["_push"]((val, buf, pos) => buf.set(val, pos), value.length, value);
                }
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                        message.path.push(reader.int32());
                        continue;
                    }
                    if (tag === 10) {
                        if (message.path === undefined) {
                            message.path = [];
                        }
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.path.push(reader.int32());
                        }
                        continue;
                    }
                    break;
                case 2:
                    if (tag === 16) {
                        if (message.span === undefined) {
                            message.span = [];
                        }
                        message.span.push(reader.int32());
                        continue;
                    }
                    if (tag === 18) {
                        if (message.span === undefined) {
                            message.span = [];
                        }
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.span.push(reader.int32());
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
                    message.leading_detached_comments.push(reader.string());
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
            }
            else {
                list.push(buf);
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            path: Array.isArray(object?.path) ? object.path.map((e) => Number(e)) : undefined,
            span: Array.isArray(object?.span) ? object.span.map((e) => Number(e)) : undefined,
            leading_comments: isSet(object.leading_comments) ? String(object.leading_comments) : undefined,
            trailing_comments: isSet(object.trailing_comments) ? String(object.trailing_comments) : undefined,
            leading_detached_comments: Array.isArray(object?.leading_detached_comments)
                ? object.leading_detached_comments.map((e) => String(e))
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
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
function createBaseGeneratedCodeInfo() {
    return {};
}
exports.GeneratedCodeInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.annotation !== undefined && message.annotation.length !== 0) {
            for (const v of message.annotation) {
                exports.GeneratedCodeInfo_Annotation.encode(v, writer.uint32(10).fork()).ldelim();
            }
        }
        if (message._unknownFields !== undefined) {
            for (const [key, values] of Object.entries(message._unknownFields)) {
                const tag = parseInt(key, 10);
                for (const value of values) {
                    writer.uint32(tag);
                    writer["_push"]((val, buf, pos) => buf.set(val, pos), value.length, value);
                }
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.annotation.push(exports.GeneratedCodeInfo_Annotation.decode(reader, reader.uint32()));
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
            }
            else {
                list.push(buf);
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            annotation: Array.isArray(object?.annotation)
                ? object.annotation.map((e) => exports.GeneratedCodeInfo_Annotation.fromJSON(e))
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.annotation?.length) {
            obj.annotation = message.annotation.map((e) => exports.GeneratedCodeInfo_Annotation.toJSON(e));
        }
        return obj;
    },
};
function createBaseGeneratedCodeInfo_Annotation() {
    return {};
}
exports.GeneratedCodeInfo_Annotation = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
                    writer["_push"]((val, buf, pos) => buf.set(val, pos), value.length, value);
                }
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                        message.path.push(reader.int32());
                        continue;
                    }
                    if (tag === 10) {
                        if (message.path === undefined) {
                            message.path = [];
                        }
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.path.push(reader.int32());
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
                    message.semantic = reader.int32();
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
            }
            else {
                list.push(buf);
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            path: Array.isArray(object?.path) ? object.path.map((e) => Number(e)) : undefined,
            source_file: isSet(object.source_file) ? String(object.source_file) : undefined,
            begin: isSet(object.begin) ? Number(object.begin) : undefined,
            end: isSet(object.end) ? Number(object.end) : undefined,
            semantic: isSet(object.semantic) ? generatedCodeInfo_Annotation_SemanticFromJSON(object.semantic) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
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
const tsProtoGlobalThis = (() => {
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
function bytesFromBase64(b64) {
    if (tsProtoGlobalThis.Buffer) {
        return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
    }
    else {
        const bin = tsProtoGlobalThis.atob(b64);
        const arr = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; ++i) {
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}
function base64FromBytes(arr) {
    if (tsProtoGlobalThis.Buffer) {
        return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
    }
    else {
        const bin = [];
        arr.forEach((byte) => {
            bin.push(String.fromCharCode(byte));
        });
        return tsProtoGlobalThis.btoa(bin.join(""));
    }
}
function longToBigint(long) {
    return BigInt(long.toString());
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
