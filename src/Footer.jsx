import React from 'react';

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

const FacebookIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const TwitterIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
  </svg>
);

const LinkedInIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const InstagramIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.017 0C8.396 0 7.896.011 6.684.058 2.667.252 0 2.93 0 6.684v10.632c0 3.754 2.667 6.432 6.684 6.626C7.896 23.989 8.396 24 12.017 24s4.122-.011 5.333-.058C21.333 23.748 24 21.07 24 17.316V6.684C24 2.93 21.333.252 17.35.058 16.122.011 15.622 0 12.017 0zm0 5.838a6.162 6.162 0 110 12.324 6.162 6.162 0 010-12.324zM12.017 4a8.017 8.017 0 100 16.034A8.017 8.017 0 0012.017 4zm6.624-1.176a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0z"/>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            
            {/* Company Info */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-4">
                <BriefcaseIcon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" />
                <span className="ml-2 text-xl sm:text-2xl font-bold text-white">JobHub</span>
              </div>
              <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                Your one-stop destination for finding the perfect job or internship. 
                We aggregate opportunities from top platforms to save your time and accelerate your career.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center text-gray-400 text-xs sm:text-sm">
                  <MailIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-2 sm:mr-3 text-blue-400 flex-shrink-0" />
                  <span className="break-all">contact@jobhub.com</span>
                </div>
                <div className="flex items-center text-gray-400 text-xs sm:text-sm">
                  <PhoneIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-2 sm:mr-3 text-blue-400 flex-shrink-0" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-gray-400 text-xs sm:text-sm">
                  <MapPinIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-2 sm:mr-3 text-blue-400 flex-shrink-0" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Job Seekers */}
            <div className="mt-6 sm:mt-0">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6">For Job Seekers</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a href="/browse-jobs" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1">
                    Browse Jobs
                  </a>
                </li>
                <li>
                  <a href="/internships" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1">
                    Find Internships
                  </a>
                </li>
                <li>
                  <a href="/remote-jobs" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1">
                    Remote Jobs
                  </a>
                </li>
                <li>
                  <a href="/part-time" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1">
                    Part-time Jobs
                  </a>
                </li>
                <li>
                  <a href="/career-advice" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1">
                    Career Advice
                  </a>
                </li>
                <li>
                  <a href="/resume-builder" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1">
                    Resume Builder
                  </a>
                </li>
                <li>
                  <a href="/salary-guide" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1">
                    Salary Guide
                  </a>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div className="mt-6 sm:mt-0">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6">Popular Categories</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a href="/tech-jobs" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1">
                    Technology
                  </a>
                </li>
                <li>
                  <a href="/marketing-jobs" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1">
                    Marketing
                  </a>
                </li>
                <li>
                  <a href="/design-jobs" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1">
                    Design
                  </a>
                </li>
                <li>
                  <a href="/sales-jobs" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1">
                    Sales
                  </a>
                </li>
                <li>
                  <a href="/finance-jobs" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1">
                    Finance
                  </a>
                </li>
                <li>
                  <a href="/healthcare-jobs" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1">
                    Healthcare
                  </a>
                </li>
                <li>
                  <a href="/education-jobs" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1">
                    Education
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="mt-6 sm:mt-0">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6">Company</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a href="/about" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/how-it-works" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="/pricing" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/help" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/careers" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1">
                    We're Hiring
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 py-6 sm:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-start lg:items-center">
            <div className="text-center lg:text-left">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Stay Updated</h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Get the latest job alerts and career tips delivered to your inbox.
              </p>
            </div>
            <div className="w-full">
              <div className="flex flex-col xs:flex-row gap-2 sm:gap-3 max-w-md mx-auto lg:mx-0 lg:max-w-none">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm min-w-0"
                />
                <button className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-xs sm:text-sm whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Bottom */}
        <div className="border-t border-gray-800 py-4 sm:py-6">
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-between md:items-center">
            
            {/* Social Media Links */}
            <div className="flex flex-col xs:flex-row items-center xs:space-x-4 space-y-2 xs:space-y-0">
              <span className="text-gray-400 text-xs sm:text-sm">Follow us:</span>
              <div className="flex space-x-3 sm:space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors p-1">
                  <FacebookIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors p-1">
                  <TwitterIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors p-1">
                  <LinkedInIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors p-1">
                  <InstagramIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-end items-center gap-3 sm:gap-6 text-xs sm:text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-800">
            <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:justify-between md:items-center text-xs sm:text-sm text-gray-400 text-center md:text-left">
              <p>© {currentYear} JobHub. All rights reserved.</p>
              <p className="text-xs">
                Aggregating opportunities from LinkedIn, Indeed, Upwork, Freelancer & more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;