"use client";
import { ISkillsResponse } from "@/types/skills";
import { GET_SKILLS } from "@/utils/apolloQuerys";
import { useQuery } from "@apollo/client";
import React from "react";
import { Icons } from "./shared/Icons";

export default function Skills() {
  const { data, loading, error } = useQuery<ISkillsResponse>(GET_SKILLS);

  return (
    <div className="relative w-full h-[1200px] transition-all duration-500 skills_wrapper dark:dark_skills_wrapper  mt-[130px] md:mt-[190px] lg:mt-[250px] xl:mt-[360px]">
      <Icons.SkillsTop className="w-[50%] h-auto absolute left-0 top-0 translate-y-[-97%]" />
      <Icons.SkillsBottom className="w-[50%] h-auto absolute right-0 bottom-0 translate-y-[97%]" />
      <div className="relative h-full">
        <h2 className="text-4xl font-bold text-center">Skills</h2>
      </div>
    </div>
  );
}
