import React, { createContext, useContext, useState, ReactNode } from "react";
import { motion, AnimatePresence, MotionConfig, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type AccordionContextType = {
  expandedValue: React.Key | null;
  toggleItem: (value: React.Key) => void;
};

const AccordionContext = createContext<AccordionContextType | undefined>(
  undefined
);

function useAccordion() {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("useAccordion must be used within an AccordionProvider");
  }
  return context;
}

type AccordionProviderProps = {
  children: ReactNode;
  variants?: Variants;
};

function AccordionProvider({ children, variants }: AccordionProviderProps) {
  const [expandedValue, setExpandedValue] = useState<React.Key | null>(null);

  const toggleItem = (value: React.Key) => {
    setExpandedValue(expandedValue === value ? null : value);
  };

  return (
    <AccordionContext.Provider value={{ expandedValue, toggleItem }}>
      {children}
    </AccordionContext.Provider>
  );
}

type AccordionProps = {
  children: ReactNode;
  className?: string;
};

function Accordion({ children, className }: AccordionProps) {
  return (
    <div className={cn("relative", className)} aria-orientation="vertical">
      <AccordionProvider>{children}</AccordionProvider>
    </div>
  );
}

type AccordionItemProps = {
  value: React.Key;
  children: ReactNode;
  className?: string;
};

function AccordionItem({ value, children, className }: AccordionItemProps) {
  const { expandedValue, toggleItem } = useAccordion();
  const isExpanded = value === expandedValue;

  return (
    <div className={cn("overflow-hidden", className)}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child as React.ReactElement<any>, {
          expanded: isExpanded,
          onToggle: () => toggleItem(value),
        })
      )}
    </div>
  );
}

type AccordionTriggerProps = {
  children: ReactNode;
  className?: string;
  onToggle?: () => void;
  expanded?: boolean;
};

function AccordionTrigger({
  children,
  className,
  onToggle,
  expanded,
}: AccordionTriggerProps) {
  return (
    <button
      onClick={onToggle}
      className={cn("w-full flex justify-between items-center py-2", className)}
    >
      {children}
    </button>
  );
}

type AccordionContentProps = {
  children: ReactNode;
  expanded?: boolean;
  className?: string;
};

function AccordionContent({
  children,
  expanded,
  className,
}: AccordionContentProps) {
  return (
    <AnimatePresence initial={false}>
      {expanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className={cn("overflow-hidden", className)}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
