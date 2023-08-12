/** Represents a day of the week. */
export declare enum DayOfWeek {
    /** DAY_OF_WEEK_UNSPECIFIED - The day of the week is unspecified. */
    DAY_OF_WEEK_UNSPECIFIED = 0,
    /** MONDAY - Monday */
    MONDAY = 1,
    /** TUESDAY - Tuesday */
    TUESDAY = 2,
    /** WEDNESDAY - Wednesday */
    WEDNESDAY = 3,
    /** THURSDAY - Thursday */
    THURSDAY = 4,
    /** FRIDAY - Friday */
    FRIDAY = 5,
    /** SATURDAY - Saturday */
    SATURDAY = 6,
    /** SUNDAY - Sunday */
    SUNDAY = 7,
    UNRECOGNIZED = -1
}
export declare function dayOfWeekFromJSON(object: any): DayOfWeek;
export declare function dayOfWeekToJSON(object: DayOfWeek): string;
