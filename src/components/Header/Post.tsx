import { IPosts } from "@/types/linkedin";
import Image from "next/image";
import React from "react";
import { Icons } from "../shared/Icons";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Post({
  post,
  locale,
  t,
  logo,
  name,
}: {
  post: IPosts;
  locale: string;
  t: any;
  logo: string | undefined;
  name: string | undefined;
}) {
  console.log(post);
  const data = post?.translations?.find(
    (translation) => translation.languageCode === locale
  );

  const renderMedia = (url: string) => {
    const fileExtension = url.split(".").pop()?.toLowerCase();

    if (fileExtension && ["mp4", "webm", "ogg"].includes(fileExtension)) {
      return (
        <video controls className="h-[206px] w-auto cover rounded-[2px]">
          <source src={url} type={`video/${fileExtension}`} />
        </video>
      );
    } else {
      return (
        <Image
          src={url}
          alt="background"
          width={600}
          height={600}
          className=" h-[206px] w-auto cover"
        />
      );
    }
  };
  return (
    <Link
      href={post.link}
      target="_blank"
      className="rounded-[12px] border-[1px] border-primary/30 py-[16px] transition-all duration-300 hover:bg-primary/[4%] px-[12px] w-[370px] h-[420px] block min-w-[370px]"
    >
      <div className="flex gap-[10px] justify-start items-center mb-[12px]">
        <Image
          width={500}
          height={500}
          src={logo ? logo : ""}
          alt="image"
          className="w-[42px] h-[42px] rounded-full"
        />
        <div>
          <h1
            className={cn(
              " text-primary  text-[15px] xl:text-[17px] font-bold leading-[100%]",
              locale === "ka" && "font-firago"
            )}
          >
            {name}
          </h1>
          <h1
            className={cn(
              "xl:text-[14px] text-[12px] text-primary/75 font-light",
              locale === "ka" && "font-firago"
            )}
          >
            {t("profession")}
          </h1>
        </div>
      </div>

      <div className=" mb-[4px] text-primary/90 font-medium text-[14px] line-clamp-2">
        {data?.description}
      </div>

      {post.image && (
        <div className="mb-[12px] mt-[8px]">{renderMedia(post.image)}</div>
      )}

      <div className="flex justify-between items-center pb-[4px] border-b-[1px] border-primary/20 ">
        <div className="flex gap-[2px] items-center">
          <div className="flex relative">
            <Icons.Like className="w-[18px ] h-[18px ] border-[1px] rounded-full border-secondary" />
            <Icons.Love className="w-[18px ] h-[18px ] absolute left-[11px] border-[1px] border-secondary rounded-full" />
            <Icons.Support className="w-[18px ] h-[18px ] absolute left-[23px] border-[1px] border-secondary rounded-full" />
          </div>
          <p className="text-[12px] font-bold text-primary/70 ml-[22px]">
            {post.likes}
          </p>
        </div>
        <span className="text-[12px] font-bold text-primary/70">{`${
          post.commentsSum
        } ${t("comments")}`}</span>
      </div>
      <Link
        href={post.link}
        target="_blank"
        className=" underline cursor-pointer text-[13px] font-bold text-geom text-primary hover:bg-primary/[9%] duration-300 transition-all mt-[6px] w-full py-[6px] rounded-[120px] border-[1px] border-primary/25 flex capitalize justify-center items-center"
      >
        {t("seeMore")}
      </Link>
    </Link>
  );
}
