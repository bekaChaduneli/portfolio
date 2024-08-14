"use client";
import { useEffect } from "react";
import usePopUpStore from "@/store/use-popup-store";
import { useLenis } from "@studio-freight/react-lenis";
import useSoundStore from "@/store/use-sound-store";
import useSound from "use-sound";
import pop from "@/sounds/pop-down.mp3";

export default function PopUp() {
  const { isOpen, onClose } = usePopUpStore();
  const lenis = useLenis();
  const { sound } = useSoundStore();
  const [popDown] = useSound(pop);

  useEffect(() => {
    if (isOpen) {
      if (lenis) {
        // lenis.scrollTo(0, { duration: 0.3, easing: (t) => t });
        // Delay setting the body height until after the scroll completes
        // setTimeout(() => {
        //   document.body.style.overflow = "hidden";
        //   document.body.style.height = "100vh";
        // }, 300); // 500ms to match the scroll duration
      }
    } else {
      document.body.style.overflow = "";
      document.body.style.height = "";
    }
  }, [isOpen, lenis]);

  if (!isOpen) return null;

  return (
    <div
      onClick={() => {
        onClose();
        sound && popDown();
      }}
      className=" z-[10] inset-0 fixed bg-black/20 cursor-zoom-out"
    ></div>
  );
}
