import { IMainProjectsResponse } from "@/types/mainProjects";
import { useLocale, useTranslations } from "next-intl";
import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { MaskText } from "../animations/MaskText";
import { cn } from "@/lib/utils";
import { Icons } from "../shared/Icons";
export default function MainProjects({
  data,
}: {
  data: IMainProjectsResponse | undefined;
}) {
  const locale = useLocale();
  const t = useTranslations("MainProjects");
  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  const { ref: serviceWrapperRef, inView: serviceWrapperInView } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });
  const scaleVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const iconScaleVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        delay: 0.4,
      },
    },
  };
  return (
    <div>
      <motion.div
        ref={ref}
        className="flex justify-center items-center gap-[12px] lg:gap-[16px] xl:gap-[22px] z-[1] mb-[40px] md:mb-[66px] lg:mb-[100px]"
      >
        <MaskText
          index={0}
          delay={0.1}
          inView={inView}
          className={cn(
            "text-primary dark:text-secondary md:text-[48px] lg:text-[58px] xl:text-[70px]",
            locale === "en"
              ? "font-geom text-[36px] "
              : "font-firago text-[23px] min-[500px]:text-[30px]"
          )}
        >
          {t("main")}
        </MaskText>
        <motion.div
          ref={serviceWrapperRef}
          initial="hidden"
          animate={serviceWrapperInView ? "visible" : "hidden"}
          exit="exit"
          variants={scaleVariants}
          className={cn(
            "px-[16px] md:px-[20px] lg:px-[24px] xl:px-[30px] py-[6px] md:py-[8px] xl:py-[10px] rounded-[46px] md:rounded-[50px] lg:rounded-[60px] bg-primary/90 dark:bg-[#131c3e]/70 dark:border-[2px] backdrop-blur-lg border-[1px] border-primary flex items-center gap-[12px] md:gap-[15px] xl:gap-[18px] text-secondary text-[20px] min-[500px]:text-[28px] md:text-[32px] lg:text-[37px] xl:text-[44px]",
            locale === "en" ? "font-geom" : "font-firago"
          )}
        >
          <motion.span
            ref={serviceWrapperRef}
            initial="hidden"
            animate={serviceWrapperInView ? "visible" : "hidden"}
            exit="exit"
            variants={iconScaleVariants}
            className=""
          >
            <Icons.Projects className="w-[24px] h-[24px] min-[500px]:w-[26px] min-[500px]:h-[26px] md:w-[28px] md:h-[28px] lg:w-[33px] lg:h-[33px] xl:w-[40px] xl:h-[40px]" />
          </motion.span>
          <MaskText
            index={0}
            delay={0.3}
            className={cn(
              " text-secondary min-[500px]:text-[28px] md:text-[32px] lg:text-[37px] xl:text-[44px]",
              locale === "en"
                ? "font-geom text-[20px]"
                : "font-firago text-[18px]"
            )}
            inView={inView}
          >
            {t("projects")}
          </MaskText>
        </motion.div>
      </motion.div>
    </div>
  );
}
