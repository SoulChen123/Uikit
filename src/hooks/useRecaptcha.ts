import { useContext } from "react";
import { Context } from "../providers/RecaptchaProvider";

const useRecaptcha = () => useContext(Context);

export default useRecaptcha;
