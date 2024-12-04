import React from "react";
import { cn } from "@/lib/utils";
import { Icons } from "../shared/Icons";
import { useInView } from "react-intersection-observer";
import { MaskText } from "../animations/MaskText";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";

export default function ComponentHeadline({
  leftText,
  rightText,
  component,
}: {
  leftText: string;
  rightText: string;
  component?: string;
}) {
  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  const locale = useLocale();

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
    <motion.div
      ref={ref}
      className={cn(
        "flex justify-center items-center gap-[12px] lg:gap-[16px] xl:gap-[22px] z-[1] mb-[40px] md:mb-[66px] ",
        component === "skills" && "translate-y-[90%] xl:translate-y-[80%]",
        component === "recommendations" ? "!lg:mb-[30px]" : "lg:mb-[100px]"
      )}
    >
      <MaskText
        index={0}
        delay={0.1}
        inView={inView}
        type="left"
        className={cn(
          "text-primary font-bold dark:text-secondary",
          locale === "en" ? "font-geom" : "font-firago",
          component === "projects"
            ? "text-[26px] md:text-[42px] lg:text-[52px] xl:text-[64px]"
            : "text-[36px] md:text-[48px] lg:text-[58px] xl:text-[70px]"
        )}
      >
        {leftText}
      </MaskText>
      <motion.div
        ref={serviceWrapperRef}
        initial="hidden"
        animate={serviceWrapperInView ? "visible" : "hidden"}
        exit="exit"
        variants={scaleVariants}
        className={cn(
          "px-[16px] md:px-[20px] lg:px-[24px] xl:px-[30px] py-[6px] md:py-[8px] xl:py-[10px] rounded-[46px] md:rounded-[50px] lg:rounded-[60px] bg-primary/90 dark:bg-primary/30 dark:border-[2px] backdrop-blur-lg border-[1px] border-primary flex items-center gap-[12px] md:gap-[15px] xl:gap-[18px] text-secondary text-[20px] min-[500px]:text-[28px] md:text-[32px] lg:text-[37px] xl:text-[44px]",
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
          <Icons.Services className="w-[24px] h-[24px] min-[500px]:w-[26px] min-[500px]:h-[26px] md:w-[28px] md:h-[28px] lg:w-[33px] lg:h-[33px] xl:w-[40px] xl:h-[40px]" />
        </motion.span>
        <MaskText
          index={0}
          delay={0.3}
          className={cn(
            " text-secondary font-bold text-[20px] min-[500px]:text-[28px] md:text-[32px] lg:text-[37px] xl:text-[44px]",
            locale === "en" ? "font-geom" : "font-firago",
            component === "projects"
              ? "text-[18px] min-[500px]:text-[26px] md:text-[28px] lg:text-[34px] xl:text-[40px]"
              : "text-[20px] min-[500px]:text-[28px] md:text-[32px] lg:text-[37px] xl:text-[44px]"
          )}
          inView={inView}
        >
          {rightText}
        </MaskText>
      </motion.div>
    </motion.div>
  );
}
