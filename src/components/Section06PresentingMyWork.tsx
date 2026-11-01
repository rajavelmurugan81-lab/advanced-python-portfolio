import React from 'react';
import { ArrowRight, ArrowUpRight, Presentation, Video, Image as ImageIcon, Download, Play } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface Section06Props {
  onOpenPPT: () => void;
  onOpenVideoNotice: () => void;
  onOpenScreenshots: () => void;
  onViewAll: () => void;
}

export const Section06PresentingMyWork: React.FC<Section06Props> = ({
  onOpenPPT,
  onOpenVideoNotice,
  onOpenScreenshots,
  onViewAll
}) => {
  const { presentingMyWork } = PORTFOLIO_DATA;

  const handleAction = (id: string) => {
    if (id === 'ppt') onOpenPPT();
    else if (id === 'video') onOpenVideoNotice();
    else if (id === 'screenshots') onOpenScreenshots();
  };

  const renderIcon = (id: string) => {
    if (id === 'ppt') return <Presentation className="w-3.5 h-3.5 text-[#FF650A]" />;
    if (id === 'video') return <Video className="w-3.5 h-3.5 text-[#FF650A]" />;
    return <ImageIcon className="w-3.5 h-3.5 text-[#FF650A]" />;
  };

  return (
    <div className="bg-white rounded-xl p-5 sm:p-6 border border-[#EFE6DC] shadow-warm-sm flex flex-col justify-between h-full">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-1 pb-2 border-b border-[#F2ECE5]">
          <div>
            <h2 className="font-section-title text-xl sm:text-2xl font-bold text-[#241A17] tracking-tight">
              06. Presenting My Work
            </h2>
            <p className="text-xs text-[#796E67] font-body">
              Project presentation and demonstration.
            </p>
          </div>
          <button
            onClick={onViewAll}
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#FF650A] hover:text-[#B9470B] transition-colors group flex-shrink-0 ml-2"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* 3 Columns Desktop Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-3">
          {presentingMyWork.map((item) => (
            <div
              key={item.id}
              className="bg-[#FAF6F0] rounded-lg border border-[#ECE2D7] overflow-hidden flex flex-col justify-between hover:border-[#FF650A] transition-all duration-200 group"
            >
              {/* Media Thumbnail */}
              <div 
                onClick={() => handleAction(item.id)}
                className="relative w-full h-[85px] sm:h-[95px] bg-[#1A1A1E] overflow-hidden cursor-pointer flex items-center justify-center p-1"
              >
                <img
                  src={item.previewImage}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />

                {/* PPT badge */}
                {item.id === 'ppt' && (
                  <div className="absolute top-1.5 right-1.5">
                    <span className="px-1.5 py-0.5 rounded bg-[#FF650A] text-white text-[9px] font-mono font-bold shadow-xs">
                      PPTX (1.5MB)
                    </span>
                  </div>
                )}

                {/* Video Play Button Overlay */}
                {item.id === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-[#FF650A] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                    </div>
                  </div>
                )}
              </div>

              {/* Title, Caption & Action */}
              <div className="p-3 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    {renderIcon(item.id)}
                    <h3 className="font-body text-xs font-bold text-[#28150D] group-hover:text-[#FF650A] transition-colors truncate">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[11px] text-[#796E67] leading-tight mb-1">
                    {item.caption}
                  </p>

                  {/* Short Note for Video */}
                  {item.id === 'video' && (
                    <p className="text-[10px] text-[#8C7D73] leading-tight mb-2 italic">
                      Full demonstration video hosted on Google Drive.
                    </p>
                  )}
                </div>

                {/* Button Action */}
                <div className="pt-1 mt-auto">
                  {item.id === 'ppt' ? (
                    <a
                      href={item.fileUrl}
                      download="website_ppt.pptx"
                      className="w-full py-1.5 px-2.5 rounded-full bg-[#FF650A] hover:bg-[#B9470B] text-white text-[11px] font-semibold flex items-center justify-center gap-1.5 shadow-xs transition-colors"
                    >
                      <Download className="w-3 h-3" />
                      <span>Open PPT (1.5 MB)</span>
                    </a>
                  ) : item.id === 'video' ? (
                    <a
                      href={item.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-1.5 px-2.5 rounded-full bg-[#FF650A] hover:bg-[#B9470B] text-white text-[11px] font-semibold flex items-center justify-center gap-1.5 shadow-xs transition-colors"
                    >
                      <span>Watch Website Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <button
                      onClick={() => handleAction(item.id)}
                      className="w-full py-1.5 px-2.5 rounded-full bg-[#FF650A] hover:bg-[#B9470B] text-white text-[11px] font-semibold flex items-center justify-center gap-1 shadow-xs transition-colors"
                    >
                      <span>{item.actionText}</span>
                    </button>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
