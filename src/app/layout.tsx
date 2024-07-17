import { ReactNode } from "react";
import "./globals.css";
import { locales } from "@/config";
import SmoothScrolling from "@/components/animations/SmoothScrolling";

type Props = {
    children: ReactNode;
};

export const revalidate = 1;

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export default function RootLayout({ children }: Props) {
    return <SmoothScrolling>{children}</SmoothScrolling>;
}
