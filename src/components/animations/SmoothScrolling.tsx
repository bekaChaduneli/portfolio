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
        lerp: 0.02,
        duration: 2,
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;