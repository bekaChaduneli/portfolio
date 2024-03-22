"use client";

import classNames from "classnames";
import { Calendar, FileText, MapPinned, PhoneCall } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();

  const htmlTag = document.documentElement;
  const langAttribute = htmlTag.getAttribute("lang");
  return (
    <div className="mt-[70px] sm:mt-[110px] md:mt-[120px] lg:mt-[144px] xl:mt-[160px] flex items-center justify-center z-[0]">
      <div className="relative flex flex-col gap-[8px] py-[20px] md:py-[40px] lg:py-[110px] lg:w-[954px] xl:w-[1200px] justify-center items-center">
        <div className="hidden lg:block absolute w-full z-[0] h-full">
          <span className="w-[110px] right-0 top-0 absolute h-[110px] bounce-top lg:mr-[44px] xl:mr-[82px]">
            <span className="lg:w-[96px] lg:h-[96px] xl:w-[110px] xl:h-[110px] bg-[#203277] dark:bg-[#a9baff] absolute rounded-t-full rounded-br-full" />
            <Image
              className="lg:w-[80px] xl:w-[94px] translate-x-[8px] translate-y-[7px] rounded-full absolute"
              src="/profile.jpg"
              alt="profile"
              width={650}
              height={650}
            />
          </span>
          <span className="absolute left-0 top-0 flex flex-col text-[14px] xl:text-[16px] items-center max-w-max w-max-content lg:gap-[8px] xl:gap-[10px] lg:rounded-t-[16px] xl:rounded-t-[20px] lg:rounded-bl-[16px] xl:rounded-bl-[20px] rotate-[-6deg] bounce-top py-[10px] lg:px-[16px] xl:px-[20px] bg-[#f7f2f2]/[.85] backdrop-blur-[6px] backdrop-saturate-[1.4] text-[#203277] uppercase xl:ml-[12px] delay-1000">
            <MapPinned className="w-[32px] h-[32px] xl:w-[40px] xl:h-[40px]" />
            {t("location")}
          </span>
          <span className="lg:w-[80px] xl:w-[110px] left-0 bottom-0 absolute h-[110px] bounce-bottom lg:ml-[64px] xl:ml-[68px]">
            <span className="flex absolute left-0 bottom-0 items-center max-w-max w-max-content lg:rounded-[20px] xl:rounded-[30px] rotate-[-9deg] bounce-age lg:p-[16px] xl:p-[24px] bg-[#203277] dark:bg-[#a9baff] backdrop-blur-[6px] backdrop-saturate-[1.4] text-[#ede7de]">
              <Image
                className="lg:w-[90px] xl:w-[104px]"
                src="/year.png"
                alt="year"
                width={650}
                height={650}
              />
            </span>
          </span>
          <span className="flex absolute mr-[6px] right-0 bottom-0 items-center max-w-max w-max-content gap-[10px] lg:rounded-[14px] xl:rounded-[20px] rotate-[6deg] lg:text-[18px] xl:text-[20px] bounce-bottom py-[10px] lg:px-[18px] xl:px-[26px] bg-[#f7f2f2]/[.85] backdrop-blur-[6px] backdrop-saturate-[1.4] text-[#203277] delay-1000">
            <PhoneCall className="lg:w-[20px] lg:h-[20px] xl:w-[24px] xl:h-[24px]" />
            {t("phone")}
          </span>
        </div>
        <div className="z-[1]">
          <h1
            className={classNames(
              "text-[#203277] z-[1] dark:text-[#a9baff] capitalize",
              {
                "text-[85px] sm:text-[126px] md:text-[144px] xl:text-[184px] font-acorn leading-[80%] font-extrabold":
                  langAttribute === "en",
                "text-[53px] sm:text-[81px] md:text-[90px] xl:text-[114px] font-firago font-bold leading-[100%]":
                  langAttribute === "ka",
              }
            )}
          >
            {t("header_name")}
          </h1>
          <h1
            className={classNames(
              "text-[#203277] z-[1] dark:text-[#a9baff] capitalize",
              {
                "text-[40px] sm:text-[60px] md:text-[68px] xl:text-[87px] font-acorn leading-[100%] font-extrabold":
                  langAttribute === "en",
                "text-[35px] sm:text-[53px] md:text-[59px] xl:text-[75px] font-firago font-bold leading-[100%]":
                  langAttribute === "ka",
              }
            )}
          >
            {t("profession")}
          </h1>
          <div className="w-[320px] sm:w-[490px] md:w-[536px] xl:w-[684px] mt-[16px] h-[50px] md:h-[70px] rounded-[36px] md:rounded-[58px] border-[2px] border-[#203277] dark:border-[#a9baff]"></div>
        </div>
      </div>
    </div>
  );
}
