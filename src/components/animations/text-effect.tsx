"use client";
import Link from "next/link";
import { TextEffect } from "../core/text-effect";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function TextEffectWithCustomVariants({
  text,
  className,
}: {
  text: string;
  className: any;
}) {
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const fancyVariants = {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.05,
        },
      },
    },
    item: {
      hidden: () => ({
        opacity: 0,
        y: Math.random() * 100 - 50,
        rotate: Math.random() * 90 - 45,
        scale: 0.3,
        color: getRandomColor(),
      }),
      visible: {
        opacity: 1,
        y: 0,
        rotate: 0,
        scale: 1,
        color: getRandomColor(),
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 200,
        },
      },
    },
  };

  return (
    <TextEffect per="word" variants={fancyVariants} className={className}>
      {text}
    </TextEffect>
  );
}

export function TextEffectPerChar({
  text,
  className,
}: {
  text: string;
  className: any;
}) {
  return (
    <TextEffect per="char" preset="fade" className={className}>
      {text}
    </TextEffect>
  );
}

export function TextEffectPerWord({
  text,
  className,
}: {
  text: string;
  className: any;
}) {
  return (
    <TextEffect per="word" as="h3" preset="blur" className={className}>
      {text}
    </TextEffect>
  );
}

export function TextEffectWithPreset({
  text,
  className,
}: {
  text: string;
  className: any;
}) {
  return (
    <TextEffect per="word" as="h3" preset="slide" className={className}>
      {text}
    </TextEffect>
  );
}

const DURATION = 0.25;
const STAGGER = 0.025;

export const FlipLink = ({
  children,
  href,
  className,
  top,
  onClick,
  textAlign,
  wordSpace,
}: {
  children: any;
  href: any;
  className: any;
  top: string;
  onClick?: any;
  wordSpace: string;
  textAlign: string;
}) => {
  return (
    <Link className="w-full" href={href} onClick={onClick ? onClick : () => {}}>
      <motion.div
        initial="initial"
        whileHover="hovered"
        className={
          className
            ? className
            : "relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
        }
        style={{
          lineHeight: 0.75,
        }}
      >
        <div
          className={cn(
            "absolute inset-0 flex justify-center translate-y-[-50%]",
            top ? top : "top-[56%]",
            textAlign === "left"
              ? "justify-start"
              : textAlign === "center"
              ? "justify-center"
              : "justify-end"
          )}
        >
          {children.split("").map((l: any, i: any) => (
            <motion.span
              variants={{
                initial: {
                  y: 0,
                },
                hovered: {
                  y: "-200%",
                },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className={cn("inline-block", l === " " && wordSpace)}
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </div>
        <div
          className={cn(
            "absolute inset-0 flex justify-center translate-y-[-50%]",
            top ? `${top}` : "top-[56%]",
            textAlign === "left"
              ? "justify-start"
              : textAlign === "center"
              ? "justify-center"
              : "justify-end"
          )}
        >
          {children.split("").map((l: any, i: any) => (
            <motion.span
              variants={{
                initial: {
                  y: "200%",
                },
                hovered: {
                  y: 0,
                },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className={cn("inline-block", l === " " && wordSpace)}
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </Link>
  );
};
