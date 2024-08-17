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
      <div className="flex flex-col items-center md:flex-row md:gap-[40px] lg:gap-[70px] xl:gap-[120px] mt-[30px] md:mt-[30px] lg:mt-[40px]">
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full overflow-hidden relative h-[80vw] mb-[30px] min-[500px]:h-[66vw]"
        >
          <Image
            className="absolute rounded-t-full inset-0 min-h-full min-w-[200%] left-[-50%] min-[500px]:min-w-[150%] min-[500px]:left-[-25%]"
            width={2000}
            height={2000}
            src={aboutMe?.image ? aboutMe.image : ""}
            alt="aboutMe"
          />
        </motion.div>
        <div className="w-full px-[20px] relative">
          {/* MaskText wrapper with its own ref */}
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
            <p className="mt-[50px] line-clamp-[9] italic font-bold text-primary/80 dark:text-secondary/80 text-[14px] mb-[24px]">
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
