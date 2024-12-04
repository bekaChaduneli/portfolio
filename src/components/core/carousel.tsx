"use client";
import {
  Children,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { motion, Transition, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CarouselContextType = {
  index: number;
  setIndex: (newIndex: number) => void;
  itemsCount: number;
  setItemsCount: (newItemsCount: number) => void;
};

const CarouselContext = createContext<CarouselContextType | undefined>(
  undefined
);

function useCarousel() {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within an CarouselProvider");
  }
  return context;
}

type CarouselProviderProps = {
  children: ReactNode;
};

function CarouselProvider({ children }: CarouselProviderProps) {
  const [index, setIndex] = useState<number>(0);
  const [itemsCount, setItemsCount] = useState<number>(0);

  return (
    <CarouselContext.Provider
      value={{ index, setIndex, itemsCount, setItemsCount }}
    >
      {children}
    </CarouselContext.Provider>
  );
}

type Carousel = {
  children: ReactNode;
  className?: string;
};

function Carousel({ children, className }: Carousel) {
  return (
    <CarouselProvider>
      <div className={cn("group/hover !px-0 relative", className)}>
        <div className="overflow-hidden">{children}</div>
      </div>
    </CarouselProvider>
  );
}

type CarouselNavigationProps = {
  className?: string;
  classNameButton?: string;
  alwaysShow?: boolean;
  classNameChevron?: string;
};

function CarouselNavigation({
  className,
  classNameButton,
  alwaysShow,
  classNameChevron,
}: CarouselNavigationProps) {
  const { index, setIndex, itemsCount } = useCarousel();

  return (
    <div
      className={cn(
        "pointer-events-none absolute left-[-12.5%] top-1/4 flex w-[125%] -translate-y-1/2 justify-between px-2",
        className
      )}
    >
      <button
        type="button"
        className={cn(
          "pointer-events-auto h-fit w-fit rounded-full translate-x-[14vw] min-[560px]:translate-x-[80px] bg-secondary/70 dark:bg- p-2 transition-opacity duration-300",
          alwaysShow
            ? "opacity-100"
            : "opacity-0 group-hover/hover:opacity-100",
          alwaysShow
            ? "disabled:opacity-40"
            : "disabled:group-hover/hover:opacity-40",
          classNameButton
        )}
        disabled={index === 0}
        onClick={() => {
          if (index > 0) {
            setIndex(index - 1);
          }
        }}
      >
        <ChevronLeft
          className={cn("stroke-primary ", classNameChevron)}
          size={16}
        />
      </button>
      <button
        type="button"
        className={cn(
          "pointer-events-auto h-fit w-fit rounded-full translate-x-[-14vw] min-[560px]:translate-x-[-80px] p-2 transition-opacity duration-300 bg-secondary/70",
          alwaysShow
            ? "opacity-100"
            : "opacity-0 group-hover/hover:opacity-100",
          alwaysShow
            ? "disabled:opacity-40"
            : "disabled:group-hover/hover:opacity-40",
          classNameButton
        )}
        disabled={index + 1 === itemsCount}
        onClick={() => {
          if (index < itemsCount - 1) {
            setIndex(index + 1);
          }
        }}
      >
        <ChevronRight
          className={cn("stroke-primary ", classNameChevron)}
          size={16}
        />
      </button>
    </div>
  );
}

type CarouselIndicatorProps = {
  className?: string;
  classNameButton?: string;
};

function CarouselIndicator({
  className,
  classNameButton,
}: CarouselIndicatorProps) {
  const { index, itemsCount, setIndex } = useCarousel();

  return (
    <div
      className={cn(
        "absolute bottom-0 z-10 flex w-full items-center justify-center",
        className
      )}
    >
      <div className="flex space-x-2">
        {Array.from({ length: itemsCount }, (_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={cn(
              "h-3 w-3 rounded-full transition-opacity duration-300",
              index === i ? "bg-primary" : "bg-primary/50",
              classNameButton
            )}
          />
        ))}
      </div>
    </div>
  );
}

type CarouselContentProps = {
  children: ReactNode;
  className?: string;
  type?: string;
  transition?: Transition;
};

function CarouselContent({
  children,
  type,
  className,
  transition,
}: CarouselContentProps) {
  const { index, setIndex, setItemsCount } = useCarousel();
  const [visibleItemsCount, setVisibleItemsCount] = useState(1);
  const dragX = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsLength = Children.count(children);

  if (type === "recommendations") {
    useEffect(() => {
      const updateVisibleItems = () => {
        const width = window.innerWidth;
        if (width >= 1024) {
          setVisibleItemsCount(2.5);
        } else if (width >= 768) {
          setVisibleItemsCount(2.2);
        } else {
          setVisibleItemsCount(1.15);
        }
      };

      updateVisibleItems();
      window.addEventListener("resize", updateVisibleItems);

      return () => window.removeEventListener("resize", updateVisibleItems);
    }, []);
  } else {
    useEffect(() => {
      if (!containerRef.current) {
        return;
      }

      const options = {
        root: containerRef.current,
        threshold: 0.5,
      };

      const observer = new IntersectionObserver((entries) => {
        const visibleCount = entries.filter(
          (entry) => entry.isIntersecting
        ).length;
        setVisibleItemsCount(visibleCount);
      }, options);

      const childNodes = containerRef.current.children;
      Array.from(childNodes).forEach((child) => observer.observe(child));

      return () => observer.disconnect();
    }, [children, setItemsCount]);
  }

  useEffect(() => {
    if (!itemsLength) {
      return;
    }

    setItemsCount(itemsLength);
  }, [itemsLength]);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -10 && index < itemsLength - 1) {
      setIndex(index + 1);
    } else if (x >= 10 && index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <motion.div
      drag="x"
      dragConstraints={{
        left: 0,
        right: 0,
      }}
      dragMomentum={false}
      style={{
        x: dragX,
      }}
      animate={{
        translateX: `-${index * (100 / visibleItemsCount)}%`,
      }}
      onDragEnd={onDragEnd}
      transition={{
        damping: 18,
        stiffness: 90,
        type: "spring",
        duration: 0.2,
      }}
      className={cn(
        type === "recommendation"
          ? "flex w-full !px-0 space-x-[12px] md:space-x-[16px] lg:space-x-[20px] transition-transform"
          : "flex cursor-grab items-center active:cursor-grabbing",
        className
      )}
      ref={containerRef}
    >
      {children}
    </motion.div>
  );
}

type CarouselItemProps = {
  children: ReactNode;
  className?: string;
};

function CarouselItem({ children, className }: CarouselItemProps) {
  return (
    <motion.div
      className={cn(
        "w-full min-w-0 shrink-0 grow-0 overflow-hidden",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

export {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselIndicator,
  CarouselItem,
  useCarousel,
};
