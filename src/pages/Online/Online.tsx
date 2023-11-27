import { useState, useEffect } from "react";
import {
  Container,
  OfflineStatusIcon,
  OnlineStatusIcon,
} from "./OnlineStatusStyles";

const OnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [displayStyle, setDisplayStyle] = useState(isOnline ? "none" : "flex");

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setDisplayStyle("flex");

      setTimeout(() => {
        setDisplayStyle("none");
      }, 2000);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setDisplayStyle("flex");
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <Container display={displayStyle} bg={isOnline ? "" : "value"}>
      {isOnline && (
        <div>
          <OnlineStatusIcon />
          Welcome Back Online!!!
        </div>
      )}
      {!isOnline && (
        <div>
          <OfflineStatusIcon />
          You're Currrently Offline! Get Connected to enjoy a better User Experience
        </div>
      )}
    </Container>
  );
};

export default OnlineStatus;
