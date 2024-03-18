"use client";
import { usePathname } from "next/navigation";
import Calendly from "../Calendly";
import LanguageChanger from "../LanguageChanger";
import ThemeSwitch from "../ThemeSwitch";
import TransitionLink from "../TransitionLink";
import Image from "next/image";
import classNames from "classnames";

export default function Navbar({ locale }: { locale: string }) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="flex justify-center">
      <div className="flex max-w-[1440px] gap-[80px] justify-between rounded-md p-[20px]">
        <div className="flex gap-[20px] py-5 px-3 rounded-[30px] transition duration-500 relative">
          <TransitionLink
            className={classNames(
              "py-[2px] px-4 rounded-[24px] font-bold text-[18px] text-[#556f66] ",
              {
                "backdrop-blur-lg bg-[#ede7de]": pathname === `/${locale}`,
              }
            )}
            href={`/${locale}`}
          >
            Home
          </TransitionLink>
          <TransitionLink
            className={classNames(
              "py-[6px] px-6 rounded-[24px] font-bold text-[18px] text-[#556f66] ",
              {
                " backdrop-blur-lg bg-[#ede7de]":
                  pathname === `/${locale}/about`,
              }
            )}
            href={`/${locale}/about`}
          >
            About
          </TransitionLink>
          <span className="py-[6px] px-6 rounded-[24px] font-bold text-[18px] text-[#556f66]">
            Projects
            <span className="w-2 h-2 bg-black"></span>
          </span>
          <TransitionLink
            className={classNames(
              "py-[6px] px-6 rounded-[24px] font-bold text-[18px] text-[#556f66]",
              {
                "bg-opacity-[100%] backdrop-blur-lg bg-[#ede7de]":
                  pathname === `/${locale}/blog`,
              }
            )}
            href={`/${locale}/blog`}
          >
            Blog
          </TransitionLink>
        </div>
        <div className="flex gap-[20px] py-5 px-3 rounded-[30px] transition duration-500 relative">
          <Calendly />
          <LanguageChanger locale={locale} />
          <ThemeSwitch />
        </div>
      </div>

      {/* <LanguageChanger locale={locale} />
      <Calendly />
      <TransitionLink className="p-2 border-[1px] rounded" href={`/${locale}`}>
        Home
      </TransitionLink>
      <TransitionLink
        className="p-2 border-[1px] rounded"
        href={`/${locale}/about`}
      >
        About
      </TransitionLink>
      <TransitionLink
        className="p-2 border-[1px] rounded"
        href={`/${locale}/main`}
      >
        Bain
      </TransitionLink>
      <TransitionLink
        className="p-2 border-[1px] rounded"
        href={`/${locale}/blog`}
      >
        Blog
      </TransitionLink>
      <TransitionLink
        className="p-2 border-[1px] rounded"
        href={`/${locale}/contact`}
      >
        Contact
      </TransitionLink>
      <ThemeSwitch /> */}
    </div>
  );
}
