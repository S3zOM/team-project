"use client";
import { useEffect, useState } from "react";
import JobCard from "../../component/JobCard";
import { useAuth } from "../context/AuthContext";
import JOBS from "../../data/jobs";

export default function FavoritesPage() {
  const { user } = useAuth();
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
      updated = favorites.filter(id => id !== jobId);
    } else {
      updated = [...favorites, jobId];
    }
    setFavorites(updated);
    if (user?.email) {
      localStorage.setItem(`favorites-${user.email}`, JSON.stringify(updated));
    }
  };

  const favoriteJobs = JOBS.filter(job => favorites.includes(job.id));

  if (!user?.email) {
    return (
      <div className="flex flex-col items-center py-10 min-h-screen bg-gradient-to-r from-gray-50 to-blue-50">
        <h2 className="text-3xl font-bold text-blue-700 mb-8">Your Favorite Jobs</h2>
        <div className="mb-6 px-4 py-2 bg-yellow-100 text-yellow-800 rounded">You must be logged in to view favorite jobs.</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center py-10 min-h-screen bg-gradient-to-r from-gray-50 to-blue-50">
      <h2 className="text-3xl font-bold text-blue-700 mb-8">Your Favorite Jobs</h2>
      {favoriteJobs.length === 0 ? (
        <p className="text-gray-500">No favorite jobs yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {favoriteJobs.map(job => (
            <JobCard
              key={job.id}
              name={job.name}
              title={job.title}
              description={job.description}
              isFavorite={favorites.includes(job.id)}
              onFavorite={() => handleFavorite(job.id)}
              favoriteDisabled={!user?.email}
            />
          ))}
        </div>
      )}
    </div>
  );
}
