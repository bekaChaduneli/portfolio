import { MaskTextType } from "@/types/ComponentTypes";
import { motion } from "framer-motion";

export function MaskText({ index, className, inView, children }: MaskTextType) {
  const animation = {
    initial: { y: "100%" },
    enter: (i: any) => ({
      y: "0",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.34 + 0.075 * i,
      },
    }),
  };

  return (
    <div key={index} className="overflow-hidden">
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
