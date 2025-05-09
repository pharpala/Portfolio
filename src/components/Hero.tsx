
import React from 'react';
import { cn } from '@/lib/utils';
import { Code, Brain } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-hero-pattern overflow-hidden pt-20"
    >
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-6">
            <div className="glass inline-flex items-center px-4 py-2 rounded-full mb-4 opacity-0 animate-fade-in">
              <span className="inline-block mr-2 w-2 h-2 bg-green-400 rounded-full"></span>
              Available for freelance work
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight opacity-0 animate-fade-in-delay-1">
              Crafting <span className="text-primary">Digital</span> Experiences with AI & Design
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl opacity-0 animate-fade-in-delay-2">
              I design and build exceptional digital experiences that combine aesthetic appeal with practical functionality.
              Specializing in frontend development and AI integrations.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4 opacity-0 animate-fade-in-delay-3">
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a href="#about" className="btn-outline">
                Learn More
              </a>
            </div>
          </div>
          
          <div className="md:col-span-5 flex justify-center md:justify-end opacity-0 animate-fade-in-delay-3">
            <div className="relative">
              <div className="glass p-6 rounded-2xl shadow-xl grid grid-cols-2 gap-4 max-w-sm">
                <div className={cn(
                  "border border-white/10 rounded-lg p-4 flex flex-col items-center justify-center text-center",
                  "hover:border-primary/50 transition-colors duration-300"
                )}>
                  <Code className="text-primary mb-2" size={28} />
                  <h3 className="text-sm font-medium">Frontend Development</h3>
                </div>
                
                <div className={cn(
                  "border border-white/10 rounded-lg p-4 flex flex-col items-center justify-center text-center",
                  "hover:border-primary/50 transition-colors duration-300"
                )}>
                  <Brain className="text-primary mb-2" size={28} />
                  <h3 className="text-sm font-medium">AI Integration</h3>
                </div>
                
                <div className="col-span-2 border border-white/10 rounded-lg p-4 hover:border-primary/50 transition-colors duration-300">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-xs text-muted-foreground">Latest Project</span>
                  </div>
                  <h3 className="text-sm font-medium">AI-Powered Design System</h3>
                  <p className="text-xs text-muted-foreground mt-1">Responsive components with AI customization</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border border-white/10 rounded-full" />
              <div className="absolute -top-6 -left-6 w-16 h-16 border border-white/10 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
