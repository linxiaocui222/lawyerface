import React, { useState, useEffect } from 'react';
import { Menu, X, Scale } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Special handling for Home/Hero to ensure absolute top scrolling
    if (href === '#hero') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        // Calculate offset to ensure the section title isn't hidden behind the fixed header
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    
    if (isOpen) setIsOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-panel py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="w-10 h-10 bg-tech-800 rounded-lg flex items-center justify-center border border-law-gold/30 group-hover:border-law-gold transition-colors">
            <Scale className="w-6 h-6 text-law-gold" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-100 tracking-tight">林晓翠律师</h1>
            <p className="text-xs text-slate-400 tracking-widest uppercase">Tech & Law</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm font-medium text-slate-300 hover:text-law-gold transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-law-gold transition-all group-hover:w-full"></span>
            </a>
          ))}
          <a 
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="px-5 py-2 text-sm font-bold text-tech-900 bg-law-gold rounded hover:bg-amber-300 transition-colors shadow-[0_0_15px_rgba(251,191,36,0.3)]"
          >
            预约咨询
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-200" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-tech-900 border-b border-slate-800 p-6 shadow-2xl">
          <nav className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-slate-300 hover:text-law-gold py-2 border-b border-slate-800"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;