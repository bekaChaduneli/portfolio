import { cn } from "@/lib/utils";
import { IMainProjectsResponse } from "@/types/mainProjects";
import { Check, X } from "lucide-react";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function RowMainProjects({
  data,
  t,
}: {
  data: IMainProjectsResponse | undefined;
  t: any;
}) {
  const locale = useLocale();
  const [currentProject, setCurrentProject] = useState<number | null>(null);
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
            className="w-full flex items-center py-[40px] xl:py-[50px] border-b-[1px] border-primary/50 dark:border-secondary/50"
          >
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
          </Link>
        );
      })}
    </div>
  );
}
