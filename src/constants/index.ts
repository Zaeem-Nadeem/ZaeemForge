import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  fitviz,
  aiVideoGenerator,
  aiCodeReviewer,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "FrontEnd Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "JavaScript TypeScript Developer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Frontend Developer",
    companyName: "YoungDev",
    icon: web,
    iconBg: "#383E56",
    date: "May 2023 - June 2023",
    points: [
      "Developed responsive web applications using modern frontend technologies like React.js and TypeScript.",
      "Collaborated with design teams to implement pixel-perfect UI/UX designs.",
      "Optimized application performance and ensured cross-browser compatibility.",
      "Participated in code reviews and contributed to team development best practices.",
    ],
  },
  {
    title: "Intern",
    companyName: "Sparkosol Multan",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "July 2025 - August 2025",
    points: [
      "Gained hands-on experience in software development lifecycle and agile methodologies.",
      "Assisted in developing and testing web applications using modern technologies.",
      "Learned industry best practices and collaborated with experienced developers.",
      "Contributed to team projects and gained valuable mentorship experience.",
    ],
  },
  {
    title: "Full Stack Developer",
    companyName: "ForthLogic",
    icon: backend,
    iconBg: "#383E56",
    date: "July 2025 - Present",
    points: [
      "Developing full-stack web applications using React.js, Node.js, and modern web technologies.",
      "Designing and implementing RESTful APIs and database schemas for scalable applications.",
      "Collaborating with cross-functional teams to deliver high-quality software solutions.",
      "Mentoring junior developers and participating in architectural decision-making processes.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "FitViz - Virtual Try-On Glasses",
    description:
      "AI-powered virtual try-on application for eyewear using augmented reality technology. Users can virtually try on glasses in real-time with perfect accuracy, powered by advanced AI technology including TensorFlow.js for face detection and Three.js for 3D rendering.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tensorflow",
        color: "pink-text-gradient",
      },
      {
        name: "supabase",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
    ],
    image: fitviz,
    sourceCodeLink: "https://github.com/Zaeem-Nadeem/virtualTryOnFyp",
  },
  {
    name: "AI Video Generator",
    description:
      "Full-stack MERN application that generates marketing videos and real estate property tours based on AI prompts. Features include video script generation, parameter validation, and RESTful API endpoints for both real estate and marketing video creation.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "ai",
        color: "green-text-gradient",
      },
    ],
    image: aiVideoGenerator,
    sourceCodeLink: "https://github.com/Zaeem-Nadeem/ai-video-generator",
  },
  {
    name: "AI Code Reviewer",
    description:
      "Full-stack application that provides AI-powered code review functionality. Features intelligent code analysis, automated review suggestions, and comprehensive feedback for developers to improve code quality and maintainability.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "ai",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "fullstack",
        color: "green-text-gradient",
      },
    ],
    image: aiCodeReviewer,
    sourceCodeLink: "https://github.com/Zaeem-Nadeem/ai-code-reviewer",
  },
];

export { services, technologies, experiences, testimonials, projects };
