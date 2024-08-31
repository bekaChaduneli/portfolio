"use client";
import { ISkills, ISkillsResponse } from "@/types/skills";
import { GET_SKILLS } from "@/utils/apolloQuerys";
import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { Icons } from "./shared/Icons";
import { useLocale } from "next-intl";
import { cn } from "@/lib/utils";

export default function Skills() {
  const { data, loading, error } = useQuery<ISkillsResponse>(GET_SKILLS);
  const [currentSkill, setCurrentSkill] = useState(0);
  const locale = useLocale();
  const chunkArray = (array: ISkills[] | never[], size: number) => {
    const result: ISkills[][] = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };
  const skills = data?.findManySkills || [];
  const chunkedSkills = chunkArray(skills, 12);

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="relative w-full h-[1200px] transition-all duration-500 skills_wrapper md:flex md:justify-center dark:dark_skills_wrapper mt-[130px] md:mt-[190px] lg:mt-[250px] xl:mt-[360px]">
      <Icons.SkillsTop className="w-[50%] h-auto absolute left-0 top-0 translate-y-[-97%]" />
      <Icons.SkillsBottom className="w-[50%] h-auto absolute right-0 bottom-0 translate-y-[97%]" />
      <div className="hidden md:flex flex-col md:flex-row md:justify-between md:items-center pt-[60px] md:pt-[100px] lg:pt-[130px] xl:pt-[160px] md:px-[46px] lg:px-0 lg:w-[954px] xl:w-[1200px]">
        <div className="max-w-[50%]">
          <h2
            className={cn(
              "text-[30px] md:text-[38px] lg:text-[64px] xl:text-[80px] text-primary dark:text-secondary",
              locale === "en" ? "font-geom" : "font-firago font-bold"
            )}
          >
            {
              data?.findManySkills[currentSkill].translations[
                locale === "en" ? 0 : 1
              ].name
            }
          </h2>
          <div
            className={cn(
              "text-primary text-[14px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-medium",
              locale === "ka" && "font-firago"
            )}
          >
            {
              data?.findManySkills[currentSkill].translations[
                locale === "en" ? 0 : 1
              ].about
            }
          </div>
        </div>
      </div>
    </div>
  );
}
