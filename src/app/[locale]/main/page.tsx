"use client";

import { useTranslations } from "next-intl";

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
