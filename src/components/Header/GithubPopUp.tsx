import { cn } from "@/lib/utils";
import { useQuery } from "@apollo/client";
import usePopUpStore from "@/store/use-popup-store";
import { IGithubRepoResponse, IMyGithub } from "@/types/githubRepo";
import React, { useEffect, useState } from "react";
import { GET_GITHUBREPOS } from "@/utils/apolloQuerys";
import axios from "axios";

export default function GithubPopUp() {
  const { data, loading, error } =
    useQuery<IGithubRepoResponse>(GET_GITHUBREPOS);

  const [myGithub, setMyGithub] = useState<IMyGithub | null>(null);
  const { isOpen, type } = usePopUpStore();
  useEffect(() => {
    const fetchGithub = async () => {
      try {
        const myGithubRes = await axios.get(
          "https://api.github.com/users/bekachaduneli",
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`,
            },
          }
        );
        setMyGithub(myGithubRes.data);
      } catch (error) {
        console.error("Error fetching GitHub profile:", error);
      }
    };

    fetchGithub();
  }, []);

  console.log(myGithub);
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
