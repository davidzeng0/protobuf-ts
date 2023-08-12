/** Represents a day of the week. */
export declare enum DayOfWeek {
    /** DAY_OF_WEEK_UNSPECIFIED - The day of the week is unspecified. */
    DAY_OF_WEEK_UNSPECIFIED = "DAY_OF_WEEK_UNSPECIFIED",
    /** MONDAY - Monday */
    MONDAY = "MONDAY",
    /** TUESDAY - Tuesday */
    TUESDAY = "TUESDAY",
    /** WEDNESDAY - Wednesday */
    WEDNESDAY = "WEDNESDAY",
    /** THURSDAY - Thursday */
    THURSDAY = "THURSDAY",
    /** FRIDAY - Friday */
    FRIDAY = "FRIDAY",
    /** SATURDAY - Saturday */
    SATURDAY = "SATURDAY",
    /** SUNDAY - Sunday */
    SUNDAY = "SUNDAY",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function dayOfWeekFromJSON(object: any): DayOfWeek;
export declare function dayOfWeekToJSON(object: DayOfWeek): string;
export declare function dayOfWeekToNumber(object: DayOfWeek): number;
