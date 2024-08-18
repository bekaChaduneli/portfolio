"use client";
import useMousePosition from "@/utils/useMousePosition";
import useCursorStore from "@/store/use-cursor-store";
import { motion } from "framer-motion";
import classNames from "classnames";
import { useLocale } from "next-intl";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function CursorAnimations() {
  const { isCursorActive, cursorText, cursorType, cursorBackground } =
    useCursorStore();
  const { x, y } = useMousePosition();
  const locale = useLocale();

  if (cursorType === "text") {
    return (
      <>
        <motion.div
          className="fixed z-[32] pointer-events-none hidden xl:block"
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
                  "  font-geom text-[20px]": locale === "en",
                  "font-firago text-[18px]": locale === "ka",
                }
              )}
            >
              {cursorText}
            </h1>
          </div>
        </motion.div>
      </>
    );
  } else if (cursorType === "gif") {
    return (
      <>
        <motion.div
          className="fixed z-[32] pointer-events-none hidden xl:block"
          style={{
            translateX: `${x && x}px`,
            translateY: `${y && y - 10}px`,
            transition: "transform 0.3s ease-out",
          }}
        >
          <div className=" rotate-[-4deg] relative pointer-events-none w-[110px] h-[140px] top-[-140px] left-[14px] ">
            <div
              className={classNames(
                "relative origin-bottom-left bg-cover transition-all scale-[0%] duration-500 overflow-hidden w-full border-[2px] border-primary h-full rounded-[8px]",
                {
                  "!scale-[100%] ": isCursorActive,
                }
              )}
            >
              <Image
                className="absolute h-full object-cover transition duration-300"
                src={cursorBackground}
                alt="gif"
                width={350}
                height={350}
              />
            </div>
          </div>
        </motion.div>
      </>
    );
  } else return null;
}
