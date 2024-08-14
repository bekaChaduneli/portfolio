import React from "react";
import TopSkill from "./TopSkill";
import { useLocale } from "next-intl";
import { Sparkle } from "lucide-react";
import { ITopSkills } from "@/types/linkedin";

export default function TopSkillsList({
  topSkills,
}: {
  topSkills: ITopSkills[] | undefined;
}) {
  const locale = useLocale();
  return (
    <div className="text-[14px] font-light text-primary flex items-center">
      {topSkills?.map((topSkill: ITopSkills, index: number) => {
        return (
          <span key={index} className="flex items-center">
            <TopSkill locale={locale} topSkill={topSkill} key={index} />
            {index !== topSkills.length - 1 && (
              <Sparkle
                className="w-[6px] h-[6px] ml-[6px] mr-[6px]"
                color="#2b3b7a"
              />
            )}
          </span>
        );
      })}
    </div>
  );
}
