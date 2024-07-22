import { isBrowser } from "./dom";

const loadAdsScript = () => {
  if (!isBrowser) return;
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "https://ads.avocet.io/s?add=6167df136cfd4e112259211b&ty=j";
  script.async = true;
  script.defer = true;
  document.body.appendChild(script);
};

export default loadAdsScript;
