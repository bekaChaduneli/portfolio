"use client";
import { IServicesResponse } from "@/types/services";
import { GET_SERVICES } from "@/utils/apolloQuerys";
import { useQuery } from "@apollo/client";
import { useLocale, useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { Icons } from "./shared/Icons";
import { useInView } from "react-intersection-observer";
import { MaskText } from "./animations/MaskText";
import { motion } from "framer-motion";

export default function Services() {
  const { data, loading, error } = useQuery<IServicesResponse>(GET_SERVICES);
  const locale = useLocale();
  const t = useTranslations("Services");
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="mt-[40px] md:mt-[90px] lg:mt-[200px] flex justify-center">
      <motion.div
        ref={ref}
        className="flex justify-center items-center gap-[12px] lg:gap-[16px] xl:gap-[22px]"
      >
        <MaskText
          index={0}
          delay={0.1}
          inView={inView}
          className={cn(
            "text-primary dark:text-secondary text-[36px] md:text-[48px] lg:text-[58px] xl:text-[70px]",
            locale === "en" ? "font-geom" : "font-firago"
          )}
        >
          {t("my")}
        </MaskText>
        <motion.div
          ref={serviceWrapperRef}
          initial="hidden"
          animate={serviceWrapperInView ? "visible" : "hidden"}
          exit="exit"
          variants={scaleVariants}
          className={cn(
            "px-[16px] md:px-[20px] lg:px-[24px] xl:px-[30px] py-[6px] md:py-[8px] xl:py-[10px] rounded-[46px] md:rounded-[50px] lg:rounded-[60px] bg-primary/90 backdrop-blur-lg border-[1px] border-primary flex items-center gap-[12px] md:gap-[15px] xl:gap-[18px] text-secondary text-[20px] md:text-[32px] lg:text-[37px] xl:text-[44px]",
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
            <Icons.Services className="w-[24px] h-[24px] md:w-[28px] md:h-[28px] lg:w-[33px] lg:h-[33px] xl:w-[40px] xl:h-[40px]" />
          </motion.span>
          <MaskText
            index={0}
            delay={0.3}
            className={cn(
              " text-secondary text-[20px] md:text-[32px] lg:text-[37px] xl:text-[44px]",
              locale === "en" ? "font-geom" : "font-firago"
            )}
            inView={inView}
          >
            {t("services")}
          </MaskText>
        </motion.div>
      </motion.div>
      <div className=""></div>
    </div>
  );
}
