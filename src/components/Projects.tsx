
import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpRight, Cpu, Code, Palette, TerminalSquare, Sparkles } from 'lucide-react';
import ProjectCard from './ProjectCard';

// Project categories
const categories = ['All', 'Frontend', 'AI'];

// Project data
const projectsData = [
  {
    id: 1,
    title: 'The Student Sphere',
    category: 'AI',
    tags: ['TypeScript', 'OpenAI', 'Python', 'Google Maps'],
    image: '/studentsphere.jpg',
    description: 'A student housing platform with AI-powered lease checks, verified reviews, and interactive heatmaps to help students find safe, affordable, and high-value rentals.',
    link: 'https://studentsphere.co/',
    github: "https://github.com/JashanjotP/mchacks12"
  },
  {
    id: 2,
    title: 'Out The Groupchat',
    category: 'Frontend',
    tags: ['TypeScript', 'Firebase', 'Google Cloud'],
    image: '/otg.png',
    description: 'A social event planner that makes organizing with friends easy, with real-time updates, shared events, and a slick, mobile-friendly UI.',
    link: 'https://www.outthegroupchat.ca/',
    github: 'https://github.com/pharpala/scheduler'
  },
  {
    id: 3,
    title: 'CEPSSC Official Website',
    category: 'Frontend',
    tags: ['React', 'REST APIs', 'JavaScript'],
    image: '/cepssc.png',
    description: 'Used by 1000+ students, the website for the College of Engineering & Physical Sciences Student Council, built to improve engagement and showcase events, resources, and initiatives.',
    link: 'https://cepssc.com/',
    github: 'https://github.com/pharpala/cepssc'
  },
  {
    id: 4,
    title: 'Grilling.ai',
    category: 'AI',
    tags: ['OpenAI', 'AWS', 'TypeScript'],
    image: '/grilling.ai.png',
    description: 'A fun AI web app that roasts your selfies using OpenAI, built with a custom TypeScript frontend and deployed on AWS.',
    link: 'https://rap-ai-jashanjotps-projects.vercel.app/',
    github: 'https://github.com/JashanjotP/rap.ai'
  },
  {
    id: 5,
    title: '3D Portfolio',
    category: 'Frontend',
    tags: ['React', 'Three.js', 'Framer Motion'],
    image: '/portfolio.png',
    description: 'An interactive 3D developer portfolio with smooth animations built to showcase skills and projects in an immersive way.',
    link: '#',
    github: 'https://github.com/pharpala/Portfolio'
  },
  {
    id: 6,
    title: 'Real Estate Agent Website',
    category: 'Frontend',
    tags: ['React', 'TailwindCSS', 'TypeScript'],
    image: '/real state.png',
    description: 'A sleek, responsive website for a real estate agent, designed to highlight listings, capture leads, and build client trust with clean visuals and fast performance.',
    link: 'https://hardikmishra.vercel.app/',
    github: 'https://github.com/pharpala/real-estate'
  }
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  
  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === activeCategory);
    
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };
    
    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section 
      id="projects" 
      className="py-20 lg:py-22 relative"
      ref={sectionRef}
    >
      {/* Dynamic background gradient following cursor */}
      <div 
        className="absolute blur-[100px] rounded-full bg-gradient-to-r from-primary/20 via-accent/20 to-purple-500/20 w-[40vw] h-[40vw] opacity-50 transition-all duration-300 pointer-events-none -z-1"
        style={{
          left: `${mousePosition.x - 300}px`,
          top: `${mousePosition.y - 300}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
      
      {/* Animated background grid */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)]">
          {Array.from({ length: 400 }).map((_, i) => (
            <div 
              key={i} 
              className="border border-white/5"
              style={{
                opacity: Math.random() * 0.5 + 0.2,
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold relative inline-block">
            <span className="text-gradient glow-text">Innovative</span> Projects
            <div className="absolute -top-6 -right-6 text-accent rotating opacity-70">
              <Sparkles size={24} />
            </div>
          </h2>
          
          <p className="text-muted-foreground max-w-lg mx-auto">
            Pushing the boundaries of what's possible with code and imagination.
            Explore some of my work, a combination of frontend magic with AI.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                'px-5 py-2 rounded-full text-sm transition-all',
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-white/5 hover:bg-white/10 backdrop-blur-sm'
              )}
            >
              {category === 'All' && <TerminalSquare size={14} className="inline mr-2" />}
              {category === 'Frontend' && <Code size={14} className="inline mr-2" />}
              {category === 'AI' && <Cpu size={14} className="inline mr-2" />}
              {category}
            </button>
          ))}
        </div>

        {/* Projects grid with custom cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {/* View all projects */}
        <div className="flex justify-center mt-12">
          <a 
            href="#" 
            className="animated-border group"
          >
            <div className="btn-neo">
              View All Projects
              <ArrowUpRight size={16} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </a>
        </div>
      </div>
      
      {/* Tech Marquee */}
      <div className="mt-24 overflow-hidden bg-white/5 backdrop-blur-lg border-y border-white/10 py-8">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array(2).fill([
            "React", "TypeScript", "Three.js", "Tailwind CSS", "AWS", "Next.js", 
            "Python", "PostgreSQL", "Framer Motion", "OpenAI", "Firebase", "Google Cloud"
          ]).flat().map((tech, i) => (
            <div key={i} className="mx-8 flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
              <span className="text-white/70 text-xl font-medium tracking-wider">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
