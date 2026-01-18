import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/clerk-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import JobAggregatorBody from "./body";
import ApplicationPortal from "./pages/ApplicationPortal";
import Profile from "./pages/Profile"; // Profile component import kiya

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function App() {
  // Dark Mode State with LocalStorage persistence
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  // Theme change hone par body class aur localstorage update karein
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <BrowserRouter>
        {/* Navbar handles the toggle via setIsDarkMode */}
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

        <Routes>
          {/* Public Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Root Route (Browse Page) */}
          <Route
            path="/"
            element={
              <>
                <SignedIn>
                  <JobAggregatorBody isDarkMode={isDarkMode} />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            }
          />

          {/* Protected Dashboard Route */}
          <Route
            path="/dashboard"
            element={
              <>
                <SignedIn>
                  <Dashboard isDarkMode={isDarkMode} />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            }
          />

          {/* Protected Application Portal */}
          <Route
            path="/apply-portal"
            element={
              <>
                <SignedIn>
                  <ApplicationPortal isDarkMode={isDarkMode} />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            }
          />

          {/* Protected Profile Route */}
          <Route
            path="/profile"
            element={
              <>
                <SignedIn>
                  <Profile isDarkMode={isDarkMode} />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            }
          />

          {/* Catch-all: Redirect unknown routes to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Footer isDarkMode={isDarkMode} />
      </BrowserRouter>
    </ClerkProvider>
  );
}

export default App;