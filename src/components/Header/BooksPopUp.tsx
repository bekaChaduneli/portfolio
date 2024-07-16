import { cn } from "@/lib/utils";
import usePopUpStore from "@/store/use-popup-store";
import React from "react";

export default function BooksPopUp() {
    const { isOpen, type } = usePopUpStore();
    return (
        <div
            className={cn(
                "w-[400px] h-[520px] bg-white rounded-[8px] absolute origin-top-left left-[160px] top-[54px] z-[11]",
                isOpen && type === "books"
                    ? " transition-all duration-500 scale-100"
                    : "scale-0"
            )}
        ></div>
    );
}
