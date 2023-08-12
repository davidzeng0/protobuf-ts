import _m0 from "protobufjs/minimal";
/**
 * `Visibility` restricts service consumer's access to service elements,
 * such as whether an application can call a visibility-restricted method.
 * The restriction is expressed by applying visibility labels on service
 * elements. The visibility labels are elsewhere linked to service consumers.
 *
 * A service can define multiple visibility labels, but a service consumer
 * should be granted at most one visibility label. Multiple visibility
 * labels for a single service consumer are not supported.
 *
 * If an element and all its parents have no visibility label, its visibility
 * is unconditionally granted.
 *
 * Example:
 *
 *     visibility:
 *       rules:
 *       - selector: google.calendar.Calendar.EnhancedSearch
 *         restriction: PREVIEW
 *       - selector: google.calendar.Calendar.Delegate
 *         restriction: INTERNAL
 *
 * Here, all methods are publicly visible except for the restricted methods
 * EnhancedSearch and Delegate.
 */
export interface Visibility {
    /**
     * A list of visibility rules that apply to individual API elements.
     *
     * **NOTE:** All service configuration rules follow "last one wins" order.
     */
    rules?: VisibilityRule[] | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
/**
 * A visibility rule provides visibility configuration for an individual API
 * element.
 */
export interface VisibilityRule {
    /**
     * Selects methods, messages, fields, enums, etc. to which this rule applies.
     *
     * Refer to [selector][google.api.DocumentationRule.selector] for syntax
     * details.
     */
    selector?: string | undefined;
    /**
     * A comma-separated list of visibility labels that apply to the `selector`.
     * Any of the listed labels can be used to grant the visibility.
     *
     * If a rule has multiple labels, removing one of the labels but not all of
     * them can break clients.
     *
     * Example:
     *
     *     visibility:
     *       rules:
     *       - selector: google.calendar.Calendar.EnhancedSearch
     *         restriction: INTERNAL, PREVIEW
     *
     * Removing INTERNAL from this restriction will break clients that rely on
     * this method and only had access to it through INTERNAL.
     */
    restriction?: string | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
export declare const Visibility: {
    encode(message: Visibility, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Visibility;
    fromJSON(object: any): Visibility;
    toJSON(message: Visibility): unknown;
};
export declare const VisibilityRule: {
    encode(message: VisibilityRule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VisibilityRule;
    fromJSON(object: any): VisibilityRule;
    toJSON(message: VisibilityRule): unknown;
};
export declare const enum_visibility: Extension<VisibilityRule>;
export declare const value_visibility: Extension<VisibilityRule>;
export declare const field_visibility: Extension<VisibilityRule>;
export declare const message_visibility: Extension<VisibilityRule>;
export declare const method_visibility: Extension<VisibilityRule>;
export declare const api_visibility: Extension<VisibilityRule>;
export interface Extension<T> {
    number: number;
    tag: number;
    singularTag?: number;
    encode?: (message: T) => Uint8Array[];
    decode?: (tag: number, input: Uint8Array[]) => T;
    repeated: boolean;
    packed: boolean;
}
