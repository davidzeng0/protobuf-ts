/** Represents a month in the Gregorian calendar. */
export declare enum Month {
    /** MONTH_UNSPECIFIED - The unspecified month. */
    MONTH_UNSPECIFIED = "MONTH_UNSPECIFIED",
    /** JANUARY - The month of January. */
    JANUARY = "JANUARY",
    /** FEBRUARY - The month of February. */
    FEBRUARY = "FEBRUARY",
    /** MARCH - The month of March. */
    MARCH = "MARCH",
    /** APRIL - The month of April. */
    APRIL = "APRIL",
    /** MAY - The month of May. */
    MAY = "MAY",
    /** JUNE - The month of June. */
    JUNE = "JUNE",
    /** JULY - The month of July. */
    JULY = "JULY",
    /** AUGUST - The month of August. */
    AUGUST = "AUGUST",
    /** SEPTEMBER - The month of September. */
    SEPTEMBER = "SEPTEMBER",
    /** OCTOBER - The month of October. */
    OCTOBER = "OCTOBER",
    /** NOVEMBER - The month of November. */
    NOVEMBER = "NOVEMBER",
    /** DECEMBER - The month of December. */
    DECEMBER = "DECEMBER",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function monthFromJSON(object: any): Month;
export declare function monthToJSON(object: Month): string;
export declare function monthToNumber(object: Month): number;
