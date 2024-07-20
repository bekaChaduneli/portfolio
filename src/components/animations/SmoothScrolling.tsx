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
        lerp: 0.05,
        duration: 0.3,
      }}
    >
      {children}
    </ReactLenis>
  );
}
