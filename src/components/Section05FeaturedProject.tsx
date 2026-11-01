import React, { useState } from 'react';
import { 
  ArrowRight, 
  ArrowUpRight,
  UserCheck, 
  PlayCircle, 
  FolderGit2, 
  Code2, 
  Download, 
  ExternalLink, 
  Maximize2, 
  ImageIcon, 
  Presentation, 
  Layers, 
  ChevronLeft, 
  ChevronRight,
  ShieldCheck, 
  Globe, 
  Sparkles,
  Video,
  FileText,
  BookOpen,
  Cpu,
  Database,
  Activity
} from 'lucide-react';
import { PORTFOLIO_DATA, ProjectScreenshot } from '../data/portfolioData';

interface Section05Props {
  onOpenProjectDetails: () => void;
  onOpenCaseStudy: () => void;
  onOpenLightbox: (imageUrl: string, title: string, caption?: string) => void;
}

export const Section05FeaturedProject: React.FC<Section05Props> = ({
  onOpenProjectDetails,
  onOpenCaseStudy,
  onOpenLightbox
}) => {
  const { featuredProject } = PORTFOLIO_DATA;
  const screenshots = featuredProject.screenshots;
  const [selectedScreenIndex, setSelectedScreenIndex] = useState<number>(0);

  const activeScreenshot: ProjectScreenshot = screenshots[selectedScreenIndex] || screenshots[0];

  const handleNext = () => {
    setSelectedScreenIndex((prev) => (prev + 1) % screenshots.length);
  };

  const handlePrev = () => {
    setSelectedScreenIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const renderFeatureIcon = (name: string) => {
    const props = { className: "w-4 h-4 text-[#FF650A]" };
    switch (name) {
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'Cpu': return <Cpu {...props} />;
      case 'Database': return <Database {...props} />;
      case 'Activity': return <Activity {...props} />;
      case 'UserCheck': return <UserCheck {...props} />;
      case 'PlayCircle': return <PlayCircle {...props} />;
      case 'FolderGit2': return <FolderGit2 {...props} />;
      case 'Code2': return <Code2 {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <section id="project" className="py-12 bg-[#FFF9F1] border-b border-[#EFE6DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 pb-4 border-b border-[#EFE6DC] gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF650A]" />
              <span className="text-xs font-mono font-bold tracking-widest text-[#FF650A] uppercase">
                05. Featured Project • Case Study
              </span>
            </div>
            <h2 className="font-section-title text-2xl sm:text-3xl md:text-4xl font-bold text-[#241A17] tracking-tight">
              {featuredProject.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#796E67] font-body max-w-2xl mt-1">
              {featuredProject.subtitle}
            </p>
          </div>

          {/* Action Buttons: Live Project, Video Demo, Word Write-up, Full Case Study */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* 1. Visit Live Project */}
            <a
              href={featuredProject.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FF650A] via-[#E25A09] to-[#B9470B] text-white text-xs sm:text-sm font-bold shadow-lg shadow-[#FF650A]/25 hover:brightness-110 active:scale-95 transition-all duration-200 group"
            >
              <Globe className="w-4 h-4 text-white group-hover:rotate-12 transition-transform" />
              <span>Visit Live Project</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </a>

            {/* 2. Watch Demonstration Video */}
            <a
              href={featuredProject.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#2A160E] hover:bg-[#3D2013] text-[#FF8533] border border-[#FF650A]/40 text-xs sm:text-sm font-semibold transition-colors shadow-xs"
            >
              <Video className="w-3.5 h-3.5 text-[#FF650A]" />
              <span>Watch Video Demo</span>
              <ExternalLink className="w-3 h-3 text-[#A8988D]" />
            </a>

            {/* 3. View Full Project Write-up (DOCX) */}
            <a
              href={featuredProject.documentUrl}
              download={featuredProject.documentFilename}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#FAF6F0] hover:bg-[#F2ECE5] text-[#28150D] text-xs sm:text-sm font-semibold border border-[#E8DDD1] hover:border-[#FF650A] transition-colors shadow-xs"
            >
              <FileText className="w-3.5 h-3.5 text-[#FF650A]" />
              <span>View Full Project Write-up</span>
            </a>

            {/* 4. Full 14-Section Case Study Modal Trigger */}
            <button
              onClick={onOpenCaseStudy}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#2E180E] text-white text-xs sm:text-sm font-semibold hover:bg-[#3D2013] border border-[#522D1B] transition-colors shadow-xs"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#FF650A]" />
              <span>14-Section Case Study</span>
            </button>
          </div>
        </div>

        {/* Primary Application Walkthrough Showcase */}
        <div className="bg-white rounded-2xl border border-[#ECE2D7] p-4 sm:p-7 shadow-warm-md mb-8">
          
          {/* Browser Window Header with Live URL */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-3 border-b border-[#F2ECE5] text-xs text-[#796E67] gap-2">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block" />
              </div>
              
              {/* Clickable Live Website Link in Browser Address Bar */}
              <a
                href={featuredProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FAF6F0] px-3 py-1 rounded-md text-[11px] font-mono text-[#52443C] hover:text-[#FF650A] border border-[#EFE6DC] flex items-center gap-1.5 transition-colors"
                title="Open live Render application in new tab"
              >
                <span className="text-[#27C93F] font-bold">●</span>
                <span>{featuredProject.liveUrl}</span>
                <ArrowUpRight className="w-3 h-3 text-[#A49489]" />
              </a>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() =>
                  onOpenLightbox(activeScreenshot.path, activeScreenshot.label, activeScreenshot.caption)
                }
                className="inline-flex items-center gap-1 text-[#FF650A] hover:text-[#B9470B] font-semibold text-xs"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Enlarge Screenshot</span>
              </button>

              <div className="flex items-center gap-1">
                <button
                  onClick={handlePrev}
                  className="p-1 rounded-md bg-[#FAF6F0] hover:bg-[#EFE6DC] text-[#28150D] border border-[#E0D2C3]"
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-1 rounded-md bg-[#FAF6F0] hover:bg-[#EFE6DC] text-[#28150D] border border-[#E0D2C3]"
                  aria-label="Next screenshot"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Large Screen Presentation Container */}
          <div className="relative w-full aspect-[16/9] sm:aspect-[16/9.2] bg-[#160E09] rounded-xl overflow-hidden border border-[#EFE6DC] flex items-center justify-center p-2 shadow-inner group">
            <img
              src={activeScreenshot.path}
              alt={activeScreenshot.label}
              className="w-full h-full object-contain rounded-lg transition-transform duration-300 group-hover:scale-[1.01]"
              style={{
                imageRendering: 'auto'
              }}
            />

            {/* Hover overlay to expand in Lightbox */}
            <div
              onClick={() =>
                onOpenLightbox(activeScreenshot.path, activeScreenshot.label, activeScreenshot.caption)
              }
              className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 flex items-center justify-center cursor-pointer transition-opacity"
            >
              <span className="px-4 py-2 rounded-full bg-[#1C120B]/90 backdrop-blur-xs text-white text-xs font-semibold flex items-center gap-2 shadow-2xl border border-white/10">
                <Maximize2 className="w-3.5 h-3.5 text-[#FF650A]" />
                <span>Click to view full uncropped screenshot</span>
              </span>
            </div>

            {/* Caption Overlay at Bottom */}
            <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-[#140D08]/90 backdrop-blur-md border border-[#3E2316] text-white flex items-center justify-between text-xs">
              <div className="truncate pr-2">
                <span className="font-bold text-[#FF650A] mr-2 block sm:inline">
                  {activeScreenshot.label}
                </span>
                <span className="text-[#D8C7BC] text-[11px] sm:text-xs">
                  {activeScreenshot.caption}
                </span>
              </div>
              <span className="font-mono text-[11px] text-[#A49489] flex-shrink-0">
                Screen {selectedScreenIndex + 1} of {screenshots.length}
              </span>
            </div>
          </div>

          {/* Screenshots Gallery Thumbnails (Lab_web_1 through Lab_web_5) */}
          <div className="mt-6 pt-5 border-t border-[#F2ECE5]">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#28150D] flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-[#FF650A]" />
                <span>Verified Laboratory Screenshots (Screens 01 – 05)</span>
              </h4>
              <span className="text-[11px] text-[#8C7D73]">
                Click thumbnail to preview or inspect
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {screenshots.map((s, index) => {
                const isCurrent = index === selectedScreenIndex;
                return (
                  <div
                    key={s.id}
                    onClick={() => setSelectedScreenIndex(index)}
                    className={`rounded-xl border p-1.5 cursor-pointer transition-all duration-200 group flex flex-col justify-between ${
                      isCurrent
                        ? 'border-[#FF650A] bg-[#FFF8F3] shadow-md ring-2 ring-[#FF650A]/20'
                        : 'border-[#ECE2D7] bg-[#FAF6F0] hover:border-[#FF650A] hover:bg-white'
                    }`}
                  >
                    {/* Thumbnail Image Container */}
                    <div className="relative w-full aspect-[16/9] bg-[#1A120D] rounded-lg overflow-hidden flex items-center justify-center p-1">
                      <img
                        src={s.path}
                        alt={s.label}
                        loading="lazy"
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200"
                      />
                      <span className="absolute top-1 left-1 px-1.5 py-0.5 rounded bg-black/70 text-white text-[9px] font-mono font-bold">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Short Caption */}
                    <div className="mt-2 px-1 pb-1">
                      <span className="text-[11px] font-bold text-[#28150D] block truncate group-hover:text-[#FF650A]">
                        {s.filename}
                      </span>
                      <span className="text-[10px] text-[#796E67] block truncate">
                        {s.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Project Details & Confirmed Architecture */}
        <div className="bg-white rounded-2xl border border-[#ECE2D7] p-5 sm:p-7 shadow-warm-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Confirmed Features & Overview (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div>
              <h3 className="font-section-title text-xl font-bold text-[#241A17] mb-2">
                Project Overview & Core Motivation
              </h3>
              <div className="p-4 rounded-xl bg-[#FAF6F0] border border-[#ECE2D7] text-xs text-[#52443C] leading-relaxed space-y-2">
                <p>
                  {featuredProject.overview}
                </p>
                <p className="text-[#796E67]">
                  <strong className="text-[#241A17]">Problem Addressed: </strong>
                  {featuredProject.problemAddressed}
                </p>
              </div>
            </div>

            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#28150D] mb-3">
                Core Architectural Pillars & USPs
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {featuredProject.features.map((feat) => (
                  <div
                    key={feat.title}
                    className="p-3.5 rounded-xl bg-[#FAF6F0] border border-[#ECE2D7] flex items-start gap-3 hover:border-[#FF650A] transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#FFF2E8] border border-[#FFD9C0] flex items-center justify-center flex-shrink-0 mt-0.5">
                      {renderFeatureIcon(feat.icon)}
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-[#28150D] mb-0.5">
                        {feat.title}
                      </h5>
                      <p className="text-[11px] text-[#796E67] leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Confirmed Technologies List */}
            <div className="pt-3 border-t border-[#F2ECE5]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-[#28150D]">
                  Technology Stack:
                </span>
                <span className="text-[10px] text-emerald-700 font-bold uppercase">
                  Verified Production Stack
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {featuredProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-md bg-[#FFF2E8] border border-[#FFD9C0] text-xs font-semibold text-[#B9470B]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Live Portal Call-to-Action & Connected Evidence Manifest (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Live Website Card Call-to-Action */}
            <div className="bg-gradient-to-br from-[#2E180E] to-[#1C100A] rounded-xl p-5 border border-[#522D1B] text-white space-y-3 shadow-lg">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded-full bg-[#FF650A]/20 border border-[#FF650A]/40 text-[#FF650A] text-[10px] font-mono font-bold uppercase tracking-wider">
                  Live Deployment
                </span>
                <Globe className="w-4 h-4 text-[#FF650A]" />
              </div>

              <h4 className="font-heading-display text-lg font-bold">
                Experience the Live Portal
              </h4>
              <p className="text-xs text-[#D5C6BA] leading-relaxed">
                The laboratory web portal is deployed and actively serving pathology workflows on Render:
              </p>

              <div className="space-y-2">
                <a
                  href={featuredProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-full bg-[#FF650A] hover:bg-[#E25A09] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Visit Live Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <button
                  onClick={onOpenCaseStudy}
                  className="w-full py-2.5 px-4 rounded-full bg-[#24130A] hover:bg-[#341B0F] border border-[#FF650A]/40 text-[#FF8533] text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5 text-[#FF650A]" />
                  <span>Explore Full 14-Section Case Study</span>
                </button>
              </div>
            </div>

            {/* Connected Project Evidence Manifest */}
            <div className="bg-[#FAF6F0] rounded-xl p-5 border border-[#ECE2D7] space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#28150D] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FF650A]" />
                <span>Authoritative Project Manifest</span>
              </h4>

              <ul className="text-xs text-[#52443C] space-y-1.5 font-mono">
                <li className="flex items-center justify-between">
                  <span>lab_project_writeup.docx</span>
                  <span className="text-emerald-700 font-bold">Authoritative DOCX</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>diagnostic-system-architecture.png</span>
                  <span className="text-[#FF650A] font-bold">5 Tiers</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Lab_web_1.png – Lab_web_5.png</span>
                  <span className="text-[#FF650A] font-bold">5 Screens</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>audio-website-lab.jpg</span>
                  <span className="text-[#796E67]">Lab Photo</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>website_ppt.pptx</span>
                  <span className="text-[#796E67]">1.5 MB</span>
                </li>
                <li className="flex items-center justify-between pt-1 border-t border-[#E8DDD1]">
                  <span>Live URL</span>
                  <span className="text-emerald-700 font-bold">Active on Render</span>
                </li>
              </ul>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                <a
                  href={featuredProject.documentUrl}
                  download={featuredProject.documentFilename}
                  className="py-2 px-3 rounded-lg bg-[#FAF6F0] hover:bg-[#EFE6DC] text-[#28150D] border border-[#E0D2C3] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-[#FF650A]" />
                  <span>Download Write-up</span>
                </a>

                <button
                  onClick={onOpenCaseStudy}
                  className="py-2 px-3 rounded-lg bg-[#2E180E] hover:bg-[#3D2013] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Read 14 Sections</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FF650A]" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};