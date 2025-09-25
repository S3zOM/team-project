"use client";

import { useState } from "react";
import SearchBar from "@/component/SearchBar";
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import Hero from "@/component/Hero";
import JobCard from "@/component/JobCard";
import JobCategories from "@/component/JobCategories";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [search, setSearch] = useState("");
  // Example job seekers with categories
  const jobSeekers = [
    {
      name: "Sara B.",
      title: "Frontend Developer",
      description: "React, Next.js, Tailwind CSS. 2 years experience. Looking for remote work.",
      category: "IT & Software",
    },
    {
      name: "Bat-Erdene T.",
      title: "Accountant",
      description: "Certified accountant with 5 years experience. Fluent in English and Mongolian.",
      category: "Accounting",
    },
    {
      name: "Enkhjin S.",
      title: "Graphic Designer",
      description: "Creative designer with a passion for branding and digital art. Portfolio available.",
      category: "Design & Creative",
    },
    {
      name: "Munkhbayar D.",
      title: "Math Teacher",
      description: "Experienced teacher for high school and university entrance exams.",
      category: "Education",
    },
    {
      name: "Solongo G.",
      title: "Nurse",
      description: "Registered nurse with 3 years of hospital experience.",
      category: "Healthcare",
    },
    {
      name: "Tuvshinbat N.",
      title: "Mechanical Engineer",
      description: "Mechanical engineer with a focus on renewable energy projects.",
      category: "Engineering",
    },
    {
      name: "Narantuya B.",
      title: "Marketing Specialist",
      description: "Digital marketing, social media, and content creation expert.",
      category: "Marketing",
    },
    {
      name: "Other User",
      title: "General Worker",
      description: "Open to various job opportunities. Hardworking and reliable.",
      category: "Other",
    },
  ];

  let filteredJobSeekers = jobSeekers;
  if (selectedCategory) {
    filteredJobSeekers = filteredJobSeekers.filter((js) => js.category === selectedCategory);
  }
  if (search.trim()) {
    const q = search.trim().toLowerCase();
    filteredJobSeekers = filteredJobSeekers.filter(
      (js) =>
        js.name.toLowerCase().includes(q) ||
        js.title.toLowerCase().includes(q) ||
        js.description.toLowerCase().includes(q)
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center">
      <Header />
      <div className="w-full flex flex-col items-center">
        <div className="w-full flex justify-end max-w-6xl mt-6 pr-4">
          <SearchBar onSearch={setSearch} />
        </div>
        <Hero />
      </div>

      {/* Job Categories */}
      <JobCategories selected={selectedCategory} onSelect={setSelectedCategory} />

      {/* Job Seekers List */}
      <section className="mt-12 w-full max-w-6xl">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-700">
            {selectedCategory ? `${selectedCategory} Job Seekers` : "Featured Job Seekers"}
          </h3>
          {selectedCategory && (
            <button
              className="text-blue-600 hover:underline text-sm font-medium"
              onClick={() => setSelectedCategory(null)}
            >
              Clear Filter
            </button>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredJobSeekers.map((js) => (
            <JobCard
              key={js.name}
              name={js.name}
              title={js.title}
              description={js.description}
            />
          ))}
        </div>
        {filteredJobSeekers.length === 0 && (
          <div className="text-center text-gray-500 py-12">No job seekers found in this category.</div>
        )}
      </section>

      <Footer />
    </main>
  );
}

