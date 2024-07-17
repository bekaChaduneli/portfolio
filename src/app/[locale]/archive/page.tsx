"use client";

import { useTranslations } from "next-intl";

export default function Archive({
    params: { locale },
}: {
    params: { locale: string };
}) {
    const t = useTranslations("Archive");
    return (
        <main>
            <h1>{t("headline")}</h1>
        </main>
    );
}
