/** @format */

"use client"
import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import { useRouter } from "next/navigation"

export default function RegisterPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const { register } = useAuth()
  const router = useRouter()

  const handleRegister = (e) => {
    e.preventDefault()
    setError("")
    const res = register({ email: email.trim().toLowerCase(), password })
    if (!res.ok) {
      setError(res.message || "Registration failed")
      return
    }
    setSuccess(true)
    setTimeout(() => router.push("/login"), 1000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Register</h2>
        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-2 text-center">{error}</div>}
          {success && (
            <div className="bg-green-100 text-green-700 px-4 py-2 rounded mb-2 text-center">
              Registered successfully! You can now log in. Redirecting...
            </div>
          )}
          <button type="submit" className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow hover:from-blue-600 hover:to-purple-600 transition">
            Register
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Already registered?{' '}
          <a
            href="#"
            className="text-blue-600 hover:underline font-medium"
            onClick={(e) => {
              e.preventDefault();
              router.push("/login");
            }}
          >
            Log in now
          </a>
        </p>
      </div>
    </div>
  );
}