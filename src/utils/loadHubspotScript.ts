import { isBrowser } from "./dom";

const loadHubspotScript = () => {
  if (!isBrowser) return;
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "//js.hs-scripts.com/20429114.js";
  script.id = "hs-script-loader";
  script.async = true;
  script.defer = true;
  document.body.appendChild(script);
};

export default loadHubspotScript;
