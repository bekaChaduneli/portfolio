"use client";
import { animatePageIn } from "@/utils/page-animation";
import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        animatePageIn();
    }, []);
    return (
        <div>
            <div
                id="banner-1"
                className="min-h-screen bg-primary dark:bg-[#131c3e] z-[60] fixed top-0 left-0 w-[20%]"
            />
            <div
                id="banner-2"
                className=" min-h-screen bg-primary dark:bg-[#131c3e] z-[60] fixed top-0 left-[20%] w-[20%]"
            />
            <div
                id="banner-3"
                className="min-h-screen bg-primary dark:bg-[#131c3e] z-[60] fixed top-0 left-[40%] w-[20%]"
            />
            <div
                id="banner-4"
                className="min-h-screen bg-primary dark:bg-[#131c3e] z-[60] fixed top-0 left-[60%] w-[20%]"
            />
            <div
                id="banner-5"
                className="min-h-screen bg-primary dark:bg-[#131c3e] z-[60] fixed top-0 left-[80%] w-[20%]"
            />
            {children}
        </div>
    );
}
