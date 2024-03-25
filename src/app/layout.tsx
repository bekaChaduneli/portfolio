import { ReactNode } from "react";
import "./globals.css";

type Props = {
  children: ReactNode;
};

export const revalidate = 1;

export default function RootLayout({ children }: Props) {
  return children;
}
