import { FaRegHeart, FaHeart } from "react-icons/fa";

export default function JobCard({ name, title, description, isFavorite, onFavorite, onClick, favoriteDisabled }) {
  favoriteDisabled = favoriteDisabled || false;
  return (
  <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center relative">
      <div className="w-20 h-20 bg-gray-200 rounded-full mb-4" />
      <h4 className="text-lg font-semibold">{name}</h4>
      <p className="text-gray-500 text-sm mb-2">{title}</p>
      <p className="text-gray-600 text-center text-sm mb-4">{description}</p>
      <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 text-sm mb-2" onClick={onClick}>View Job</button>
      <button
        className={`absolute top-4 right-4 text-xl text-red-500 bg-transparent shadow-none flex items-center justify-center ${favoriteDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        style={{ width: 'auto', height: 'auto', padding: 0, border: 'none', background: 'none' }}
        onClick={e => { e.stopPropagation(); if (!favoriteDisabled && onFavorite) onFavorite(); }}
        aria-label={isFavorite ? "Unfavorite" : "Favorite"}
        disabled={favoriteDisabled}
      >
        {isFavorite ? <FaHeart /> : <FaRegHeart />}
      </button>
    </div>
  );
}
