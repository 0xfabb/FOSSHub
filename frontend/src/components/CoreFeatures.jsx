import { useState } from "react";
import { MoveRight, BarChart, Users, Trophy } from "lucide-react";

const features = [
    {
      id: 1,
      title: "Seamless Migration",
      description:
        "Break free from proprietary lock-ins and transition to open-source tools effortlessly. Our automated migration solutions help you move your data from platforms like Google Drive, Notion, and Figma without losing structure or functionality. Say goodbye to costly subscriptions and data restrictions—embrace the freedom of FOSS!",
      icon: <MoveRight size={56} className="text-blue-400" />,
    },
    {
      id: 2,
      title: "Track Your Contributions",
      description:
        "Your open-source contributions deserve recognition. With seamless GitHub & GitLab integration, FOSSHub helps you monitor commits, pull requests, and issue tracking. Build your developer portfolio, showcase your impact, and let your contributions tell your story—whether you’re an individual developer, a student, or an enterprise team.",
      icon: <BarChart size={56} className="text-purple-400" />,
    },
    {
      id: 3,
      title: "Thriving Community & Collaboration",
      description:
        "Open-source is powered by people. Connect with developers, designers, and tech enthusiasts from around the world. Collaborate on impactful projects, share knowledge, and learn from seasoned contributors. Whether you're a beginner or an expert, FOSSHub provides the perfect ecosystem to grow and contribute to meaningful projects.",
      icon: <Users size={56} className="text-green-400" />,
    },
    {
      id: 4,
      title: "Gamified Open-Source Journey",
      description:
        "Make open-source fun and rewarding! Earn achievement badges, track your progress, and climb the leaderboards as you contribute to projects. Participate in exclusive challenges, complete milestones, and get recognized for your efforts. Turn your open-source journey into an exciting adventure with FOSSHub.",
      icon: <Trophy size={56} className="text-yellow-400" />,
    },
  ];
  

const CoreFeatures = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className=" w-full min-h-screen bg-gradient-to-b from-dark-1 to-dark-1 text-white py-20">
      <div className="mt-12 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          🚀 Core Features
        </h2>
        <p className="text-lg text-gray-300 mt-4">
          Explore the powerful features that make FOSSHub your ultimate open-source migration and tracking hub.
        </p>

      
        <div className="flex justify-center mt-8 space-x-6">
          {features.map((feature, index) => (
            <button
              key={feature.id}
              onClick={() => setActiveFeature(index)}
              className={`px-10 py-8 rounded-lg transition-all duration-300 cursor-pointer ${
                activeFeature === index
                  ? "bg-gradient-to-r from-blue-600 to-purple-800 text-white shadow-lg"
                  : "bg-dark-2 text-gray-400 hover:bg-gray-700"
              }`}
            >
              {feature.icon}
            </button>
          ))}
        </div>

     
        <div className="mt-10 p-6 bg-dark-2 bg-opacity-50 border border-gray-700 rounded-xl shadow-lg">
          <h3 className="text-3xl font-semibold text-blue-300">{features[activeFeature].title}</h3>
          <p className="text-lg text-gray-300 mt-3">{features[activeFeature].description}</p>
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
