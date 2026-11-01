import React, { useState, useMemo } from 'react';
import {
  FileText,
  Search,
  ExternalLink,
  Download,
  ArrowRight,
  BookOpen,
  Filter,
  CheckCircle,
  ShieldCheck,
  ChevronRight,
  X
} from 'lucide-react';
import { ACADEMIC_UNITS, AcademicUnit } from '../data/subjectContent';

interface Section02Props {
  onSelectUnit: (unit: AcademicUnit) => void;
  onViewAllUnits: () => void;
}

export const Section02WhatILearned: React.FC<Section02Props> = ({
  onSelectUnit,
  onViewAllUnits
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Categories for quick filter pills
  const categories = useMemo(() => {
    return [
      'All',
      'Machine Learning',
      'Automation',
      'Algorithms',
      'Concurrency',
      'Data Science',
      'Case Study',
      'Project Reviews'
    ];
  }, []);

  // Filtered units based on search query and category
  const filteredUnits = useMemo(() => {
    return ACADEMIC_UNITS.filter((unit) => {
      // Category match
      let matchesCategory = true;
      if (selectedCategory === 'Machine Learning') {
        matchesCategory = unit.category.toLowerCase().includes('machine learning');
      } else if (selectedCategory === 'Automation') {
        matchesCategory = unit.category.toLowerCase().includes('automation');
      } else if (selectedCategory === 'Algorithms') {
        matchesCategory = unit.category.toLowerCase().includes('algorithms');
      } else if (selectedCategory === 'Concurrency') {
        matchesCategory = unit.category.toLowerCase().includes('concurrency') || unit.category.toLowerCase().includes('object-oriented');
      } else if (selectedCategory === 'Data Science') {
        matchesCategory = unit.category.toLowerCase().includes('data science') || unit.category.toLowerCase().includes('serialization');
      } else if (selectedCategory === 'Case Study') {
        matchesCategory = unit.id.includes('case-study') || unit.title.toLowerCase().includes('case study');
      } else if (selectedCategory === 'Project Reviews') {
        matchesCategory = !!unit.isProjectReview;
      }

      // Search query match (title, tags, overview, topics, subtopics)
      if (!searchQuery.trim()) return matchesCategory;

      const q = searchQuery.toLowerCase();
      const inTitle = unit.title.toLowerCase().includes(q);
      const inOverview = unit.overview.toLowerCase().includes(q);
      const inPdfName = unit.pdfFilename.toLowerCase().includes(q);
      const inCategory = unit.category.toLowerCase().includes(q);
      const inTags = unit.tags.some((tag) => tag.toLowerCase().includes(q));
      const inTopics = unit.topics.some(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.summary.toLowerCase().includes(q) ||
          t.subtopics.some(
            (st) =>
              st.name.toLowerCase().includes(q) ||
              st.explanation.toLowerCase().includes(q) ||
              (st.codeSnippet && st.codeSnippet.toLowerCase().includes(q))
          )
      );

      return matchesCategory && (inTitle || inOverview || inPdfName || inCategory || inTags || inTopics);
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="bg-white rounded-xl p-5 sm:p-6 border border-[#EFE6DC] shadow-warm-sm flex flex-col justify-between h-full">
      <div>
        {/* Header */}
        <div className="flex items-start justify-between pb-3 border-b border-[#F2ECE5]">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-section-title text-xl sm:text-2xl font-bold text-[#241A17] tracking-tight">
                02. What I Learned
              </h2>
              <span className="px-2 py-0.5 rounded-full bg-[#FFF2E8] border border-[#FFD9C0] text-[#FF650A] text-[10px] font-bold uppercase tracking-wider">
                {ACADEMIC_UNITS.length} Modules & Case Studies
              </span>
            </div>
            <p className="text-xs text-[#796E67] font-body mt-0.5">
              Key Python concepts, laboratory assessments, symbol table case study, and verified course materials.
            </p>
          </div>

          <button
            onClick={onViewAllUnits}
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#FF650A] hover:text-[#B9470B] transition-colors group flex-shrink-0 ml-2"
          >
            <span>View All {ACADEMIC_UNITS.length} Units</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Search Input Bar */}
        <div className="mt-3 relative">
          <div className="relative flex items-center">
            <Search className="w-3.5 h-3.5 text-[#A8988D] absolute left-3 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search units, topics, or code (e.g. Logistic Regression, pypdf, LeetCode, MultiIndex)..."
              className="w-full pl-8 pr-8 py-2 text-xs bg-[#FFFDFC] border border-[#E9DFD5] rounded-lg text-[#28150D] placeholder-[#A49489] focus:outline-none focus:border-[#FF650A] focus:ring-1 focus:ring-[#FF650A] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 text-[#A8988D] hover:text-[#28150D] transition-colors"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-2.5 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-2.5 py-1 rounded-full text-[11px] font-medium whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? 'bg-[#FF650A] text-white shadow-xs font-semibold'
                  : 'bg-[#F9F4EE] hover:bg-[#F2EAE0] text-[#786A62]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Units List */}
        <div className="divide-y divide-[#F6EFE8] max-h-[460px] overflow-y-auto pr-1">
          {filteredUnits.length > 0 ? (
            filteredUnits.map((unit) => (
              <div
                key={unit.id}
                className="py-3 px-2 -mx-2 rounded-lg hover:bg-[#FFF9F3] transition-colors group flex flex-col sm:flex-row sm:items-center justify-between gap-2.5"
              >
                {/* Unit info */}
                <div
                  className="flex items-start gap-3 cursor-pointer flex-grow min-w-0"
                  onClick={() => onSelectUnit(unit)}
                >
                  {/* Unit Code Badge */}
                  <div className="w-7 h-7 rounded-md bg-[#FFF2E8] border border-[#FFD9C0] flex items-center justify-center flex-shrink-0 group-hover:border-[#FF650A] group-hover:bg-[#FF650A] group-hover:text-white transition-all text-[#FF650A] font-mono text-xs font-bold mt-0.5">
                    {unit.unitCode}
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-bold text-[#28150D] group-hover:text-[#FF650A] transition-colors line-clamp-1">
                        {unit.title}
                      </span>
                      {unit.isProjectReview && (
                        <span className="px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 text-[9px] font-semibold">
                          Review
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-[11px] text-[#796E67] mt-0.5 flex-wrap">
                      <span className="font-mono text-[#B9470B] font-semibold text-[10px]">
                        {unit.pdfFilename}
                      </span>
                      <span>•</span>
                      <span>{unit.pageCount} Pages</span>
                      <span>•</span>
                      <span className="line-clamp-1 text-[#8C7D73]">
                        {unit.topics.map((t) => t.title.split('(')[0].trim()).join(' · ')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-1.5 self-end sm:self-center flex-shrink-0">
                  <button
                    onClick={() => onSelectUnit(unit)}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#FFF3EA] border border-[#FFD5BC] hover:bg-[#FF650A] hover:text-white text-[#B9470B] text-[11px] font-semibold transition-all shadow-2xs"
                    title="Explore Topics & Code Snippets"
                  >
                    <BookOpen className="w-3 h-3" />
                    <span>Explore Topics</span>
                  </button>

                  <a
                    href={unit.pdfPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 rounded-md text-[#8C7D73] hover:text-[#FF650A] hover:bg-[#F6ECE2] transition-colors"
                    title={`Open ${unit.pdfFilename} in browser`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={unit.pdfPath}
                    download={unit.pdfFilename}
                    className="p-1 rounded-md text-[#8C7D73] hover:text-[#FF650A] hover:bg-[#F6ECE2] transition-colors"
                    title={`Download original ${unit.pdfFilename}`}
                  >
                    <Download className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="py-8 text-center text-xs text-[#8C7D73]">
              <p>No learning units match "{searchQuery}".</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="mt-2 text-[#FF650A] font-semibold hover:underline"
              >
                Reset search & filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Footer Summary note */}
      <div className="pt-3 border-t border-[#F2ECE5] flex items-center justify-between text-[11px] text-[#8C7D73]">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>All {ACADEMIC_UNITS.length} units linked to original academic submissions.</span>
        </span>
        <button
          onClick={onViewAllUnits}
          className="text-[#FF650A] hover:underline font-semibold"
        >
          Explore All Topics →
        </button>
      </div>
    </div>
  );
};
