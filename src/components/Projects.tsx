
import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpRight, Cpu, Code, Palette, TerminalSquare, Sparkles } from 'lucide-react';
import ProjectCard from './ProjectCard';

// Project categories
const categories = ['All', 'Frontend', 'AI', 'UI/UX'];

// Project data
const projectsData = [
  {
    id: 1,
    title: 'Neural Design System',
    category: 'AI',
    tags: ['React', 'TensorFlow.js', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'AI-powered design system that adapts to user behavior and interaction patterns in real-time.',
    link: '#'
  },
  {
    id: 2,
    title: 'Immersive Analytics',
    category: 'Frontend',
    tags: ['TypeScript', 'Three.js', 'GSAP'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'A 3D data visualization dashboard with interactive elements and spatial data analysis.',
    link: '#'
  },
  {
    id: 3,
    title: 'Gestural Interface',
    category: 'UI/UX',
    tags: ['React', 'TensorFlow.js', 'MediaPipe'],
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Touchless interaction system using computer vision to detect and respond to hand gestures.',
    link: '#'
  },
  {
    id: 4,
    title: 'Voice Pattern AI',
    category: 'AI',
    tags: ['OpenAI API', 'React', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Voice-based UI system that adapts to user speech patterns and contextual commands.',
    link: '#'
  },
  {
    id: 5,
    title: '3D Portfolio Experience',
    category: 'Frontend',
    tags: ['React', 'Three.js', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Interactive 3D portfolio with WebGL-powered transitions and effects.',
    link: '#'
  },
  {
    id: 6,
    title: 'Neurodesign Lab',
    category: 'UI/UX',
    tags: ['React', 'Brain.js', 'CSS Houdini'],
    image: 'https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Experimental design lab using neurological feedback to create personalized visual experiences.',
    link: '#'
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
      className="py-20 lg:py-32 relative"
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
          <div className="inline-flex items-center justify-center p-1 px-3 bg-white/5 backdrop-blur-sm rounded-full mb-4 gap-2 border border-white/10">
            <Cpu size={14} className="text-primary" />
            <span className="text-xs">FEATURED WORK</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold relative inline-block">
            <span className="text-gradient glow-text">Innovative</span> Projects
            <div className="absolute -top-6 -right-6 text-accent rotating opacity-70">
              <Sparkles size={24} />
            </div>
          </h2>
          
          <p className="text-muted-foreground max-w-lg mx-auto">
            Pushing the boundaries of what's possible with code and imagination.
            Explore my selected works combining frontend wizardry with AI innovation.
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
              {category === 'UI/UX' && <Palette size={14} className="inline mr-2" />}
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
            "React", "TypeScript", "Three.js", "Tailwind CSS", "GSAP", "Next.js", 
            "TensorFlow", "WebGL", "Framer Motion", "OpenAI", "Firebase", "GraphQL"
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
