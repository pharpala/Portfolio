import React from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

const workExperience = [
  {
    id: 1,
    title: 'Finance & Gen AI Intern',
    company: 'Zafin Labs',
    location: 'Toronto, ON',
    period: 'May 2025 - Present',
    description: 'Leading the AI movement in the Finance team, focusing on exponentially accelarating workflows and deliver AI tools for company growth.',
    technologies: ['Python', 'Pandas','OpenAI', 'Cursor'],
    achievements: [
      'Automated commission payment and tracking system, going from 60h to 30 minutes.',
      'Prepared AI-powered financial forecasts, dashboards, and reports for senior management and investors.',
    ]
  },
  {
    id: 2,
    title: 'Data Structures & Computing Teaching Assistant',
    company: 'University of Guelph',
    location: 'Guelph, ON',
    period: 'Sep 2024 - Apr 2025',
    description: 'Taught classes, prepared exams and created assignments in C.',
    technologies: ['C', 'Python', 'Git', 'Excel'],
    achievements: [
      'Taught Data Structures for 80+ students',
      'Streamlines grading with Python, reducing time from 2 weeks to 30 minutes'
    ]
  },
  {
    id: 3,
    title: 'Blockchain & Web3 Security Researcher',
    company: 'Webacy',
    location: 'Remote',
    period: 'Jul 2024 - Aug 2024',
    description: 'Prepared financial documents, analyzed technologies and build a roadmap for company adoption of emerging technologies.',
    technologies: ['Excel', 'Tableau', 'Canva'],
    achievements: [
      'Analyzed 20+ emerging technologies',
      'Presented 4 key findings to senior management'
    ]
  },
  {
    id: 4,
    title: 'Software & Automations Developer',
    company: 'Google Developers Student Club',
    location: 'Guelph, ON',
    period: 'Sep 2023 - Apr 2024',
    description: 'Ran events and taught exciting technologies to students, while building automations for the club.',
    technologies: ['Python', 'Firebase', 'Trello', 'Git'],
    achievements: [
      'Created script to automate 1000+ emails',
      'Ran workshops in Python, Firebase, and Git for 150+ students'
    ]
  }
];

const Timeline = () => {
  return (
    <section id="experience" className="py-16 lg:py-22 relative overflow-hidden">
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
                        <span key={tech} className="px-2 py-1 text-xs bg-primary/20 glow-text rounded-md border border-primary/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Achievements */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-accent">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement, i) => (
                            <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                            <ChevronRight
                                className="text-primary shrink-0 mt-1 w-3 h-3"
                            />
                            <span className="leading-snug">{achievement}</span>
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
                href="/Pranay_Harpalani_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center btn-neo group font-medium transition-colors hover:bg-purple-600"
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