import { cn } from "@/lib/utils";
import usePopUpStore from "@/store/use-popup-store";
import { IBooksResponse } from "@/types/books";
import { GET_BOOKS_BY_TYPE } from "@/utils/apolloQuerys";
import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import Book from "./Book";
import { Icons } from "../shared/Icons";
import { useLocale, useTranslations } from "next-intl";

export default function BooksPopUp() {
  const [bookType, setBookType] = useState("other");
  const [orderBy, setOrderBy] = useState("releaseDate");
  const [content, setContent] = useState<IBooksResponse | undefined>(undefined);
  const { data, loading, error, refetch } = useQuery<IBooksResponse>(
    GET_BOOKS_BY_TYPE,
    {
      variables: {
        type: bookType,
        take: 5,
        skip: 0,
        stars: orderBy === "stars" ? "desc" : undefined,
        pages: orderBy === "pages" ? "desc" : undefined,
        releaseDate: orderBy === "releaseDate" ? "desc" : undefined,
      },
    }
  );

  useEffect(() => {
    if (data) {
      setContent(data);
    }
    if (error) {
      console.error(error.message);
    }
  }, [data, error]);

  useEffect(() => {
    refetch();
  }, [orderBy]);

  const { isOpen, type } = usePopUpStore();
  const locale = useLocale();

  const t = useTranslations("Books");

  if (!content) {
    return null;
  }

  return (
    <div
      className={cn(
        "w-[680px] h-[460px] xl:w-[810px] xl:h-[520px] px-[30px]  py-[20px] bg-[#f7f2f2]/[.92] backdrop-blur-[6px] backdrop-saturate-[1.4] rounded-[8px] absolute origin-top-left left-[136px] top-[46px] xl:left-[160px] xl:top-[54px] z-[11]",
        isOpen && type === "books"
          ? " transition-all duration-500 scale-100"
          : "scale-0"
      )}
    >
      <div className="flex justify-center">
        <div className="flex border-[1px] h-[48px] w-full border-primary rounded-[8px] relative overflow-hidden mb-[16px]">
          <div
            className={cn(
              "absolute w-[50%] h-full top-0 bottom-0 translate-x-0 bg-primary transition-all duration-300",
              bookType === "other" ? "translate-x-0" : "translate-x-[100%]"
            )}
          ></div>
          <div
            onClick={() => setBookType("other")}
            className={cn(
              "w-[50%] capitalize flex h-full cursor-pointer justify-center font-bold items-center z-[1] text-[14px] transition-all duration-300",
              bookType === "other" ? "text-secondary" : "text-primary"
            )}
          >
            {t("other")}
          </div>
          <div
            onClick={() => setBookType("programming")}
            className={cn(
              "w-[50%] capitalize h-full cursor-pointer justify-center items-center font-bold z-[1] flex  text-[14px] transition-all duration-300",
              bookType === "programming" ? "text-secondary" : "text-primary"
            )}
          >
            {t("programming")}
          </div>
        </div>
      </div>

      <div className="mb-[2px] cursor-pointer group inline-block">
        <div className="flex gap-[6px] items-center pb-[6px]">
          <label
            htmlFor="orderBy"
            className="block text-primary font-geom font-bold capitalize"
          >
            {t("orderBy")}
          </label>
          <div className="flex flex-col gap-[8px]">
            <div className=" mt-[2px] text-sm font-medium text-primary flex gap-[8px] items-center ">
              <span className="capitalize">
                {orderBy === "releaseDate"
                  ? t("date")
                  : orderBy === "stars"
                  ? t("stars")
                  : t("pages")}
              </span>
              <Icons.DropArrow className="group-hover:rotate-[180deg] transition-all duration-300 " />
            </div>
          </div>
        </div>
        <div
          className={cn(
            "absolute custom-order rounded-[4px] overflow-hidden duration-500 hidden group-hover:flex flex-col border-[1px] border-primary ",
            locale === "en" ? "w-[128px]" : "w-[184px]"
          )}
        >
          <div
            onClick={() => setOrderBy("releaseDate")}
            className={cn(
              "w-full h-[34px] capitalize border-b-[1px] hover:bg-primary hover:text-secondary transition-all duration-300 border-primary text-[14px] flex justify-center items-center",
              orderBy === "releaseDate"
                ? "bg-primary text-secondary"
                : "text-primary bg-secondary"
            )}
          >
            {t("date")}
          </div>
          <div
            onClick={() => setOrderBy("stars")}
            className={cn(
              "w-full h-[34px] capitalize border-b-[1px] hover:bg-primary hover:text-secondary transition-all duration-300 border-primary text-[14px] flex justify-center items-center",
              orderBy === "stars"
                ? "bg-primary text-secondary"
                : "text-primary bg-secondary"
            )}
          >
            {t("stars")}
          </div>
          <div
            onClick={() => setOrderBy("pages")}
            className={cn(
              "w-full h-[34px] capitalize hover:bg-primary hover:text-secondary transition-all duration-300 text-[14px] flex justify-center items-center",
              orderBy === "pages"
                ? "bg-primary text-secondary"
                : "text-primary bg-secondary"
            )}
          >
            {t("pages")}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[12px] overflow-x-hidden overflow-y-scroll h-[322px] xl:h-[380px] custom-scrollbar">
        {data?.findManyBooks.map((book, index) => {
          return <Book t={t} book={book} key={index} />;
        })}
      </div>
    </div>
  );
}
