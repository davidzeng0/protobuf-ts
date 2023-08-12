import _m0 from "protobufjs/minimal";
import { LabelDescriptor } from "./label";
import { LaunchStage } from "./launch_stage";
/**
 * An object that describes the schema of a [MonitoredResource][google.api.MonitoredResource] object using a
 * type name and a set of labels.  For example, the monitored resource
 * descriptor for Google Compute Engine VM instances has a type of
 * `"gce_instance"` and specifies the use of the labels `"instance_id"` and
 * `"zone"` to identify particular VM instances.
 *
 * Different APIs can support different monitored resource types. APIs generally
 * provide a `list` method that returns the monitored resource descriptors used
 * by the API.
 */
export interface MonitoredResourceDescriptor {
    /**
     * Optional. The resource name of the monitored resource descriptor:
     * `"projects/{project_id}/monitoredResourceDescriptors/{type}"` where
     * {type} is the value of the `type` field in this object and
     * {project_id} is a project ID that provides API-specific context for
     * accessing the type.  APIs that do not use project information can use the
     * resource name format `"monitoredResourceDescriptors/{type}"`.
     */
    name?: string | undefined;
    /**
     * Required. The monitored resource type. For example, the type
     * `"cloudsql_database"` represents databases in Google Cloud SQL.
     *  For a list of types, see [Monitoring resource
     *  types](https://cloud.google.com/monitoring/api/resources)
     * and [Logging resource
     * types](https://cloud.google.com/logging/docs/api/v2/resource-list).
     */
    type?: string | undefined;
    /**
     * Optional. A concise name for the monitored resource type that might be
     * displayed in user interfaces. It should be a Title Cased Noun Phrase,
     * without any article or other determiners. For example,
     * `"Google Cloud SQL Database"`.
     */
    display_name?: string | undefined;
    /**
     * Optional. A detailed description of the monitored resource type that might
     * be used in documentation.
     */
    description?: string | undefined;
    /**
     * Required. A set of labels used to describe instances of this monitored
     * resource type. For example, an individual Google Cloud SQL database is
     * identified by values for the labels `"database_id"` and `"zone"`.
     */
    labels?: LabelDescriptor[] | undefined;
    /** Optional. The launch stage of the monitored resource definition. */
    launch_stage?: LaunchStage | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
/**
 * An object representing a resource that can be used for monitoring, logging,
 * billing, or other purposes. Examples include virtual machine instances,
 * databases, and storage devices such as disks. The `type` field identifies a
 * [MonitoredResourceDescriptor][google.api.MonitoredResourceDescriptor] object that describes the resource's
 * schema. Information in the `labels` field identifies the actual resource and
 * its attributes according to the schema. For example, a particular Compute
 * Engine VM instance could be represented by the following object, because the
 * [MonitoredResourceDescriptor][google.api.MonitoredResourceDescriptor] for `"gce_instance"` has labels
 * `"project_id"`, `"instance_id"` and `"zone"`:
 *
 *     { "type": "gce_instance",
 *       "labels": { "project_id": "my-project",
 *                   "instance_id": "12345678901234",
 *                   "zone": "us-central1-a" }}
 */
export interface MonitoredResource {
    /**
     * Required. The monitored resource type. This field must match
     * the `type` field of a [MonitoredResourceDescriptor][google.api.MonitoredResourceDescriptor] object. For
     * example, the type of a Compute Engine VM instance is `gce_instance`.
     * Some descriptors include the service name in the type; for example,
     * the type of a Datastream stream is `datastream.googleapis.com/Stream`.
     */
    type?: string | undefined;
    /**
     * Required. Values for all of the labels listed in the associated monitored
     * resource descriptor. For example, Compute Engine VM instances use the
     * labels `"project_id"`, `"instance_id"`, and `"zone"`.
     */
    labels?: Map<string, string> | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
export interface MonitoredResource_LabelsEntry {
    key: string;
    value: string;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
/**
 * Auxiliary metadata for a [MonitoredResource][google.api.MonitoredResource] object.
 * [MonitoredResource][google.api.MonitoredResource] objects contain the minimum set of information to
 * uniquely identify a monitored resource instance. There is some other useful
 * auxiliary metadata. Monitoring and Logging use an ingestion
 * pipeline to extract metadata for cloud resources of all types, and store
 * the metadata in this message.
 */
export interface MonitoredResourceMetadata {
    /**
     * Output only. Values for predefined system metadata labels.
     * System labels are a kind of metadata extracted by Google, including
     * "machine_image", "vpc", "subnet_id",
     * "security_group", "name", etc.
     * System label values can be only strings, Boolean values, or a list of
     * strings. For example:
     *
     *     { "name": "my-test-instance",
     *       "security_group": ["a", "b", "c"],
     *       "spot_instance": false }
     */
    system_labels?: {
        [key: string]: any;
    } | undefined;
    /** Output only. A map of user-defined metadata labels. */
    user_labels?: Map<string, string> | undefined;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
export interface MonitoredResourceMetadata_UserLabelsEntry {
    key: string;
    value: string;
    _unknownFields?: {
        [key: number]: Uint8Array[];
    } | undefined;
}
export declare const MonitoredResourceDescriptor: {
    encode(message: MonitoredResourceDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MonitoredResourceDescriptor;
    fromJSON(object: any): MonitoredResourceDescriptor;
    toJSON(message: MonitoredResourceDescriptor): unknown;
};
export declare const MonitoredResource: {
    encode(message: MonitoredResource, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MonitoredResource;
    fromJSON(object: any): MonitoredResource;
    toJSON(message: MonitoredResource): unknown;
};
export declare const MonitoredResource_LabelsEntry: {
    encode(message: MonitoredResource_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MonitoredResource_LabelsEntry;
    fromJSON(object: any): MonitoredResource_LabelsEntry;
    toJSON(message: MonitoredResource_LabelsEntry): unknown;
};
export declare const MonitoredResourceMetadata: {
    encode(message: MonitoredResourceMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MonitoredResourceMetadata;
    fromJSON(object: any): MonitoredResourceMetadata;
    toJSON(message: MonitoredResourceMetadata): unknown;
};
export declare const MonitoredResourceMetadata_UserLabelsEntry: {
    encode(message: MonitoredResourceMetadata_UserLabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MonitoredResourceMetadata_UserLabelsEntry;
    fromJSON(object: any): MonitoredResourceMetadata_UserLabelsEntry;
    toJSON(message: MonitoredResourceMetadata_UserLabelsEntry): unknown;
};
