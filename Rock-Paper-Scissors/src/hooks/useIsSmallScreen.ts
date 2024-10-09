import { useState, useEffect } from "react";

export default function useIsSmallScreen() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 800);

  useEffect(() => {
    const handleResize = () => {
      const isSmall = window.innerWidth < 800;
      if (isSmall !== isSmallScreen) {
        setIsSmallScreen(isSmall);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isSmallScreen]);

  return isSmallScreen;
}
