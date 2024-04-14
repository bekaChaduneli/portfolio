"use client";
import { useEffect, useState } from "react";
import initTranslations from "@/app/i18n";
import { Translations } from "@/types/ComponentTypes";

export const useTranslations = (locale: string, i18nNamespaces: string[]) => {
  const [translations, setTranslations] = useState<Translations | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { t, resources } = await initTranslations(locale, i18nNamespaces);
        setTranslations({ t, resources });
      } catch (error) {
        console.error("Error fetching translations:", error);
      }
    };

    fetchData();
  }, [locale, i18nNamespaces]);

  return translations;
};
