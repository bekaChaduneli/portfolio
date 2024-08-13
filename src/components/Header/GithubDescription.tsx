import { IGithubRepoResponse } from "@/types/githubRepo";
import React from "react";

export default function GithubDescription({
  t,
  locale,
  repos,
}: {
  t: any;
  locale: string;
  repos: IGithubRepoResponse | undefined;
}) {
  return <div>GithubDescription</div>;
}
