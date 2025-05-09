
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Code, Brain, Sparkles, Star, Robot, Monitor, Cpu, Database, Command } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Custom cursor follower */}
      <div 
        className={cn(
          "fixed top-0 left-0 w-6 h-6 rounded-full bg-primary pointer-events-none z-50 mix-blend-exclusion transition-opacity duration-300 opacity-0",
          cursorVisible && "opacity-70"
        )}
        style={{
          transform: `translate(${mousePosition.x - 12}px, ${mousePosition.y - 12}px)`,
        }}
      />
      
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
        <div className="absolute top-2/3 left-1/3 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
        
        <div className="absolute inset-0 noise-bg"></div>
        
        <div className="absolute inset-0">
          <div className="grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)] h-full w-full opacity-10">
            {Array.from({ length: 20 * 20 }).map((_, i) => (
              <div 
                key={i} 
                className="border border-white/5"
              />
            ))}
          </div>
        </div>
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-6">
            <div className="glass inline-flex items-center px-4 py-2 rounded-full mb-4 opacity-0 animate-fade-in gap-2">
              <Sparkles className="text-yellow-400" size={16} />
              <span className="inline-block mr-2 w-2 h-2 bg-green-400 rounded-full"></span>
              <span className="text-sm">Interface Revolution</span>
            </div>
            
            <h1 className="font-syncopate text-4xl md:text-6xl font-bold leading-tight opacity-0 animate-fade-in-delay-1 tracking-tight">
              <span className="text-gradient glow-text">NEXT GEN</span> <br/>
              DIGITAL EXPERIENCES
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl opacity-0 animate-fade-in-delay-2 font-light">
              Pushing the boundaries of what's possible on the web. Crafting immersive interfaces where
              <span className="text-gradient font-medium"> design meets intelligence</span> to create intuitive and powerful experiences.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4 opacity-0 animate-fade-in-delay-3">
              <Button 
                className="btn-neo group"
                size="lg"
              >
                <Star className="mr-2 group-hover:rotate-45 transition-transform" size={18} />
                Explore Work
              </Button>
              
              <Button 
                variant="outline" 
                className="border border-white/20 backdrop-blur-sm"
                size="lg"
              >
                <Code className="mr-2" size={18} />
                View Source
              </Button>
            </div>
            
            <div className="pt-8 opacity-0 animate-fade-in-delay-3">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Powered by</p>
              <div className="flex flex-wrap gap-x-8 gap-y-4 items-center">
                <div className="text-white/60 hover:text-white transition-colors flex items-center gap-2">
                  <Monitor size={18} />
                  <span className="font-medium">React</span>
                </div>
                <div className="text-white/60 hover:text-white transition-colors flex items-center gap-2">
                  <Command size={18} />
                  <span className="font-medium">Tailwind</span>
                </div>
                <div className="text-white/60 hover:text-white transition-colors flex items-center gap-2">
                  <Brain size={18} />
                  <span className="font-medium">TensorFlow</span>
                </div>
                <div className="text-white/60 hover:text-white transition-colors flex items-center gap-2">
                  <Cpu size={18} />
                  <span className="font-medium">OpenAI</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-5 flex justify-center md:justify-end opacity-0 animate-fade-in-delay-3 relative">
            <div className="absolute w-64 h-64 bg-accent/30 rounded-full blur-3xl -z-10"></div>
            
            <div className="relative animated-border p-[2px]">
              <div className="glass-card p-8 backdrop-blur-xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="neo-brutalism aspect-square flex flex-col items-center justify-center p-4 text-center">
                    <Code className="text-primary mb-2" size={28} />
                    <h3 className="text-sm font-medium">Frontend Magic</h3>
                  </div>
                  
                  <div className="neo-brutalism aspect-square flex flex-col items-center justify-center p-4 text-center">
                    <Brain className="text-accent mb-2" size={28} />
                    <h3 className="text-sm font-medium">AI Integration</h3>
                  </div>
                </div>
                
                <div className="mt-4 neo-brutalism p-5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 blur-xl rotate-12"></div>
                  
                  <div className="flex items-center space-x-2 mb-2">
                    <Robot className="text-accent" size={18} />
                    <span className="text-xs px-2 py-1 rounded-full bg-white/10">Latest Project</span>
                  </div>
                  
                  <h3 className="text-sm font-medium">Neural Interfaces</h3>
                  <p className="text-xs text-muted-foreground mt-1">AI-powered design system with neural feedback loops</p>
                  
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    <div className="w-full h-2 bg-primary/30 rounded-full overflow-hidden">
                      <div className="h-full w-2/3 bg-primary animate-pulse"></div>
                    </div>
                    <div className="w-full h-2 bg-accent/30 rounded-full overflow-hidden">
                      <div className="h-full w-4/5 bg-accent animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    </div>
                    <div className="w-full h-2 bg-purple-500/30 rounded-full overflow-hidden">
                      <div className="h-full w-1/2 bg-purple-500 animate-pulse" style={{animationDelay: '0.4s'}}></div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 flex gap-2">
                  <div className="neo-brutalism p-3 flex items-center justify-center flex-1">
                    <Database className="text-primary" size={18} />
                  </div>
                  <div className="neo-brutalism p-3 flex items-center justify-center flex-1">
                    <Cpu className="text-accent" size={18} />
                  </div>
                  <div className="neo-brutalism p-3 flex items-center justify-center flex-1">
                    <Command className="text-purple-500" size={18} />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-8 -right-8 w-24 h-24 border border-white/10 rounded-full rotating" />
            <div className="absolute -top-8 -left-8 w-16 h-16 border border-white/10 rounded-full rotating" style={{animationDuration: '15s'}} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-[bounce_1.5s_infinite]"></div>
        </div>
        <span className="text-white/60 text-xs mt-2">SCROLL</span>
      </div>
    </section>
  );
};

export default Hero;
