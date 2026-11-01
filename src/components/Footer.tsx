import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { footer } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderSocialIcon = (iconName: string) => {
    const props = { className: "w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#C5B7AD] group-hover:text-[#FF8533] transition-all duration-200 group-hover:scale-110" };
    switch (iconName) {
      case 'Github': return <Github {...props} />;
      case 'Linkedin': return <Linkedin {...props} />;
      case 'Mail': return <Mail {...props} />;
      default: return <Mail {...props} />;
    }
  };

  return (
    <footer id="contact" className="bg-[#1C100A] text-white pt-10 pb-8 border-t border-[#341F16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#301C13]">
          
          {/* Left Brand Details */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#FF650A] to-[#B9470B] flex items-center justify-center shadow-md">
              <span className="font-heading-display text-white font-extrabold text-base tracking-tight">
                {footer.shortName}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-white text-sm font-semibold tracking-wide">
                {footer.name}
              </span>
              <span className="text-[#A49489] text-[11px]">
                {footer.role} • {footer.institution}
              </span>
            </div>
          </div>

          {/* Center Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 text-xs text-[#D3C4B9]">
            {footer.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#FF650A] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Social Links & Back to top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              {footer.socials.map((s) => {
                const isMail = s.href.startsWith('mailto:');
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={isMail ? undefined : '_blank'}
                    rel={isMail ? undefined : 'noopener noreferrer'}
                    className="w-10 h-10 rounded-full bg-[#26150E] border border-[#432519] flex items-center justify-center hover:border-[#FF650A] hover:bg-[#321B11] hover:shadow-md hover:shadow-[#FF650A]/20 transition-all duration-200 group"
                    aria-label={s.label}
                    title={(s as any).tooltip || s.label}
                  >
                    {renderSocialIcon(s.icon)}
                  </a>
                );
              })}
            </div>

            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-[#FF650A] text-white flex items-center justify-center hover:bg-[#B9470B] transition-colors shadow-md shadow-[#FF650A]/20 hover:scale-105 active:scale-95 group"
              title="Scroll to top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>

        </div>

        {/* Bottom copyright notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7B6E64] gap-2">
          <p>© {footer.year} {footer.name}. Academic Portfolio for {footer.role}.</p>
          <p className="text-[11px]">Built with React, TypeScript, Three.js & Tailwind CSS.</p>
        </div>

      </div>
    </footer>
  );
};
