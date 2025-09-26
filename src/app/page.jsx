"use client";

import { useState, useEffect } from "react";
import Hero from "@/component/Hero";
import JobCard from "@/component/JobCard";
import JobCategories from "@/component/JobCategories";
import JobModal from "@/component/JobModal"; // ✅ import modal
import { useAuth } from "./context/AuthContext";

export default function Home() {
  const { user } = useAuth();

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [search, setSearch] = useState("");

  // ✅ NEW: favorites state synced with localStorage
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    if (user?.email) {
      const fav = localStorage.getItem(`favorites-${user.email}`);
      setFavorites(fav ? JSON.parse(fav) : []);
    }
  }, [user]);

  const handleFavorite = (jobId) => {
    let updated;
    if (favorites.includes(jobId)) {
      updated = favorites.filter((id) => id !== jobId);
    } else {
      updated = [...favorites, jobId];
    }
    setFavorites(updated);
    if (user?.email) {
      localStorage.setItem(`favorites-${user.email}`, JSON.stringify(updated));
    }
  };

  // ✅ NEW: modal state
  const [selectedJob, setSelectedJob] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Example job seekers with IDs
  const jobSeekers = [
    {
      id: 1,
      name: "Sara B.",
      title: "Frontend Developer",
      description: "React, Next.js, Tailwind CSS. 2 years experience. Looking for remote work.",
      category: "IT & Software",
    },
    {
      id: 2,
      name: "Bat-Erdene T.",
      title: "Accountant",
      description: "Certified accountant with 5 years experience. Fluent in English and Mongolian.",
      category: "Accounting",
    },
    {
      id: 3,
      name: "Enkhjin S.",
      title: "Graphic Designer",
      description: "Creative designer with a passion for branding and digital art. Portfolio available.",
      category: "Design & Creative",
    },
    {
      id: 4,
      name: "Munkhbayar D.",
      title: "Math Teacher",
      description: "Experienced teacher for high school and university entrance exams.",
      category: "Education",
    },
    {
      id: 5,
      name: "Solongo G.",
      title: "Nurse",
      description: "Registered nurse with 3 years of hospital experience.",
      category: "Healthcare",
    },
    {
      id: 6,
      name: "Tuvshinbat N.",
      title: "Mechanical Engineer",
      description: "Mechanical engineer with a focus on renewable energy projects.",
      category: "Engineering",
    },
    {
      id: 7,
      name: "Narantuya B.",
      title: "Marketing Specialist",
      description: "Digital marketing, social media, and content creation expert.",
      category: "Marketing",
    },
    {
      id: 8,
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
      <div className="w-full max-w-6xl mx-auto px-4 flex flex-col items-center">
        {/* SearchBar removed, now only in header */}
        <Hero />
        {/* Job Categories */}
        <div className="mt-8 w-full flex justify-center">
          <JobCategories selected={selectedCategory} onSelect={setSelectedCategory} />
        </div>
        {/* Job Seekers List */}
        <section className="mt-12 w-full flex flex-col items-center">
          <div className="flex flex-col items-center mb-6 w-full">
            <h3 className="text-2xl font-bold text-gray-700 text-center">
              {selectedCategory ? `${selectedCategory} Job Seekers` : "Featured Job Seekers"}
            </h3>
            {selectedCategory && (
              <button
                className="text-blue-600 hover:underline text-sm font-medium mt-2"
                onClick={() => setSelectedCategory(null)}
              >
                Clear Filter
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full justify-items-center">
            {filteredJobSeekers.map((js) => (
              <JobCard
                key={js.id}
                name={js.name}
                title={js.title}
                description={js.description}
                isFavorite={favorites.includes(js.id)}
                onFavorite={() => handleFavorite(js.id)}
                onClick={() => { setSelectedJob(js); setModalOpen(true); }}
              />
            ))}
          </div>
          {filteredJobSeekers.length === 0 && (
            <div className="text-center text-gray-500 py-12">No job seekers found in this category.</div>
          )}
        </section>
      </div>
      <JobModal 
        job={selectedJob} 
        open={modalOpen} 
        onClose={() => setModalOpen(false)} 
      />
    </main>
  );
}
