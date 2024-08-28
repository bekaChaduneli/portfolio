import {
  BooksAnimation,
  GithubAnimation,
  LinkedinAnimation,
  ProfileAnimation,
  SkillsAnimation,
} from "@/utils/motion";
import { Icons } from "../shared/Icons";
import { useEffect } from "react";
import Image from "next/image";
import { HeaderInfosProps } from "@/types/ComponentTypes";
import usePopUpStore from "@/store/use-popup-store";
import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import useSoundStore from "@/store/use-sound-store";
import useSound from "use-sound";
import pop from "@/sounds/pop-up.mp3";

export const HeaderInfos: React.FC<HeaderInfosProps> = ({ scrollHover }) => {
  const locale = useLocale();
  const { onOpen, isOpen, type } = usePopUpStore();
  const { sound } = useSoundStore();
  const [popUp] = useSound(pop);
  const t = useTranslations("Home");
  useEffect(() => {
    const profile = document.querySelector("#profile");
    const books = document.querySelector("#books");
    const linkedin = document.querySelector("#linkedin");
    const github = document.querySelector("#github");
    const skills = document.querySelector("#skills");

    if (linkedin && profile && books && github && skills) {
      setTimeout(() => {
        ProfileAnimation(profile);
      }, 770);

      setTimeout(() => {
        SkillsAnimation(skills);
      }, 370);

      setTimeout(() => {
        BooksAnimation(books);
      }, 670);
      setTimeout(() => {
        GithubAnimation(github);
      }, 800);
      setTimeout(() => {
        LinkedinAnimation(linkedin);
      }, 620);
    }
  }, []);
  return (
    <>
      <div
        className={cn(
          "hidden transition-all h-full w-full !duration-[2s] lg:block absolute z-[0]",
          scrollHover ?
            "opacity-[75%] scale-[96%]": 
            "opacity-[100%] scale-[100%]"
          
        )}
      >
        <span
          id="profile"
          className="w-[110px] h-[110px] top-0 absolute lg:right-[44px] xl:right-[82px] opacity-0 rotate-[-6deg] cursor-pointer group"
          onClick={() => {
            onOpen("profile");
            sound && popUp();
          }}
        >
          <Icons.WhoIAmArrow
            className={cn(
              "absolute z-[0] w-[90px] h-[100px] rotate-[20deg] translate-x-[48px] translate-y-[-28px] xl:translate-x-[64px] scale-[70%] xl:scale-[80%] opacity-0 transition-all duration-300 group-hover:opacity-[100%]",
              isOpen && type === "profile" && "opacity-100"
            )}
          />

          <span
            className={cn(
              "absolute z-[2] font-bold xl:text-[20px] rotate-[13deg] transition duration-300 opacity-[0%] group-hover:opacity-[100%] xl:translate-y-[-43px] uppercase translate-y-[-34px] text-[#203277] dark:text-[#a9baff]",
              locale === "en" ? 
                "font-geom translate-x-[-2px] xl:translate-x-[-8px]"
                  :
                "font-firago translate-x-[-8px] xl:translate-x-[-14px]",
                isOpen && type === "profile" && "opacity-[100%]" 
              
            )}
          >
            {t("who-i-am")}
          </span>
          <span
            className={cn(
              "lg:w-[96px] lg:h-[96px] xl:w-[110px] transition-all duration-300 xl:h-[110px] bg-[#203277] dark:bg-[#a9baff] absolute rounded-t-full rounded-br-full group-hover:rounded-bl-full",
              isOpen && type === "profile"
                ? "rounded-bl-full"
                : "rounded-bl-[0%]"
            )}
          />
          <Image
            className="lg:w-[80px] xl:w-[94px] translate-x-[8px] translate-y-[7px] rounded-full absolute"
            src="/profile.jpg"
            alt="profile"
            width={650}
            height={650}
          />
        </span>
        <span
          id="books"
          className="left-[34px] xl:left-[38px] absolute top-0 max-w-max w-max-content opacity-0 rotate-[-6deg] cursor-pointer group"
          onClick={() => {
            onOpen("books");
            sound && popUp();
          }}
        >
          <span
            className={cn(
              " flex flex-col text-[14px] xl:text-[16px] items-center lg:gap-[8px] xl:gap-[10px] lg:rounded-t-[16px] xl:rounded-t-[20px] lg:rounded-bl-[16px] xl:rounded-bl-[20px] py-[17px] xl:py-[20px] lg:px-[17px] xl:px-[20px] bg-[#f7f2f2]/[.85] backdrop-blur-[6px] backdrop-saturate-[1.4] text-[#203277] uppercase xl:left-[12px] transition-all duration-300 group-hover:rounded-[30px] group-hover:xl:rounded-[40px]",
              isOpen && type === "books" && "rounded-[30px] xl:rounded-[40px]"
            )}
          >
            <Icons.ReadingArrow
              className={cn(
                "absolute z-[0] w-[90px] h-[100px] translate-x-[-69px] translate-y-[-60px] xl:translate-x-[-81px] scale-[90%] xl:scale-[105%] transition-all duration-300 opacity-0 group-hover:opacity-[100%]",
                isOpen && type === "books" && "opacity-100"
              )}
            />
            <span
              className={cn(
                "absolute z-[2] font-bold transition duration-300 opacity-0 group-hover:opacity-[100%] xl:translate-x-[8px] xl:translate-y-[-59px] uppercase translate-y-[-50px] text-[#203277] dark:text-[#a9baff]",
                locale === "en" ?
                  "font-geom xl:text-[20px]": 
                  "font-firago xl:text-[17px]",
                   isOpen && type === "books" && "opacity-[100%]"
                
              )}
            >
              {t("reading-list")}
            </span>
            <Image
              className="lg:w-[86px] xl:w-[100px]"
              src="/books.png"
              alt="books"
              width={650}
              height={650}
            />
          </span>
        </span>
        <span
          id="linkedin"
          className="lg:w-[80px] xl:w-[110px] bottom-0 absolute h-[110px] lg:left-[80px] opacity-0 rotate-[4deg]"
          onClick={() => {
            onOpen("linkedin");
            sound && popUp();
          }}
        >
          <span
            className={cn(
              "transition-all duration-300 flex absolute left-0 bottom-0 items-center max-w-max w-max-content lg:rounded-[20px] cursor-pointer xl:rounded-[30px] hover:rounded-[70%] bounce-age lg:p-[10px] xl:p-[14px] bg-[#203277] dark:bg-[#a9baff] backdrop-blur-[6px] backdrop-saturate-[1.4] text-secondary group",
              isOpen && type === "linkedin" && "!rounded-[70%]"
            )}
          >
            <Icons.LinkedinArrow
              className={cn(
                "absolute z-[0] w-[90px] h-[100px] translate-x-[-55px] translate-y-[-35px] xl:translate-y-[-50px] scale-[90%] transition-all duration-300 opacity-0  group-hover:opacity-[100%] xl:scale-[105%]",
                isOpen && type === "linkedin" && "opacity-100"
              )}
            />
            <span
              className={cn(
                "absolute z-[2] font-geom xl:text-[20px] transition duration-300 opacity-0 group-hover:opacity-[100%] translate-x-[12px] xl:translate-y-[-82px] uppercase translate-y-[-64px] text-[#203277] dark:text-[#a9baff]",
                isOpen && type === "linkedin" && "opacity-[100%]"
              )}
            >
              Linkedin
            </span>
            <Image
              className="lg:w-[120px] xl:w-[154px]"
              src="/linkedin.png"
              alt="linkedin"
              width={650}
              height={650}
            />
          </span>
        </span>
        <span
          id="github"
          className="flex absolute right-[62px] opacity-0 cursor-pointer bottom-0 group items-center max-w-max w-max-content"
          onClick={() => {
            onOpen("github");
            sound && popUp();
          }}
        >
          <span
            className={cn(
              "lg:rounded-[14px] transition-all duration-300 xl:rounded-[20px] py-[12px] lg:px-[10px] xl:px-[14px] bg-[#f7f2f2]/[.85] backdrop-blur-[6px] backdrop-saturate-[1.4] rotate-[4deg]  group-hover:rounded-[80%]",
              isOpen && type === "github" && "!rounded-[80%]"
            )}
          >
            <Icons.GithubArrow
              className={cn(
                "absolute z-[0] transition-all duration-300 opacity-0 group-hover:opacity-[100%] w-[90px] h-[100px] translate-x-[42px] xl:translate-x-[66px] translate-y-[-51px] xl:translate-y-[-50px] scale-[90%] xl:scale-[105%]",
                isOpen && type === "github" && "opacity-100"
              )}
            />
            <span
              className={cn(
                "absolute z-[2] font-geom xl:text-[20px] rotate-[2deg] transition-all duration-300 opacity-0 group-hover:opacity-[100%] translate-x-[6px] xl:translate-x-[12px] xl:translate-y-[-56px] uppercase translate-y-[-48px] text-[#203277] dark:text-[#a9baff]",
                isOpen && type === "github" && "opacity-100"
              )}
            >
              Github
            </span>
            <Image
              className="lg:w-[68px] xl:w-[90px]"
              src="/github.png"
              alt="github"
              width={650}
              height={650}
            />
          </span>
        </span>
      </div>
    </>
  );
};
