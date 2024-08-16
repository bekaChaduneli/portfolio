"use client";
import { GET_ABOUTME_ELEMENT } from "@/utils/apolloQuerys";
import ScrollLine from "../shared/ScrollLine";
import { IAboutMeElementResponse } from "@/types/aboutMe";
import { useQuery } from "@apollo/client";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

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
      <div className="flex flex-col items-center md:flex-row md:gap-[40px] lg:gap-[70px] xl:gap-[120px]  mt-[30px] md:mt-[30px] lg:mt-[40px]">
        <div className="w-full overflow-hidden relative h-[80vw] mb-[30px] min-[500px]:h-[66vw]">
          <Image
            className="absolute rounded-t-full inset-0 min-h-full min-w-[200%] left-[-50%] min-[500px]:min-w-[150%] min-[500px]:left-[-25%]"
            width={2000}
            height={2000}
            src={aboutMe?.image ? aboutMe.image : ""}
            alt="aboutMe"
          />
        </div>
        <div className="w-full px-[20px] relative">
          <div className="flex justify-center ">
            <h2
              className={cn(
                " leading-[100%]  text-primary dark:text-linearPink",
                locale === "en"
                  ? "font-geom translate-x-[-40px] text-[50px] min-[500px]:text-[70px]"
                  : "font-firago translate-x-[-70px] text-[60px] min-[500px]:text-[66px]"
              )}
            >
              {t("about")}
            </h2>
            <h2
              className={cn(
                "absolute  leading-[100%] text-linearPink dark:text-secondary",
                locale === "en"
                  ? "font-geom top-[26px] min-[500px]:top-[36px] rotate-[-8deg] left-[46%] min-[500px]:left-[47%] text-[50px] min-[500px]:text-[70px]"
                  : "font-firago top-[36px] min-[500px]:top-[40px] left-[34%] min-[500px]:left-[38%] rotate-[-6deg] min-[500px]:rotate-[-4deg] text-[48px] min-[500px]:text-[55px]"
              )}
            >
              {" "}
              {t("me")}
            </h2>
          </div>
          <p className="mt-[50px] line-clamp-[9] italic font-bold text-primary/80 dark:text-secondary/80 text-[14px] mb-[24px]">
            {translation?.about}
          </p>
          <Link
            className="text-[19px] w-full flex justify-center py-[6px] rounded-[16px] bg-primary text-secondary font-geom"
            href="/about"
          >
            {t("seeMore")}
          </Link>
        </div>
      </div>
    </div>
  );
}
