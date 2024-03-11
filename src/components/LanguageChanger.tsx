"use client";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { ChangeEvent } from "react";

export default function LanguageChanger({ locale }: { locale: string }) {
  let currentLocale = locale;
  const router = useRouter();
  const currentPathname = usePathname();
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    if (typeof window !== "undefined") {
      window.localStorage.setItem("NEXT_LOCALE", newLocale);
    }
    router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`));
    router.refresh();
  };

  return (
    <select onChange={handleChange} value={currentLocale}>
      <option value="en">English</option>
      <option value="ka">Georgian</option>
    </select>
  );
}
