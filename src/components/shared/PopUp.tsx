"use client";
import { useCallback, useEffect } from "react";
import usePopUpStore from "@/store/use-popup-store";
import useSoundStore from "@/store/use-sound-store";
import useSound from "use-sound";
import pop from "@/sounds/pop-down.mp3";
import { animateScroll as scroll } from "react-scroll";

export default function PopUp() {
  const { isOpen, onClose } = usePopUpStore();
  const { sound } = useSoundStore();
  const [popDown] = useSound(pop);

  useEffect(() => {
    if (isOpen) {
      scroll.scrollToTop({
        duration: 300,
        smooth: true,
      });

      setTimeout(() => {
        document.body.style.overflow = "hidden";
        document.body.style.height = "100vh";
      }, 300);
    } else {
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
      sound && popDown();
    }
  }, [isOpen]);

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    });
  }, []);

  if (!isOpen) return null;

  return (
    <div
      onClick={() => {
        onClose();
      }}
      className=" z-[10] inset-0 fixed bg-black/20 cursor-zoom-out"
    ></div>
  );
}
