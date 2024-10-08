import { cn } from "@/lib/utils";
import { MaskTextType } from "@/types/ComponentTypes";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";

export function MaskText({
  index,
  className,
  inView,
  children,
  type,
  delay,
}: MaskTextType) {
  const locale = useLocale();
  const animation = {
    initial: { y: "100%" },
    enter: (i: number) => ({
      y: "0",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: delay
          ? delay
          : type === "aboutMeLeft"
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
        "overflow-hidden flex items-center",
        type === "aboutMeRight"
          ? "relative top-[17px] h-[60px] left-[-5px] rotate-[-5deg] min-[500px]:h-[90px] md:h-[56px] xl:h-[90px]"
          : type === "aboutMeLeft" &&
              "relative h-[72px] rotate-[-5deg] min-[500px]:h-[90px] md:h-[56px] xl:h-[90px]",
        locale === "ka" && type === "aboutMeRight" ? "xl:top-[23px]" : "",
        type === "left"
          ? "min-h-[60px] md:min-h-[84px] lg:min-h-[56px] xl:min-h-[73px] h-full tracking-[2.5px]"
          : "tracking-[1.7px]"
      )}
    >
      <motion.p
        custom={index}
        variants={animation}
        initial="initial"
        animate={inView ? "enter" : ""}
        className={cn(className, "h-full")}
      >
        {children}
      </motion.p>
    </div>
  );
}
