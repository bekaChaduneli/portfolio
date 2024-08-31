"use client";
import { ISkillsResponse } from "@/types/skills";
import { GET_SKILLS } from "@/utils/apolloQuerys";
import { useQuery } from "@apollo/client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

export default function Skills() {
  const { data, loading, error } = useQuery<ISkillsResponse>(GET_SKILLS);
  const { resolvedTheme } = useTheme();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div className="w-full h-[1200px] rounded-t-[12px] transition-all duration-500 md:rounded-t-[24px] lg:rounded-t-[48px] xl:rounded-t-[64px] relative skills_wrapper dark:dark_skills_wrapper  mt-[70px] md:mt-[110px] lg:mt-[130px] xl:mt-[160px]">

    </div>
  );
}
