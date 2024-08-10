"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react";

type SmoothScrollingProps = {
  children: ReactNode;
};

export default function SmoothScrolling({ children }: SmoothScrollingProps) {
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
