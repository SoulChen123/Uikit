import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import WS from "../services/ws";

const useWebsocket = (isAuthentication?: boolean) => {
  const io = React.useRef<WS>();

  const [payload, setPayload] = useState<any>();

  const creatWebSocket = () => {
    try {
      io.current = new WS(isAuthentication);
      io.current.forbidReconnect = false;
      io.current.subscribe(setPayload);
    } catch (error) {
      console.error(error);
    }
  };

  const closeWebsocket = () => {
    if (io.current) {
      io.current.unsubscribe(setPayload);
      io.current.forbidReconnect = true;
      io.current.onclose();
    }
  };

  useEffect(() => {
    creatWebSocket();
    return () => {
      closeWebsocket();
    };
  }, []);

  return { io: io.current, payload };
};

export default useWebsocket;
