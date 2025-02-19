import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import LandingNav from "../components/LandingNav";
import WhyFoss from "../components/WhyFoss";
import CoreFeatures from "../components/CoreFeatures";

const LandingPage = () => {
  return (
    <div className="overflow-hidden hide-scrollbar">
      <LandingNav />
      <div className="bg-black bg-opacity-75 backdrop-blur-md h-screen">
        <div className="overflow-hidden bg-gradient-to-b  to-blue-700 from-purple-400 via-black/40  text-white w-screen h-screen relative backdrop-blur-lg">
          <div className=" fixed left-1/2 top-1/3 translate-x-[-50%] text-light-2 text-center  font-primary font-bold">
            <h1 className="text-5xl p-2 leading-snug">
              {" "}
              Migrate to FOSS! Track Your Contributions. Level Up!
            </h1>
            <p className="text-lg mt-6 font-primary font-normal">
            Ditch proprietary software and switch to open-source alternatives effortlessly! FOSSHub helps you migrate your tools, track your open-source contributions, and compete on leaderboards – all in one place. Earn badges, take on challenges, and become a true FOSS champion!
            </p>
            <div className="flex mt-4 gap-9 justify-center">
              <button className="hover:scale-105 transition-transform bg-gradient-to-r from-blue-700 to-purple-900 border-white border-[1px] mt-6 text-xl font-primary font-normal  px-8 py-2 text-white  rounded-full cursor-pointer duration-200 0">
                Get Started
              </button>
             <Link to='/learnmore'><button className="border-[1px] transition-all duration-200 border-white mt-6 text-xl font-primary font-normal px-8 py-2 text-white hover:bg-light-2 hover:text-blue-600  rounded-full cursor-pointer ">
                Learn More
              </button>
              </Link> 
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black bg-opacity-75 backdrop-blur-md h-1/2">
        <WhyFoss />
     </div>
     <div className="bg-black bg-opacity-75 backdrop-blur-md h-screen">
     <CoreFeatures />
     </div>
     <Footer />
    </div>
  );
};

export default LandingPage;
