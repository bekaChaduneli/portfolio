"use client";

import { IMainProjectsResponse } from "@/types/mainProjects";
import { GET_MAINPROJECTS } from "@/utils/apolloQuerys";
import { useQuery } from "@apollo/client";
import MainProjects from "./MainProjects";
import { useLocale, useTranslations } from "next-intl";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { MaskText } from "../animations/MaskText";
import { cn } from "@/lib/utils";
import { Icons } from "../shared/Icons";
import NavigationLink from "../Navbar/NavigationLink";
import { FlipLink } from "../animations/text-effect";
import usePageWidth from "@/hooks/usePageWidth";

export default function MainProjectsWrapper() {
  const [currentType, setCurrentType] = useState("any");
  const isTablet = usePageWidth("768px");
  const { data, loading, error } = useQuery<IMainProjectsResponse>(
    GET_MAINPROJECTS,
    {
      variables: {
        skip: 0,
        take: isTablet ? 8 : 5,
        createdAt: "asc",
        isReal:
          currentType === "any" ? true : currentType === "real" ? true : false,
        orIsReal:
          currentType === "any" ? false : currentType === "real" ? true : false,
      },
    }
  );

  const locale = useLocale();
  const t = useTranslations("MainProjects");
  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  const { ref: serviceWrapperRef, inView: serviceWrapperInView } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });
  const scaleVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const iconScaleVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        delay: 0.4,
      },
    },
  };
  const { ref: flipLinkRef, inView: flipLinkInView } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(data);
  return (
    <div className="flex flex-col items-center px-[20px] md:px-[40px]">
      <motion.div
        ref={ref}
        className="flex justify-center items-center gap-[12px] lg:gap-[16px] xl:gap-[22px] z-[1] mb-[40px] md:mb-[66px] lg:mb-[100px]"
      >
        <MaskText
          index={0}
          delay={0.1}
          inView={inView}
          className={cn(
            "text-primary dark:text-secondary md:text-[48px] lg:text-[58px] xl:text-[70px]",
            locale === "en"
              ? "font-geom text-[36px] "
              : "font-firago text-[23px] min-[500px]:text-[30px]"
          )}
        >
          {t("main")}
        </MaskText>
        <motion.div
          ref={serviceWrapperRef}
          initial="hidden"
          animate={serviceWrapperInView ? "visible" : "hidden"}
          exit="exit"
          variants={scaleVariants}
          className={cn(
            "px-[16px] md:px-[20px] lg:px-[24px] xl:px-[30px] py-[6px] md:py-[8px] xl:py-[10px] rounded-[46px] md:rounded-[50px] lg:rounded-[60px] bg-primary/90 dark:bg-[#131c3e]/70 dark:border-[2px] backdrop-blur-lg border-[1px] border-primary flex items-center gap-[12px] md:gap-[15px] xl:gap-[18px] text-secondary text-[20px] min-[500px]:text-[28px] md:text-[32px] lg:text-[37px] xl:text-[44px]",
            locale === "en" ? "font-geom" : "font-firago"
          )}
        >
          <motion.span
            ref={serviceWrapperRef}
            initial="hidden"
            animate={serviceWrapperInView ? "visible" : "hidden"}
            exit="exit"
            variants={iconScaleVariants}
            className=""
          >
            <Icons.Projects className="w-[24px] h-[24px] min-[500px]:w-[26px] min-[500px]:h-[26px] md:w-[28px] md:h-[28px] lg:w-[33px] lg:h-[33px] xl:w-[40px] xl:h-[40px]" />
          </motion.span>
          <MaskText
            index={0}
            delay={0.3}
            className={cn(
              " text-secondary min-[500px]:text-[28px] md:text-[32px] lg:text-[37px] xl:text-[44px]",
              locale === "en"
                ? "font-geom text-[20px]"
                : "font-firago text-[18px]"
            )}
            inView={inView}
          >
            {t("projects")}
          </MaskText>
        </motion.div>
      </motion.div>
      <div className="lg:flex lg:justify-between lg:items-start lg:w-[954px] w-full xl:w-[1200px]">
        <div
          ref={flipLinkRef}
          className="mb-[60px] lg:flex lg:flex-col lg:h-[80vh] lg:justify-between lg:mb-0 lg:sticky lg:top-[120px] lg:w-[260px] xl:w-[300px]"
        >
          <div className="text-primary text-[18px] md:text-[22px] capitalize dark:text-secondary mb-[20px]">
            {t("description")}
          </div>
          <div className="">
            <div className="w-full rounded-[14px] border-[1px] border-primary/50 dark:border-secondary/50 px-[12px] py-[4px] mb-[16px]">
              <div
                onClick={() => setCurrentType("any")}
                className={cn(
                  "py-[8px] transition-all cursor-pointer text-primary dark:text-secondary capitalize duration-300 md:py-[12px] border-b-[1px] border-primary/50 dark:border-secondary/50 text-[18px]",
                  currentType === "any" ? "opacity-100" : "opacity-50",
                  locale === "ka" && "font-firago"
                )}
              >
                {t("any")}
              </div>
              <div
                onClick={() => setCurrentType("real")}
                className={cn(
                  "py-[8px] md:py-[12px] cursor-pointer text-primary dark:text-secondary capitalize transition-all duration-300 border-b-[1px] border-primary/50 dark:border-secondary/50 text-[18px]",
                  currentType === "real" ? "opacity-100" : "opacity-50",
                  locale === "ka" && "font-firago"
                )}
              >
                {t("real")}
              </div>
              <div
                onClick={() => setCurrentType("unReal")}
                className={cn(
                  "py-[8px] md:py-[12px] cursor-pointer text-primary dark:text-secondary capitalize dark:border-secondary/50 transition-all duration-300 text-[18px]",
                  currentType === "unReal" ? "opacity-100" : "opacity-50",
                  locale === "ka" && "font-firago"
                )}
              >
                {t("unReal")}
              </div>
            </div>
            <div className="w-full flex relative justify-center h-[36px] overflow-hidden rounded-[20px] bg-primary transition-all duration-500 hover:rounded-[0px]">
              <FlipLink
                href="/main"
                wordSpace="min-w-[7px]"
                top="top-[50%] h-full md:top-[50%]"
                textAlign="center"
                className={cn(
                  "text-[17px] text-secondary",
                  locale === "en" ? "font-geom" : "font-firago"
                )}
              >
                {t("seeMore")}
              </FlipLink>
            </div>
          </div>
        </div>
        <MainProjects data={data} />
      </div>
    </div>
  );
}
