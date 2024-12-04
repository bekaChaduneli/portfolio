import { cn } from "@/lib/utils";
import { IRecommendations } from "@/types/recommendations";
import { useLocale } from "next-intl";
import Image from "next/image";
import React from "react";
import { FlipLink } from "./animations/text-effect";
import { formatDate } from "@/utils/date";

export default function Recommendation({ data }: { data: IRecommendations }) {
  const locale = useLocale();
  const translation = data?.translations?.find(
    (translation) => translation.languageCode === locale
  );

  return (
    <div className="w-full bg p-[24px] h-[275px] bg-[#ffffff71] rounded-[20px] ">
      <div className="flex items-center justify-start gap-[18px] mb-[16px]">
        <div className="w-[90px] h-[90px] min-w-[90px] rounded-full overflow-hidden">
          <Image
            className="w-[90px] h-auto min-h-full cover"
            width={700}
            height={700}
            src={data.image ? data.image : ""}
            alt={translation?.name ? translation?.name : "profile"}
          />
        </div>
        <div className="w-full">
          <div className="flex justify-between items-center w-full">
            <h4 className="font-geom font-bold text-primary dark:text-secondary text-[24px]  capitalize">
              {translation?.name}
            </h4>
            <span className="font-geom font-bold text-primary dark:text-secondary text-[14px]  capitalize underline">
              {formatDate(data?.date, locale)}
            </span>
          </div>
          <div className="text-[18px] font-medium text-[#3c60ee] mb-[2px] capitalize">
            {translation?.role}
          </div>
        </div>
      </div>
      <span className="text-[16px] text-primary/70 line-clamp-3 h-[72px]">
        {translation?.description}
      </span>
      <div className="w-[180px] mt-[12px] flex relative justify-center h-[36px] overflow-hidden rounded-[12px] bg-primary transition-all duration-500 hover:rounded-[0px]">
        <FlipLink
          href={data?.link ? data?.link : ""}
          wordSpace="min-w-[7px]"
          top="top-[50%] h-full md:top-[50%]"
          textAlign="center"
          className={cn(
            "text-[17px] text-secondary",
            locale === "en" ? "font-geom" : "font-firago"
          )}
        >
          Linkedin
        </FlipLink>
      </div>
    </div>
  );
}
