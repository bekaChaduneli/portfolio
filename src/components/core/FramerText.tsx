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

export default function FramerText({
  children,
  custom,
  left,
  wrapperClassName,
  className,
  right,
  baseVelocity = 100,
}: {
  children: ReactNode;
  custom?: any;
  left?: any;
  wrapperClassName?: string;
  right?: any;
  className?: string;
  baseVelocity?: number;
}) {
  const baseY = useMotionValue(0);
  const baseX = useMotionValue(0);
  const smoothVelocity = useSpring(0, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });
  const y = useTransform(baseY, (v) => `${wrap(-70, 0, v)}%`);
  const x = useTransform(baseX, (v) => `${wrap(-0, -54, v)}%`);
  const directionFactor = useRef(1);

  useAnimationFrame((t, delta) => {
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
    baseX.set(baseX.get() + moveBy);
  });

  if (custom) {
    return (
      <div
        className={cn(
          wrapperClassName
            ? wrapperClassName
            : "overflow-hidden skills_shadow relative h-[650px] w-full flex flex-col"
        )}
      >
        <motion.div
          className={cn(className ? className : "flex flex-col gap-[12px]")}
          style={{ y }}
        >
          {children}
        </motion.div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden relative leading-[100%] m-0 left-0 w-full flex whitespace-nowrap flex-nowrap">
      <motion.div
        className={cn(
          " inherit uppercase text-[64px] flex whitespace-nowrap flex-nowrap parallax_scroller"
        )}
        style={{ x }}
      >
        {[...Array(20)].map((_, index) => (
          <span key={index}>{children} </span>
        ))}
      </motion.div>
    </div>
  );
}
