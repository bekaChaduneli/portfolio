import Header from "@/components/Header/Header";
import { useLocale } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

interface HomeProps {}

const HomePage: React.FC<HomeProps> = () => {
    const locale = useLocale();
    unstable_setRequestLocale(locale);

    return (
        <main className="min-h-[100vh]">
            <Header />
        </main>
    );
};

export default HomePage;
