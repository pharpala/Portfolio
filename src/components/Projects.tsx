
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

// Project categories
const categories = ['All', 'Frontend', 'AI', 'UI/UX'];

// Project data
const projectsData = [
  {
    id: 1,
    title: 'AI Design Assistant',
    category: 'AI',
    tags: ['React', 'TensorFlow.js', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'An AI-powered design tool that helps generate UI components based on text prompts.',
    link: '#'
  },
  {
    id: 2,
    title: 'E-commerce Dashboard',
    category: 'Frontend',
    tags: ['TypeScript', 'Next.js', 'shadcn/ui'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'A responsive admin dashboard for e-commerce platforms with real-time analytics.',
    link: '#'
  },
  {
    id: 3,
    title: 'Design System Documentation',
    category: 'UI/UX',
    tags: ['Storybook', 'React', 'Figma'],
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'A comprehensive documentation site for a scalable design system.',
    link: '#'
  },
  {
    id: 4,
    title: 'AI Content Generator',
    category: 'AI',
    tags: ['OpenAI API', 'React', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'An AI tool that generates marketing copy and content based on product descriptions.',
    link: '#'
  },
  {
    id: 5,
    title: 'Portfolio Template',
    category: 'Frontend',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'A customizable portfolio template for developers and designers.',
    link: '#'
  },
  {
    id: 6,
    title: 'UX Research Platform',
    category: 'UI/UX',
    tags: ['Figma', 'Prototyping', 'User Testing'],
    image: 'https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'A platform for conducting and analyzing UX research with participants.',
    link: '#'
  }
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground">
            A showcase of my recent work spanning frontend development, AI integration, and UI/UX design.
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
                  : 'bg-white/5 hover:bg-white/10'
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card group"
            >
              <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs bg-black/30 px-2 py-1 rounded-full backdrop-blur-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <h3 className="font-medium text-lg mb-1 flex items-center">
                {project.title}
                <span className="ml-auto text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={16} />
                </span>
              </h3>

              <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                {project.description}
              </p>

              <div className="flex justify-between items-center pt-2">
                <span className="text-xs px-2 py-1 bg-white/5 rounded-full">{project.category}</span>
                <a
                  href={project.link}
                  className="text-primary text-sm hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
