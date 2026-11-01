import React from 'react';
import { 
  BookOpen, 
  ExternalLink, 
  ArrowUpRight, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  Maximize2 
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface Section11Props {
  onOpenEvidence: (item: {
    image: string;
    title: string;
    subtitle?: string;
    caption?: string;
    aspectRatio?: string;
  }) => void;
}

export const Section11PublishedWriting: React.FC<Section11Props> = ({ onOpenEvidence }) => {
  const { publishedWriting } = PORTFOLIO_DATA;
  const { article } = publishedWriting;

  const handleOpenEvidence = () => {
    onOpenEvidence({
      image: article.evidenceImage,
      title: article.evidenceTitle,
      subtitle: article.evidenceSubtitle,
      caption: article.evidenceCaption,
      aspectRatio: article.aspectRatio
    });
  };

  return (
    <section id="writing" className="py-12 bg-[#FAF6F0] border-b border-[#EFE6DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8 pb-4 border-b border-[#EFE6DC]">
          <div className="inline-flex items-center gap-2 mb-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF650A]" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#FF650A] uppercase">
              {publishedWriting.sectionNumber}. {publishedWriting.title}
            </span>
          </div>
          <h2 className="font-section-title text-2xl sm:text-3xl md:text-4xl font-bold text-[#241A17] tracking-tight">
            {publishedWriting.sectionNumber}. {publishedWriting.title}
          </h2>
          <p className="text-xs sm:text-sm text-[#796E67] font-body max-w-2xl mt-1">
            {publishedWriting.subtitle}
          </p>
        </div>

        {/* Premium Editorial Article Showcase Card */}
        <div className="bg-white rounded-2xl border border-[#ECE2D7] p-6 sm:p-8 lg:p-9 shadow-warm-md hover:shadow-warm-lg hover:border-[#E0D2C3] transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left / Editorial Main Content (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between h-full">
              <div>
                
                {/* Publication byline and status pills */}
                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-4">
                  {/* Medium Brand Identity & Publication Name */}
                  <a
                    href={article.publicationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#241A17] hover:text-[#FF650A] transition-colors group"
                    title={`Visit ${article.publication} on Medium`}
                  >
                    <span className="w-6 h-6 rounded-md bg-[#241A17] flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF650A] transition-colors">
                      <svg className="w-3.5 h-3.5 text-white fill-current" viewBox="0 0 1043.63 592.71">
                        <g>
                          <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460.03 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.18-124.94-147.18-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94" />
                        </g>
                      </svg>
                    </span>
                    <span className="font-heading-display text-base sm:text-lg tracking-tight">
                      {article.publication}
                    </span>
                    <span className="text-[11px] font-mono text-[#A49489] font-normal">
                      · {article.platform}
                    </span>
                  </a>

                  {/* Status: Published · Approved */}
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/90 text-emerald-800 text-[11px] font-semibold shadow-2xs">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                    <span>{article.status}</span>
                  </span>

                  {/* Reading Time Label: 9 minutes */}
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FAF6F0] border border-[#E8DDD1] text-[#796E67] text-[11px] font-medium">
                    <Clock className="w-3 h-3 text-[#A49489] flex-shrink-0" />
                    <span>{article.readingTime} read</span>
                  </span>
                </div>

                {/* Article Title */}
                <h3 className="font-section-title text-2xl sm:text-3xl font-bold text-[#241A17] tracking-tight leading-snug mb-3.5">
                  <a
                    href={article.articleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#B9470B] transition-colors"
                  >
                    {article.title}
                  </a>
                </h3>

                {/* Article Description */}
                <p className="font-body text-xs sm:text-sm text-[#5A4E47] leading-relaxed mb-6">
                  {article.description}
                </p>

                {/* Editorial Topic Pillars */}
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  <span className="px-2.5 py-1 rounded-md bg-[#FAF6F0] border border-[#EAE0D5] text-[11px] font-mono text-[#796E67]">
                    Python Data Structures
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-[#FAF6F0] border border-[#EAE0D5] text-[11px] font-mono text-[#796E67]">
                    Algorithmic Thinking
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-[#FAF6F0] border border-[#EAE0D5] text-[11px] font-mono text-[#796E67]">
                    Memory & Complexity
                  </span>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center gap-2.5 pt-4 border-t border-[#F2ECE5]">
                {/* 1. Read Article */}
                <a
                  href={article.articleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#241A17] hover:bg-[#B9470B] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#241A17]/15 hover:shadow-lg transition-all duration-200 group"
                >
                  <BookOpen className="w-4 h-4 text-[#FF8533]" />
                  <span>Read Article</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C5B7AD] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* 2. View Publication */}
                <a
                  href={article.publicationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#FAF6F0] hover:bg-[#F2ECE5] text-[#241A17] text-xs sm:text-sm font-semibold border border-[#E0D2C3] hover:border-[#D1C1B0] transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#796E67]" />
                  <span>View Publication</span>
                </a>

                {/* 3. View Publication Evidence */}
                <button
                  type="button"
                  onClick={handleOpenEvidence}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#FFF2E8] hover:bg-[#FFE5D3] text-[#B9470B] text-xs sm:text-sm font-semibold border border-[#FFD9C0] hover:border-[#FFC4A0] transition-colors group"
                >
                  <ShieldCheck className="w-4 h-4 text-[#FF650A]" />
                  <span>View Publication Evidence</span>
                  <Maximize2 className="w-3 h-3 text-[#B9470B] opacity-70 group-hover:opacity-100 transition-opacity ml-0.5" />
                </button>
              </div>

            </div>

            {/* Right / Publication Evidence Display Frame (5 cols) */}
            <div className="lg:col-span-5 flex flex-col">
              <div 
                onClick={handleOpenEvidence}
                className="group/evidence cursor-pointer bg-[#FAF6F0] rounded-xl border border-[#E8DDD1] hover:border-[#FF650A] p-3.5 transition-all duration-200 hover:shadow-warm-md flex flex-col justify-between"
                title="Click to view full uncropped publication evidence"
              >
                {/* Header bar of evidence frame */}
                <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-[#EDE2D5] text-[11px]">
                  <div className="flex items-center gap-1.5 text-[#5A4E47] font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Publication Verification Evidence</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-100/70 border border-emerald-200 text-emerald-800 text-[10px] font-bold uppercase tracking-wider">
                    Verified
                  </span>
                </div>

                {/* Uncropped, unaltered evidence screenshot container */}
                <div className="relative w-full bg-white rounded-lg border border-[#E5DACD] overflow-hidden flex items-center justify-center p-1 sm:p-2 min-h-[140px] sm:min-h-[160px]">
                  <img
                    src={article.evidenceImage}
                    alt="Medium Stories Dashboard showing Four Python Data Structures That Changed the Way I Think About Data published and approved in Python in Plain English"
                    loading="lazy"
                    className="w-full h-auto object-contain transition-transform duration-300 group-hover/evidence:scale-[1.01]"
                    style={{
                      maxHeight: '260px',
                      imageRendering: 'auto'
                    }}
                  />

                  {/* Subtle hover overlay hint */}
                  <div className="absolute inset-0 bg-[#241A17]/10 opacity-0 group-hover/evidence:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="px-3 py-1.5 rounded-full bg-[#1F120B]/90 backdrop-blur-xs text-white text-[11px] font-semibold flex items-center gap-1.5 shadow-lg">
                      <Maximize2 className="w-3.5 h-3.5 text-[#FF650A]" />
                      <span>Click to enlarge original evidence</span>
                    </span>
                  </div>
                </div>

                {/* Caption below screenshot */}
                <div className="mt-2.5 pt-2 border-t border-[#EDE2D5] flex items-center justify-between text-[11px] text-[#796E67]">
                  <span className="truncate pr-2">Medium Stories Dashboard • Approved</span>
                  <span className="text-[#FF650A] font-medium flex items-center gap-1 flex-shrink-0 group-hover/evidence:underline">
                    <span>Enlarge</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};