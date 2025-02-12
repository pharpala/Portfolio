import {
    mobile,
    backend,
    creator,
    web,
    teachify,
    gdsc,
    mint,
    webacy,
    uofg,
    bluelantern,
    portfolio,
    pool,
    cepssc,
    otg,
    hardik,
    grilling,
    roasting,
    basil,
    blank,
    vince,
    studentsphere
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
      title: "Data Structures & Computing Teaching Assistant",
      company_name: "University of Guelph",
      icon: uofg,
      iconBg: "#ffffff",
      date: "Sep 2024 - Apr 2025",
      points: [
        "I love teaching! As a TA, I help students during my labs and office hours with their implementation of data structures. From a student who initially struggled in the course, I am grateful to be able to effectively teach some of these concepts now, as I know exactly where students might get stuck or where they might need help, really a full-circle moment for me!",
        ],
    },
    {
      title: "Blockchain & Web3 Security Researcher",
      company_name: "Webacy",
      icon: webacy,
      iconBg: "#36013F",
      date: "Jul 2024 - Aug 2024",
      points: [
        "My work consisted of research and implementing security measures for the company's future projects. What a great experience to dive deep into the blockchain industry and the importance of security measures in the space!",
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
      name: "The Student Sphere",
      description:
        "McHacks Hackathon winner! Student Sphere is a platform that provide students with tools to make off-campus living easier. Check out real reviews from your classmates, heat maps for the best places to live, and an AI Lease Checker to make sure you're getting the best deal!",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "green-text-gradient",
        },
        {
          name: "OpenAI",
          color: "black-gradient",
        },
      ],
      image: studentsphere,
      source_code_link: "https://github.com/pharpala",
      live_demo_link: "https://studentsphere.co/",
    },
    {
      name: "Out The Groupchat",
      description:
        "Plan the fun! I built a sharing calendar app that makes organizing events with friends a breeze. With drag-and-drop scheduling, real-time updates, and an easy share option, this app turns planning hangouts into a fun experience, without the back-and-forth texts!",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "Google Cloud",
          color: "green-text-gradient",
        },
        {
          name: "Firebase",
          color: "pink-text-gradient",
        },
      ],
      image: otg,
      source_code_link: "https://github.com/pharpala",
      live_demo_link: "https://outthegroupchat.ca/",
    },
    {
      name: "Grilling.AI",
      description:
        "You ever wondered who would win a rap battle between a plate and a bowl? Me neither, but my 'brainrot hackathon' project Grilling.ai has the answer. If that wasn't enough, we added the Roast Room, add a photo and be ready to get demolished by our AI fueled by pure hate.",
      tags: [
        {
          name: "OpenAI",
          color: "blue-text-gradient",
        },
        {
          name: "AWS",
          color: "green-text-gradient",
        },
        {
          name: "TypeScript",
          color: "pink-text-gradient",
        },
      ],
      image: roasting,
      source_code_link: "https://github.com/JashanjotP/rap.ai",
      live_demo_link: "https://rap-ai-jashanjotps-projects.vercel.app/",
    },
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
      live_demo_link: "https://cepssc.com/",
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
    /*
    {
      name: "8-Ball Pool - School Project",
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
    */
    {
      name: "Flask Database Application",
      description:
        "This app shows off what Flask can do as a web framework and PostgreSQL as a database powerhouse! It's like a friendly front desk for a Companies Database, packed with tools to manage data and keep users engaged.",
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
    },/*
    {
      name: "Real Estate Agent Portfolio",
      description:
        "This full-stack web application simulates a pool game. The game features a realistic physics C engine, a Python back-end with a sprinkle of JavaScript, allowing players to enjoy a fun and engaging experience.",
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
      image: hardik,
      source_code_link: "https://github.com/pharpala",
      live_demo_link: "https://hardikmishra.vercel.app/",
    },
    {
      name: "Blue Lantern - Track your Crypto",
      description:
        "Your React-based portal for real-time crypto prices and market insights. The application allows users to search and analyse over 200+ coins, view market analysis, and get detailed information, so enjoy the boom!",
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
          name: "Vercel",
          color: "pink-text-gradient",
        },
      ],
      image: bluelantern,
      source_code_link: "https://github.com/pharpala/Blue-Lantern",
      live_demo_link: "https://blue-lantern.vercel.app/",
    },*/
  ];
  
  export { services, experiences, testimonials, projects };