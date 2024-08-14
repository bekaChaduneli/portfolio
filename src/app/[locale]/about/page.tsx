import AboutMe from "@/components/AboutMe/AboutMe";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
type Props = {
  params: {
    locale: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale;
  const t = await getTranslations({ locale, namespace: "LocaleLayout" });
  return {
    title: `${t("title")} | ${t("about")}`,
  };
}

export default function About() {
  return (
    <main>
      <AboutMe />
    </main>
  );
}
