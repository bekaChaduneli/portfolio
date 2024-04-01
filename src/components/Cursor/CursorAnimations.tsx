"use client";
import { useEffect, useState } from "react";
import useMousePosition from "@/utils/useMousePosition";
import useCursorStore from "@/store/use-cursor-store";
import { motion } from "framer-motion";
import classNames from "classnames";
import Image from "next/image";

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
      className="fixed z-[10] pointer-events-none"
      style={{
        translateX: `${x && x}px`,
        translateY: `${y && y - 10}px`,
        transition: "transform 0.3s ease-out",
      }}
    >
      <div
        className={classNames(
          `absolute w-[110px] shadow-sm shadow-white dark:shadow-[#283d8b] overflow-hidden transition duration-300 scale-[0%] h-[78px] rounded-[30px] dark:bg-[#283d8b]/[0.92] bg-[#fff]/[0.91] backdrop-blur-[2px] left-[50%] top-[50%] -translate-x-[50%] rotate-[-32deg] -translate-y-[50%] `,
          {
            "!scale-[99%] !rotate-[0deg]": isCursorActive,
          }
        )}
      >
        <h1
          className={classNames(
            "whitespace-nowrap absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-44%] text-[#283d8b] dark:text-white capitalize font-bold",
            {
              "": isCursorActive,
              "  font-geom text-[20px]": langAttribute === "en",
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
