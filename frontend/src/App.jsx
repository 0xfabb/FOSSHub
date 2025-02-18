import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Migration from "./pages/Migration";
import Leaderboard from "./pages/Leaderboard";
import Profile from "./pages/Profile";
import LandingPage from "./pages/LandingPage";
import LearnMorePage from "./pages/LearnMore";

function App() {
  return (
    <>
    
    <Router>
      <Routes>

        
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/learnmore" element={<LearnMorePage />} />
        <Route path="/migration" element={<Migration />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
