import { ReactNode } from "react";
import "./globals.css";
import SmoothScrolling from "@/components/animations/SmoothScrolling";

type Props = {
  children: ReactNode;
};

export const revalidate = 1;

export default function RootLayout({ children }: Props) {
  return <SmoothScrolling>{children}</SmoothScrolling>;
}
