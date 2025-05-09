
import React from 'react';
import { Code, Palette, Triangle, Star } from 'lucide-react';

const skills = [
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'UI/UX Design', level: 80 },
  { name: 'Tailwind CSS', level: 95 },
  { name: 'NextJS', level: 75 },
  { name: 'AI Integration', level: 70 },
];

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute top-0 right-0 -mr-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Left column - About Me */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="section-title">About Me</h2>
            
            <div className="space-y-4">
              <p className="text-muted-foreground">
                I'm a passionate Frontend Developer and AI enthusiast with 5+ years of experience crafting digital experiences
                that merge aesthetics with functionality.
              </p>
              
              <p className="text-muted-foreground">
                My journey in tech began with a fascination for design, which evolved into mastering frontend technologies.
                Now, I specialize in building responsive, accessible interfaces that leverage AI to enhance user experiences.
              </p>
              
              <p className="text-muted-foreground">
                When I'm not coding, you'll find me exploring new design trends, contributing to open-source projects,
                or experimenting with the latest AI tools to push the boundaries of what's possible on the web.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
              <div className="glass p-4 text-center">
                <h3 className="text-2xl font-bold text-primary">5+</h3>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              
              <div className="glass p-4 text-center">
                <h3 className="text-2xl font-bold text-primary">50+</h3>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              
              <div className="glass p-4 text-center">
                <h3 className="text-2xl font-bold text-primary">30+</h3>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
            </div>
          </div>
          
          {/* Right column - Skills */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="section-title">My Skills</h2>
            
            {/* Skill bars */}
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full">
                    <div 
                      className="h-full bg-primary rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Core skills */}
            <div className="pt-6">
              <h3 className="text-lg font-medium mb-4">Core Technologies</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="glass p-4 flex items-start space-x-3">
                  <Code className="text-primary mt-1" size={20} />
                  <div>
                    <h4 className="font-medium">Frontend Development</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      React, TypeScript, NextJS, Tailwind CSS
                    </p>
                  </div>
                </div>
                
                <div className="glass p-4 flex items-start space-x-3">
                  <Palette className="text-primary mt-1" size={20} />
                  <div>
                    <h4 className="font-medium">UI/UX Design</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Figma, Design Systems, Prototyping
                    </p>
                  </div>
                </div>
                
                <div className="glass p-4 flex items-start space-x-3">
                  <Star className="text-primary mt-1" size={20} />
                  <div>
                    <h4 className="font-medium">AI Integration</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      ChatGPT API, TensorFlow.js, Hugging Face
                    </p>
                  </div>
                </div>
                
                <div className="glass p-4 flex items-start space-x-3">
                  <Triangle className="text-primary mt-1" size={20} />
                  <div>
                    <h4 className="font-medium">Performance Optimization</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Core Web Vitals, Lighthouse, Webpack
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
