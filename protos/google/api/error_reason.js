"use strict";
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorReasonToJSON = exports.errorReasonFromJSON = exports.ErrorReason = void 0;
/**
 * Defines the supported values for `google.rpc.ErrorInfo.reason` for the
 * `googleapis.com` error domain. This error domain is reserved for [Service
 * Infrastructure](https://cloud.google.com/service-infrastructure/docs/overview).
 * For each error info of this domain, the metadata key "service" refers to the
 * logical identifier of an API service, such as "pubsub.googleapis.com". The
 * "consumer" refers to the entity that consumes an API Service. It typically is
 * a Google project that owns the client application or the server resource,
 * such as "projects/123". Other metadata keys are specific to each error
 * reason. For more information, see the definition of the specific error
 * reason.
 */
var ErrorReason;
(function (ErrorReason) {
    /** ERROR_REASON_UNSPECIFIED - Do not use this default value. */
    ErrorReason[ErrorReason["ERROR_REASON_UNSPECIFIED"] = 0] = "ERROR_REASON_UNSPECIFIED";
    /**
     * SERVICE_DISABLED - The request is calling a disabled service for a consumer.
     *
     * Example of an ErrorInfo when the consumer "projects/123" contacting
     * "pubsub.googleapis.com" service which is disabled:
     *
     *     { "reason": "SERVICE_DISABLED",
     *       "domain": "googleapis.com",
     *       "metadata": {
     *         "consumer": "projects/123",
     *         "service": "pubsub.googleapis.com"
     *       }
     *     }
     *
     * This response indicates the "pubsub.googleapis.com" has been disabled in
     * "projects/123".
     */
    ErrorReason[ErrorReason["SERVICE_DISABLED"] = 1] = "SERVICE_DISABLED";
    /**
     * BILLING_DISABLED - The request whose associated billing account is disabled.
     *
     * Example of an ErrorInfo when the consumer "projects/123" fails to contact
     * "pubsub.googleapis.com" service because the associated billing account is
     * disabled:
     *
     *     { "reason": "BILLING_DISABLED",
     *       "domain": "googleapis.com",
     *       "metadata": {
     *         "consumer": "projects/123",
     *         "service": "pubsub.googleapis.com"
     *       }
     *     }
     *
     * This response indicates the billing account associated has been disabled.
     */
    ErrorReason[ErrorReason["BILLING_DISABLED"] = 2] = "BILLING_DISABLED";
    /**
     * API_KEY_INVALID - The request is denied because the provided [API
     * key](https://cloud.google.com/docs/authentication/api-keys) is invalid. It
     * may be in a bad format, cannot be found, or has been expired).
     *
     * Example of an ErrorInfo when the request is contacting
     * "storage.googleapis.com" service with an invalid API key:
     *
     *     { "reason": "API_KEY_INVALID",
     *       "domain": "googleapis.com",
     *       "metadata": {
     *         "service": "storage.googleapis.com",
     *       }
     *     }
     */
    ErrorReason[ErrorReason["API_KEY_INVALID"] = 3] = "API_KEY_INVALID";
    /**
     * API_KEY_SERVICE_BLOCKED - The request is denied because it violates [API key API
     * restrictions](https://cloud.google.com/docs/authentication/api-keys#adding_api_restrictions).
     *
     * Example of an ErrorInfo when the consumer "projects/123" fails to call the
     * "storage.googleapis.com" service because this service is restricted in the
     * API key:
     *
     *     { "reason": "API_KEY_SERVICE_BLOCKED",
     *       "domain": "googleapis.com",
     *       "metadata": {
     *         "consumer": "projects/123",
     *         "service": "storage.googleapis.com"
     *       }
     *     }
     */
    ErrorReason[ErrorReason["API_KEY_SERVICE_BLOCKED"] = 4] = "API_KEY_SERVICE_BLOCKED";
    /**
     * API_KEY_HTTP_REFERRER_BLOCKED - The request is denied because it violates [API key HTTP
     * restrictions](https://cloud.google.com/docs/authentication/api-keys#adding_http_restrictions).
     *
     * Example of an ErrorInfo when the consumer "projects/123" fails to call
     * "storage.googleapis.com" service because the http referrer of the request
     * violates API key HTTP restrictions:
     *
     *     { "reason": "API_KEY_HTTP_REFERRER_BLOCKED",
     *       "domain": "googleapis.com",
     *       "metadata": {
     *         "consumer": "projects/123",
     *         "service": "storage.googleapis.com",
     *       }
     *     }
     */
    ErrorReason[ErrorReason["API_KEY_HTTP_REFERRER_BLOCKED"] = 7] = "API_KEY_HTTP_REFERRER_BLOCKED";
    /**
     * API_KEY_IP_ADDRESS_BLOCKED - The request is denied because it violates [API key IP address
     * restrictions](https://cloud.google.com/docs/authentication/api-keys#adding_application_restrictions).
     *
     * Example of an ErrorInfo when the consumer "projects/123" fails to call
     * "storage.googleapis.com" service because the caller IP of the request
     * violates API key IP address restrictions:
     *
     *     { "reason": "API_KEY_IP_ADDRESS_BLOCKED",
     *       "domain": "googleapis.com",
     *       "metadata": {
     *         "consumer": "projects/123",
     *         "service": "storage.googleapis.com",
     *       }
     *     }
     */
    ErrorReason[ErrorReason["API_KEY_IP_ADDRESS_BLOCKED"] = 8] = "API_KEY_IP_ADDRESS_BLOCKED";
    /**
     * API_KEY_ANDROID_APP_BLOCKED - The request is denied because it violates [API key Android application
     * restrictions](https://cloud.google.com/docs/authentication/api-keys#adding_application_restrictions).
     *
     * Example of an ErrorInfo when the consumer "projects/123" fails to call
     * "storage.googleapis.com" service because the request from the Android apps
     * violates the API key Android application restrictions:
     *
     *     { "reason": "API_KEY_ANDROID_APP_BLOCKED",
     *       "domain": "googleapis.com",
     *       "metadata": {
     *         "consumer": "projects/123",
     *         "service": "storage.googleapis.com"
     *       }
     *     }
     */
    ErrorReason[ErrorReason["API_KEY_ANDROID_APP_BLOCKED"] = 9] = "API_KEY_ANDROID_APP_BLOCKED";
    /**
     * API_KEY_IOS_APP_BLOCKED - The request is denied because it violates [API key iOS application
     * restrictions](https://cloud.google.com/docs/authentication/api-keys#adding_application_restrictions).
     *
     * Example of an ErrorInfo when the consumer "projects/123" fails to call
     * "storage.googleapis.com" service because the request from the iOS apps
     * violates the API key iOS application restrictions:
     *
     *     { "reason": "API_KEY_IOS_APP_BLOCKED",
     *       "domain": "googleapis.com",
     *       "metadata": {
     *         "consumer": "projects/123",
     *         "service": "storage.googleapis.com"
     *       }
     *     }
     */
    ErrorReason[ErrorReason["API_KEY_IOS_APP_BLOCKED"] = 13] = "API_KEY_IOS_APP_BLOCKED";
    /**
     * RATE_LIMIT_EXCEEDED - The request is denied because there is not enough rate quota for the
     * consumer.
     *
     * Example of an ErrorInfo when the consumer "projects/123" fails to contact
     * "pubsub.googleapis.com" service because consumer's rate quota usage has
     * reached the maximum value set for the quota limit
     * "ReadsPerMinutePerProject" on the quota metric
     * "pubsub.googleapis.com/read_requests":
     *
     *     { "reason": "RATE_LIMIT_EXCEEDED",
     *       "domain": "googleapis.com",
     *       "metadata": {
     *         "consumer": "projects/123",
     *         "service": "pubsub.googleapis.com",
     *         "quota_metric": "pubsub.googleapis.com/read_requests",
     *         "quota_limit": "ReadsPerMinutePerProject"
     *       }
     *     }
     *
     * Example of an ErrorInfo when the consumer "projects/123" checks quota on
     * the service "dataflow.googleapis.com" and hits the organization quota
     * limit "DefaultRequestsPerMinutePerOrganization" on the metric
     * "dataflow.googleapis.com/default_requests".
     *
     *     { "reason": "RATE_LIMIT_EXCEEDED",
     *       "domain": "googleapis.com",
     *       "metadata": {
     *         "consumer": "projects/123",
     *         "service": "dataflow.googleapis.com",
     *         "quota_metric": "dataflow.googleapis.com/default_requests",
     *         "quota_limit": "DefaultRequestsPerMinutePerOrganization"
     *       }
     *     }
     */
    ErrorReason[ErrorReason["RATE_LIMIT_EXCEEDED"] = 5] = "RATE_LIMIT_EXCEEDED";
    /**
     * RESOURCE_QUOTA_EXCEEDED - The request is denied because there is not enough resource quota for the
     * consumer.
     *
     * Example of an ErrorInfo when the consumer "projects/123" fails to contact
     * "compute.googleapis.com" service because consumer's resource quota usage
     * has reached the maximum value set for the quota limit "VMsPerProject"
     * on the quota metric "compute.googleapis.com/vms":
     *
     *     { "reason": "RESOURCE_QUOTA_EXCEEDED",
     *       "domain": "googleapis.com",
     *       "metadata": {
     *         "consumer": "projects/123",
     *         "service": "compute.googleapis.com",
     *         "quota_metric": "compute.googleapis.com/vms",
     *         "quota_limit": "VMsPerProject"
     *       }
     *     }
     *
     * Example of an ErrorInfo when the consumer "projects/123" checks resource
     * quota on the service "dataflow.googleapis.com" and hits the organization
     * quota limit "jobs-per-organization" on the metric
     * "dataflow.googleapis.com/job_count".
     *
     *     { "reason": "RESOURCE_QUOTA_EXCEEDED",
     *       "domain": "googleapis.com",
     *       "metadata": {
     *         "consumer": "projects/123",
     *         "service": "dataflow.googleapis.com",
     *         "quota_metric": "dataflow.googleapis.com/job_count",
     *         "quota_limit": "jobs-per-organization"
     *       }
     *     }
     */
    ErrorReason[ErrorReason["RESOURCE_QUOTA_EXCEEDED"] = 6] = "RESOURCE_QUOTA_EXCEEDED";
    /**
     * LOCATION_TAX_POLICY_VIOLATED - The request whose associated billing account address is in a tax restricted
     * location, violates the local tax restrictions when creating resources in
     * the restricted region.
     *
     * Example of an ErrorInfo when creating the Cloud Storage Bucket in the
     * container "projects/123" under a tax restricted region
     * "locations/asia-northeast3":
     *
     *     { "reason": "LOCATION_TAX_POLICY_VIOLATED",
     *       "domain": "googleapis.com",
     *       "metadata": {
     *         "consumer": "projects/123",
     *         "service": "storage.googleapis.com",
     *         "location": "locations/asia-northeast3"
     *       }
     *     }
     *
     * This response indicates creating the Cloud Storage Bucket in
     * "locations/asia-northeast3" violates the location tax restriction.
     */
    ErrorReason[ErrorReason["LOCATION_TAX_POLICY_VIOLATED"] = 10] = "LOCATION_TAX_POLICY_VIOLATED";
    /**
     * USER_PROJECT_DENIED - The request is denied because the caller does not have required permission
     * on the user project "projects/123" or the user project is invalid. For more
     * information, check the [userProject System
     * Parameters](https://cloud.google.com/apis/docs/system-parameters).
     *
     * Example of an ErrorInfo when the caller is calling Cloud Storage service
     * with insufficient permissions on the user project:
     *
     *     { "reason": "USER_PROJECT_DENIED",
     *       "domain": "googleapis.com",
     *       "metadata": {
     *         "consumer": "projects/123",
     *         "service": "storage.googleapis.com"
     *       }
     *     }
     */
    ErrorReason[ErrorReason["USER_PROJECT_DENIED"] = 11] = "USER_PROJECT_DENIED";
    /**
     * CONSUMER_SUSPENDED - The request is denied because the consumer "projects/123" is suspended due
     * to Terms of Service(Tos) violations. Check [Project suspension
     * guidelines](https://cloud.google.com/resource-manager/docs/project-suspension-guidelines)
     * for more information.
     *
     * Example of an ErrorInfo when calling Cloud Storage service with the
     * suspended consumer "projects/123":
     *
     *     { "reason": "CONSUMER_SUSPENDED",
     *       "domain": "googleapis.com",
     *       "metadata": {
     *         "consumer": "projects/123",
     *         "service": "storage.googleapis.com"
     *       }
     *     }
     */
    ErrorReason[ErrorReason["CONSUMER_SUSPENDED"] = 12] = "CONSUMER_SUSPENDED";
    /**
     * CONSUMER_INVALID - The request is denied because the associated consumer is invalid. It may be
     * in a bad format, cannot be found, or have been deleted.
     *
     * Example of an ErrorInfo when calling Cloud Storage service with the
     * invalid consumer "projects/123":
     *
     *     { "reason": "CONSUMER_INVALID",
     *       "domain": "googleapis.com",
     *       "metadata": {
     *         "consumer": "projects/123",
     *         "service": "storage.googleapis.com"
     *       }
     *     }
     */
    ErrorReason[ErrorReason["CONSUMER_INVALID"] = 14] = "CONSUMER_INVALID";
    /**
     * SECURITY_POLICY_VIOLATED - The request is denied because it violates [VPC Service
     * Controls](https://cloud.google.com/vpc-service-controls/docs/overview).
     * The 'uid' field is a random generated identifier that customer can use it
     * to search the audit log for a request rejected by VPC Service Controls. For
     * more information, please refer [VPC Service Controls
     * Troubleshooting](https://cloud.google.com/vpc-service-controls/docs/troubleshooting#unique-id)
     *
     * Example of an ErrorInfo when the consumer "projects/123" fails to call
     * Cloud Storage service because the request is prohibited by the VPC Service
     * Controls.
     *
     *     { "reason": "SECURITY_POLICY_VIOLATED",
     *       "domain": "googleapis.com",
     *       "metadata": {
     *         "uid": "123456789abcde",
     *         "consumer": "projects/123",
     *         "service": "storage.googleapis.com"
     *       }
     *     }
     */
    ErrorReason[ErrorReason["SECURITY_POLICY_VIOLATED"] = 15] = "SECURITY_POLICY_VIOLATED";
    /**
     * ACCESS_TOKEN_EXPIRED - The request is denied because the provided access token has expired.
     *
     * Example of an ErrorInfo when the request is calling Cloud Storage service
     * with an expired access token:
     *
     *     { "reason": "ACCESS_TOKEN_EXPIRED",
     *       "domain": "googleapis.com",
     *       "metadata": {
     *         "service": "storage.googleapis.com",
     *         "method": "google.storage.v1.Storage.GetObject"
     *       }
     *     }
     */
    ErrorReason[ErrorReason["ACCESS_TOKEN_EXPIRED"] = 16] = "ACCESS_TOKEN_EXPIRED";
    /**
     * ACCESS_TOKEN_SCOPE_INSUFFICIENT - The request is denied because the provided access token doesn't have at
     * least one of the acceptable scopes required for the API. Please check
     * [OAuth 2.0 Scopes for Google
     * APIs](https://developers.google.com/identity/protocols/oauth2/scopes) for
     * the list of the OAuth 2.0 scopes that you might need to request to access
     * the API.
     *
     * Example of an ErrorInfo when the request is calling Cloud Storage service
     * with an access token that is missing required scopes:
     *
     *     { "reason": "ACCESS_TOKEN_SCOPE_INSUFFICIENT",
     *       "domain": "googleapis.com",
     *       "metadata": {
     *         "service": "storage.googleapis.com",
     *         "method": "google.storage.v1.Storage.GetObject"
     *       }
     *     }
     */
    ErrorReason[ErrorReason["ACCESS_TOKEN_SCOPE_INSUFFICIENT"] = 17] = "ACCESS_TOKEN_SCOPE_INSUFFICIENT";
    /**
     * ACCOUNT_STATE_INVALID - The request is denied because the account associated with the provided
     * access token is in an invalid state, such as disabled or deleted.
     * For more information, see https://cloud.google.com/docs/authentication.
     *
     * Warning: For privacy reasons, the server may not be able to disclose the
     * email address for some accounts. The client MUST NOT depend on the
     * availability of the `email` attribute.
     *
     * Example of an ErrorInfo when the request is to the Cloud Storage API with
     * an access token that is associated with a disabled or deleted [service
     * account](http://cloud/iam/docs/service-accounts):
     *
     *     { "reason": "ACCOUNT_STATE_INVALID",
     *       "domain": "googleapis.com",
     *       "metadata": {
     *         "service": "storage.googleapis.com",
     *         "method": "google.storage.v1.Storage.GetObject",
     *         "email": "user@123.iam.gserviceaccount.com"
     *       }
     *     }
     */
    ErrorReason[ErrorReason["ACCOUNT_STATE_INVALID"] = 18] = "ACCOUNT_STATE_INVALID";
    /**
     * ACCESS_TOKEN_TYPE_UNSUPPORTED - The request is denied because the type of the provided access token is not
     * supported by the API being called.
     *
     * Example of an ErrorInfo when the request is to the Cloud Storage API with
     * an unsupported token type.
     *
     *     { "reason": "ACCESS_TOKEN_TYPE_UNSUPPORTED",
     *       "domain": "googleapis.com",
     *       "metadata": {
     *         "service": "storage.googleapis.com",
     *         "method": "google.storage.v1.Storage.GetObject"
     *       }
     *     }
     */
    ErrorReason[ErrorReason["ACCESS_TOKEN_TYPE_UNSUPPORTED"] = 19] = "ACCESS_TOKEN_TYPE_UNSUPPORTED";
    /**
     * CREDENTIALS_MISSING - The request is denied because the request doesn't have any authentication
     * credentials. For more information regarding the supported authentication
     * strategies for Google Cloud APIs, see
     * https://cloud.google.com/docs/authentication.
     *
     * Example of an ErrorInfo when the request is to the Cloud Storage API
     * without any authentication credentials.
     *
     *     { "reason": "CREDENTIALS_MISSING",
     *       "domain": "googleapis.com",
     *       "metadata": {
     *         "service": "storage.googleapis.com",
     *         "method": "google.storage.v1.Storage.GetObject"
     *       }
     *     }
     */
    ErrorReason[ErrorReason["CREDENTIALS_MISSING"] = 20] = "CREDENTIALS_MISSING";
    /**
     * RESOURCE_PROJECT_INVALID - The request is denied because the provided project owning the resource
     * which acts as the [API
     * consumer](https://cloud.google.com/apis/design/glossary#api_consumer) is
     * invalid. It may be in a bad format or empty.
     *
     * Example of an ErrorInfo when the request is to the Cloud Functions API,
     * but the offered resource project in the request in a bad format which can't
     * perform the ListFunctions method.
     *
     *     { "reason": "RESOURCE_PROJECT_INVALID",
     *       "domain": "googleapis.com",
     *       "metadata": {
     *         "service": "cloudfunctions.googleapis.com",
     *         "method":
     *         "google.cloud.functions.v1.CloudFunctionsService.ListFunctions"
     *       }
     *     }
     */
    ErrorReason[ErrorReason["RESOURCE_PROJECT_INVALID"] = 21] = "RESOURCE_PROJECT_INVALID";
    /**
     * SESSION_COOKIE_INVALID - The request is denied because the provided session cookie is missing,
     * invalid or failed to decode.
     *
     * Example of an ErrorInfo when the request is calling Cloud Storage service
     * with a SID cookie which can't be decoded.
     *
     *     { "reason": "SESSION_COOKIE_INVALID",
     *       "domain": "googleapis.com",
     *       "metadata": {
     *         "service": "storage.googleapis.com",
     *         "method": "google.storage.v1.Storage.GetObject",
     *         "cookie": "SID"
     *       }
     *     }
     */
    ErrorReason[ErrorReason["SESSION_COOKIE_INVALID"] = 23] = "SESSION_COOKIE_INVALID";
    /**
     * USER_BLOCKED_BY_ADMIN - The request is denied because the user is from a Google Workspace customer
     * that blocks their users from accessing a particular service.
     *
     * Example scenario: https://support.google.com/a/answer/9197205?hl=en
     *
     * Example of an ErrorInfo when access to Google Cloud Storage service is
     * blocked by the Google Workspace administrator:
     *
     *     { "reason": "USER_BLOCKED_BY_ADMIN",
     *       "domain": "googleapis.com",
     *       "metadata": {
     *         "service": "storage.googleapis.com",
     *         "method": "google.storage.v1.Storage.GetObject",
     *       }
     *     }
     */
    ErrorReason[ErrorReason["USER_BLOCKED_BY_ADMIN"] = 24] = "USER_BLOCKED_BY_ADMIN";
    /**
     * RESOURCE_USAGE_RESTRICTION_VIOLATED - The request is denied because the resource service usage is restricted
     * by administrators according to the organization policy constraint.
     * For more information see
     * https://cloud.google.com/resource-manager/docs/organization-policy/restricting-services.
     *
     * Example of an ErrorInfo when access to Google Cloud Storage service is
     * restricted by Resource Usage Restriction policy:
     *
     *     { "reason": "RESOURCE_USAGE_RESTRICTION_VIOLATED",
     *       "domain": "googleapis.com",
     *       "metadata": {
     *         "consumer": "projects/project-123",
     *         "service": "storage.googleapis.com"
     *       }
     *     }
     */
    ErrorReason[ErrorReason["RESOURCE_USAGE_RESTRICTION_VIOLATED"] = 25] = "RESOURCE_USAGE_RESTRICTION_VIOLATED";
    /**
     * SYSTEM_PARAMETER_UNSUPPORTED - Unimplemented. Do not use.
     *
     * The request is denied because it contains unsupported system parameters in
     * URL query parameters or HTTP headers. For more information,
     * see https://cloud.google.com/apis/docs/system-parameters
     *
     * Example of an ErrorInfo when access "pubsub.googleapis.com" service with
     * a request header of "x-goog-user-ip":
     *
     *     { "reason": "SYSTEM_PARAMETER_UNSUPPORTED",
     *       "domain": "googleapis.com",
     *       "metadata": {
     *         "service": "pubsub.googleapis.com"
     *         "parameter": "x-goog-user-ip"
     *       }
     *     }
     */
    ErrorReason[ErrorReason["SYSTEM_PARAMETER_UNSUPPORTED"] = 26] = "SYSTEM_PARAMETER_UNSUPPORTED";
    /**
     * ORG_RESTRICTION_VIOLATION - The request is denied because it violates Org Restriction: the requested
     * resource does not belong to allowed organizations specified in
     * "X-Goog-Allowed-Resources" header.
     *
     * Example of an ErrorInfo when accessing a GCP resource that is restricted by
     * Org Restriction for "pubsub.googleapis.com" service.
     *
     * {
     *   reason: "ORG_RESTRICTION_VIOLATION"
     *   domain: "googleapis.com"
     *   metadata {
     *     "consumer":"projects/123456"
     *     "service": "pubsub.googleapis.com"
     *   }
     * }
     */
    ErrorReason[ErrorReason["ORG_RESTRICTION_VIOLATION"] = 27] = "ORG_RESTRICTION_VIOLATION";
    /**
     * ORG_RESTRICTION_HEADER_INVALID - The request is denied because "X-Goog-Allowed-Resources" header is in a bad
     * format.
     *
     * Example of an ErrorInfo when
     * accessing "pubsub.googleapis.com" service with an invalid
     * "X-Goog-Allowed-Resources" request header.
     *
     * {
     *   reason: "ORG_RESTRICTION_HEADER_INVALID"
     *   domain: "googleapis.com"
     *   metadata {
     *     "consumer":"projects/123456"
     *     "service": "pubsub.googleapis.com"
     *   }
     * }
     */
    ErrorReason[ErrorReason["ORG_RESTRICTION_HEADER_INVALID"] = 28] = "ORG_RESTRICTION_HEADER_INVALID";
    ErrorReason[ErrorReason["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ErrorReason = exports.ErrorReason || (exports.ErrorReason = {}));
function errorReasonFromJSON(object) {
    switch (object) {
        case 0:
        case "ERROR_REASON_UNSPECIFIED":
            return ErrorReason.ERROR_REASON_UNSPECIFIED;
        case 1:
        case "SERVICE_DISABLED":
            return ErrorReason.SERVICE_DISABLED;
        case 2:
        case "BILLING_DISABLED":
            return ErrorReason.BILLING_DISABLED;
        case 3:
        case "API_KEY_INVALID":
            return ErrorReason.API_KEY_INVALID;
        case 4:
        case "API_KEY_SERVICE_BLOCKED":
            return ErrorReason.API_KEY_SERVICE_BLOCKED;
        case 7:
        case "API_KEY_HTTP_REFERRER_BLOCKED":
            return ErrorReason.API_KEY_HTTP_REFERRER_BLOCKED;
        case 8:
        case "API_KEY_IP_ADDRESS_BLOCKED":
            return ErrorReason.API_KEY_IP_ADDRESS_BLOCKED;
        case 9:
        case "API_KEY_ANDROID_APP_BLOCKED":
            return ErrorReason.API_KEY_ANDROID_APP_BLOCKED;
        case 13:
        case "API_KEY_IOS_APP_BLOCKED":
            return ErrorReason.API_KEY_IOS_APP_BLOCKED;
        case 5:
        case "RATE_LIMIT_EXCEEDED":
            return ErrorReason.RATE_LIMIT_EXCEEDED;
        case 6:
        case "RESOURCE_QUOTA_EXCEEDED":
            return ErrorReason.RESOURCE_QUOTA_EXCEEDED;
        case 10:
        case "LOCATION_TAX_POLICY_VIOLATED":
            return ErrorReason.LOCATION_TAX_POLICY_VIOLATED;
        case 11:
        case "USER_PROJECT_DENIED":
            return ErrorReason.USER_PROJECT_DENIED;
        case 12:
        case "CONSUMER_SUSPENDED":
            return ErrorReason.CONSUMER_SUSPENDED;
        case 14:
        case "CONSUMER_INVALID":
            return ErrorReason.CONSUMER_INVALID;
        case 15:
        case "SECURITY_POLICY_VIOLATED":
            return ErrorReason.SECURITY_POLICY_VIOLATED;
        case 16:
        case "ACCESS_TOKEN_EXPIRED":
            return ErrorReason.ACCESS_TOKEN_EXPIRED;
        case 17:
        case "ACCESS_TOKEN_SCOPE_INSUFFICIENT":
            return ErrorReason.ACCESS_TOKEN_SCOPE_INSUFFICIENT;
        case 18:
        case "ACCOUNT_STATE_INVALID":
            return ErrorReason.ACCOUNT_STATE_INVALID;
        case 19:
        case "ACCESS_TOKEN_TYPE_UNSUPPORTED":
            return ErrorReason.ACCESS_TOKEN_TYPE_UNSUPPORTED;
        case 20:
        case "CREDENTIALS_MISSING":
            return ErrorReason.CREDENTIALS_MISSING;
        case 21:
        case "RESOURCE_PROJECT_INVALID":
            return ErrorReason.RESOURCE_PROJECT_INVALID;
        case 23:
        case "SESSION_COOKIE_INVALID":
            return ErrorReason.SESSION_COOKIE_INVALID;
        case 24:
        case "USER_BLOCKED_BY_ADMIN":
            return ErrorReason.USER_BLOCKED_BY_ADMIN;
        case 25:
        case "RESOURCE_USAGE_RESTRICTION_VIOLATED":
            return ErrorReason.RESOURCE_USAGE_RESTRICTION_VIOLATED;
        case 26:
        case "SYSTEM_PARAMETER_UNSUPPORTED":
            return ErrorReason.SYSTEM_PARAMETER_UNSUPPORTED;
        case 27:
        case "ORG_RESTRICTION_VIOLATION":
            return ErrorReason.ORG_RESTRICTION_VIOLATION;
        case 28:
        case "ORG_RESTRICTION_HEADER_INVALID":
            return ErrorReason.ORG_RESTRICTION_HEADER_INVALID;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ErrorReason.UNRECOGNIZED;
    }
}
exports.errorReasonFromJSON = errorReasonFromJSON;
function errorReasonToJSON(object) {
    switch (object) {
        case ErrorReason.ERROR_REASON_UNSPECIFIED:
            return "ERROR_REASON_UNSPECIFIED";
        case ErrorReason.SERVICE_DISABLED:
            return "SERVICE_DISABLED";
        case ErrorReason.BILLING_DISABLED:
            return "BILLING_DISABLED";
        case ErrorReason.API_KEY_INVALID:
            return "API_KEY_INVALID";
        case ErrorReason.API_KEY_SERVICE_BLOCKED:
            return "API_KEY_SERVICE_BLOCKED";
        case ErrorReason.API_KEY_HTTP_REFERRER_BLOCKED:
            return "API_KEY_HTTP_REFERRER_BLOCKED";
        case ErrorReason.API_KEY_IP_ADDRESS_BLOCKED:
            return "API_KEY_IP_ADDRESS_BLOCKED";
        case ErrorReason.API_KEY_ANDROID_APP_BLOCKED:
            return "API_KEY_ANDROID_APP_BLOCKED";
        case ErrorReason.API_KEY_IOS_APP_BLOCKED:
            return "API_KEY_IOS_APP_BLOCKED";
        case ErrorReason.RATE_LIMIT_EXCEEDED:
            return "RATE_LIMIT_EXCEEDED";
        case ErrorReason.RESOURCE_QUOTA_EXCEEDED:
            return "RESOURCE_QUOTA_EXCEEDED";
        case ErrorReason.LOCATION_TAX_POLICY_VIOLATED:
            return "LOCATION_TAX_POLICY_VIOLATED";
        case ErrorReason.USER_PROJECT_DENIED:
            return "USER_PROJECT_DENIED";
        case ErrorReason.CONSUMER_SUSPENDED:
            return "CONSUMER_SUSPENDED";
        case ErrorReason.CONSUMER_INVALID:
            return "CONSUMER_INVALID";
        case ErrorReason.SECURITY_POLICY_VIOLATED:
            return "SECURITY_POLICY_VIOLATED";
        case ErrorReason.ACCESS_TOKEN_EXPIRED:
            return "ACCESS_TOKEN_EXPIRED";
        case ErrorReason.ACCESS_TOKEN_SCOPE_INSUFFICIENT:
            return "ACCESS_TOKEN_SCOPE_INSUFFICIENT";
        case ErrorReason.ACCOUNT_STATE_INVALID:
            return "ACCOUNT_STATE_INVALID";
        case ErrorReason.ACCESS_TOKEN_TYPE_UNSUPPORTED:
            return "ACCESS_TOKEN_TYPE_UNSUPPORTED";
        case ErrorReason.CREDENTIALS_MISSING:
            return "CREDENTIALS_MISSING";
        case ErrorReason.RESOURCE_PROJECT_INVALID:
            return "RESOURCE_PROJECT_INVALID";
        case ErrorReason.SESSION_COOKIE_INVALID:
            return "SESSION_COOKIE_INVALID";
        case ErrorReason.USER_BLOCKED_BY_ADMIN:
            return "USER_BLOCKED_BY_ADMIN";
        case ErrorReason.RESOURCE_USAGE_RESTRICTION_VIOLATED:
            return "RESOURCE_USAGE_RESTRICTION_VIOLATED";
        case ErrorReason.SYSTEM_PARAMETER_UNSUPPORTED:
            return "SYSTEM_PARAMETER_UNSUPPORTED";
        case ErrorReason.ORG_RESTRICTION_VIOLATION:
            return "ORG_RESTRICTION_VIOLATION";
        case ErrorReason.ORG_RESTRICTION_HEADER_INVALID:
            return "ORG_RESTRICTION_HEADER_INVALID";
        case ErrorReason.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.errorReasonToJSON = errorReasonToJSON;
