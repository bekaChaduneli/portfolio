import Header from "@/components/Header/Header";
import { unstable_setRequestLocale } from "next-intl/server";

interface HomeProps {
  params: { locale: string };
}

const HomePage: React.FC<HomeProps> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);

  return (
    <main className="min-h-[100vh]">
      <Header />
    </main>
  );
};

export default HomePage;
