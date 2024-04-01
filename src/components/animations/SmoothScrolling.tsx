"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react";

type SmoothScrolling = {
  children: ReactNode;
};

function SmoothScrolling({ children }: SmoothScrolling) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.04,
        duration: 1.5,
        smoothWheel: true,
        syncTouch: true,
        touchMultiplier: 1,
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
