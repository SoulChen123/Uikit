import { useContext } from "react";
import { LocalizationContext } from "../providers/Localization";

const useLocalization = () => useContext(LocalizationContext);

export default useLocalization;
