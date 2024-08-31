"use client";
import { usePathname } from "next/navigation";
import Calendly from "./Calendly";
import LanguageChanger from "./LanguageChanger";
import ThemeSwitch from "./ThemeSwitch";
import SoundSwitcher from "./SoundSwitcher";
import { Turn as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";
import { Archive, ChevronDown, Crown } from "lucide-react";
import Image from "next/image";
import { useDisableOverflow } from "@/hooks/useDisableOverflow";
import { useTheme } from "next-themes";
import Menu from "./Menu";
import { useTranslations } from "next-intl";
import NavigationLink from "./NavigationLink";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import useSoundStore from "@/store/use-sound-store";
import useSound from "use-sound";
import menu from "@/sounds/menu-open.mp3";
import NoSsr from "@/hooks/noSsr";
import { cn } from "@/lib/utils";

export default function Navbar({ locale }: { locale: string }) {
  const pathname = usePathname();
  const t = useTranslations("Navbar");
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const { sound } = useSoundStore();
  const [menuSound] = useSound(menu);
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

  const fadeInVariants = fadeIn({
    direction: "down",
    type: "tween",
    delay: 0,
    duration: 1.5,
  });

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0 }}
      className="flex justify-center p-[24px]"
    >
      <motion.div
        variants={fadeInVariants}
        className={cn(
          "hidden lg:flex fixed z-[9] w-[954px] xl:w-[1200px] backdrop-filter transition-all duration-500 justify-between rounded-[70px] px-[6px]",
          scrolled &&
            " bg-[#f7f2f2]/[.6] duration-500 dark:bg-[#37498e]/[.78] backdrop-blur-[10px] backdrop-saturate-[1.4]"
        )}
      >
        <div
          id="nav"
          className={cn(
            "flex px-3 gap-[20px] xl:gap-[35px] rounded-[30px] transition duration-500 relative",

            locale === "ka" && "gap-[7px]"
          )}
        >
          <span className="py-3">
            <NavigationLink
              id="home"
              className={cn(
                "px-4 h-full rounded-[24px] font-bold  text-primary flex items-center dark:text-secondary",
                pathname === `/${locale}` &&
                  "backdrop-filter bg-opacity-[70%] text-secondary dark:text-primary dark:bg-opacity-[70%] bg-primary dark:bg-secondary backdrop-saturate-[2] backdrop-blur-[20px]",
                locale === "en" ? "font-geom" : "font-firago font-bold"
              )}
              href="/"
            >
              {t("home")}
            </NavigationLink>
          </span>
          <span className="py-3">
            <NavigationLink
              id="about"
              className={cn(
                "px-4 rounded-[24px] h-full font-bold  text-primary flex items-center dark:text-secondary",
                pathname === `/${locale}/about` &&
                  "backdrop-filter bg-opacity-[70%] text-secondary dark:text-primary dark:bg-opacity-[70%] bg-primary dark:bg-secondary backdrop-saturate-[2] backdrop-blur-[20px]",
                locale === "en" ? "font-geom" : "font-firago font-bold"
              )}
              href="/about"
            >
              {t("about")}
            </NavigationLink>
          </span>

          <span className="py-3 group">
            <button
              className={cn(
                "px-4 rounded-[24px] font-bold flex items-center text-primary dark:text-secondary h-full",
                pathname === `/${locale}/main` ||
                  (pathname === `/${locale}/archive` &&
                    "backdrop-filter bg-opacity-[70%] text-secondary dark:text-primary dark:bg-opacity-[70%] bg-primary dark:bg-secondary backdrop-saturate-[2] backdrop-blur-[20px]"),
                locale === "en" ? "font-geom" : "font-firago font-bold"
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
                    <NavigationLink id="main" className="p-2 pb-0" href="/main">
                      <div
                        className={cn(
                          "w-[454px] box-shadow-light dark:box-shadow-dark filter saturate-[1.2] rounded-[8px] backdrop-filter hover:bg-[#e7e1d9bb] dark:hover:bg-[#203277]/[.9] transition-all duration-300 backdrop-blur-[20px]",
                          pathname.endsWith("main") &&
                            "bg-[#e7e1d9aa] dark:bg-[#203277]/[.9]"
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
                    </NavigationLink>
                    <NavigationLink
                      id="archive"
                      className="p-2 pt-0"
                      href="/archive"
                    >
                      <div
                        className={cn(
                          "w-[454px] box-shadow-light flex items-center dark:box-shadow-dark filter saturate-[1.2] rounded-[8px] backdrop-filter hover:bg-[#e7e1d9aa] dark:hover:bg-[#203277]/[.9] transition-all duration-300 backdrop-blur-[20px]",
                          pathname.endsWith("archive") &&
                            "bg-[#e7e1d9aa] dark:bg-[#203277]/[.9]"
                        )}
                      >
                        <span className="p-[25px] w-full flex items-start justify-between">
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
                    </NavigationLink>
                  </span>
                </span>
              </div>
            </button>
          </span>

          <span className="py-3">
            <NavigationLink
              id="blog"
              className={cn(
                "px-4 rounded-[24px] flex items-center h-full font-bold relative text-primary dark:text-secondary",
                pathname === `/${locale}/blog` &&
                  "backdrop-filter bg-opacity-[70%] text-secondary dark:text-primary dark:bg-opacity-[70%] bg-primary dark:bg-secondary backdrop-saturate-[2] backdrop-blur-[20px]"
              )}
              href="/blog"
            >
              {t("blog")}
            </NavigationLink>
          </span>
        </div>
        <div className="flex gap-[16px] xl:gap-[30px] py-3 px-3 rounded-[30px] transition duration-500 relative items-center">
          <Calendly />
          <span data-cy="theme-switcher">
            <ThemeSwitch />
          </span>
          <SoundSwitcher />
          <LanguageChanger locale={locale} />
        </div>
      </motion.div>
      <motion.div
        variants={fadeInVariants}
        className="flex cursor-pointer lg:hidden fixed z-[31] w-full px-[20px] min-[420px]:px-[28px] sm:px-[30px] sm:py-[4px] md:py-[12px] md:px-[40px] items-center justify-between"
      >
        <NavigationLink href="/" className="cursor-pointer group">
          <Image
            className="w-[48px] group-hover:scale-[85%] transition duration-200 h-[48px] border-[2px] sm:w-[54px] sm:h-[54px] md:w-[58px] md:h-[58px] sm:border-[3px] border-[#283D8B] dark:border-secondary rounded-full"
            src="/profile.jpg"
            alt="profile"
            width={650}
            height={650}
          />
        </NavigationLink>
        <NoSsr>
          {theme?.theme ? (
            <div
              onClick={() => {
                sound && menuSound();
              }}
              className={
                theme?.theme && theme?.theme === "light"
                  ? "navButton_light bg-primary rounded-full"
                  : "navButton_dark bg-secondary rounded-full"
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
          ) : (
            <></>
          )}
        </NoSsr>
      </motion.div>

      <Menu locale={locale} isOpen={isOpen} changeMenu={changeMenu} />
    </motion.div>
  );
}
