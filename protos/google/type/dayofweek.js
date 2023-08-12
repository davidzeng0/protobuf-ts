"use strict";
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.dayOfWeekToJSON = exports.dayOfWeekFromJSON = exports.DayOfWeek = void 0;
/** Represents a day of the week. */
var DayOfWeek;
(function (DayOfWeek) {
    /** DAY_OF_WEEK_UNSPECIFIED - The day of the week is unspecified. */
    DayOfWeek[DayOfWeek["DAY_OF_WEEK_UNSPECIFIED"] = 0] = "DAY_OF_WEEK_UNSPECIFIED";
    /** MONDAY - Monday */
    DayOfWeek[DayOfWeek["MONDAY"] = 1] = "MONDAY";
    /** TUESDAY - Tuesday */
    DayOfWeek[DayOfWeek["TUESDAY"] = 2] = "TUESDAY";
    /** WEDNESDAY - Wednesday */
    DayOfWeek[DayOfWeek["WEDNESDAY"] = 3] = "WEDNESDAY";
    /** THURSDAY - Thursday */
    DayOfWeek[DayOfWeek["THURSDAY"] = 4] = "THURSDAY";
    /** FRIDAY - Friday */
    DayOfWeek[DayOfWeek["FRIDAY"] = 5] = "FRIDAY";
    /** SATURDAY - Saturday */
    DayOfWeek[DayOfWeek["SATURDAY"] = 6] = "SATURDAY";
    /** SUNDAY - Sunday */
    DayOfWeek[DayOfWeek["SUNDAY"] = 7] = "SUNDAY";
    DayOfWeek[DayOfWeek["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
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
