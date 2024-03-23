"use client";

import classNames from "classnames";
import gsap from "gsap";
import { MapPinned, PhoneCall } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { MaskText } from "./animations/MaskText";
import { useInView } from "react-intersection-observer";
import InfinityText from "./animations/InfinityText";

export default function Header() {
  const { t } = useTranslation();

  const htmlTag = document.documentElement;
  const langAttribute = htmlTag.getAttribute("lang");
  const profileRef = useRef(null);
  const locationRef = useRef(null);
  const yearRef = useRef(null);
  const phoneRef = useRef(null);
  const skillsRef = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline();
    const profile = profileRef.current;
    const location = locationRef.current;
    const year = yearRef.current;
    const phone = phoneRef.current;
    const skills = skillsRef.current;

    if (year && profile && location && phone && skills) {
      setTimeout(() => {
        gsap.fromTo(
          profile,
          {
            marginRight: "162px",
            marginTop: "70px",
            scaleX: ".0",
            scaleY: ".0",
            opacity: "0%",
          },
          {
            marginRight: "0px",
            marginTop: "0px",
            scaleX: "99%",
            scaleY: "99%",
            opacity: "100%",
            duration: 0.7,
            onComplete: () => {
              profile.classList.add("bounce-top");
              profile.classList.add("delay-1000");
            },
          }
        );
      }, 770);

      setTimeout(() => {
        gsap.fromTo(
          skills,
          {
            width: "0px",
            opacity: "0%",
          },
          {
            opacity: "100%",
            width: "auto",
            duration: 1.1,
          }
        );
      }, 370);

      setTimeout(() => {
        gsap.fromTo(
          location,
          {
            marginLeft: "180px",
            marginTop: "100px",
            scaleX: ".0",
            scaleY: ".0",
            opacity: "0%",
          },
          {
            marginLeft: "0px",
            marginTop: "0px",
            scaleX: "99%",
            scaleY: "99%",
            opacity: "100%",
            duration: 0.7,
            onStart: () => {
              location.classList.add("bounce-top");
            },
          }
        );
      }, 670);
      setTimeout(() => {
        gsap.fromTo(
          phone,
          {
            marginRight: "160px",
            scaleX: ".0",
            scaleY: ".0",
            marginBottom: "100px",
            opacity: "0%",
          },
          {
            marginRight: "0px",
            marginBottom: "0px",
            opacity: "100%",
            scaleX: "99%",
            scaleY: "99%",
            duration: 0.7,
            onComplete: () => {
              phone.classList.add("bounce-bottom");
              phone.classList.add("delay-300");
            },
          }
        );
      }, 800);
      setTimeout(() => {
        gsap.fromTo(
          year,
          {
            marginLeft: "160px",
            marginBottom: "100px",
            scaleX: ".0",
            scaleY: ".0",
            opacity: "0%",
          },
          {
            marginLeft: "0px",
            scaleX: "99%",
            scaleY: "99%",
            marginBottom: "0px",
            opacity: "100%",
            duration: 1.1,
            onStart: () => {},
            onComplete: () => {
              year.classList.add("bounce-bottom");
              year.classList.add("delay-700");
            },
          }
        );
      }, 620);
    }
  }, []);
  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  return (
    <div className="mt-[150px] sm:mt-[160px] md:mt-[120px] lg:mt-[144px] xl:mt-[160px] flex items-center justify-center z-[0]">
      <div className="relative flex flex-col gap-[8px] py-[20px] md:py-[40px] lg:py-[110px] lg:w-[954px] xl:w-[1200px] justify-center items-center">
        <div className="hidden lg:block absolute w-full z-[0] h-full">
          <span
            ref={profileRef}
            className="w-[110px] top-0 absolute h-[110px] lg:right-[44px] xl:right-[82px] opacity-0 rotate-[-6deg]"
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
            className="absolute left-0 top-0 flex flex-col text-[14px] xl:text-[16px] items-center max-w-max w-max-content lg:gap-[8px] xl:gap-[10px] lg:rounded-t-[16px] xl:rounded-t-[20px] lg:rounded-bl-[16px] xl:rounded-bl-[20px] py-[10px] lg:px-[16px] xl:px-[20px] bg-[#f7f2f2]/[.85] backdrop-blur-[6px] backdrop-saturate-[1.4] text-[#203277] uppercase xl:left-[12px] opacity-0 rotate-[-6deg]"
          >
            <MapPinned className="w-[32px] h-[32px] xl:w-[40px] xl:h-[40px]" />
            {t("location")}
          </span>
          <span
            ref={yearRef}
            className="lg:w-[80px] xl:w-[110px] bottom-0 absolute h-[110px] lg:left-[64px] xl:left-[68px] opacity-0 rotate-[4deg]"
          >
            <span className="flex absolute left-0 bottom-0 items-center max-w-max w-max-content lg:rounded-[20px] xl:rounded-[30px] bounce-age lg:p-[16px] xl:p-[24px] bg-[#203277] dark:bg-[#a9baff] backdrop-blur-[6px] backdrop-saturate-[1.4] text-[#ede7de]">
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
            className="flex absolute right-[6px] bottom-0 items-center max-w-max w-max-content gap-[10px] lg:rounded-[14px] xl:rounded-[20px] lg:text-[18px] xl:text-[20px] py-[10px] lg:px-[18px] xl:px-[26px] bg-[#f7f2f2]/[.85] backdrop-blur-[6px] backdrop-saturate-[1.4] text-[#203277] opacity-0 rotate-[4deg]"
          >
            <PhoneCall className="lg:w-[20px] lg:h-[20px] xl:w-[24px] xl:h-[24px]" />
            {t("phone")}
          </span>
        </div>
        <div ref={ref} className="z-[1] flex flex-col items-center">
          <MaskText
            index={0}
            className={classNames(
              "text-[#203277] z-[1] dark:text-[#a9baff] capitalize",
              {
                "text-[85px] sm:text-[126px] md:text-[144px] xl:text-[184px] font-acorn leading-[100%] font-extrabold":
                  langAttribute === "en",
                "text-[53px] sm:text-[81px] md:text-[90px] xl:text-[114px] font-firago font-bold leading-[100%]":
                  langAttribute === "ka",
              }
            )}
            inView={inView}
          >
            {t("header_name")}
          </MaskText>
          <MaskText
            index={1}
            className={classNames(
              "text-[#203277] z-[1] dark:text-[#a9baff] capitalize",
              {
                "text-[40px] sm:text-[60px] md:text-[68px] xl:text-[87px] font-acorn leading-[100%] font-extrabold":
                  langAttribute === "en",
                "text-[35px] sm:text-[53px] md:text-[59px] xl:text-[75px] font-firago font-bold leading-[100%]":
                  langAttribute === "ka",
              }
            )}
            inView={inView}
          >
            {t("profession")}
          </MaskText>

          <div
            ref={skillsRef}
            className="max-w-[320px] opacity-0 w-0 sm:max-w-[490px] md:max-w-[536px] xl:max-w-[684px] mt-[16px] py-[8px] rounded-[36px] md:rounded-[58px] border-[1px] border-[#203277] dark:border-[#a9baff] overflow-hidden"
          >
            <InfinityText
              texts={[
                "next",
                "nest",
                "cypress",
                "typescript",
                "node",
                "react",
                "python",
                "javascript",
                "express",
                "django",
                "mongoDB",
                "prisma",
                "graphQL",
                "AWS",
                "linux",
                "jest",
                "fireBase",
                "framer",
                "docker",
                "jenkins",
                "gsap",
                "redux",
                "postgreSql",
                "mySql",
                "tailwind",
                "sass",
                "chakra UI",
                "styled components",
                "redis",
                "webpack",
                "babel",
                "git",
                "mocha",
                "bash",
                "sqlLite",
                "html",
                "css",
                "adobe XD",
                "figma",
              ]}
              className="text-[#203277] dark:text-[#a9baff] mr-[16px] flex items-center gap-[16px] text-[24px] capitalize"
              iconClassName="text-[#203277] dark:text-[#f7f2f2] w-[16px] h-[16px]"
              baseVelocity={-0.8}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
