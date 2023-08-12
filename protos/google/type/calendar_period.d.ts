/**
 * A `CalendarPeriod` represents the abstract concept of a time period that has
 * a canonical start. Grammatically, "the start of the current
 * `CalendarPeriod`." All calendar times begin at midnight UTC.
 */
export declare enum CalendarPeriod {
    /** CALENDAR_PERIOD_UNSPECIFIED - Undefined period, raises an error. */
    CALENDAR_PERIOD_UNSPECIFIED = "CALENDAR_PERIOD_UNSPECIFIED",
    /** DAY - A day. */
    DAY = "DAY",
    /**
     * WEEK - A week. Weeks begin on Monday, following
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_week_date).
     */
    WEEK = "WEEK",
    /**
     * FORTNIGHT - A fortnight. The first calendar fortnight of the year begins at the start
     * of week 1 according to
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_week_date).
     */
    FORTNIGHT = "FORTNIGHT",
    /** MONTH - A month. */
    MONTH = "MONTH",
    /**
     * QUARTER - A quarter. Quarters start on dates 1-Jan, 1-Apr, 1-Jul, and 1-Oct of each
     * year.
     */
    QUARTER = "QUARTER",
    /** HALF - A half-year. Half-years start on dates 1-Jan and 1-Jul. */
    HALF = "HALF",
    /** YEAR - A year. */
    YEAR = "YEAR",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function calendarPeriodFromJSON(object: any): CalendarPeriod;
export declare function calendarPeriodToJSON(object: CalendarPeriod): string;
export declare function calendarPeriodToNumber(object: CalendarPeriod): number;
