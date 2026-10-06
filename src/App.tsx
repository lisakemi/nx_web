/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import { ApplyModal } from './components/ApplyModal.tsx';
import { TourModal } from './components/TourModal.tsx';
import { ProspectusModal } from './components/ProspectusModal.tsx';
import { HomeView } from './views/HomeView.tsx';
import { AboutView } from './views/AboutView.tsx';
import { AdmissionsView } from './views/AdmissionsView.tsx';
import { NewsView } from './views/NewsView.tsx';
import { GalleryView } from './views/GalleryView.tsx';
import { ContactsView } from './views/ContactsView.tsx';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { SCHOOL_INFO } from './data/schoolData.ts';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);
  const [isProspectusModalOpen, setIsProspectusModalOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Sync tab with URL hash if provided
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'about', 'admissions', 'news', 'gallery', 'contacts'].includes(hash)) {
        setCurrentTab(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Back to top scroll listener
  useEffect(() => {
    const checkScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const handleSelectTab = (tab: string) => {
    setCurrentTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-[#7c1221] selection:text-white relative">
      {/* Navigation */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        onOpenTourModal={() => setIsTourModalOpen(true)}
        onOpenApplyModal={() => setIsApplyModalOpen(true)}
      />

      {/* Main View Area */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <HomeView
            onSelectTab={handleSelectTab}
            onOpenApplyModal={() => setIsApplyModalOpen(true)}
            onOpenTourModal={() => setIsTourModalOpen(true)}
            onOpenProspectusModal={() => setIsProspectusModalOpen(true)}
          />
        )}
        {currentTab === 'about' && (
          <AboutView
            onOpenApplyModal={() => setIsApplyModalOpen(true)}
            onOpenTourModal={() => setIsTourModalOpen(true)}
          />
        )}
        {currentTab === 'admissions' && (
          <AdmissionsView
            onOpenApplyModal={() => setIsApplyModalOpen(true)}
            onOpenTourModal={() => setIsTourModalOpen(true)}
            onOpenProspectusModal={() => setIsProspectusModalOpen(true)}
          />
        )}
        {currentTab === 'news' && <NewsView />}
        {currentTab === 'gallery' && (
          <GalleryView onOpenTourModal={() => setIsTourModalOpen(true)} />
        )}
        {currentTab === 'contacts' && <ContactsView />}
      </main>

      {/* Footer */}
      <Footer
        onSelectTab={handleSelectTab}
        onOpenTourModal={() => setIsTourModalOpen(true)}
        onOpenApplyModal={() => setIsApplyModalOpen(true)}
      />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
        {/* Back to top button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-3 bg-white text-slate-700 hover:text-[#7c1221] rounded-full shadow-lg border border-slate-200 hover:shadow-xl transition-all transform hover:-translate-y-0.5"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        {/* Floating WhatsApp Action Button */}
        <a
          href="https://wa.me/255783595532?text=Hello%20Nanomax%20Pre%20and%20Primary%20School%2C%20I%20would%20like%20to%20inquire%20about%20admissions"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Us"
          className="group flex items-center gap-2 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 duration-200"
        >
          <MessageCircle className="w-5 h-5 text-white" />
          <span className="text-xs font-bold hidden sm:inline group-hover:inline transition-all">
            Chat on WhatsApp
          </span>
        </a>

        {/* Floating Quick Call Button on Mobile */}
        <a
          href={`tel:${SCHOOL_INFO.telInternational}`}
          aria-label="Call Nanomax School"
          className="sm:hidden p-3.5 bg-[#7c1221] hover:bg-[#600d19] text-white rounded-full shadow-xl transition-all"
        >
          <Phone className="w-4 h-4 text-white" />
        </a>
      </div>

      {/* Modals */}
      <ApplyModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
      />

      <TourModal
        isOpen={isTourModalOpen}
        onClose={() => setIsTourModalOpen(false)}
      />

      <ProspectusModal
        isOpen={isProspectusModalOpen}
        onClose={() => setIsProspectusModalOpen(false)}
      />
    </div>
  );
}
