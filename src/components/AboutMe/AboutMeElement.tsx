"use client";
import { GET_ABOUTME_ELEMENT } from "@/utils/apolloQuerys";
import ScrollLine from "../shared/ScrollLine";
import { IAboutMeElementResponse } from "@/types/aboutMe";
import { useQuery } from "@apollo/client";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function AboutMeElement() {
  const { data, loading, error } =
    useQuery<IAboutMeElementResponse>(GET_ABOUTME_ELEMENT);
  const locale = useLocale();
  const aboutMe = data?.findFirstAboutMe;
  const t = useTranslations("AboutMeElement");
  const translation = aboutMe?.translations?.find(
    (translation) => translation.languageCode === locale
  );

  return (
    <div className="flex flex-col items-center z-[0] relative">
      <ScrollLine />
      <div className="flex flex-col items-center md:flex-row md:gap-[40px] lg:gap-[70px] xl:gap-[120px]  mt-[40px] md:mt-[30px] lg:mt-[40px]">
        <div className="w-full overflow-hidden relative h-[80vw]">
          <Image
            className="absolute rounded-t-full inset-0 min-h-full min-w-[200%] left-[-50%]"
            width={2000}
            height={2000}
            src={aboutMe?.image ? aboutMe.image : ""}
            alt="aboutMe"
          />
        </div>
        <div className="w-full px-[20px] relative">
          <div className="flex justify-center">
            <h2
              className={cn(
                " leading-[100%]  text-primary dark:text-linearPink",
                locale === "en"
                  ? "font-geom translate-x-[-40px] text-[50px]"
                  : "font-firago translate-x-[-70px] text-[42px]"
              )}
            >
              {t("about")}
            </h2>
            <h2
              className={cn(
                "absolute  leading-[100%] text-linearPink dark:text-secondary",
                locale === "en"
                  ? "font-geom top-[26px] rotate-[-8deg] left-[46%] text-[50px]"
                  : "font-firago top-[22px] left-[36%] rotate-[-6deg] text-[42px]"
              )}
            >
              {" "}
              {t("me")}
            </h2>
          </div>
          <p className="mt-[30px] font-bold text-primary/80">
            {translation?.about}
          </p>
        </div>
      </div>
    </div>
  );
}
