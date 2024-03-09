"use client";

import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();

  return <h3>{t("location")}</h3>;
}
