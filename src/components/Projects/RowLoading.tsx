import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";
import React from "react";

export default function RowLoading({ t }: { t: any }) {
  const locale = useLocale();
  return (
    <div className="hidden lg:block w-full lg:w-[74%]">
      <div className="w-full flex pb-[30px] xl:pb-[40px] border-b-[1px] border-primary/50 dark:border-secondary/50">
        <div
          className={cn(
            "pl-[6%] font-bold w-[70%] text-primary/80 dark:text-secondary/80 text-[14px] uppercase",
            locale === "en" ? "font-geom" : "font-firago"
          )}
        >
          {t("name")}
        </div>
        <div
          className={cn(
            "w-[30%] pr-[6%] font-bold text-primary/80 dark:text-secondary/80 text-[14px] uppercase",
            locale === "en" ? "font-geom" : "font-firago"
          )}
        >
          {t("location")}
        </div>
      </div>
      {Array.from({ length: 8 }, (_, index) => (
        <div
          key={index}
          className="w-full block border-b-[1px] border-primary/50 dark:border-secondary/50"
        >
          <div
            className={cn(
              "overflow-hidden transition-all px-[20px] duration-500 flex flex-col justify-center ",
              locale === "en"
                ? "h-[154.5px] xl:h-[191px] "
                : "h-[144px] xl:h-[179px] "
            )}
          >
            <div className="h-[63px] w-full bg-[#e3ded6] dark:bg-[#16255f] rounded-[14px] animate-skeleton"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
