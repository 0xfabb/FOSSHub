import { useState } from "react";

const LandingNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-blue-600">
          FOSSHub
        </a>

        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-blue-500">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-500">
            Features
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-500">
            About
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-500">
            Contact
          </a>
        </div>

        <div className="hidden md:block">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Sign In
          </button>
        </div>

        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <a
            href="#"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
          >
            Home
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
          >
            Features
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
          >
            About
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
          >
            Contact
          </a>
          <button className="w-full py-2 px-4 bg-blue-600 text-white hover:bg-blue-700">
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
};

export default LandingNav;
