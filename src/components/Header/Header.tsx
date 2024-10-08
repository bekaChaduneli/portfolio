"use client";

import { useState } from "react";
import { MaskText } from "../animations/MaskText";
import { useInView } from "react-intersection-observer";
import InfinityText from "../animations/InfinityText";
import useCursorStore from "@/store/use-cursor-store";
import { skills } from "@/lib/siteData";

import { HeaderInfos } from "./HeaderInfos";
import HeaderPopUp from "./HeaderPopUp";
import { useLocale, useTranslations } from "next-intl";
import { animateScroll as scroll } from "react-scroll";
import { cn } from "@/lib/utils";
import usePageWidth from "@/hooks/usePageWidth";

export default function Header() {
  const t = useTranslations("Home");
  const locale = useLocale();
  const isDesktop = usePageWidth("1440px");
  const isTablet = usePageWidth("768px");
  const isSmDesktop = usePageWidth("1024px");
  const {
    setIsCursorActive,
    setCursorBackground,
    setCursorText,
    setCursorType,
    onCloseAnimation,
  } = useCursorStore();
  const [scrollHover, setScrollHover] = useState(false);

  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  return (
    <div
      className={cn(
        "mt-[34px] sm:mt-[90px] md:mt-[100px] mb-[10px] lg:mb-[110px] xl:mb-[200px] flex items-center justify-center z-[0]",
        locale === "en"
          ? "lg:mt-[144px] xl:mt-[190px]"
          : "lg:mt-[174px] xl:mt-[220px]"
      )}
    >
      <div className="relative flex flex-col gap-[8px] py-[20px] md:py-[40px] lg:py-[110px] lg:w-[954px] xl:w-[1200px] justify-center items-center">
        <HeaderInfos scrollHover={scrollHover} />
        <HeaderPopUp />
        <div
          ref={ref}
          onClick={() => {
            isDesktop
              ? scroll.scrollTo(860, {
                  smooth: true,
                  duration: 700,
                })
              : isSmDesktop
              ? scroll.scrollTo(660, {
                  smooth: true,
                  duration: 700,
                })
              : isTablet
              ? scroll.scrollTo(510, {
                  smooth: true,
                  duration: 700,
                })
              : scroll.scrollTo(400, {
                  smooth: true,
                  duration: 700,
                });
          }}
          onMouseEnter={() => {
            setIsCursorActive(true);
            setCursorBackground("#e2d7c5");
            setCursorText(t("scroll"));
            setCursorType("text");
            setScrollHover(true);
          }}
          onMouseLeave={() => {
            setIsCursorActive(false);
            setScrollHover(false);
          }}
          className="cursor-pointer z-[1] flex flex-col items-center"
        >
          <div className="flex  flex-col items-center relative">
            <div className="">
              <div className="flex flex-col">
                <MaskText
                  index={0}
                  className={cn(
                    "text-[#203277] z-[1] dark:text-[#a9baff] capitalize",
                    locale === "en"
                      ? "text-[21.5vw] lg:text-[126px] xl:text-[164px] font-geom leading-[100%] font-extrabold"
                      : "text-[15vw] sm:text-[15.2vw] lg:text-[90px] xl:text-[114px] font-firago font-bold leading-[100%]"
                  )}
                  inView={inView}
                >
                  {t("header_name")}
                </MaskText>
                <MaskText
                  index={1}
                  className={cn(
                    "text-[#203277] !tracking-[0.6px] z-[1] dark:text-[#a9baff] capitalize",
                    locale === "en"
                      ? "text-[10.4vw] pl-[1.7%] lg:pl-0 lg:text-[62px] xl:text-[80.5px] font-geom leading-[112%] font-extrabold"
                      : "text-[10vw] md:text-[10.2vw] lg:text-[59px] xl:text-[75px] font-firago font-bold leading-[100%]"
                  )}
                  inView={inView}
                >
                  {t("profession")}
                </MaskText>
              </div>
            </div>
          </div>

          <div
            id="skills"
            className="max-w-[90vw] opacity-0 w-0 lg:max-w-[536px] xl:max-w-[684px] mt-[8px] sm:mt-[10px] lg:mt-[16px] py-[5px] sm:py-[6px] lg:py-[8px] rounded-[16px] sm:rounded-[20px] lg:rounded-[36px] md:rounded-[58px] border-[1px] border-[#203277] dark:border-[#a9baff] overflow-hidden"
          >
            <InfinityText
              texts={skills}
              className="text-[#203277] dark:text-[#a9baff] mr-[16px] flex items-center gap-[16px] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] capitalize"
              iconClassName="text-[#203277] dark:text-[#f7f2f2] w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] lg:w-[16px] lg:h-[16px]"
              baseVelocity={-0.8}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
