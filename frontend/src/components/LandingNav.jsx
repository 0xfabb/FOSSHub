import { Link } from "react-router-dom";

const LandingNav = () => {
  return (
    <div>
      <div className="fixed w-2/3 left-1/2 top-5 rounded-full translate-x-[-50%] px-8 py-2 flex justify-between items-center shadow-lg z-50 bg-white/30 backdrop-blur-xl transition-all duration-300 text-gray-900">
        <Link to="/">
          {" "}
          <div className="text-xl cursor-pointer font-extrabold whitespace-nowrap text-light-1">
            FOSSHub
          </div>
        </Link>

        <ul className="flex gap-8  text-light-1 text-lg font-medium flex-grow justify-center">
          <li className="mt-1 font-primary font-bold cursor-pointer hover:text-blue-500">
            <Link to="/">Home</Link>
          </li>
          <li className="mt-1 font-primary font-bold cursor-pointer hover:text-blue-500">
          <Link to="/">Features</Link>
          </li>
          <li className="mt-1 font-primary font-bold cursor-pointer hover:text-blue-500">
          <Link to="/learnmore">Explore</Link>
          </li>
          <li className="mt-1 font-primary font-bold cursor-pointer hover:text-blue-500">
          <Link to="/">Services</Link>
          </li>
        </ul>

        <button className="bg-gradient-to-r font-primary font-bold from-blue-700 to-purple-900 px-6 py-2 text-white  rounded-full cursor-pointer hover:bg-gradient-to-l transition-all duration-200 hover:from-purple-700 hover:to-blue-900">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default LandingNav;
