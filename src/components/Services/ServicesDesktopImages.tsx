import { cn } from "@/lib/utils";
import { IServices, IServicesResponse } from "@/types/services";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ServicesDesktopImages({
  data,
  currentService,
  locale,
}: {
  data: IServicesResponse | undefined;
  currentService: number;
  locale: string;
}) {
  const [activeService, setActiveService] = useState(currentService);

  useEffect(() => {
    setActiveService(currentService);
  }, [currentService]);

  const fadeInOutVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <motion.div
      className={cn(
        "overflow-hidden whitespace-nowrap sticky top-[120px] w-[444px] h-[444px] xl:w-[520px] xl:h-[560px] shadow-md shadow-black/30 rounded-[30px] transition-all duration-[0.3s]",
        currentService === 1
          ? "bg-[#493b95]/25 dark:bg-[#8a7fc5]/60"
          : currentService === 2
          ? "bg-[#958d3b]/25 dark:bg-[#c57f7f]/60"
          : currentService === 3
          ? "bg-[#b9deaa] dark:bg-[#b9deaa]"
          : currentService === 4
          ? "bg-[#e2eff7] dark:bg-[#e2eff7]"
          : "bg-[#493b95]/25 dark:bg-[#8a7fc5]/60"
      )}
    >
      <AnimatePresence mode="wait">
        {data?.findManyServices?.map((service: IServices, index: number) => {
          const isActive = Number(service.order) === activeService;
          const translation = service?.translations?.find(
            (translation) => translation.languageCode === locale
          );
          const headline = translation?.name.split(" ");
          return (
            isActive && (
              <motion.div
                key={index}
                className={cn(
                  "relative w-full h-full flex justify-center items-center"
                )}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={fadeInOutVariants}
                transition={{ duration: 0.3 }}
              >
                <h2
                  className={cn(
                    "absolute text-[44px] z-[2] left-[50%] translate-x-[-50%] xl:text-[34px] w-[80%] text-center top-[30px] uppercase tracking-[12px]",
                    locale === "en" ? "font-geom" : "font-firago",
                    currentService === 1
                      ? " text-secondary"
                      : currentService === 2
                      ? " text-secondary"
                      : currentService === 3
                      ? "text-[#595591]"
                      : currentService === 4
                      ? "text-[#595591]"
                      : "text-secondary"
                  )}
                >
                  {headline &&
                  translation?.name &&
                  translation?.name.toLowerCase() === "software testing"
                    ? headline[1]
                    : headline && headline[0]}
                </h2>

                <Image
                  src={service.background || ""}
                  alt="background"
                  width={700}
                  height={700}
                  className={cn(
                    "w-[400px] xl:w-[520px] absolute left-[50%] translate-x-[-50%] h-auto",
                    currentService === 1
                      ? " bottom-[-12px] xl:bottom-[-16px]"
                      : currentService === 2
                      ? " bottom-[-21px]"
                      : currentService === 3
                      ? "bottom-[22px] xl:bottom-[28px]"
                      : currentService === 4
                      ? "bottom-[43px] xl:bottom-[63px]"
                      : "bottom-[0]"
                  )}
                />
              </motion.div>
            )
          );
        })}
      </AnimatePresence>
    </motion.div>
  );
}
