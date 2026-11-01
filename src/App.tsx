import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Section01LearningJourney } from './components/Section01LearningJourney';
import { Section02WhatILearned } from './components/Section02WhatILearned';
import { Section03MyStars } from './components/Section03MyStars';
import { Section04ClassroomActivities } from './components/Section04ClassroomActivities';
import { Section05FeaturedProject } from './components/Section05FeaturedProject';
import { Section06PresentingMyWork } from './components/Section06PresentingMyWork';
import { Section07CodingPractice } from './components/Section07CodingPractice';
import { Section08AllActivities } from './components/Section08AllActivities';
import { Section09MyReflection } from './components/Section09MyReflection';
import { Section10StillLearning } from './components/Section10StillLearning';
import { Section11PublishedWriting } from './components/Section11PublishedWriting';
import { HospitalLabCaseStudyModal } from './components/HospitalLabCaseStudyModal';
import { Footer } from './components/Footer';

import { LightboxModal, LightboxItem } from './components/LightboxModal';
import { DetailModal, ModalContent } from './components/DetailModal';
import { AcademicUnitModal } from './components/AcademicUnitModal';
import { ACADEMIC_UNITS, AcademicUnit } from './data/subjectContent';

import { 
  PORTFOLIO_DATA, 
  Milestone, 
  StarRecognition, 
  ActivityCard, 
  CodingQuestion, 
  IndexActivity 
} from './data/portfolioData';

export const App: React.FC = () => {
  const [lightboxItem, setLightboxItem] = useState<LightboxItem | null>(null);
  const [detailModalContent, setDetailModalContent] = useState<ModalContent | null>(null);
  const [selectedAcademicUnit, setSelectedAcademicUnit] = useState<AcademicUnit | null>(null);
  const [isCaseStudyModalOpen, setIsCaseStudyModalOpen] = useState<boolean>(false);

  // Handlers for navigation and interactive actions
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMilestoneClick = (milestone: Milestone) => {
    setDetailModalContent({
      type: 'timeline',
      title: `Milestone 0${milestone.id}: ${milestone.title}`,
      subtitle: milestone.caption,
      data: [milestone]
    });
  };

  const handleViewAllTimeline = () => {
    setDetailModalContent({
      type: 'timeline',
      title: 'Full Learning Timeline',
      subtitle: 'All 8 academic milestones from start to final reflection',
      data: PORTFOLIO_DATA.learningMilestones
    });
  };


  const handleSelectActivity = (activity: ActivityCard) => {
    setDetailModalContent({
      type: 'activity',
      title: activity.title,
      subtitle: activity.category,
      data: activity
    });
  };

  const handleSelectQuestion = (q: CodingQuestion) => {
    setDetailModalContent({
      type: 'coding',
      title: q.title,
      subtitle: `${q.platform} Practice Question`,
      data: q
    });
  };

  const handleViewPadletEvidence = () => {
    setLightboxItem({
      image: '/evidence/10-padlet-coding/Padlet.png',
      title: 'Classroom Padlet Board Evidence',
      subtitle: 'Screenshot of solved LeetCode problems and classroom submissions',
      caption: 'Original full resolution (1260×1144) screenshot of course Padlet coding submissions.',
      aspectRatio: '1260 / 1144'
    });
  };

  const handleSelectPrompt = (promptId: string) => {
    const promptObj = PORTFOLIO_DATA.reflection.prompts.find((p) => p.id === promptId);
    if (promptObj) {
      setDetailModalContent({
        type: 'reflection',
        title: promptObj.title,
        subtitle: 'Personal Reflection Entry',
        data: promptObj
      });
    }
  };

  const handleReadFullReflection = () => {
    setDetailModalContent({
      type: 'reflection',
      title: 'Course Reflection & Growth',
      subtitle: 'Comprehensive reflections throughout Advanced Python Programming',
      data: {
        title: 'Academic Reflection Summary',
        answer: `${PORTFOLIO_DATA.reflection.quote} Over the semester, engaging with coursework, laboratory exercises, and peer collaboration broadened my technical perspective from basic syntax to architecting real-world web and IoT systems.`
      }
    });
  };

  const handleSelectIndexActivity = (item: IndexActivity) => {
    if (item.number === '01') {
      const star = PORTFOLIO_DATA.myStars[0];
      setLightboxItem({
        image: star.safeUrl || star.image,
        title: star.title,
        subtitle: star.subtitle,
        caption: star.note,
        date: star.date,
        aspectRatio: star.aspectRatio
      });
    } else if (item.number === '02') {
      handleSelectActivity(PORTFOLIO_DATA.classroomActivities[0]);
    } else if (item.number === '03') {
      handleSelectActivity(PORTFOLIO_DATA.classroomActivities[1]);
    } else if (item.number === '04') {
      handleSelectActivity(PORTFOLIO_DATA.classroomActivities[2]);
    } else if (item.number === '05') {
      handleSelectActivity(PORTFOLIO_DATA.classroomActivities[3]);
    } else if (item.number === '06') {
      scrollToSection('writing');
    } else if (item.number === '07') {
      setDetailModalContent({
        type: 'audio_website',
        title: 'Audio Recording about Website',
        subtitle: 'Activity 07 • Laboratory Activity',
        data: {
          projectTitle: 'Audio Recording about Website',
          activity: 'Laboratory Activity',
          description: 'Audio recording website developed as part of the Advanced Python Programming laboratory project.',
          labPhoto: '/evidence/audio-website-lab.jpg',
          driveUrl: 'https://drive.google.com/file/d/1GAPBIA5BXlGmt91gaTymAza_Etf0wjUN/view?usp=drivesdk'
        }
      });
    } else if (item.number === '08') {
      setDetailModalContent({
        type: 'ppt',
        title: 'Website PPT Presentation Slides',
        subtitle: 'Audio Recording Website — Business Thesis'
      });
    } else if (item.number === '09') {
      setDetailModalContent({
        type: 'video',
        title: 'Demo Video of Website',
        subtitle: 'Full demonstration video hosted on Google Drive.'
      });
    } else if (item.number === '10') {
      handleViewPadletEvidence();
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF9F1] text-[#241A17] font-body flex flex-col selection:bg-[#FF650A] selection:text-white">
      {/* 1. Header Navigation */}
      <Navbar onExploreClick={() => scrollToSection('learning')} />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero
          onExploreClick={() => scrollToSection('learning')}
          onStarsClick={() => scrollToSection('stars')}
        />

        {/* 3. Section 01 — My Learning Journey */}
        <Section01LearningJourney
          onSelectMilestone={handleMilestoneClick}
          onViewAllTimeline={handleViewAllTimeline}
        />

        {/* 4. Side-by-Side Row: Section 02 (What I Learned) & Section 03 (My Stars) */}
        <section className="py-10 bg-[#FFF9F1] border-b border-[#EFE6DC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
              <Section02WhatILearned
                onSelectUnit={(unit) => setSelectedAcademicUnit(unit)}
                onViewAllUnits={() => setSelectedAcademicUnit(ACADEMIC_UNITS[0])}
              />
              <Section03MyStars
                onOpenLightbox={(star: StarRecognition) =>
                  setLightboxItem({
                    image: star.safeUrl || star.image,
                    title: star.title,
                    subtitle: star.subtitle,
                    caption: star.note,
                    date: star.date,
                    aspectRatio: star.aspectRatio
                  })
                }
                onViewGallery={() => {
                  const star = PORTFOLIO_DATA.myStars[0];
                  setLightboxItem({
                    image: star.safeUrl || star.image,
                    title: star.title,
                    subtitle: star.subtitle,
                    caption: star.note,
                    date: star.date,
                    aspectRatio: star.aspectRatio
                  });
                }}
              />
            </div>
          </div>
        </section>

        {/* 5. Section 04 — Classroom Activities */}
        <Section04ClassroomActivities
          onSelectActivity={handleSelectActivity}
          onViewAllActivities={() => scrollToSection('activities')}
        />

        {/* 6. Section 05 — Featured Project: Professional Case Study */}
        <Section05FeaturedProject
          onOpenProjectDetails={() => setIsCaseStudyModalOpen(true)}
          onOpenCaseStudy={() => setIsCaseStudyModalOpen(true)}
          onOpenLightbox={(imageUrl, title, caption) =>
            setLightboxItem({
              image: imageUrl,
              title: title,
              subtitle: 'Diagnostic Laboratory Portal — Lab Screenshot',
              caption: caption || 'Original full resolution screenshot from laboratory website.',
              aspectRatio: imageUrl.includes('architecture') ? '1225 / 875' : '2225 / 1252'
            })
          }
        />

        {/* 7. Side-by-Side Row: Section 06 (Presenting My Work) & Section 07 (Coding Practice) */}
        <section id="coding-section" className="py-10 bg-[#FAF6F0] border-b border-[#EFE6DC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              <div className="lg:col-span-7">
                <Section06PresentingMyWork
                  onOpenPPT={() =>
                    setDetailModalContent({
                      type: 'ppt',
                      title: 'Website PPT Presentation Slides',
                      subtitle: 'Audio Recording Website — Business Thesis'
                    })
                  }
                  onOpenVideoNotice={() =>
                    setDetailModalContent({
                      type: 'video',
                      title: 'Demo Video of Website',
                      subtitle: 'Full demonstration video hosted on Google Drive.'
                    })
                  }
                  onOpenScreenshots={() =>
                    setLightboxItem({
                      image: '/evidence/07-audio-recording-website/Lab_web_1.png',
                      title: 'Audio Recording Website — Primary View',
                      subtitle: 'Lab_web_1.png (2225×1252)',
                      caption: 'Main application interface and recording dashboard view.',
                      aspectRatio: '2225 / 1252'
                    })
                  }
                  onViewAll={() => scrollToSection('project')}
                />
              </div>

              <div className="lg:col-span-5">
                <Section07CodingPractice
                  onSelectQuestion={handleSelectQuestion}
                  onViewPadletEvidence={handleViewPadletEvidence}
                  onViewAllQuestions={() =>
                    setDetailModalContent({
                      type: 'coding',
                      title: 'LeetCode Practice Overview',
                      subtitle: 'Algorithmic Problem Sets Solved During Coursework',
                      data: PORTFOLIO_DATA.codingPractice[0]
                    })
                  }
                />
              </div>
            </div>
          </div>
        </section>

        {/* 8. Side-by-Side Row: Section 08 (All 10 Activities) & Section 09 (My Reflection) */}
        <section className="py-10 bg-[#FFF9F1] border-b border-[#EFE6DC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
              <Section08AllActivities
                onSelectIndexActivity={handleSelectIndexActivity}
                onExploreAll={() => scrollToSection('activities')}
              />
              <Section09MyReflection
                onSelectPrompt={handleSelectPrompt}
                onReadFullReflection={handleReadFullReflection}
              />
            </div>
          </div>
        </section>

        {/* 9. Section 10 — Still Learning. Still Building. */}
        <Section10StillLearning />

        {/* 10. Section 11 — Published Writing */}
        <Section11PublishedWriting
          onOpenEvidence={(item) => setLightboxItem(item)}
        />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Universal Lightbox Modal for Uncropped Screenshots & Star Photos */}
      <LightboxModal
        item={lightboxItem}
        onClose={() => setLightboxItem(null)}
      />

      {/* Universal Detail Modal (PPT, Video, Code, Reflection, Audio Website) */}
      <DetailModal
        content={detailModalContent}
        onClose={() => setDetailModalContent(null)}
        onOpenLightbox={(imgUrl, title, caption) =>
          setLightboxItem({
            image: imgUrl,
            title: title,
            caption: caption,
            aspectRatio: imgUrl.includes('lab') ? '576 / 1024' : '2225 / 1252'
          })
        }
      />

      {/* 14-Section Hospital Lab Case Study Modal */}
      <HospitalLabCaseStudyModal
        isOpen={isCaseStudyModalOpen}
        onClose={() => setIsCaseStudyModalOpen(false)}
        onOpenLightbox={(imgUrl, title, caption) =>
          setLightboxItem({
            image: imgUrl,
            title: title,
            caption: caption,
            aspectRatio: imgUrl.includes('architecture') ? '1225 / 875' : '2225 / 1252'
          })
        }
      />

      {/* Academic Unit & PDF Syllabus Explorer Modal */}
      <AcademicUnitModal
        unit={selectedAcademicUnit}
        allUnits={ACADEMIC_UNITS}
        isOpen={!!selectedAcademicUnit}
        onClose={() => setSelectedAcademicUnit(null)}
        onSelectUnit={(unit) => setSelectedAcademicUnit(unit)}
      />
    </div>
  );
};
