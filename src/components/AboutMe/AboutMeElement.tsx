"use client";
import { GET_ABOUTME_ELEMENT } from "@/utils/apolloQuerys";
import ScrollLine from "../shared/ScrollLine";
import { IAboutMeElementResponse } from "@/types/aboutMe";
import { useQuery } from "@apollo/client";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FlipLink } from "../animations/text-effect";
import { fadeIn } from "@/utils/motion";
import { MaskText } from "../animations/MaskText";
import { InViewBasic } from "../animations/in-view";
import Link from "next/link";
import useCursorStore from "@/store/use-cursor-store";
import { useState } from "react";

export default function AboutMeElement() {
  const { data, loading, error } =
    useQuery<IAboutMeElementResponse>(GET_ABOUTME_ELEMENT);
  const locale = useLocale();
  const aboutMe = data?.findFirstAboutMe;
  const t = useTranslations("AboutMeElement");
  const {
    setIsCursorActive,
    setCursorBackground,
    setCursorText,
    setCursorType,
    onCloseAnimation,
  } = useCursorStore();
  const translation = aboutMe?.translations?.find(
    (translation) => translation.languageCode === locale
  );
  const [scrollHover, setScrollHover] = useState(false);
  const fadeInVariants = fadeIn({
    direction: "up",
    type: "tween",
    delay: 1,
    duration: 0.8,
  });

  // Separate refs for different elements
  const { ref: maskTextRef, inView: maskTextInView } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  const { ref: flipLinkRef, inView: flipLinkInView } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  const scaleVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
    exit: { scale: 0 },
  };

  return (
    <div className="flex flex-col items-center z-[0] relative">
      <ScrollLine />
      <div className="flex flex-col items-center md:flex-row md:gap-[60px] lg:gap-[70px] xl:gap-[120px] mt-[30px] md:mt-[50px] lg:mt-[100px] mx-[20px] lg:w-[954px] md:mx-[40px] max-w-[1200px] xl:w-full">
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          onMouseEnter={() => {
            setIsCursorActive(true);
            setCursorBackground("/come.gif");
            setCursorType("gif");
            setScrollHover(true);
          }}
          onMouseLeave={() => {
            setIsCursorActive(false);
            setScrollHover(false);
          }}
          whileInView="show"
          viewport={{ once: true }}
          className="w-full bg-[#9d94e5] rounded-[26px] h-[320px] md:h-[400px] relative overflow-hidden group about_me_link_image group-hover:bg-[#b1a9e9] shadow-md group-hover:shadow-xl"
        >
          <Link href="/about">
            <h2 className="absolute left-[24px] tracking-[6px] top-[22px] text-[25px] font-bold font-mono text-secondary uppercase group-hover:left-[32px] transition-all duration-300">
              {t("information")}
            </h2>
            <h2
              className={cn(
                "absolute left-[24px] text-[34px] font-geom text-[#505067] capitalize group-hover:left-[32px] transition-all duration-300",
                locale === "en" ? "top-[47px]" : "top-[56px]"
              )}
            >
              {t("aboutMe")}
            </h2>
            <Image
              className="absolute w-auto h-auto left-[-126px] translate-x-[50%] top-[118px] group-hover:scale-[108%] transition-all duration-300"
              width={700}
              height={700}
              src={aboutMe?.image ? aboutMe.image : ""}
              alt="aboutMe"
            />
          </Link>
        </motion.div>
        <div className="w-full relative">
          <div
            ref={maskTextRef}
            className="flex justify-center overflow-hidden h-[100px] min-[500px]:h-[130px] md:h-[80px] xl:h-[110px]"
          >
            <MaskText
              index={0}
              type="aboutMeLeft"
              className={cn(
                "leading-[100%] text-primary dark:text-linearPink",
                locale === "en"
                  ? "font-geom translate-x-[-40px] text-[50px] min-[500px]:text-[70px] md:text-[44px] xl:text-[66px]"
                  : "font-firago translate-x-[-70px] text-[60px] min-[500px]:text-[66px] md:text-[44px] xl:text-[60px]"
              )}
              inView={maskTextInView}
            >
              {t("about")}
            </MaskText>
            <MaskText
              index={0}
              type="aboutMeRight"
              className={cn(
                "leading-[100%] text-linearPink dark:text-secondary",
                locale === "en"
                  ? "font-geom top-[26px] min-[500px]:top-[36px] rotate-[-8deg] left-[46%] min-[500px]:left-[47%] text-[50px] min-[500px]:text-[70px] md:text-[44px] xl:text-[66px]"
                  : "font-firago top-[36px] min-[500px]:top-[40px] left-[34%] min-[500px]:left-[38%] rotate-[-6deg] min-[500px]:rotate-[-4deg] text-[48px] min-[500px]:text-[55px] md:text-[40px] xl:text-[57px]"
              )}
              inView={maskTextInView}
            >
              {t("me")}
            </MaskText>
          </div>

          <InViewBasic>
            <p className="mt-[12px] line-clamp-[9] md:line-clamp-[11] italic font-bold text-primary/80 dark:text-secondary/80 text-[14px] mb-[24px] md:mt-[4px] md:text-[13px] lg:mt-[20px] lg:mb-[32px] xl:text-[16px] xl:line-clamp-[7]">
              {translation?.about}
            </p>
          </InViewBasic>
          <motion.div
            ref={flipLinkRef}
            className="h-[40px] md:h-[48px] relative overflow-hidden whitespace-nowrap"
            initial="hidden"
            animate={flipLinkInView ? "visible" : "hidden"}
            exit="exit"
            variants={scaleVariants}
            onMouseEnter={() => {
              setIsCursorActive(true);
              setCursorBackground("/come.gif");
              setCursorType("gif");
              setScrollHover(true);
            }}
            onMouseLeave={() => {
              setIsCursorActive(false);
              setScrollHover(false);
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center h-full rounded-[16px] md:rounded-[30px] about_me_link_button transition-all duration-300 bg-primary text-secondary font-geom whitespace-nowrap">
              <FlipLink
                href="/about"
                wordSpace="min-w-[7px]"
                top="top-[50%] h-full md:top-[50%]"
                textAlign="center"
                className={cn(
                  "text-[19px] w-full",
                  locale === "ka" && "font-firago"
                )}
              >
                {t("seeMore")}
              </FlipLink>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
