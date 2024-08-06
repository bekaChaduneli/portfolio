import { cn } from "@/lib/utils";
import usePopUpStore from "@/store/use-popup-store";
import { ILinkedinResponse } from "@/types/linkedin";
import { GET_LINKEDIN } from "@/utils/apolloQuerys";
import { useQuery } from "@apollo/client";
import React from "react";

export default function LinkedinPopUp() {
  const { data, loading, error } = useQuery<ILinkedinResponse>(GET_LINKEDIN);
  console.log(data);
  const { isOpen, type } = usePopUpStore();
  return (
    <div
      className={cn(
        "w-[670px] xl:w-[900px] h-[430px] xl:h-[530px] bg-[#f7f2f2]/[.92] backdrop-blur-[6px] backdrop-saturate-[1.4] rounded-[8px] absolute origin-bottom-left left-[144px] xl:left-[160px] bottom-[68px] xl:bottom-[100px] z-[11]",
        isOpen && type === "linkedin"
          ? " transition-all duration-700 scale-100"
          : "scale-0"
      )}
    ></div>
  );
}
