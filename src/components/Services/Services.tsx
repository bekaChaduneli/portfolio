"use client";
import { IServicesResponse } from "@/types/services";
import { GET_SERVICES } from "@/utils/apolloQuerys";
import { useQuery } from "@apollo/client";
import { useLocale, useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { Icons } from "../shared/Icons";
import { useInView } from "react-intersection-observer";
import { MaskText } from "../animations/MaskText";
import { motion } from "framer-motion";
import usePageWidth from "@/hooks/usePageWidth";
import ServicesDesktop from "./ServicesDesktop";
import ServicesSlider from "./ServicesSlider";

export default function Services() {
  const { data, loading, error } = useQuery<IServicesResponse>(GET_SERVICES);
  const locale = useLocale();
  const t = useTranslations("Services");
  const isDesktop = usePageWidth("1024px");
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
    <div className="overflow-x-clip mt-[150px] mb-[100px] md:pt-[20px] md:mt-[210px] md:mb-[120px] lg:pt-[50px] lg:mt-[300px] lg:mb-[150px] pb-[60px] lg:pb-[200px] services_wrapper relative  flex flex-col justify-center bg-[#cdcdcd] before:bg-secondary dark:bg-[#131c3e] dark:before:bg-[#1c2a62] dark:after:bg-[#131c3e] overflow-visible">
      <motion.div
        ref={ref}
        className="flex justify-center items-center gap-[12px] lg:gap-[16px] xl:gap-[22px] z-[1] mb-[40px] md:mb-[66px] lg:mb-[100px]"
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
              " text-secondary text-[20px] min-[500px]:text-[28px] md:text-[32px] lg:text-[37px] xl:text-[44px]",
              locale === "en" ? "font-geom" : "font-firago"
            )}
            inView={inView}
          >
            {t("services")}
          </MaskText>
        </motion.div>
      </motion.div>
      {isDesktop ? (
        <ServicesDesktop data={data} />
      ) : (
        <ServicesSlider locale={locale} data={data} />
      )}
    </div>
  );
}
