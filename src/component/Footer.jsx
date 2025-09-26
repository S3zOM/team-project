import { FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full py-6 mt-10 border-t border-gray-200 bg-gradient-to-r from-gray-50 to-blue-50 text-gray-700">
      <div className="flex flex-col md:flex-row items-center justify-between px-6 gap-4">
        <p className="text-center text-sm md:text-left">
          &copy; {new Date().getFullYear()} Hunii naimaa | Collaboration with
        </p>
        <div className="flex gap-5 justify-center md:justify-end">
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <FaYoutube size={28} className="text-red-500 hover:text-red-600" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <FaTwitter size={28} className="text-blue-400 hover:text-blue-500" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <FaInstagram size={28} className="text-pink-500 hover:text-pink-600" />
          </a>
        </div>
      </div>
    </footer>
  );
}
