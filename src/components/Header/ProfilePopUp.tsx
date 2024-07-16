import { cn } from "@/lib/utils";
import usePopUpStore from "@/store/use-popup-store";
import React from "react";

export default function ProfilePopUp() {
    const { isOpen, type } = usePopUpStore();
    return (
        <div
            className={cn(
                "w-[700px] h-[450px] xl:w-[880px] xl:h-[530px] bg-white rounded-[8px] absolute origin-top-right right-[138px] xl:right-[150px] top-[48px] xl:top-[54px] z-[11]",
                isOpen && type === "profile"
                    ? " transition-all duration-700 scale-100"
                    : "scale-0"
            )}
        ></div>
    );
}
