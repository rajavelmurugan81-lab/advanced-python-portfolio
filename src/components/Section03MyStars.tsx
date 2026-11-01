import React from 'react';
import { ArrowRight, CornerDownRight, Maximize2, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA, StarRecognition } from '../data/portfolioData';

interface Section03Props {
  onOpenLightbox: (star: StarRecognition) => void;
  onViewGallery: () => void;
}

export const Section03MyStars: React.FC<Section03Props> = ({
  onOpenLightbox,
  onViewGallery
}) => {
  const { myStars } = PORTFOLIO_DATA;

  return (
    <div id="stars" className="bg-white rounded-xl p-5 sm:p-6 border border-[#EFE6DC] shadow-warm-sm flex flex-col justify-between h-full">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-1 pb-2 border-b border-[#F2ECE5]">
          <div>
            <h2 className="font-section-title text-xl sm:text-2xl font-bold text-[#241A17] tracking-tight">
              03. My Stars
            </h2>
            <p className="text-xs text-[#796E67] font-body">
              Recognition and milestones throughout my learning journey.
            </p>
          </div>
          <button
            onClick={onViewGallery}
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#FF650A] hover:text-[#B9470B] transition-colors group flex-shrink-0 ml-2"
          >
            <span>View Gallery</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Two Large Side-by-Side Original Star Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {myStars.map((star) => (
            <div
              key={star.id}
              onClick={() => onOpenLightbox(star)}
              className="group cursor-pointer flex flex-col rounded-lg overflow-hidden border border-[#ECE2D7] bg-[#FAF6F0] p-2 hover:border-[#FF650A] transition-all duration-200 hover:shadow-warm-md"
            >
              {/* Preserved Original Image Container with object-fit: contain */}
              <div className="relative w-full h-[190px] sm:h-[210px] bg-[#F4EDE5] rounded-md overflow-hidden flex items-center justify-center p-2">
                <img
                  src={star.safeUrl || star.image}
                  alt={star.title}
                  loading="lazy"
                  className="w-full h-full object-contain filter group-hover:scale-[1.02] transition-transform duration-300"
                  style={{
                    maxHeight: '100%',
                    maxWidth: '100%',
                    imageRendering: 'auto'
                  }}
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-[#28150D]/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-200">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 text-[#241A17] text-xs font-semibold shadow-md">
                    <Maximize2 className="w-3.5 h-3.5 text-[#FF650A]" />
                    <span>View Original</span>
                  </span>
                </div>
              </div>

              {/* Caption matching reference design */}
              <div className="mt-2.5 px-1 pb-1 flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <CornerDownRight className="w-3 h-3 text-[#FF650A] flex-shrink-0" />
                    <h3 className="text-xs font-bold text-[#28150D] group-hover:text-[#FF650A] transition-colors font-body">
                      {star.title}
                    </h3>
                  </div>
                  <p className="text-[11px] text-[#796E67] ml-4 font-normal mt-0.5">
                    {star.subtitle}
                  </p>
                </div>

                <div className="w-5 h-5 rounded-full bg-[#FFF2E8] flex items-center justify-center group-hover:bg-[#FF650A] transition-colors flex-shrink-0 mt-0.5">
                  <ArrowRight className="w-3 h-3 text-[#FF650A] group-hover:text-white transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer verification note */}
      <div className="mt-4 pt-3 border-t border-[#F2ECE5] flex items-center justify-between text-[11px] text-[#8C7D73]">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-[#FF650A]" />
          Original untouched physical star evidence
        </span>
        <span className="font-mono text-[#FF650A] font-medium">public/evidence/01-stars/</span>
      </div>
    </div>
  );
};
