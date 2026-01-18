import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const portalConfig = {
  LinkedIn: { color: "bg-blue-600", logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" },
  Upwork: { color: "bg-green-600", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Upwork_logo.svg/1200px-Upwork_logo.svg.png" },
  Freelancer: { color: "bg-cyan-500", logo: "https://www.freelancer.com/static/apple-touch-icon.png" },
  Wellfound: { color: "bg-black", logo: "https://photos.wellfound.com/startups/i/267-854728f321d4c227f7156947b71131c7-medium_jpg.jpg" },
  Indeed: { color: "bg-indigo-600", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Indeed_Logo.png" }
};

const ApplicationPortal = ({ isDarkMode }) => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const job = state?.job;

  if (!job) return <div className="p-10 text-center font-black">Error: No Job Selected.</div>;
  const config = portalConfig[job.source] || portalConfig.LinkedIn;

  const handleSubmit = (e) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem("applied_jobs") || "[]");
    if (!existing.some(j => j.id === job.id)) {
      localStorage.setItem("applied_jobs", JSON.stringify([...existing, job]));
    }
    navigate("/dashboard");
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }} 
      animate={{ opacity: 1, y: 0 }} 
      className={`min-h-screen flex items-center justify-center p-6 transition-colors duration-500 ${isDarkMode ? 'bg-[#0f172a]' : 'bg-[#F1F5F9]'}`}
    >
      <div className={`rounded-[3rem] shadow-2xl max-w-xl w-full overflow-hidden border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-white'}`}>
        <div className={`${config.color} p-12 text-white flex justify-between items-center`}>
          <div>
            <h2 className="text-3xl font-black">{job.title}</h2>
            <p className="opacity-70 font-bold">{job.company}</p>
          </div>
          <img src={config.logo} alt={job.source} className="h-16 w-16 rounded-2xl bg-white p-2" />
        </div>

        <form onSubmit={handleSubmit} className="p-12 space-y-8">
          <div>
            <label className={`text-xs font-black uppercase ${isDarkMode ? 'text-slate-400' : 'text-slate-400'}`}>Full Name</label>
            <input 
              type="text" 
              required 
              placeholder="Mohit Kumar Mourya" 
              className={`w-full border-b-2 p-3 focus:border-blue-500 outline-none text-lg font-bold transition-all cursor-text ${isDarkMode ? 'bg-transparent border-slate-700 text-white' : 'bg-transparent border-slate-100 text-slate-900'}`} 
            />
          </div>

          <div className="space-y-2">
            <div className={`border-2 border-dashed rounded-[2rem] p-12 text-center transition-all cursor-pointer relative group ${isDarkMode ? 'border-slate-700 hover:bg-slate-700/50' : 'border-slate-200 hover:bg-slate-50'}`}>
              <input type="file" accept=".pdf" onChange={(e) => setFile(e.target.files[0])} className="absolute inset-0 opacity-0 cursor-pointer" required />
              <p className="text-blue-500 font-black">{file ? `✅ ${file.name}` : "📁 DROP RESUME HERE"}</p>
            </div>
          </div>

          <div className="flex gap-4">
            <button 
              type="button" 
              onClick={() => navigate(-1)} 
              className={`flex-1 py-5 font-black cursor-pointer transition-colors ${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-400 hover:text-slate-600'}`}
            >
              CANCEL
            </button>
            <button 
              type="submit" 
              className={`flex-[2] py-5 text-white font-black rounded-3xl shadow-xl transition-all active:scale-95 cursor-pointer ${config.color} hover:brightness-110 uppercase tracking-widest`}
            >
              Submit App
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default ApplicationPortal;