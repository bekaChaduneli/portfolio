import { cn } from "@/lib/utils";
import React from "react";

export default function GridLoading() {
  return (
    <div className="flex flex-wrap gap-[50px] md:gap-0 justify-between w-full lg:w-[76%]">
      {Array.from({ length: 8 }, (_, index) => (
        <div key={index} className="relative w-full md:w-[50%]">
          <div
            className={cn(
              "pb-[38px] h-full transition-all bg-secondary dark:bg-[#1c2a62] relative md:py-[24px] z-[2] lg:py-[28px] border-primary/15 dark:border-secondary/15 xl:py-[32px] md:pl-[46px] lg:pl-[38px] xl:pl-[50px]",
              index + 1 === 8
                ? "border-b-[1px] md:border-b-0 md:border-l-[1px] lg:border-x-[1px] "
                : index + 2 === 8
                ? "border-b-[1px] md:border-b-0"
                : (index + 1) % 2 === 0
                ? "md:border-l-[1px] lg:border-x-[1px] border-b-[1px] "
                : "border-b-[1px]"
            )}
            style={{
              transition: "all 0.3s ease",
            }}
          >
            <div className="mb-[20px] md:mb-[24px] lg:mb-[20px] xl:mb-[24px] w-full md:w-[80%] lg:w-[285.56px] xl:w-[324px] bg-[#dfd9cf] dark:bg-[#17255d] h-[268px] md:h-auto md:aspect-[1/1] overflow-hidden bg-cover transition-all rounded-[16px] md:rounded-none duration-700 relative animate-skeleton"></div>
            <div className="w-full md:w-[80%] lg:w-[285.56px] xl:w-[324px] bg-[#dfd9cf] dark:bg-[#17255d] rounded-[4px] h-[90px] md:h-[102px] lg:h-[87px] xl:h-[96px]  animate-skeleton"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
