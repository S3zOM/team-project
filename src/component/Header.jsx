"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useAuth } from "../app/context/AuthContext";

export default function Header() {
  const { user, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Lazy load FavoritesModal
  let FavoritesModal = null;
  try {
    FavoritesModal = require("./FavoritesModal").default;
  } catch {}

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen]);

  // ...existing code...
  // Import SearchBar
  const SearchBar = require("./SearchBar").default;

  // Handler for search (optional: can be passed from parent)
  const handleSearch = (query) => {
    // Implement search logic or pass up to parent
    // For now, just log
    console.log("Header search query:", query);
  };

  return (
    <>
      <header className="w-full py-4 px-8 flex items-center justify-between bg-white shadow relative">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center no-underline" style={{ textDecoration: 'none' }}>
            <span className="text-2xl font-bold text-blue-600 cursor-pointer">Human trafficking</span>
          </Link>
        </div>

        {/* Navigation + Search */}
        <div className="flex items-center gap-8">
          <nav className="flex items-center gap-8">
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition" style={{ textDecoration: 'none' }}>About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition" style={{ textDecoration: 'none' }}>Contact Us</Link>
            <Link href="/favorites" className="px-4 py-2 rounded-lg bg-blue-100 text-blue-700 font-medium shadow hover:bg-blue-200 transition" style={{ textDecoration: 'none' }}>Favorites</Link>
          </nav>
          {/* SearchBar in header */}
          <div className="ml-4">
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>

        {/* Login/Dropdown */}
        <div className="relative" ref={dropdownRef}>
          {user ? (
            <>
              <button
                onClick={() => setDropdownOpen((v) => !v)}
                className="px-5 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow hover:from-purple-600 hover:to-blue-600 transition cursor-pointer flex items-center gap-2"
              >
                {user.username || user.email}
                <svg className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <Link href="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" style={{ textDecoration: 'none' }}>Manage Profile</Link>
                  <button
                    onClick={() => { logout(); setDropdownOpen(false); }}
                    className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                  >
                    Log out
                  </button>
                </div>
              )}
            </>
          ) : (
            <Link href="/login">
              <span className="px-5 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow hover:from-purple-600 hover:to-blue-600 transition cursor-pointer">Login</span>
            </Link>
          )}
        </div>
      </header>
    </>
  );
}
