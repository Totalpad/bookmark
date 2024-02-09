import DownloadSection from "./Download/DownloadSection";
import FaqSection from "./FAQ/FaqSection";
import FeaturesSection from "./Features/FeaturesSection";
import FooterSection from "./Footer/FooterSection";
import HeroSection from "./Hero/HeroSection";
import MenuSection from "./Menu/MenuSection";
import NewsSection from "./News/NewsSection";

function App() {
  return (
    <div>
      <MenuSection />
      <HeroSection />
      <FeaturesSection />
      <DownloadSection />
      <FaqSection />
      <NewsSection />
      <FooterSection />
    </div>
  );
}

export default App;
