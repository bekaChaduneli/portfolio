"use client";
import { useRef } from "react";
import {
  motion,
  useSpring,
  useTransform,
  useMotionValue,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "framer-motion";
import { Sparkle } from "lucide-react";
import { InfinityTextProps } from "@/types/ComponentsType";

export default function InfinityText({
  texts,
  className,
  iconClassName,
  baseVelocity = 100,
}: InfinityTextProps) {
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
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden relative m-0 whitespace-nowrap flex w-full left-0 flex-nowrap">
      <motion.div
        className="inherit flex whitespace-nowrap flex-nowrap"
        style={{ x }}
      >
        {texts.map((text: string, index: any) => {
          return (
            <span key={index} className={className}>
              {text}
              <Sparkle className={iconClassName} />
            </span>
          );
        })}
      </motion.div>
    </div>
  );
}
