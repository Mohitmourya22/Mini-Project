import React, { useState, useMemo, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

const portalConfig = {
  LinkedIn: { border: "border-blue-400", bg: "bg-blue-50/40", color: "text-blue-600" },
  Upwork: { border: "border-green-400", bg: "bg-green-50/40", color: "text-green-600" },
  Freelancer: { border: "border-cyan-400", bg: "bg-cyan-50/40", color: "text-cyan-600" },
  Wellfound: { border: "border-gray-800", bg: "bg-gray-50/40", color: "text-gray-800" },
  Indeed: { border: "border-indigo-400", bg: "bg-indigo-50/40", color: "text-indigo-600" }
};

const Dashboard = ({ isDarkMode }) => {
  const { user, isLoaded } = useUser();
  const navigate = useNavigate();
  
  // --- States ---
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("all"); 
  const [expandedId, setExpandedId] = useState(null);
  const [salaryExpectation, setSalaryExpectation] = useState(40);
  
  // Storage States
  const [savedJobs, setSavedJobs] = useState(() => JSON.parse(localStorage.getItem("saved_jobs") || "[]"));
  const [appliedJobs, setAppliedJobs] = useState(() => JSON.parse(localStorage.getItem("applied_jobs") || "[]"));
  
  // User Profile Data
  const [userSkills] = useState(() => JSON.parse(localStorage.getItem("user_skills") || "[]"));
  const [userBio] = useState(() => localStorage.getItem("user_bio") || "");

  // Strength logic including Resume
  const profileStrength = useMemo(() => {
    let score = 20;
    if (userSkills.length > 0) score += 20;
    if (userBio.length > 10) score += 20;
    if (localStorage.getItem("user_resume_name")) score += 20;
    if (appliedJobs.length > 0) score += 20;
    return score > 100 ? 100 : score;
  }, [userSkills, userBio, appliedJobs]);

// --- VERSATILE DATASET GENERATOR ---
  const allJobs = useMemo(() => {
    const titles = [
      "MERN Stack Developer", "iOS Swift Engineer", "Android Kotlin Developer", 
      "DevOps Engineer", "Cloud Solutions Architect", "Cybersecurity Analyst",
      "Data Scientist", "Machine Learning Engineer", "UI Designer", 
      "UX Researcher", "Product Manager", "QA Automation Lead", 
      "Blockchain Developer", "Unity Game Dev", "Embedded Systems Engineer",
      "Rust Backend Dev", "Site Reliability Engineer (SRE)", "AI Prompt Engineer",
      "Technical Architect", "Database Administrator", "Full Stack Java Dev",
      "Python Django Expert", "Golang Specialist", "Data Engineer"
    ];

    const companies = [
      "TechSprint", "NexGen AI", "Global Logic", "DataFlow", "Creative Studio", 
      "StartupX", "CloudScale", "Innovate AI", "WebFlow Solutions", "MetaVerse Labs",
      "FinTech Hub", "CyberShield", "Quantum Systems", "HealthTech Inc.", "AutoDrive AI"
    ];

    const sources = ["LinkedIn", "Upwork", "Freelancer", "Wellfound", "Indeed"];
    const workTypes = ["Remote", "Hybrid", "On-site"];
    
    // Yahan hum 100 entries generate kar rahe hain dashboard discovery ke liye
    return Array.from({ length: 100 }, (_, i) => {
      const randomTitle = titles[Math.floor(Math.random() * titles.length)];
      const randomCompany = companies[Math.floor(Math.random() * companies.length)];
      
      return {
        id: `versatile-job-${i}`,
        title: randomTitle,
        company: randomCompany,
        source: sources[i % 5],
        matchScore: Math.floor(Math.random() * 25) + 75, 
        salary: Math.floor(Math.random() * 90) + 30, // Paisa ($30k to $120k)
        description: `Join ${randomCompany} to work on cutting-edge ${randomTitle} projects. We value innovation and scalable code.`,
        teamSize: Math.floor(Math.random() * 20) + 5,
        workType: workTypes[Math.floor(Math.random() * workTypes.length)],
        timeLeft: `${(i % 23) + 1}H LEFT`
      };
    });
  }, []);
  
  // --- EFFECTS ---
  useEffect(() => {
    localStorage.setItem("saved_jobs", JSON.stringify(savedJobs));
    localStorage.setItem("applied_jobs", JSON.stringify(appliedJobs));
  }, [savedJobs, appliedJobs]);

  // --- ACTIONS ---
  const toggleSaveJob = (job) => {
    const isSaved = savedJobs.some(j => j.id === job.id);
    if (isSaved) {
      setSavedJobs(prev => prev.filter(j => j.id !== job.id));
      toast.error("Removed from Wishlist");
    } else {
      setSavedJobs(prev => [...prev, job]);
      toast.success("Job Saved! ❤️");
    }
  };

  // UNAPPLY OPTION WAPAS AA GYA
  const handleUnapply = (jobId) => {
    setAppliedJobs(prev => prev.filter(j => j.id !== jobId));
    toast.success("Application Withdrawn", { icon: '🔄' });
  };

  const filteredJobs = useMemo(() => {
    let baseData = viewMode === "saved" ? savedJobs : viewMode === "applied" ? appliedJobs : allJobs;
    return baseData.filter(j => 
      (j.title.toLowerCase().includes(searchTerm.toLowerCase()) || j.company.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (viewMode !== "all" || j.salary >= salaryExpectation)
    );
  }, [searchTerm, viewMode, savedJobs, appliedJobs, allJobs, salaryExpectation]);

  if (!isLoaded) return <div className="h-screen flex items-center justify-center font-black animate-pulse">RESTORING FEATURES...</div>;

  return (
    <div className={`min-h-screen transition-all duration-500 pb-20 ${isDarkMode ? 'bg-[#0f172a]' : 'bg-gray-50'}`}>
      <Toaster position="bottom-right" />
      <div className="max-w-7xl mx-auto px-6 py-10">
        
        {/* Header: Strength & Salary Slider */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className={`col-span-2 p-10 rounded-[3rem] flex items-center gap-8 ${isDarkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white shadow-2xl'} border`}>
            <img src={user?.imageUrl} className="h-24 w-24 rounded-full border-4 border-blue-500" alt="profile" />
            <div className="flex-1">
              <h1 className={`text-4xl font-black ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Hey, {user?.firstName}!</h1>
              <div className="w-full bg-gray-200 rounded-full h-4 mt-4 mb-2 overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: `${profileStrength}%` }} className="bg-blue-600 h-full shadow-lg" />
              </div>
              <p className="text-[10px] font-black text-slate-400 uppercase">Profile Strength: {profileStrength}%</p>
            </div>
          </div>

          <div className={`p-10 rounded-[3rem] ${isDarkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white shadow-2xl'} border`}>
            <h3 className={`text-xs font-black mb-4 uppercase ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Min Salary ($k)</h3>
            <input type="range" min="20" max="100" step="5" value={salaryExpectation} onChange={(e) => setSalaryExpectation(e.target.value)} className="w-full h-3 bg-blue-100 rounded-lg cursor-pointer accent-blue-600 mb-4" />
            <p className="text-4xl font-black text-blue-600">${salaryExpectation}k+</p>
          </div>
        </div>

        {/* Global Search Bar */}
        <div className="mb-12">
          <input 
            type="text" placeholder="Search saved, applied or discovery..." 
            className={`w-full p-7 rounded-[2.5rem] outline-none shadow-2xl text-xl font-bold transition-all ${isDarkMode ? 'bg-slate-800 text-white' : 'bg-white text-slate-800'}`}
            value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Tab Switcher */}
        <div className={`flex p-2 rounded-2xl w-fit mb-10 ${isDarkMode ? 'bg-slate-800' : 'bg-gray-200'}`}>
          {['all', 'saved', 'applied'].map(m => (
            <button key={m} onClick={() => setViewMode(m)} className={`px-8 py-3 rounded-xl text-xs font-black uppercase transition-all cursor-pointer ${viewMode === m ? 'bg-blue-600 text-white shadow-xl' : 'text-slate-500'}`}>{m}</button>
          ))}
        </div>

        {/* Job Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredJobs.map(job => {
              const isExpanded = expandedId === job.id;
              const config = portalConfig[job.source] || portalConfig.LinkedIn;
              const isApplied = appliedJobs.some(j => j.id === job.id);
              const isSaved = savedJobs.some(j => j.id === job.id);

              return (
                <motion.div 
                  layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                  key={job.id} 
                  className={`relative p-9 rounded-[3rem] border-2 flex flex-col transition-all duration-500 ${config.border} ${isDarkMode ? 'bg-slate-800/80 border-slate-700' : 'bg-white shadow-2xl'}`}
                >
                  <div className="flex justify-between items-start mb-6 relative z-10">
                    <span className={`text-[10px] font-black px-4 py-1.5 rounded-full uppercase border-2 bg-white ${config.color}`}>{job.source}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-orange-500 font-black text-sm italic">🔥 {job.matchScore}% Match</span>
                      <button onClick={() => toggleSaveJob(job)} className="text-2xl cursor-pointer hover:scale-125 transition-transform">{isSaved ? "❤️" : "🤍"}</button>
                    </div>
                  </div>

                  <h3 className={`font-black text-3xl tracking-tight leading-tight mb-2 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>{job.title}</h3>
                  <p className="text-blue-500 font-bold text-lg mb-2">{job.company}</p>
                  <p className="text-green-500 font-black text-2xl mb-6">${job.salary}k /yr</p>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                        <p className={`text-lg mb-6 leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{job.description}</p>
                        <div className="flex flex-wrap gap-3 mb-8">
                           <span className={`px-4 py-2 rounded-xl font-bold text-xs ${isDarkMode ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-500'}`}>👥 Team: {job.teamSize}</span>
                           <span className="bg-blue-50 px-4 py-2 rounded-xl font-bold text-blue-500 text-xs">📍 {job.workType}</span>
                           <span className="bg-red-50 px-4 py-2 rounded-xl font-bold text-red-500 text-xs uppercase italic">⌛ {job.timeLeft}</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex gap-4 mt-auto pt-4 relative z-10">
                    <button onClick={() => setExpandedId(isExpanded ? null : job.id)} className={`flex-1 py-5 rounded-2xl font-black text-[10px] uppercase transition-all cursor-pointer ${isDarkMode ? 'bg-slate-700 text-white' : 'bg-gray-100 text-slate-600'}`}>{isExpanded ? "Hide" : "Details"}</button>
                    {isApplied ? (
                      <div className="flex-[2] space-y-2">
                        <div className="w-full py-5 bg-green-500 text-white font-black text-[10px] uppercase text-center rounded-2xl">✓ Applied</div>
                        {/* UNAPPLY OPTION RESTORED */}
                        <button onClick={() => handleUnapply(job.id)} className="w-full text-[10px] text-red-500 font-black underline cursor-pointer hover:text-red-700 transition-colors">Withdraw Application</button>
                      </div>
                    ) : (
                      <button onClick={() => navigate("/apply-portal", { state: { job } })} className="flex-[2] py-5 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest cursor-pointer hover:bg-blue-600 transition-all shadow-xl shadow-blue-100">Quick Apply</button>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;