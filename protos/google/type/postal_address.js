"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostalAddress = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
function createBasePostalAddress() {
    return {};
}
exports.PostalAddress = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.revision !== undefined && message.revision !== 0) {
            writer.uint32(8).int32(message.revision);
        }
        if (message.region_code !== undefined && message.region_code !== "") {
            writer.uint32(18).string(message.region_code);
        }
        if (message.language_code !== undefined && message.language_code !== "") {
            writer.uint32(26).string(message.language_code);
        }
        if (message.postal_code !== undefined && message.postal_code !== "") {
            writer.uint32(34).string(message.postal_code);
        }
        if (message.sorting_code !== undefined && message.sorting_code !== "") {
            writer.uint32(42).string(message.sorting_code);
        }
        if (message.administrative_area !== undefined && message.administrative_area !== "") {
            writer.uint32(50).string(message.administrative_area);
        }
        if (message.locality !== undefined && message.locality !== "") {
            writer.uint32(58).string(message.locality);
        }
        if (message.sublocality !== undefined && message.sublocality !== "") {
            writer.uint32(66).string(message.sublocality);
        }
        if (message.address_lines !== undefined && message.address_lines.length !== 0) {
            for (const v of message.address_lines) {
                writer.uint32(74).string(v);
            }
        }
        if (message.recipients !== undefined && message.recipients.length !== 0) {
            for (const v of message.recipients) {
                writer.uint32(82).string(v);
            }
        }
        if (message.organization !== undefined && message.organization !== "") {
            writer.uint32(90).string(message.organization);
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
        const message = createBasePostalAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.revision = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.region_code = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.language_code = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.postal_code = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.sorting_code = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.administrative_area = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.locality = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.sublocality = reader.string();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    if (message.address_lines === undefined) {
                        message.address_lines = [];
                    }
                    message.address_lines.push(reader.string());
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    if (message.recipients === undefined) {
                        message.recipients = [];
                    }
                    message.recipients.push(reader.string());
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.organization = reader.string();
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
            revision: isSet(object.revision) ? Number(object.revision) : undefined,
            region_code: isSet(object.region_code) ? String(object.region_code) : undefined,
            language_code: isSet(object.language_code) ? String(object.language_code) : undefined,
            postal_code: isSet(object.postal_code) ? String(object.postal_code) : undefined,
            sorting_code: isSet(object.sorting_code) ? String(object.sorting_code) : undefined,
            administrative_area: isSet(object.administrative_area) ? String(object.administrative_area) : undefined,
            locality: isSet(object.locality) ? String(object.locality) : undefined,
            sublocality: isSet(object.sublocality) ? String(object.sublocality) : undefined,
            address_lines: Array.isArray(object?.address_lines) ? object.address_lines.map((e) => String(e)) : undefined,
            recipients: Array.isArray(object?.recipients) ? object.recipients.map((e) => String(e)) : undefined,
            organization: isSet(object.organization) ? String(object.organization) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.revision !== undefined && message.revision !== 0) {
            obj.revision = Math.round(message.revision);
        }
        if (message.region_code !== undefined && message.region_code !== "") {
            obj.region_code = message.region_code;
        }
        if (message.language_code !== undefined && message.language_code !== "") {
            obj.language_code = message.language_code;
        }
        if (message.postal_code !== undefined && message.postal_code !== "") {
            obj.postal_code = message.postal_code;
        }
        if (message.sorting_code !== undefined && message.sorting_code !== "") {
            obj.sorting_code = message.sorting_code;
        }
        if (message.administrative_area !== undefined && message.administrative_area !== "") {
            obj.administrative_area = message.administrative_area;
        }
        if (message.locality !== undefined && message.locality !== "") {
            obj.locality = message.locality;
        }
        if (message.sublocality !== undefined && message.sublocality !== "") {
            obj.sublocality = message.sublocality;
        }
        if (message.address_lines?.length) {
            obj.address_lines = message.address_lines;
        }
        if (message.recipients?.length) {
            obj.recipients = message.recipients;
        }
        if (message.organization !== undefined && message.organization !== "") {
            obj.organization = message.organization;
        }
        return obj;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
