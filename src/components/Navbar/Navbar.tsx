"use client";

import Calendly from "../Calendly";
import LanguageChanger from "../LanguageChanger";

export default function Navbar({ locale }: { locale: string }) {
  console.log(document.cookie.split("NEXT_LOCALE=")[1]);
  return (
    <div>
      <LanguageChanger locale={locale} />
      <Calendly />
    </div>
  );
}
