
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 bg-background border-t border-white/10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <a href="#home" className="text-xl font-bold mb-4 inline-block">
              <span className="text-white">Pranay </span>
              <span className="text-primary">Harpalani</span>
            </a>
            <p className="text-sm text-muted-foreground max-w-xs">
              Feel free to reach out, even if it's for a quick chat!
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-4">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://github.com/pharpala" className="text-muted-foreground hover:text-white transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="linkedin.com/in/pranayharpalani/" className="text-muted-foreground hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {currentYear} Pranay Harpalani. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
