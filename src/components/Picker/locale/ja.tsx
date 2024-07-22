import CalendarLocale from "rc-picker/lib/locale/ja_JP";
import { PickerLocale } from "../type";

const locale: PickerLocale = {
  lang: {
    placeholder: "日付を選択",
    rangePlaceholder: ["開始日付", "終了日付"],
    ...CalendarLocale
  },
  timePickerLocale: {
    placeholder: "時間を選択",
    rangePlaceholder: ["開始時間", "終了時間"]
  }
};

export default locale;
