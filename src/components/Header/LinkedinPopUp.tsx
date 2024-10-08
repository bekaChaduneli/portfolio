import { cn } from "@/lib/utils";
import usePopUpStore from "@/store/use-popup-store";
import { ILinkedinResponse } from "@/types/linkedin";
import { GET_LINKEDIN } from "@/utils/apolloQuerys";
import { useQuery } from "@apollo/client";
import { Gem } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import TopSkillsList from "./TopSkillsList";
import Posts from "./Posts";

export default function LinkedinPopUp() {
  const { data, loading, error } = useQuery<ILinkedinResponse>(GET_LINKEDIN);
  const { isOpen, type } = usePopUpStore();

  const locale = useLocale();
  const t = useTranslations("Linkedin");

  if (error) return <p>Error: {error.message}</p>;

  const linkedin = data?.findFirstLinkedin.translations?.find(
    (translation) => translation.languageCode === locale
  );

  return (
    <div
      className={cn(
        "w-[670px] xl:w-[822px] h-[560px] xl:h-[600px]  bg-[#f7f2f2]/[.92] py-[8px] px-[10px] xl:px-[14px] xl:py-[12px] backdrop-blur-[6px] backdrop-saturate-[1.4] rounded-[8px] absolute origin-bottom-left left-[144px] xl:left-[160px] bottom-[50px] xl:bottom-[36px] z-[11]",
        isOpen && type === "linkedin"
          ? " transition-all duration-700 scale-100"
          : "scale-0"
      )}
    >
      <div className="overflow-x-hidden overflow-y-scroll custom-linkedin-scrollbar pr-[2px] pb-[6px]">
        <div className="relative mb-[42px]">
          <Image
            width={800}
            height={800}
            alt="banner"
            src={
              data?.findFirstLinkedin.banner
                ? data?.findFirstLinkedin.banner
                : ""
            }
            className="w-full h-auto rounded-t-[16px]"
          />
          <Image
            width={400}
            height={400}
            alt="profile"
            src={
              data?.findFirstLinkedin.image ? data?.findFirstLinkedin.image : ""
            }
            className="w-[130px] xl:w-[150px] h-[130px] xl:h-[150px] absolute rounded-full border-[4px] border-secondary top-[90px] xl:top-[112px] left-[22px]"
          />
        </div>
        <div className="px-[22px] h-[294px]">
          <div className="flex justify-between items-center mb-[18px]">
            <div>
              <h1
                className={cn(
                  "text-primary text-[22px] xl:text-[24px] font-bold leading-[100%]",
                  locale === "ka" && "font-firago"
                )}
              >
                {linkedin?.name}
              </h1>
              <h1
                className={cn(
                  "xl:text-[18px] text-primary/75 font-light",
                  locale === "ka" && "font-firago font-medium"
                )}
              >
                {t("profession")}
              </h1>
            </div>
            <div>
              <div className="flex gap-[12px] items-center mb-[8px]">
                <Image
                  width={100}
                  height={100}
                  alt="work"
                  src="/work.jpeg"
                  className="h-[32px] rounded-full w-auto"
                />
                <h2
                  className={cn(
                    "text-primary font-bold font-geom text-[14px]",
                    locale === "ka" && "font-firago"
                  )}
                >
                  {linkedin?.company}
                </h2>
              </div>
              <div className="flex gap-[12px] items-center w-[144px]">
                <Image
                  width={100}
                  height={100}
                  alt="university"
                  src="/university.jpg"
                  className="h-[32px] w-auto rounded-full"
                />
                <h2
                  className={cn(
                    "text-primary font-bold font-geom max-w-[140px] line-clamp-2 text-[14px]",
                    locale === "ka" && "font-firago"
                  )}
                >
                  {linkedin?.university}
                </h2>
              </div>
            </div>
          </div>
          <h1
            className={cn(
              "text-[20px] font-geom font-bold text-primary mb-[8px]",
              locale === "ka" && "font-firago"
            )}
          >
            {t("about")}
          </h1>
          <p className="text-[14px] text-primary/75 mb-[14px]">
            {linkedin?.bio}
          </p>
          <div className="mb-[14px] rounded-[12px] border-[1px] border-primary/25 flex gap-[12px] items-start p-[16px]">
            <Gem className="w-[24px] h-auto" color="#2b3b7a" />
            <div>
              <h1
                className={cn(
                  "text-primary font-bold text-[18px]",
                  locale === "ka" && "font-firago"
                )}
              >
                {t("topSkills")}
              </h1>
              <TopSkillsList topSkills={data?.findFirstLinkedin.topSkills} />
            </div>
          </div>
          <h1
            className={cn(
              "text-[20px] font-geom font-bold text-primary mb-[8px]",
              locale === "ka" && "font-firago"
            )}
          >
            {t("lastPosts")}
          </h1>
          <Posts
            t={t}
            posts={data?.findFirstLinkedin.posts}
            locale={locale}
            logo={data?.findFirstLinkedin.image}
            name={linkedin?.name}
          />
        </div>
      </div>
    </div>
  );
}
