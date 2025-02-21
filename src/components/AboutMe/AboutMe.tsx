"use client";

import { IAboutMeResponse } from "@/types/aboutMe";
import { GET_ABOUTME } from "@/utils/apolloQuerys";
import { useQuery } from "@apollo/client";
import React from "react";
import AboutMeHeader from "./AboutMeHeader";

export default function AboutMe() {
  const { data, loading, error } = useQuery<IAboutMeResponse>(GET_ABOUTME);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const header = {
    content: data?.findFirstAboutMe?.translations,
    image: data?.findFirstAboutMe?.image,
  };
  return (
    <div className="xl:mt-[200px]">
      <AboutMeHeader data={header} />
    </div>
  );
}
