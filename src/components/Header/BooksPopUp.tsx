import { cn } from "@/lib/utils";
import usePopUpStore from "@/store/use-popup-store";
import React from "react";

export default function BooksPopUp() {
    const { isOpen, type } = usePopUpStore();
    return (
        <div
            className={cn(
                "w-[360px] h-[460px] xl:w-[400px] xl:h-[520px] bg-[#f7f2f2]/[.92] backdrop-blur-[6px] backdrop-saturate-[1.4] rounded-[8px] absolute origin-top-left left-[136px] top-[46px] xl:left-[160px] xl:top-[54px] z-[11]",
                isOpen && type === "books"
                    ? " transition-all duration-500 scale-100"
                    : "scale-0"
            )}
        ></div>
    );
}
