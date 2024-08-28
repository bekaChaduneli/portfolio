import { cn } from "@/lib/utils";
import { IMainProjectsResponse } from "@/types/mainProjects";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import Link from "next/link";
import FramerText from "../core/FramerText";
import { fadeIn } from "@/utils/motion";
import useCursorStore from "@/store/use-cursor-store";
import useCurrentProjectStore from "@/store/use-currentProject-store";

export default function RowMainProjects({
  data,
  t,
}: {
  data: IMainProjectsResponse | undefined;
  t: any;
}) {
  const locale = useLocale();
  const { setIsCursorActive, setCursorType } = useCursorStore();
  const { setCurrentProject, currentProject } = useCurrentProjectStore();
  return (
    <div className="hidden lg:block w-full lg:w-[74%]">
      <div className="w-full flex pb-[30px] xl:pb-[40px] border-b-[1px] border-primary/50 dark:border-secondary/50">
        <div
          className={cn(
            "pl-[6%] font-bold w-[70%] text-primary/80 dark:text-secondary/80 text-[14px] uppercase",
            locale === "en" ? "font-geom" : "font-firago"
          )}
        >
          {t("name")}
        </div>
        <div
          className={cn(
            "w-[30%] pr-[6%] font-bold text-primary/80 dark:text-secondary/80 text-[14px] uppercase",
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
        const fadeInVariants = fadeIn({
          direction: "up",
          type: "tween",
          delay: 0,
          duration: 0.8,
        });
        return (
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            key={index}
            whileInView="show"
            exit="exit"
            viewport={{ once: true }}
          >
            <Link
              href={`/${locale}/main/${project.id}`}
              onMouseEnter={() => {
                setCurrentProject(index + 1);
                setIsCursorActive(true);
                setCursorType("project");
              }}
              onMouseLeave={() => {
                setCurrentProject(null);
                setIsCursorActive(false);
              }}
              onClick={() => setIsCursorActive(false)}
              className="w-full block border-b-[1px] border-primary/50 dark:border-secondary/50"
            >
              {currentProject === index + 1 ? (
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-500 flex flex-col justify-center ",
                    locale === "en"
                      ? "h-[154.5px] xl:h-[191px] "
                      : "h-[144px] xl:h-[179px] ",
                    currentProject !== index + 1 && currentProject !== null
                      ? "opacity-[50%]"
                      : "opacity-100"
                  )}
                >
                  <FramerText baseVelocity={locale === "en" ? -1.5 : -1.2}>
                    <span
                      className={cn(
                        "text-[28px] font-semibold mr-[22px] xl:text-[36px] xl:mr-[24px] text-primary dark:text-secondary leading-[110%]",
                        locale === "en" ? "font-geom" : "font-firago"
                      )}
                    >
                      {t("clickToSeeMore")}
                    </span>
                  </FramerText>
                  <FramerText baseVelocity={locale === "en" ? 1.5 : 1.2}>
                    <span
                      className={cn(
                        "text-[28px] font-semibold mr-[22px] xl:text-[36px] xl:mr-[24px] text-primary dark:text-secondary leading-[110%]",
                        locale === "en" ? "font-geom" : "font-firago"
                      )}
                    >
                      {" "}
                      {t("clickToSeeMore")}
                    </span>
                  </FramerText>
                </div>
              ) : (
                <div
                  className={cn(
                    "transition-all duration-500 flex items-center",
                    locale === "en"
                      ? "h-[154.5px] xl:h-[191px] "
                      : "h-[144px] xl:h-[179px] ",
                    currentProject !== index + 1 && currentProject !== null
                      ? "opacity-[50%]"
                      : "opacity-100"
                  )}
                >
                  <div
                    className={cn(
                      "pl-[6%] w-[70%] font-bold text-primary pr-[20px] line-clamp-1 dark:text-secondary uppercase",
                      locale === "en"
                        ? "font-geom text-[49px] xl:text-[60px]"
                        : "font-firago text-[42px] xl:text-[52px]"
                    )}
                  >
                    {translation?.name}
                  </div>
                  <div
                    className={cn(
                      "w-[30%] pr-[6%] font-bold text-primary dark:text-secondary text-[19px] xl:text-[22px] uppercase",
                      locale === "ka" && "font-firago"
                    )}
                  >
                    {translation?.location}
                  </div>
                </div>
              )}
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
