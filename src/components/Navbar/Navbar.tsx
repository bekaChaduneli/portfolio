"use client";
import Calendly from "../Calendly";
import LanguageChanger from "../LanguageChanger";

export default function Navbar({ locale }: { locale: string }) {
  return (
    <div>
      <LanguageChanger locale={locale} />
      <Calendly />
    </div>
  );
}
