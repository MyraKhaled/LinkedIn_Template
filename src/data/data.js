export const currentUser = {
  name: "Amyra Khaled",
  headline: "Full Stack Developer | Software Engineer Student | MOS Certified...",
  location: "Gabès",
  company: "Lotus INFO",
  profileViewers: 25,
};

export const navItems = [
  { id: "home", label: "Home", icon: "Home", active: true },
  { id: "network", label: "Network", icon: "Users" },
  { id: "jobs", label: "Jobs", icon: "Briefcase" },
  { id: "messaging", label: "Messaging", icon: "MessageSquare" },
  { id: "notifications", label: "Notifications", icon: "Bell", badge: 4 },
];

export const shortcuts = [
  { label: "Saved items", icon: "Bookmark" },
  { label: "Groups", icon: "UsersRound" },
  { label: "Newsletters", icon: "Newspaper" },
  { label: "Events", icon: "CalendarDays" },
];

export const puzzles = [
  { name: "Zip #567", info: "5 connections played", color: "#e8643c" },
  { name: "Wend #119", info: "1 connection played", color: "#f5c542" },
  { name: "Patches #202", info: "1 connection played", color: "#3b82f6" },
  { name: "Mini Sudoku #420", info: "The classic game, made mini", color: "#4caf7a" },
  { name: "Crossclimb #310", info: "Be the first to play", color: "#8e6bd8" },
  { name: "Queens #205", info: "2 connections played", color: "#e0457b" },
];

export const suggestions = [
  { name: "Kavya Patel", info: "Marketing Specialist", color: "#8d6e63" },
  { name: "Free Online Courses With ...", info: "Company • E-Learning Providers", color: "#90a4ae", square: true },
  { name: "Khaled Aouij", info: "Founder & CEO · Media | TravelTech | ...", color: "#5c6bc0" },
];

export const posts = [
  {
    id: 1,
    type: "feed",
    commentedBy: { name: "wiem garma", color: "#b0857a" },
    author: { name: "Kavya Patel", title: "Marketing Specialist", degree: "3rd+", premium: true, color: "#8d6e63" },
    age: "1d",
    text: ["NOW HIRING | ENTRY-LEVEL IT OPPORTUNITIES | CANADA 🇨🇦"],
    preview: "Are you a recent graduate or early-career IT professional looking to start your…",
    likes: 13,
    comments: 56,
    topComment: {
      author: "wiem garma",
      degree: "1st",
      title: "Software Engineering Student | Full Stack Web Developer .Net / Spring boot / ...",
      age: "6h",
      text: "Interested",
      color: "#b0857a",
      more: 55,
    },
  },
  {
    id: 2,
    type: "promoted",
    author: { name: "Work in Ottawa", followers: "16,523 followers", color: "#0b6b4b", square: true },
    preview: "🟢 Ready to take your tech career global? Start in Ottawa.…",
  },
];
