"use client";

import classNames from "classnames";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();

  const htmlTag = document.documentElement;
  const langAttribute = htmlTag.getAttribute("lang");
  return (
    <div className="mt-[230px] flex flex-col items-center justify-center gap-[8px]">
      <h1
        className={classNames("text-[#203277] dark:text-[#8ca1f4] capitalize", {
          "text-[110px] font-acorn leading-[100%] font-extrabold":
            langAttribute === "en",
          "text-[104px] font-firago font-bold leading-[110%]":
            langAttribute === "ka",
        })}
      >
        {t("header_name")}
      </h1>
      <h1
        className={classNames("text-[#203277] dark:text-[#8ca1f4] capitalize", {
          "text-[95px] font-acorn leading-[100%] font-extrabold":
            langAttribute === "en",
          "text-[92px] font-firago font-bold leading-[110%]":
            langAttribute === "ka",
        })}
      >
        {t("profession")}
      </h1>
    </div>
  );
}
