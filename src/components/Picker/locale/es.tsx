import CalendarLocale from "rc-picker/lib/locale/es_ES";
import { PickerLocale } from "../type";

const locale: PickerLocale = {
  lang: {
    placeholder: "Seleccionar fecha",
    rangePlaceholder: ["Fecha inicial", "Fecha final"],
    ...CalendarLocale
  },
  timePickerLocale: {
    placeholder: "Seleccionar hora"
  }
};

export default locale;
