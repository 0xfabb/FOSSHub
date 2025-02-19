import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";
import Header from "../components/Header";
import { MoveRight, BarChart, Trophy } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-dark-2">
      <Sidebar />
      <div className="flex-1 p-6 space-y-6">
        <Header />
        <div className="grid grid-cols-3 gap-6">
          <DashboardCard 
            title="Migration Status"
            description="Track your migration progress and FOSS impact score."
            icon={<MoveRight size={40} className="text-blue-400" />}
          />
          <DashboardCard 
            title="Contribution Tracker"
            description="Monitor your latest GitHub & GitLab activity."
            icon={<BarChart size={40} className="text-purple-400" />}
          />
          <DashboardCard 
            title="Leaderboard Snapshot"
            description="See your ranking among top contributors."
            icon={<Trophy size={40} className="text-yellow-400" />}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
