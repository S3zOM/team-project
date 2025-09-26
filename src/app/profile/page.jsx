"use client";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import ProfileCard from "../../component/ProfileCard";
import { FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function ProfilePage() {
	const { user } = useAuth();
	const [editing, setEditing] = useState(false);
	const [profile, setProfile] = useState({
		name: user?.username || "Your Name",
		email: user?.email || "your@email.com",
		bio: "Welcome to your professional profile! Showcase your skills and connect.",
		twitter: "",
		linkedin: "",
	});

	const handleEdit = () => setEditing(true);
	const handleSave = () => setEditing(false);
	const handleChange = (e) => {
		setProfile({ ...profile, [e.target.name]: e.target.value });
	};

	return (
		<div className="flex flex-col min-h-screen bg-gradient-to-r from-gray-50 to-blue-50">
			<div className="flex flex-1 items-center justify-center">
				<div className="w-full max-w-md">
					{/* Banner */}
					<div className="w-full h-40 bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center rounded-t-xl">
						<h1 className="text-white text-3xl font-bold drop-shadow-lg">My Profile</h1>
					</div>
					{/* Card */}
					<div className="bg-white rounded-b-xl shadow-lg p-8 pt-16 flex flex-col items-center relative">
						{/* Avatar */}
						<div className="absolute -top-14 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full bg-gray-200 border-4 border-white shadow-lg flex items-center justify-center">
							<span className="text-4xl text-blue-500 font-bold">{profile.name[0]}</span>
						</div>
						{/* Info */}
						{editing ? (
							<form className="w-full flex flex-col items-center gap-3 mt-4">
								<input name="name" value={profile.name} onChange={handleChange} className="border rounded px-3 py-2 w-full" />
								<input name="email" value={profile.email} onChange={handleChange} className="border rounded px-3 py-2 w-full" />
								<textarea name="bio" value={profile.bio} onChange={handleChange} className="border rounded px-3 py-2 w-full" />
								<input name="twitter" value={profile.twitter} onChange={handleChange} placeholder="Twitter URL" className="border rounded px-3 py-2 w-full" />
								<input name="linkedin" value={profile.linkedin} onChange={handleChange} placeholder="LinkedIn URL" className="border rounded px-3 py-2 w-full" />
								<button type="button" onClick={handleSave} className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Save</button>
							</form>
						) : (
							<>
								<h2 className="text-2xl font-bold text-blue-700 mt-4">{profile.name}</h2>
								<p className="text-gray-500 mb-2">{profile.email}</p>
								<p className="text-gray-600 text-center mb-4">{profile.bio}</p>
								<div className="flex gap-4 mb-4">
									<a
										href={profile.twitter ? profile.twitter : "https://twitter.com"}
										target="_blank"
										rel="noopener noreferrer"
										className="text-blue-400 hover:text-blue-600"
									>
										<FaTwitter size={24} />
									</a>
									<a
										href={profile.linkedin ? profile.linkedin : "https://linkedin.com"}
										target="_blank"
										rel="noopener noreferrer"
										className="text-blue-700 hover:text-blue-900"
									>
										<FaLinkedin size={24} />
									</a>
									<a href={`mailto:${profile.email}`} className="text-gray-500 hover:text-blue-600"><FaEnvelope size={24} /></a>
								</div>
								<button onClick={handleEdit} className="px-4 py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 text-sm">Edit Profile</button>
							</>
						)}
						{/* Subtle animation */}
						<div className="w-full h-1 bg-gradient-to-r from-blue-200 to-blue-400 mt-6 rounded-full animate-pulse" />
					</div>
				</div>
			</div>
		</div>
	);
}
