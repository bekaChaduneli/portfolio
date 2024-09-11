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

export default function YFramerText({
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
  const baseY = useMotionValue(0);
  const smoothVelocity = useSpring(0, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });
  const y = useTransform(baseY, (v) => `${wrap(-70, 0, v)}%`);
  const directionFactor = useRef(1);

  const { isScrolling } = useScrollStore();

  useAnimationFrame((t, delta) => {
    if (!isScrolling) return;

    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    const currentY = baseY.get();
    if (velocityFactor.get() < 0) {
      currentY <= -50
        ? (directionFactor.current = 1)
        : (directionFactor.current = -1);
    } else if (velocityFactor.get() > 0) {
      currentY >= 50
        ? (directionFactor.current = -1)
        : (directionFactor.current = 1);
    }
    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseY.set(baseY.get() + moveBy);
  });

  return (
    <div
      className={cn(
        wrapperClassName
          ? wrapperClassName
          : " overflow-visible skills_shadow relative hidden  h-[650px] w-full lg:flex flex-col"
      )}
    >
      <motion.div
        className={cn(
          className ? className : "flex overflow-visible flex-col gap-[12px]"
        )}
        style={{ y }}
      >
        {children}
      </motion.div>
    </div>
  );
}
