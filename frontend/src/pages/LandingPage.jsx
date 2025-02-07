import "react";
import HeroSection from "../components/HeroSection";
import LandingNav from "../components/LandingNav"

const LandingPage = () => {
  return (
    <div>
        <LandingNav />
      <HeroSection />
      Hello this is landing page
    </div>
  );
};

export default LandingPage;
