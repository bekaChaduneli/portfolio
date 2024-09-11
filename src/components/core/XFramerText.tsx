"use client";
import { ReactNode, useRef } from "react";
import {
  motion,
  useSpring,
  useTransform,
  useMotionValue,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "framer-motion";
import { cn } from "@/lib/utils";
import { useScrollStore } from "@/store/use-skillsScroll-store";

export default function XFramerText({
  children,
  wrapperClassName,
  className,
  baseVelocity = 100,
}: {
  children: ReactNode;
  wrapperClassName?: string;
  className?: string;
  baseVelocity?: number;
}) {
  const baseX = useMotionValue(0);
  const smoothVelocity = useSpring(0, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });
  const x = useTransform(baseX, (v) => `${wrap(-0, -54, v)}%`);
  const directionFactor = useRef(1);

  const { isScrolling } = useScrollStore();

  useAnimationFrame((t, delta) => {
    if (!isScrolling) return;

    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    const currentX = baseX.get();
    if (velocityFactor.get() < 0) {
      currentX <= -50
        ? (directionFactor.current = 1)
        : (directionFactor.current = -1);
    } else if (velocityFactor.get() > 0) {
      currentX >= 50
        ? (directionFactor.current = -1)
        : (directionFactor.current = 1);
    }
    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div
      className={cn(
        wrapperClassName
          ? wrapperClassName
          : " overflow-visible skills_shadow relative h-[76px] md:h-[96px] lg:!hidden w-full flex flex-col"
      )}
    >
      <motion.div
        className={cn(
          className ? className : "flex overflow-visible flex-row gap-[12px]"
        )}
        style={{ x }}
      >
        {children}
      </motion.div>
    </div>
  );
}
