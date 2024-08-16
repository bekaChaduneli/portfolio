"use client";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import ScrollLine from "../shared/ScrollLine";

export default function AboutMeElement() {
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
      <ScrollLine />
    </div>
  );
}
