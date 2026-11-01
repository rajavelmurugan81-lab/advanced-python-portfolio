import React, { useEffect, useState } from 'react';
import { 
  X, 
  ExternalLink, 
  Copy, 
  Check, 
  Presentation, 
  Video, 
  Image as ImageIcon, 
  Code, 
  Layers, 
  Clock, 
  CheckCircle2, 
  Download,
  Play,
  FileText,
  AlertCircle,
  PlusCircle,
  Maximize2,
  Globe
} from 'lucide-react';

export interface ModalContent {
  type: 'ppt' | 'video' | 'screenshots' | 'activity' | 'coding' | 'reflection' | 'timeline' | 'padlet' | 'audio_website';
  title: string;
  subtitle?: string;
  data?: any;
}

interface DetailModalProps {
  content: ModalContent | null;
  onClose: () => void;
  onOpenLightbox?: (imgUrl: string, title: string, caption?: string) => void;
}

const GoogleDriveIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 87.3 78" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M6.6 66.85L10.45 73.5C11.25 74.9 12.35 76 13.65 76.8L25.95 55.5H2.8C2.8 57 3.2 58.5 4 59.8L6.6 66.85Z" fill="#0066DA"/>
    <path d="M43.65 25L29.8 1H17.5C16.2 1.75 15.1 2.85 14.3 4.25L1.2 29.35C0.4 30.7 0 32.2 0 33.7H23.15L43.65 25Z" fill="#00AC47"/>
    <path d="M73.55 76.8C74.85 76.05 75.95 74.95 76.75 73.55L86.5 56.65C87.3 55.3 87.7 53.8 87.7 52.3H64.55L73.55 76.8Z" fill="#EA4335"/>
    <path d="M43.65 25L57.5 1H32.7L18.9 25H43.65Z" fill="#00832D"/>
    <path d="M59.8 55.5H23.15L9.35 79.5H58.85C60.35 79.5 61.85 79.1 63.15 78.3L59.8 55.5Z" fill="#2684FC"/>
    <path d="M73.4 26.5L60.7 4.5C59.9 3.1 58.8 2 57.5 1.2L43.65 25L59.8 53H84.6C84.6 51.5 84.2 50 83.4 48.7L73.4 26.5Z" fill="#FFBA00"/>
  </svg>
);

export const DetailModal: React.FC<DetailModalProps> = ({ content, onClose, onOpenLightbox }) => {
  const [copied, setCopied] = useState<boolean>(false);
  const [activeIotImageIndex, setActiveIotImageIndex] = useState<number>(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (content) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [content, onClose]);

  if (!content) return null;

  const copyCode = (codeStr: string) => {
    navigator.clipboard.writeText(codeStr);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 max-w-3xl w-full bg-[#1C120B] border border-[#4E2918] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Top Header */}
        <div className="px-5 py-4 bg-[#26160F] border-b border-[#3E2114] flex items-center justify-between text-white">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF650A]" />
            <div>
              <h3 className="font-heading-display font-bold text-lg sm:text-xl leading-tight">
                {content.title}
              </h3>
              {content.subtitle && (
                <p className="text-[11px] text-[#A49489] mt-0.5">
                  {content.subtitle}
                </p>
              )}
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#341B10] hover:bg-[#4E2716] text-[#D8C7BC] hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Based on Type */}
        <div className="p-5 sm:p-7 overflow-y-auto bg-[#150D08] text-[#E5D7CD] space-y-5">
          
          {/* Audio Recording about Website - Activity 07 Laboratory Activity Detail */}
          {content.type === 'audio_website' && (
            <div className="space-y-5">
              {/* Top Banner / Activity Overview */}
              <div className="bg-[#24150D] p-5 rounded-xl border border-[#3E2316] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#FF650A]/20 border border-[#FF650A]/40 text-[#FF650A] text-[11px] font-mono font-bold uppercase tracking-wider">
                      Activity 07 • Laboratory Project
                    </span>
                    <span className="text-xs text-[#A8988D]">Advanced Python Programming</span>
                  </div>
                  <h4 className="font-heading-display text-xl sm:text-2xl font-bold text-white tracking-wide">
                    Audio Website
                  </h4>
                  <p className="text-xs sm:text-sm text-[#D8C7BC] mt-1.5 leading-relaxed max-w-xl font-body">
                    Audio recording website developed as part of the Advanced Python Programming laboratory project.
                  </p>
                </div>

                <div className="flex flex-wrap sm:flex-col gap-2 flex-shrink-0">
                  {/* View Project on Google Drive Button */}
                  <a
                    href="https://drive.google.com/file/d/1GAPBIA5BXlGmt91gaTymAza_Etf0wjUN/view?usp=drivesdk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#FF650A] via-[#E25A09] to-[#B9470B] text-white text-xs sm:text-sm font-bold shadow-md hover:brightness-110 active:scale-95 transition-all group"
                  >
                    <GoogleDriveIcon className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span>View Project on Google Drive</span>
                  </a>

                  {/* Visit Live Website */}
                  <a
                    href="https://diagnostic-laboratory-portal.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#2E180E] border border-[#522D1B] hover:border-[#FF650A] text-white text-xs font-semibold hover:brightness-110 transition-all"
                  >
                    <Globe className="w-3.5 h-3.5 text-[#FF650A]" />
                    <span>Visit Live Website ↗</span>
                  </a>

                  {/* Download PPTX */}
                  <a
                    href="/evidence/08-website-ppt/website_ppt.pptx"
                    download="website_ppt.pptx"
                    className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-full bg-[#24130B] border border-[#432314] hover:border-[#FF650A] text-[#D8C7BC] hover:text-white text-xs font-medium transition-colors"
                  >
                    <Download className="w-3.5 h-3.5 text-[#FF650A]" />
                    <span>Download PPTX</span>
                  </a>
                </div>
              </div>

              {/* Dedicated Google Drive Official Resource Banner */}
              <div className="bg-[#1C100A] p-4 sm:p-5 rounded-xl border border-[#482818] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#28150D] border border-[#522D1B] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <GoogleDriveIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 rounded bg-[#FF650A]/20 text-[#FF8533] text-[10px] font-mono font-bold uppercase tracking-wider">
                        Google Drive
                      </span>
                      <span className="text-[11px] text-[#A8988D]">Official Project Resource</span>
                    </div>
                    <h5 className="text-sm font-bold text-white">
                      Audio Website — Project Documentation & Demo Resource
                    </h5>
                    <p className="text-xs text-[#C5B7AD] mt-0.5 leading-relaxed font-body">
                      Audio recording website developed as part of the Advanced Python Programming laboratory project.
                    </p>
                  </div>
                </div>

                <a
                  href="https://drive.google.com/file/d/1GAPBIA5BXlGmt91gaTymAza_Etf0wjUN/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FF650A] to-[#B9470B] text-white text-xs font-bold shadow-md hover:brightness-110 active:scale-95 transition-all flex-shrink-0 group"
                >
                  <GoogleDriveIcon className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>View Project on Google Drive</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                </a>
              </div>

              {/* Original Laboratory Photograph Evidence */}
              <div className="bg-[#1F130B] p-4 sm:p-5 rounded-xl border border-[#432516] space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-[#341D12]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FF650A]" />
                    <h5 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                      Laboratory Recording Session Evidence
                    </h5>
                  </div>
                  <span className="text-[11px] text-[#A8988D] font-mono">
                    audio-website-lab.jpg (576×1024)
                  </span>
                </div>

                {/* Uncropped Photograph Display with Hover & Lightbox Action */}
                <div
                  onClick={() =>
                    onOpenLightbox &&
                    onOpenLightbox(
                      '/evidence/audio-website-lab.jpg',
                      'Activity 07: Audio Recording about Website',
                      'Original laboratory photograph showing practical work and the recording session about our website project.'
                    )
                  }
                  className="group/photo relative w-full bg-[#120B07] rounded-xl overflow-hidden border border-[#3E2316] hover:border-[#FF650A] transition-colors cursor-pointer flex items-center justify-center p-2 sm:p-3"
                >
                  <img
                    src="/evidence/audio-website-lab.jpg"
                    alt="Original laboratory photograph from Audio Recording about Website session"
                    loading="lazy"
                    className="w-full max-h-[460px] object-contain rounded-lg transition-transform duration-300 group-hover/photo:scale-[1.01]"
                  />

                  {/* Subtle Hover Action Hint */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/photo:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="px-4 py-2 rounded-full bg-[#1C120B]/90 backdrop-blur-xs text-white text-xs font-semibold flex items-center gap-2 shadow-2xl border border-white/10">
                      <Maximize2 className="w-3.5 h-3.5 text-[#FF650A]" />
                      <span>Click to view in larger lightbox</span>
                    </span>
                  </div>
                </div>

                {/* Caption and Lightbox Button */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1 text-xs text-[#C5B7AD]">
                  <p className="text-[11px] leading-relaxed text-[#A49489]">
                    Original photograph capturing our team during the laboratory activity recording audio explaining the website.
                  </p>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button
                      type="button"
                      onClick={() =>
                        onOpenLightbox &&
                        onOpenLightbox(
                          '/evidence/audio-website-lab.jpg',
                          'Activity 07: Audio Recording about Website',
                          'Original laboratory photograph showing practical work and the recording session about our website project.'
                        )
                      }
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#321C11] hover:bg-[#432516] text-[#FF650A] text-xs font-semibold border border-[#FF650A]/40 transition-colors"
                    >
                      <Maximize2 className="w-3 h-3" />
                      <span>View in Lightbox</span>
                    </button>
                    <a
                      href="/evidence/audio-website-lab.jpg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#26150D] hover:bg-[#341D12] text-[#D8C7BC] text-xs font-medium border border-[#3E2316] transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span>Full Resolution</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Screenshots Gallery (Kept 100% Intact) */}
              <div className="bg-[#24150D] p-4 rounded-xl border border-[#3A1F13] space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-[#3A1F13]">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-[#FF650A]" />
                    <span>Website Project Screenshots & Walkthrough</span>
                  </h5>
                  <span className="text-[11px] text-[#A8988D]">5 Screens Captured</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                  {[
                    { id: '1', filename: 'Lab_web_1.png', label: 'Primary Interface', path: '/evidence/07-audio-recording-website/Lab_web_1.png' },
                    { id: '2', filename: 'Lab_web_2.png', label: 'Recording Workflow', path: '/evidence/07-audio-recording-website/Lab_web_2.png' },
                    { id: '3', filename: 'Lab_web_3.png', label: 'Audio Management', path: '/evidence/07-audio-recording-website/Lab_web_3.png' },
                    { id: '4', filename: 'Lab_web_4.png', label: 'Analytics & Detail', path: '/evidence/07-audio-recording-website/Lab_web_4.png' },
                    { id: '5', filename: 'Lab_web_5.png', label: 'Settings & Overview', path: '/evidence/07-audio-recording-website/Lab_web_5.png' }
                  ].map((s) => (
                    <div
                      key={s.id}
                      onClick={() =>
                        onOpenLightbox &&
                        onOpenLightbox(
                          s.path,
                          `Website Project — ${s.filename}`,
                          s.label
                        )
                      }
                      className="rounded-lg bg-[#180E09] border border-[#341D12] hover:border-[#FF650A] p-1.5 cursor-pointer transition-colors group flex flex-col justify-between"
                    >
                      <div className="relative w-full aspect-[16/9] bg-[#0E0704] rounded overflow-hidden flex items-center justify-center p-0.5">
                        <img
                          src={s.path}
                          alt={s.label}
                          loading="lazy"
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200"
                        />
                      </div>
                      <span className="text-[10px] text-[#C5B7AD] font-mono block truncate mt-1 group-hover:text-[#FF650A]">
                        {s.filename}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 1. PPT Slide Deck */}
          {content.type === 'ppt' && (
            <div className="space-y-4">
              <div className="bg-[#24150D] p-5 rounded-xl border border-[#3E2316] flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#FF650A] to-[#B9470B] flex items-center justify-center text-white mb-3 shadow-lg">
                  <Presentation className="w-7 h-7" />
                </div>
                <h4 className="text-base font-bold text-white mb-1">
                  Audio Recording Website — Business Thesis
                </h4>
                <p className="text-xs text-[#A8988D] max-w-md mb-4">
                  Original PowerPoint Presentation file (<code className="text-[#FF650A]">website_ppt.pptx</code>) verified in project evidence repository.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  <a
                    href="https://diagnostic-laboratory-portal.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FF650A] to-[#B9470B] text-white text-xs font-bold shadow-md hover:brightness-110 transition-all"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>Visit Live Website ↗</span>
                  </a>
                  <a
                    href="/evidence/08-website-ppt/website_ppt.pptx"
                    download="website_ppt.pptx"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#2E180E] border border-[#522D1B] hover:border-[#FF650A] text-white text-xs font-semibold shadow-xs transition-colors"
                  >
                    <Download className="w-4 h-4 text-[#FF650A]" />
                    <span>Download PPTX (1.5 MB)</span>
                  </a>
                  <a
                    href="/evidence/08-website-ppt/website_ppt.pptx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#24150D] border border-[#3E2316] text-[#D8C7BC] text-xs font-medium hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open in Browser</span>
                  </a>
                </div>
              </div>

              <div className="bg-[#24150D] p-4 rounded-xl border border-[#3A1F13]">
                <h4 className="text-xs font-bold text-[#FF650A] uppercase tracking-wider mb-2">
                  Presentation File Details:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#C5B7AD]">
                  <div>• Filename: <span className="font-mono text-white">website_ppt.pptx</span></div>
                  <div>• File Size: <span className="font-mono text-white">1,506,290 bytes (1.5 MB)</span></div>
                  <div>• Evidence Location: <span className="font-mono text-[#FF650A]">public/evidence/08-website-ppt/</span></div>
                  <div>• Status: <span className="text-emerald-400 font-semibold">Verified Original File</span></div>
                </div>
              </div>
            </div>
          )}

          {/* 2. Demo Video (Hosted on Google Drive) */}
          {content.type === 'video' && (
            <div className="space-y-4">
              <div className="relative w-full aspect-[16/9] bg-[#160E09] rounded-xl overflow-hidden border border-[#3E2316] flex items-center justify-center p-2 shadow-xl group">
                <img
                  src="/evidence/07-audio-recording-website/Lab_web_2.png"
                  alt="Website Demonstration Preview"
                  className="w-full h-full object-contain rounded-lg"
                />
                
                {/* Play Action Link Overlay */}
                <a
                  href="https://drive.google.com/drive/folders/1qkAK6YBkBmYb7Njuh_9Exq-kdBn6qzAH?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-black/40 group-hover:bg-black/30 flex flex-col items-center justify-center transition-colors"
                >
                  <div className="w-16 h-16 rounded-full bg-[#FF650A] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform mb-3">
                    <Play className="w-7 h-7 fill-current ml-1" />
                  </div>
                  <span className="px-4 py-2 rounded-full bg-white/95 text-[#28150D] text-xs font-bold shadow-lg flex items-center gap-1.5">
                    <span>Watch Website Demo ↗</span>
                  </span>
                </a>
              </div>

              {/* Call to action & note */}
              <div className="bg-[#24150D] p-5 rounded-xl border border-[#3E2316] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-bold text-white mb-0.5">
                    Demo Video of Website
                  </h4>
                  <p className="text-xs text-[#FF650A] font-medium mb-1">
                    Full demonstration video hosted on Google Drive.
                  </p>
                  <p className="text-[11px] text-[#A8988D]">
                    Due to high video file size, the demonstration walkthrough is streamable directly on Google Drive.
                  </p>
                </div>

                <div className="flex flex-wrap sm:flex-col gap-2 flex-shrink-0">
                  <a
                    href="https://drive.google.com/file/d/1GAPBIA5BXlGmt91gaTymAza_Etf0wjUN/view?usp=drivesdk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FF650A] to-[#B9470B] text-white text-xs font-bold shadow-md hover:brightness-110 active:scale-95 transition-all group"
                  >
                    <GoogleDriveIcon className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                    <span>View Project on Google Drive</span>
                  </a>

                  <a
                    href="https://drive.google.com/drive/folders/1qkAK6YBkBmYb7Njuh_9Exq-kdBn6qzAH?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-[#2E180E] border border-[#522D1B] hover:border-[#FF650A] text-[#D8C7BC] hover:text-white text-xs font-semibold transition-colors"
                  >
                    <span>Browse Drive Folder</span>
                    <ExternalLink className="w-3 h-3 text-[#FF650A]" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* 3. Project Screenshots / Audio Recording Evidence */}
          {content.type === 'screenshots' && (
            <div className="space-y-4">
              <div className="relative w-full aspect-[16/10] bg-[#160E09] rounded-xl overflow-hidden border border-[#3E2316] flex items-center justify-center shadow-lg p-2">
                <img
                  src="/evidence/07-audio-recording-website/Bussiness_thesis_audio_rrecording.jpeg"
                  alt="Application Screenshot Evidence"
                  className="w-full h-full object-contain rounded-md"
                />
              </div>

              <div className="bg-[#24150D] p-4 rounded-xl border border-[#3A1F13] flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-white">
                    Original Evidence: Bussiness_thesis_audio_rrecording.jpeg
                  </h4>
                  <p className="text-[11px] text-[#A8988D]">
                    Dimensions: 900x1600 • Location: public/evidence/07-audio-recording-website/
                  </p>
                </div>
                <a
                  href="/evidence/07-audio-recording-website/Bussiness_thesis_audio_rrecording.jpeg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FF650A] text-white text-xs font-semibold"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Full View</span>
                </a>
              </div>
            </div>
          )}

          {/* 4. Classroom Activity Detail (with PDF & multiple images support) */}
          {content.type === 'activity' && content.data && (
            <div className="space-y-4">
              {/* If IoT with two images */}
              {content.data.secondaryImage ? (
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveIotImageIndex(0)}
                      className={`px-3 py-1 rounded-md text-xs font-semibold ${
                        activeIotImageIndex === 0
                          ? 'bg-[#FF650A] text-white'
                          : 'bg-[#2E180E] text-[#D8C7BC]'
                      }`}
                    >
                      Circuit Photo 1 (571x930)
                    </button>
                    <button
                      onClick={() => setActiveIotImageIndex(1)}
                      className={`px-3 py-1 rounded-md text-xs font-semibold ${
                        activeIotImageIndex === 1
                          ? 'bg-[#FF650A] text-white'
                          : 'bg-[#2E180E] text-[#D8C7BC]'
                      }`}
                    >
                      Circuit Photo 2 (591x970)
                    </button>
                  </div>
                  <div className="relative w-full h-[280px] bg-[#160E09] rounded-xl overflow-hidden border border-[#3E2316] flex items-center justify-center p-2">
                    <img
                      src={activeIotImageIndex === 0 ? content.data.safeUrl : content.data.secondarySafeUrl}
                      alt={content.data.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              ) : (
                /* Single uncropped image container */
                <div className="relative w-full h-[280px] bg-[#160E09] rounded-xl overflow-hidden border border-[#3E2316] flex items-center justify-center p-2">
                  <img
                    src={content.data.safeUrl || content.data.image}
                    alt={content.data.title}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-[#180E08]/90 text-[#FF650A] border border-[#FF650A]/40 text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
                      {content.data.category}
                    </span>
                  </div>
                </div>
              )}

              {/* PDF Download Action if attached (Python Tutorial Discussion) */}
              {content.data.pdfUrl && (
                <div className="bg-[#2A180F] p-4 rounded-xl border border-[#FF650A]/40 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-rose-600/20 border border-rose-500/40 flex items-center justify-center text-rose-400">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">
                        Attached PDF Document: {content.data.pdfFilename}
                      </h4>
                      <p className="text-[11px] text-[#A8988D]">
                        Size: 358 KB • Original syllabus discussion document
                      </p>
                    </div>
                  </div>

                  <a
                    href={content.data.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#FF650A] hover:bg-[#B9470B] text-white text-xs font-semibold shadow-xs transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Open PDF</span>
                  </a>
                </div>
              )}

              {/* Overview & Key Takeaway */}
              <div className="bg-[#24150D] p-4 rounded-xl border border-[#3A1F13] space-y-3">
                <div>
                  <h4 className="text-xs font-bold text-[#FF650A] uppercase tracking-wider mb-1">
                    Activity Overview
                  </h4>
                  <p className="text-xs text-[#E5D7CD] leading-relaxed">
                    {content.data.extendedDesc}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#3A1F13]">
                  <h4 className="text-xs font-bold text-white mb-1">
                    Key Academic Takeaway:
                  </h4>
                  <p className="text-xs text-[#C5B7AD] italic">
                    "{content.data.keyTakeaway}"
                  </p>
                </div>

                <div className="pt-2 border-t border-[#3A1F13]">
                  <h4 className="text-xs font-bold text-white mb-1.5">
                    Tools & Methods:
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {content.data.toolsUsed?.map((tool: string) => (
                      <span
                        key={tool}
                        className="px-2 py-0.5 rounded bg-[#321B11] border border-[#522B19] text-[10px] text-[#D8C7BC]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 5. Padlet Coding Evidence Modal */}
          {content.type === 'padlet' && (
            <div className="space-y-4">
              <div className="relative w-full h-[360px] bg-[#160E09] rounded-xl overflow-hidden border border-[#3E2316] flex items-center justify-center p-2">
                <img
                  src="/evidence/10-padlet-coding/Padlet.png"
                  alt="Padlet Coding Practice Evidence"
                  className="w-full h-full object-contain rounded-md"
                />
              </div>

              <div className="bg-[#24150D] p-4 rounded-xl border border-[#3A1F13] flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-white">
                    Original Course Padlet Board Evidence
                  </h4>
                  <p className="text-[11px] text-[#A8988D]">
                    Dimensions: 1260x1144 • Location: public/evidence/10-padlet-coding/Padlet.png
                  </p>
                </div>
                <a
                  href="/evidence/10-padlet-coding/Padlet.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FF650A] text-white text-xs font-semibold"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Open Full Resolution</span>
                </a>
              </div>
            </div>
          )}

          {/* 6. Coding Practice & LeetCode Solution */}
          {content.type === 'coding' && content.data && (
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-[#24150D] p-3 rounded-lg border border-[#3A1F13]">
                <div className="flex items-center gap-2.5">
                  <span className="px-2 py-0.5 rounded bg-blue-600 text-white font-mono text-xs font-bold">
                    {content.data.badge}
                  </span>
                  <div>
                    <span className="text-sm font-bold text-white block">
                      {content.data.title}
                    </span>
                    <span className="text-xs text-[#A8988D]">
                      {content.data.category} • {content.data.platform}
                    </span>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full bg-[#321C11] text-[#FF650A] text-xs font-mono font-semibold">
                  {content.data.difficulty}
                </span>
              </div>

              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1.5">
                  Problem Description:
                </h4>
                <p className="text-xs text-[#C5B7AD] bg-[#1E120A] p-3 rounded-lg border border-[#341B0F] leading-relaxed">
                  {content.data.description}
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <h4 className="text-xs font-bold text-[#FF650A] uppercase tracking-wider flex items-center gap-1.5">
                    <Code className="w-3.5 h-3.5" />
                    Python Solution
                  </h4>
                  <button
                    onClick={() => copyCode(content.data.pythonSolution)}
                    className="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded bg-[#2E180E] border border-[#522D1B] text-[#D5C6BA] hover:text-white hover:border-[#FF650A] transition-colors"
                  >
                    {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copied ? 'Copied!' : 'Copy Code'}</span>
                  </button>
                </div>

                <pre className="p-4 rounded-xl bg-[#0F0A07] border border-[#2F1A0F] font-mono text-xs text-[#48E59B] overflow-x-auto leading-relaxed shadow-inner">
                  <code>{content.data.pythonSolution}</code>
                </pre>
              </div>
            </div>
          )}

          {/* 7. Reflection Details */}
          {content.type === 'reflection' && content.data && (
            <div className="space-y-4">
              <div className="bg-[#24150D] p-5 rounded-xl border border-[#3A1F13]">
                <h4 className="font-heading-display text-lg font-bold text-[#FF650A] mb-2">
                  {content.data.title}
                </h4>
                <p className="text-sm text-white leading-relaxed">
                  {content.data.answer}
                </p>
              </div>
            </div>
          )}

          {/* 8. Full Timeline */}
          {content.type === 'timeline' && content.data && (
            <div className="space-y-3">
              <p className="text-xs text-[#A8988D] mb-2">
                Chronological breakdown of milestones completed during the academic semester:
              </p>
              {content.data.map((item: any) => (
                <div
                  key={item.id}
                  className="p-3 rounded-lg bg-[#24150D] border border-[#3A1F13] flex items-start gap-3"
                >
                  <span className="w-6 h-6 rounded-full bg-[#FF650A] text-white font-mono text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {item.id}
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-white">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#C5B7AD] mt-0.5">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3 bg-[#23150F] border-t border-[#3E2114] flex items-center justify-between text-xs text-[#A49489]">
          <span>Advanced Python Programming • Portfolio Records</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-full bg-[#341B10] hover:bg-[#4E2716] text-white font-medium transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
