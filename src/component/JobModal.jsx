import { useState } from "react";
import { FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";

export default function JobModal({ job, open, onClose }) {
  if (open && job) {
    console.log('JobModal rendered for job:', job);
  }
  const [liked, setLiked] = useState(false);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [reviews, setReviews] = useState([]);
  const [review, setReview] = useState("");

  if (!open || !job) return null;

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, message.trim()]);
      setMessage("");
    }
  };

  const handleAddReview = () => {
    if (review.trim()) {
      setReviews([...reviews, review.trim()]);
      setReview("");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300">
      {/* Blurred home page background image */}
      <div className="absolute inset-0 w-full h-full bg-cover bg-center blur-sm brightness-75" style={{ backgroundImage: 'url(/file.svg)' }}></div>
      <div className="relative z-10 bg-white/80 rounded-2xl shadow-2xl p-10 w-full max-w-xl animate-fadeIn backdrop-blur-xl">
        {/* Modern close button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 text-gray-700 hover:text-blue-600 text-3xl font-bold rounded-full bg-white/80 shadow-lg w-10 h-10 flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center text-4xl font-bold text-blue-600 mb-2">
            {job.name[0]}
          </div>
          <h2 className="text-3xl font-bold text-blue-700 mb-1">{job.name}</h2>
          <p className="text-blue-500 font-medium mb-2">{job.title}</p>
        </div>
        <div className="mb-6 text-center">
          <p className="text-gray-700 text-lg">{job.description}</p>
        </div>
        <div className="flex items-center justify-center mb-8">
          <button
            className={`px-6 py-2 rounded-full flex items-center gap-2 shadow transition-all duration-200 text-lg font-semibold ${liked ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-700 hover:bg-blue-200'}`}
            onClick={() => setLiked(l => !l)}
          >
            {liked ? <FaThumbsUp /> : <FaRegThumbsUp />} {liked ? 'Liked' : 'Like'}
          </button>
        </div>
        <div className="mb-8">
          <h3 className="font-semibold mb-2 text-blue-700">Chat</h3>
          <div className="mb-2 max-h-32 overflow-y-auto border rounded-lg p-3 bg-gray-50">
            {messages.length === 0 ? <span className="text-gray-400">No messages yet.</span> : messages.map((msg, i) => (
              <div key={i} className="mb-1 text-gray-700">{msg}</div>
            ))}
          </div>
          <div className="flex gap-2 mt-2">
            <input
              type="text"
              value={message}
              onChange={e => setMessage(e.target.value)}
              className="border rounded-lg px-3 py-2 flex-1 focus:ring-2 focus:ring-blue-400"
              placeholder="Type a message..."
            />
            <button onClick={handleSendMessage} className="px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition">Send</button>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-2 text-blue-700">Reviews</h3>
          <div className="mb-2 max-h-32 overflow-y-auto border rounded-lg p-3 bg-gray-50">
            {reviews.length === 0 ? <span className="text-gray-400">No reviews yet.</span> : reviews.map((rev, i) => (
              <div key={i} className="mb-1 text-gray-700">{rev}</div>
            ))}
          </div>
          <div className="flex gap-2 mt-2">
            <input
              type="text"
              value={review}
              onChange={e => setReview(e.target.value)}
              className="border rounded-lg px-3 py-2 flex-1 focus:ring-2 focus:ring-blue-400"
              placeholder="Leave a review..."
            />
            <button onClick={handleAddReview} className="px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition">Post</button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
