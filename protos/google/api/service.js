"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const api_1 = require("../protobuf/api");
const type_1 = require("../protobuf/type");
const wrappers_1 = require("../protobuf/wrappers");
const auth_1 = require("./auth");
const backend_1 = require("./backend");
const billing_1 = require("./billing");
const client_1 = require("./client");
const context_1 = require("./context");
const control_1 = require("./control");
const documentation_1 = require("./documentation");
const endpoint_1 = require("./endpoint");
const http_1 = require("./http");
const log_1 = require("./log");
const logging_1 = require("./logging");
const metric_1 = require("./metric");
const monitored_resource_1 = require("./monitored_resource");
const monitoring_1 = require("./monitoring");
const quota_1 = require("./quota");
const source_info_1 = require("./source_info");
const system_parameter_1 = require("./system_parameter");
const usage_1 = require("./usage");
function createBaseService() {
    return {};
}
exports.Service = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== undefined && message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.title !== undefined && message.title !== "") {
            writer.uint32(18).string(message.title);
        }
        if (message.producer_project_id !== undefined && message.producer_project_id !== "") {
            writer.uint32(178).string(message.producer_project_id);
        }
        if (message.id !== undefined && message.id !== "") {
            writer.uint32(266).string(message.id);
        }
        if (message.apis !== undefined && message.apis.length !== 0) {
            for (const v of message.apis) {
                api_1.Api.encode(v, writer.uint32(26).fork()).ldelim();
            }
        }
        if (message.types !== undefined && message.types.length !== 0) {
            for (const v of message.types) {
                type_1.Type.encode(v, writer.uint32(34).fork()).ldelim();
            }
        }
        if (message.enums !== undefined && message.enums.length !== 0) {
            for (const v of message.enums) {
                type_1.Enum.encode(v, writer.uint32(42).fork()).ldelim();
            }
        }
        if (message.documentation !== undefined) {
            documentation_1.Documentation.encode(message.documentation, writer.uint32(50).fork()).ldelim();
        }
        if (message.backend !== undefined) {
            backend_1.Backend.encode(message.backend, writer.uint32(66).fork()).ldelim();
        }
        if (message.http !== undefined) {
            http_1.Http.encode(message.http, writer.uint32(74).fork()).ldelim();
        }
        if (message.quota !== undefined) {
            quota_1.Quota.encode(message.quota, writer.uint32(82).fork()).ldelim();
        }
        if (message.authentication !== undefined) {
            auth_1.Authentication.encode(message.authentication, writer.uint32(90).fork()).ldelim();
        }
        if (message.context !== undefined) {
            context_1.Context.encode(message.context, writer.uint32(98).fork()).ldelim();
        }
        if (message.usage !== undefined) {
            usage_1.Usage.encode(message.usage, writer.uint32(122).fork()).ldelim();
        }
        if (message.endpoints !== undefined && message.endpoints.length !== 0) {
            for (const v of message.endpoints) {
                endpoint_1.Endpoint.encode(v, writer.uint32(146).fork()).ldelim();
            }
        }
        if (message.control !== undefined) {
            control_1.Control.encode(message.control, writer.uint32(170).fork()).ldelim();
        }
        if (message.logs !== undefined && message.logs.length !== 0) {
            for (const v of message.logs) {
                log_1.LogDescriptor.encode(v, writer.uint32(186).fork()).ldelim();
            }
        }
        if (message.metrics !== undefined && message.metrics.length !== 0) {
            for (const v of message.metrics) {
                metric_1.MetricDescriptor.encode(v, writer.uint32(194).fork()).ldelim();
            }
        }
        if (message.monitored_resources !== undefined && message.monitored_resources.length !== 0) {
            for (const v of message.monitored_resources) {
                monitored_resource_1.MonitoredResourceDescriptor.encode(v, writer.uint32(202).fork()).ldelim();
            }
        }
        if (message.billing !== undefined) {
            billing_1.Billing.encode(message.billing, writer.uint32(210).fork()).ldelim();
        }
        if (message.logging !== undefined) {
            logging_1.Logging.encode(message.logging, writer.uint32(218).fork()).ldelim();
        }
        if (message.monitoring !== undefined) {
            monitoring_1.Monitoring.encode(message.monitoring, writer.uint32(226).fork()).ldelim();
        }
        if (message.system_parameters !== undefined) {
            system_parameter_1.SystemParameters.encode(message.system_parameters, writer.uint32(234).fork()).ldelim();
        }
        if (message.source_info !== undefined) {
            source_info_1.SourceInfo.encode(message.source_info, writer.uint32(298).fork()).ldelim();
        }
        if (message.publishing !== undefined) {
            client_1.Publishing.encode(message.publishing, writer.uint32(362).fork()).ldelim();
        }
        if (message.config_version !== undefined) {
            wrappers_1.UInt32Value.encode({ value: message.config_version }, writer.uint32(162).fork()).ldelim();
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
        const message = createBaseService();
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
                    message.title = reader.string();
                    continue;
                case 22:
                    if (tag !== 178) {
                        break;
                    }
                    message.producer_project_id = reader.string();
                    continue;
                case 33:
                    if (tag !== 266) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    if (message.apis === undefined) {
                        message.apis = [];
                    }
                    message.apis.push(api_1.Api.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    if (message.types === undefined) {
                        message.types = [];
                    }
                    message.types.push(type_1.Type.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    if (message.enums === undefined) {
                        message.enums = [];
                    }
                    message.enums.push(type_1.Enum.decode(reader, reader.uint32()));
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.documentation = documentation_1.Documentation.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.backend = backend_1.Backend.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.http = http_1.Http.decode(reader, reader.uint32());
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.quota = quota_1.Quota.decode(reader, reader.uint32());
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.authentication = auth_1.Authentication.decode(reader, reader.uint32());
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.context = context_1.Context.decode(reader, reader.uint32());
                    continue;
                case 15:
                    if (tag !== 122) {
                        break;
                    }
                    message.usage = usage_1.Usage.decode(reader, reader.uint32());
                    continue;
                case 18:
                    if (tag !== 146) {
                        break;
                    }
                    if (message.endpoints === undefined) {
                        message.endpoints = [];
                    }
                    message.endpoints.push(endpoint_1.Endpoint.decode(reader, reader.uint32()));
                    continue;
                case 21:
                    if (tag !== 170) {
                        break;
                    }
                    message.control = control_1.Control.decode(reader, reader.uint32());
                    continue;
                case 23:
                    if (tag !== 186) {
                        break;
                    }
                    if (message.logs === undefined) {
                        message.logs = [];
                    }
                    message.logs.push(log_1.LogDescriptor.decode(reader, reader.uint32()));
                    continue;
                case 24:
                    if (tag !== 194) {
                        break;
                    }
                    if (message.metrics === undefined) {
                        message.metrics = [];
                    }
                    message.metrics.push(metric_1.MetricDescriptor.decode(reader, reader.uint32()));
                    continue;
                case 25:
                    if (tag !== 202) {
                        break;
                    }
                    if (message.monitored_resources === undefined) {
                        message.monitored_resources = [];
                    }
                    message.monitored_resources.push(monitored_resource_1.MonitoredResourceDescriptor.decode(reader, reader.uint32()));
                    continue;
                case 26:
                    if (tag !== 210) {
                        break;
                    }
                    message.billing = billing_1.Billing.decode(reader, reader.uint32());
                    continue;
                case 27:
                    if (tag !== 218) {
                        break;
                    }
                    message.logging = logging_1.Logging.decode(reader, reader.uint32());
                    continue;
                case 28:
                    if (tag !== 226) {
                        break;
                    }
                    message.monitoring = monitoring_1.Monitoring.decode(reader, reader.uint32());
                    continue;
                case 29:
                    if (tag !== 234) {
                        break;
                    }
                    message.system_parameters = system_parameter_1.SystemParameters.decode(reader, reader.uint32());
                    continue;
                case 37:
                    if (tag !== 298) {
                        break;
                    }
                    message.source_info = source_info_1.SourceInfo.decode(reader, reader.uint32());
                    continue;
                case 45:
                    if (tag !== 362) {
                        break;
                    }
                    message.publishing = client_1.Publishing.decode(reader, reader.uint32());
                    continue;
                case 20:
                    if (tag !== 162) {
                        break;
                    }
                    message.config_version = wrappers_1.UInt32Value.decode(reader, reader.uint32()).value;
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
            title: isSet(object.title) ? String(object.title) : undefined,
            producer_project_id: isSet(object.producer_project_id) ? String(object.producer_project_id) : undefined,
            id: isSet(object.id) ? String(object.id) : undefined,
            apis: Array.isArray(object?.apis) ? object.apis.map((e) => api_1.Api.fromJSON(e)) : undefined,
            types: Array.isArray(object?.types) ? object.types.map((e) => type_1.Type.fromJSON(e)) : undefined,
            enums: Array.isArray(object?.enums) ? object.enums.map((e) => type_1.Enum.fromJSON(e)) : undefined,
            documentation: isSet(object.documentation) ? documentation_1.Documentation.fromJSON(object.documentation) : undefined,
            backend: isSet(object.backend) ? backend_1.Backend.fromJSON(object.backend) : undefined,
            http: isSet(object.http) ? http_1.Http.fromJSON(object.http) : undefined,
            quota: isSet(object.quota) ? quota_1.Quota.fromJSON(object.quota) : undefined,
            authentication: isSet(object.authentication) ? auth_1.Authentication.fromJSON(object.authentication) : undefined,
            context: isSet(object.context) ? context_1.Context.fromJSON(object.context) : undefined,
            usage: isSet(object.usage) ? usage_1.Usage.fromJSON(object.usage) : undefined,
            endpoints: Array.isArray(object?.endpoints) ? object.endpoints.map((e) => endpoint_1.Endpoint.fromJSON(e)) : undefined,
            control: isSet(object.control) ? control_1.Control.fromJSON(object.control) : undefined,
            logs: Array.isArray(object?.logs) ? object.logs.map((e) => log_1.LogDescriptor.fromJSON(e)) : undefined,
            metrics: Array.isArray(object?.metrics)
                ? object.metrics.map((e) => metric_1.MetricDescriptor.fromJSON(e))
                : undefined,
            monitored_resources: Array.isArray(object?.monitored_resources)
                ? object.monitored_resources.map((e) => monitored_resource_1.MonitoredResourceDescriptor.fromJSON(e))
                : undefined,
            billing: isSet(object.billing) ? billing_1.Billing.fromJSON(object.billing) : undefined,
            logging: isSet(object.logging) ? logging_1.Logging.fromJSON(object.logging) : undefined,
            monitoring: isSet(object.monitoring) ? monitoring_1.Monitoring.fromJSON(object.monitoring) : undefined,
            system_parameters: isSet(object.system_parameters)
                ? system_parameter_1.SystemParameters.fromJSON(object.system_parameters)
                : undefined,
            source_info: isSet(object.source_info) ? source_info_1.SourceInfo.fromJSON(object.source_info) : undefined,
            publishing: isSet(object.publishing) ? client_1.Publishing.fromJSON(object.publishing) : undefined,
            config_version: isSet(object.config_version) ? Number(object.config_version) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== undefined && message.name !== "") {
            obj.name = message.name;
        }
        if (message.title !== undefined && message.title !== "") {
            obj.title = message.title;
        }
        if (message.producer_project_id !== undefined && message.producer_project_id !== "") {
            obj.producer_project_id = message.producer_project_id;
        }
        if (message.id !== undefined && message.id !== "") {
            obj.id = message.id;
        }
        if (message.apis?.length) {
            obj.apis = message.apis.map((e) => api_1.Api.toJSON(e));
        }
        if (message.types?.length) {
            obj.types = message.types.map((e) => type_1.Type.toJSON(e));
        }
        if (message.enums?.length) {
            obj.enums = message.enums.map((e) => type_1.Enum.toJSON(e));
        }
        if (message.documentation !== undefined) {
            obj.documentation = documentation_1.Documentation.toJSON(message.documentation);
        }
        if (message.backend !== undefined) {
            obj.backend = backend_1.Backend.toJSON(message.backend);
        }
        if (message.http !== undefined) {
            obj.http = http_1.Http.toJSON(message.http);
        }
        if (message.quota !== undefined) {
            obj.quota = quota_1.Quota.toJSON(message.quota);
        }
        if (message.authentication !== undefined) {
            obj.authentication = auth_1.Authentication.toJSON(message.authentication);
        }
        if (message.context !== undefined) {
            obj.context = context_1.Context.toJSON(message.context);
        }
        if (message.usage !== undefined) {
            obj.usage = usage_1.Usage.toJSON(message.usage);
        }
        if (message.endpoints?.length) {
            obj.endpoints = message.endpoints.map((e) => endpoint_1.Endpoint.toJSON(e));
        }
        if (message.control !== undefined) {
            obj.control = control_1.Control.toJSON(message.control);
        }
        if (message.logs?.length) {
            obj.logs = message.logs.map((e) => log_1.LogDescriptor.toJSON(e));
        }
        if (message.metrics?.length) {
            obj.metrics = message.metrics.map((e) => metric_1.MetricDescriptor.toJSON(e));
        }
        if (message.monitored_resources?.length) {
            obj.monitored_resources = message.monitored_resources.map((e) => monitored_resource_1.MonitoredResourceDescriptor.toJSON(e));
        }
        if (message.billing !== undefined) {
            obj.billing = billing_1.Billing.toJSON(message.billing);
        }
        if (message.logging !== undefined) {
            obj.logging = logging_1.Logging.toJSON(message.logging);
        }
        if (message.monitoring !== undefined) {
            obj.monitoring = monitoring_1.Monitoring.toJSON(message.monitoring);
        }
        if (message.system_parameters !== undefined) {
            obj.system_parameters = system_parameter_1.SystemParameters.toJSON(message.system_parameters);
        }
        if (message.source_info !== undefined) {
            obj.source_info = source_info_1.SourceInfo.toJSON(message.source_info);
        }
        if (message.publishing !== undefined) {
            obj.publishing = client_1.Publishing.toJSON(message.publishing);
        }
        if (message.config_version !== undefined) {
            obj.config_version = message.config_version;
        }
        return obj;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
