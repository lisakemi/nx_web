import React, { useState } from 'react';
import { X, Download, Printer, CheckCircle, FileText, BookOpen, ShieldCheck } from 'lucide-react';
import { NanomaxLogo } from './NanomaxLogo.tsx';
import { SCHOOL_INFO } from '../data/schoolData.ts';

interface ProspectusModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProspectusModal: React.FC<ProspectusModalProps> = ({ isOpen, onClose }) => {
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => {
      // Simulate download feedback
      window.print();
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-[#7c1221] px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-1 bg-white rounded-lg">
              <NanomaxLogo size="sm" showSubtitle={false} />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg leading-tight">
                School Prospectus &amp; Information Guide
              </h3>
              <p className="text-xs text-rose-200">
                Nanomax Pre and Primary School • 2026/2027 Academic Year
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Document Preview Content */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-6 text-slate-700 text-xs">
          {/* Cover Letter Banner */}
          <div className="bg-rose-50/70 border border-rose-200 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-[#7c1221] text-white rounded-xl">
                <BookOpen className="w-6 h-6 text-sky-300" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">
                  Official Nanomax Parent Guidebook
                </h4>
                <p className="text-slate-600">
                  Comprehensive curriculum, code of conduct, daily routine &amp; school life.
                </p>
              </div>
            </div>

            <button
              onClick={handleDownload}
              className="px-4 py-2 bg-[#7c1221] hover:bg-[#600d19] text-white font-bold rounded-lg flex items-center gap-2 shadow-sm shrink-0 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>
          </div>

          {/* Section 1: Overview & Mission */}
          <div className="space-y-2 border-b border-slate-200 pb-4">
            <h5 className="font-heading font-bold text-sm text-[#7c1221] uppercase tracking-wider">
              1. School Philosophy &amp; Motto
            </h5>
            <p className="leading-relaxed">
              At <strong className="text-slate-900">Nanomax Pre and Primary School</strong>, we believe every child is born with boundless capacity to learn, discover, and lead. Guided by our motto <em className="text-[#7c1221] font-semibold">"Achieving Excellence Together"</em>, we provide an inspiring English-medium academic environment that blends academic excellence, strong moral values, sportsmanship, and technological readiness.
            </p>
          </div>

          {/* Section 2: Programs */}
          <div className="space-y-3 border-b border-slate-200 pb-4">
            <h5 className="font-heading font-bold text-sm text-[#7c1221] uppercase tracking-wider">
              2. Academic Structure
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <span className="font-bold text-slate-900 block text-xs">Pre-School Wing (Ages 1.5 - 5.5)</span>
                <p className="text-slate-500 text-[11px] mt-1">
                  • Daycare (1.5 - 2.5 yrs)<br />
                  • Baby Class (3 yrs)<br />
                  • Middle Class (4 yrs)<br />
                  • Pre-Unit / Prep (5 yrs)<br />
                  Focus: Jolly Phonics, early numeracy, social play, fine motor skills.
                </p>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <span className="font-bold text-slate-900 block text-xs">Primary School (Standard I – VII)</span>
                <p className="text-slate-500 text-[11px] mt-1">
                  • Tanzania National Curriculum (NECTA)<br />
                  • Standard IV &amp; Standard VII National Examinations<br />
                  • Core: Math, English, Science, Social Studies, Kiswahili<br />
                  • ICT Lab, Robotics, Music &amp; Sports
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: Daily Routine */}
          <div className="space-y-2 border-b border-slate-200 pb-4">
            <h5 className="font-heading font-bold text-sm text-[#7c1221] uppercase tracking-wider">
              3. Daily School Routine
            </h5>
            <div className="space-y-1.5">
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="font-medium text-slate-700">7:00 AM – 7:30 AM</span>
                <span>Campus Arrival &amp; Morning Devotion / Health Check</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="font-medium text-slate-700">7:30 AM – 10:00 AM</span>
                <span>Morning Instructional Period &amp; Phonics Mastery</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="font-medium text-slate-700">10:00 AM – 10:30 AM</span>
                <span>Nutritious Mid-Morning Snack &amp; Supervised Outdoor Play</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="font-medium text-slate-700">10:30 AM – 1:00 PM</span>
                <span>Core Academics, Mathematics, Science Lab &amp; Reading</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="font-medium text-slate-700">1:00 PM – 2:00 PM</span>
                <span>Balanced Hot Lunch &amp; Rest Period (Pre-School)</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="font-medium text-slate-700">2:00 PM – 3:30 PM (or 4:30 PM)</span>
                <span>Afternoon Electives, ICT, Sports, Clubs &amp; Bus Departure</span>
              </div>
            </div>
          </div>

          {/* Section 4: Contact & Registration Details */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5 text-[11px]">
            <p className="font-bold text-slate-900 text-xs">Official Contact Details:</p>
            <p><strong className="text-slate-800">Physical Address:</strong> {SCHOOL_INFO.location}, {SCHOOL_INFO.city}</p>
            <p><strong className="text-slate-800">Postal Address:</strong> {SCHOOL_INFO.poBox}</p>
            <p><strong className="text-slate-800">Telephone:</strong> {SCHOOL_INFO.tel}</p>
            <p><strong className="text-slate-800">Email:</strong> {SCHOOL_INFO.email}</p>
          </div>
        </div>

        {/* Footer actions */}
        <div className="bg-slate-100 px-6 py-3 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 font-semibold"
          >
            <Printer className="w-4 h-4" />
            Print Guide
          </button>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-lg text-xs font-bold transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
