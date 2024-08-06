"use client";

import { IAboutMeResponse } from "@/types/aboutMe";
import { GET_ABOUTME } from "@/utils/apolloQuerys";
import { useQuery } from "@apollo/client";
import React from "react";

export default function AboutMe() {
  const { data, loading, error } = useQuery<IAboutMeResponse>(GET_ABOUTME);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(data);
  return <div>AboutMe</div>;
}
