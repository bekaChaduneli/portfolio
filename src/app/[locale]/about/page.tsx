"use client";

import { useTranslations } from "next-intl";

export default function About({
    params: { locale },
}: {
    params: { locale: string };
}) {
    const t = useTranslations("About");
    return (
        <main>
            <h1>{t("headline")}</h1>
        </main>
    );
}
