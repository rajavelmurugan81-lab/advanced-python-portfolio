import React from 'react';
import { ArrowRight, ChevronRight, Clock, PlusCircle } from 'lucide-react';
import { PORTFOLIO_DATA, IndexActivity } from '../data/portfolioData';

interface Section08Props {
  onSelectIndexActivity: (item: IndexActivity) => void;
  onExploreAll: () => void;
}

export const Section08AllActivities: React.FC<Section08Props> = ({
  onSelectIndexActivity,
  onExploreAll
}) => {
  const { allTenActivities } = PORTFOLIO_DATA;

  const col1 = allTenActivities.slice(0, 5);
  const col2 = allTenActivities.slice(5, 10);

  const renderItem = (item: IndexActivity) => (
    <div
      key={item.number}
      onClick={() => onSelectIndexActivity(item)}
      className="flex items-center justify-between p-2 rounded-lg bg-[#FAF6F0] border border-[#ECE2D7] hover:border-[#FF650A] hover:bg-white transition-all duration-200 cursor-pointer group"
    >
      <div className="flex items-center gap-2">
        <span className="font-mono text-xs font-bold text-[#FF650A]">
          {item.number}
        </span>
        <span className="text-xs font-medium text-[#28150D] group-hover:text-[#FF650A] transition-colors font-body">
          {item.title}
        </span>
      </div>

      <div className="flex items-center gap-1.5">
        {item.badge && (
          <span className={`text-[9px] px-1.5 py-0.5 rounded ${item.badgeColor || 'bg-purple-100 text-purple-700'} font-semibold uppercase tracking-wider flex items-center gap-0.5`}>
            {item.badge === 'Coming Soon' ? (
              <Clock className="w-2.5 h-2.5" />
            ) : (
              <PlusCircle className="w-2.5 h-2.5" />
            )}
            <span>{item.badge}</span>
          </span>
        )}
        <ChevronRight className="w-3.5 h-3.5 text-[#B9470B]/70 group-hover:text-[#FF650A] group-hover:translate-x-0.5 transition-transform" />
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-xl p-5 sm:p-6 border border-[#EFE6DC] shadow-warm-sm flex flex-col justify-between h-full">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-1 pb-2 border-b border-[#F2ECE5]">
          <div>
            <h2 className="font-section-title text-xl sm:text-2xl font-bold text-[#241A17] tracking-tight">
              08. All 10 Activities
            </h2>
            <p className="text-xs text-[#796E67] font-body">
              A complete overview of my work in this subject.
            </p>
          </div>
          <button
            onClick={onExploreAll}
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#FF650A] hover:text-[#B9470B] transition-colors group flex-shrink-0 ml-2"
          >
            <span>Explore All</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Two Columns of 5 entries each */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-3">
          <div className="space-y-2">
            {col1.map((item) => renderItem(item))}
          </div>
          <div className="space-y-2">
            {col2.map((item) => renderItem(item))}
          </div>
        </div>
      </div>
    </div>
  );
};
