
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    category: string;
    tags: string[];
    image: string;
    description: string;
    link: string;
    github: string;
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={cn(
        "project-card group relative overflow-hidden",
        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/20 before:to-accent/20 before:opacity-0 before:transition-opacity before:duration-300",
        "hover:before:opacity-100"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent",
          "flex items-end justify-start p-4",
          "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        )}>
          <div className="flex gap-2 flex-wrap">
            {project.tags.map((tag, i) => (
              <span key={i} className="text-xs bg-black/30 px-2 py-1 rounded-full backdrop-blur-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        {/* Hover effects */}
        <div className={cn(
          "absolute inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity",
          "transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300"
        )}>
          <div className="flex gap-3">
            <a href={project.link} className="glass p-2 rounded-full hover:bg-white/20 transition-colors" target="_blank" rel="noopener noreferrer">
              <ExternalLink size={18} />
            </a>
            <a href={project.github} className="glass p-2 rounded-full hover:bg-white/20 transition-colors" target="_blank" rel="noopener noreferrer">
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <h3 className="font-medium text-lg mb-1 flex items-center group-hover:text-primary transition-colors duration-300">
          {project.title}
          <span className={cn(
            "ml-auto text-primary",
            "opacity-0 group-hover:opacity-100 transition-opacity",
            "transform translate-x-2 group-hover:translate-x-0 transition-transform duration-300"
          )}>
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
            className="text-primary text-sm hover:underline inline-flex items-center gap-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
            <ArrowUpRight size={12} />
          </a>
        </div>

        {/* Interactive background */}
        <div 
          className="absolute -bottom-1 -right-1 w-12 h-12 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            transform: isHovered ? 'scale(1.2)' : 'scale(0.8)',
            transition: 'transform 0.5s cubic-bezier(0.17, 0.67, 0.83, 0.67)'
          }}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
