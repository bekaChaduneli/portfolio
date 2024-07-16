import { cn } from "@/lib/utils";
import usePopUpStore from "@/store/use-popup-store";
import React from "react";

export default function GithubPopUp() {
    const { isOpen, type } = usePopUpStore();
    return (
        <div
            className={cn(
                "w-[670px] xl:w-[900px] h-[430px] xl:h-[530px] bg-white rounded-[8px] absolute origin-bottom-right right-[130px] xl:right-[150px] bottom-[76px] xl:bottom-[100px] z-[11]",
                isOpen && type === "github"
                    ? " transition-all duration-700 scale-100"
                    : "scale-0"
            )}
        ></div>
    );
}
