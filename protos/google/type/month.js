"use strict";
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.monthToNumber = exports.monthToJSON = exports.monthFromJSON = exports.Month = void 0;
/** Represents a month in the Gregorian calendar. */
var Month;
(function (Month) {
    /** MONTH_UNSPECIFIED - The unspecified month. */
    Month["MONTH_UNSPECIFIED"] = "MONTH_UNSPECIFIED";
    /** JANUARY - The month of January. */
    Month["JANUARY"] = "JANUARY";
    /** FEBRUARY - The month of February. */
    Month["FEBRUARY"] = "FEBRUARY";
    /** MARCH - The month of March. */
    Month["MARCH"] = "MARCH";
    /** APRIL - The month of April. */
    Month["APRIL"] = "APRIL";
    /** MAY - The month of May. */
    Month["MAY"] = "MAY";
    /** JUNE - The month of June. */
    Month["JUNE"] = "JUNE";
    /** JULY - The month of July. */
    Month["JULY"] = "JULY";
    /** AUGUST - The month of August. */
    Month["AUGUST"] = "AUGUST";
    /** SEPTEMBER - The month of September. */
    Month["SEPTEMBER"] = "SEPTEMBER";
    /** OCTOBER - The month of October. */
    Month["OCTOBER"] = "OCTOBER";
    /** NOVEMBER - The month of November. */
    Month["NOVEMBER"] = "NOVEMBER";
    /** DECEMBER - The month of December. */
    Month["DECEMBER"] = "DECEMBER";
    Month["UNRECOGNIZED"] = "UNRECOGNIZED";
})(Month || (exports.Month = Month = {}));
function monthFromJSON(object) {
    switch (object) {
        case 0:
        case "MONTH_UNSPECIFIED":
            return Month.MONTH_UNSPECIFIED;
        case 1:
        case "JANUARY":
            return Month.JANUARY;
        case 2:
        case "FEBRUARY":
            return Month.FEBRUARY;
        case 3:
        case "MARCH":
            return Month.MARCH;
        case 4:
        case "APRIL":
            return Month.APRIL;
        case 5:
        case "MAY":
            return Month.MAY;
        case 6:
        case "JUNE":
            return Month.JUNE;
        case 7:
        case "JULY":
            return Month.JULY;
        case 8:
        case "AUGUST":
            return Month.AUGUST;
        case 9:
        case "SEPTEMBER":
            return Month.SEPTEMBER;
        case 10:
        case "OCTOBER":
            return Month.OCTOBER;
        case 11:
        case "NOVEMBER":
            return Month.NOVEMBER;
        case 12:
        case "DECEMBER":
            return Month.DECEMBER;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Month.UNRECOGNIZED;
    }
}
exports.monthFromJSON = monthFromJSON;
function monthToJSON(object) {
    switch (object) {
        case Month.MONTH_UNSPECIFIED:
            return "MONTH_UNSPECIFIED";
        case Month.JANUARY:
            return "JANUARY";
        case Month.FEBRUARY:
            return "FEBRUARY";
        case Month.MARCH:
            return "MARCH";
        case Month.APRIL:
            return "APRIL";
        case Month.MAY:
            return "MAY";
        case Month.JUNE:
            return "JUNE";
        case Month.JULY:
            return "JULY";
        case Month.AUGUST:
            return "AUGUST";
        case Month.SEPTEMBER:
            return "SEPTEMBER";
        case Month.OCTOBER:
            return "OCTOBER";
        case Month.NOVEMBER:
            return "NOVEMBER";
        case Month.DECEMBER:
            return "DECEMBER";
        case Month.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.monthToJSON = monthToJSON;
function monthToNumber(object) {
    switch (object) {
        case Month.MONTH_UNSPECIFIED:
            return 0;
        case Month.JANUARY:
            return 1;
        case Month.FEBRUARY:
            return 2;
        case Month.MARCH:
            return 3;
        case Month.APRIL:
            return 4;
        case Month.MAY:
            return 5;
        case Month.JUNE:
            return 6;
        case Month.JULY:
            return 7;
        case Month.AUGUST:
            return 8;
        case Month.SEPTEMBER:
            return 9;
        case Month.OCTOBER:
            return 10;
        case Month.NOVEMBER:
            return 11;
        case Month.DECEMBER:
            return 12;
        case Month.UNRECOGNIZED:
        default:
            return -1;
    }
}
exports.monthToNumber = monthToNumber;
