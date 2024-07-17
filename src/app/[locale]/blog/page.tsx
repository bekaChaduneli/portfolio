"use client";

import { useTranslations } from "next-intl";

export default function Blog({
    params: { locale },
}: {
    params: { locale: string };
}) {
    const t = useTranslations("Blog");

    return (
        <main>
            <h1>{t("headline")}</h1>
        </main>
    );
}
