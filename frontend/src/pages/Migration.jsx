"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const mockAlternatives = [
  {
    id: 1,
    name: "LibreOffice",
    proprietary: "Microsoft Office",
    category: "Productivity",
  },
  { id: 2, name: "GIMP", proprietary: "Adobe Photoshop", category: "Design" },
  {
    id: 3,
    name: "VSCodium",
    proprietary: "Visual Studio Code",
    category: "Development",
  },
  {
    id: 4,
    name: "Kdenlive",
    proprietary: "Adobe Premiere",
    category: "Video Editing",
  },
  {
    id: 5,
    name: "Inkscape",
    proprietary: "Adobe Illustrator",
    category: "Design",
  },
];

const categories = [
  "All",
  "Productivity",
  "Design",
  "Development",
  "Video Editing",
];

function Migration() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("asc");

  const filteredAlternatives = mockAlternatives
    .filter(
      (alt) =>
        (alt.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          alt.proprietary.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (selectedCategory === "All" || alt.category === selectedCategory)
    )
    .sort((a, b) =>
      sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );

  return (
    <>
      <Navbar />
      <div className="container mx-auto py-12 px-6 bg-dark-2 text-white">
        <h1 className="text-4xl font-bold text-center  mb-8">
          Find Open-Source Alternatives
        </h1>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <input
            type="text"
            placeholder="Search for proprietary software..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input input-bordered rounded-lg border-[2px] p-3 w-full md:w-2/3 text-lg"
          />
          <div className="flex gap-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="select select-bordered text-lg"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="select select-bordered text-lg"
            >
              <option value="asc">A-Z</option>
              <option value="desc">Z-A</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAlternatives.map((alt) => (
            <div
              key={alt.id}
              className=" bg-dark-3 rounded-lg shadow-lg p-6 border-l-4 border-blue-500 hover:scale-[1.02] transition"
            >
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {alt.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Alternative to: {alt.proprietary}
              </p>
              <div className="mt-3">
                <span className="px-3 py-1 text-sm font-semibold bg-blue-100 dark:bg-blue-900 dark:text-white rounded-full">
                  {alt.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center my-10">
          <button className="btn btn-primary text-lg px-6 py-3">
            Suggest a FOSS Alternative
          </button>
        </div>

        <div className="bg-blue-50 bg-dark-3 p-8 rounded-lg text-center shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Join the Open-Source Movement!
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-4">
            Embrace freedom, security, and community-driven innovation. Start
            your journey with open-source software today!
          </p>
          <Link to="about">
            {" "}
            <button className="btn cursor-pointer hover:underline btn-secondary mt-6 text-white text-lg px-6 py-3">
              Learn More About FOSS
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Migration;
