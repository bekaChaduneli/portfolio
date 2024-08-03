import { cn } from "@/lib/utils";
import { useQuery } from "@apollo/client";
import usePopUpStore from "@/store/use-popup-store";
import { IGithubRepo } from "@/types/githubRepo";
import React from "react";
import { GET_GITHUBREPOS } from "@/utils/apolloQuerys";

export default function GithubPopUp() {
  const { data, loading, error } = useQuery<IGithubRepo>(GET_GITHUBREPOS);

  console.log(data);
  const { isOpen, type } = usePopUpStore();
  return (
    <div
      className={cn(
        "w-[670px] xl:w-[900px] h-[430px] xl:h-[530px] bg-[#f7f2f2]/[.92] backdrop-blur-[6px] backdrop-saturate-[1.4] rounded-[8px] absolute origin-bottom-right right-[130px] xl:right-[150px] bottom-[76px] xl:bottom-[100px] z-[11]",
        isOpen && type === "github"
          ? " transition-all duration-700 scale-100"
          : "scale-0"
      )}
    ></div>
  );
}
