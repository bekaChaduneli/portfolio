import Archives from "@/components/Projects/Archives";
import { Metadata } from "next";
import { useLocale, useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: {
    locale: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale;
  const t = await getTranslations({ locale, namespace: "LocaleLayout" });
  return {
    title: `${t("title")} | ${t("archive")}`,
  };
}

export default function Archive() {
  const locale = useLocale();

  unstable_setRequestLocale(locale);

  const t = useTranslations("Archive");
  return (
    <main>
      <h1>{t("headline")}</h1>
      <Archives />
    </main>
  );
}
