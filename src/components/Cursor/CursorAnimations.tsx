"use client";
import { useState, useEffect, useRef } from "react";
import useMousePosition from "@/utils/useMousePosition";
import useCursorStore from "@/store/use-cursor-store";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useProjectData } from "@/hooks/useProjectData";
import useCurrentProjectStore from "@/store/use-currentProject-store";
import usePageWidth from "@/hooks/usePageWidth";
import {
  laptopVariants,
  laptopWrapperVariant,
  textVariants,
} from "@/lib/siteData";
import FramerText from "../core/FramerText";

export default function CursorAnimations() {
  const { isCursorActive, cursorText, cursorType, cursorBackground } =
    useCursorStore();
  const { x, y } = useMousePosition();
  const locale = useLocale();
  const { backgrounds, headlines, descriptions, loading, error } =
    useProjectData(locale);
  const { currentProject } = useCurrentProjectStore();

  const [headlineTranslateY, setHeadlineTranslateY] = useState<number>(0);
  const [backgroundTranslateY, setBackgroundTranslateY] = useState<number>(0);
  const headlineRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  const isDesktop = usePageWidth("1280px");

  useEffect(() => {
    if (headlineRef.current) {
      const headlineHeight =
        isDesktop && locale === "en"
          ? 50
          : !isDesktop && locale === "en"
          ? 44
          : isDesktop
          ? 58
          : 43;
      setHeadlineTranslateY(
        currentProject ? -(currentProject - 1) * headlineHeight : 0
      );
    }
    if (backgroundRef.current) {
      const backgroundHeight = isDesktop ? 215 : 170;
      setBackgroundTranslateY(
        currentProject ? -(currentProject - 1) * backgroundHeight : 0
      );
    }
  }, [currentProject, locale]);

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
            className={cn(
              `absolute w-[110px] shadow-sm shadow-white dark:shadow-[#283d8b] overflow-hidden transition duration-300 scale-[0%] h-[78px] rounded-[30px] dark:bg-[#283d8b]/[0.92] bg-[#fff]/[0.91] backdrop-blur-[2px] left-[50%] top-[50%] -translate-x-[50%] rotate-[-32deg] -translate-y-[50%] `,
              isCursorActive && 
                "!scale-[99%] !rotate-[0deg]"
              
            )}
          >
            <h1
              className={cn(
                "whitespace-nowrap absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-44%] text-[#283d8b] dark:text-white capitalize font-bold",
               locale === "en" ?
                  "  font-geom text-[20px]" :  
                  "font-firago text-[18px]"
                )}
            >
              {cursorText}
            </h1>
          </div>
        </motion.div>
      </>
    );
  }

  if (cursorType === "framerText") {
    return (
      <motion.div
        className="fixed z-[32] pointer-events-none hidden md:block"
        style={{
          translateX: `${x && x}px`,
          translateY: `${y && y - 10}px`,
          transition: "transform 0.3s ease-out",
        }}
      >
        <div
          className={cn(
            `absolute flex items-center w-[200px] overflow-hidden transition duration-500 scale-[0%] h-[30px] rounded-[30px] bg-[#33897a] dark:bg-[#ff4545] left-[50%] top-[-12px] -translate-x-[50%] rotate-[-4deg] -translate-y-[50%] `,
            isCursorActive && 
              "!scale-[99%] !rotate-[0deg]"
            
          )}
        >
          <FramerText baseVelocity={locale === "en" ? -2.5 : -2.2}>
            <span
              className={cn(
                "text-[14px] xl:text-[16px] text-white dark:text-black leading-[110%]",
                locale === "en" ? "font-geom" : "font-firago"
              )}
            >
              {cursorText}
            </span>
          </FramerText>
        </div>
      </motion.div>
    );
  }

  if (cursorType === "gif") {
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
          <div className="rotate-[-4deg] relative pointer-events-none w-[110px] h-[140px] top-[-140px] left-[14px] ">
            <div
              className={cn(
                "relative origin-bottom-left bg-cover transition-all scale-[0%] duration-500 overflow-hidden w-full border-[2px] border-primary h-full rounded-[8px]",
                isCursorActive &&
                  "!scale-[100%] "
                
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
  }

  if (cursorType === "project") {
    return (
      <>
        <motion.div
          className="fixed z-[32] pointer-events-none hidden lg:block"
          style={{
            translateX: `${x && x}px`,
            translateY: `${y && y - 10}px`,
          }}
        >
          <motion.div
            variants={laptopWrapperVariant}
            initial="hidden"
            animate={isCursorActive ? "visible" : "active"}
            className="w-[692px] xl:w-[892px] origin-bottom flex justify-between relative pointer-events-none top-[-258px] xl:top-[-318px] left-[-345px] xl:left-[-440px] border-[1px] border-primary/20 rounded-[20px] px-[40px] py-[24px] dark:border-secondary/20 backdrop-blur-[6px] backdrop-saturate-[1.1] bg-secondary/80 dark:bg-primary/40"
          >
            <motion.div
              className="relative w-[340px] xl:w-[430px] origin-bottom h-auto z-[1] "
              variants={laptopVariants(isDesktop)}
              initial="hidden"
              animate={isCursorActive ? "visible" : "active"}
            >
              <Image
                src="/laptop.png"
                width={600}
                height={600}
                alt="laptop"
                className="relative w-full z-[2] origin-bottom transition-all duration-500 overflow-hidden h-auto"
              />
              <div
                ref={backgroundRef}
                className="absolute w-[80%] top-[2px] left-[34px] h-[170px] xl:top-[5px] xl:left-[43px] xl:h-[215px] bg-cover overflow-hidden z-[0]"
              >
                <div
                  className="w-full h-full"
                  style={{
                    transform: `translateY(${backgroundTranslateY}px)`,
                    transition: "transform 0.3s ease-out",
                  }}
                >
                  {backgrounds.map((background: string, index: number) => (
                    <Image
                      src={background}
                      key={index}
                      alt="background"
                      width={500}
                      height={500}
                      className={cn(
                        "h-full w-auto object-cover cover",
                        locale === "en"
                          ? "font-geom text-[24px] xl:text-[28px]"
                          : "font-firago text-[22px] xl:text-[32px]"
                      )}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div
              className="w-[240px] xl:w-[340px] overflow-hidden"
              variants={textVariants(isDesktop)}
              initial="hidden"
              animate={isCursorActive ? "visible" : "active"}
            >
              <div
                className={cn(
                  "py-[8px] overflow-hidden",
                  locale === "en"
                    ? "h-[48px] xl:h-[56px]"
                    : "h-[46px] xl:h-[62px]"
                )}
                ref={headlineRef}
              >
                <div
                  className="w-full"
                  style={{
                    transform: `translateY(${headlineTranslateY}px)`,
                    transition: "transform 0.3s ease-out",
                  }}
                >
                  {headlines.map((headline: string, index: number) => (
                    <h2
                      key={index}
                      className={cn(
                        "text-primary pb-[8px] dark:text-secondary",
                        locale === "en"
                          ? "font-geom text-[24px] xl:text-[28px]"
                          : "font-firago text-[22px] xl:text-[32px]"
                      )}
                    >
                      {headline}
                    </h2>
                  ))}
                </div>
              </div>
              <div className="mt-[6px] xl:mt-[12px]">
                {descriptions.map((description: string, index: number) => {
                  return (
                    <p
                      className={cn(
                        "text-primary text-[14px] xl:text-[16px] h-[105px] xl:h-[144px] overflow-hidden line-clamp-5 xl:line-clamp-6 dark:text-secondary",
                        currentProject === index + 1 ? "!block" : "!hidden"
                        
                      )}
                      key={index}
                    >
                      {description}
                    </p>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </>
    );
  }

  return null;
}
