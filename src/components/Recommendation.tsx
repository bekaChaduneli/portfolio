import { cn } from "@/lib/utils";
import { IRecommendations } from "@/types/recommendations";
import { useLocale } from "next-intl";
import Image from "next/image";
import React from "react";

export default function Recommendation({
  data,
  index,
}: {
  data: IRecommendations;
  index: any;
}) {
  const locale = useLocale();
  const translation = data?.translations?.find(
    (translation) => translation.languageCode === locale
  );
  return (
    <div
      className={cn(
        `w-full bg px-[70px] h-[400px] flex justify-between items-center py-[56px] bg-[#e6f5f0] rounded-[32px]`
      )}
    >
      <div className="bg-cover h-[288px] w-[288px] relative overflow-hidden rounded-full">
        <Image
          className="h-full w-auto cover"
          width={700}
          height={700}
          src={data.image ? data.image : ""}
          alt={translation?.name ? translation?.name : "profile"}
        />
      </div>
      <div className="">
        <h4 className="font-geom font-bold text-primary dark:text-secondary text-[36px]">
          {translation?.name}
        </h4>
      </div>
    </div>
  );
}
