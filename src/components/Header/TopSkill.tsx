import { ITopSkills } from "@/types/linkedin";
import React from "react";

export default function TopSkill({
  topSkill,
  locale,
}: {
  topSkill: ITopSkills;
  locale: string;
}) {
  const data = topSkill?.translations?.find(
    (translation) => translation.languageCode === locale
  );
  return <p>{data && data.name}</p>;
}
