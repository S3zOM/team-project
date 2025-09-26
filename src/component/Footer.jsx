import { FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full py-10 mt-10 bg-gradient-to-r from-gray-50 to-blue-50 text-gray-900">
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 rounded-2xl bg-white/80 shadow-lg py-8">
        <div>
          <h3 className="font-bold text-lg mb-4">EmployMe</h3>
          <p className="text-sm mb-4">Connecting job seekers and employers worldwide. Find your next opportunity or your next hire here.</p>
          <div className="flex gap-4 mt-2">
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube size={24} className="text-red-500 hover:text-red-600" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter size={24} className="text-blue-400 hover:text-blue-500" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram size={24} className="text-pink-500 hover:text-pink-600" />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-semibold mb-3 text-center w-full">Jobs</h4>
          <ul className="space-y-2 text-sm w-full text-left">
            <li><a href="/" className="no-underline" style={{ textDecoration: 'none' }}>Browse Jobs</a></li>
            <li><a href="/favorites" className="no-underline" style={{ textDecoration: 'none' }}>Favorites</a></li>
            <li><a href="/profile" className="no-underline" style={{ textDecoration: 'none' }}>Profile</a></li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-semibold mb-3 text-center w-full">Employers</h4>
          <ul className="space-y-2 text-sm w-full text-left">
            <li><a href="/about" className="no-underline" style={{ textDecoration: 'none' }}>About Us</a></li>
            <li><a href="/contact" className="no-underline" style={{ textDecoration: 'none' }}>Contact</a></li>
            <li><a href="/register" className="no-underline" style={{ textDecoration: 'none' }}>Register</a></li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-semibold mb-3 text-center w-full">Support</h4>
          <ul className="space-y-2 text-sm w-full text-left">
            <li><a href="#" className="no-underline" style={{ textDecoration: 'none' }}>Help Center</a></li>
            <li><a href="#" className="no-underline" style={{ textDecoration: 'none' }}>Terms of Service</a></li>
            <li><a href="#" className="no-underline" style={{ textDecoration: 'none' }}>Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-10 text-center text-xs text-neutral-400">
        &copy; {new Date().getFullYear()} EmployMe. All rights reserved.
      </div>
    </footer>
  );
}
