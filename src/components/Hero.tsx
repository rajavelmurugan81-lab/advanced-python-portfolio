import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { Python3DLogo } from './Python3DLogo';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onExploreClick: () => void;
  onStarsClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onStarsClick }) => {
  const { identity } = PORTFOLIO_DATA;

  return (
    <section
      id="hero"
      className="relative min-h-[460px] md:min-h-[490px] pt-24 pb-14 bg-gradient-to-b from-[#180E08] via-[#24130A] to-[#1F1008] text-white overflow-hidden border-b border-[#3D251C]"
    >
      {/* Background cinematic radial warm illumination */}
      <div
        className="absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] pointer-events-none -z-0 opacity-40 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, #FF650A 0%, #B9470B 40%, transparent 75%)',
        }}
      />

      {/* Subtle background tech grid lines */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '36px 36px'
        }}
      />

      {/* Editorial Vertical Typography in top right, matching reference screenshot */}
      <div className="hidden xl:flex flex-col absolute right-8 top-28 space-y-1 select-none pointer-events-none opacity-20 text-right z-10">
        {identity.editorialQuotes.map((word) => (
          <span
            key={word}
            className="text-[10px] font-heading-display font-black tracking-[0.35em] text-[#EFE6DC]"
          >
            {word}
          </span>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* Left Hero Content (7 cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left pt-2 lg:pt-0">
            {/* Small Kicker */}
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="text-[#FF650A] text-xs font-bold tracking-[0.22em] uppercase font-mono">
                {identity.kicker}
              </span>
            </div>

            {/* Massive Condensed Headline */}
            <h1 className="font-heading-display text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-black leading-[0.92] tracking-tight uppercase mb-4">
              <span className="text-white block">{identity.headlineLine1}</span>
              <span className="text-[#FF650A] block drop-shadow-[0_2px_12px_rgba(255,101,10,0.3)]">
                {identity.headlineLine2}
              </span>
            </h1>

            {/* Short Supporting Statement */}
            <p className="text-[#D3C4B9] text-xs sm:text-sm md:text-sm max-w-xl font-normal leading-relaxed mb-6 font-body">
              {identity.supportingStatement}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              {/* Primary Explore Button */}
              <button
                onClick={onExploreClick}
                className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#FF650A] to-[#B9470B] text-white text-xs sm:text-sm font-semibold tracking-wide hover:brightness-110 active:scale-95 shadow-lg shadow-[#FF650A]/25 transition-all duration-200"
              >
                <span>Explore My Journey</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Secondary View My Stars Button */}
              <button
                onClick={onStarsClick}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2E180E]/70 hover:bg-[#3D2013] border border-[#5A3323] text-[#F3E7DC] hover:text-white text-xs sm:text-sm font-medium tracking-wide active:scale-95 transition-all duration-200"
              >
                <span>View My Stars</span>
                <Star className="w-3.5 h-3.5 fill-[#FF650A] text-[#FF650A]" />
              </button>
            </div>

            {/* Category Labels with Dot Separator */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] sm:text-xs text-[#9E8E83] pt-2 border-t border-[#341F16]/60">
              {identity.tags.map((tag, idx) => (
                <React.Fragment key={tag}>
                  <span className="hover:text-[#FF650A] transition-colors cursor-default">
                    {tag}
                  </span>
                  {idx < identity.tags.length - 1 && (
                    <span className="text-[#FF650A]/60 font-bold">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Right Hero Content: 3D Python Centerpiece (5 cols on desktop) */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <Python3DLogo />
          </div>

        </div>
      </div>
    </section>
  );
};
