import { useEffect } from "react";

export const useDisableOverflow = (isOpen: boolean) => {
  useEffect(() => {
    const originalHeight = window.getComputedStyle(document.body).height;

    if (isOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
      document.body.style.height = "auto";
    }

    return () => {
      document.body.style.height = originalHeight;
    };
  }, [isOpen]);
};
