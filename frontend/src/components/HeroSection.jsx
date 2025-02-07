import Squares from "./Squares";
import BlurText from "./BlurText";
// import ShinyText from "./ShinyText";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen flex justify-center items-center bg-black text-white overflow-hidden">
      {/* Animated Squares Background */}
      <div className="absolute inset-0 z-0">
        <Squares
          speed={0.5}
          squareSize={50}
          direction="diagonal"
          borderColor="#fff"
          hoverFillColor="#222"
        />
      </div>
      <div className="flex-col gap-32 justify-center items-center">
        <BlurText
          className="text-5xl font-bold mb-8"
          text="Welcome to the FOSSHub"
          delay={150}
          animateBy="words"
          direction="top"
        />

        
      </div>
    </div>
  );
};

export default HeroSection;
