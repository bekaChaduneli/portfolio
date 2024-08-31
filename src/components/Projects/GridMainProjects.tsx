import usePageWidth from "@/hooks/usePageWidth";
import { cn } from "@/lib/utils";
import useCurrentProjectStore from "@/store/use-currentProject-store";
import useCursorStore from "@/store/use-cursor-store";
import { IMainProjectsResponse } from "@/types/mainProjects";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function GridMainProjects({
  data,
  t,
}: {
  t: any;
  data: IMainProjectsResponse | undefined;
}) {
  const locale = useLocale();
  const { setCurrentProject, currentProject } = useCurrentProjectStore();
  const isTablet = usePageWidth("768px");
  const { setCursorText, setCursorType, setIsCursorActive } = useCursorStore();

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    videoRefs.current.forEach((videoRef, index) => {
      if (isTablet && videoRef) {
        if (currentProject === index + 1) {
          videoRef.currentTime = 0;
          videoRef.play();
        } else {
          videoRef.pause();
        }
      }
    });
  }, [currentProject, isTablet]);

  return (
    <div className="flex flex-wrap gap-[50px] md:gap-0 justify-between w-full lg:w-[76%]">
      {data?.findManyMainProjects.map((project, index) => {
        const translation = project?.translations?.find(
          (translation) => translation.languageCode === locale
        );

        videoRefs.current[index] = videoRefs.current[index] || null;

        const isOdd = (index + 1) % 2 !== 0;

        return (
          <div
            key={index}
            className={cn(
              "relative w-full md:w-[50%]",
              currentProject === index + 1 ? "z-[2]" : "z-0"
            )}
          >
            <div
              className={cn(
                "hidden md:block absolute transition-all overflow-hidden duration-700 h-full w-[80%] px-[12px] py-[14px] z-[1] border-y-[1px] border-primary/15 dark:border-secondary/15 dark:bg-[#1c2a62]/80 bg-secondary/80 backdrop-blur-[6px] backdrop-saturate-[1.3]",
                currentProject === index + 1
                  ? isOdd
                    ? "translate-x-[100%] duration-700 border-r-[1px] shadow-r- right-0 rounded-r-[10px] rounded-l-none"
                    : "translate-x-[-100%] border-l-[1px] shadow-l- left-0 rounded-l-[10px] rounded-r-none"
                  : isOdd
                    ? "translate-x-[0] duration-700 right-0 rounded-r-[100%] rounded-l-none"
                    : "translate-x-[0] left-0 rounded-l-[100%] rounded-r-none"
              )}
            >
              <h2
                className={cn(
                  "text-[22px] font-bold xl:text-[26px] text-primary dark:text-secondary mb-[4px]",
                  locale === "en" ? "font-geom" : "font-firago"
                )}
              >
                {t("location")}
              </h2>
              <div className="font-light text-[14px] xl:text-[16px] text-primary dark:text-secondary mb-[12px]">
                {translation?.location}
              </div>
              <h2
                className={cn(
                  "text-[22px] font-bold xl:text-[26px] text-primary dark:text-secondary mb-[4px]",
                  locale === "en" ? "font-geom" : "font-firago"
                )}
              >
                {t("descriptionHeadline")}
              </h2>
              <div className="font-light text-[14px] xl:text-[16px] text-primary dark:text-secondary mb-[12px] line-clamp-[6] xl:line-clamp-[7]">
                {translation?.description}
              </div>
              <div className="flex flex-wrap gap-[6px] bottom-[14px] absolute pr-[12px]">
                {project.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="px-[8px] py-[2px] rounded-[30px] text-[12px] xl:text-[14px] border-[1px] border-primary/50 bg-primary text-secondary dark:border-secondary/50 dark:bg-secondary dark:text-primary"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            <div
              className={cn(
                "pb-[38px] h-full transition-all bg-secondary dark:bg-[#1c2a62] relative md:py-[24px] z-[2] group lg:py-[28px] border-primary/15 dark:border-secondary/15 xl:py-[32px] md:pl-[46px] lg:pl-[38px] xl:pl-[50px]",
                index + 1 === data?.findManyMainProjects.length
                  ? "border-b-[1px] md:border-b-0 md:border-l-[1px] lg:border-x-[1px] "
                  : index + 2 === data?.findManyMainProjects.length
                    ? "border-b-[1px] md:border-b-0"
                    : (index + 1) % 2 === 0
                      ? "md:border-l-[1px] lg:border-x-[1px] border-b-[1px] "
                      : "border-b-[1px]"
              )}
              style={{
                transition: "all 0.3s ease",
              }}
            >
              <Link
                href={`${locale}/main/${project.id}`}
                onMouseEnter={() => {
                  setCurrentProject(index + 1);
                  setCursorText(t("seeMore"));

                  setCursorType("framerText");
                  setIsCursorActive(true);
                }}
                onMouseLeave={() => {
                  setCurrentProject(null);
                  setIsCursorActive(false);
                }}
                onClick={() => {
                  setCurrentProject(null);
                  setIsCursorActive(false);
                }}
                className={cn(
                  "w-full block md:w-[88%] project_wrapper xl:w-[80%] transition-all duration-700 cursor-pointer",
                  currentProject !== null && currentProject !== index + 1
                    ? "opacity-[40%]"
                    : "opacity-[100%]"
                )}
              >
                <div

                  className="mb-[20px] md:mb-[24px] lg:mb-[20px] xl:mb-[24px] w-full h-[268px] md:h-auto md:aspect-[1/1] overflow-hidden bg-cover transition-all rounded-[16px] md:rounded- duration-700 relative"
                >
                  {isTablet && (
                    <>
                      <video
                        ref={(el) => (videoRefs.current[index] = el)}
                        src={project?.video[0]}
                        className={cn(
                          "z-[2] cover object-cover absolute left-0 right-0 transition-all duration-500 w-auto h-[60%] min-w-full top-[50%] translate-y-[-50%]",
                          currentProject === index + 1
                            ? "opacity-[100%]"
                            : "opacity-0"
                        )}
                        loop
                        muted
                      />
                      <span className="inset-0 absolute z-[1] bg-[#ddd3c4] dark:bg-[#1d2548] animate-skeleton" />
                    </>
                  )}
                  <Image
                    alt={translation?.name ? translation?.name : "project"}
                    width={600}
                    height={600}
                    className={cn(
                      "min-w-full min-h-full relative transition-all duration-500 z-[2] w-full h-auto cover object-cover",
                      currentProject === index + 1
                        ? "md:opacity-0"
                        : "md:opacity-[100%]"
                    )}
                    src={project.background}
                  />
                </div>
                <h2
                  className={cn(
                    "text-[28px] line-clamp-1 font-bold text-primary dark:text-secondary uppercase md:text-[30px] lg:text-[26px] xl:text-[28px]",
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
          </div>
        );
      })}
    </div>
  );
}
