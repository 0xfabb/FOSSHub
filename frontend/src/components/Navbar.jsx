import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/dashboard" className="text-2xl font-bold text-blue-600 dark:text-white">
          FOSS Hub
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/dashboard" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition">
            Home
          </Link>
          <Link to="/migration" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition">
            Migration
          </Link>
          <Link to="/leaderboard" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition">
            Leaderboard
          </Link>
          <Link to="/profile" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition">
            Profile
          </Link>
        </div>

        {/* Theme Toggle & Menu Button */}
        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition">
            🌙
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md">
          <Link to="/" className="block px-6 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
            Home
          </Link>
          <Link to="/migrate" className="block px-6 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
            Migration
          </Link>
          <Link to="/contributions" className="block px-6 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
            Contributions
          </Link>
          <Link to="/profile" className="block px-6 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
            About
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
