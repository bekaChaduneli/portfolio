"use client";
import React from "react";
import useMousePosition from "@/utils/useMousePosition";
import useCursorStore from "@/store/use-cursor-store";
import { motion } from "framer-motion";
import classNames from "classnames";

const CursorAnimations: React.FC = () => {
  const { isCursorActive, cursorText, cursorBackground } = useCursorStore();
  const { x, y } = useMousePosition();
  const size = isCursorActive ? 400 : 40;

  return (
    <motion.div
      className={classNames(
        "fixed z-50 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 opacity-0 invisible",
        {
          "opacity-100 visible": isCursorActive,
        }
      )}
      style={{
        WebkitMaskPosition: `${x && x - size / 2}px ${y && y - size / 2}px`,
        WebkitMaskSize: `${size}px`,
        transition: "transform 0.1s cubic-bezier(0.5, 0, 0.25, 1)",
      }}
    >
      <div
        className={classNames(
          "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 rotate-[-15deg] flex items-center justify-center w-24 overflow-hidden rounded-full text-lg transition-transform duration-200 ease-in-out",
          {
            "scale-100 rotate-[-15deg]": isCursorActive,
          }
        )}
      >
        <div
          className={classNames(
            `absolute left-1/2 w-full h-full top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-0 bg-white rounded-full transition-transform duration-200 ease-in-out`,
            {
              "rotate-0": !isCursorActive,
            }
          )}
        ></div>
        <span
          className={classNames(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[15deg] text-black p-2 transition-transform duration-200 ease-in-out",
            {
              "rotate-[15deg]": !isCursorActive,
            }
          )}
        >
          {cursorText}
        </span>
        <span
          className={classNames(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[15deg] text-black p-2 transition-transform duration-200 ease-in-out",
            {
              "rotate-[15deg]": !isCursorActive,
            }
          )}
        >
          Drag
        </span>
      </div>
    </motion.div>
  );
};

export default CursorAnimations;
