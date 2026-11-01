import React from 'react';
import { ArrowRight, ArrowUpRight, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { PORTFOLIO_DATA, CodingQuestion } from '../data/portfolioData';

interface Section07Props {
  onSelectQuestion: (question: CodingQuestion) => void;
  onViewPadletEvidence: () => void;
  onViewAllQuestions: () => void;
}

export const Section07CodingPractice: React.FC<Section07Props> = ({
  onSelectQuestion,
  onViewPadletEvidence,
  onViewAllQuestions
}) => {
  const { codingPractice } = PORTFOLIO_DATA;

  const handleClick = (q: CodingQuestion) => {
    if (q.evidenceImage) {
      onViewPadletEvidence();
    } else {
      onSelectQuestion(q);
    }
  };

  return (
    <div className="bg-white rounded-xl p-5 sm:p-6 border border-[#EFE6DC] shadow-warm-sm flex flex-col justify-between h-full">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-1 pb-2 border-b border-[#F2ECE5]">
          <div>
            <h2 className="font-section-title text-xl sm:text-2xl font-bold text-[#241A17] tracking-tight">
              07. Coding Practice
            </h2>
            <p className="text-xs text-[#796E67] font-body">
              Padlet LeetCode questions and coding practice.
            </p>
          </div>
          <button
            onClick={onViewAllQuestions}
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#FF650A] hover:text-[#B9470B] transition-colors group flex-shrink-0 ml-2"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* 4 Compact Questions List */}
        <div className="space-y-2.5 mt-3">
          {codingPractice.map((q) => (
            <div
              key={q.id}
              onClick={() => handleClick(q)}
              className="p-2.5 rounded-lg border border-[#ECE2D7] bg-[#FAF6F0] hover:border-[#FF650A] hover:bg-white transition-all duration-200 cursor-pointer flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                {/* Colored Badge Icon matching screenshot */}
                <div
                  className={`w-8 h-8 rounded-lg ${q.badgeColor} flex items-center justify-center font-mono font-bold text-xs shadow-xs flex-shrink-0`}
                >
                  {q.badge}
                </div>

                {/* Title & Platform */}
                <div>
                  <h3 className="text-xs font-bold text-[#28150D] group-hover:text-[#FF650A] transition-colors font-body leading-tight">
                    {q.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[10px] text-[#796E67]">
                      {q.platform}
                    </span>
                    <span className="text-[10px] text-[#9E8E83]">•</span>
                    <span className="text-[10px] text-[#FF650A] font-medium">
                      {q.difficulty}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action arrow button */}
              <div className="w-6 h-6 rounded-full bg-white border border-[#E8DDD1] flex items-center justify-center group-hover:border-[#FF650A] group-hover:bg-[#FFF2E8] transition-colors">
                {q.evidenceImage ? (
                  <ImageIcon className="w-3 h-3 text-[#FF650A]" />
                ) : q.id <= 2 ? (
                  <ChevronRight className="w-3.5 h-3.5 text-[#796E67] group-hover:text-[#FF650A]" />
                ) : (
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#796E67] group-hover:text-[#FF650A]" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
