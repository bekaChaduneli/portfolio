import LanguageChanger from "./LanguageChanger";
import { navigationLinks } from "@/lib/siteData";
import classNames from "classnames";
import ThemeSwitch from "./ThemeSwitch";
import SoundSwitcher from "./SoundSwitcher";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import NavigationLink from "./NavigationLink";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { FlipLink } from "../animations/text-effect";

export default function Menu({
  isOpen,
  changeMenu,
  locale,
}: {
  isOpen: boolean;
  changeMenu: () => void;
  locale: string;
}) {
  navigationLinks;
  const pathname = usePathname();
  const t = useTranslations("Navbar");
  const fadeInVariants = fadeIn({
    direction: "down",
    type: "tween",
    delay: 0.3,
    duration: 0.7,
  });
  return (
    <motion.div
      variants={fadeInVariants}
      className={classNames(
        "fixed flex flex-col duration-300 w-full h-full overflow-hidden lg:hidden bg-secondary dark:bg-[#283d8b] top-0 z-[30] animate-link-opacity",
        {
          "opacity-100 visible": isOpen,
          "opacity-0 invisible": !isOpen,
        }
      )}
      style={{
        transitionProperty: "opacity",
      }}
    >
      <div className="flex flex-col items-center mt-[20vh]">
        <nav
          className={classNames(
            "lg:hidden flex flex-col gap-[20px] sm:gap-[26px] md:gap-[30px] items-center px-[20px]",
            {
              " w-full z-[44]": isOpen,
              "hidden ": !isOpen,
              "font-firago": locale === "ka",
              "font-geom": locale === "en",
            }
          )}
        >
          <FlipLink
            className={classNames(
              "text-[#283d8b] dark:text-secondary text-[38px] sm:text-[46px] md:text-[52px] font-bold uppercase !w-full flex justify-center h-[60px] rounded-[16px] font-geom relative overflow-hidden whitespace-nowrap",
              {
                "opacity-[75%]": pathname === `/${locale}`,
              }
            )}
            href="/"
            onClick={() => isOpen && changeMenu()}
            top="top-[45%]"
          >
            {t("home")}
          </FlipLink>
          <FlipLink
            top="top-[45%]"
            href="/about"
            className={classNames(
              "text-[#283d8b] dark:text-secondary text-[38px] sm:text-[46px] md:text-[52px] font-bold uppercase !w-full flex justify-center h-[60px] rounded-[16px] font-geom relative overflow-hidden whitespace-nowrap",
              {
                "opacity-[75%]": pathname === `/${locale}/about`,
              }
            )}
            onClick={() => isOpen && changeMenu()}
          >
            {t("about")}
          </FlipLink>
          <FlipLink
            href="/main"
            top="top-[45%]"
            className={classNames(
              "text-[#283d8b] dark:text-secondary text-[38px] sm:text-[46px] md:text-[52px] font-bold uppercase !w-full flex justify-center h-[60px] rounded-[16px] font-geom relative overflow-hidden whitespace-nowrap",
              {
                "opacity-[75%]": pathname === `/${locale}/main`,
              }
            )}
            onClick={() => isOpen && changeMenu()}
          >
            {t("projects")}
          </FlipLink>
          <FlipLink
            href="/blog"
            top="top-[45%]"
            className={classNames(
              "text-[#283d8b] dark:text-secondary text-[38px] sm:text-[46px] md:text-[52px] font-bold uppercase !w-full flex justify-center h-[60px] rounded-[16px] font-geom relative overflow-hidden whitespace-nowrap",
              {
                "opacity-[75%]": pathname === `/${locale}/blog`,
              }
            )}
            onClick={() => isOpen && changeMenu()}
          >
            {t("blog")}
          </FlipLink>
        </nav>
      </div>
      <div className="absolute bottom-[40px] w-full px-[40px] flex justify-between items-center gap-[20px]">
        <LanguageChanger locale={locale} />
        <div className="flex gap-[22px]">
          <ThemeSwitch />
          <SoundSwitcher />
        </div>
      </div>
    </motion.div>
  );
}
