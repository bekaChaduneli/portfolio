"use client";
import { ISkillsResponse } from "@/types/skills";
import { GET_SKILLS } from "@/utils/apolloQuerys";
import { useQuery } from "@apollo/client";
import React from "react";

export default function Skills() {
  const { data, loading, error } = useQuery<ISkillsResponse>(GET_SKILLS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(data);
  return <div className="w-full h-[1200px] skills_wrapper dark:dark_skills_wrapper  mt-[70px] md:mt-[110px] lg:mt-[130px] xl:mt-[160px]">

  </div>;
}
