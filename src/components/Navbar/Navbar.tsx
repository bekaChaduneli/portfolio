"use client";
import { usePathname } from "next/navigation";
import Calendly from "../Calendly";
import LanguageChanger from "../LanguageChanger";
import TransitionLink from "../TransitionLink";
import classNames from "classnames";
import ThemeSwitch from "../ThemeSwitch";
import SoundSwitcher from "../SoundSwitcher";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const i18nNamespaces = ["navbar"];

export default function Navbar({ locale }: { locale: string }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [translations, setTranslations] = useState<any>(null);

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
  useEffect(() => {
    const fetchTranslations = async () => {
      const { t, resources } = await initTranslations(locale, i18nNamespaces);
      setTranslations({ t, resources });
    };

    fetchTranslations();
  }, [locale]);

  if (!translations) {
    return <div></div>;
  }

  const { t, resources } = translations;
  console.log(t("about"));
  console.log(locale);
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <div className="flex justify-center p-[24px] z-[5]">
        <div
          className={classNames(
            "hidden lg:flex fixed w-[940px]  xl:w-[1100px] backdrop-filter transition-all   duration-500 justify-between rounded-[70px] px-[6px] py-[2px]",
            {
              " bg-[#f7f2f2]/[.6] duration-500 dark:bg-[#37498e]/[.6] backdrop-blur-[6px] backdrop-saturate-[1.4]":
                scrolled,
            }
          )}
        >
          <div className="flex py-3 px-3 gap-[20px] xl:gap-[35px] rounded-[30px] transition duration-500 relative">
            <TransitionLink
              className={classNames(
                "px-4 rounded-[24px] font-bold  text-[#2b3b7a] dark:text-[#ede7de]",
                {
                  "backdrop-filter bg-[#ffffffa2] bg-opacity-[70%] dark:bg-opacity-[70%] dark:bg-[#4960bf9f] backdrop-saturate-[2] backdrop-blur-[20px]":
                    pathname === `/${locale}`,
                }
              )}
              href={`/${locale}`}
            >
              {t("home")}
            </TransitionLink>
            <TransitionLink
              className={classNames(
                "px-4 rounded-[24px] font-bold  text-[#2b3b7a] dark:text-[#ede7de]",
                {
                  " backdrop-filter bg-[#ffffffa2] bg-opacity-[70%] dark:bg-opacity-[70%] dark:bg-[#4960bf9f] backdrop-saturate-[2] backdrop-blur-[20px]":
                    pathname === `/${locale}/about`,
                }
              )}
              href={`/${locale}/about`}
            >
              {t("about")}
            </TransitionLink>

            <button className="px-4 rounded-[24px] font-bold flex items-center gap-[8px] text-[#2b3b7a] dark:text-[#ede7de] group">
              {t("projects")}
              <ChevronDown className="w-[16px] h-[16px] transition-all duration-300 group-hover:rotate-180" />
              <div className="hidden group-hover:flex hover:flex absolute left-[110px] top-[50px] pt-[30px]">
                <span className="absolute w-[470px] h-[280px] rounded-[16px] bg-[#f7f2f2]/[.6] duration-500 dark:bg-[#37498e]/[.6] backdrop-blur-[6px] backdrop-saturate-[1.4] flex justify-between">
                  <TransitionLink
                    href={`/${locale}/main`}
                    className="p-4 pr-[0px]"
                  >
                    <div className="w-[210px] rounded-[12px] h-[100%] backdrop-filter bg-[#ffffffa2] bg-opacity-[70%] dark:bg-opacity-[70%] dark:bg-[#4960bf9f] backdrop-blur-[20px]">
                      {/* <Image /> */}
                      <h3 className="my-[12px] text-[32px] absolute bottom-0 left-[50%] translate-x-[-50%]">
                        MAIN
                      </h3>
                    </div>
                  </TransitionLink>
                  <TransitionLink
                    href={`/${locale}/archive`}
                    className="p-4 pl-[0px]"
                  >
                    <div className="w-[210px] rounded-[12px] h-[100%] backdrop-filter bg-[#ffffffa2] bg-opacity-[70%] dark:bg-opacity-[70%] dark:bg-[#4960bf9f] backdrop-blur-[20px]">
                      {/* <Image /> */}
                      <h3 className="my-[12px] text-[32px]  absolute bottom-0 left-[50%] translate-x-[-50%]">
                        ARCHIVE
                      </h3>
                    </div>
                  </TransitionLink>
                </span>
              </div>
            </button>

            <TransitionLink
              className={classNames(
                "px-4 rounded-[24px] font-bold  text-[#2b3b7a] dark:text-[#ede7de]",
                {
                  "backdrop-filter bg-[#ffffffa2] bg-opacity-[70%] dark:bg-opacity-[70%] dark:bg-[#4960bf9f] backdrop-saturate-[2] backdrop-blur-[20px]":
                    pathname === `/${locale}/blog`,
                }
              )}
              href={`/${locale}/blog`}
            >
              {t("blog")}
            </TransitionLink>
          </div>
          <div className="flex gap-[16px] xl:gap-[30px] py-3 px-3 rounded-[30px] transition duration-500 relative items-center">
            <Calendly t={t} />
            <ThemeSwitch />
            <SoundSwitcher />
            <LanguageChanger locale={locale} />
          </div>
        </div>
      </div>
    </TranslationsProvider>
  );
}
