"use client";
import { useEffect, useState } from "react";
import useMousePosition from "@/utils/useMousePosition";
import useCursorStore from "@/store/use-cursor-store";
import { motion } from "framer-motion";
import classNames from "classnames";

export default function CursorAnimations() {
  const { isCursorActive, cursorText } = useCursorStore();
  const { x, y } = useMousePosition();
  const [langAttribute, setLangAttribute] = useState<string>("");

  useEffect(() => {
    const htmlTag = document.documentElement;
    const lang = htmlTag.getAttribute("lang");
    setLangAttribute(lang ? lang : "en");
  }, []);
  return (
    <motion.div
      className="fixed z-[9999] pointer-events-none"
      style={{
        translateX: `${x && x}px`,
        translateY: `${y && y - 20}px`,
        transition: "transform 0.3s ease-out", // Adjust the duration and easing as needed
      }}
    >
      <div
        className={classNames(
          `absolute w-[100px] transition duration-300 scale-[0%] h-[100px] rounded-full bg-[#283d8b]/[60%] dark:bg-[#fff]/[40%] backdrop-blur-[6px] left-[50%] top-[50%] -translate-x-[50%] rotate-[-32deg] -translate-y-[50%] `,
          {
            "!scale-[99%] !rotate-[0deg]": isCursorActive,
          }
        )}
      >
        <h1
          className={classNames(
            "whitespace-nowrap absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-34%] text-white capitalize font-bold",
            {
              "": isCursorActive,
              "font-graphik text-[20px]": langAttribute === "en",
              "font-firago text-[18px]": langAttribute === "ka",
            }
          )}
        >
          {cursorText}
        </h1>
      </div>
    </motion.div>
  );
}
