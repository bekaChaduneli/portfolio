"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react";

type SmoothScrolling = {
  children: ReactNode;
};

export default function SmoothScrolling({ children }: SmoothScrolling) {
  return (
    <ReactLenis
      root
      options={{
        duration: 0.3,
        lerp: 0.05,
      }}
    >
      {children}
    </ReactLenis>
  );
}
