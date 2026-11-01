import React from 'react';
import { 
  BookOpen, 
  Code, 
  Users, 
  FlaskConical, 
  Presentation, 
  Terminal, 
  Laptop, 
  Flag,
  ArrowRight
} from 'lucide-react';
import { PORTFOLIO_DATA, Milestone } from '../data/portfolioData';

interface Section01Props {
  onSelectMilestone: (milestone: Milestone) => void;
  onViewAllTimeline: () => void;
}

export const Section01LearningJourney: React.FC<Section01Props> = ({
  onSelectMilestone,
  onViewAllTimeline
}) => {
  const { learningMilestones } = PORTFOLIO_DATA;

  // Icon mapping
  const renderIcon = (iconName: string) => {
    const props = { className: "w-4 h-4 text-[#FF650A]" };
    switch (iconName) {
      case 'BookOpen': return <BookOpen {...props} />;
      case 'Code': return <Code {...props} />;
      case 'Users': return <Users {...props} />;
      case 'FlaskConical': return <FlaskConical {...props} />;
      case 'Presentation': return <Presentation {...props} />;
      case 'Terminal': return <Terminal {...props} />;
      case 'Laptop': return <Laptop {...props} />;
      case 'Flag': return <Flag {...props} />;
      default: return <Code {...props} />;
    }
  };

  return (
    <section id="learning" className="py-10 bg-[#FFF9F1] border-b border-[#EFE6DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-8 pb-4 border-b border-[#EFE6DC]">
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
            <h2 className="font-section-title text-2xl sm:text-3xl font-bold text-[#241A17] tracking-tight">
              01. My Learning Journey
            </h2>
            <p className="text-xs sm:text-sm text-[#796E67] font-body">
              From the first concept to the final project. A timeline of my progress in Advanced Python Programming.
            </p>
          </div>

          <button
            onClick={onViewAllTimeline}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF650A] hover:text-[#B9470B] mt-2 md:mt-0 transition-colors group"
          >
            <span>View Full Timeline</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Horizontal Timeline Container */}
        <div className="relative pt-4 pb-2 overflow-x-auto scrollbar-none">
          {/* Subtle horizontal connecting line */}
          <div className="hidden md:block absolute top-[44px] left-[4%] right-[4%] h-[1.5px] bg-[#E5D7CB] -z-0" />
          <div className="hidden md:block absolute top-[44px] left-[4%] right-[4%] h-[1.5px] bg-gradient-to-r from-[#FF650A]/40 via-[#FF650A] to-[#FF650A]/40 -z-0" />

          {/* 8 Milestones Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4 md:gap-2 min-w-[700px] md:min-w-full">
            {learningMilestones.map((m) => (
              <div
                key={m.id}
                onClick={() => onSelectMilestone(m)}
                className="group flex flex-col items-center text-center cursor-pointer transition-transform duration-200 hover:-translate-y-1 relative z-10"
              >
                {/* Outlined circular icon badge */}
                <div className="w-10 h-10 rounded-full bg-[#FFFDF9] border border-[#FF650A]/60 flex items-center justify-center shadow-sm shadow-[#FF650A]/10 group-hover:border-[#FF650A] group-hover:shadow-md group-hover:scale-105 group-hover:bg-white transition-all duration-200">
                  {renderIcon(m.icon)}
                </div>

                {/* Orange Connector Dot */}
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF650A] my-2.5 border-2 border-[#FFF9F1] shadow-xs group-hover:scale-125 transition-transform" />

                {/* Milestone Title */}
                <h3 className="text-xs font-bold text-[#28150D] group-hover:text-[#FF650A] transition-colors leading-tight mb-1 font-body">
                  {m.title}
                </h3>

                {/* Milestone Short Caption */}
                <span className="text-[10px] text-[#8C7D73] leading-snug">
                  {m.caption}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
