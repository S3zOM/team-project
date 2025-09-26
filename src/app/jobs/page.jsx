"use client";
import { useEffect, useState } from "react";
import JobCard from "../../component/JobCard";
import JobModal from "../../component/JobModal";
import { useAuth } from "../context/AuthContext";
import JOBS from "../../data/jobs";

export default function JobsPage() {
	console.log('JobsPage rendered');
		const { user } = useAuth();
		const [favorites, setFavorites] = useState([]);
			const [selectedJob, setSelectedJob] = useState(null);

	// Load favorites from localStorage
	useEffect(() => {
		if (user?.email) {
			const fav = localStorage.getItem(`favorites-${user.email}`);
			setFavorites(fav ? JSON.parse(fav) : []);
		}
	}, [user]);

	// Toggle favorite
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

		return (
			<div className="flex flex-col items-center py-10 min-h-screen bg-gradient-to-r from-gray-50 to-blue-50">
				<h2 className="text-3xl font-bold text-blue-700 mb-8">Jobs</h2>
			<div className="mb-4 text-red-600 font-bold">DEBUG: JobsPage is rendering. If you see this, the page is loaded.</div>
				{!user?.email && (
					<div className="mb-6 px-4 py-2 bg-yellow-100 text-yellow-800 rounded">You must be logged in to favorite jobs.</div>
				)}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
					{JOBS.map(job => (
						<JobCard
							key={job.id}
							name={job.name}
							title={job.title}
							description={job.description}
							isFavorite={favorites.includes(job.id)}
							onFavorite={user?.email ? () => handleFavorite(job.id) : null}
							favoriteDisabled={!user?.email}
							onClick={() => { console.log('JobCard View Job clicked:', job); setSelectedJob(job); }}
						/>
					))}
				</div>
				<JobModal job={selectedJob} open={!!selectedJob} onClose={() => setSelectedJob(null)} />
			</div>
		);
}
