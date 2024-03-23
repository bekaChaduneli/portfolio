"use client";

import classNames from "classnames";
import gsap from "gsap";
import { Calendar, FileText, MapPinned, PhoneCall } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();

  const htmlTag = document.documentElement;
  const langAttribute = htmlTag.getAttribute("lang");
  const profileRef = useRef(null);
  const locationRef = useRef(null);
  const yearRef = useRef(null);
  const phoneRef = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline();
    const profile = profileRef.current;
    const location = locationRef.current;
    const year = yearRef.current;
    const phone = phoneRef.current;

    if (year && profile && location && phone) {
      gsap.fromTo(
        profile,
        {
          marginRight: "202px",
          marginTop: "100px",
          opacity: "0%",
          scale: "0%",
        },
        {
          marginRight: "0px",
          marginTop: "0px",
          opacity: "100%",
          scale: "100%",
          duration: 0.6,
          delay: 0.57,
        }
      );
      gsap.fromTo(
        location,
        {
          marginLeft: "250px",
          marginTop: "150px",
          scale: "0%",
          opacity: "0%",
        },
        {
          marginLeft: "0px",
          marginTop: "0px",
          scale: "100%",
          opacity: "100%",
          duration: 0.6,
          delay: 0.47,
        }
      );
      gsap.fromTo(
        phone,
        {
          marginRight: "220px",
          marginBottom: "150px",
          scale: "0%",
          opacity: "0%",
        },
        {
          marginRight: "0px",
          marginBottom: "0px",
          scale: "100%",
          opacity: "100%",
          duration: 0.6,
          delay: 0.6,
        }
      );
      gsap.fromTo(
        year,
        {
          marginLeft: "220px",
          marginBottom: "150px",
          scale: "0%",
          opacity: "0%",
        },
        {
          marginLeft: "0px",
          marginBottom: "0px",
          scale: "100%",
          opacity: "100%",
          duration: 0.6,
          delay: 0.42,
        }
      );
    }
  }, []);
  return (
    <div className="mt-[150px] sm:mt-[160px] md:mt-[120px] lg:mt-[144px] xl:mt-[160px] flex items-center justify-center z-[0]">
      <div className="relative flex flex-col gap-[8px] py-[20px] md:py-[40px] lg:py-[110px] lg:w-[954px] xl:w-[1200px] justify-center items-center">
        <div className="hidden lg:block absolute w-full z-[0] h-full">
          <span
            ref={profileRef}
            className="w-[110px] top-0 absolute h-[110px] bounce-top lg:right-[44px] xl:right-[82px] opacity-0"
          >
            <span className="lg:w-[96px] lg:h-[96px] xl:w-[110px] xl:h-[110px] bg-[#203277] dark:bg-[#a9baff] absolute rounded-t-full rounded-br-full" />
            <Image
              className="lg:w-[80px] xl:w-[94px] translate-x-[8px] translate-y-[7px] rounded-full absolute"
              src="/profile.jpg"
              alt="profile"
              width={650}
              height={650}
            />
          </span>
          <span
            ref={locationRef}
            className="absolute left-0 top-0 flex flex-col text-[14px] xl:text-[16px] items-center max-w-max w-max-content lg:gap-[8px] xl:gap-[10px] lg:rounded-t-[16px] xl:rounded-t-[20px] lg:rounded-bl-[16px] xl:rounded-bl-[20px] rotate-[-6deg] bounce-top py-[10px] lg:px-[16px] xl:px-[20px] bg-[#f7f2f2]/[.85] backdrop-blur-[6px] backdrop-saturate-[1.4] text-[#203277] uppercase xl:left-[12px] opacity-0"
          >
            <MapPinned className="w-[32px] h-[32px] xl:w-[40px] xl:h-[40px]" />
            {t("location")}
          </span>
          <span
            ref={yearRef}
            className="lg:w-[80px] xl:w-[110px] bottom-0 absolute h-[110px] bounce-bottom lg:left-[64px] xl:left-[68px] opacity-0"
          >
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
          <span
            ref={phoneRef}
            className="flex absolute right-[6px] bottom-0 items-center max-w-max w-max-content gap-[10px] lg:rounded-[14px] xl:rounded-[20px] rotate-[6deg] lg:text-[18px] xl:text-[20px] bounce-bottom py-[10px] lg:px-[18px] xl:px-[26px] bg-[#f7f2f2]/[.85] backdrop-blur-[6px] backdrop-saturate-[1.4] text-[#203277] opacity-0"
          >
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
