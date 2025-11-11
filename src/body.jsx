import React, { useState } from 'react';

// Simple SVG Icons
const SearchIcon = ({ className = "h-4 w-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const FilterIcon = ({ className = "h-4 w-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
  </svg>
);

const MapPinIcon = ({ className = "h-4 w-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ClockIcon = ({ className = "h-4 w-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const DollarIcon = ({ className = "h-4 w-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
  </svg>
);

const BriefcaseIcon = ({ className = "h-4 w-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 002 2M8 6v2a2 2 0 01-2 2m0 0H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2v-6a2 2 0 00-2-2h-2m-6 0a2 2 0 00-2 2v0a2 2 0 002 2h2a2 2 0 002-2v0a2 2 0 00-2-2H9z" />
  </svg>
);

const HeartIcon = ({ className = "h-4 w-4", filled = false }) => (
  <svg className={className} fill={filled ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const XIcon = ({ className = "h-4 w-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const JobAggregatorBody = () => {
  // States
  const [selectedSkills, setSelectedSkills] = useState(['JavaScript', 'React']);
  const [showFilters, setShowFilters] = useState(false);
  const [savedJobs, setSavedJobs] = useState(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    jobType: '',
    location: '',
    experience: '',
    salary: '',
    remote: false
  });

  // Sample data
  const availableSkills = [
    'JavaScript', 'React', 'Python', 'Node.js', 'TypeScript', 'Java', 'PHP', 
    'Angular', 'Vue.js', 'CSS', 'HTML', 'MongoDB', 'SQL', 'AWS', 'Docker',
    'Git', 'GraphQL', 'Redux', 'Express.js', 'Next.js'
  ];

  const jobData = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '$80k - $120k',
      remote: true,
      postedTime: '2 hours ago',
      skills: ['React', 'JavaScript', 'CSS', 'TypeScript'],
      description: 'Build responsive web applications using modern frontend technologies...',
      logo: '🚀',
      source: 'LinkedIn'
    },
    {
      id: 2,
      title: 'Python Backend Developer',
      company: 'DataFlow Systems',
      location: 'Remote',
      type: 'Full-time',
      experience: '3-5 years',
      salary: '$90k - $140k',
      remote: true,
      postedTime: '4 hours ago',
      skills: ['Python', 'Django', 'PostgreSQL', 'AWS'],
      description: 'Develop scalable backend systems and APIs for data processing...',
      logo: '💻',
      source: 'Indeed'
    },
    {
      id: 3,
      title: 'UI/UX Design Intern',
      company: 'Creative Studio',
      location: 'New York, NY',
      type: 'Internship',
      experience: '0-1 years',
      salary: '$20 - $25/hour',
      remote: false,
      postedTime: '6 hours ago',
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
      description: 'Create intuitive user interfaces and enhance user experience...',
      logo: '🎨',
      source: 'Upwork'
    },
    {
      id: 4,
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      location: 'Austin, TX',
      type: 'Full-time',
      experience: '2-6 years',
      salary: '$75k - $110k',
      remote: true,
      postedTime: '1 day ago',
      skills: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      description: 'Work on both frontend and backend development for our SaaS platform...',
      logo: '⚡',
      source: 'AngelList'
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      company: 'CloudTech Solutions',
      location: 'Seattle, WA',
      type: 'Contract',
      experience: '4-8 years',
      salary: '$60 - $80/hour',
      remote: true,
      postedTime: '2 days ago',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
      description: 'Manage cloud infrastructure and deployment pipelines...',
      logo: '☁️',
      source: 'Freelancer'
    },
    {
      id: 6,
      title: 'Mobile App Developer',
      company: 'MobileFirst Inc.',
      location: 'Los Angeles, CA',
      type: 'Part-time',
      experience: '1-3 years',
      salary: '$40k - $60k',
      remote: false,
      postedTime: '3 days ago',
      skills: ['React Native', 'Flutter', 'iOS', 'Android'],
      description: 'Develop cross-platform mobile applications for iOS and Android...',
      logo: '📱',
      source: 'LinkedIn'
    }
  ];

  // Functions
  const addSkill = (skill) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const removeSkill = (skill) => {
    setSelectedSkills(selectedSkills.filter(s => s !== skill));
  };

  const toggleSaveJob = (jobId) => {
    const newSavedJobs = new Set(savedJobs);
    if (savedJobs.has(jobId)) {
      newSavedJobs.delete(jobId);
    } else {
      newSavedJobs.add(jobId);
    }
    setSavedJobs(newSavedJobs);
  };

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-6 lg:py-8">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
            Find Your Perfect Job
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            Discover opportunities from top platforms like LinkedIn, Indeed, Upwork, and more - all in one place
          </p>
        </div>

        {/* Skills Input Section */}
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
            Your Skills
          </h2>
          
          {/* Selected Skills */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {selectedSkills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-xs sm:text-sm font-medium rounded-full"
                >
                  {skill}
                  <button
                    onClick={() => removeSkill(skill)}
                    className="ml-2 hover:text-blue-600"
                  >
                    <XIcon className="h-3 w-3" />
                  </button>
                </span>
              ))}
              {selectedSkills.length === 0 && (
                <p className="text-gray-500 text-sm">No skills selected. Add some skills to get better job recommendations.</p>
              )}
            </div>
          </div>

          {/* Add Skills */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Add Skills
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
              {availableSkills
                .filter(skill => !selectedSkills.includes(skill))
                .slice(0, 12)
                .map((skill) => (
                <button
                  key={skill}
                  onClick={() => addSkill(skill)}
                  className="px-3 py-2 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors text-center"
                >
                  + {skill}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="mb-6 sm:mb-8">
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
            
            {/* Search Bar */}
            <div className="mb-4 sm:mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for jobs, companies, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                />
                <SearchIcon className="absolute left-3 top-3.5 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
              </div>
            </div>

            {/* Filter Toggle */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-base sm:text-lg font-medium text-gray-800">
                Filters
              </h3>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center space-x-2 px-3 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <FilterIcon className="h-4 w-4" />
                <span className="text-sm">Filters</span>
              </button>
            </div>

            {/* Filters */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 ${!showFilters ? 'hidden lg:grid' : ''}`}>
              
              {/* Job Type */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  Job Type
                </label>
                <select
                  value={filters.jobType}
                  onChange={(e) => handleFilterChange('jobType', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">All Types</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>

              {/* Location */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="Any location"
                  value={filters.location}
                  onChange={(e) => handleFilterChange('location', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Experience */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  Experience
                </label>
                <select
                  value={filters.experience}
                  onChange={(e) => handleFilterChange('experience', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Any Level</option>
                  <option value="0-1">Entry Level (0-1 years)</option>
                  <option value="2-4">Mid Level (2-4 years)</option>
                  <option value="5+">Senior Level (5+ years)</option>
                </select>
              </div>

              {/* Salary */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  Salary Range
                </label>
                <select
                  value={filters.salary}
                  onChange={(e) => handleFilterChange('salary', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Any Salary</option>
                  <option value="0-50k">$0 - $50k</option>
                  <option value="50k-100k">$50k - $100k</option>
                  <option value="100k+">$100k+</option>
                </select>
              </div>

              {/* Remote */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  Work Style
                </label>
                <div className="flex items-center space-x-2 mt-2">
                  <input
                    type="checkbox"
                    id="remote"
                    checked={filters.remote}
                    onChange={(e) => handleFilterChange('remote', e.target.checked)}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="remote" className="text-sm text-gray-700">
                    Remote only
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4 sm:mb-6">
          <p className="text-sm sm:text-base text-gray-600">
            Showing <span className="font-semibold">{jobData.length}</span> job opportunities
            {selectedSkills.length > 0 && (
              <span> matching your skills: <span className="font-medium text-blue-600">{selectedSkills.join(', ')}</span></span>
            )}
          </p>
        </div>

        {/* Job Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {jobData.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 sm:p-6 border border-gray-200"
            >
              
              {/* Job Header */}
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <div className="flex items-center space-x-3 flex-1 min-w-0">
                  <div className="text-2xl sm:text-3xl">{job.logo}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 truncate">
                      {job.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 truncate">
                      {job.company}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 ml-2">
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full whitespace-nowrap">
                    {job.source}
                  </span>
                  <button
                    onClick={() => toggleSaveJob(job.id)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <HeartIcon 
                      className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-red-500" 
                      filled={savedJobs.has(job.id)}
                    />
                  </button>
                </div>
              </div>

              {/* Job Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4 text-sm">
                <div className="flex items-center text-gray-600">
                  <MapPinIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                  <span className="truncate">{job.location}</span>
                  {job.remote && (
                    <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                      Remote
                    </span>
                  )}
                </div>
                <div className="flex items-center text-gray-600">
                  <BriefcaseIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                  <span className="truncate">{job.type}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <DollarIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                  <span className="truncate">{job.salary}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <ClockIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                  <span className="truncate">{job.postedTime}</span>
                </div>
              </div>

              {/* Job Description */}
              <p className="text-sm text-gray-700 mb-3 sm:mb-4 line-clamp-2">
                {job.description}
              </p>

              {/* Skills */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {job.skills.slice(0, 4).map((skill) => (
                    <span
                      key={skill}
                      className={`px-2 py-1 text-xs rounded-full ${
                        selectedSkills.includes(skill)
                          ? 'bg-blue-100 text-blue-800 font-medium'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                  {job.skills.length > 4 && (
                    <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                      +{job.skills.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <button className="flex-1 bg-blue-600 text-white py-2 sm:py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                  Apply Now
                </button>
                <button className="flex-1 sm:flex-initial bg-gray-100 text-gray-700 py-2 sm:py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8 sm:mt-12">
          <button className="bg-blue-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base font-medium">
            Load More Jobs
          </button>
        </div>

      </div>
    </div>
  );
};

export default JobAggregatorBody;