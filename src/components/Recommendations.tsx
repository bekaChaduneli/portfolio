"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { IRecommendationsResponse } from "@/types/recommendations";
import { GET_RECOMMENDATIONS } from "@/utils/apolloQuerys";
import { useQuery } from "@apollo/client";
import ComponentHeadline from "./shared/ComponentHeadline";
import { useLocale, useTranslations } from "next-intl";
import { formatDate } from "@/utils/date";

export default function Recommendations({
  autoplay = false,
}: {
  autoplay?: boolean;
}) {
  const [active, setActive] = useState(0);
  const locale = useLocale();

  const { data, loading, error } =
    useQuery<IRecommendationsResponse>(GET_RECOMMENDATIONS);
  const t = useTranslations("Recommendations");

  const recommendations = data?.findManyRecommendations || [];

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % recommendations.length);
  }, [recommendations.length]);

  const handlePrev = () => {
    setActive(
      (prev) => (prev - 1 + recommendations.length) % recommendations.length
    );
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 7000);
      return () => clearInterval(interval);
    }
  }, [autoplay, handleNext]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!recommendations.length) return null;

  const isActive = (index: number) => index === active;

  const activeRecommendation = recommendations[active];
  const activeRecommendationTranslation =
    activeRecommendation.translations?.find(
      (translation) => translation.languageCode === locale
    );

  return (
    <div className="flex items-center flex-col mb-[120px]">
      <div className="w-full flex justify-center lg:px-0 lg:mb-[20px] xl:mb-[70px] lg:max-w-[954px] xl:max-w-[1200px] px-[20px] md:px-[30px]">
        <ComponentHeadline
          component="recommendations"
          leftText={t("my")}
          rightText={t("recommendations")}
        />
      </div>
      <div className="mx-auto antialiased font-sans lg:px-0 lg:max-w-[954px] relative xl:max-w-[1200px] px-[20px] md:px-[40px]">
        <div className="relative grid grid-cols-1 sm:grid-cols-2 sm:gap-[30px] md:gap-[60px] lg:gap-[80px] xl:gap-[140px]">
          <div className="w-full flex justify-center">
            <div className="relative h-[80vw] sm:h-[39vw] lg:h-[450px] xl:h-[530px] w-[90%]  md:w-full">
              <AnimatePresence>
                {recommendations.map((recommendation, index) => {
                  const translation = recommendation.translations?.find(
                    (translation) => translation.languageCode === locale
                  );
                  if (!translation) return null;

                  return (
                    <motion.a
                      href={recommendation.link || "#"}
                      target="_blank"
                      key={recommendation.link}
                      initial={{
                        opacity: 0,
                        scale: 0.9,
                        z: -100,
                        rotate: Math.random() * 20 - 10,
                      }}
                      animate={{
                        opacity: isActive(index) ? 1 : 0.7,
                        scale: isActive(index) ? 1 : 0.95,
                        z: isActive(index) ? 0 : -100,
                        rotate: isActive(index) ? 0 : Math.random() * 20 - 10,
                        zIndex: isActive(index)
                          ? 10
                          : recommendations.length + 2 - index,
                        y: isActive(index) ? [0, -80, 0] : 0,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.9,
                        z: 1,
                        rotate: Math.random() * 20 - 10,
                      }}
                      transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 origin-bottom"
                    >
                      <Image
                        src={recommendation.image}
                        alt={translation.name}
                        width={500}
                        height={500}
                        draggable={false}
                        className="h-full w-full rounded-3xl object-cover object-center"
                      />
                    </motion.a>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
          <div className="flex justify-between flex-col py-4 sm:py-2 md:py-4">
            <motion.div
              key={active}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <h3 className="text-[24px] mt-[36px] sm:mt-0 sm:text-[22px] md:text-[26px] lg:text-[34px] xl:text-[46px] font-bold text-primary dark:text-secondary uppercase">
                {activeRecommendationTranslation?.name}
              </h3>
              <p className="text-[16px] sm:text-[12px] md:text-[14px] line-clamp-1 lg:text-[18px] xl:text-[20px] text-primary/70 dark:text-linearPink/70">
                {activeRecommendationTranslation?.role}
              </p>
              <p className="text-[18px] sm:text-[16px] md:text-[18px] xl:text-[20px] text-primary/90 underline dark:text-linearPink/80">
                {formatDate(activeRecommendation.date, locale)}
              </p>
              <motion.p className="text-[14px] sm:text-[12px] md:text-[16px] lg:text-[18px] xl:text-[21px] text-primary mt-8 sm:mt-2 lg:mt-8 dark:text-secondary line-clamp-6 h-[130px] sm:h-[108px] md:h-[146px] lg:h-[168px] xl:h-[184px] overflow-hidden">
                {activeRecommendationTranslation?.description
                  .split(" ")
                  .map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{
                        filter: "blur(10px)",
                        opacity: 0,
                        y: 5,
                      }}
                      animate={{
                        filter: "blur(0px)",
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                        delay: 0.02 * index,
                      }}
                      className="inline-block"
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
              </motion.p>
            </motion.div>
            <div className="flex gap-4 pt-4 sm:pt-1 lg:pt-2 xl:pt-3">
              <button
                onClick={handlePrev}
                className="h-11 w-11 sm:h-9 sm:w-9 md:h-11 md:w-11 rounded-full bg-primary dark:bg-secondary flex items-center justify-center group/button"
              >
                <IconArrowLeft className="h-7 w-7 sm:w-5 sm:h-5 md:h-7 md:w-7 text-secondary dark:text-primary group-hover/button:rotate-12 transition-transform duration-300" />
              </button>
              <button
                onClick={handleNext}
                className="h-11 w-11 sm:h-9 sm:w-9 md:h-11 md:w-11 rounded-full bg-primary dark:bg-secondary flex items-center justify-center group/button"
              >
                <IconArrowRight className="h-7 w-7 sm:w-5 sm:h-5 md:h-7 md:w-7 text-secondary dark:text-primary group-hover/button:-rotate-12 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
