import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Icons same as before
const SearchIcon = () => <span className="text-xl">🔍</span>;

const portalConfig = {
  LinkedIn: { border: "border-blue-400", shadow: "shadow-blue-100", bg: "bg-blue-50/40", color: "text-blue-600" },
  Upwork: { border: "border-green-400", shadow: "shadow-green-100", bg: "bg-green-50/40", color: "text-green-600" },
  Freelancer: { border: "border-cyan-400", shadow: "shadow-cyan-100", bg: "bg-cyan-50/40", color: "text-cyan-600" },
  Wellfound: { border: "border-gray-800", shadow: "shadow-gray-200", bg: "bg-gray-50/40", color: "text-gray-800" },
  Indeed: { border: "border-indigo-400", shadow: "shadow-indigo-100", bg: "bg-indigo-50/40", color: "text-indigo-600" }
};

const generateJobs = (count = 5000) => {
  const titles = ["Frontend Developer", "Backend Developer", "UI/UX Designer", "Full Stack Engineer", "DevOps Engineer"];
  const companies = ["TechCorp Inc.", "DataFlow", "Creative Studio", "StartupXYZ"];
  const sources = ["LinkedIn", "Upwork", "Freelancer", "Wellfound", "Indeed"];
  const skillsList = ["React", "JavaScript", "Python", "Node.js", "Figma", "AWS"];

  return Array.from({ length: count }, (_, i) => ({
    id: `body-job-${i}`,
    title: titles[Math.floor(Math.random() * titles.length)],
    company: companies[Math.floor(Math.random() * companies.length)],
    source: sources[i % 5],
    matchScore: Math.floor(Math.random() * 20) + 80,
    description: "Discover premium opportunities from top platforms. Join our agile team to build next-gen applications.",
    teamSize: Math.floor(Math.random() * 15) + 5,
    workType: i % 2 === 0 ? "Remote" : "Hybrid",
    timeLeft: `${(i % 24) + 1}H LEFT`,
    skills: skillsList.sort(() => 0.5 - Math.random()).slice(0, 3)
  }));
};

const DYNAMIC_JOBS = generateJobs(5000);

const JobAggregatorBody = ({ isDarkMode }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState(null);
  const [appliedJobs, setAppliedJobs] = useState(() => JSON.parse(localStorage.getItem("applied_jobs") || "[]"));

  useEffect(() => {
    const handleStorageChange = () => {
      setAppliedJobs(JSON.parse(localStorage.getItem("applied_jobs") || "[]"));
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const filteredJobs = useMemo(() => {
    return DYNAMIC_JOBS.filter(job => 
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 20);
  }, [searchQuery]);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className={`min-h-screen py-12 px-6 transition-colors duration-500 ${isDarkMode ? 'bg-[#0f172a]' : 'bg-[#F8FAFC]'}`}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className={`text-6xl font-black mb-6 tracking-tighter italic ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Unified Job Aggregator.
          </h1>
          <div className="relative max-w-3xl mx-auto group">
            <input 
              type="text" 
              placeholder="Search roles, skills or companies..." 
              className={`w-full p-7 rounded-[2.5rem] outline-none shadow-2xl transition-all text-xl font-bold cursor-text ${isDarkMode ? 'bg-slate-800 text-white shadow-blue-900/20' : 'bg-white text-slate-800 shadow-blue-100'}`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute left-6 top-7 opacity-30"><SearchIcon /></div>
          </div>
        </div>

        {/* Job Grid - Dashboard Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredJobs.map(job => {
              const isExpanded = expandedId === job.id;
              const config = portalConfig[job.source] || portalConfig.LinkedIn;
              const isApplied = appliedJobs.some(j => j.id === job.id);

              return (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -10 }} 
                  key={job.id} 
                  className={`relative p-8 rounded-[3rem] border-2 flex flex-col transition-all duration-300 ${config.border} ${isDarkMode ? 'bg-slate-800/60' : 'bg-white shadow-xl'}`}
                >
                  <div className="flex justify-between items-start mb-6">
                    <span className={`text-[10px] font-black px-4 py-1.5 rounded-full uppercase border-2 bg-white ${config.color}`}>{job.source}</span>
                    <span className="text-orange-500 font-black text-sm italic">🔥 {job.matchScore}% Match</span>
                  </div>

                  <h3 className={`font-black text-3xl tracking-tight leading-tight mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    {job.title}
                  </h3>
                  <p className="text-blue-500 font-bold text-lg mb-4">{job.company}</p>

                  {/* Expandable Content Feature */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }} 
                        animate={{ opacity: 1, height: "auto" }} 
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <p className={`text-lg mb-6 leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{job.description}</p>
                        <div className="flex flex-wrap gap-3 mb-8">
                          <span className={`px-3 py-1.5 rounded-xl font-bold text-xs ${isDarkMode ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-500'}`}>👥 Team: {job.teamSize}</span>
                          <span className="bg-blue-50 px-3 py-1.5 rounded-xl font-bold text-blue-500 text-xs tracking-tighter">📍 {job.workType}</span>
                          <span className="bg-red-50 px-3 py-1.5 rounded-xl font-bold text-red-500 text-xs tracking-tighter uppercase">⌛ {job.timeLeft}</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Action Buttons */}
                  <div className="flex gap-4 mt-auto">
                    <button 
                      onClick={() => setExpandedId(isExpanded ? null : job.id)} 
                      className={`flex-1 py-4 rounded-2xl font-black text-[10px] uppercase transition-all cursor-pointer ${isDarkMode ? 'bg-slate-700 text-white' : 'bg-gray-100 text-slate-600'}`}
                    >
                      {isExpanded ? "Hide" : "View Details"}
                    </button>
                    <button 
                      onClick={() => navigate("/apply-portal", { state: { job } })} 
                      disabled={isApplied}
                      className={`flex-[2] py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all cursor-pointer shadow-lg ${isApplied ? 'bg-green-500 text-white' : 'bg-slate-900 text-white hover:bg-blue-600'}`}
                    >
                      {isApplied ? "Already Applied" : "Quick Apply"}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default JobAggregatorBody;