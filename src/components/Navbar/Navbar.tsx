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
import Image from "next/image";

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
            "hidden lg:flex fixed w-[940px] xl:w-[1100px] backdrop-filter transition-all   duration-500 justify-between rounded-[70px] px-[6px]",
            {
              " bg-[#f7f2f2]/[.6] duration-500 dark:bg-[#37498e]/[.6] backdrop-blur-[6px] backdrop-saturate-[1.4]":
                scrolled,
            }
          )}
        >
          <div className="flex px-3 gap-[20px] xl:gap-[35px] rounded-[30px] transition duration-500 relative">
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
                <div className="hidden group-hover:flex hover:flex relative right-[275px] top-[78%] hover:z-[2]">
                  <div className="w-[500px] h-[12px] absolute"></div>
                  <span className="pt-[10px]">
                    <span className="absolute w-[470px] custom-order h-[308px] rounded-[8px] bg-[#f7f2f2]/[.6] duration-500 dark:bg-[#37498e]/[.6] backdrop-blur-[6px] backdrop-saturate-[1.4] flex flex-col justify-between">
                      <TransitionLink
                        href={`/${locale}/main`}
                        className="p-2 pb-0"
                      >
                        <div className="w-[454px] rounded-[12px] h-[142px] backdrop-filter bg-[#ffffffa2] bg-opacity-[70%] dark:bg-opacity-[70%] dark:bg-[#4960bf9f] backdrop-blur-[20px]">
                          <Image
                            src={"/main.png"}
                            alt="main"
                            width={220}
                            height={264}
                            className="rounded-[12px] object-cover w-full h-full"
                          />
                          <span className="my-[12px] bottom-0 left-0 absolute p-2">
                            <span className="text-[32px]">
                              {t("main")}
                              {" - "}
                            </span>
                            <p className="text-[14px]">{t("main-text")}</p>
                          </span>
                        </div>
                      </TransitionLink>
                      <TransitionLink
                        href={`/${locale}/archive`}
                        className="p-2 "
                      >
                        <div className="w-[454px] rounded-[12px] h-[142px] backdrop-filter bg-[#ffffffa2] bg-opacity-[70%] dark:bg-opacity-[70%] dark:bg-[#4960bf9f] backdrop-blur-[20px]">
                          <Image
                            src={"/archive.png"}
                            alt="archive"
                            width={220}
                            height={264}
                            className="rounded-[12px] object-cover w-full h-full"
                          />
                          <span className="my-[12px] bottom-0 left-0 absolute p-2">
                            <span className="text-[32px] text-start">
                              {t("archive")}
                              {" - "}
                            </span>
                            <p className="text-[14px]">{t("archive-text")}</p>
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
