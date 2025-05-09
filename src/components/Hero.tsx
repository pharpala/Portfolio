
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Code, Brain, Sparkles, Star, Bot, Monitor, Cpu, Database, Command, User, Zap, Globe, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!cursorVisible) setCursorVisible(true);
    };
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
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
        <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}} />
        
        {/* Additional decorative elements */}
        <div className="absolute top-[20%] right-[15%] w-32 h-32 border border-white/20 rounded-full rotating" style={{animationDuration: '25s'}} />
        <div className="absolute bottom-[30%] left-[10%] w-40 h-40 border-2 border-dashed border-primary/30 rounded-full rotating" style={{animationDuration: '40s', animationDirection: 'reverse'}} />
        
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
        
        {/* Tech keywords floating around */}
        <div className="absolute top-1/4 left-[5%] glass px-4 py-2 rounded-full text-xs font-mono rotating floating" style={{animationDuration: '15s'}}>
          #ReactJS
        </div>
        <div className="absolute top-1/3 right-[8%] glass px-4 py-2 rounded-full text-xs font-mono rotating floating" style={{animationDuration: '18s', animationDelay: '1s'}}>
          #AI
        </div>
        <div className="absolute bottom-1/4 left-[15%] glass px-4 py-2 rounded-full text-xs font-mono rotating floating" style={{animationDuration: '12s', animationDelay: '2s'}}>
          #TailwindCSS
        </div>
        <div className="absolute bottom-1/3 right-[20%] glass px-4 py-2 rounded-full text-xs font-mono rotating floating" style={{animationDuration: '20s', animationDelay: '3s'}}>
          #TypeScript
        </div>
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-6">
            <div className="glass inline-flex items-center px-4 py-2 rounded-full mb-4 opacity-0 animate-fade-in gap-2">
              <Sparkles className="text-yellow-400" size={16} />
              <span className="inline-block mr-2 w-2 h-2 bg-green-400 rounded-full animate-pulse-fast"></span>
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
                className="border border-white/20 backdrop-blur-sm group"
                size="lg"
              >
                <Code className="mr-2 group-hover:translate-x-1 transition-transform" size={18} />
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
            
            {/* Stats section */}
            <div className="grid grid-cols-3 gap-4 mt-8 opacity-0 animate-fade-in-delay-3">
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-gradient">5+</div>
                <div className="text-xs text-muted-foreground">Years Experience</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-gradient">50+</div>
                <div className="text-xs text-muted-foreground">Projects</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-gradient">99%</div>
                <div className="text-xs text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-5 flex justify-center md:justify-end opacity-0 animate-fade-in-delay-3 relative">
            {/* Profile picture area with decorative elements */}
            <div className="absolute w-full h-full max-w-md">
              {/* Decorative rings */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/10 rounded-full rotating" style={{animationDuration: '30s'}}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-primary/20 rounded-full rotating" style={{animationDuration: '25s'}}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] border border-accent/10 rounded-full rotating" style={{animationDuration: '35s'}}></div>
              </div>
            </div>
            
            <div className="relative animated-border p-[2px]">
              <Card className="glass-card overflow-hidden backdrop-blur-xl">
                {/* Profile picture section */}
                <div className="relative">
                  {/* Glow effect behind image */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-br from-primary/30 via-accent/20 to-purple-500/30 blur-2xl rounded-full"></div>
                  
                  {/* Profile image with frame */}
                  <div className="relative z-10 p-6 flex flex-col items-center">
                    <div className="relative">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-purple-500 rounded-full blur opacity-70"></div>
                      <Avatar className="h-40 w-40 ring-2 ring-white/20 ring-offset-2 ring-offset-background">
                        <AvatarImage src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Profile" className="object-cover" />
                        <AvatarFallback>
                          <User className="w-12 h-12" />
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    
                    <h2 className="mt-4 text-xl font-bold">Alex Mitchell</h2>
                    <p className="text-sm text-muted-foreground">Frontend Developer & AI Specialist</p>
                    
                    <div className="flex space-x-2 mt-4">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                      <span className="text-xs text-green-400">Available for projects</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 pt-0 space-y-6">
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
                  
                  <div className="neo-brutalism p-5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 blur-xl rotate-12"></div>
                    
                    <div className="flex items-center space-x-2 mb-2">
                      <Bot className="text-accent" size={18} />
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
                  
                  <div className="flex gap-2">
                    <div className="neo-brutalism p-3 flex items-center justify-center flex-1 group hover:bg-white/20 transition-colors cursor-pointer">
                      <Globe className="text-primary group-hover:rotate-12 transition-transform" size={18} />
                    </div>
                    <div className="neo-brutalism p-3 flex items-center justify-center flex-1 group hover:bg-white/20 transition-colors cursor-pointer">
                      <Zap className="text-accent group-hover:rotate-12 transition-transform" size={18} />
                    </div>
                    <div className="neo-brutalism p-3 flex items-center justify-center flex-1 group hover:bg-white/20 transition-colors cursor-pointer">
                      <ArrowRight className="text-purple-500 group-hover:translate-x-1 transition-transform" size={18} />
                    </div>
                  </div>
                </div>
              </Card>
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
      
      {/* Tech stack ribbon */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden h-16 glass border-t border-white/10 backdrop-blur-md">
        <div className="flex animate-marquee gap-8 items-center whitespace-nowrap py-4">
          {Array.from({ length: 2 }).map((_, i) => (
            <React.Fragment key={i}>
              <div className="flex items-center gap-2 mx-8">
                <Monitor className="text-white/70" size={20} />
                <span className="font-medium">React</span>
              </div>
              <div className="flex items-center gap-2 mx-8">
                <Command className="text-white/70" size={20} />
                <span className="font-medium">Tailwind</span>
              </div>
              <div className="flex items-center gap-2 mx-8">
                <Brain className="text-white/70" size={20} />
                <span className="font-medium">TensorFlow</span>
              </div>
              <div className="flex items-center gap-2 mx-8">
                <Cpu className="text-white/70" size={20} />
                <span className="font-medium">OpenAI</span>
              </div>
              <div className="flex items-center gap-2 mx-8">
                <Database className="text-white/70" size={20} />
                <span className="font-medium">Supabase</span>
              </div>
              <div className="flex items-center gap-2 mx-8">
                <Code className="text-white/70" size={20} />
                <span className="font-medium">TypeScript</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
