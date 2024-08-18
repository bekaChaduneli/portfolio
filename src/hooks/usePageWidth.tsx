import { useState, useEffect } from "react";

const usePageWidth = (size: string) => {
  const [isCorrectSize, setIsCorrectSize] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${size})`);

    const updateIsCorrectSize = (e: any) => setIsCorrectSize(e.matches);

    updateIsCorrectSize(mediaQuery);

    mediaQuery.addEventListener("change", updateIsCorrectSize);

    return () => mediaQuery.removeEventListener("change", updateIsCorrectSize);
  }, []);

  return isCorrectSize;
};

export default usePageWidth;
