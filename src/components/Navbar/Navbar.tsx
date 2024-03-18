"use client";
import { usePathname } from "next/navigation";
import Calendly from "../Calendly";
import LanguageChanger from "../LanguageChanger";
import TransitionLink from "../TransitionLink";
import classNames from "classnames";
import ThemeSwitch from "../ThemeSwitch";
import SoundSwitcher from "../SoundSwitcher";

export default function Navbar({ locale }: { locale: string }) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="flex justify-center">
      <div className="flex max-w-[1440px] gap-[100px] justify-between rounded-md p-[20px]">
        <div className="flex gap-[20px] py-5 px-3 rounded-[30px] transition duration-500 relative ">
          <TransitionLink
            className={classNames(
              "py-[2px] px-4 rounded-[24px] font-bold text-[18px] text-[#556f66] dark:text-[#ede7de]",
              {
                "backdrop-blur-lg bg-[#ede7de] bg-opacity-[70%] dark:bg-opacity-[70%] dark:bg-[#556f66]":
                  pathname === `/${locale}`,
              }
            )}
            href={`/${locale}`}
          >
            Home
          </TransitionLink>
          <TransitionLink
            className={classNames(
              "py-[6px] px-6 rounded-[24px] font-bold text-[18px] text-[#556f66] dark:text-[#ede7de]",
              {
                " backdrop-blur-lg bg-[#ede7de] bg-opacity-[70%] dark:bg-opacity-[70%] dark:bg-[#556f66]":
                  pathname === `/${locale}/about`,
              }
            )}
            href={`/${locale}/about`}
          >
            About
          </TransitionLink>
          <span className="py-[6px] px-6 rounded-[24px] font-bold text-[18px] text-[#556f66] dark:text-[#ede7de]">
            Projects
            <span className="w-2 h-2 bg-black"></span>
          </span>
          <TransitionLink
            className={classNames(
              "py-[6px] px-6 rounded-[24px] font-bold text-[18px] text-[#556f66] dark:text-[#ede7de]",
              {
                "backdrop-blur-lg bg-[#ede7de] bg-opacity-[70%] dark:bg-opacity-[70%] dark:bg-[#556f66]":
                  pathname === `/${locale}/blog`,
              }
            )}
            href={`/${locale}/blog`}
          >
            Blog
          </TransitionLink>
        </div>
        <div className="flex gap-[20px] py-5 px-3 rounded-[30px] transition duration-500 relative items-center">
          <Calendly />
          <ThemeSwitch />
          <SoundSwitcher />
          <LanguageChanger locale={locale} />
        </div>
      </div>
    </div>
  );
}
