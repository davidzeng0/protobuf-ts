"use strict";
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.monthToJSON = exports.monthFromJSON = exports.Month = void 0;
/** Represents a month in the Gregorian calendar. */
var Month;
(function (Month) {
    /** MONTH_UNSPECIFIED - The unspecified month. */
    Month[Month["MONTH_UNSPECIFIED"] = 0] = "MONTH_UNSPECIFIED";
    /** JANUARY - The month of January. */
    Month[Month["JANUARY"] = 1] = "JANUARY";
    /** FEBRUARY - The month of February. */
    Month[Month["FEBRUARY"] = 2] = "FEBRUARY";
    /** MARCH - The month of March. */
    Month[Month["MARCH"] = 3] = "MARCH";
    /** APRIL - The month of April. */
    Month[Month["APRIL"] = 4] = "APRIL";
    /** MAY - The month of May. */
    Month[Month["MAY"] = 5] = "MAY";
    /** JUNE - The month of June. */
    Month[Month["JUNE"] = 6] = "JUNE";
    /** JULY - The month of July. */
    Month[Month["JULY"] = 7] = "JULY";
    /** AUGUST - The month of August. */
    Month[Month["AUGUST"] = 8] = "AUGUST";
    /** SEPTEMBER - The month of September. */
    Month[Month["SEPTEMBER"] = 9] = "SEPTEMBER";
    /** OCTOBER - The month of October. */
    Month[Month["OCTOBER"] = 10] = "OCTOBER";
    /** NOVEMBER - The month of November. */
    Month[Month["NOVEMBER"] = 11] = "NOVEMBER";
    /** DECEMBER - The month of December. */
    Month[Month["DECEMBER"] = 12] = "DECEMBER";
    Month[Month["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Month = exports.Month || (exports.Month = {}));
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
