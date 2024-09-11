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
import FramerText from "./core/YFramerText";
import { useScrollStore } from "@/store/use-skillsScroll-store";
import { FlipLink } from "./animations/text-effect";
import ComponentHeadline from "./shared/ComponentHeadline";
import YFramerText from "./core/YFramerText";
import XFramerText from "./core/XFramerText";

export default function Skills() {
  const { data, loading, error } = useQuery<ISkillsResponse>(GET_SKILLS);
  const { setScrolling } = useScrollStore();
  const locale = useLocale();

  const t = useTranslations("Skills");
  const [skillChanged, setSkillChanged] = useState(false);
  const [currentSkill, setCurrentSkill] = useState<string | null>(null);
  const [skillBottomHeadline, setSkillBottomHeadline] = useState<string | null>(
    null
  );

  const [skillBottomDescription, setSkillBottomDescription] = useState<
    string | null
  >(null);

  const chunkArray = (array: ISkills[] | never[], size: number) => {
    const result: ISkills[][] = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const isDesktop = usePageWidth("1024px");

  const skills = data?.findManySkills || [];
  const chunkedSkills = chunkArray(skills, 12);
  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: false,
  });

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="relative w-full transition-all duration-500 skills_wrapper lg:flex lg:justify-center dark:dark_skills_wrapper mt-[130px] md:mt-[190px] lg:mt-[250px] xl:mt-[360px]">
      <Icons.SkillsTop className="w-[50%] h-auto absolute left-0 top-0 translate-y-[-97%]" />
      <Icons.SkillsBottom className="w-[50%] h-auto absolute right-0 bottom-0 translate-y-[97%]" />
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center py-[60px] md:py-[100px] lg:py-[130px] xl:py-[160px] px-[28px] md:px-[46px] lg:px-0 lg:w-[954px] xl:w-[1200px]">
        <div className="lg:max-w-[50%] lg:w-[50%]">
          {isDesktop ? (
            <>
              <div className="w-full flex mb-[16px] xl:mb-[20px] relative justify-center h-[100px] overflow-hidden transition-all duration-500 ">
                <FlipLink
                  href="/main"
                  wordSpace="min-w-[7px]"
                  skillChanged={skillChanged}
                  top="top-[50%] h-full md:top-[50%]"
                  skillBottomHeadline={skillBottomHeadline}
                  skillType="headline"
                  textAlign="center"
                  skills={true}
                  className={cn(
                    "text-[17px] text-secondary",
                    locale === "en" ? "font-geom" : "font-firago"
                  )}
                />
              </div>
              <div className="w-full flex relative justify-center h-[300px] overflow-hidden transition-all duration-500 ">
                <FlipLink
                  href="/main"
                  wordSpace="min-w-[7px]"
                  skillType="description"
                  skillChanged={skillChanged}
                  skillBottomDescription={skillBottomDescription}
                  top="top-[50%] h-full md:top-[50%]"
                  textAlign="center"
                  skills={true}
                  className={cn(
                    "text-[17px] text-secondary",
                    locale === "en" ? "font-geom" : "font-firago"
                  )}
                />
              </div>
            </>
          ) : (
            <>
              <ComponentHeadline leftText={t("my")} rightText={t("skills")} />
              <div
                className={cn(
                  "text=[18px] leading-[24px] md:text-[25px] md:leading-[32px] font-bold text-primary dark:text-secondary mb-[60px] md:mb-[90px] mt-[10px]",
                  locale === "ka" && "font-firago"
                )}
              >
                {t("description")}
              </div>
            </>
          )}
        </div>
        <div className="w-full lg:w-[42%] overflow-hidden flex flex-col lg:flex-row gap-[16px] xl:gap-[22px]">
          {chunkedSkills.map((chunk, index) => {
            if (isDesktop) {
              return (
                <YFramerText
                  key={index}
                  baseVelocity={index === 0 || index === 2 ? -3 : 3}
                >
                  {chunk.map((skill, skillIndex) => {
                    const translation = skill?.translations?.find(
                      (translation) => translation.languageCode === locale
                    );
                    return (
                      <div
                        key={skillIndex}
                        className={cn(
                          "relative cursor-pointer group h-[70px] min-w-[70px] md:h-[90px] md:min-w-[90px] lg:h-[123px] lg:min-w-[123px] flex justify-center items-center translation-all duration-300 rounded-[12px] lg:rounded-[22px] xl:rounded-[36px] xl:w-[154px] xl:h-[154px]",
                          currentSkill !== skill.id && skillChanged
                            ? "opacity-50"
                            : "opacity-100"
                        )}
                        style={{ backgroundColor: skill.color }}
                        onMouseEnter={() => {
                          if (isDesktop) {
                            setScrolling(false);
                            setCurrentSkill(skill.id);
                            setSkillChanged(true);
                            setSkillBottomHeadline(
                              translation?.name ? translation?.name : ""
                            );
                            setSkillBottomDescription(
                              translation?.about ? translation?.about : " "
                            );
                          }
                        }}
                        onMouseLeave={() => {
                          if (isDesktop) {
                            setScrolling(true);
                            setCurrentSkill(null);
                            setSkillChanged(false);
                          }
                        }}
                      >
                        <Image
                          src={skill.image || ""}
                          alt={translation?.name || "image"}
                          width={400}
                          height={400}
                          className="max-w-[50%] group-hover:scale-125 duration-300 transition-all max-h-[80%] w-[50%] h-auto"
                        />
                      </div>
                    );
                  })}
                </YFramerText>
              );
            } else {
              return (
                <XFramerText
                  key={index}
                  baseVelocity={index === 0 ? -6 : index === 1 ? 6 : -6}
                >
                  {chunk.map((skill, skillIndex) => {
                    const translation = skill?.translations?.find(
                      (translation) => translation.languageCode === locale
                    );
                    return (
                      <div
                        key={skillIndex}
                        className={cn(
                          "relative cursor-pointer group h-[70px] min-w-[70px] md:h-[90px] md:min-w-[90px] lg:h-[123px] lg:min-w-[123px] flex justify-center items-center translation-all duration-300 rounded-[12px] lg:rounded-[22px] xl:rounded-[36px] xl:w-[154px] xl:h-[154px]",
                          currentSkill !== skill.id && skillChanged
                            ? "opacity-50"
                            : "opacity-100"
                        )}
                        style={{ backgroundColor: skill.color }}
                        onMouseEnter={() => {
                          if (isDesktop) {
                            setScrolling(false);
                            setCurrentSkill(skill.id);
                            setSkillChanged(true);
                            setSkillBottomHeadline(
                              translation?.name ? translation?.name : ""
                            );
                            setSkillBottomDescription(
                              translation?.about ? translation?.about : " "
                            );
                          }
                        }}
                        onMouseLeave={() => {
                          if (isDesktop) {
                            setScrolling(true);
                            setCurrentSkill(null);
                            setSkillChanged(false);
                          }
                        }}
                      >
                        <Image
                          src={skill.image || ""}
                          alt={translation?.name || "image"}
                          width={400}
                          height={400}
                          className="max-w-[50%] group-hover:scale-125 duration-300 transition-all max-h-[80%] w-[50%] h-auto"
                        />
                      </div>
                    );
                  })}
                </XFramerText>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
