import { cn } from "@/lib/utils";
import usePopUpStore from "@/store/use-popup-store";
import { IProfileResponse } from "@/types/profile";
import { GET_PROFILE } from "@/utils/apolloQuerys";
import { useQuery } from "@apollo/client";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import {
  TextEffectPerChar,
  TextEffectPerWord,
} from "../animations/text-effect";
import Link from "next/link";
import { Facebook, Linkedin } from "lucide-react";
import Hobby from "./Hobby";
import { AccordionVariant } from "../animations/accordions";

export default function ProfilePopUp() {
  const { data, loading, error } = useQuery<IProfileResponse>(GET_PROFILE);
  const { isOpen, type } = usePopUpStore();
  const locale = useLocale();

  const { onClose } = usePopUpStore();

  const t = useTranslations("Profile");

  const profile = data?.findFirstProfile.translations?.find(
    (translation) => translation.languageCode === locale
  );

  const socials = data?.findFirstProfile.socials;
  const hobbys = data?.findFirstProfile.hobbys;
  const questions = data?.findFirstProfile.questions;
  if (!data?.findFirstProfile) {
    return null;
  }

  return (
    <div
      className={cn(
        "w-[700px] h-[480px] overflow-hidden  py-[16px] px-[24px] xl:px-[20px] xl:py-[24px] xl:w-[910px] xl:h-[570px] bg-[#f7f2f2]/[.92] backdrop-blur-[6px] backdrop-saturate-[1.4] rounded-[8px] absolute origin-top-right right-[138px] xl:right-[150px] top-[48px] xl:top-[54px] z-[11]",
        isOpen && type === "profile"
          ? " transition-all duration-700 scale-100"
          : "scale-0"
      )}
    >
      <div className="overflow-x-hidden overflow-y-scroll custom-linkedin-scrollbar pr-[2px] pb-[6px] h-[446px] xl:h-[521px]">
        <div className="flex justify-between items-center mb-[24px] xl:mb-[30px]">
          <Image
            className="w-[160px] h-[160px] xl:w-[200px] xl:h-[200px] rounded-full"
            src={data?.findFirstProfile.image}
            alt="profile"
            width={600}
            height={600}
          />
          <div className=" w-[456px] xl:w-[572px]">
            {isOpen && profile && (
              <>
                <TextEffectPerWord
                  className={cn(
                    " mb-[6px] !leading-[100%] text-primary flex text-start w-full",
                    locale === "en"
                      ? "font-geom text-[64px] xl:text-[80px]"
                      : "font-firago text-[34px] xl:text-[44px]"
                  )}
                  text={`${t("hiIam")} ${profile?.name}`}
                />
                <TextEffectPerChar
                  className={cn(
                    " text-primary capitalize mb-[6px]",
                    locale === "en"
                      ? " text-[16px] xl:text-[20px]"
                      : "font-firago text-[17px] xl:text-[22px]"
                  )}
                  text={`${profile.profession} ${
                    locale === "en" ? "from" : ""
                  } ${profile.location}${locale === "ka" ? "-დან" : ""}`}
                />
                <span
                  className={cn(
                    "text-[14px] mb-[8px] opacity-0 xl:text-[16px] flex-wrap text-primary/70 flex text-start transition-all duration-[2s] w-full",
                    isOpen && "opacity-[100]"
                  )}
                >
                  {profile?.aboutMe}
                </span>

                <div className="flex gap-[12px] items-center">
                  {socials?.map((social, index) => {
                    return (
                      <>
                        {social.name.toLowerCase() === "facebook" ? (
                          <Link
                            key={index}
                            href={social.link}
                            target="_blank"
                            className="hover:scale-[130%] duration-300 transition-all"
                          >
                            <Facebook
                              color="#2b3b7a"
                              className="w-[24px] h-[24px]"
                            />
                          </Link>
                        ) : social.name.toLowerCase() === "linkedin" ? (
                          <>
                            <Link
                              key={index}
                              href={social.link}
                              target="_blank"
                              className="hover:scale-[110%] duration-300 transition-all"
                            >
                              <Linkedin
                                color="#2b3b7a"
                                className="w-[24px] h-[24px]"
                              />
                            </Link>
                          </>
                        ) : (
                          social.name.toLowerCase() === "goodreads" && (
                            <>
                              <Link
                                key={index}
                                href={social.link}
                                target="_blank"
                                className="hover:scale-[110%] relative w-[24px] h-[24px] duration-300 transition-all border-[2px] border-primary rounded-full"
                              >
                                <span className="absolute text-primary font-geom left-[50%] top-[50%] translate-x-[-46%] translate-y-[-62%]">
                                  g
                                </span>
                              </Link>
                            </>
                          )
                        )}
                      </>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>
        <h2
          className={cn(
            "text-[20px] font-geom font-bold text-primary mb-[8px]",
            locale === "ka" && "font-firago"
          )}
        >
          {t("experience")}
        </h2>
        <p className="text-[14px] mb-[6px] text-primary/75">
          {profile?.experience}
        </p>
        <span
          className={cn(
            "text-primary/90 items-center text-[14px] font-light flex mb-[24px] gap-[8px]"
          )}
        >
          {t("contactMe")}{" "}
          <strong
            className={cn(
              "font-bold",
              locale === "en"
                ? "font-geom text-[14px] xl:text-[16px]"
                : "font-firago text-[15px] xl:text-[17px]"
            )}
          >
            {data?.findFirstProfile.mail}
          </strong>
        </span>
        <h2
          className={cn(
            "text-[20px] font-geom font-bold text-primary mb-[8px]",
            locale === "ka" && "font-firago"
          )}
        >
          {t("university")}
          {profile?.university}
        </h2>
        <p className="text-[14px] mb-[24px] xl:mb-[30px] text-primary/75">
          {profile?.universityAbout}
        </p>
        <h2
          className={cn(
            "text-[20px] xl:text-[24px] font-geom font-bold text-primary mb-[8px]",
            locale === "ka" && "font-firago"
          )}
        >
          {t("hobbys")}
        </h2>
        <div className="flex flex-wrap justify-start gap-[14px] xl:gap-[20px] mb-[24px]">
          {hobbys?.map((hobby, index) => {
            return <Hobby hobby={hobby} key={index} locale={locale} />;
          })}
        </div>
        <h2
          className={cn(
            "text-[20px] xl:text-[24px] font-geom font-bold text-primary mb-[8px]",
            locale === "ka" && "font-firago"
          )}
        >
          {t("questions")}
        </h2>
        <AccordionVariant questions={questions} locale={locale} />
        <Link
          className={cn(
            "w-full flex justify-center  py-[12px] mt-[16px] rounded-[24px] bg-primary hover:bg-[#131c3e] transition-all duration-300 text-secondary text-[20px] xl:text-[22px]",
            locale == "en" ? "font-geom" : "font-firago"
          )}
          onClick={() => {
            onClose();
          }}
          href="/about"
        >
          {t("seeMore")}
        </Link>
      </div>
    </div>
  );
}
