import React from 'react';
import { 
  ArrowRight, 
  Quote, 
  BookMarked, 
  Sparkles, 
  AlertTriangle, 
  Users, 
  TrendingUp, 
  Target 
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface Section09Props {
  onSelectPrompt: (promptId: string) => void;
  onReadFullReflection: () => void;
}

export const Section09MyReflection: React.FC<Section09Props> = ({
  onSelectPrompt,
  onReadFullReflection
}) => {
  const { reflection } = PORTFOLIO_DATA;

  const getPromptIcon = (id: string) => {
    const props = { className: "w-3.5 h-3.5 text-[#FF650A]" };
    switch (id) {
      case 'p1': return <BookMarked {...props} />;
      case 'p2': return <Sparkles {...props} />;
      case 'p3': return <AlertTriangle {...props} />;
      case 'p4': return <Users {...props} />;
      case 'p5': return <TrendingUp {...props} />;
      case 'p6': return <Target {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <div id="reflection" className="bg-white rounded-xl p-5 sm:p-6 border border-[#EFE6DC] shadow-warm-sm flex flex-col justify-between h-full">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-1 pb-2 border-b border-[#F2ECE5]">
          <div>
            <h2 className="font-section-title text-xl sm:text-2xl font-bold text-[#241A17] tracking-tight">
              09. My Reflection
            </h2>
          </div>
          <button
            onClick={onReadFullReflection}
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#FF650A] hover:text-[#B9470B] transition-colors group flex-shrink-0 ml-2"
          >
            <span>Read Full Reflection</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Two-Column Reflection Body */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-3 items-stretch">
          
          {/* Left: Quotation Card */}
          <div className="md:col-span-6 bg-gradient-to-br from-[#FFF7ED] to-[#FAF2E8] rounded-xl p-5 border border-[#F3E5D6] flex flex-col justify-between relative overflow-hidden">
            {/* Giant Stylized Quotation Mark */}
            <div className="text-[#FF650A] text-5xl font-serif font-black leading-none mb-1 select-none opacity-90">
              “
            </div>

            <p className="text-xs sm:text-sm text-[#2E180E] font-medium leading-relaxed italic z-10 my-2">
              {reflection.quote}
            </p>

            <div className="pt-2 border-t border-[#EBDCCF] mt-2 flex items-center justify-between text-[11px] text-[#796E67]">
              <span className="font-semibold text-[#28150D]">{reflection.author}</span>
              <span className="text-[10px] text-[#A49489]">{reflection.role}</span>
            </div>
          </div>

          {/* Right: 6 Reflection Prompts List */}
          <div className="md:col-span-6 flex flex-col justify-between space-y-1.5">
            {reflection.prompts.map((p) => (
              <div
                key={p.id}
                onClick={() => onSelectPrompt(p.id)}
                className="p-2 rounded-lg bg-[#FAF6F0] border border-[#ECE2D7] hover:border-[#FF650A] hover:bg-white transition-all duration-200 cursor-pointer flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-md bg-[#FFF2E8] border border-[#FFD9C0] flex items-center justify-center flex-shrink-0 group-hover:border-[#FF650A] transition-colors">
                    {getPromptIcon(p.id)}
                  </div>
                  <span className="text-xs font-semibold text-[#28150D] group-hover:text-[#FF650A] transition-colors font-body">
                    {p.title}
                  </span>
                </div>

                <ArrowRight className="w-3.5 h-3.5 text-[#FF650A] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};
