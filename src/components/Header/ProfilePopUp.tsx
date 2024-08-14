import { cn } from "@/lib/utils";
import usePopUpStore from "@/store/use-popup-store";
import { IProfileResponse } from "@/types/profile";
import { GET_PROFILE } from "@/utils/apolloQuerys";
import { useQuery } from "@apollo/client";
import { useLocale } from "next-intl";
import Image from "next/image";
import React from "react";
import {
  TextEffectPerChar,
  TextEffectPerWord,
  TextEffectWithCustomVariants,
} from "../animations/text-effect";

export default function ProfilePopUp() {
  const { data, loading, error } = useQuery<IProfileResponse>(GET_PROFILE);
  const { isOpen, type } = usePopUpStore();
  const locale = useLocale();

  const profile = data?.findFirstProfile.translations?.find(
    (translation) => translation.languageCode === locale
  );

  if (!data?.findFirstProfile) {
    return null;
  }

  return (
    <div
      className={cn(
        "w-[700px] h-[480px] overflow-x-hidden  py-[16px] px-[24px] xl:px-[36px] xl:py-[28px] xl:w-[910px] xl:h-[570px] bg-[#f7f2f2]/[.92] backdrop-blur-[6px] backdrop-saturate-[1.4] rounded-[8px] absolute origin-top-right right-[138px] xl:right-[150px] top-[48px] xl:top-[54px] z-[11]",
        isOpen && type === "profile"
          ? " transition-all duration-700 scale-100"
          : "scale-0"
      )}
    >
      <div className="flex justify-between items-center mb-[16px]">
        <Image
          className="w-[240px] h-[240px] rounded-full"
          src={data?.findFirstProfile.image}
          alt="profile"
          width={600}
          height={600}
        />
        <div className="w-[370px]">
          {isOpen && profile && (
            <>
              <TextEffectPerWord
                className={cn(
                  "text-[32px] text-primary flex text-start w-full",
                  locale === "en" ? "font-geom" : "font-firago"
                )}
                text={`Hi, I'm ${profile?.name}`}
              />
              <TextEffectPerChar
                className={cn(
                  "text-[18px] flex-wrap text-primary flex text-start w-full",
                  locale === "en" ? "font-geom" : "font-firago"
                )}
                text={profile?.aboutMe}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
