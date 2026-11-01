import React, { useEffect, useState } from 'react';
import { 
  X, 
  ExternalLink, 
  Download, 
  Video, 
  Globe, 
  FileText, 
  Layers, 
  ShieldCheck, 
  Database, 
  Cpu, 
  Code2, 
  CheckCircle2, 
  AlertCircle, 
  Maximize2, 
  ChevronRight,
  Server,
  Activity,
  Terminal,
  BookOpen,
  ArrowUpRight
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HospitalLabCaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenLightbox?: (imgUrl: string, title: string, caption?: string) => void;
}

export const HospitalLabCaseStudyModal: React.FC<HospitalLabCaseStudyModalProps> = ({
  isOpen,
  onClose,
  onOpenLightbox
}) => {
  const { featuredProject } = PORTFOLIO_DATA;
  const [activeSection, setActiveSection] = useState<string>('overview');

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

  if (!isOpen) return null;

  const sections = [
    { id: 'overview', title: '1. Project Overview' },
    { id: 'problem', title: '2. Problem Statement' },
    { id: 'objectives', title: '3. Objectives' },
    { id: 'solution', title: '4. Proposed Solution & USP' },
    { id: 'architecture', title: '5. System Architecture' },
    { id: 'tech-stack', title: '6. Technologies Used' },
    { id: 'modules', title: '7. System Modules' },
    { id: 'implementation', title: '8. Implementation Details' },
    { id: 'api-docs', title: '9. API Documentation' },
    { id: 'database', title: '10. Database Design' },
    { id: 'input-output', title: '11. Input and Output' },
    { id: 'testing-results', title: '12. Testing & Results' },
    { id: 'conclusion', title: '13. Conclusion' },
    { id: 'documentation', title: '14. Project Documentation' },
  ];

  const scrollToAnchor = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(`case-study-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 lg:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 max-w-6xl w-full bg-[#18110D] border border-[#4E2918] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[96vh]">
        
        {/* Top Header Bar */}
        <div className="px-5 py-3.5 bg-[#24150E] border-b border-[#3E2114] flex items-center justify-between text-white flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF650A]" />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-heading-display font-bold text-lg sm:text-xl tracking-tight leading-none text-white">
                  Hospital – Diagnostic Laboratory Data Exchange System
                </h3>
                <span className="hidden md:inline-block px-2 py-0.5 rounded-full bg-[#341B10] border border-[#FF650A]/40 text-[#FF650A] text-[10px] font-mono font-bold uppercase tracking-wider">
                  Full Technical Case Study
                </span>
              </div>
              <p className="text-[11px] text-[#A49489] mt-0.5">
                Diagnostic Laboratory Processing Portal • Primary Project Write-Up Documentation
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://diagnostic-laboratory-portal.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FF650A] hover:bg-[#E25A09] text-white text-xs font-bold transition-all shadow-xs"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Live Portal ↗</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#341B10] hover:bg-[#4E2716] text-[#D8C7BC] hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quick Jump Horizontal Navigation Bar */}
        <div className="px-5 py-2 bg-[#1C100A] border-b border-[#301A10] overflow-x-auto flex items-center gap-2 flex-shrink-0 text-xs scrollbar-thin">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#FF650A] flex-shrink-0 mr-1">
            SECTIONS:
          </span>
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollToAnchor(s.id)}
              className={`px-2.5 py-1 rounded-md text-[11px] font-medium whitespace-nowrap transition-colors ${
                activeSection === s.id
                  ? 'bg-[#FF650A] text-white font-bold'
                  : 'bg-[#2A170E] text-[#C5B7AD] hover:text-white hover:bg-[#381F13]'
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>

        {/* Action Header Banner with Primary Required Actions */}
        <div className="px-5 py-3.5 bg-[#20130C] border-b border-[#381F13] flex flex-wrap items-center justify-between gap-3 text-xs flex-shrink-0">
          <div className="flex items-center gap-2 text-[#D8C7BC]">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Document Source: <code className="text-[#FF8533] font-mono">lab_project_writeup.docx</code> (Authoritative Project Specification)</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* 1. Visit Live Project */}
            <a
              href="https://diagnostic-laboratory-portal.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#FF650A] to-[#B9470B] text-white text-xs font-bold hover:brightness-110 transition-all shadow-xs"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Visit Live Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* 2. Watch Demonstration Video */}
            <a
              href="https://drive.google.com/drive/folders/1qkAK6YBkBmYb7Njuh_9Exq-kdBn6qzAH?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#2A160E] hover:bg-[#3D2013] text-[#FF8533] border border-[#FF650A]/40 text-xs font-semibold transition-colors"
            >
              <Video className="w-3.5 h-3.5 text-[#FF650A]" />
              <span>Watch Demonstration Video</span>
              <ExternalLink className="w-3 h-3 text-[#A8988D]" />
            </a>

            {/* 3. View Full Project Write-up */}
            <a
              href="/documents/lab_project_writeup.docx"
              download="lab_project_writeup.docx"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#28150D] hover:bg-[#381E12] text-white border border-[#522D1B] text-xs font-semibold transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-[#FF650A]" />
              <span>View Full Project Write-up (DOCX)</span>
            </a>
          </div>
        </div>

        {/* Scrollable Document Body with all 14 sections */}
        <div className="p-5 sm:p-8 overflow-y-auto bg-[#140D08] text-[#E5D7CD] space-y-10 font-body">

          {/* 1. Project Overview */}
          <section id="case-study-overview" className="space-y-3 pt-2">
            <div className="flex items-center gap-2 pb-1.5 border-b border-[#301B11]">
              <span className="text-xs font-mono font-bold text-[#FF650A]">SECTION 01</span>
              <h4 className="font-section-title text-xl sm:text-2xl font-bold text-white tracking-tight">
                1. Project Overview
              </h4>
            </div>

            <p className="text-xs sm:text-sm text-[#D5C6BA] leading-relaxed">
              Clinical diagnostic laboratories are high-throughput environments responsible for analyzing biological specimens and turning raw physical analyzer data into diagnostic findings. In standard pathological workflows, laboratory technicians frequently handle manual sample logs, perform repetitive manual comparisons against medical reference books, and manually type paper reports. This traditional workflow is prone to transcription error, high turnaround latency, and loss of critical diagnostic details.
            </p>
            <p className="text-xs sm:text-sm text-[#D5C6BA] leading-relaxed">
              The motivation behind developing the <strong className="text-white">Diagnostic Laboratory Processing Portal</strong> is to deliver an automated, secure laboratory information management system (LIMS). By providing a digital technician workstation, automated reference interval evaluation, and programmatic RESTful endpoints to receive hospital test orders, this portal minimizes human error, standardizes diagnostic reporting, and ensures rapid delivery of critical pathology results.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs">
              <div className="p-3 rounded-xl bg-[#1E120A] border border-[#3A1F13]">
                <span className="text-[10px] text-[#A49489] uppercase tracking-wider block mb-0.5">Application Role</span>
                <span className="font-bold text-white">LIMS & REST Gateway</span>
              </div>
              <div className="p-3 rounded-xl bg-[#1E120A] border border-[#3A1F13]">
                <span className="text-[10px] text-[#A49489] uppercase tracking-wider block mb-0.5">Target Workload</span>
                <span className="font-bold text-white">Clinical Pathology</span>
              </div>
              <div className="p-3 rounded-xl bg-[#1E120A] border border-[#3A1F13]">
                <span className="text-[10px] text-[#A49489] uppercase tracking-wider block mb-0.5">Execution Port</span>
                <span className="font-bold text-white">Flask Port 5000</span>
              </div>
              <div className="p-3 rounded-xl bg-[#1E120A] border border-[#3A1F13]">
                <span className="text-[10px] text-[#A49489] uppercase tracking-wider block mb-0.5">Production Host</span>
                <span className="font-bold text-emerald-400">Render Cloud PaaS</span>
              </div>
            </div>
          </section>

          {/* 2. Problem Statement */}
          <section id="case-study-problem" className="space-y-4">
            <div className="flex items-center gap-2 pb-1.5 border-b border-[#301B11]">
              <span className="text-xs font-mono font-bold text-[#FF650A]">SECTION 02</span>
              <h4 className="font-section-title text-xl sm:text-2xl font-bold text-white tracking-tight">
                2. Problem Statement (Existing Gaps & Trigger Events)
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              <div className="p-4 rounded-xl bg-[#1E120A] border border-[#3E2114] space-y-2">
                <div className="w-8 h-8 rounded-lg bg-rose-950/60 border border-rose-700/50 flex items-center justify-center text-rose-400">
                  <AlertCircle className="w-4 h-4" />
                </div>
                <h5 className="text-sm font-bold text-white">
                  Third-Party File-Drop Storage Bottlenecks
                </h5>
                <p className="text-xs text-[#C5B7AD] leading-relaxed">
                  Previously, orders were received via Dropbox CSV file polling. This approach suffered from file-lock collisions, token expirations every 4 hours, and unexpected network DNS drops (<code className="text-rose-400 font-mono text-[11px]">Errno 11001: getaddrinfo failed</code>).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#1E120A] border border-[#3E2114] space-y-2">
                <div className="w-8 h-8 rounded-lg bg-amber-950/60 border border-amber-700/50 flex items-center justify-center text-amber-400">
                  <Activity className="w-4 h-4" />
                </div>
                <h5 className="text-sm font-bold text-white">
                  Subjective Manual Range Evaluation
                </h5>
                <p className="text-xs text-[#C5B7AD] leading-relaxed">
                  Manual interpretation of clinical numbers (e.g., distinguishing whether a Hemoglobin level of 11.2 g/dL is normal for adult males versus adult females) introduces human variability and risks overlooking borderline pathology.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#1E120A] border border-[#3E2114] space-y-2">
                <div className="w-8 h-8 rounded-lg bg-indigo-950/60 border border-indigo-700/50 flex items-center justify-center text-indigo-400">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h5 className="text-sm font-bold text-white">
                  Absence of Real-Time Validation
                </h5>
                <p className="text-xs text-[#C5B7AD] leading-relaxed">
                  Legacy batch uploads allowed malformed or duplicate test IDs to enter the laboratory pipeline before errors were detected, resulting in lost work hours and compromised data hygiene.
                </p>
              </div>
            </div>
          </section>

          {/* 3. Project Objectives */}
          <section id="case-study-objectives" className="space-y-3">
            <div className="flex items-center gap-2 pb-1.5 border-b border-[#301B11]">
              <span className="text-xs font-mono font-bold text-[#FF650A]">SECTION 03</span>
              <h4 className="font-section-title text-xl sm:text-2xl font-bold text-white tracking-tight">
                3. Project Objectives
              </h4>
            </div>

            <div className="space-y-2 text-xs sm:text-sm text-[#D5C6BA]">
              {[
                'Deploy an automated laboratory information management system that exposes secure RESTful endpoints, completely bypassing file polling latency.',
                'Build a deterministic reference interval calculation engine that maps raw instrument measurements to quantitative and qualitative medical classifications.',
                'Enforce strict security and access controls through session authentication for staff and token-verified API access for external hospital clients.',
                'Implement robust schema validation to block duplicate test IDs, missing clinical parameters, and corrupt JSON payloads at the network ingress boundary.',
                'Maintain atomic database persistence in SQLite paired with standardized CSV output generations for audit and regulatory accreditation.'
              ].map((obj, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-lg bg-[#1E120A] border border-[#331C10]">
                  <CheckCircle2 className="w-4 h-4 text-[#FF650A] flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{obj}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 4. Proposed Solution & USP */}
          <section id="case-study-solution" className="space-y-3">
            <div className="flex items-center gap-2 pb-1.5 border-b border-[#301B11]">
              <span className="text-xs font-mono font-bold text-[#FF650A]">SECTION 04</span>
              <h4 className="font-section-title text-xl sm:text-2xl font-bold text-white tracking-tight">
                4. Proposed Solution & Unique Selling Proposition (USP)
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-4 rounded-xl bg-[#20120B] border border-[#3E2114] space-y-1.5">
                <span className="text-[10px] font-mono font-bold text-[#FF650A] uppercase tracking-wider">
                  USP PILLAR 1 • SERVICES/PROCESSING_SERVICE.PY
                </span>
                <h5 className="text-sm font-bold text-white">Automated Diagnostic Evaluation Engine</h5>
                <p className="text-xs text-[#C5B7AD] leading-relaxed">
                  Instant mathematical comparison of raw laboratory measurements against established clinical reference intervals to assign classification flags (Normal, Abnormal, Critical) with zero manual reference lookup errors.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#20120B] border border-[#3E2114] space-y-1.5">
                <span className="text-[10px] font-mono font-bold text-[#FF650A] uppercase tracking-wider">
                  USP PILLAR 2 • DUAL-MODE ARCHITECTURE
                </span>
                <h5 className="text-sm font-bold text-white">Protected Dual-Mode Operation</h5>
                <p className="text-xs text-[#C5B7AD] leading-relaxed">
                  Seamlessly provides a responsive web-based GUI for human technicians while simultaneously serving a secured, token-authenticated REST API for external hospital automation.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#20120B] border border-[#3E2114] space-y-1.5">
                <span className="text-[10px] font-mono font-bold text-[#FF650A] uppercase tracking-wider">
                  USP PILLAR 3 • SERVICES/VALIDATION_SERVICE.PY
                </span>
                <h5 className="text-sm font-bold text-white">Strict Schema & Duplicate Enforcement</h5>
                <p className="text-xs text-[#C5B7AD] leading-relaxed">
                  Built-in validation service rejects duplicate test IDs and corrupted payloads at the network boundary with explicit HTTP status codes (<code className="text-[#FF8533]">409 Conflict</code>, <code className="text-[#FF8533]">400 Bad Request</code>).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#20120B] border border-[#3E2114] space-y-1.5">
                <span className="text-[10px] font-mono font-bold text-[#FF650A] uppercase tracking-wider">
                  USP PILLAR 4 • LABORATORY.DB & PANDAS
                </span>
                <h5 className="text-sm font-bold text-white">Audit-Ready Persistence & CSV Generation</h5>
                <p className="text-xs text-[#C5B7AD] leading-relaxed">
                  Dual retention—stores all transactions atomically in SQLite (<code className="text-[#FF8533]">laboratory.db</code>) while also generating standardized, exportable CSV reports for medical accreditation audits.
                </p>
              </div>
            </div>
          </section>

          {/* 5. System Architecture */}
          <section id="case-study-architecture" className="space-y-4">
            <div className="flex items-center gap-2 pb-1.5 border-b border-[#301B11]">
              <span className="text-xs font-mono font-bold text-[#FF650A]">SECTION 05</span>
              <h4 className="font-section-title text-xl sm:text-2xl font-bold text-white tracking-tight">
                5. System Architecture (5-Tier Architecture)
              </h4>
            </div>

            <p className="text-xs sm:text-sm text-[#D5C6BA] leading-relaxed">
              The Laboratory Portal operates as an independent backend service and technician workstation running on <strong className="text-white">Port 5000</strong>. The system architecture comprises five distinct architectural tiers:
            </p>

            {/* Extracted High-Resolution Architecture Diagram Frame */}
            <div 
              onClick={() => onOpenLightbox && onOpenLightbox(
                '/evidence/diagnostic-system-architecture.png',
                'Diagnostic Laboratory Portal — System Architecture Diagram',
                'Official 5-tier system architecture diagram showing consumers, security gateway, REST endpoints, validation engine, database, and WSGI cloud runtime.'
              )}
              className="group/arch relative w-full bg-[#0E0805] rounded-xl overflow-hidden border border-[#432516] hover:border-[#FF650A] transition-colors cursor-pointer flex items-center justify-center p-2.5 sm:p-4 shadow-xl"
            >
              <img
                src="/evidence/diagnostic-system-architecture.png"
                alt="Diagnostic Laboratory Portal System Architecture"
                className="w-full h-auto object-contain rounded-lg transition-transform duration-300 group-hover/arch:scale-[1.01]"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/arch:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <span className="px-4 py-2 rounded-full bg-[#1C120B]/95 text-white text-xs font-semibold flex items-center gap-2 shadow-2xl border border-white/10">
                  <Maximize2 className="w-3.5 h-3.5 text-[#FF650A]" />
                  <span>Click to view full uncropped architecture diagram</span>
                </span>
              </div>
            </div>

            {/* 5 Tier Detailed Descriptions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-lg bg-[#1D1109] border border-[#341B0F] space-y-1">
                <div className="font-bold text-[#FF8533]">Tier 1: Consumers, Actors & Ingress Gates</div>
                <p className="text-[#B9AAA0] leading-relaxed">
                  Includes the Hospital Portal REST client (Port 5001), Pathology Laboratory Technicians, and Pathologists. Provides the main interaction points for submitting orders, entering measurement data, retrieving results, and signing off on clinical findings.
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-[#1D1109] border border-[#341B0F] space-y-1">
                <div className="font-bold text-[#FF8533]">Tier 2: Security, Authentication & Access Control</div>
                <p className="text-[#B9AAA0] leading-relaxed">
                  Protects endpoints with <code className="text-[#FF8533]">@require_api_key</code> for hospital integration and secure cookie-based session authentication with PBKDF2 hashing for technicians. Enforces strict JSON types and CORS isolation.
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-[#1D1109] border border-[#341B0F] space-y-1">
                <div className="font-bold text-[#FF8533]">Tier 3: Application Routing & REST Endpoints</div>
                <p className="text-[#B9AAA0] leading-relaxed">
                  Built on Flask running on Port 5000: manages server-to-server endpoints (<code className="text-white">routes/api.py</code>), technician measurement forms (<code className="text-white">routes/tests.py</code>), and real-time dashboard analytics (<code className="text-white">routes/dashboard.py</code>).
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-[#1D1109] border border-[#341B0F] space-y-1">
                <div className="font-bold text-[#FF8533]">Tier 4A: Validation & Clinical Evaluation Engine</div>
                <p className="text-[#B9AAA0] leading-relaxed">
                  Performs network-boundary schema validation, blocks duplicate test IDs, and mathematically evaluates analyzer measurements against reference bounds to assign Normal, Abnormal, or Critical classifications.
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-[#1D1109] border border-[#341B0F] space-y-1">
                <div className="font-bold text-[#FF8533]">Tier 4B: Laboratory Database & Reference Catalog</div>
                <p className="text-[#B9AAA0] leading-relaxed">
                  Local isolated SQLite database (<code className="text-[#FF8533]">laboratory.db</code>) with atomic transactions, embedded clinical reference intervals, and Pandas engine for compiling offline accreditation CSV archives.
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-[#1D1109] border border-[#341B0F] space-y-1">
                <div className="font-bold text-[#FF8533]">Tier 5: Deployment Runtime & Production Hosting</div>
                <p className="text-[#B9AAA0] leading-relaxed">
                  Multi-worker asynchronous execution via Gunicorn WSGI gateway (<code className="text-white">wsgi.py</code>) deployed on Render cloud platform (<code className="text-white">render.yaml</code>) with zero-downtime secret injection.
                </p>
              </div>
            </div>
          </section>

          {/* 6. Technologies Used */}
          <section id="case-study-tech-stack" className="space-y-3">
            <div className="flex items-center gap-2 pb-1.5 border-b border-[#301B11]">
              <span className="text-xs font-mono font-bold text-[#FF650A]">SECTION 06</span>
              <h4 className="font-section-title text-xl sm:text-2xl font-bold text-white tracking-tight">
                6. Technologies Used
              </h4>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              {[
                { title: 'Core Language', val: 'Python 3.10+' },
                { title: 'Backend Framework', val: 'Flask' },
                { title: 'Scientific & Analytics', val: 'Pandas, NumPy' },
                { title: 'Relational Database', val: 'SQLite3' },
                { title: 'WSGI Gateway', val: 'Werkzeug & Gunicorn' },
                { title: 'Frontend Stack', val: 'HTML5, CSS3, JS, Bootstrap 5' },
                { title: 'Templating Engine', val: 'Jinja2' },
                { title: 'Cloud Infrastructure', val: 'Render PaaS' },
              ].map((tech) => (
                <div key={tech.title} className="p-3 rounded-xl bg-[#1E120A] border border-[#341B10]">
                  <span className="text-[10px] text-[#A8988D] block uppercase tracking-wider">{tech.title}</span>
                  <span className="font-bold text-white text-xs sm:text-sm mt-0.5 block">{tech.val}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 7. System Modules */}
          <section id="case-study-modules" className="space-y-3">
            <div className="flex items-center gap-2 pb-1.5 border-b border-[#301B11]">
              <span className="text-xs font-mono font-bold text-[#FF650A]">SECTION 07</span>
              <h4 className="font-section-title text-xl sm:text-2xl font-bold text-white tracking-tight">
                7. System Modules
              </h4>
            </div>

            <div className="space-y-2.5 text-xs">
              {[
                {
                  file: 'routes/api.py',
                  badge: 'Server Endpoints',
                  desc: 'Handles inbound test requisition ingestion (POST /api/requests) and outbound result retrieval (GET /api/results/<test_id>) with instant JSON responses and zero file polling lag.'
                },
                {
                  file: 'routes/tests.py',
                  badge: 'Technician Workstation Form',
                  desc: 'Powers the clinical intake interface: pending queue view, numeric measurement inputs, clinical condition remarks, and test completion transitions.'
                },
                {
                  file: 'routes/dashboard.py',
                  badge: 'Real-Time Analytics',
                  desc: 'Computes pathological workload counters, diagnostic Turnaround Time (TAT) metrics, abnormal vs normal ratios, and daily sample logs.'
                },
                {
                  file: 'services/validation_service.py',
                  badge: 'Ingress Hygiene',
                  desc: 'Enforces JSON schema rules, checks mandatory medical fields, and performs duplicate test ID validation, returning HTTP 409 Conflict upon duplicate attempts.'
                },
                {
                  file: 'services/processing_service.py',
                  badge: 'Evaluation Engine',
                  desc: 'Deterministic reference interval engine that classifies parameters (Normal, Low, High, Critical) and computes the overall diagnostic interpretation.'
                }
              ].map((m) => (
                <div key={m.file} className="p-3.5 rounded-xl bg-[#1E120A] border border-[#341B10] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <code className="text-[#FF8533] font-mono font-bold text-xs">{m.file}</code>
                      <span className="px-2 py-0.5 rounded-full bg-[#341D12] text-[#FF650A] text-[10px] font-semibold">{m.badge}</span>
                    </div>
                    <p className="text-[#B9AAA0] text-xs leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 8. Implementation Details */}
          <section id="case-study-implementation" className="space-y-3">
            <div className="flex items-center gap-2 pb-1.5 border-b border-[#301B11]">
              <span className="text-xs font-mono font-bold text-[#FF650A]">SECTION 08</span>
              <h4 className="font-section-title text-xl sm:text-2xl font-bold text-white tracking-tight">
                8. Implementation Details
              </h4>
            </div>

            <p className="text-xs sm:text-sm text-[#D5C6BA] leading-relaxed">
              The project is architected around Python decorators and modular service layers. Key implementation highlights include:
            </p>

            <div className="p-4 rounded-xl bg-[#0F0A07] border border-[#341B0F] space-y-2">
              <div className="flex items-center justify-between text-xs text-[#A8988D] pb-1 border-b border-[#25150C]">
                <span className="font-mono text-[#FF8533]">Security Gate Decorator: @require_api_key</span>
                <span className="font-mono text-[10px]">Python 3.10+</span>
              </div>
              <pre className="font-mono text-[11px] text-[#D8C7BC] overflow-x-auto leading-relaxed">
{`def require_api_key(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        api_key = request.headers.get('X-API-Key')
        if not api_key or api_key != os.environ.get('LAB_API_KEY'):
            return jsonify({"success": False, "error": "Unauthorized: Invalid or missing API key"}), 401
        return f(*args, **kwargs)
    return decorated_function`}
              </pre>
            </div>

            <div className="p-4 rounded-xl bg-[#1E120A] border border-[#341B10] space-y-2 text-xs">
              <span className="font-bold text-white block">Prompts Utilized in Construction:</span>
              <ul className="list-disc list-inside space-y-1 text-[#B9AAA0]">
                <li>"Create a modular Flask web application for a diagnostic laboratory that exposes RESTful endpoints to receive test orders and publish verified results."</li>
                <li>"Implement a Python decorator @require_api_key that inspects incoming HTTP requests for an X-API-Key header and returns a JSON 401 error response if invalid."</li>
                <li>"Write a validation service in Python that validates incoming test requisition JSON payloads, ensures required parameters exist, and prevents duplicate test ID creation."</li>
                <li>"Build an automated clinical reference interval engine in Python that evaluates numeric laboratory measurements against standard medical bounds."</li>
                <li>"Develop a technician workstation UI using Bootstrap 5 where staff can select pending test orders, enter raw analyzer readings, review automated calculations, and finalize reports."</li>
              </ul>
            </div>
          </section>

          {/* 9. API Documentation */}
          <section id="case-study-api-docs" className="space-y-4">
            <div className="flex items-center gap-2 pb-1.5 border-b border-[#301B11]">
              <span className="text-xs font-mono font-bold text-[#FF650A]">SECTION 09</span>
              <h4 className="font-section-title text-xl sm:text-2xl font-bold text-white tracking-tight">
                9. API Documentation (REST Provider)
              </h4>
            </div>

            <div className="space-y-3">
              {/* Endpoint 1 */}
              <div className="p-4 rounded-xl bg-[#1D1109] border border-[#3A1E11] space-y-2 text-xs">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-emerald-600 text-white font-mono font-bold text-xs">POST</span>
                    <code className="text-white font-mono font-bold text-sm">/api/requests</code>
                  </div>
                  <span className="text-[11px] text-[#A8988D]">Header Required: <code className="text-[#FF8533]">X-API-Key: &lt;SECRET_KEY&gt;</code></span>
                </div>
                <p className="text-[#C5B7AD]">Inbound Test Request Receiver. Ingests patient test order into SQLite queue.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-[11px]">
                  <div className="p-2.5 rounded bg-[#0F0A07] border border-[#2A160D]">
                    <span className="text-emerald-400 block mb-1">HTTP 201 Created (Success):</span>
                    <pre className="text-[#D8C7BC]">{`{
  "success": true,
  "message": "Test request queued successfully",
  "test_id": "REQ-2026-101"
}`}</pre>
                  </div>
                  <div className="p-2.5 rounded bg-[#0F0A07] border border-[#2A160D]">
                    <span className="text-rose-400 block mb-1">HTTP 409 Conflict (Duplicate):</span>
                    <pre className="text-[#D8C7BC]">{`{
  "success": false,
  "error": "Test ID already exists in laboratory database."
}`}</pre>
                  </div>
                </div>
              </div>

              {/* Endpoint 2 */}
              <div className="p-4 rounded-xl bg-[#1D1109] border border-[#3A1E11] space-y-2 text-xs">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-blue-600 text-white font-mono font-bold text-xs">GET</span>
                    <code className="text-white font-mono font-bold text-sm">/api/results/&lt;test_id&gt;</code>
                  </div>
                  <span className="text-[11px] text-[#A8988D]">Header Required: <code className="text-[#FF8533]">X-API-Key: &lt;SECRET_KEY&gt;</code></span>
                </div>
                <p className="text-[#C5B7AD]">Outbound Test Result Provider. Serves finalized diagnostic report and measurements to hospital clients.</p>
                <div className="p-2.5 rounded bg-[#0F0A07] border border-[#2A160D] font-mono text-[11px]">
                  <span className="text-blue-400 block mb-1">HTTP 200 OK (Completed):</span>
                  <pre className="text-[#D8C7BC] overflow-x-auto">{`{
  "success": true,
  "test_id": "REQ-2026-101",
  "status": "Completed",
  "test_type": "Complete Blood Count",
  "measurements": { "Hemoglobin": "11.2 g/dL", "WBC": "12,400 /mcL", "Platelets": "220,000 /mcL" },
  "interpretation": "Abnormal",
  "technician_notes": "Mild anemia and elevated WBC count noted.",
  "completed_at": "2026-11-01T14:30:00Z"
}`}</pre>
                </div>
              </div>
            </div>
          </section>

          {/* 10. Database Design */}
          <section id="case-study-database" className="space-y-4">
            <div className="flex items-center gap-2 pb-1.5 border-b border-[#301B11]">
              <span className="text-xs font-mono font-bold text-[#FF650A]">SECTION 10</span>
              <h4 className="font-section-title text-xl sm:text-2xl font-bold text-white tracking-tight">
                10. Database Design (SQLite Schema & Reference Catalog)
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-[#1E120A] border border-[#341B10] space-y-1.5">
                <span className="font-mono text-[#FF8533] font-bold">Table: users</span>
                <p className="text-[11px] text-[#A49489]">Staff authentication and access</p>
                <ul className="space-y-0.5 font-mono text-[11px] text-[#D8C7BC]">
                  <li>• id (INT PK)</li>
                  <li>• username (VARCHAR)</li>
                  <li>• password_hash (VARCHAR)</li>
                  <li>• role (VARCHAR)</li>
                  <li>• created_at (DATETIME)</li>
                </ul>
              </div>

              <div className="p-3.5 rounded-xl bg-[#1E120A] border border-[#341B10] space-y-1.5">
                <span className="font-mono text-[#FF8533] font-bold">Table: test_requests</span>
                <p className="text-[11px] text-[#A49489]">Inbound clinical orders</p>
                <ul className="space-y-0.5 font-mono text-[11px] text-[#D8C7BC]">
                  <li>• id (INT PK)</li>
                  <li>• test_id (VARCHAR UNIQUE)</li>
                  <li>• patient_name (VARCHAR)</li>
                  <li>• test_type (VARCHAR)</li>
                  <li>• priority (VARCHAR)</li>
                  <li>• status (Pending/Processing)</li>
                  <li>• received_via (REST_API)</li>
                </ul>
              </div>

              <div className="p-3.5 rounded-xl bg-[#1E120A] border border-[#341B10] space-y-1.5">
                <span className="font-mono text-[#FF8533] font-bold">Table: test_results</span>
                <p className="text-[11px] text-[#A49489]">Measured findings & flags</p>
                <ul className="space-y-0.5 font-mono text-[11px] text-[#D8C7BC]">
                  <li>• id (INT PK)</li>
                  <li>• test_id (FK)</li>
                  <li>• parameter_name (VARCHAR)</li>
                  <li>• measured_value (FLOAT)</li>
                  <li>• unit (VARCHAR)</li>
                  <li>• interpretation (Normal/Abnormal)</li>
                  <li>• completed_at (DATETIME)</li>
                </ul>
              </div>
            </div>

            {/* Pathological Reference Intervals */}
            <div className="p-4 rounded-xl bg-[#1A1009] border border-[#331C10] space-y-2 text-xs">
              <span className="font-bold text-white uppercase tracking-wider block">Standard Pathological Reference Interval Catalog:</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-[11px] text-[#D8C7BC]">
                <div className="p-2.5 rounded bg-[#120B07] border border-[#27150C]">
                  <strong className="text-[#FF8533] block mb-1">Complete Blood Count (CBC):</strong>
                  <div>• Hemoglobin: 13.8–17.2 g/dL (M), 12.1–15.1 g/dL (F)</div>
                  <div>• WBC: 4,500–11,000 cells/μL</div>
                  <div>• Platelet Count: 150,000–450,000 /μL</div>
                </div>
                <div className="p-2.5 rounded bg-[#120B07] border border-[#27150C]">
                  <strong className="text-[#FF8533] block mb-1">Lipid Profile:</strong>
                  <div>• Total Cholesterol: &lt;200 mg/dL (Desirable)</div>
                  <div>• Triglycerides: &lt;150 mg/dL</div>
                  <div>• HDL: &gt;40 mg/dL | LDL: &lt;100 mg/dL</div>
                </div>
                <div className="p-2.5 rounded bg-[#120B07] border border-[#27150C]">
                  <strong className="text-[#FF8533] block mb-1">Blood Glucose:</strong>
                  <div>• Fasting Blood Sugar (FBS): 70–99 mg/dL</div>
                  <div>• Normoglycemia Bounds: 70–140 mg/dL</div>
                </div>
              </div>
            </div>
          </section>

          {/* 11. Input and Output */}
          <section id="case-study-input-output" className="space-y-3">
            <div className="flex items-center gap-2 pb-1.5 border-b border-[#301B11]">
              <span className="text-xs font-mono font-bold text-[#FF650A]">SECTION 11</span>
              <h4 className="font-section-title text-xl sm:text-2xl font-bold text-white tracking-tight">
                11. Input and Output Specifications
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs">
              <div className="p-4 rounded-xl bg-[#1E120A] border border-[#341B10] space-y-1.5">
                <span className="font-bold text-[#FF8533] uppercase tracking-wider block">System Users</span>
                <ul className="space-y-1 text-[#C5B7AD]">
                  <li>• <strong className="text-white">Laboratory Technicians:</strong> Review queue, record measurements, verify automated assessments.</li>
                  <li>• <strong className="text-white">Pathologists / Directors:</strong> Review flagged abnormal samples, sign off findings.</li>
                  <li>• <strong className="text-white">Hospital REST Client:</strong> Automated HTTP process for requisitions and results.</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#1E120A] border border-[#341B10] space-y-1.5">
                <span className="font-bold text-[#FF8533] uppercase tracking-wider block">Input Formats</span>
                <ul className="space-y-1 text-[#C5B7AD]">
                  <li>• <strong className="text-white">Inbound JSON:</strong> Structured strings (test_id, patient_name, test_type, priority).</li>
                  <li>• <strong className="text-white">Measurement Form:</strong> Floating-point values (Glucose 98.0, Hb 14.2), integer counts (Platelets 220000).</li>
                  <li>• <strong className="text-white">Status Transitions:</strong> Dropdowns (Pending → In Processing → Completed).</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#1E120A] border border-[#341B10] space-y-1.5">
                <span className="font-bold text-[#FF8533] uppercase tracking-wider block">System Outputs</span>
                <ul className="space-y-1 text-[#C5B7AD]">
                  <li>• <strong className="text-white">Automated Classifications:</strong> Qualitative flags (Normal, Low, High, Critical).</li>
                  <li>• <strong className="text-white">Standardized JSON:</strong> Structured payloads delivered via GET /api/results.</li>
                  <li>• <strong className="text-white">Historical CSV:</strong> Pandas-compiled CSV files for medical audit archives.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 12. Testing and Results */}
          <section id="case-study-testing-results" className="space-y-4">
            <div className="flex items-center gap-2 pb-1.5 border-b border-[#301B11]">
              <span className="text-xs font-mono font-bold text-[#FF650A]">SECTION 12</span>
              <h4 className="font-section-title text-xl sm:text-2xl font-bold text-white tracking-tight">
                12. Testing and Results (Actual Laboratory Walkthrough)
              </h4>
            </div>

            <p className="text-xs sm:text-sm text-[#D5C6BA] leading-relaxed">
              The portal was deployed to production on Render and validated across operational clinical workflows. Below are the 5 actual laboratory screenshots demonstrating the end-to-end processing pipeline:
            </p>

            {/* Gallery of 5 Actual Screenshots with Verified Content Captions */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {[
                {
                  id: '1',
                  img: '/evidence/Lab_web_1.png',
                  title: 'Lab Screen 01: Staff Authentication',
                  route: '/login',
                  caption: 'Role-based laboratory technician authentication portal with credential matching (Senior Lab Technician LAB101) enforcing session security.'
                },
                {
                  id: '2',
                  img: '/evidence/Lab_web_2.png',
                  title: 'Lab Screen 02: Laboratory Dashboard',
                  route: '/dashboard',
                  caption: 'Real-time clinical overview displaying active workload counters (pending, processing, completed, abnormal), REST API mode, and incoming test requests.'
                },
                {
                  id: '3',
                  img: '/evidence/Lab_web_3.png',
                  title: 'Lab Screen 03: Measurement Intake & Reference Bounds',
                  route: '/process/T1001',
                  caption: 'Analyzer numeric measurement intake form showing patient demographics, Blood Sugar entry (98.0 mg/dL), normoglycemia bounds (70 - 140 mg/dL), and automated evaluation.'
                },
                {
                  id: '4',
                  img: '/evidence/Lab_web_4.png',
                  title: 'Lab Screen 04: Validation & REST API Ready Modal',
                  route: '/process/T1001 (Modal)',
                  caption: 'Modal confirmation confirming test T1001 completion, qualitative classification as Normal, atomic SQLite persistence, and immediate REST API readiness.'
                },
                {
                  id: '5',
                  img: '/evidence/Lab_web_5.png',
                  title: 'Lab Screen 05: Completed Results Repository',
                  route: '/results',
                  caption: 'Permanent diagnostic results repository displaying processed tests, automated clinical interpretations, audit-ready CSV generation (test_result_T1001.csv), and record viewing.'
                }
              ].map((item) => (
                <div
                  key={item.id}
                  onClick={() => onOpenLightbox && onOpenLightbox(item.img, item.title, item.caption)}
                  className="group/thumb cursor-pointer bg-[#1D1109] rounded-xl border border-[#3E2114] hover:border-[#FF650A] p-2.5 transition-all duration-200 flex flex-col justify-between shadow-xs"
                >
                  <div>
                    <div className="relative w-full aspect-[16/9] bg-[#0E0704] rounded-lg overflow-hidden flex items-center justify-center p-1 mb-2">
                      <img
                        src={item.img}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-contain group-hover/thumb:scale-[1.02] transition-transform duration-200"
                      />
                      <span className="absolute top-1 left-1 px-1.5 py-0.5 rounded bg-black/80 text-[#FF8533] font-mono text-[9px] font-bold">
                        {item.route}
                      </span>
                    </div>
                    <h5 className="font-bold text-xs text-white group-hover/thumb:text-[#FF8533] transition-colors leading-tight mb-1">
                      {item.title}
                    </h5>
                    <p className="text-[11px] text-[#A8988D] leading-relaxed line-clamp-3">
                      {item.caption}
                    </p>
                  </div>
                  <div className="pt-2 mt-2 border-t border-[#2A160D] flex items-center justify-between text-[10px] text-[#FF650A]">
                    <span>Click to enlarge screenshot</span>
                    <Maximize2 className="w-3 h-3" />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 13. Conclusion */}
          <section id="case-study-conclusion" className="space-y-3">
            <div className="flex items-center gap-2 pb-1.5 border-b border-[#301B11]">
              <span className="text-xs font-mono font-bold text-[#FF650A]">SECTION 13</span>
              <h4 className="font-section-title text-xl sm:text-2xl font-bold text-white tracking-tight">
                13. Conclusion
              </h4>
            </div>

            <p className="text-xs sm:text-sm text-[#D5C6BA] leading-relaxed">
              The <strong className="text-white">Hospital – Diagnostic Laboratory Data Exchange System</strong> successfully demonstrates the practical application of advanced Python software architecture in modern clinical pathology. By integrating token-authenticated RESTful API endpoints, the system eliminates traditional third-party polling latencies and network collisions.
            </p>
            <p className="text-xs sm:text-sm text-[#D5C6BA] leading-relaxed">
              Simultaneously, the built-in mathematical reference interval engine and validation services enforce medical data hygiene, prevent duplicate orders, and provide objective, real-time diagnostic flagging. Dual persistence in SQLite and standardized CSV formats ensures both immediate operational efficiency and long-term regulatory audit readiness.
            </p>
          </section>

          {/* 14. Full Project Documentation */}
          <section id="case-study-documentation" className="space-y-4 pt-2">
            <div className="flex items-center gap-2 pb-1.5 border-b border-[#301B11]">
              <span className="text-xs font-mono font-bold text-[#FF650A]">SECTION 14</span>
              <h4 className="font-section-title text-xl sm:text-2xl font-bold text-white tracking-tight">
                14. Full Project Documentation & Downloads
              </h4>
            </div>

            <div className="p-5 rounded-2xl bg-[#20120B] border border-[#432517] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#FF650A]" />
                  <h5 className="text-sm sm:text-base font-bold text-white">
                    Original Project Write-up Document
                  </h5>
                </div>
                <p className="text-xs text-[#C5B7AD] max-w-xl">
                  Download or inspect the complete original Word document (<code className="text-[#FF8533]">lab_project_writeup.docx</code>, 286 KB) containing the full architectural treatise, database schemas, and mathematical calculations.
                </p>
              </div>

              <div className="flex items-center gap-2.5 flex-shrink-0">
                <a
                  href="/documents/lab_project_writeup.docx"
                  download="lab_project_writeup.docx"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF650A] hover:bg-[#B9470B] text-white text-xs sm:text-sm font-bold shadow-md transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Write-up (DOCX)</span>
                </a>
              </div>
            </div>

            {/* Academic References */}
            <div className="p-4 rounded-xl bg-[#1A1009] border border-[#301B11] space-y-2 text-xs">
              <span className="font-bold text-white uppercase tracking-wider block">Academic References:</span>
              <ul className="space-y-1 text-[#A8988D] text-[11px]">
                <li>1. World Health Organization (WHO). Good Clinical Laboratory Practice (GCLP) Guidelines.</li>
                <li>2. Tietz, N. W. (2006). Tietz Clinical Guide to Laboratory Tests. Elsevier Health Sciences.</li>
                <li>3. Pallets Projects. Flask Documentation (v3.0.x) - Application Factories and Blueprints.</li>
                <li>4. Richardson, L., & Ruby, S. (2007). RESTful Web Services. O'Reilly Media.</li>
                <li>5. Clinical and Laboratory Standards Institute (CLSI). Defining, Establishing, and Verifying Reference Intervals in the Clinical Laboratory.</li>
              </ul>
            </div>
          </section>

        </div>

        {/* Modal Sticky Bottom Bar */}
        <div className="px-5 py-3 bg-[#24150E] border-t border-[#3E2114] flex flex-wrap items-center justify-between gap-3 text-xs text-[#A49489] flex-shrink-0">
          <span>Hospital – Diagnostic Laboratory Data Exchange System • Port 5000</span>
          
          <div className="flex items-center gap-3">
            <a
              href="https://diagnostic-laboratory-portal.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF650A] hover:underline font-semibold flex items-center gap-1"
            >
              <span>Visit Live Portal</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-full bg-[#341B10] hover:bg-[#4E2716] text-white font-medium transition-colors"
            >
              Close Case Study
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};