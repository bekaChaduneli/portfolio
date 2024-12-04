import AboutMeElement from "@/components/AboutMe/AboutMeElement";
import Header from "@/components/Header/Header";
import MainProjectsWrapper from "@/components/Projects/MainProjectsWrapper";
import Recommendations from "@/components/Recommendations";
import Services from "@/components/Services/Services";
import Skills from "@/components/Skills";

interface HomeProps {
  params: { locale: string };
}

const HomePage: React.FC<HomeProps> = ({ params: { locale } }) => {
  return (
    <main className="min-h-[100vh] transition-all duration-300">
      <Header />
      <AboutMeElement />
      <Services />
      <MainProjectsWrapper />
      <Skills />
      <Recommendations autoplay={true} />
    </main>
  );
};

export default HomePage;
