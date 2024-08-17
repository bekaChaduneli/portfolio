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

export default function AboutMeElement() {
  const { data, loading, error } =
    useQuery<IAboutMeElementResponse>(GET_ABOUTME_ELEMENT);
  const locale = useLocale();
  const aboutMe = data?.findFirstAboutMe;
  const t = useTranslations("AboutMeElement");
  const translation = aboutMe?.translations?.find(
    (translation) => translation.languageCode === locale
  );
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
      <div className="flex flex-col items-center md:flex-row md:gap-[40px] lg:gap-[70px] xl:gap-[120px] mt-[30px] md:mt-[30px] lg:mt-[40px] px-[20px]">
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full bg-[#9d94e5] rounded-[26px] h-[320px] relative overflow-hidden group group-hover:bg-[#b1a9e9] transition-all duration-300 shadow-md group-hover:shadow-xl"
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
            className="flex justify-center overflow-hidden h-[100px] min-[500px]:h-[130px]"
          >
            <MaskText
              index={0}
              type="aboutMeLeft"
              className={cn(
                "leading-[100%] text-primary dark:text-linearPink",
                locale === "en"
                  ? "font-geom translate-x-[-40px] text-[50px] min-[500px]:text-[70px]"
                  : "font-firago translate-x-[-70px] text-[60px] min-[500px]:text-[66px]"
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
                  ? "font-geom top-[26px] min-[500px]:top-[36px] rotate-[-8deg] left-[46%] min-[500px]:left-[47%] text-[50px] min-[500px]:text-[70px]"
                  : "font-firago top-[36px] min-[500px]:top-[40px] left-[34%] min-[500px]:left-[38%] rotate-[-6deg] min-[500px]:rotate-[-4deg] text-[48px] min-[500px]:text-[55px]"
              )}
              inView={maskTextInView}
            >
              {t("me")}
            </MaskText>
          </div>

          <InViewBasic>
            <p className="mt-[12px] line-clamp-[9] italic font-bold text-primary/80 dark:text-secondary/80 text-[14px] mb-[24px]">
              {translation?.about}
            </p>
          </InViewBasic>
          <motion.div
            ref={flipLinkRef}
            className="flex justify-center h-[40px] rounded-[16px] bg-primary text-secondary font-geom relative overflow-hidden whitespace-nowrap"
            initial="hidden"
            animate={flipLinkInView ? "visible" : "hidden"}
            exit="exit"
            variants={scaleVariants}
            transition={{ duration: 0.5 }}
          >
            <FlipLink
              href="/about"
              wordSpace="min-w-[7px]"
              top="top-[54%]"
              textAlign="center"
              className="text-[19px] w-full"
            >
              {t("seeMore")}
            </FlipLink>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
