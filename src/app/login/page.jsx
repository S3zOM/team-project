
"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "../context/AuthContext"

export default function Login({ onLoginSuccess }) {
  const [identifier, setIdentifier] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const router = useRouter()
  const { login } = useAuth()

  const handleLogin = (e) => {
    e.preventDefault()
    setError("")
  const res = login({ identifier: identifier.trim(), password })
    if (!res.ok) {
      setError(res.message || "Login failed")
      setSuccess("")
      return
    }
    setSuccess("Нэвтрэх амжилттай боллоо!")

    if (typeof onLoginSuccess === "function") {
      onLoginSuccess(res.user.email)
      return
    }

    setTimeout(() => {
      router.push("/")
    }, 500)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Login</h2>
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email or Username</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter email or username"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-2 text-center">{error}</div>}
            {success && (
              <div className="bg-green-100 text-green-700 px-4 py-2 rounded mb-2 text-center">
                {success}
              </div>
            )}
            <button type="submit" className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow hover:from-blue-600 hover:to-purple-600 transition">
              Login
            </button>
          </form>
          <p className="mt-4 text-center text-gray-600">
            Don't have an account?{' '}
            <a
              href="#"
              className="text-blue-600 hover:underline font-medium"
              onClick={e => {
                e.preventDefault();
                router.push("/register");
              }}
            >
              Register now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}