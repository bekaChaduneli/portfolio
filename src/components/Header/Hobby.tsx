import { cn } from "@/lib/utils";
import { IHobbys } from "@/types/profile";
import Image from "next/image";
import React from "react";

export default function Hobby({
  hobby,
  locale,
}: {
  hobby: IHobbys;
  locale: string;
}) {
  const data = hobby?.translations?.find(
    (translation) => translation.languageCode === locale
  );

  if (!data) {
    return null;
  }

  return (
    <div
      className={cn(
        "border-[1px] cursor-pointer hover:border-primary/60 duration-500 transition-all border-primary/15 rounded-[8px] w-[48.8%] px-[14px] py-[18px] flex justify-between items-center"
      )}
    >
      <Image
        className="w-[70px] h-[70px] xl:w-[90px] xl:h-[90px] "
        src={hobby.image}
        alt={data?.hobby}
        width={400}
        height={400}
      />
      <div className="w-[192px] xl:w-[272px]">
        <h2
          className={cn(
            "text-[24px] leading-[100%] xl:text-[28px] mb-[6px] text-primary",
            locale === "en" ? "font-geom" : "font-firago"
          )}
        >
          {data?.hobby}
        </h2>
        <div
          className="text-[11px] xl:text-[12px] text-primary/50 line-clamp-3"
          style={{ wordBreak: "break-word", overflowWrap: "break-word" }}
        >
          {data?.aboutHobby}
        </div>
      </div>
    </div>
  );
}
