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
  const [isFixed, setIsFixed] = useState(false);
  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: false, // Set to false to keep tracking the view
  });

  // Handle scroll event
  React.useEffect(() => {
    const handleScroll = () => {
      if (entry && entry.boundingClientRect.top < 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [entry]);

  const [activeService, setActiveService] = useState(currentService);

  return (
    <motion.div
      ref={ref}
      className=" relative overflow-hidden whitespace-nowrap"
      initial="hidden"
      animate={isFixed ? "visible" : "hidden"}
      exit="exit"
    >
      {data?.findManyServices?.map((service: IServices, index: number) => {
        const isActive = Number(service.order) === activeService;

        return (
          <div
            key={index}
            className={cn(
              "w-[444px] h-[444px] xl:w-[560px] xl:h-[560px] relative rounded-[30px] bg-[#493b95]/60 dark:bg-[#8a7fc5]/60 shadow-lg shadow-black/30 overflow-hidden",
              isActive ? "flex justify-center" : "hidden"
            )}
            style={{
              position: isFixed && isActive ? "fixed" : "static",
              top: isFixed && isActive ? "150px" : "auto",
              transform: isFixed && isActive ? "translateX(-50%)" : "none",
            }}
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
