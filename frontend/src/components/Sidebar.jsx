import { Home, BarChart, MessageSquare, Trophy, List, Database } from "lucide-react";
import { useState } from "react";

const Sidebar = () => {
  const [active, setActive] = useState("dashboard");

  const menuItems = [
    { id: "home", icon: <Home />, label: "Home" },
    { id: "migration", icon: <Database />, label: "Migration" },
    { id: "contributions", icon: <BarChart />, label: "Contributions" },
    { id: "chat", icon: <MessageSquare />, label: "Chat" },
    { id: "leaderboard", icon: <Trophy />, label: "Leaderboard" },
    { id: "challenges", icon: <List />, label: "Challenges" },
  ];

  return (
    <div className="h-screen w-20 bg-dark-1 text-white flex flex-col items-center py-6">
      {menuItems.map((item) => (
        <button
          key={item.id}
          className={`p-3 rounded-full mb-4 hover:bg-gray-700 transition ${
            active === item.id ? "bg-blue-600" : ""
          }`}
          onClick={() => setActive(item.id)}
        >
          {item.icon}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
