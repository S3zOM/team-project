/** @format */

"use client"

import { createContext, useContext, useState, useEffect } from "react"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [hasRegisteredUser, setHasRegisteredUser] = useState(false)

  useEffect(() => {
    // check if user is logged in
    const loggedInUser = localStorage.getItem("loggedInUser")
    if (loggedInUser) {
      setUser({ email: loggedInUser })
    }

    // check if any registered user exists
    const hasUser = Object.keys(localStorage).some((key) =>
      key.startsWith("registeredUser-")
    )
    setHasRegisteredUser(hasUser)
  }, [])

  const register = (newUser) => {
    try {
      // Save user regardless of other users
      localStorage.setItem(
        `registeredUser-${newUser.email}`,
        JSON.stringify(newUser)
      )
      setHasRegisteredUser(true)
      return { ok: true, message: "Registered successfully", user: newUser }
    } catch (e) {
      return { ok: false, message: "Registration failed" }
    }
  }

  const login = ({ email, password }) => {
    const storedUser = localStorage.getItem(`registeredUser-${email}`)
    if (!storedUser) {
      return { ok: false, message: "No account found with this email." }
    }

    const parsedUser = JSON.parse(storedUser)
    if (parsedUser.password !== password) {
      return { ok: false, message: "Incorrect password." }
    }

    localStorage.setItem("loggedInUser", email)
    setUser({ email })
    return { ok: true, message: "Login successful", user: parsedUser }
  }

  const logout = () => {
    localStorage.removeItem("loggedInUser")
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{ user, hasRegisteredUser, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)