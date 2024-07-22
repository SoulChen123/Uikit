import CalendarLocale from "rc-picker/lib/locale/ko_KR";
import { PickerLocale } from "../type";

// Merge into a locale object
const locale: PickerLocale = {
  lang: {
    placeholder: "날짜 선택",
    rangePlaceholder: ["시작일", "종료일"],
    ...CalendarLocale
  },
  timePickerLocale: {
    placeholder: "시간 선택",
    rangePlaceholder: ["시작 시간", "종료 시간"]
  }
};

export default locale;
