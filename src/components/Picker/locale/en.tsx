import CalendarLocale from "rc-picker/lib/locale/en_US";
import { PickerLocale } from "../type";

// Merge into a locale object
const locale: PickerLocale = {
  lang: {
    placeholder: "Select date",
    yearPlaceholder: "Select year",
    quarterPlaceholder: "Select quarter",
    monthPlaceholder: "Select month",
    weekPlaceholder: "Select week",
    rangePlaceholder: ["Start date", "End date"],
    rangeYearPlaceholder: ["Start year", "End year"],
    rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
    rangeMonthPlaceholder: ["Start month", "End month"],
    rangeWeekPlaceholder: ["Start week", "End week"],
    ...CalendarLocale
  },
  timePickerLocale: {
    placeholder: "Select time",
    rangePlaceholder: ["Start time", "End time"]
  }
};

export default locale;
