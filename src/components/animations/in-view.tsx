import { InView } from "@/components/core/in-view";
import { ReactNode } from "react";

export function InViewBasic({ children }: { children: ReactNode }) {
  return (
    <InView
      variants={{
        hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
      }}
      viewOptions={{ margin: "0px 0px 0px 0px" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </InView>
  );
}
