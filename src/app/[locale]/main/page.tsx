import { Metadata } from "next";

import MainProjects from "@/components/Projects/MainProjects";
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
    title: `${t("title")} | ${t("main")}`,
  };
}

const Page: React.FC = async () => {
  return (
    <main>
      <MainProjects />
    </main>
  );
};

export default Page;
