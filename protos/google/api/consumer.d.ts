import _m0 from "protobufjs/minimal";
/**
 * A descriptor for defining project properties for a service. One service may
 * have many consumer projects, and the service may want to behave differently
 * depending on some properties on the project. For example, a project may be
 * associated with a school, or a business, or a government agency, a business
 * type property on the project may affect how a service responds to the client.
 * This descriptor defines which properties are allowed to be set on a project.
 *
 * Example:
 *
 *    project_properties:
 *      properties:
 *      - name: NO_WATERMARK
 *        type: BOOL
 *        description: Allows usage of the API without watermarks.
 *      - name: EXTENDED_TILE_CACHE_PERIOD
 *        type: INT64
 */
export interface ProjectProperties {
    /** List of per consumer project-specific properties. */
    properties?: Property[] | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
/**
 * Defines project properties.
 *
 * API services can define properties that can be assigned to consumer projects
 * so that backends can perform response customization without having to make
 * additional calls or maintain additional storage. For example, Maps API
 * defines properties that controls map tile cache period, or whether to embed a
 * watermark in a result.
 *
 * These values can be set via API producer console. Only API providers can
 * define and set these properties.
 */
export interface Property {
    /** The name of the property (a.k.a key). */
    name?: string | undefined;
    /** The type of this property. */
    type?: Property_PropertyType | undefined;
    /** The description of the property */
    description?: string | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
/** Supported data type of the property values */
export declare enum Property_PropertyType {
    /** UNSPECIFIED - The type is unspecified, and will result in an error. */
    UNSPECIFIED = "UNSPECIFIED",
    /** INT64 - The type is `int64`. */
    INT64 = "INT64",
    /** BOOL - The type is `bool`. */
    BOOL = "BOOL",
    /** STRING - The type is `string`. */
    STRING = "STRING",
    /** DOUBLE - The type is 'double'. */
    DOUBLE = "DOUBLE",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function property_PropertyTypeFromJSON(object: any): Property_PropertyType;
export declare function property_PropertyTypeToJSON(object: Property_PropertyType): string;
export declare function property_PropertyTypeToNumber(object: Property_PropertyType): number;
export declare const ProjectProperties: {
    encode(message: ProjectProperties, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProjectProperties;
    fromJSON(object: any): ProjectProperties;
    toJSON(message: ProjectProperties): unknown;
};
export declare const Property: {
    encode(message: Property, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Property;
    fromJSON(object: any): Property;
    toJSON(message: Property): unknown;
};
