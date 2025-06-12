
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, TerminalSquare, Sparkles, Blocks, LayoutGrid } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Track which section is currently in view
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-500',
        isScrolled ? 'bg-background/40 backdrop-blur-xl py-3 border-b border-white/5' : 'bg-transparent py-5'
      )}
    >
      <nav className="container flex items-center justify-between">
        <a href="#home" className="text-xl md:text-2xl font-bold flex items-center gap-2 group">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
            <LayoutGrid size={16} className="text-white" />
          </div>
          <div>
            <span className="text-white font-syncopate tracking-tighter">PRANAY</span>
            <span className="text-primary font-syncopate tracking-tighter"> HARPALANI</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium px-4 py-2 rounded-lg transition-colors relative group",
                activeSection === link.href.substring(1) ? "text-white" : "text-muted-foreground hover:text-white"
              )}
            >
              <span className="relative z-10">{link.name}</span>
              {activeSection === link.href.substring(1) && (
                <span className="absolute inset-0 bg-white/10 rounded-lg -z-0"></span>
              )}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
          ))}
          <a 
            href="#contact" 
            className="animated-border ml-2"
          >
            <div className="btn-primary backdrop-blur-sm">
              <Sparkles className="mr-2" size={16} />
              Let's Talk
            </div>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white glass p-2 rounded-full"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'md:hidden fixed inset-0 bg-background/95 backdrop-blur-xl z-40 transition-transform duration-500 ease-in-out',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="container flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-2xl font-medium hover:text-primary transition-colors flex items-center gap-3"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name === 'Home' && <TerminalSquare size={20} />}
              {link.name === 'About' && <Blocks size={20} />}
              {link.name === 'Projects' && <LayoutGrid size={20} />}
              {link.name === 'Contact' && <Sparkles size={20} />}
              {link.name}
            </a>
          ))}
          <div className="pt-8 w-full max-w-xs">
            <a
              href="#contact"
              className="btn-primary w-full flex justify-center items-center gap-2 text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Sparkles size={18} />
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
