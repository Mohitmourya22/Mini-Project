import React from 'react';
import { Link } from 'react-router-dom';

// Simple SVG Icons
const BriefcaseIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 002 2M8 6v2a2 2 0 01-2 2m0 0H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2v-6a2 2 0 00-2-2h-2m-6 0a2 2 0 00-2 2v0a2 2 0 002 2h2a2 2 0 002-2v0a2 2 0 00-2-2H9z" />
  </svg>
);

const MailIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PhoneIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const MapPinIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const Footer = ({ isDarkMode }) => {
  const currentYear = new Date().getFullYear();

  // Color logic for Dark Mode compatibility
  const footerBg = isDarkMode ? 'bg-slate-900 border-t border-slate-800' : 'bg-gray-100 border-t border-gray-200';
  const textColor = isDarkMode ? 'text-gray-300' : 'text-gray-600';
  const headingColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const linkHover = isDarkMode ? 'hover:text-blue-400' : 'hover:text-blue-600';

  return (
    <footer className={`${footerBg} transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-6">
                <BriefcaseIcon className="h-8 w-8 text-blue-500" />
                <span className={`ml-2 text-2xl font-black tracking-tighter ${headingColor}`}>JobHub</span>
              </div>
              <p className={`${textColor} mb-8 text-sm leading-relaxed font-medium`}>
                Your one-stop destination for finding the perfect job or internship. 
                We aggregate opportunities from top platforms to save your time and accelerate your career.
              </p>
              
              <div className="space-y-4">
                <div className={`flex items-center ${textColor} text-sm font-bold`}>
                  <MailIcon className="h-5 w-5 mr-3 text-blue-500" />
                  <span>contact@jobhub.com</span>
                </div>
                <div className={`flex items-center ${textColor} text-sm font-bold`}>
                  <PhoneIcon className="h-5 w-5 mr-3 text-blue-500" />
                  <span>+91 98765 43210</span>
                </div>
              </div>
            </div>

            {/* Links - Using Link instead of 'a' for SPA navigation */}
            {[
              { title: "Seekers", links: ["Browse Jobs", "Internships", "Remote Hub", "Career Advice"] },
              { title: "Categories", links: ["Technology", "Marketing", "Design", "Sales"] },
              { title: "Company", links: ["About Us", "How It Works", "Privacy", "Contact"] }
            ].map((section) => (
              <div key={section.title}>
                <h3 className={`text-sm font-black uppercase tracking-[0.2em] ${headingColor} mb-6`}>{section.title}</h3>
                <ul className="space-y-4">
                  {section.links.map(link => (
                    <li key={link}>
                      <Link to="#" className={`${textColor} ${linkHover} transition-all text-xs font-bold block`}>
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter - Simplified and Themed */}
        <div className={`border-t ${isDarkMode ? 'border-slate-800' : 'border-gray-200'} py-8`}>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="text-center lg:text-left">
              <h3 className={`text-lg font-black ${headingColor}`}>Stay Updated</h3>
              <p className={`${textColor} text-xs font-medium uppercase tracking-widest`}>Get the latest job alerts in your inbox</p>
            </div>
            <div className="flex w-full lg:w-auto gap-2">
              <input
                type="email"
                placeholder="email@example.com"
                className={`flex-1 lg:w-64 px-4 py-3 rounded-xl outline-none text-xs font-bold transition-all ${isDarkMode ? 'bg-slate-800 text-white focus:ring-2 focus:ring-blue-500' : 'bg-white text-gray-900 border border-gray-200 shadow-sm'}`}
              />
              <button className="px-6 py-3 bg-blue-600 text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-500/30 transition-all active:scale-95">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`border-t ${isDarkMode ? 'border-slate-800' : 'border-gray-200'} py-6`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className={`text-[10px] font-black uppercase tracking-widest ${textColor}`}>
              © {currentYear} JobHub. Built with ❤️ for Builders.
            </p>
            <div className="flex gap-6">
              {['LinkedIn', 'Twitter', 'Instagram'].map(social => (
                <Link key={social} to="#" className={`${textColor} ${linkHover} text-[10px] font-black uppercase tracking-widest`}>
                  {social}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;