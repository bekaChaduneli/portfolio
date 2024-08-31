import { cn } from "@/lib/utils";
import { IMyGithub } from "@/types/githubRepo";
import Image from "next/image";
import React from "react";
import { Icons } from "../shared/Icons";
import Link from "next/link";

export default function GithubProfile({
  github,
  locale,
  t,
}: {
  github: IMyGithub | undefined;
  locale: string;
  t: any;
}) {
  return (
    <div className="p-[8px] min-w-[216px] w-[216px] xl:min-w-[256px] xl:w-[256px] border-[1px] border-primary/25 rounded-[12px] overflow-hidden">
      <Image
        src={github?.avatar_url ? github?.avatar_url : ""}
        width={600}
        height={600}
        className="w-full h-auto  border-[2px] border-secondary rounded-full mb-[6px]"
        alt="logo"
      />
      <h2 className="text-[22px] font-geom text-primary/90 leading-[22px] line-clamp-1">
        {github?.name}
      </h2>
      <h6 className=" text-primary/60 mb-[6px] line-clamp-1">{`${github?.login} * he/him`}</h6>
      <p className="text-[12px] font-medium xl:text-[13px] font-light text-primary/80 mb-[8px] line-clamp-4">
        {github?.bio}
      </p>
      <div
        className={cn(
          "flex gap-[4px] items-center text-[12px] mb-[14px] text-primary",
          locale === "ka"
            ? "font-firago text-[10px] xl:text-[12px]"
            : "text-[12px] font-bold xl:text-[14px]"
        )}
      >
        <Icons.Followers
          className={cn(
            "w-[16px] h-[16px]",
            locale === "ka"
              ? "xl:w-[20px] xl:h-[20px]"
              : "xl:w-[24px] xl:h-[24px]"
          )}
        />
        {`${github?.followers} ${t("followers")} * ${github?.following} ${t(
          "following"
        )}`}
      </div>
      <div className="flex gap-[4px] items-center line-clamp-1">
        <Icons.Work />
        <h2 className="text-[14px] font-bold text-primary">
          {github?.company}
        </h2>
      </div>
      <div className="flex gap-[4px] items-center mb-[12px] line-clamp-1">
        <Icons.Location />
        <h2 className="text-[14px] font-bold text-primary">
          {locale === "en" ? github?.location : "თბილისი, საქართველო"}
        </h2>
      </div>
      <div className="flex justify-between items-center">
        <Link
          target="_blank"
          href="https://github.com/bekaChaduneli?tab=achievements&achievement=pull-shark"
          className="w-[33%] xl:w-[32%] relative"
        >
          <Image
            src="/pull-shark.png"
            alt="pull shark"
            className="w-full h-auto"
            width={300}
            height={300}
          />
          <div className="absolute bg-[#e1e4e4] font-bold font-graphik text-[12px] text-black px-[10px] py-[1px]  right-0 bottom-0 rounded-[30px]">
            x3
          </div>
        </Link>
        <Link
          target="_blank"
          className="w-[33%] xl:w-[32%]"
          href="https://github.com/bekaChaduneli?tab=achievements&achievement=quickdraw"
        >
          <Image
            src="/quickdraw.png"
            alt="quickdraw"
            className=" h-auto"
            width={300}
            height={300}
          />
        </Link>
        <Link
          target="_blank"
          className="w-[33%] xl:w-[32%]"
          href="https://github.com/bekaChaduneli?tab=achievements&achievement=yolo"
        >
          <Image
            src="/yolo.png"
            alt="yolo"
            className="w-full h-auto"
            width={300}
            height={300}
          />
        </Link>
      </div>
    </div>
  );
}
