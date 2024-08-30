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
    <div className="w-full h-[1200px] relative skills_wrapper dark:dark_skills_wrapper  mt-[70px] md:mt-[110px] lg:mt-[130px] xl:mt-[160px]">
      {resolvedTheme === "light" ? <>
        <Image
          src="/portfolio-brush.png"
          alt="portfolio_brush"
          width={1600}
          height={200}
          className="absolute w-full left-0 top-0 right-0 h-[20px] md:h-[30px] lg:h-[50px] xl:h-[70px]"
        />
        <Image
          src="/portfolio-brush.png"
          alt="portfolio_brush"
          width={1600}
          height={200}
          className="absolute w-full left-0 bottom-0 rotate-180 right-0 h-[20px] md:h-[30px] lg:h-[50px] xl:h-[70px]"
        />
      </> : <>
        <Image
          src="/portfolio-brush-dark.png"
          alt="portfolio_brush"
          width={1600}
          height={200}
          className="absolute w-full left-0 top-0 right-0 h-[20px] md:h-[30px] lg:h-[50px] xl:h-[70px]"
        />
        <Image
          src="/portfolio-brush-dark.png"
          alt="portfolio_brush"
          width={1600}
          height={200}
          className="absolute w-full left-0 bottom-0 rotate-180 right-0 h-[20px] md:h-[30px] lg:h-[50px] xl:h-[70px]"
        />
      </>}
    </div>
  );
}
