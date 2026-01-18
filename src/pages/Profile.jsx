import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { motion, AnimatePresence } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

const Profile = ({ isDarkMode }) => {
  const { user } = useUser();
  
  const [bio, setBio] = useState(localStorage.getItem("user_bio") || "");
  const [skills, setSkills] = useState(() => JSON.parse(localStorage.getItem("user_skills") || "[]"));
  const [newSkill, setNewSkill] = useState("");
  const [experience, setExperience] = useState(localStorage.getItem("user_exp") || "Fresher");
  const [resumeName, setResumeName] = useState(localStorage.getItem("user_resume_name") || null);
  const [resumeURL, setResumeURL] = useState(null);

  const handleSaveProfile = () => {
    // --- VALIDATION LOGIC ---
    
    if (bio.length < 50) {
      toast.error("Bio bahut choti hai! Kam se kam 50 characters likho.");
      return;
    }

    if (skills.length === 0) {
      toast.error("Bhai, kam se kam ek skill toh add karo!");
      return;
    }

    if (!resumeName) {
      toast.error("Resume upload karna zaroori hai.");
      return;
    }

    // Agar sab sahi hai toh save karo
    localStorage.setItem("user_bio", bio);
    localStorage.setItem("user_skills", JSON.stringify(skills));
    localStorage.setItem("user_exp", experience);
    
    toast.success("Profile Validated & Saved! 🚀");
  };

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setResumeName(file.name);
      setResumeURL(URL.createObjectURL(file));
      localStorage.setItem("user_resume_name", file.name);
      toast.success("Resume linked!");
    } else {
      toast.error("Sirf PDF upload karein.");
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      className={`min-h-screen py-12 px-6 transition-colors duration-500 ${isDarkMode ? 'bg-[#0f172a]' : 'bg-gray-50'}`}
    >
      <Toaster position="top-center" />
      <div className="max-w-5xl mx-auto">
        
        <div className={`p-10 rounded-[3rem] mb-10 flex items-center gap-8 ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white shadow-2xl border-gray-100'} border`}>
          <img src={user?.imageUrl} className="h-32 w-32 rounded-full border-4 border-blue-500" alt="avatar" />
          <div>
            <h1 className={`text-4xl font-black ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>{user?.fullName}</h1>
            <p className="text-blue-500 font-bold uppercase tracking-widest text-sm">Profile Customization</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className={`p-8 rounded-[2.5rem] ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white shadow-xl'} border`}>
              <div className="flex justify-between items-center mb-4">
                <label className="text-xs font-black uppercase text-slate-400 tracking-widest">Professional Bio</label>
                <span className={`text-[10px] font-bold ${bio.length < 50 ? 'text-red-500' : 'text-green-500'}`}>
                  {bio.length}/50 chars min
                </span>
              </div>
              <textarea 
                value={bio} onChange={(e) => setBio(e.target.value)}
                placeholder="Ex: I am a Full Stack MERN Developer with a passion for building scalable web applications..."
                className={`w-full h-40 p-4 rounded-2xl outline-none resize-none transition-all ${isDarkMode ? 'bg-slate-900 text-white focus:ring-2 focus:ring-blue-500' : 'bg-gray-50 text-slate-800 focus:ring-2 focus:ring-blue-200'}`}
              />
            </div>

            <div className={`p-8 rounded-[2.5rem] ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white shadow-xl'} border`}>
              <label className="text-xs font-black uppercase text-slate-400 mb-4 block tracking-widest">Resume (Mandatory)</label>
              <div className={`relative border-2 border-dashed rounded-3xl p-10 text-center transition-all ${isDarkMode ? 'border-slate-700 hover:bg-slate-900' : 'border-gray-200 hover:bg-gray-50'}`}>
                <input type="file" accept=".pdf" onChange={handleResumeUpload} className="absolute inset-0 opacity-0 cursor-pointer" />
                <p className="text-blue-500 font-black">{resumeName ? `📄 ${resumeName}` : "Upload Resume to Proceed"}</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className={`p-8 rounded-[2.5rem] ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white shadow-xl'} border`}>
              <label className="text-xs font-black uppercase text-slate-400 mb-4 block tracking-widest">Skills (Min 1)</label>
              <div className="flex flex-wrap gap-2 mb-6">
                {skills.map(skill => (
                  <span key={skill} className="bg-blue-50 text-blue-600 px-3 py-1.5 rounded-xl font-bold text-[10px] border border-blue-100 flex items-center gap-2">
                    {skill}
                    <button onClick={() => setSkills(skills.filter(s => s !== skill))} className="cursor-pointer">×</button>
                  </span>
                ))}
              </div>
              <form onSubmit={(e) => { e.preventDefault(); if(newSkill) { setSkills([...skills, newSkill]); setNewSkill(""); } }} className="flex gap-2">
                <input type="text" value={newSkill} onChange={(e) => setNewSkill(e.target.value)} placeholder="Add Skill..." className={`flex-1 p-3 rounded-xl outline-none ${isDarkMode ? 'bg-slate-900 text-white' : 'bg-gray-50'}`} />
                <button type="submit" className="bg-blue-600 text-white px-5 rounded-xl font-black">+</button>
              </form>
            </div>

            <AnimatePresence>
              {resumeURL && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className={`p-6 rounded-[2.5rem] h-[250px] overflow-hidden ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white shadow-xl'} border`}>
                  <iframe src={resumeURL} className="w-full h-full rounded-xl" title="preview"></iframe>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button onClick={handleSaveProfile} className="px-20 py-5 bg-slate-900 text-white rounded-[2.5rem] font-black text-xs uppercase tracking-[0.4em] shadow-2xl hover:bg-blue-600 transition-all active:scale-95 cursor-pointer">
            Finalize Profile
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;