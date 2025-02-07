import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Migration from "./pages/Migration";
import Leaderboard from "./pages/Leaderboard";
import LandingPage from "./pages/LandingPage"
import Profile from "./pages/Profile";

function App() {
  return (
    <>
    
    <Router>
      <Routes>

        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/migration" element={<Migration />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
