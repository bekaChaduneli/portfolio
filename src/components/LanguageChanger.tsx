"use client";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { ChangeEvent } from "react";

export default function LanguageChanger({ locale }: { locale: string }) {
  let currentLocale = locale;
  const router = useRouter();
  const currentPathname = usePathname();
  const handleChange = (newLocale: string) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("NEXT_LOCALE", newLocale);
    }
    router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`));
    router.refresh();
  };

  return (
    <div className="flex gap-[8px] items-center">
      <button
        onClick={() => handleChange("en")}
        className="p-[8px] cursor-pointer text-[#2b3b7a] dark:text-[#ede7de] text-[18px] font-bold"
      >
        EN
      </button>
      <div className="w-[48px] relative h-[2px]">
        <div className="relative w-full h-full bg-[#2b3b7a] dark:bg-[#ede7de] dark:bg-opacity-[30%] bg-opacity-[30%]"></div>
        <div
          className={classNames(
            "absolute w-[50%] top-0 h-full bg-[#2b3b7a] dark:bg-[#ede7de]",
            {
              "right-0": currentLocale === "ka",
              "left-0": currentLocale === "en",
            }
          )}
        ></div>
      </div>

      <button
        onClick={() => handleChange("ka")}
        className="p-[8px] cursor-pointer text-[#2b3b7a] dark:text-[#ede7de] text-[18px] font-bold"
      >
        KA
      </button>
    </div>
  );
}
