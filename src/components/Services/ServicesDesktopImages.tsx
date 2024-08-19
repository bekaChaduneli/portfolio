import { cn } from "@/lib/utils";
import { IServices, IServicesResponse } from "@/types/services";
import Image from "next/image";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function ServicesDesktopImages({
  data,
  currentService,
}: {
  data: IServicesResponse | undefined;
  currentService: number;
}) {
  const [activeService, setActiveService] = useState(currentService);

  return (
    <motion.div
      className="overflow-hidden whitespace-nowrap sticky top-[120px] w-[444px] h-[444px] xl:w-[520px] xl:h-[560px]  shadow-lg shadow-black/30 rounded-[30px]"
      exit="exit"
    >
      {data?.findManyServices?.map((service: IServices, index: number) => {
        const isActive = Number(service.order) === activeService;

        return (
          <div
            key={index}
            className={cn(
              "relative  bg-[#493b95]/25 dark:bg-[#8a7fc5]/60 overflow-hidden w-full h-full",
              isActive ? "flex justify-center" : "hidden"
            )}
          >
            <h2
              className={cn(
                "absolute text-transparent  left-[-22px] text-[74px] xl:left-[-20px] xl:text-[94px] top-[-10px] font-geom tracking-[12px]",
                "border border-current"
              )}
              style={{
                WebkitTextStroke: "2px #c3c2e9",
                color: "transparent",
              }}
            >
              FRONTEND
            </h2>

            <Image
              src={service.background || ""}
              alt="background"
              width={700}
              height={700}
              className="w-[400px] xl:w-[520px] absolute left-[50%] bottom-[-16px] translate-x-[-50%] h-auto"
            />
          </div>
        );
      })}
    </motion.div>
  );
}
