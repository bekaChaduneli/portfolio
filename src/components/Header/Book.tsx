import { IBook } from "@/types/books";
import { useLocale } from "next-intl";
import Image from "next/image";
import React from "react";
import { Icons } from "../shared/Icons";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Book({ book, t }: { book: IBook; t: any }) {
  const locale = useLocale();
  const bookTranslation = book.translations?.find(
    (translation) => translation.languageCode === locale
  );
  return (
    <div className="w-full rounded-[8px] p-[12px] flex gap-[20px] max-h-[200px] xl:max-h-[230px]">
      <div className="h-full w-auto rounded-[14px] overflow-hidden cover border-[2px] border-primary">
        <Image
          src={book.image}
          className="h-full w-[140px]"
          alt="book"
          width={500}
          height={500}
        />
      </div>
      <div className="w-[416px] xl:w-[540px]">
        <div className="flex justify-between w-full mb-[6px] items-start">
          <span
            className={cn(
              "text-primary font-bold font-geom text-[16px] xl:text-[18px] w-[238px] xl:w-[330px] line-clamp-1",
              locale === "ka" && "font-firago"
            )}
          >
            {bookTranslation?.title}
          </span>
          <span className="font-medium line-clamp-1 text-primary text-[14px] xl:text-[16px]">
            {locale === "en" && "By"}{" "}
            <span className={cn("font-bold", locale === "ka" && "font-firago")}>
              {bookTranslation?.author}
              {locale === "ka" && "ს-გან"}
            </span>
          </span>
        </div>
        <div className="flex items-center justify-between mb-[6px]">
          <div className="flex gap-[4px]">
            {Array.from({ length: book.stars }, (_, index) => (
              <Icons.Star key={index} className="w-[16px] h-[16px] " />
            ))}
          </div>
          <div className="flex gap-[4px] text-primary text-[14px] capitalize">
            {book.finished
              ? `${t("finished")} - ${book.pages} ${t("page")}`
              : `${t("read")} ${book.readedPages} / ${book.pages} ${t("page")}`}
          </div>
        </div>
        <p className="text-primary/[70%] text-[14px] line-clamp-4 xl:line-clamp-5 mb-[8px]">
          {bookTranslation?.description}
        </p>
        <Link
          href={book.link}
          target="_blank"
          className="text-primary underline font-bold "
        >
          <h1 className={cn("text-end", locale === "ka" && "font-firago")}>
            {t("seeMore")}
          </h1>
        </Link>
      </div>
    </div>
  );
}
