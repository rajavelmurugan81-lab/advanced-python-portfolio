import React, { useEffect } from 'react';
import { X, ExternalLink, ShieldCheck, Download } from 'lucide-react';

export interface LightboxItem {
  image: string;
  title: string;
  subtitle?: string;
  caption?: string;
  date?: string;
  aspectRatio?: string;
}

interface LightboxModalProps {
  item: LightboxItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative z-10 max-w-5xl w-full bg-[#1F120B] border border-[#522D1B] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[94vh]">
        
        {/* Modal Top Bar */}
        <div className="px-5 py-3.5 bg-[#2A170E] border-b border-[#432516] flex items-center justify-between text-white">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF650A]" />
            <h3 className="font-heading-display font-bold text-lg sm:text-xl tracking-wide truncate max-w-md sm:max-w-xl">
              {item.title}
            </h3>
            {item.date && (
              <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-[#3D2012] text-[#FF650A] text-xs font-mono ml-2">
                {item.date}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={item.image}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-[#3D2012] hover:bg-[#522B18] text-[#D8C7BC] hover:text-white transition-colors"
              title="Open full image in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#3D2012] hover:bg-[#522B18] text-[#D8C7BC] hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Main View: Complete Uncropped Image */}
        <div className="flex-1 bg-[#100804] p-3 sm:p-6 flex items-center justify-center overflow-auto min-h-[300px]">
          <img
            src={item.image}
            alt={item.title}
            className="max-w-full max-h-[66vh] object-contain rounded-lg shadow-2xl border border-[#3A1F12]"
            style={{
              aspectRatio: item.aspectRatio || 'auto',
              imageRendering: 'auto'
            }}
          />
        </div>

        {/* Modal Information Footer */}
        <div className="p-4 sm:p-5 bg-[#24140D] border-t border-[#432516] text-[#E5D7CD]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              {item.subtitle && (
                <p className="text-sm font-semibold text-white mb-0.5">
                  {item.subtitle}
                </p>
              )}
              {item.caption && (
                <p className="text-xs text-[#A8988D] max-w-3xl">
                  {item.caption}
                </p>
              )}
            </div>

            <div className="flex items-center gap-3 flex-shrink-0">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#341B0E] border border-[#5A311B] text-xs text-[#FF650A] font-medium">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Original Uncropped Evidence</span>
              </span>

              <a
                href={item.image}
                download
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF650A] hover:bg-[#B9470B] text-white text-xs font-semibold shadow-xs transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
