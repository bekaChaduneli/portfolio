import { cn } from "@/lib/utils";
import { IMainProjectsResponse } from "@/types/mainProjects";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function GridMainProjects({
  data,
}: {
  data: IMainProjectsResponse | undefined;
}) {
  const locale = useLocale();
  const [currentProject, setCurrentProject] = useState<number | null>(null);

  return (
    <div className="flex flex-wrap gap-[50px] md:gap-0 justify-between w-full lg:w-[76%]">
      {data?.findManyMainProjects.map((project, index) => {
        const translation = project?.translations?.find(
          (translation) => translation.languageCode === locale
        );

        return (
          <div
            key={index}
            className={cn(
              "pb-[38px] md:py-[24px] w-full md:w-[50%] group lg:py-[28px] border-primary/40 dark:border-secondary/40 xl:py-[32px] md:pl-[46px] lg:pl-[38px] xl:pl-[50px]",
              index + 1 === data?.findManyMainProjects.length
                ? "border-b-[1px] md:border-b-0 md:border-l-[1px] lg:border-x-[1px] "
                : index + 2 === data?.findManyMainProjects.length
                ? "border-b-[1px] md:border-b-0"
                : (index + 1) % 2 == 0
                ? "md:border-l-[1px] lg:border-x-[1px] border-b-[1px] "
                : "border-b-[1px] "
            )}
          >
            <Link
              href={`${locale}/main/${project.id}`}
              className={cn(
                "w-full block md:w-[88%] lg:w-[74%] xl:w-[80%] transition-all duration-700 cursor-pointer",
                currentProject !== null && currentProject !== index + 1
                  ? "opacity-[40%]"
                  : "opacity-[100%]"
              )}
            >
              <div
                onMouseEnter={() => {
                  setCurrentProject(index + 1);
                }}
                onMouseLeave={() => {
                  setCurrentProject(null);
                }}
                className="mb-[20px] md:mb-[24px] lg:mb-[20px] xl:mb-[24px] h-[268px] lg:w-[290px] lg:h-[290px] xl:w-[356px] xl:h-[356px] overflow-hidden bg-cover transition-all rounded-[16px] md:rounded-none md:hover:rounded-[60%] duration-700"
              >
                <Image
                  alt={translation?.name ? translation?.name : "project"}
                  width={600}
                  height={600}
                  className="min-w-full min-h-full w-full h-auto cover object-cover"
                  src={project.background}
                />
              </div>
              <h2
                className={cn(
                  "text-[28px] line-clamp-1 text-primary dark:text-secondary uppercase md:text-[30px] lg:text-[26px] xl:text-[28px]",
                  locale === "en" ? "font-geom" : "font-firago"
                )}
              >
                {translation?.name}
              </h2>
              <p className="text-primary/90 dark:text-secondary/90 italic h-[48px] md:h-[57px] lg:h-[48px] xl:h-[54px] text-[16px] md:text-[19px] lg:text-[16px] line-clamp-2 xl:text-[18px]">
                {translation?.about}
              </p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
