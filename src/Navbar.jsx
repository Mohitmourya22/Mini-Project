import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/clerk-react";

const BriefcaseIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 002 2M8 6v2a2 2 0 01-2 2m0 0H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2v-6a2 2 0 00-2-2h-2m-6 0a2 2 0 00-2 2v0a2 2 0 002 2h2a2 2 0 002-2v0a2 2 0 00-2-2H9z" />
  </svg>
);

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useUser();

  return (
    <nav className={`shadow-md sticky top-0 z-50 transition-colors duration-300 ${isDarkMode ? 'bg-[#0f172a]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 cursor-pointer">
            <BriefcaseIcon className="h-8 w-8 text-blue-600" />
            <span className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>JobHub</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => setIsDarkMode(!isDarkMode)} className={`p-2 rounded-xl cursor-pointer transition-all ${isDarkMode ? 'bg-slate-800 text-yellow-400' : 'bg-gray-100 text-slate-600'}`}>
              {isDarkMode ? "☀️" : "🌙"}
            </button>
            <Link to="/" className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} font-bold`}>Browse</Link>
            <SignedIn>
              <Link to="/dashboard" className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} font-bold`}>Dashboard</Link>
              {/* Profile Link Added */}
              <Link to="/profile" className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} font-bold hover:text-blue-500`}>Profile</Link>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;