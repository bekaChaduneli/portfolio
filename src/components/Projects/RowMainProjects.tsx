import { cn } from "@/lib/utils";
import { IMainProjectsResponse } from "@/types/mainProjects";
import { Check, X } from "lucide-react";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import FramerText from "../core/FramerText";

export default function RowMainProjects({
  data,
  t,
}: {
  data: IMainProjectsResponse | undefined;
  t: any;
}) {
  const locale = useLocale();
  const [currentProject, setCurrentProject] = useState<number | null>(null);
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  return (
    <div className="hidden lg:block w-full lg:w-[74%]">
      <div className="w-full flex pb-[30px] xl:pb-[40px] border-b-[1px] border-primary/50 dark:border-secondary/50">
        <div
          className={cn(
            "pl-[6%] w-[70%] text-primary/80 dark:text-secondary/80 text-[14px] uppercase",
            locale === "en" ? "font-geom" : "font-firago"
          )}
        >
          {t("name")}
        </div>
        <div
          className={cn(
            "w-[30%] pr-[6%] text-primary/80 dark:text-secondary/80 text-[14px] uppercase",
            locale === "en" ? "font-geom" : "font-firago"
          )}
        >
          {t("location")}
        </div>
      </div>
      {data?.findManyMainProjects.map((project, index) => {
        const translation = project?.translations?.find(
          (translation) => translation.languageCode === locale
        );
        return (
          <Link
            key={index}
            href={`/${locale}/main/${project.id}`}
            onMouseEnter={() => setCurrentProject(index + 1)}
            onMouseLeave={() => setCurrentProject(null)}
            className="w-full"
          >
            {currentProject === index + 1 ? (
              <div
                className={cn(
                  "overflow-hidden flex flex-col justify-center  border-b-[1px] border-primary/50 dark:border-secondary/50",
                  locale === "en"
                    ? "h-[154.5px] xl:h-[191px] "
                    : "h-[144px] xl:h-[179px] "
                )}
              >
                <FramerText baseVelocity={locale === "en" ? -1.5 : -1.2}>
                  <span
                    className={cn(
                      "text-[28px] mr-[22px] xl:text-[36px] xl:mr-[24px] text-primary dark:text-secondary leading-[110%]",
                      locale === "en" ? "font-geom" : "font-firago"
                    )}
                  >
                    {t("clickToSeeMore")}
                  </span>
                </FramerText>
                <FramerText baseVelocity={locale === "en" ? 1.5 : 1.2}>
                  <span
                    className={cn(
                      "text-[28px] mr-[22px] xl:text-[36px] xl:mr-[24px] text-primary dark:text-secondary leading-[110%]",
                      locale === "en" ? "font-geom" : "font-firago"
                    )}
                  >
                    {" "}
                    {t("clickToSeeMore")}
                  </span>
                </FramerText>
              </div>
            ) : (
              <div className="py-[40px] xl:py-[50px] border-b-[1px] border-primary/50 dark:border-secondary/50 flex items-center">
                <div
                  className={cn(
                    "pl-[6%] w-[70%] text-primary pr-[20px] line-clamp-1 dark:text-secondary uppercase",
                    locale === "en"
                      ? "font-geom text-[49px] xl:text-[60px]"
                      : "font-firago text-[42px] xl:text-[52px]"
                  )}
                >
                  {translation?.name}
                </div>
                <div
                  className={cn(
                    "w-[30%] pr-[6%] text-primary dark:text-secondary text-[19px] xl:text-[22px] uppercase",
                    locale === "ka" && "font-firago"
                  )}
                >
                  {translation?.location}
                </div>
              </div>
            )}
          </Link>
        );
      })}
    </div>
  );
}
