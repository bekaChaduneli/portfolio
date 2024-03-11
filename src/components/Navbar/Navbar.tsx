"use client";
import Calendly from "../Calendly";
import LanguageChanger from "../LanguageChanger";
import TransitionLink from "../animations/PageToPageTransition/TransitionLink";

export default function Navbar({ locale }: { locale: string }) {
  return (
    <div>
      <LanguageChanger locale={locale} />
      <Calendly />
      <TransitionLink href="/en" label="home ->" />
      <TransitionLink href="/en/about" label="About ->" />
      <TransitionLink href="/en/main" label="main ->" />
      <TransitionLink href="/en/blog" label="blog ->" />
      <TransitionLink href="/en/contact" label="contact ->" />
    </div>
  );
}
