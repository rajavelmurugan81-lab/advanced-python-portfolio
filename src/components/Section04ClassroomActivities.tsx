import React from 'react';
import { ArrowRight, FileText, Layers, Maximize2 } from 'lucide-react';
import { PORTFOLIO_DATA, ActivityCard } from '../data/portfolioData';

interface Section04Props {
  onSelectActivity: (activity: ActivityCard) => void;
  onViewAllActivities: () => void;
}

export const Section04ClassroomActivities: React.FC<Section04Props> = ({
  onSelectActivity,
  onViewAllActivities
}) => {
  const { classroomActivities } = PORTFOLIO_DATA;

  return (
    <section id="activities" className="py-10 bg-[#FAF6F0] border-b border-[#EFE6DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-6 pb-3 border-b border-[#EFE6DC]">
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
            <h2 className="font-section-title text-2xl sm:text-3xl font-bold text-[#241A17] tracking-tight">
              04. Classroom Activities
            </h2>
            <p className="text-xs sm:text-sm text-[#796E67] font-body">
              Learning beyond the textbook through discussions, activities and teamwork.
            </p>
          </div>

          <button
            onClick={onViewAllActivities}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF650A] hover:text-[#B9470B] mt-2 sm:mt-0 transition-colors group"
          >
            <span>View All Activities</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* 4 Evenly Sized Cards in Horizontal Desktop Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {classroomActivities.map((act) => (
            <div
              key={act.id}
              onClick={() => onSelectActivity(act)}
              className="bg-white rounded-xl border border-[#ECE2D7] overflow-hidden flex flex-col justify-between hover:border-[#FF650A] transition-all duration-200 hover:shadow-warm-md group cursor-pointer"
            >
              <div>
                {/* Photo container displaying complete image */}
                <div className="relative w-full h-[155px] bg-[#F4EDE5] overflow-hidden flex items-center justify-center p-1.5">
                  <img
                    src={act.safeUrl || act.image}
                    alt={act.title}
                    loading="lazy"
                    className="w-full h-full object-contain filter group-hover:scale-[1.03] transition-transform duration-300"
                  />
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-2.5 left-2.5">
                    <span className="inline-block px-2 py-0.5 rounded-full bg-white/95 backdrop-blur-xs text-[10px] font-semibold text-[#B9470B] uppercase tracking-wider shadow-xs border border-[#EFE6DC]">
                      {act.category}
                    </span>
                  </div>

                  {/* Attachment Indicators (PDF or Multiple Images) */}
                  <div className="absolute top-2.5 right-2.5 flex items-center gap-1">
                    {act.pdfUrl && (
                      <span className="px-1.5 py-0.5 rounded bg-rose-100 text-rose-800 text-[9px] font-bold flex items-center gap-0.5 shadow-xs" title="PDF Document Attached">
                        <FileText className="w-2.5 h-2.5" />
                        <span>PDF</span>
                      </span>
                    )}
                    {act.secondaryImage && (
                      <span className="px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 text-[9px] font-bold flex items-center gap-0.5 shadow-xs" title="2 Photos Available">
                        <Layers className="w-2.5 h-2.5" />
                        <span>2 Images</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-3.5">
                  <h3 className="font-body text-sm font-bold text-[#28150D] group-hover:text-[#FF650A] transition-colors leading-tight mb-1">
                    {act.title}
                  </h3>
                  <p className="text-xs text-[#6B5F58] leading-relaxed line-clamp-2">
                    {act.shortDesc}
                  </p>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="p-3.5 pt-0 flex items-center justify-between">
                <span className="text-[11px] font-medium text-[#FF650A] group-hover:underline flex items-center gap-1">
                  <span>View Evidence</span>
                </span>
                <div className="w-6 h-6 rounded-full bg-[#FFF2E8] border border-[#FFD9C0] flex items-center justify-center group-hover:bg-[#FF650A] group-hover:border-[#FF650A] transition-colors">
                  <ArrowRight className="w-3 h-3 text-[#FF650A] group-hover:text-white transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
