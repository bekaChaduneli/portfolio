"use client";

import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();

  return (
    <div className="mt-[200px] flex flex-col items-center justify-center gap-[8px]">
      <h1 className="text-[110px] font-extrabold leading-[100%] text-[#203277] dark:text-[#6f87eb] font-acorn capitalize">
        {t("header_name")}
      </h1>
      <h1 className="text-[95px] font-extrabold font-acorn capitalize leading-[100%] text-[#203277] dark:text-[#6f87eb]">
        {t("profession")}
      </h1>
    </div>
  );
}
