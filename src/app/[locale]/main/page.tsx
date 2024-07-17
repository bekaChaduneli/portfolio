import { Metadata } from "next";
import { useTranslations } from "next-intl";
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

export default function Projects({
    params: { locale },
}: {
    params: { locale: string };
}) {
    const t = useTranslations("Projects");

    return (
        <main>
            <h1>{t("headline")}</h1>
        </main>
    );
}
