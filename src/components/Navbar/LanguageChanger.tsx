"use client";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import useSoundStore from "@/store/use-sound-store";
import useSound from "use-sound";
import toLang from "@/sounds/language.mp3";
import { cn } from "@/lib/utils";

export default function LanguageChanger({ locale }: { locale: string }) {
  let currentLocale = locale;
  const router = useRouter();
  const currentPathname = usePathname();
  const { sound } = useSoundStore();
  const [toLanguage] = useSound(toLang);
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
        onClick={() => {
          handleChange("en");
          sound && toLanguage();
        }}
        className="p-[8px] cursor-pointer text-primary dark:text-secondary text-[18px] font-bold font-graphik"
      >
        EN
      </button>
      <div className="w-[48px] relative h-[2px]">
        <div className="relative w-full h-full bg-primary dark:bg-secondary dark:bg-opacity-[30%] bg-opacity-[30%]"></div>
        <div
          className={cn(
            "absolute w-[50%] top-0 h-full bg-primary dark:bg-secondary",
            currentLocale === "ka" ?
              "right-0": 
              "left-0"
          )}
        ></div>
      </div>

      <button
        onClick={() => {
          handleChange("ka");
          sound && toLanguage();
        }}
        className="p-[8px] cursor-pointer text-primary dark:text-secondary text-[18px] font-bold font-graphik"
      >
        KA
      </button>
    </div>
  );
}
