import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ProblemSolution } from './components/ProblemSolution';
import { Process } from './components/Process';
import { Results } from './components/Results';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { GlobalBackground } from './components/BackgroundElements';
import { SmoothScroll } from './components/SmoothScroll';

function App() {
  return (
    <div className="font-sans antialiased selection:bg-brand-red selection:text-white relative">
      <SmoothScroll />
      <GlobalBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <ProblemSolution />
        <Process />
        <Results />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}

export default App;