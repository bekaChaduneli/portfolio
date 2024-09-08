"use client";

import { IMainProjectsResponse } from "@/types/mainProjects";
import { GET_MAINPROJECTS } from "@/utils/apolloQuerys";
import { useQuery } from "@apollo/client";
import MainProjects from "./RowMainProjects";
import { useLocale, useTranslations } from "next-intl";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { MaskText } from "../animations/MaskText";
import { cn } from "@/lib/utils";
import { Icons } from "../shared/Icons";
import { FlipLink } from "../animations/text-effect";
import usePageWidth from "@/hooks/usePageWidth";
import { AlignJustify, Grid2X2 } from "lucide-react";
import RowMainProjects from "./RowMainProjects";
import GridMainProjects from "./GridMainProjects";
import GridLoading from "./GridLoading";
import RowLoading from "./RowLoading";
import ComponentHeadline from "../shared/ComponentHeadline";

export default function MainProjectsWrapper() {
  const [currentType, setCurrentType] = useState("any");
  const [currentListType, setCurrentListType] = useState("grid");
  const isTablet = usePageWidth("768px");
  const { data, loading, error } = useQuery<IMainProjectsResponse>(
    GET_MAINPROJECTS,
    {
      variables: {
        skip: 0,
        take: 8,
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

  const { ref: flipLinkRef, inView: flipLinkInView } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex flex-col items-center px-[20px] md:px-[40px]">
      <ComponentHeadline
        component="projects"
        leftText={t("main")}
        rightText={t("projects")}
      />
      <div className="hidden lg:flex justify-end mb-[40px] xl:mb-[50px] w-[954px] xl:w-[1200px] gap-[12px] xl:gap-[20px]">
        <button
          onClick={() => {
            setCurrentListType("row");
          }}
          className={cn(
            "p-[14px] xl:p-[16px] rounded-full border-[1px] border-primary dark:border-secondary ",
            currentListType === "row"
              ? "bg-primary dark:bg-secondary"
              : "bg-primary/10 dark:bg-secondary/10 group transition-all duration-500 hover:bg-primary dark:hover:bg-secondary"
          )}
        >
          <AlignJustify
            width={40}
            height={40}
            className={cn(
              "w-[24px] h-[24px] xl:w-[30px] xl:h-[30px] transition-all duration-500",
              currentListType === "row"
                ? "text-secondary dark:text-primary"
                : "text-primary group-hover:text-secondary dark:group-hover:text-primary dark:text-secondary"
            )}
          />
        </button>
        <button
          onClick={() => {
            setCurrentListType("grid");
          }}
          className={cn(
            " p-[14px] xl:p-[16px] rounded-full border-[1px] border-primary dark:border-secondary ",
            currentListType === "grid"
              ? "bg-primary dark:bg-secondary"
              : "bg-primary/10 dark:bg-secondary/10 group transition-all duration-500 hover:bg-primary dark:hover:bg-secondary"
          )}
        >
          <Grid2X2
            width={40}
            height={40}
            className={cn(
              "w-[24px] h-[24px] xl:w-[30px] xl:h-[30px] transition-all duration-500",
              currentListType === "grid"
                ? "text-secondary dark:text-primary"
                : "text-primary group-hover:text-secondary dark:group-hover:text-primary dark:text-secondary"
            )}
          />
        </button>
      </div>
      <div className="lg:flex lg:justify-between lg:items-start lg:w-[954px] w-full xl:w-[1200px]">
        <div
          ref={flipLinkRef}
          className="mb-[60px] lg:flex lg:flex-col lg:h-[80vh] lg:justify-between lg:mb-0 lg:sticky lg:top-[120px] lg:w-[200px] xl:w-[240px]"
        >
          <div className="text-primary text-[18px] md:text-[22px] lg:text-[20px] xl:text-[22px] capitalize dark:text-secondary mb-[20px]">
            {t("description")}
          </div>
          <div className="">
            <div className="w-full rounded-[14px] border-[1px] border-primary/50 dark:border-secondary/50 px-[12px] py-[4px] mb-[16px]">
              <div
                onClick={() => setCurrentType("any")}
                className={cn(
                  "py-[8px] transition-all cursor-pointer text-primary dark:text-secondary capitalize duration-300 md:py-[12px] border-b-[1px] border-primary/50 dark:border-secondary/50 text-[18px]",
                  currentType === "any" ? "opacity-100" : "opacity-50",
                  locale === "ka" && "font-firago font-semibold"
                )}
              >
                {t("any")}
              </div>
              <div
                onClick={() => setCurrentType("real")}
                className={cn(
                  "py-[8px] md:py-[12px] cursor-pointer text-primary dark:text-secondary capitalize transition-all duration-300 border-b-[1px] border-primary/50 dark:border-secondary/50 text-[18px]",
                  currentType === "real" ? "opacity-100" : "opacity-50",
                  locale === "ka" && "font-firago font-semibold"
                )}
              >
                {t("real")}
              </div>
              <div
                onClick={() => setCurrentType("unReal")}
                className={cn(
                  "py-[8px] md:py-[12px] cursor-pointer text-primary dark:text-secondary capitalize dark:border-secondary/50 transition-all duration-300 text-[18px]",
                  currentType === "unReal" ? "opacity-100" : "opacity-50",
                  locale === "ka" && "font-firago font-semibold"
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
        {currentListType === "grid" ? (
          loading ? (
            <GridLoading />
          ) : (
            <GridMainProjects t={t} data={data} />
          )
        ) : loading ? (
          <RowLoading t={t} />
        ) : (
          <RowMainProjects t={t} data={data} />
        )}
      </div>
    </div>
  );
}
