import Blogs from "@/components/blogs/Blogs";
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
    title: `${t("title")} | ${t("blog")}`,
  };
}

export default function Blog() {
  return (
    <main>
      <Blogs />
    </main>
  );
}
