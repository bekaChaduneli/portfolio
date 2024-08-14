import { IGithubRepo } from "@/types/githubRepo";
import React from "react";
import { Icons } from "../shared/Icons";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function GithubRepo({
  data,
  locale,
}: {
  data: IGithubRepo;
  locale: string;
}) {
  const repo = data.translations?.find(
    (translation) => translation.languageCode === locale
  );

  return (
    <Link
      target="_blank"
      href={data?.link}
      className="border-[1px] border-primary/20 rounded-[8px]  hover:border-primary p-[12px] w-[48%] duration-500 transition-all"
    >
      <div className="flex justify-between items-center mb-[4px]">
        <span
          className={cn(
            "text-primary line-clamp-1 flex gap-[4px] font-bold  items-center",
            locale === "en" ? "font-geom" : "font-firago"
          )}
        >
          <Icons.Repository className="w-[14px] h-[14px]" />
          {repo?.title}
        </span>
        <div className="flex gap-[4px] items-center text-[11px] text-primary ">
          <Icons.Star className="w-[8px] h-[8px]" />
          {data?.stars}
        </div>
      </div>
      <div className="flex gap-[6px] items-center mb-[8px]">
        <div
          className={cn(
            "w-2 h-2 rounded-full",
            data?.language.toLowerCase() === "typescript"
              ? "bg-[#0073ff]"
              : data?.language.toLowerCase() === "javascript"
              ? "bg-[#ffe203]"
              : data?.language.toLowerCase() === "css"
              ? "bg-[#9400e4]"
              : data?.language.toLowerCase() === "html"
              ? "bg-[#ff7300]"
              : data?.language.toLowerCase() === "python"
              ? "bg-primary"
              : "bg-white"
          )}
        />
        <p
          className={cn(
            "text-[12px] line-clamp-1 text-primary",
            locale === "en" ? "font-geom" : "font-firago"
          )}
        >
          {data?.language}
        </p>
      </div>
      <p
        className={cn(
          "text-[12px] text-primary/50 line-clamp-1",
          locale === "ka" && "font-firago"
        )}
      >
        {repo?.description}
      </p>
    </Link>
  );
}
