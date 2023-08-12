/** Represents a month in the Gregorian calendar. */
export declare enum Month {
    /** MONTH_UNSPECIFIED - The unspecified month. */
    MONTH_UNSPECIFIED = 0,
    /** JANUARY - The month of January. */
    JANUARY = 1,
    /** FEBRUARY - The month of February. */
    FEBRUARY = 2,
    /** MARCH - The month of March. */
    MARCH = 3,
    /** APRIL - The month of April. */
    APRIL = 4,
    /** MAY - The month of May. */
    MAY = 5,
    /** JUNE - The month of June. */
    JUNE = 6,
    /** JULY - The month of July. */
    JULY = 7,
    /** AUGUST - The month of August. */
    AUGUST = 8,
    /** SEPTEMBER - The month of September. */
    SEPTEMBER = 9,
    /** OCTOBER - The month of October. */
    OCTOBER = 10,
    /** NOVEMBER - The month of November. */
    NOVEMBER = 11,
    /** DECEMBER - The month of December. */
    DECEMBER = 12,
    UNRECOGNIZED = -1
}
export declare function monthFromJSON(object: any): Month;
export declare function monthToJSON(object: Month): string;
