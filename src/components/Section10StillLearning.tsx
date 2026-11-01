import React from 'react';
import { 
  Sparkles, 
  BookOpen, 
  Layers, 
  Laptop, 
  Code2, 
  TrendingUp 
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface Section10Props {
  onBlogNotifyClick?: () => void;
}

export const Section10StillLearning: React.FC<Section10Props> = () => {
  const { stillLearning } = PORTFOLIO_DATA;

  const getGoalIcon = (index: number) => {
    const props = { className: "w-3.5 h-3.5 text-[#FF650A]" };
    switch (index) {
      case 0: return <BookOpen {...props} />;
      case 1: return <Layers {...props} />;
      case 2: return <Laptop {...props} />;
      case 3: return <Code2 {...props} />;
      case 4: return <TrendingUp {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <section className="py-10 bg-[#FFF9F1] border-b border-[#EFE6DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-6 pb-3 border-b border-[#EFE6DC]">
          <h2 className="font-section-title text-2xl sm:text-3xl font-bold text-[#241A17] tracking-tight">
            10. Still Learning. Still Building.
          </h2>
          <p className="text-xs sm:text-sm text-[#796E67] font-body">
            My future learning goals and technical roadmap.
          </p>
        </div>

        {/* Content Box */}
        <div className="bg-white rounded-2xl border border-[#ECE2D7] p-5 sm:p-7 shadow-warm-md grid grid-cols-1 lg:grid-cols-12 gap-6 relative overflow-hidden">
          
          {/* Left: My Future Goals (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <h3 className="font-body text-base font-bold text-[#28150D] mb-4">
                My Future Goals
              </h3>

              <div className="space-y-3">
                {stillLearning.futureGoals.map((goal, idx) => (
                  <div 
                    key={goal} 
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF6F0] border border-[#ECE2D7] hover:border-[#FF650A] transition-colors"
                  >
                    <div className="w-7 h-7 rounded-full bg-[#FFF2E8] border border-[#FFD9C0] flex items-center justify-center flex-shrink-0">
                      {getGoalIcon(idx)}
                    </div>
                    <span className="text-xs sm:text-sm text-[#453831] font-medium leading-tight">
                      {goal}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#F2ECE5] mt-6 flex items-center justify-between text-xs text-[#8C7D73]">
              <span>Continuous Growth & Exploration</span>
              <span className="text-[#FF650A] font-bold">2026 & Beyond</span>
            </div>
          </div>

          {/* Right: Golden Hour Mountain Landscape Graphic (5 cols) */}
          <div className="lg:col-span-5 rounded-xl overflow-hidden relative min-h-[220px] bg-gradient-to-tr from-[#E8A375] via-[#E28352] to-[#B9470B] flex items-center justify-center p-6 border border-[#E8DDD1]">
            {/* Background mountain photo if available */}
            <img
              src="/images/future-mountain.png"
              alt="Future Mountain Landscape"
              className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80"
            />

            {/* Stylized Typography Overlay matching screenshot */}
            <div className="relative z-10 text-right p-4 bg-black/25 backdrop-blur-[2px] rounded-xl border border-white/10">
              <span className="font-serif italic text-white text-2xl sm:text-3xl font-bold tracking-wide drop-shadow-md block leading-tight">
                More Learning,
              </span>
              <span className="font-serif italic text-[#FFE8D6] text-2xl sm:text-3xl font-bold tracking-wide drop-shadow-md block leading-tight">
                More Possibilities.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
