import React from "react";

export default function TopSkill({
  topSkill,
  locale,
}: {
  topSkill: any;
  locale: string;
}) {
  const data = topSkill?.translations?.find(
    (translation: any) => translation.languageCode === locale
  );
  return <p>{data.name}</p>;
}
