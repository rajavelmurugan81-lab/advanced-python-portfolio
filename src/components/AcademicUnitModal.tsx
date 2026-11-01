import React, { useEffect, useState } from 'react';
import {
  X,
  FileText,
  Download,
  ExternalLink,
  Copy,
  Check,
  ChevronRight,
  ChevronLeft,
  BookOpen,
  Code2,
  CheckCircle2,
  Eye,
  Tag,
  ShieldCheck,
  Layers
} from 'lucide-react';
import { AcademicUnit } from '../data/subjectContent';

interface AcademicUnitModalProps {
  unit: AcademicUnit | null;
  allUnits: AcademicUnit[];
  isOpen: boolean;
  onClose: () => void;
  onSelectUnit: (unit: AcademicUnit) => void;
}

export const AcademicUnitModal: React.FC<AcademicUnitModalProps> = ({
  unit,
  allUnits,
  isOpen,
  onClose,
  onSelectUnit
}) => {
  const [copiedSnippetIndex, setCopiedSnippetIndex] = useState<string | null>(null);
  const [showEmbeddedPdf, setShowEmbeddedPdf] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'content' | 'pdf'>('content');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Reset tab when unit changes
  useEffect(() => {
    setActiveTab('content');
    setShowEmbeddedPdf(false);
  }, [unit?.id]);

  if (!isOpen || !unit) return null;

  const currentIndex = allUnits.findIndex((u) => u.id === unit.id);
  const prevUnit = currentIndex > 0 ? allUnits[currentIndex - 1] : null;
  const nextUnit = currentIndex < allUnits.length - 1 ? allUnits[currentIndex + 1] : null;

  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedSnippetIndex(id);
    setTimeout(() => setCopiedSnippetIndex(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 max-w-4xl w-full bg-[#1A110B] border border-[#4E2918] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[94vh]">
        {/* Top Header */}
        <div className="px-5 py-4 bg-[#26160F] border-b border-[#3E2114] flex items-center justify-between text-white">
          <div className="flex items-center gap-3 min-w-0">
            <span className="w-8 h-8 rounded-lg bg-[#FF650A] text-white font-mono text-xs font-bold flex items-center justify-center flex-shrink-0 shadow-md">
              {unit.unitCode}
            </span>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#FF650A]">
                  Unit {unit.unitNumber} • {unit.category}
                </span>
                {unit.isProjectReview && (
                  <span className="px-2 py-0.5 rounded-full bg-[#B9470B]/40 text-[#FFB088] border border-[#FF650A]/40 text-[10px] font-bold">
                    Project Review
                  </span>
                )}
              </div>
              <h3 className="font-heading-display font-bold text-base sm:text-lg lg:text-xl text-white truncate leading-tight mt-0.5">
                {unit.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#341B10] hover:bg-[#4E2716] text-[#D8C7BC] hover:text-white transition-colors flex-shrink-0 ml-3"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action & Verification Banner */}
        <div className="px-5 py-3 bg-[#20120B] border-b border-[#341A0E] flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-[#C5B7AD] flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#2B180E] border border-[#482513] text-[#FFB38A] font-mono text-[11px]">
              <FileText className="w-3.5 h-3.5 text-[#FF650A]" />
              {unit.pdfFilename}
            </span>
            <span className="text-[11px] text-[#A8988D]">
              {unit.fileSize} • {unit.pageCount} Pages
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              Verified Original Material
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab(activeTab === 'pdf' ? 'content' : 'pdf')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'pdf'
                  ? 'bg-[#FF650A] text-white shadow-xs'
                  : 'bg-[#2E180E] border border-[#4E2716] text-[#D8C7BC] hover:text-white hover:border-[#FF650A]'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{activeTab === 'pdf' ? 'Show Study Notes' : 'Preview PDF'}</span>
            </button>

            <a
              href={unit.pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#2E180E] border border-[#4E2716] hover:border-[#FF650A] text-[#E8D9CD] hover:text-white text-xs font-semibold transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#FF650A]" />
              <span>Open PDF ↗</span>
            </a>

            <a
              href={unit.pdfPath}
              download={unit.pdfFilename}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#FF650A] to-[#B9470B] text-white text-xs font-semibold shadow-xs hover:brightness-110 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </a>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto bg-[#140D08] text-[#E5D7CD] space-y-6">
          {activeTab === 'pdf' ? (
            /* Embedded PDF Preview Frame */
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-[#A8988D]">
                <span>Rendering verified PDF document: {unit.pdfFilename}</span>
                <a
                  href={unit.pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FF650A] hover:underline inline-flex items-center gap-1 font-semibold"
                >
                  <span>Open in external tab</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="w-full h-[600px] rounded-xl overflow-hidden border border-[#3E2316] bg-[#1C120B]">
                <iframe
                  src={unit.pdfPath}
                  title={unit.title}
                  className="w-full h-full border-0"
                />
              </div>
            </div>
          ) : (
            <>
              {/* Unit Overview Section */}
              <div className="bg-[#21140D] p-4 sm:p-5 rounded-xl border border-[#3A1F13] space-y-3">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#FF650A]" />
                  <h4 className="text-xs font-bold text-[#FF650A] uppercase tracking-wider">
                    Unit Overview & Academic Context
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#E5D7CD] leading-relaxed">
                  {unit.overview}
                </p>
                <div className="p-2.5 rounded-lg bg-[#190E09] border border-[#331B10] text-[11px] text-[#A8988D] flex items-start gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FF650A] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#D8C7BC]">Source Note:</strong> {unit.sourceNote}
                  </span>
                </div>
              </div>

              {/* Key Takeaways */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF650A]" />
                  Core Learning Outcomes
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {unit.keyTakeaways.map((takeaway, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-[#1D110A] border border-[#341B0E] flex items-start gap-2.5 text-xs text-[#D8C7BC]"
                    >
                      <span className="w-4 h-4 rounded-full bg-[#FF650A]/20 text-[#FF650A] text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Topics Breakdown */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#301A0E] pb-2">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-[#FF650A]" />
                    Syllabus Topics & Code Implementations
                  </h4>
                  <span className="text-[11px] text-[#A8988D]">
                    {unit.topics.length} Major Topics
                  </span>
                </div>

                <div className="space-y-4">
                  {unit.topics.map((topic, tIdx) => (
                    <div
                      key={tIdx}
                      className="bg-[#1C120B] rounded-xl border border-[#381F12] overflow-hidden"
                    >
                      {/* Topic Header */}
                      <div className="px-4 py-3 bg-[#24150E] border-b border-[#331B10] flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-md bg-[#FF650A]/20 text-[#FF650A] font-mono text-[11px] font-bold flex items-center justify-center">
                            {tIdx + 1}
                          </span>
                          <h5 className="text-xs sm:text-sm font-bold text-white">
                            {topic.title}
                          </h5>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-[#331B10] text-[#FFB088] font-mono text-[10px] font-medium border border-[#4A2616]">
                          {topic.pageReference}
                        </span>
                      </div>

                      <div className="p-4 space-y-3">
                        <p className="text-xs text-[#B8A89E] leading-relaxed">
                          {topic.summary}
                        </p>

                        {/* Nested Subtopics */}
                        <div className="space-y-3 pt-2">
                          {topic.subtopics.map((sub, sIdx) => {
                            const snippetId = `u${unit.unitNumber}-t${tIdx}-s${sIdx}`;
                            return (
                              <div
                                key={sIdx}
                                className="p-3 rounded-lg bg-[#160D08] border border-[#2B170D] space-y-2"
                              >
                                <div className="flex items-center gap-2">
                                  <ChevronRight className="w-3 h-3 text-[#FF650A]" />
                                  <h6 className="text-xs font-bold text-[#E8D9CD]">
                                    {sub.name}
                                  </h6>
                                </div>
                                <p className="text-xs text-[#A8988D] pl-5 leading-relaxed">
                                  {sub.explanation}
                                </p>

                                {sub.codeSnippet && (
                                  <div className="mt-2 pl-5">
                                    <div className="flex items-center justify-between bg-[#110905] px-3 py-1.5 rounded-t-lg border-t border-x border-[#331B10]">
                                      <span className="text-[10px] font-mono text-[#FF650A] flex items-center gap-1.5">
                                        <Code2 className="w-3 h-3" />
                                        Python Source Snippet
                                      </span>
                                      <button
                                        onClick={() =>
                                          handleCopyCode(sub.codeSnippet!, snippetId)
                                        }
                                        className="inline-flex items-center gap-1 text-[10px] text-[#A8988D] hover:text-white transition-colors"
                                      >
                                        {copiedSnippetIndex === snippetId ? (
                                          <>
                                            <Check className="w-3 h-3 text-emerald-400" />
                                            <span className="text-emerald-400">Copied</span>
                                          </>
                                        ) : (
                                          <>
                                            <Copy className="w-3 h-3" />
                                            <span>Copy</span>
                                          </>
                                        )}
                                      </button>
                                    </div>
                                    <pre className="p-3 bg-[#0B0604] border border-[#331B10] rounded-b-lg font-mono text-[11px] text-[#55EB9B] overflow-x-auto leading-relaxed">
                                      <code>{sub.codeSnippet}</code>
                                    </pre>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags Cloud */}
              <div className="flex items-center gap-2 flex-wrap pt-2 border-t border-[#301A0E]">
                <Tag className="w-3 h-3 text-[#FF650A]" />
                <span className="text-[11px] text-[#A8988D] font-medium mr-1">Topic Tags:</span>
                {unit.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-full bg-[#26150D] border border-[#432313] text-[10px] text-[#D8C7BC]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Modal Navigation Footer */}
        <div className="px-5 py-3 bg-[#23150F] border-t border-[#3E2114] flex items-center justify-between text-xs text-[#A49489]">
          <div className="flex items-center gap-2">
            {prevUnit ? (
              <button
                onClick={() => onSelectUnit(prevUnit)}
                className="inline-flex items-center gap-1 text-xs text-[#D8C7BC] hover:text-[#FF650A] transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Unit {prevUnit.unitCode}:</span> {prevUnit.title.slice(0, 20)}...
              </button>
            ) : (
              <span className="text-[#5A4B43]">First Unit</span>
            )}
          </div>

          <span className="font-mono text-[11px] text-[#A8988D]">
            Unit {unit.unitNumber} of {allUnits.length}
          </span>

          <div className="flex items-center gap-2">
            {nextUnit ? (
              <button
                onClick={() => onSelectUnit(nextUnit)}
                className="inline-flex items-center gap-1 text-xs text-[#D8C7BC] hover:text-[#FF650A] transition-colors"
              >
                <span className="hidden sm:inline">Unit {nextUnit.unitCode}:</span> {nextUnit.title.slice(0, 20)}...
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <span className="text-[#5A4B43]">Last Unit</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
