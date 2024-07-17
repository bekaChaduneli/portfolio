import { unstable_setRequestLocale } from "next-intl/server";
import { redirect } from "next/navigation";

export default function RootPage() {
    redirect("/ka");
}
