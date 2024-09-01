"use client";
import { ISkills, ISkillsResponse } from "@/types/skills";
import { GET_SKILLS } from "@/utils/apolloQuerys";
import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { Icons } from "./shared/Icons";
import { useLocale, useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import usePageWidth from "@/hooks/usePageWidth";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { MaskText } from "./animations/MaskText";
import Image from "next/image";

export default function Skills() {
  const { data, loading, error } = useQuery<ISkillsResponse>(GET_SKILLS);
  const [currentSkill, setCurrentSkill] = useState(0);
  const locale = useLocale();
  const t = useTranslations("Skills");
  const chunkArray = (array: ISkills[] | never[], size: number) => {
    const result: ISkills[][] = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };
  const skills = data?.findManySkills || [];
  const chunkedSkills = chunkArray(skills, 12);
  const isDesktop = usePageWidth("1024px");
  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: false,
  });

  const { ref: serviceWrapperRef, inView: serviceWrapperInView } = useInView({
    threshold: 0.75,
    triggerOnce: false,
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

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="relative w-full  transition-all duration-500 skills_wrapper lg:flex lg:justify-center dark:dark_skills_wrapper mt-[130px] md:mt-[190px] lg:mt-[250px] xl:mt-[360px]">
      <Icons.SkillsTop className="w-[50%] h-auto absolute left-0 top-0 translate-y-[-97%]" />
      <Icons.SkillsBottom className="w-[50%] h-auto absolute right-0 bottom-0 translate-y-[97%]" />
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center py-[60px] md:py-[100px] lg:py-[130px] xl:py-[160px] px-[28px] md:px-[46px] lg:px-0 lg:w-[954px] xl:w-[1200px]">
        <div className="lg:max-w-[50%]">
          <motion.div
            ref={ref}
            className="flex justify-center lg:justify-start items-center gap-[12px] lg:gap-[16px] xl:gap-[22px] z-[1] mb-[34px] md:mb-[46px] lg:mb-[24px] xl:mb-[28px]"
          >
            <MaskText
              index={0}
              delay={0.1}
              inView={inView}
              className={cn(
                "text-primary font-bold dark:text-secondary text-[36px] md:text-[48px] lg:text-[58px] xl:text-[70px]",
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
                <Icons.Skills className="w-[24px] h-[24px] min-[500px]:w-[26px] min-[500px]:h-[26px] md:w-[28px] md:h-[28px] lg:w-[33px] lg:h-[33px] xl:w-[40px] xl:h-[40px]" />
              </motion.span>
              <MaskText
                index={0}
                delay={0.3}
                className={cn(
                  " text-secondary font-bold text-[20px] min-[500px]:text-[28px] md:text-[32px] lg:text-[37px] xl:text-[44px]",
                  locale === "en" ? "font-geom" : "font-firago"
                )}
                inView={inView}
              >
                {t("skills")}
              </MaskText>
            </motion.div>
          </motion.div>
          <motion.div
            className={cn(
              "text-[14px] md:text-[18px] lg:text-[20px] xl:text-[22px] mb-[60px] md:mb-[100px] lg:mb-0 text-primary font-medium dark:text-secondary",
              locale === "ka" && "font-firago"
            )}
          >
            {t("description")}
          </motion.div>
        </div>
        <div className="w-full lg:w-[42%] flex flex-col lg:flex-row gap-[16px] xl:gap-[22px]">
          {chunkedSkills.map((chunk, index) => (
            <div
              key={index}
              className="overflow-hidden flex flex-row flex-nowrap lg:flex-col gap-[12px] xl:h-[700px] skills_shadow transition-all duration-500 relative"
            >
              {chunk.map((skill, skillIndex) => {
                const translation = skill?.translations?.find(
                  (translation) => translation.languageCode === locale
                );
                return (
                  <div
                    key={skillIndex}
                    className={cn(
                      "relative w-[123px] cursor-pointer h-[123px] min-w-[123px] flex justify-center items-center rounded-[12px] md:rounded-[16px] lg:rounded-[22px] xl:rounded-[36px] xl:w-[154px] xl:min-h-[154px] xl:h-[154px]"
                    )}
                    style={{
                      backgroundColor: skill.color,
                    }}
                  >
                    <Image
                      src={skill.image ? skill.image : ""}
                      alt={translation?.name ? translation?.name : "image"}
                      width={400}
                      height={400}
                      className=" max-w-[50%] h-auto max-h-[80%] w-[60%]"
                    />
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
