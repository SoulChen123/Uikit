import CalendarLocale from "rc-picker/lib/locale/vi_VN";
import { PickerLocale } from "../type";

// Merge into a locale object
const locale: PickerLocale = {
  lang: {
    placeholder: "Chọn thời điểm",
    yearPlaceholder: "Chọn năm",
    quarterPlaceholder: "Chọn quý",
    monthPlaceholder: "Chọn tháng",
    weekPlaceholder: "Chọn tuần",
    rangePlaceholder: ["Ngày bắt đầu", "Ngày kết thúc"],
    rangeYearPlaceholder: ["Năm bắt đầu", "Năm kết thúc"],
    rangeQuarterPlaceholder: ["Quý bắt đầu", "Quý kết thúc"],
    rangeMonthPlaceholder: ["Tháng bắt đầu", "Tháng kết thúc"],
    rangeWeekPlaceholder: ["Tuần bắt đầu", "Tuần kết thúc"],
    ...CalendarLocale
  },
  timePickerLocale: {
    placeholder: "Chọn thời gian",
    rangePlaceholder: ["Thời gian bắt đầu", "Thời gian kết thúc"]
  }
};

export default locale;
