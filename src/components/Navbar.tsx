import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onExploreClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onExploreClick }) => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const navLinks = [
    { label: 'Home', href: '#hero', id: 'home' },
    { label: 'Learning', href: '#learning', id: 'learning' },
    { label: 'Activities', href: '#activities', id: 'activities' },
    { label: 'My Stars', href: '#stars', id: 'stars' },
    { label: 'Projects', href: '#project', id: 'project' },
    { label: 'Reflection', href: '#reflection', id: 'reflection' },
    { label: 'Writing', href: '#writing', id: 'writing' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sectionIds = ['hero', 'learning', 'activities', 'stars', 'project', 'reflection', 'writing', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id === 'hero' ? 'home' : id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#190E09]/95 backdrop-blur-md border-b border-[#3D251C]/70 shadow-lg py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left Brand Identity */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
          >
            {/* Orange RS Monogram */}
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#FF650A] to-[#B9470B] flex items-center justify-center shadow-md shadow-[#B9470B]/30 group-hover:scale-105 transition-transform duration-200">
              <span className="font-heading-display text-white font-extrabold text-base tracking-tight">
                RS
              </span>
            </div>

            {/* Name and Academic Subtitle */}
            <div className="flex flex-col">
              <span className="text-white text-sm font-semibold tracking-wide group-hover:text-[#FF650A] transition-colors leading-tight">
                Rajavelmurugan S.
              </span>
              <span className="text-[#A49489] text-[11px] font-medium tracking-normal leading-tight">
                Advanced Python Programming
              </span>
            </div>
          </a>

          {/* Center/Right Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`text-xs font-medium tracking-wide transition-all duration-200 relative py-1 ${
                    isActive
                      ? 'text-[#FF650A] font-semibold'
                      : 'text-[#D5C7BD] hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FF650A] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (onExploreClick) {
                  onExploreClick();
                } else {
                  handleNavClick('#learning');
                }
              }}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#FF650A] to-[#B9470B] text-white text-xs font-semibold tracking-wide hover:brightness-110 active:scale-95 shadow-md shadow-[#FF650A]/20 transition-all duration-200"
            >
              <span>Explore My Journey</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-[#D5C7BD] hover:text-white hover:bg-[#28150D] focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1E110B]/98 border-b border-[#3D251C] backdrop-blur-xl px-4 pt-3 pb-6 shadow-2xl transition-all">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'text-[#FF650A] bg-[#2E180E] font-semibold'
                    : 'text-[#D5C7BD] hover:text-white hover:bg-[#28150D]'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleNavClick('#learning');
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#FF650A] to-[#B9470B] text-white text-xs font-semibold shadow-md"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Explore My Journey</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
