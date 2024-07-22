import { isBrowser } from "../utils/dom";
import { useState } from "react";
import { INetwork } from "../types";
import useSafeLayoutEffect from "./useSafeLayoutEffect";
import pubsub from "pubsub-js";
import { NETWORK_STATUS } from "../types/enum";

const useNetwork = () => {
  const [network, setNetwork] = useState<INetwork | undefined>(
    isBrowser ? (navigator.onLine ? "online" : "offline") : undefined
  );

  const emit = (e: Event) => {
    setNetwork(e.type as INetwork);
    pubsub.publish(NETWORK_STATUS.EVENT, e.type);
  };

  useSafeLayoutEffect(() => {
    window.addEventListener("online", emit);
    window.addEventListener("offline", emit);

    return () => {
      window.removeEventListener("online", emit);
      window.removeEventListener("offline", emit);
    };
  }, []);

  return network;
};

export default useNetwork;
