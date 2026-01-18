const TITLES = ["Frontend Developer", "Backend Engineer", "Full Stack Intern", "UI/UX Designer", "DevOps Intern", "React Developer", "Data Analyst"];
const COMPANIES = ["TechFlow", "Innovate AI", "Cyber Systems", "CloudScale", "DevHouse", "BlueChip"];
const SOURCES = ["LinkedIn", "Upwork", "Freelancer", "Wellfound", "Indeed"];
const SKILL_POOLS = ["React", "JavaScript", "Python", "Node.js", "Tailwind", "MongoDB", "Java", "C++", "Figma"];

export const generateDummyJobs = (count = 5000) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    title: TITLES[Math.floor(Math.random() * TITLES.length)],
    company: COMPANIES[Math.floor(Math.random() * COMPANIES.length)],
    source: SOURCES[Math.floor(Math.random() * SOURCES.length)],
    // Assign 3 random skills to each job
    skills: SKILL_POOLS.sort(() => 0.5 - Math.random()).slice(0, 3),
    postedAt: "Recently",
    link: "#"
  }));
};