import { useState, useRef, useEffect } from "react";

export default function SearchBar({ onSearch }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="relative flex items-center">
      <button
        type="button"
        aria-label="Search"
        className={`transition-all duration-300 p-2 rounded-full hover:bg-blue-100 ${open ? 'bg-blue-100' : ''}`}
        onClick={() => setOpen((v) => !v)}
      >
        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
      </button>
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search job seekers..."
        className={`transition-all duration-300 ml-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm bg-white ${open ? 'w-48 opacity-100' : 'w-0 opacity-0 pointer-events-none'}`}
        style={{ minWidth: open ? '12rem' : 0 }}
      />
      {open && (
        <button type="submit" className="ml-2 px-3 py-1 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition">Go</button>
      )}
    </form>
  );
}
