"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitoredResourceMetadata_UserLabelsEntry = exports.MonitoredResourceMetadata = exports.MonitoredResource_LabelsEntry = exports.MonitoredResource = exports.MonitoredResourceDescriptor = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const struct_1 = require("../protobuf/struct");
const label_1 = require("./label");
const launch_stage_1 = require("./launch_stage");
function createBaseMonitoredResourceDescriptor() {
    return {};
}
exports.MonitoredResourceDescriptor = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== undefined && message.name !== "") {
            writer.uint32(42).string(message.name);
        }
        if (message.type !== undefined && message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        if (message.display_name !== undefined && message.display_name !== "") {
            writer.uint32(18).string(message.display_name);
        }
        if (message.description !== undefined && message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        if (message.labels !== undefined && message.labels.length !== 0) {
            for (const v of message.labels) {
                label_1.LabelDescriptor.encode(v, writer.uint32(34).fork()).ldelim();
            }
        }
        if (message.launch_stage !== undefined && message.launch_stage !== launch_stage_1.LaunchStage.LAUNCH_STAGE_UNSPECIFIED) {
            writer.uint32(56).int32((0, launch_stage_1.launchStageToNumber)(message.launch_stage));
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
        const message = createBaseMonitoredResourceDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.type = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.display_name = reader.string();
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
                    if (message.labels === undefined) {
                        message.labels = [];
                    }
                    message.labels.push(label_1.LabelDescriptor.decode(reader, reader.uint32()));
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.launch_stage = (0, launch_stage_1.launchStageFromJSON)(reader.int32());
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
            type: isSet(object.type) ? String(object.type) : undefined,
            display_name: isSet(object.display_name) ? String(object.display_name) : undefined,
            description: isSet(object.description) ? String(object.description) : undefined,
            labels: Array.isArray(object?.labels) ? object.labels.map((e) => label_1.LabelDescriptor.fromJSON(e)) : undefined,
            launch_stage: isSet(object.launch_stage) ? (0, launch_stage_1.launchStageFromJSON)(object.launch_stage) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== undefined && message.name !== "") {
            obj.name = message.name;
        }
        if (message.type !== undefined && message.type !== "") {
            obj.type = message.type;
        }
        if (message.display_name !== undefined && message.display_name !== "") {
            obj.display_name = message.display_name;
        }
        if (message.description !== undefined && message.description !== "") {
            obj.description = message.description;
        }
        if (message.labels?.length) {
            obj.labels = message.labels.map((e) => label_1.LabelDescriptor.toJSON(e));
        }
        if (message.launch_stage !== undefined && message.launch_stage !== launch_stage_1.LaunchStage.LAUNCH_STAGE_UNSPECIFIED) {
            obj.launch_stage = (0, launch_stage_1.launchStageToJSON)(message.launch_stage);
        }
        return obj;
    },
};
function createBaseMonitoredResource() {
    return {};
}
exports.MonitoredResource = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.type !== undefined && message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        (message.labels || new Map()).forEach((value, key) => {
            exports.MonitoredResource_LabelsEntry.encode({ key: key, value }, writer.uint32(18).fork()).ldelim();
        });
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
        const message = createBaseMonitoredResource();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.type = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    const entry2 = exports.MonitoredResource_LabelsEntry.decode(reader, reader.uint32());
                    if (entry2.value !== undefined) {
                        if (message.labels === undefined) {
                            message.labels = new Map();
                        }
                        message.labels.set(entry2.key, entry2.value);
                    }
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
            type: isSet(object.type) ? String(object.type) : undefined,
            labels: isObject(object.labels)
                ? Object.entries(object.labels).reduce((acc, [key, value]) => {
                    acc.set(key, String(value));
                    return acc;
                }, new Map())
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.type !== undefined && message.type !== "") {
            obj.type = message.type;
        }
        if (message.labels?.size) {
            obj.labels = {};
            message.labels.forEach((v, k) => {
                obj.labels[k] = v;
            });
        }
        return obj;
    },
};
function createBaseMonitoredResource_LabelsEntry() {
    return { key: "", value: "" };
}
exports.MonitoredResource_LabelsEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
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
        const message = createBaseMonitoredResource_LabelsEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value = reader.string();
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
        return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.value !== "") {
            obj.value = message.value;
        }
        return obj;
    },
};
function createBaseMonitoredResourceMetadata() {
    return {};
}
exports.MonitoredResourceMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.system_labels !== undefined) {
            struct_1.Struct.encode(struct_1.Struct.wrap(message.system_labels), writer.uint32(10).fork()).ldelim();
        }
        (message.user_labels || new Map()).forEach((value, key) => {
            exports.MonitoredResourceMetadata_UserLabelsEntry.encode({ key: key, value }, writer.uint32(18).fork()).ldelim();
        });
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
        const message = createBaseMonitoredResourceMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.system_labels = struct_1.Struct.unwrap(struct_1.Struct.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    const entry2 = exports.MonitoredResourceMetadata_UserLabelsEntry.decode(reader, reader.uint32());
                    if (entry2.value !== undefined) {
                        if (message.user_labels === undefined) {
                            message.user_labels = new Map();
                        }
                        message.user_labels.set(entry2.key, entry2.value);
                    }
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
            system_labels: isObject(object.system_labels) ? object.system_labels : undefined,
            user_labels: isObject(object.user_labels)
                ? Object.entries(object.user_labels).reduce((acc, [key, value]) => {
                    acc.set(key, String(value));
                    return acc;
                }, new Map())
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.system_labels !== undefined) {
            obj.system_labels = message.system_labels;
        }
        if (message.user_labels?.size) {
            obj.user_labels = {};
            message.user_labels.forEach((v, k) => {
                obj.user_labels[k] = v;
            });
        }
        return obj;
    },
};
function createBaseMonitoredResourceMetadata_UserLabelsEntry() {
    return { key: "", value: "" };
}
exports.MonitoredResourceMetadata_UserLabelsEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
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
        const message = createBaseMonitoredResourceMetadata_UserLabelsEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value = reader.string();
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
        return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.value !== "") {
            obj.value = message.value;
        }
        return obj;
    },
};
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
