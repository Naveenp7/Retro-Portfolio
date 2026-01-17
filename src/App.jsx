import React, { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import Marquee from './components/Marquee';
import Noise from './components/Noise';
import ThemeToggle from './components/ThemeToggle';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <div className="app-container" style={{ minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      <Noise />
      <ScrollProgress />
      <CustomCursor />
      <ThemeToggle />
      <Marquee text="OPEN TO WORK" top="5rem" rotate={-2} bgColor="var(--color-primary)" />
      <main style={{ padding: '0', maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Marquee text="FULL STACK AI ENGINEER • MOBILE APPS • FLUTTER DEV •" rotate={1} bgColor="var(--color-secondary)" />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;
