"use client";

import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();

  return (
    <div className="h-[3000px]">
      <h3>{t("location")}</h3>
    </div>
  );
}
