"use strict";
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.dayOfWeekToNumber = exports.dayOfWeekToJSON = exports.dayOfWeekFromJSON = exports.DayOfWeek = void 0;
/** Represents a day of the week. */
var DayOfWeek;
(function (DayOfWeek) {
    /** DAY_OF_WEEK_UNSPECIFIED - The day of the week is unspecified. */
    DayOfWeek["DAY_OF_WEEK_UNSPECIFIED"] = "DAY_OF_WEEK_UNSPECIFIED";
    /** MONDAY - Monday */
    DayOfWeek["MONDAY"] = "MONDAY";
    /** TUESDAY - Tuesday */
    DayOfWeek["TUESDAY"] = "TUESDAY";
    /** WEDNESDAY - Wednesday */
    DayOfWeek["WEDNESDAY"] = "WEDNESDAY";
    /** THURSDAY - Thursday */
    DayOfWeek["THURSDAY"] = "THURSDAY";
    /** FRIDAY - Friday */
    DayOfWeek["FRIDAY"] = "FRIDAY";
    /** SATURDAY - Saturday */
    DayOfWeek["SATURDAY"] = "SATURDAY";
    /** SUNDAY - Sunday */
    DayOfWeek["SUNDAY"] = "SUNDAY";
    DayOfWeek["UNRECOGNIZED"] = "UNRECOGNIZED";
})(DayOfWeek || (exports.DayOfWeek = DayOfWeek = {}));
function dayOfWeekFromJSON(object) {
    switch (object) {
        case 0:
        case "DAY_OF_WEEK_UNSPECIFIED":
            return DayOfWeek.DAY_OF_WEEK_UNSPECIFIED;
        case 1:
        case "MONDAY":
            return DayOfWeek.MONDAY;
        case 2:
        case "TUESDAY":
            return DayOfWeek.TUESDAY;
        case 3:
        case "WEDNESDAY":
            return DayOfWeek.WEDNESDAY;
        case 4:
        case "THURSDAY":
            return DayOfWeek.THURSDAY;
        case 5:
        case "FRIDAY":
            return DayOfWeek.FRIDAY;
        case 6:
        case "SATURDAY":
            return DayOfWeek.SATURDAY;
        case 7:
        case "SUNDAY":
            return DayOfWeek.SUNDAY;
        case -1:
        case "UNRECOGNIZED":
        default:
            return DayOfWeek.UNRECOGNIZED;
    }
}
exports.dayOfWeekFromJSON = dayOfWeekFromJSON;
function dayOfWeekToJSON(object) {
    switch (object) {
        case DayOfWeek.DAY_OF_WEEK_UNSPECIFIED:
            return "DAY_OF_WEEK_UNSPECIFIED";
        case DayOfWeek.MONDAY:
            return "MONDAY";
        case DayOfWeek.TUESDAY:
            return "TUESDAY";
        case DayOfWeek.WEDNESDAY:
            return "WEDNESDAY";
        case DayOfWeek.THURSDAY:
            return "THURSDAY";
        case DayOfWeek.FRIDAY:
            return "FRIDAY";
        case DayOfWeek.SATURDAY:
            return "SATURDAY";
        case DayOfWeek.SUNDAY:
            return "SUNDAY";
        case DayOfWeek.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.dayOfWeekToJSON = dayOfWeekToJSON;
function dayOfWeekToNumber(object) {
    switch (object) {
        case DayOfWeek.DAY_OF_WEEK_UNSPECIFIED:
            return 0;
        case DayOfWeek.MONDAY:
            return 1;
        case DayOfWeek.TUESDAY:
            return 2;
        case DayOfWeek.WEDNESDAY:
            return 3;
        case DayOfWeek.THURSDAY:
            return 4;
        case DayOfWeek.FRIDAY:
            return 5;
        case DayOfWeek.SATURDAY:
            return 6;
        case DayOfWeek.SUNDAY:
            return 7;
        case DayOfWeek.UNRECOGNIZED:
        default:
            return -1;
    }
}
exports.dayOfWeekToNumber = dayOfWeekToNumber;
