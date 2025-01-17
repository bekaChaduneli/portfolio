import LanguageChanger from "./LanguageChanger";
import { navigationLinks } from "@/lib/siteData";
import ThemeSwitch from "./ThemeSwitch";
import SoundSwitcher from "./SoundSwitcher";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { FlipLink } from "../animations/text-effect";
import { cn } from "@/lib/utils";

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
      className={cn(
        "fixed flex flex-col duration-300 w-full h-full overflow-hidden lg:hidden bg-secondary dark:bg-[#283d8b] top-0 z-[30] animate-link-opacity",
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      )}
      style={{
        transitionProperty: "opacity",
      }}
    >
      <div className="flex flex-col items-center mt-[20vh]">
        <nav
          className={cn(
            "lg:hidden flex flex-col min-[420px]:px-[28px] sm:px-[30px] md:px-[40px] gap-[20px] sm:gap-[26px] md:gap-[30px] items-center px-[20px]",
            isOpen ? " w-full z-[44]" : "hidden ",
            locale === "ka" ? "font-firago" : "font-geom"
          )}
        >
          <FlipLink
            className={cn(
              "text-[#283d8b] dark:text-secondary text-[38px] sm:text-[46px] md:text-[52px] font-bold uppercase !w-full flex justify-center h-[60px] rounded-[16px] relative overflow-hidden whitespace-nowrap",
              pathname === `/${locale}` && "opacity-[75%]",
              locale === "en" ? "font-geom" : "font-firago font-bold"
            )}
            textAlign="left"
            href="/"
            wordSpace="min-w-[14px]"
            onClick={() => isOpen && changeMenu()}
            top="top-[45%]"
          >
            {t("home")}
          </FlipLink>
          <FlipLink
            textAlign="left"
            top="top-[45%]"
            wordSpace="min-w-[14px]"
            href="/about"
            className={cn(
              "text-[#283d8b] dark:text-secondary text-[38px] sm:text-[46px] md:text-[52px] uppercase !w-full flex justify-center h-[60px] rounded-[16px] relative overflow-hidden whitespace-nowrap",
              pathname === `/${locale}/about` && "opacity-[75%]",
              locale === "en" ? "font-geom" : "font-firago font-bold"
            )}
            onClick={() => isOpen && changeMenu()}
          >
            {t("about")}
          </FlipLink>
          <FlipLink
            textAlign="left"
            wordSpace="min-w-[14px]"
            href="/main"
            top="top-[45%]"
            className={cn(
              "text-[#283d8b] dark:text-secondary text-[38px] sm:text-[46px] md:text-[52px] uppercase !w-full flex justify-center h-[60px] rounded-[16px] relative overflow-hidden whitespace-nowrap",
              pathname === `/${locale}/main` && "opacity-[75%]",
              locale === "en" ? "font-geom" : "font-firago font-bold"
            )}
            onClick={() => isOpen && changeMenu()}
          >
            {t("projects")}
          </FlipLink>
          {/* <FlipLink
            href="/blog"
            top="top-[45%]"
            wordSpace="min-w-[14px]"
            textAlign="left"
            className={cn(
              "text-[#283d8b] dark:text-secondary text-[38px] sm:text-[46px] md:text-[52px] uppercase !w-full flex justify-center h-[60px] rounded-[16px] relative overflow-hidden whitespace-nowrap",
              pathname === `/${locale}/blog` && "opacity-[75%]",
              locale === "en" ? "font-geom" : "font-firago font-bold"
            )}
            onClick={() => isOpen && changeMenu()}
          >
            {t("blog")}
          </FlipLink> */}
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
