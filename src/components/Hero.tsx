import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Code, Brain, Sparkles, Star, Bot, Monitor, Cpu, Database, Command } from 'lucide-react';
import { Button } from '@/components/ui/button';
import RobotModel from '@/components/canvas/Robot';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!cursorVisible) setCursorVisible(true);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorVisible]);
  
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Custom cursor follower - hidden on mobile */}
      <div 
        className={cn(
          "fixed top-0 left-0 w-6 h-6 rounded-full bg-primary pointer-events-none z-50 mix-blend-exclusion transition-opacity duration-300 opacity-0 hidden sm:block",
          cursorVisible && "opacity-70"
        )}
        style={{
          transform: `translate(${mousePosition.x - 12}px, ${mousePosition.y - 12}px)`,
        }}
      />
      
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-10 sm:-left-20 w-48 sm:w-72 h-48 sm:h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 -right-10 sm:-right-20 w-56 sm:w-80 h-56 sm:h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
        <div className="absolute top-2/3 left-1/4 sm:left-1/3 w-40 sm:w-60 h-40 sm:h-60 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
        
        <div className="absolute inset-0 noise-bg"></div>
        
        <div className="absolute inset-0">
          <div className="grid grid-cols-[repeat(10,1fr)] sm:grid-cols-[repeat(20,1fr)] grid-rows-[repeat(15,1fr)] sm:grid-rows-[repeat(20,1fr)] h-full w-full opacity-5 sm:opacity-10">
            {Array.from({ length: (window.innerWidth < 640 ? 10 * 15 : 20 * 20) }).map((_, i) => (
              <div 
                key={i} 
                className="border border-white/5"
              />
            ))}
          </div>
        </div>
      </div>
      
      <div className="container relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center text-center lg:text-left">
          {/* Content Section */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-1">
            <div className="glass inline-flex items-center px-4 py-2 rounded-full mb-4 opacity-0 animate-fade-in gap-2 mx-auto lg:mx-0">
              <Sparkles className="text-yellow-400" size={16} />
              <span className="inline-block mr-2 w-2 h-2 bg-green-400 rounded-full"></span>
              <span className="text-sm">Let's Connect!</span>
            </div>
            
            <h1 className="font-syncopate text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight opacity-0 animate-fade-in-delay-1 tracking-tight">
              <span className="text-gradient glow-text">Hi,</span> <br/>
              I'M PRANAY
            </h1>
            
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl opacity-0 animate-fade-in-delay-2 font-light mx-auto lg:mx-0">
              I turn ideas into
              <span className="text-gradient font-medium"> pieces of art</span> using programming and AI.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4 opacity-0 animate-fade-in-delay-3 justify-center lg:justify-start">
              <Button 
                className="btn-neo group w-full sm:w-auto"
                size="lg"
                onClick={() => window.location.href = '/#projects'}
              >
                <Star className="mr-2 group-hover:rotate-45 transition-transform" size={18} />
                Explore Work

              </Button>
              
              <Button 
                variant="outline" 
                className="border border-white/20 backdrop-blur-sm w-full sm:w-auto"
                size="lg"
                onClick={() => window.open('https://github.com/pharpala/Portfolio', '_blank')}
              >
                <Code className="mr-2" size={18} />
                View Source
              </Button>
            </div>
            
            <div className="pt-6 sm:pt-8 opacity-0 animate-fade-in-delay-3">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Powered by</p>
              <div className="flex flex-wrap gap-x-6 sm:gap-x-8 gap-y-3 sm:gap-y-4 items-center justify-center lg:justify-start">
                <div className="text-white/60 hover:text-white transition-colors flex items-center gap-2">
                  <Monitor size={16}/>
                  <span className="font-medium text-sm sm:text-base">React</span>
                </div>
                <div className="text-white/60 hover:text-white transition-colors flex items-center gap-2">
                  <Command size={16}/>
                  <span className="font-medium text-sm sm:text-base">Tailwind</span>
                </div>
                <div className="text-white/60 hover:text-white transition-colors flex items-center gap-2">
                  <Brain size={16} />
                  <span className="font-medium text-sm sm:text-base">Spline</span>
                </div>
                <div className="text-white/60 hover:text-white transition-colors flex items-center gap-2">
                  <Cpu size={16} />
                  <span className="font-medium text-sm sm:text-base">OpenAI</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Robot Model Section */}
          <div className="lg:col-span-5 flex justify-center relative overflow-visible items-center h-[400px] sm:h-[500px] lg:h-[600px] order-1 lg:order-2 pb-10 sm:pb-16 lg:pb-20">
            <RobotModel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
