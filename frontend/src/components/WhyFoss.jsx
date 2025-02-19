import WfossAnimation from "./WFossAnimation";

const WhyFoss = () => {
  return (
    <div>
      <section className="overflow-hidden bg-gradient-to-b from-blue-700 via-dark-1 to-dark-1 text-white w-screen min-h-3/4 relative">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="-ml-42 w-full md:w-3/4 flex justify-center">
            <WfossAnimation />
          </div>

          <div className=" text-white space-y-2 mr-2">
            <h2 className="text-4xl font-bold bg-clip-text bg-gradient-to-r text-white mb-6">
              Why Choose FOSSHub?
            </h2>
            <p className="text-lg text-gray-300">
              FOSSHub is your one-stop platform for migrating from proprietary
              tools to open-source software, tracking contributions, and
              gamifying your open-source journey.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <p>
                  <b>Seamless Migration</b> – Easily switch from Google Drive,
                  Notion, and Figma.
                </p>
              </li>
              <li className="flex items-center space-x-3">
                <p>
                  <b>Track Your Open-Source Journey</b> – Sync with
                  GitHub/GitLab and showcase your impact.
                </p>
              </li>
              <li className="flex items-center space-x-3">
                <p>
                  <b>Gamified Experience</b> – Earn badges, climb leaderboards,
                  and participate in challenges.
                </p>
              </li>
              <li className="flex items-center space-x-3">
                <p>
                  <b>Community-Driven</b> – Connect with open-source enthusiasts
                  worldwide.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyFoss;
