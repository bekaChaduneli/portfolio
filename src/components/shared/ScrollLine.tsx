"use client";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

export default function ScrollLine() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ scaleY: 1 });
    }
  }, [controls, inView]);

  return (
    <div className="flex justify-center z-[0] relative">
      <motion.div
        ref={ref}
        className={cn(
          "w-[1px] h-[140px] xl:h-[240px] bg-gradient-to-b origin-top from-transparent to-primary dark:to-secondary"
        )}
        initial={{ scaleY: 0 }}
        animate={controls}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </div>
  );
}
