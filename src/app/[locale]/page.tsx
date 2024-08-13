import Header from "@/components/Header/Header";
import MainProjects from "@/components/Projects/MainProjects";
import Recommendations from "@/components/Recommendations";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import { unstable_setRequestLocale } from "next-intl/server";

interface HomeProps {
  params: { locale: string };
}

const HomePage: React.FC<HomeProps> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);

  return (
    <main className="min-h-[100vh] transition-all duration-300">
      <Header />
      <Services />
      <MainProjects />
      <Skills />
      <Recommendations />
    </main>
  );
};

export default HomePage;
