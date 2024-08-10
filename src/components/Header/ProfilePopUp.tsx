import { cn } from "@/lib/utils";
import usePopUpStore from "@/store/use-popup-store";
import { IProfileResponse } from "@/types/profile";
import { GET_PROFILE } from "@/utils/apolloQuerys";
import { useQuery } from "@apollo/client";
import React from "react";

export default function ProfilePopUp() {
  const { data, loading, error } = useQuery<IProfileResponse>(GET_PROFILE);
  const { isOpen, type } = usePopUpStore();
  return (
    <div
      className={cn(
        "w-[700px] h-[450px] xl:w-[880px] xl:h-[530px] bg-[#f7f2f2]/[.92] backdrop-blur-[6px] backdrop-saturate-[1.4] rounded-[8px] absolute origin-top-right right-[138px] xl:right-[150px] top-[48px] xl:top-[54px] z-[11]",
        isOpen && type === "profile"
          ? " transition-all duration-700 scale-100"
          : "scale-0"
      )}
    ></div>
  );
}
