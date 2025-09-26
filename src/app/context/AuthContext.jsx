/** @format */

"use client"

import { createContext, useContext, useState, useEffect } from "react"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [hasRegisteredUser, setHasRegisteredUser] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // check if user is logged in
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      // Find user details by email
      const storedUser = localStorage.getItem(`registeredUser-${loggedInUser}`);
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        setUser({ email: parsedUser.email, username: parsedUser.username });
      } else {
        setUser({ email: loggedInUser });
      }
    } else {
      setUser(null);
    }

    // check if any registered user exists
    const hasUser = Object.keys(localStorage).some((key) =>
      key.startsWith("registeredUser-")
    );
    setHasRegisteredUser(hasUser);
    setLoading(false);
  }, []);

  const register = (newUser) => {
    // Check for existing email
    if (localStorage.getItem(`registeredUser-${newUser.email}`)) {
      return { ok: false, message: "An account with this email already exists." };
    }
    // Check for existing username
    for (const key of Object.keys(localStorage)) {
      if (key.startsWith("registeredUser-")) {
        const user = JSON.parse(localStorage.getItem(key));
        if (user.username && user.username.toLowerCase() === newUser.username.toLowerCase()) {
          return { ok: false, message: "An account with this username already exists." };
        }
      }
    }
    try {
      localStorage.setItem(
        `registeredUser-${newUser.email}`,
        JSON.stringify(newUser)
      );
      setHasRegisteredUser(true);
      return { ok: true, message: "Registered successfully", user: newUser };
    } catch (e) {
      return { ok: false, message: "Registration failed" };
    }
  };

  const login = ({ identifier, password }) => {
    // Try email first
    let storedUser = localStorage.getItem(`registeredUser-${identifier}`);
    let parsedUser = storedUser ? JSON.parse(storedUser) : null;

    // If not found by email, try by username
    if (!parsedUser) {
      // Search all registered users for a matching username
      for (const key of Object.keys(localStorage)) {
        if (key.startsWith("registeredUser-")) {
          const user = JSON.parse(localStorage.getItem(key));
          if (user.username && user.username.toLowerCase() === identifier.toLowerCase()) {
            parsedUser = user;
            break;
          }
        }
      }
    }

    if (!parsedUser) {
      return { ok: false, message: "No account found with this email or username." };
    }

    if (parsedUser.password !== password) {
      return { ok: false, message: "Incorrect password." };
    }

    localStorage.setItem("loggedInUser", parsedUser.email);
    setUser({ email: parsedUser.email, username: parsedUser.username });
    return { ok: true, message: "Login successful", user: parsedUser };
  };

  const logout = () => {
    localStorage.removeItem("loggedInUser")
    setUser(null)
  }

  // Loader removed: app renders immediately
  return (
    <AuthContext.Provider
      value={{ user, hasRegisteredUser, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext)