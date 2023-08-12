"use strict";
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.calendarPeriodToNumber = exports.calendarPeriodToJSON = exports.calendarPeriodFromJSON = exports.CalendarPeriod = void 0;
/**
 * A `CalendarPeriod` represents the abstract concept of a time period that has
 * a canonical start. Grammatically, "the start of the current
 * `CalendarPeriod`." All calendar times begin at midnight UTC.
 */
var CalendarPeriod;
(function (CalendarPeriod) {
    /** CALENDAR_PERIOD_UNSPECIFIED - Undefined period, raises an error. */
    CalendarPeriod["CALENDAR_PERIOD_UNSPECIFIED"] = "CALENDAR_PERIOD_UNSPECIFIED";
    /** DAY - A day. */
    CalendarPeriod["DAY"] = "DAY";
    /**
     * WEEK - A week. Weeks begin on Monday, following
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_week_date).
     */
    CalendarPeriod["WEEK"] = "WEEK";
    /**
     * FORTNIGHT - A fortnight. The first calendar fortnight of the year begins at the start
     * of week 1 according to
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_week_date).
     */
    CalendarPeriod["FORTNIGHT"] = "FORTNIGHT";
    /** MONTH - A month. */
    CalendarPeriod["MONTH"] = "MONTH";
    /**
     * QUARTER - A quarter. Quarters start on dates 1-Jan, 1-Apr, 1-Jul, and 1-Oct of each
     * year.
     */
    CalendarPeriod["QUARTER"] = "QUARTER";
    /** HALF - A half-year. Half-years start on dates 1-Jan and 1-Jul. */
    CalendarPeriod["HALF"] = "HALF";
    /** YEAR - A year. */
    CalendarPeriod["YEAR"] = "YEAR";
    CalendarPeriod["UNRECOGNIZED"] = "UNRECOGNIZED";
})(CalendarPeriod || (exports.CalendarPeriod = CalendarPeriod = {}));
function calendarPeriodFromJSON(object) {
    switch (object) {
        case 0:
        case "CALENDAR_PERIOD_UNSPECIFIED":
            return CalendarPeriod.CALENDAR_PERIOD_UNSPECIFIED;
        case 1:
        case "DAY":
            return CalendarPeriod.DAY;
        case 2:
        case "WEEK":
            return CalendarPeriod.WEEK;
        case 3:
        case "FORTNIGHT":
            return CalendarPeriod.FORTNIGHT;
        case 4:
        case "MONTH":
            return CalendarPeriod.MONTH;
        case 5:
        case "QUARTER":
            return CalendarPeriod.QUARTER;
        case 6:
        case "HALF":
            return CalendarPeriod.HALF;
        case 7:
        case "YEAR":
            return CalendarPeriod.YEAR;
        case -1:
        case "UNRECOGNIZED":
        default:
            return CalendarPeriod.UNRECOGNIZED;
    }
}
exports.calendarPeriodFromJSON = calendarPeriodFromJSON;
function calendarPeriodToJSON(object) {
    switch (object) {
        case CalendarPeriod.CALENDAR_PERIOD_UNSPECIFIED:
            return "CALENDAR_PERIOD_UNSPECIFIED";
        case CalendarPeriod.DAY:
            return "DAY";
        case CalendarPeriod.WEEK:
            return "WEEK";
        case CalendarPeriod.FORTNIGHT:
            return "FORTNIGHT";
        case CalendarPeriod.MONTH:
            return "MONTH";
        case CalendarPeriod.QUARTER:
            return "QUARTER";
        case CalendarPeriod.HALF:
            return "HALF";
        case CalendarPeriod.YEAR:
            return "YEAR";
        case CalendarPeriod.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.calendarPeriodToJSON = calendarPeriodToJSON;
function calendarPeriodToNumber(object) {
    switch (object) {
        case CalendarPeriod.CALENDAR_PERIOD_UNSPECIFIED:
            return 0;
        case CalendarPeriod.DAY:
            return 1;
        case CalendarPeriod.WEEK:
            return 2;
        case CalendarPeriod.FORTNIGHT:
            return 3;
        case CalendarPeriod.MONTH:
            return 4;
        case CalendarPeriod.QUARTER:
            return 5;
        case CalendarPeriod.HALF:
            return 6;
        case CalendarPeriod.YEAR:
            return 7;
        case CalendarPeriod.UNRECOGNIZED:
        default:
            return -1;
    }
}
exports.calendarPeriodToNumber = calendarPeriodToNumber;
