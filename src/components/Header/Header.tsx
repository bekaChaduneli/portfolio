"use client";

import classNames from "classnames";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { MaskText } from "../animations/MaskText";
import { useInView } from "react-intersection-observer";
import InfinityText from "../animations/InfinityText";
import useCursorStore from "@/store/use-cursor-store";
import { skills } from "@/lib/siteData";

import { HeaderInfos } from "./HeaderInfos";

export default function Header() {
  const { t } = useTranslation();
  const htmlTag = document.documentElement;
  const langAttribute = htmlTag.getAttribute("lang");
  const { setIsCursorActive, setCursorBackground, setCursorText } =
    useCursorStore();
  const [scrollHover, setScrollHover] = useState(false);

  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });
  const scrollBottom = () => {
    const targetScroll = 660;
    console.log(targetScroll);

    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-[80px] sm:mt-[90px] md:mt-[100px] lg:mt-[144px] xl:mt-[160px] flex items-center justify-center z-[0]">
      <div className="relative flex flex-col gap-[8px] py-[20px] md:py-[40px] lg:py-[110px] lg:w-[954px] xl:w-[1200px] justify-center items-center">
        <HeaderInfos scrollHover={scrollHover} t={t} />
        <div
          ref={ref}
          onClick={() => scrollBottom}
          onMouseEnter={() => {
            setIsCursorActive(true);
            setCursorBackground("#e2d7c5");
            setCursorText(t("scroll"));
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
              <p>
                <MaskText
                  index={0}
                  className={classNames(
                    "text-[#203277] z-[1] dark:text-[#a9baff] capitalize",
                    {
                      "text-[21.5vw] lg:text-[126px] xl:text-[164px] font-geom leading-[100%] font-extrabold":
                        langAttribute === "en",
                      "text-[15vw] sm:text-[15.2vw] lg:text-[90px] xl:text-[114px] font-firago font-bold leading-[100%]":
                        langAttribute === "ka",
                    }
                  )}
                  inView={inView}
                >
                  {t("header_name")}
                </MaskText>
                <MaskText
                  index={1}
                  className={classNames(
                    "text-[#203277] z-[1] dark:text-[#a9baff] capitalize",
                    {
                      "text-[10.4vw] pl-[1.7%] lg:pl-0 lg:text-[62px] xl:text-[80.5px] font-geom leading-[112%] font-extrabold":
                        langAttribute === "en",
                      "text-[10vw] md:text-[10.2vw] lg:text-[59px] xl:text-[75px] font-firago font-bold leading-[100%]":
                        langAttribute === "ka",
                    }
                  )}
                  inView={inView}
                >
                  {t("profession")}
                </MaskText>
              </p>
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
