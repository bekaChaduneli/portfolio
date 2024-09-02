"use client";
import { TextEffect } from "../core/text-effect";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import NavigationLink from "../Navbar/NavigationLink";

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
  skillChanged,
  skillTopHeadline,
  skillTopClassName,
  skillTopDescription,
  skillTopDescriptionClassName,
  skillBottomHeadline,
  skillBottomDescription,
  skillBottomClassName,
  skillBottomDescriptionClassName,
  onClick,
  skills,
  textAlign,
  wordSpace,
}: {
  children?: any;
  href?: any;
  className?: any;
  skillTopHeadline?: any;
  skillTopClassName?: any;
  skillTopDescription?: any;
  skillTopDescriptionClassName?: any;
  skillBottomHeadline?: any;
  skillBottomClassName?: any;
  skillBottomDescription?: any;
  skillBottomDescriptionClassName?: any;
  top?: string;
  skillChanged?: boolean;
  onClick?: any;
  skills?: boolean;
  wordSpace?: string;
  textAlign?: string;
}) => {
  if (skills) {
    return (
      <>
        <motion.div
          initial="initial"
          animate={skillChanged ? "hovered" : "initial"}
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
            <motion.div
              className={skillTopClassName ? skillTopClassName : ""}
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
                delay: STAGGER,
              }}
            >
              {skillTopHeadline}
            </motion.div>
          </div>
          <motion.div
            initial="initial"
            animate={skillChanged ? "hovered" : "initial"}
            className={cn(
              "absolute inset-0 flex justify-center translate-y-[-50%]",
              top ? `${top}` : "top-[56%]",
              textAlign === "left"
                ? "justify-start"
                : textAlign === "center"
                ? "justify-center"
                : "justify-end"
            )}
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
              <motion.div
                className={skillBottomClassName ? skillBottomClassName : ""}
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
                  delay: STAGGER,
                }}
              >
                {skillBottomHeadline}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial="initial"
          animate={skillChanged ? "hovered" : "initial"}
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
            <motion.div
              className={
                skillTopDescriptionClassName ? skillTopDescriptionClassName : ""
              }
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
                delay: STAGGER,
              }}
            >
              {skillTopDescription}
            </motion.div>
          </div>
          <motion.div
            initial="initial"
            animate={skillChanged ? "hovered" : "initial"}
            className={cn(
              "absolute inset-0 flex justify-center translate-y-[-50%]",
              top ? `${top}` : "top-[56%]",
              textAlign === "left"
                ? "justify-start"
                : textAlign === "center"
                ? "justify-center"
                : "justify-end"
            )}
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
              <motion.div
                className={
                  skillBottomDescriptionClassName
                    ? skillBottomDescriptionClassName
                    : ""
                }
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
                  delay: STAGGER,
                }}
              >
                {skillBottomDescription}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </>
    );
  }

  return (
    <NavigationLink
      className="w-full"
      href={href}
      onClick={onClick ? onClick : () => {}}
    >
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
              className={cn("flex items-center", l === " " && wordSpace)}
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
              className={cn("flex items-center", l === " " && wordSpace)}
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </NavigationLink>
  );
};
