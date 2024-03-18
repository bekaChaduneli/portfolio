"use client";
import Calendly from "../Calendly";
import LanguageChanger from "../LanguageChanger";
import ThemeSwitch from "../ThemeSwitch";
import TransitionLink from "../TransitionLink";

export default function Navbar({ locale }: { locale: string }) {
  return (
    <div>
      <LanguageChanger locale={locale} />
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
      <ThemeSwitch />
    </div>
  );
}
