
import React from 'react';
import { Code, Palette, Triangle, Star, Space } from 'lucide-react';

const skills = [
  { name: 'AI Integration', level: 100 },
  { name: 'React', level: 98 },
  { name: 'TypeScript', level: 92 },
  { name: 'UI/UX Design', level: 90 },
];

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-28 relative overflow-hidden scroll-mt-20">
      {/* Abstract background shapes */}
      <div className="absolute top-0 right-0 -mr-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Left column - About Me */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="section-title">About Me</h2>
            
            <div className="space-y-4">
              <p className="text-muted-foreground">
              Hey! I’m Pranay! A full-stack developer, builder, and all-around 
              problem solver based in Toronto. I turn ideas into reality 
              , whether that means launching a student housing platform to protect 
              renters, building an AI roasting app for fun nights with friends, 
              or deploying web products that hundreds of people use.
              </p>
              
              <p className="text-muted-foreground">
              <br/>
              I got into tech because it felt like magic. The first time I wrote 
              code that actually did something, I felt like a wizard, like I could 
              make something out of thin air. That feeling hasn’t left. Whether 
              it’s an idea I dream up on a walk or a problem I see in real life, 
              I’m always excited to turn it into something real that people can use.
              </p>
              
              <p className="text-muted-foreground">
              <br/>
              Outside of work, you’ll probably find me making TikToks about AI, playing 
              intramural soccer, or daydreaming about my future Mercedes G-Wagon 4x4 Squared.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
              <div className="glass p-4 text-center">
                <h3 className="text-2xl font-bold text-primary">3+</h3>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              
              <div className="glass p-4 text-center">
                <h3 className="text-2xl font-bold text-primary">35+</h3>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              
              <a 
                href="https://www.tiktok.com/@elpranayese" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass p-4 text-center block hover:scale-105 transition-transform duration-200 cursor-pointer"
              >
                <h3 className="text-2xl font-bold text-primary">450k</h3>                <p className="text-sm text-muted-foreground">Views on AI videos</p>
              </a>
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
                      ChatGPT API, Python, TensorFlow, Hugging Face
                    </p>
                  </div>
                </div>
                
                <div className="glass p-4 flex items-start space-x-3">
                  <Triangle className="text-primary mt-1" size={20} />
                  <div>
                    <h4 className="font-medium">Applications & Technologies</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Git, Docker, AWS, PostgreSQL
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
