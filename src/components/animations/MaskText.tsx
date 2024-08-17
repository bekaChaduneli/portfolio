import { cn } from "@/lib/utils";
import { MaskTextType } from "@/types/ComponentTypes";
import { motion } from "framer-motion";

export function MaskText({
  index,
  className,
  inView,
  children,
  type,
}: MaskTextType) {
  const animation = {
    initial: { y: "100%" },
    enter: (i: number) => ({
      y: "0",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay:
          type === "aboutMeLeft"
            ? 0.1
            : type === "aboutMeRight"
            ? 0.4
            : 0.34 + 0.075 * i,
      },
    }),
  };

  return (
    <div
      key={index}
      className={cn(
        "overflow-hidden",
        type === "aboutMeRight"
          ? "relative top-[17px] h-[60px] left-[-5px] rotate-[-5deg] min-[500px]:h-[90px]"
          : type === "aboutMeLeft" &&
              "relative h-[72px] rotate-[-5deg] min-[500px]:h-[90px]"
      )}
    >
      <motion.p
        custom={index}
        variants={animation}
        initial="initial"
        animate={inView ? "enter" : ""}
        className={className}
      >
        {children}
      </motion.p>
    </div>
  );
}
