import Footer from "../components/Footer";
import LandingNav from "../components/LandingNav";

const LearnMorePage = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden hide-scrollbar">
      <LandingNav />

      <div className="flex-grow bg-dark-1 bg-opacity-75 backdrop-blur-md">
        <div className="max-w-full min-h-screen bg-gradient-to-b from-dark-2 via-dark-2 to-dark-1 text-white flex flex-col items-center justify-center px-6">
          <div className="max-w-4xl text-center">
            <h1 className="text-4xl font-bold text-blue-300 mt-[150px]">
              Discover FOSSHub – Your Open-Source Migration & Contribution Hub
            </h1>
            <p className="text-lg mt-4 text-gray-300">
              Effortlessly migrate from proprietary software, track your
              contributions, and earn rewards.
            </p>

            <div className="mt-12 space-y-6 text-left">
              <div className="bg-black bg-opacity-50 p-6 rounded-xl border border-gray-700 shadow-lg">
                <h2 className="text-2xl font-semibold text-purple-400">
                  {" "}
                  Why FOSSHub?
                </h2>
                <ul className="mt-4 space-y-2 text-gray-300 list-none pl-6">
                  <li>
                    🔹 <b>Seamless Migration</b> – Shift from Google Drive,
                    Notion, Figma, etc.
                  </li>
                  <li>
                    🔹 <b>Track Your Open-Source Journey</b> – Sync with
                    GitHub/GitLab.
                  </li>
                  <li>
                    🔹 <b>Gamified Experience</b> – Earn badges and climb
                    leaderboards.
                  </li>
                  <li>
                    🔹 <b>Community-Driven</b> – Connect with like-minded FOSS
                    enthusiasts.
                  </li>
                </ul>
              </div>

           
              <div className="bg-black bg-opacity-50 p-6 rounded-xl border border-gray-700 shadow-lg mb-8">
                <h2 className="text-2xl font-semibold text-blue-400">
                  {" "}
                  Key Features
                </h2>
                <ul className="mt-4 space-y-2 text-gray-300 list-none pl-6">
                  <li>
                    {" "}
                    🔹<b>Migration Tools</b> – Automate switching from
                    proprietary tools.
                  </li>
                  <li>
                    🔹 <b>Contribution Tracker</b> – Showcase your open-source
                    impact.
                  </li>
                  <li>
                    {" "}
                    🔹<b>Leaderboards & Badges</b> – Compete and earn rewards.
                  </li>
                  <li>
                    🔹 <b>Challenges & Events</b> – Join hackathons and
                    open-source initiatives.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LearnMorePage;
