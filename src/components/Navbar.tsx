import React, { useState, useEffect } from 'react';
import { NanomaxLogo } from './NanomaxLogo.tsx';
import { SCHOOL_INFO } from '../data/schoolData.ts';
import {
  Phone,
  Mail,
  MapPin,
  Calendar,
  Menu,
  X,
  ChevronRight,
  GraduationCap,
  Sparkles,
  MessageCircle,
} from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  onOpenTourModal: () => void;
  onOpenApplyModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  onOpenTourModal,
  onOpenApplyModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'admissions', label: 'Admissions' },
    { id: 'news', label: 'News & Events' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contacts', label: 'Contacts' },
  ];

  const handleNavClick = (tabId: string) => {
    onSelectTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Top Utility Bar (School contact details) */}
      <div className="bg-[#580c16] text-white text-xs border-b border-rose-900/50 py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2 gap-x-4">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
            <a
              href={`tel:${SCHOOL_INFO.telInternational}`}
              className="flex items-center gap-1.5 hover:text-sky-300 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>Tel: {SCHOOL_INFO.tel}</span>
            </a>
            <a
              href={`mailto:${SCHOOL_INFO.email}`}
              className="hidden sm:flex items-center gap-1.5 hover:text-sky-300 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-sky-400" />
              <span className="truncate max-w-[280px]">{SCHOOL_INFO.email}</span>
            </a>
            <div className="hidden lg:flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-rose-400" />
              <span>Location: {SCHOOL_INFO.location}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 bg-rose-950/80 text-rose-200 border border-rose-800/80 px-2.5 py-0.5 rounded-full text-[11px] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              2026/2027 Admissions Open
            </span>
            <a
              href={`https://wa.me/255783595532?text=Hello%20Nanomax%20School%2C%20I%20would%20like%20to%20inquire%20about%20admissions`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-[11px] px-2 py-0.5 rounded transition-colors"
            >
              <MessageCircle className="w-3 h-3" />
              <span className="hidden md:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5'
            : 'bg-white shadow-xs py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left focus:outline-hidden"
          >
            <NanomaxLogo size="md" />
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all relative ${
                    isActive
                      ? 'text-[#7c1221] bg-rose-50/80 font-bold'
                      : 'text-slate-700 hover:text-[#7c1221] hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#7c1221] rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-2.5">
            <button
              onClick={onOpenTourModal}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-slate-700 hover:text-[#7c1221] hover:bg-rose-50 border border-slate-200 rounded-lg transition-all"
            >
              <Calendar className="w-3.5 h-3.5 text-sky-600" />
              Visit Campus
            </button>
            <button
              onClick={onOpenApplyModal}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#7c1221] to-[#991b1b] hover:from-[#650f1b] hover:to-[#7f1d1d] shadow-sm hover:shadow-md rounded-lg transition-all"
            >
              <GraduationCap className="w-4 h-4 text-sky-300" />
              Enroll Today
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenApplyModal}
              className="md:hidden px-3 py-1.5 text-xs font-bold text-white bg-[#7c1221] rounded-lg"
            >
              Apply
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-[#7c1221] hover:bg-slate-100 focus:outline-hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[105px] bg-white border-b border-slate-200 shadow-xl px-4 py-5 animate-in slide-in-from-top-2 duration-200 z-50">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                    isActive
                      ? 'bg-rose-50 text-[#7c1221] font-bold border-l-4 border-[#7c1221]'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              );
            })}

            <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTourModal();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-slate-300 text-slate-700 font-bold text-sm bg-slate-50"
              >
                <Calendar className="w-4 h-4 text-sky-600" />
                Schedule a Campus Tour
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenApplyModal();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#7c1221] text-white font-bold text-sm shadow-md"
              >
                <GraduationCap className="w-4 h-4 text-sky-300" />
                Enroll for 2026/2027
              </button>
            </div>

            <div className="pt-4 text-xs text-slate-500 space-y-1 px-1">
              <p className="flex items-center gap-1.5 font-medium text-slate-700">
                <MapPin className="w-3.5 h-3.5 text-rose-700 shrink-0" />
                {SCHOOL_INFO.location}
              </p>
              <p className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                {SCHOOL_INFO.tel}
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
