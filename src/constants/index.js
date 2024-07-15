import {
    mobile,
    backend,
    creator,
    web,
    hp,
    teachify,
    gdsc,
    mint,
    webacy,
    bluelantern,
    portfolio,
    pool,
    cepssc,
    basil,
    blank,
    vince,
  } from "../assets";
  
  export const navLinks = [
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
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Automations Developer",
      icon: mobile,
    },
    {
      title: "Backend Engineer",
      icon: backend,
    },
    {
      title: "Technical Writer",
      icon: creator,
    },
  ];
  
  const experiences = [
    {
      title: "Blockchain & Web3 Security Researcher",
      company_name: "Webacy",
      icon: webacy,
      iconBg: "#36013F",
      date: "Jul 2024 - Aug 2024",
      points: [
        ],
    },
    {
      title: "Software Developer Intern",
      company_name: "Teachify",
      icon: teachify,
      iconBg: "#383E56",
      date: "Jan 2024 - Apr 2024",
      points: [
        "At Teachify, I led enhacements on the company's website using React, while also contributing to the documentation of design updates. This hands-on experience in a fast-paced environment allowed me to significantly enhance my coding skills.",
      ],
    },
    {
      title: "Software & Automations Developer",
      company_name: "Google Developers Student Club",
      icon: gdsc,
      iconBg: "#E6DEDD",
      date: "Sep 2023 - Apr 2024",
      points: [
        "I've learned so much from being a part of GDSC! By being able to organize workshops and events, I've helped over 250+ hackers learn new skills and grow their careers. I'm so grateful for everything I've experienced with the team, and I can't wait to see what the future holds!",
      ],
    },
    {
      title: "Sales Associate",
      company_name: "The Mint Company",
      icon: mint,
      iconBg: "#383E56",
      date: "May 2023 - Aug 2023",
      points: [
        "As my first real-world experience, this opportunity enabled me to understand the importance of team-work and providing value with your actions. My key takeaway is the major improvement in my communication skills. I wouldn't be as big of an extrovert without them! ",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Pranay stood in the top 1% of my Data Structures course thanks to his high quality programming solutions.",
      name: "Andrew Hamilton-Wright",
      designation: "Professor",
      company: "University of Guelph",
      image: blank,
    },
    {
      testimonial:
        "Consistently delivering high-quality work and adapting quickly to changes, Pranay stood out from the rest of his peers.",
      name: "Basil Yusuf",
      designation: "Software Engineer",
      company: "Deloitte",
      image: basil,
    },
    {
      testimonial:
        "Pranay has all the skills to be a great SWE, he's a hardworking and reliable individual with a strong passion for developing.",
      name: "Vince Moschella",
      designation: "Software Engineer",
      company: "Ansys",
      image: vince,
    },
  ];
  
  const projects = [
    {
      name: "CEPSSC Website",
      description:
        "The College of Engineering and Physical Sciences Student Council official website, focusing on responsive design and user-friendly navigation. The project showcases various forms and documents, meeting minutes, and other resources for students.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "APIs",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: cepssc,
      source_code_link: "https://github.com/pharpala/cepssc",
      live_demo_link: "https://cepssc.vercel.app/",
    },
    {
      name: "Blue Lantern",
      description:
        "Your sophisticated React-based portal for real-time crypto prices and market insights. The application allows users to search and analyse over 200+ coins, view market analysis, and get detailed information.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "API",
          color: "green-text-gradient",
        },
        {
          name: "vercel",
          color: "pink-text-gradient",
        },
      ],
      image: bluelantern,
      source_code_link: "https://github.com/pharpala/Blue-Lantern",
      live_demo_link: "https://blue-lantern.vercel.app/",
    },
    {
      name: "Portfolio",
      description:
        "You are looking at it right now! This React and Three.js project effectively displays my strongest assets in it's full splendor, from 3D models to vivid, dynamic colors, each element has been created to represent a piece of me.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "three.js",
          color: "violet-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/pharpala/Portfolio",
      live_demo_link: "#",
    },  
    {
      name: "8-Ball Pool ",
      description:
        "This full-stack web application simulates a pool game. The game features a realistic physics C engine, a Python back-end with a sprinkle of JavaScript, allowing players to enjoy a fun and engaging experience.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "C",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: pool,
      source_code_link: "https://github.com/pharpala/8-Ball",
      live_demo_link: "https://github.com/pharpala/8-Ball",
    },
  ];
  
  export { services, experiences, testimonials, projects };