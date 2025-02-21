import { IAboutMeElementTranslation } from "@/types/aboutMe";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

interface HeaderType {
  content: IAboutMeElementTranslation[] | undefined;
  image: string | undefined;
}

export default function AboutMeHeader({ data }: { data: HeaderType }) {
  const t = useTranslations("AboutMe");
  return (
    <div>
      <div className="flex gap-[30px] justify-center md:gap-[54px] lg:gap-[74px] xl:gap-[94px] mb-[40px] md:mb-[52px] lg:mb-[72px] xl:mb-[92px] items-center">
        <div className="hidden md:block w-[356px] overflow-hidden h-[395px]  border-[4px] border-primary rounded-[12px] bg-cover">
          <Image
            className="object-cover object-center  h-full w-auto"
            src="/profile.jpg"
            alt="profile"
            width={650}
            height={650}
          />
        </div>
        {data?.content && (
          <div>
            <h1 className=" text-primary font-bold font-firago uppercase text-[111px] leading-[80%] text-end">
              {t("about")}
            </h1>
            <h1 className=" text-[#FF4D4D] text-[283px] font-bold font-firago  uppercase leading-[84%] text-end">
              {t("me")}
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}
