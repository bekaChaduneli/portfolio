import { cn } from "@/lib/utils";
import { useQuery } from "@apollo/client";
import usePopUpStore from "@/store/use-popup-store";
import { IGithubRepoResponse, IMyGithub } from "@/types/githubRepo";
import React, { useEffect, useState } from "react";
import { GET_GITHUBREPOS } from "@/utils/apolloQuerys";
import axios from "axios";
import { useLocale, useTranslations } from "next-intl";
import GithubProfile from "./GithubProfile";
import GithubDescription from "./GithubDescription";

export default function GithubPopUp() {
  const { data, loading, error } =
    useQuery<IGithubRepoResponse>(GET_GITHUBREPOS);

  const [myGithub, setMyGithub] = useState<IMyGithub | undefined>(undefined);
  const { isOpen, type } = usePopUpStore();
  const locale = useLocale();
  const t = useTranslations("Github");
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
        "w-[720px] xl:w-[920px] h-[520px] xl:h-[590px] flex gap-[14px] bg-[#f7f2f2]/[.92] backdrop-blur-[6px] backdrop-saturate-[1.4] rounded-[8px] absolute origin-bottom-right  py-[8px] px-[10px] xl:px-[14px] xl:py-[12px] right-[130px] xl:right-[150px] bottom-[36px] xl:bottom-[50px] z-[11]",
        isOpen && type === "github"
          ? " transition-all duration-700 scale-100"
          : "scale-0"
      )}
    >
      <GithubProfile t={t} github={myGithub} locale={locale} />
      <GithubDescription t={t} locale={locale} repos={data} />
    </div>
  );
}
