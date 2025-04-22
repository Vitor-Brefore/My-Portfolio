const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 5, suffix: "+", label: "Satisfied Clients" },
  { value: 5, suffix: "+", label: "Completed Projects" },
  { value: 100, suffix: "%", label: "Client Recommendation Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Database Developer",
    modelPath: "/models/firebase-transformed.glb",
    scale: 2,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Stylist Developer",
    modelPath: "/models/tailwindcss-transformed.glb",
    scale: 1.6,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Vitor’s PokéTips app is a creative and well-structured Pokédex that displays Pokémon data interactively. The attention to UI details and type matchup logic was impressive.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Frontend Developer — PokéTips App",
    date: "May 2024 - Setember 2024",
    responsibilities: [
      "Developed an interactive Pokédex using React with features like evolution chains, comparisons, and stats overview.",
      "Implemented responsive layouts with clean UI to present detailed Pokémon information.",
      "Designed reusable components for moves, type weaknesses, and status indicators.",
    ],
  },
  {
    review:
      "Vitor’s SkillsForge project demonstrates creativity and practical frontend architecture. He successfully designed a simulation tool for mock interviews powered by AI concepts.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Frontend Developer — SkillsForge (AI Interview Helper)",
    date: "March 2025 - April 2025",
    responsibilities: [
      "Designed and built a mock interview simulation UI using React and TailwindCSS.",
      "Created a dashboard layout with session tracking and user feedback components.",
      "Explored interactive flows that mimic real-world interview preparation platforms.",
    ],
  },
  {
    review:
      "Vitor built a user-friendly movie database app integrating the TMDB API. His focus on intuitive design and smooth user experience resulted in a highly engaging project.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Frontend Developer — Movies Database (TMDB API)",
    date: "February 2025 - March 2025",
    responsibilities: [
      "Developed a movie search and discovery app using React, Firebase, TailwindCSS, and TMDB API.",
      "Implemented search functionality with real-time suggestions and movie detail views.",
      "Focused on responsive design and performance optimization to ensure cross-device usability.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Harry Plentz",
    mentions: "@harry06s",
    review:
      "I can’t say enough good things about Vitor. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Gian Roberto",
    mentions: "@kysozin",
    review:
      "Working with Vitor was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Gabriel Monteiro",
    mentions: "@monteiro_ht",
    review:
      "Collaborating with Vitor was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Vitor's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Vitor is the ideal partner.",
    imgPath: "/images/client3.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    url: "https://www.instagram.com/vitor_brefore/",
  },
  {
    name: "github",
    imgPath: "/images/github.png",
    url: "https://github.com/Vitor-Brefore",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/vitor-brefore/",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
