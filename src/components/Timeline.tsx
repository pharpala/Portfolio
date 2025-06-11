import React from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

const workExperience = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'TechCorp Industries',
    location: 'San Francisco, CA',
    period: '2022 - Present',
    description: 'Leading development of next-generation web applications using React, TypeScript, and AI integration. Mentoring junior developers and architecting scalable frontend solutions.',
    technologies: ['React', 'TypeScript', 'AI/ML', 'GraphQL'],
    achievements: [
      'Improved app performance by 40%',
      'Led team of 5 developers',
      'Implemented AI-powered features'
    ]
  },
  {
    id: 2,
    title: 'Frontend Developer',
    company: 'Digital Innovations Lab',
    location: 'Austin, TX',
    period: '2020 - 2022',
    description: 'Developed responsive web applications and implemented modern design systems. Collaborated with UX teams to create intuitive user interfaces.',
    technologies: ['React', 'Vue.js', 'Tailwind', 'Node.js'],
    achievements: [
      'Built 15+ production applications',
      'Reduced load times by 60%',
      'Implemented design system'
    ]
  },
  {
    id: 3,
    title: 'Junior Developer',
    company: 'StartupVenture',
    location: 'Remote',
    period: '2019 - 2020',
    description: 'Started my journey in web development, focusing on frontend technologies and learning modern development practices.',
    technologies: ['JavaScript', 'HTML/CSS', 'Bootstrap', 'jQuery'],
    achievements: [
      'Completed 10+ client projects',
      'Mastered responsive design',
      'Contributed to open source'
    ]
  }
];

const Timeline = () => {
  return (
    <section id="experience" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute top-1/4 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center justify-center p-1 px-3 glass rounded-full mb-4 gap-2">
              <Briefcase size={14} className="text-primary" />
              <span className="text-xs">CAREER JOURNEY</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold">
              Work <span className="text-gradient">Experience</span>
            </h2>
            
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My professional journey through the world of frontend development and AI integration,
              building impactful solutions and leading innovative projects.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-purple-500 transform md:-translate-x-1/2" />
            
            {workExperience.map((experience, index) => (
              <div key={experience.id} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform md:-translate-x-1/2 z-10 glow" />
                
                {/* Content */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="glass-card p-6 magnetic-card group">
                    {/* Period badge */}
                    <div className="inline-flex items-center gap-2 glass px-3 py-1 rounded-full text-xs mb-4">
                      <Calendar size={12} className="text-accent" />
                      {experience.period}
                    </div>
                    
                    {/* Job title and company */}
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {experience.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-accent mb-3">
                      <Briefcase size={16} />
                      <span className="font-medium">{experience.company}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <MapPin size={14} />
                      <span className="text-sm">{experience.location}</span>
                    </div>
                    
                    {/* Description */}
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {experience.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {experience.technologies.map((tech) => (
                        <span key={tech} className="px-2 py-1 text-xs bg-primary/20 text-primary rounded-md border border-primary/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Achievements */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-accent">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <ChevronRight size={12} className="text-primary" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Empty space for the other side on desktop */}
                <div className="hidden md:block w-5/12" />
              </div>
            ))}
          </div>
          
          {/* Download Resume CTA */}
          <div className="text-center mt-12">
            <a 
              href="#" 
              className="inline-flex items-center btn-neo group"
            >
              <Briefcase className="mr-2 group-hover:rotate-12 transition-transform" size={18} />
              Download Resume
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;