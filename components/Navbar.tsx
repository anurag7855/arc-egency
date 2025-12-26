import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Results', href: '#results' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 will-change-transform ${isScrolled ? 'bg-brand-darker/90 backdrop-blur-md py-4 shadow-lg border-b border-brand-red/10' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer" onClick={scrollToTop}>
          <Globe className="text-brand-red w-8 h-8 group-hover:rotate-12 transition-transform" />
          <span className="text-2xl font-heading font-bold text-white tracking-wide">
            Arc <span className="text-brand-red">Studio</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-semibold text-gray-300 hover:text-brand-red transition-colors uppercase tracking-wider cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-brand-red hover:bg-red-700 text-white px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-brand-red/20 cursor-pointer"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-darker border-b border-brand-red/20 p-6 flex flex-col gap-4 shadow-2xl h-screen bg-opacity-95 backdrop-blur-xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={handleNavClick}
              className="text-white font-semibold text-2xl hover:text-brand-red py-2 border-b border-white/5"
            >
              {link.name}
            </a>
          ))}
           <a 
            href="#contact" 
            onClick={handleNavClick}
            className="mt-4 bg-brand-red text-white text-center py-4 rounded-lg font-bold text-xl"
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
};