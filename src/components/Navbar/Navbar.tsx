"use client";
import { usePathname } from "next/navigation";
import Calendly from "./Calendly";
import LanguageChanger from "./LanguageChanger";
import TransitionLink from "../shared/TransitionLink";
import classNames from "classnames";
import ThemeSwitch from "./ThemeSwitch";
import SoundSwitcher from "./SoundSwitcher";
import { Turn as Hamburger } from "hamburger-react";
import TranslationsProvider from "@/components/TranslationsProvider";
import { useEffect, useState } from "react";
import { Archive, ChevronDown, Crown } from "lucide-react";
import Image from "next/image";
import { useDisableOverflow } from "@/hooks/useDisableOverflow";
import { useTheme } from "next-themes";
import Menu from "./Menu";
import { useTranslations } from "@/hooks/useTransitions";

const i18nNamespaces = ["navbar"];

export default function Navbar({ locale }: { locale: string }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  useDisableOverflow(isOpen);

  const changeMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      position > 110 ? setScrolled(true) : setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const translations = useTranslations(locale, i18nNamespaces);

  if (!translations) {
    return <div>Loading...</div>;
  }

  const { t, resources } = translations;
  const htmlTag = document.documentElement;
  const langAttribute = htmlTag.getAttribute("lang");

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <div className="flex justify-center p-[24px]">
        <div
          className={classNames(
            "hidden lg:flex fixed z-[5] w-[954px] xl:w-[1200px] backdrop-filter transition-all duration-500 justify-between rounded-[70px] px-[6px]",
            {
              " bg-[#f7f2f2]/[.78] duration-500 dark:bg-[#37498e]/[.78] backdrop-blur-[6px] backdrop-saturate-[1.4]":
                scrolled,
            }
          )}
        >
          <div
            className={classNames(
              "flex px-3 gap-[20px] xl:gap-[35px] rounded-[30px] transition duration-500 relative",
              {
                "gap-[7px]": langAttribute === "ka",
              }
            )}
          >
            <span className="py-3">
              <TransitionLink
                className={classNames(
                  "px-4 h-full rounded-[24px] font-bold  text-[#2b3b7a] dark:text-[#ede7de]",
                  {
                    "backdrop-filter bg-[#ffffffa2] bg-opacity-[70%] dark:bg-opacity-[70%] dark:bg-[#4960bf9f] backdrop-saturate-[2] backdrop-blur-[20px]":
                      pathname === `/${locale}`,
                  }
                )}
                href={`/${locale}`}
              >
                {t("home")}
              </TransitionLink>
            </span>
            <span className="py-3">
              <TransitionLink
                className={classNames(
                  "px-4 rounded-[24px] h-full font-bold  text-[#2b3b7a] dark:text-[#ede7de]",
                  {
                    " backdrop-filter bg-[#ffffffa2] bg-opacity-[70%] dark:bg-opacity-[70%] dark:bg-[#4960bf9f] backdrop-saturate-[2] backdrop-blur-[20px]":
                      pathname === `/${locale}/about`,
                  }
                )}
                href={`/${locale}/about`}
              >
                {t("about")}
              </TransitionLink>
            </span>

            <span className="py-3 group">
              <button
                className={classNames(
                  "px-4 rounded-[24px] font-bold flex items-center text-[#2b3b7a] dark:text-[#ede7de] h-full",
                  {
                    " backdrop-filter bg-[#ffffffa2] bg-opacity-[70%] dark:bg-opacity-[70%] dark:bg-[#4960bf9f] backdrop-saturate-[2] backdrop-blur-[20px]":
                      pathname === `/${locale}/main` ||
                      pathname === `/${locale}/archive`,
                  }
                )}
              >
                {pathname === `/${locale}/main`
                  ? t("main")
                  : pathname === `/${locale}/archive`
                  ? t("archive")
                  : t("projects")}
                <ChevronDown className="w-[16px] h-[16px] transition-all duration-300 group-hover:rotate-180 ml-[8px]" />
                <div className="hidden group-hover:flex hover:flex relative right-[275px] top-[78%]">
                  <div className="w-[500px] h-[12px] absolute"></div>
                  <span className="pt-[10px]">
                    <span className="absolute w-[470px] custom-order h-[274px] rounded-[8px] bg-[#f7f2f2]/[.78] duration-500 dark:bg-[#37498e]/[.78] backdrop-blur-[6px] backdrop-saturate-[1.4] flex flex-col justify-between">
                      <TransitionLink
                        className="p-2 pb-0"
                        href={`/${locale}/main`}
                      >
                        <div
                          className={classNames(
                            "w-[454px] box-shadow-light dark:box-shadow-dark filter saturate-[1.2] rounded-[8px] backdrop-filter hover:bg-[#e7e1d9bb] dark:hover:bg-[#203277]/[.9] transition-all duration-300 backdrop-blur-[20px]",
                            {
                              "bg-[#e7e1d9aa] dark:bg-[#203277]/[.9]":
                                pathname.endsWith("main"),
                            }
                          )}
                        >
                          <span className="p-[25px] flex items-start justify-between">
                            <span className="h-[74px] min-w-[74px] w-[74px] rounded-full flex items-center justify-center  bg-[#e2d7c573]/[0.7] dark:bg-[#1d2f7642]/[0.7] box-shadow-light dark:box-shadow-dark">
                              <Crown className="cover w-[26px] h-[26px] text-yellow-600 dark:text-yellow-300 transition-all duration-300 hover:scale-[120%] scale-[100%]" />
                            </span>
                            <span className="flex flex-col gap-[8px] items-start max-w-[260px] text-left">
                              <h3 className="text-[18px] dark:text-[#6f87eb]">
                                {t("main")}
                              </h3>
                              <span className="text-[12px] text-[#748cecfa] dark:text-[#dedeed] font-normal">
                                {t("main-text")}
                              </span>
                            </span>
                          </span>
                        </div>
                      </TransitionLink>
                      <TransitionLink
                        className="p-2 pt-0"
                        href={`/${locale}/archive`}
                      >
                        <div
                          className={classNames(
                            "w-[454px] box-shadow-light dark:box-shadow-dark filter saturate-[1.2] rounded-[8px] backdrop-filter hover:bg-[#e7e1d9aa] dark:hover:bg-[#203277]/[.9] transition-all duration-300 backdrop-blur-[20px]",
                            {
                              "bg-[#e7e1d9aa] dark:bg-[#203277]/[.9]":
                                pathname.endsWith("archive"),
                            }
                          )}
                        >
                          <span className="p-[25px] flex items-start justify-between">
                            <span className="h-[74px] min-w-[74px] w-[74px] rounded-full flex items-center justify-center  bg-[#e2d7c573]/[0.7] dark:bg-[#1d2f7642]/[0.7] box-shadow-light dark:box-shadow-dark">
                              <Archive className="cover w-[26px] h-[26px] transition-all duration-300 hover:scale-[120%] scale-[100%]" />
                            </span>
                            <span className="flex flex-col gap-[8px] items-start max-w-[260px] text-left">
                              <h3 className="text-[18px] dark:text-[#6f87eb]">
                                {t("archive")}
                              </h3>
                              <span className="text-[12px] text-[#748cecfa] dark:text-[#dedeed] font-normal">
                                {t("archive-text")}
                              </span>
                            </span>
                          </span>
                        </div>
                      </TransitionLink>
                    </span>
                  </span>
                </div>
              </button>
            </span>

            <span className="py-3">
              <TransitionLink
                className={classNames(
                  "px-4 rounded-[24px] h-full font-bold relative text-[#2b3b7a] dark:text-[#ede7de]",
                  {
                    "backdrop-filter bg-[#ffffffa2] bg-opacity-[70%] dark:bg-opacity-[70%] dark:bg-[#4960bf9f] backdrop-saturate-[2] backdrop-blur-[20px]":
                      pathname === `/${locale}/blog`,
                  }
                )}
                href={`/${locale}/blog`}
              >
                {t("blog")}
              </TransitionLink>
            </span>
          </div>
          <div
            className={classNames(
              "flex gap-[16px] xl:gap-[30px] py-3 px-3 rounded-[30px] transition duration-500 relative items-center",
              {
                "gap-[px]": langAttribute === "ka",
              }
            )}
          >
            <Calendly t={t} />
            <ThemeSwitch />
            <SoundSwitcher />
            <LanguageChanger locale={locale} />
          </div>
        </div>
        <div className="flex cursor-pointer lg:hidden fixed z-[45] w-full px-[20px] min-[420px]:px-[28px] sm:px-[30px] sm:py-[4px] md:py-[12px] md:px-[40px] items-center justify-between">
          <TransitionLink href={`/${locale}`} className="cursor-pointer group">
            <Image
              className="w-[48px] group-hover:scale-[85%] transition duration-200 h-[48px] border-[2px] sm:w-[54px] sm:h-[54px] md:w-[58px] md:h-[58px] sm:border-[3px] border-[#283D8B] dark:border-[#ede7de] rounded-full"
              src="/profile.jpg"
              alt="profile"
              width={650}
              height={650}
            />
          </TransitionLink>
          <div
            className={
              theme.theme === "light" ? "navButton_light" : "navButton_dark"
            }
          >
            <Hamburger
              size={24}
              rounded
              color={
                isOpen
                  ? "#CE1B1B"
                  : theme.theme === "light"
                  ? "#ede7de"
                  : "#283D8B"
              }
              toggled={isOpen}
              toggle={changeMenu}
            />
          </div>
        </div>

        <Menu t={t} locale={locale} isOpen={isOpen} changeMenu={changeMenu} />
      </div>
    </TranslationsProvider>
  );
}
