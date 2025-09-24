import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full py-4 px-8 flex items-center justify-between bg-white shadow">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-blue-600 cursor-pointer">placeholder</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex items-center gap-8">
        <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition">About</Link>
        <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition">Contact Us</Link>
      </nav>

      {/* Login Button */}
      <div>
        <Link href="/login">
          <span className="px-5 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow hover:from-purple-600 hover:to-blue-600 transition cursor-pointer">Login</span>
        </Link>
      </div>
    </header>
  );
}
