
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Timeline from '../components/Timeline';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ParticleField from '../components/ParticleField';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <ParticleField />
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
