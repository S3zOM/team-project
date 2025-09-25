/** @format */
"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
// ...existing code...
import { useAuth } from "../context/AuthContext"

export default function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const router = useRouter()
  const { login } = useAuth()

  const handleLogin = (e) => {
    e.preventDefault()
    setError("")
    const res = login({ email: email.trim().toLowerCase(), password })
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
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter email"
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
  );
}
"use client";
import { useState, useEffect } from "react";

function generateCaptcha(length = 6) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export default function Captcha({ onValidate }) {
  const [captcha, setCaptcha] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === captcha) {
      onValidate(true);
      setCaptcha(generateCaptcha());
      setInput("");
    } else {
      onValidate(false);
      setCaptcha(generateCaptcha());
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-2">
      <div className="text-2xl font-mono bg-gray-200 px-4 py-2 rounded tracking-widest">
        {captcha}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter CAPTCHA"
        className="border px-2 py-1 rounded"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
      >
        Verify
      </button>
    </form>
  );
}
