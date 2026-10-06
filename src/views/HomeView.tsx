import React, { useState } from 'react';
import {
  GraduationCap,
  Sparkles,
  Calendar,
  ShieldCheck,
  Award,
  Users,
  Bus,
  BookOpen,
  ArrowRight,
  HeartHandshake,
  CheckCircle2,
  Atom,
  Clock,
  MapPin,
  Phone,
  Utensils,
  Laptop,
  ChevronRight,
  Star,
  Quote,
} from 'lucide-react';
import { NanomaxLogo } from '../components/NanomaxLogo.tsx';
import {
  SCHOOL_INFO,
  ACADEMIC_PROGRAMS,
  SCHOOL_NEWS,
  SCHOOL_VALUES,
} from '../data/schoolData.ts';

interface HomeViewProps {
  onSelectTab: (tab: string) => void;
  onOpenApplyModal: () => void;
  onOpenTourModal: () => void;
  onOpenProspectusModal: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onSelectTab,
  onOpenApplyModal,
  onOpenTourModal,
  onOpenProspectusModal,
}) => {
  // Interactive Academic & Campus Services Explorer State
  const [selectedWing, setSelectedWing] = useState<'daycare' | 'nursery' | 'primary'>('nursery');
  const [selectedService, setSelectedService] = useState<'curriculum' | 'transport' | 'nutrition' | 'facilities'>('curriculum');

  return (
    <div className="space-y-20 pb-16">
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-rose-50/60 via-slate-50 to-white pt-8 pb-16 lg:py-20 border-b border-slate-200/70">
        {/* Decorative background orbs with logo colors */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-rose-200/25 blur-3xl rounded-full pointer-events-none -z-10" />
        <div className="absolute top-40 right-10 w-[350px] h-[350px] bg-sky-200/30 blur-3xl rounded-full pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headlines & CTA */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-rose-200 shadow-xs text-xs font-bold text-[#7c1221] animate-in fade-in slide-in-from-top-3">
                <span className="w-2 h-2 rounded-full bg-[#7c1221] animate-ping" />
                <span className="uppercase tracking-wider">Admissions Open 2026 / 2027</span>
                <span className="text-slate-300">|</span>
                <span className="text-sky-700 font-semibold">Pre &amp; Primary School</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
                Achieving Excellence <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c1221] via-[#991b1b] to-sky-600">Together.</span>
              </h1>

              {/* Sub-headline */}
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Welcome to <strong className="text-slate-900 font-bold">Nanomax Pre and Primary School</strong> located in <span className="text-[#7c1221] font-semibold">Mbezi Louis, Mpigi Road (Igoma)</span>. We cultivate academic mastery, bilingual fluency, strong morals, and joyful STEM exploration in a secure, loving community.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
                <button
                  onClick={onOpenApplyModal}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#7c1221] to-[#991b1b] hover:from-[#650f1b] hover:to-[#831422] text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all flex items-center gap-2 group"
                >
                  <GraduationCap className="w-5 h-5 text-sky-300 group-hover:scale-110 transition-transform" />
                  <span>Enroll Your Child</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={onOpenTourModal}
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-sm border border-slate-300 shadow-xs hover:shadow-md transition-all flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-sky-600" />
                  <span>Book Campus Tour</span>
                </button>

                <button
                  onClick={onOpenProspectusModal}
                  className="px-4 py-3.5 rounded-xl text-xs font-bold text-[#7c1221] hover:bg-rose-50 transition-colors flex items-center gap-1.5"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>School Prospectus</span>
                </button>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left border-t border-slate-200/80">
                <div className="p-3 bg-white/80 rounded-xl border border-slate-200/60 shadow-xs">
                  <p className="font-heading font-black text-xl text-[#7c1221]">100%</p>
                  <p className="text-[11px] text-slate-500 font-medium">PSLE Pass Rate</p>
                </div>
                <div className="p-3 bg-white/80 rounded-xl border border-slate-200/60 shadow-xs">
                  <p className="font-heading font-black text-xl text-sky-600">1 : 15</p>
                  <p className="text-[11px] text-slate-500 font-medium">Teacher-Pupil Ratio</p>
                </div>
                <div className="p-3 bg-white/80 rounded-xl border border-slate-200/60 shadow-xs">
                  <p className="font-heading font-black text-xl text-emerald-600">Safe Bus</p>
                  <p className="text-[11px] text-slate-500 font-medium">Door-to-door routes</p>
                </div>
                <div className="p-3 bg-white/80 rounded-xl border border-slate-200/60 shadow-xs">
                  <p className="font-heading font-black text-xl text-amber-600">STEM &amp; ICT</p>
                  <p className="text-[11px] text-slate-500 font-medium">Computer &amp; Sci-Lab</p>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Showcase */}
            <div className="lg:col-span-5 relative">
              {/* Outer decorative card */}
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Hero Photo */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
                  <img
                    src="/images/nanomax_hero_students_1790178517975.jpg"
                    alt="Nanomax Pre and Primary School Students in Classroom"
                    className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  {/* Floating Caption inside photo */}
                  <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-white/50 text-slate-800">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-rose-50 border border-rose-200 text-[#7c1221]">
                        <Atom className="w-6 h-6 text-[#7c1221] animate-spin" style={{ animationDuration: '15s' }} />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-[#7c1221]">
                          Modern Learning Campus
                        </p>
                        <p className="text-xs text-slate-600 font-medium">
                          Mbezi Louis, Mpigi Road (Igoma) • Dar es Salaam
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge (Top Left) */}
                <div className="absolute -top-5 -left-5 bg-white p-3 rounded-2xl shadow-xl border border-slate-200/80 hidden sm:flex items-center gap-3">
                  <div className="p-2 bg-emerald-100 rounded-xl text-emerald-700">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                      Certified Quality
                    </span>
                    <span className="text-xs font-extrabold text-slate-900">
                      Tanzania English Medium
                    </span>
                  </div>
                </div>

                {/* Floating Badge (Bottom Right) */}
                <div className="absolute -bottom-4 -right-4 bg-white px-4 py-2.5 rounded-2xl shadow-xl border border-slate-200/80 hidden sm:flex items-center gap-2">
                  <div className="flex -space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-slate-800">5.0 Parent Trust</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HEAD OF SCHOOL WELCOME ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-[#500c15] text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          {/* Subtle logo watermark */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 opacity-10 pointer-events-none">
            <NanomaxLogo size="xl" showSubtitle={false} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sky-300 text-xs font-bold uppercase tracking-wider">
                <Quote className="w-3.5 h-3.5" />
                Message from the Head of School
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                "Every child is an extraordinary story waiting to be written."
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Welcome to Nanomax Pre and Primary School. We founded Nanomax with a clear conviction: that a child's foundational early years shape their entire life trajectory. Here at our Mbezi Louis campus, we provide a warm, disciplined, and intellectually vibrant atmosphere where children discover their talents, conquer mathematics and sciences with joy, read with comprehension, and embody good character.
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Together with our passionate teaching faculty and supportive parents, we live by our motto: <strong className="text-sky-300">Achieving Excellence Together</strong>. We warmly invite your family to join our thriving school community.
              </p>
              <div className="pt-2 flex items-center gap-4">
                <div>
                  <h4 className="font-heading font-black text-white text-base">
                    Head of School &amp; Management Board
                  </h4>
                  <p className="text-xs text-sky-400">Nanomax Pre and Primary School</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-center space-y-3">
              <div className="p-3 bg-white rounded-full shadow-md">
                <NanomaxLogo size={80} showSubtitle={false} />
              </div>
              <div>
                <p className="font-heading font-black text-white text-lg">Visit Us This Week</p>
                <p className="text-xs text-slate-300 mt-1">
                  Mbezi Louis, Mpigi Road (Igoma)
                </p>
              </div>
              <div className="w-full pt-2">
                <button
                  onClick={onOpenTourModal}
                  className="w-full py-2.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-extrabold text-xs rounded-xl shadow-md transition-colors"
                >
                  Schedule an Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ACADEMIC PROGRAM WINGS ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#7c1221] bg-rose-50 border border-rose-200 px-3 py-1 rounded-full">
            Our Academic Journey
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-black text-slate-900">
            Nurturing Every Stage of Growth
          </h2>
          <p className="text-sm text-slate-600">
            From playful sensory exploration in toddlerhood to rigorous NECTA primary examination triumphs, Nanomax supports your child every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACADEMIC_PROGRAMS.map((prog, idx) => (
            <div
              key={prog.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
            >
              {/* Program Header */}
              <div
                className="p-5 text-white relative"
                style={{
                  backgroundColor: prog.color,
                }}
              >
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="bg-white/20 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider text-[10px]">
                    Step 0{idx + 1}
                  </span>
                  <span className="font-medium text-white/90">{prog.ageRange}</span>
                </div>
                <h3 className="font-heading font-black text-xl leading-tight">
                  {prog.title}
                </h3>
                <p className="text-xs text-white/80 font-medium mt-1">
                  {prog.grades}
                </p>
              </div>

              {/* Program Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs text-slate-600 leading-relaxed">
                  {prog.description}
                </p>

                <div className="space-y-2 border-t border-slate-100 pt-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block">
                    Curriculum Highlights:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {prog.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">{prog.timing}</span>
                  <button
                    onClick={onOpenApplyModal}
                    className="text-[#7c1221] hover:text-[#500c15] font-bold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Apply</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= INTERACTIVE ACADEMIC WINGS & CAMPUS SERVICES ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-rose-50/50 via-white to-sky-50/40 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left side text */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-rose-200 text-xs font-bold text-[#7c1221]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Interactive Program Explorer</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                Explore Nanomax Learning Wings &amp; Campus Life
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Nanomax Pre and Primary School delivers an inspiring, child-centered educational experience in Mbezi Louis. Select an academic wing and explore our comprehensive curriculum, safe bus network, wholesome dining, and modern STEM facilities.
              </p>
              <div className="p-4 bg-white rounded-2xl border border-slate-200/80 text-xs space-y-2">
                <p className="font-bold text-slate-800">What every Nanomax pupil experiences:</p>
                <ul className="space-y-1.5 text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>English-medium textbooks &amp; rich classroom library materials</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>ICT computer laboratory sessions &amp; hands-on science lab access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Weekly sports coaching, arts, music, and character mentorship</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Regular assessment reports &amp; active parent-teacher consultations</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right side interactive explorer card */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl space-y-5">
              <h3 className="font-heading font-black text-lg text-slate-800 border-b border-slate-100 pb-3 flex items-center justify-between">
                <span>Select Academic Wing</span>
                <span className="text-xs font-bold text-[#7c1221] bg-rose-50 px-2 py-0.5 rounded">
                  {selectedWing === 'daycare' && 'Ages 1.5 – 2.5'}
                  {selectedWing === 'nursery' && 'Ages 3 – 5.5'}
                  {selectedWing === 'primary' && 'Standard I – VII'}
                </span>
              </h3>

              {/* 1. Academic Wing Selection */}
              <div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'daycare', label: 'Daycare & Crèche', sub: '1.5 - 2.5 yrs' },
                    { id: 'nursery', label: 'Nursery & Pre-Unit', sub: '3 - 5.5 yrs' },
                    { id: 'primary', label: 'Primary School', sub: 'Standard I - VII' },
                  ].map((lvl) => (
                    <button
                      key={lvl.id}
                      type="button"
                      onClick={() => setSelectedWing(lvl.id as any)}
                      className={`p-3 rounded-xl text-left border transition-all text-xs ${
                        selectedWing === lvl.id
                          ? 'border-[#7c1221] bg-rose-50/80 text-[#7c1221] font-bold shadow-xs'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      <p className="font-bold leading-tight">{lvl.label}</p>
                      <p className="text-[10px] text-slate-500 mt-0.5">{lvl.sub}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Campus Service Tabs */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Explore Campus Features &amp; Provisions
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'curriculum', label: 'Curriculum', icon: BookOpen },
                    { id: 'transport', label: 'School Bus', icon: Bus },
                    { id: 'nutrition', label: 'Daily Meals', icon: Utensils },
                    { id: 'facilities', label: 'ICT & Labs', icon: Laptop },
                  ].map((svc) => {
                    const IconComp = svc.icon;
                    return (
                      <button
                        key={svc.id}
                        type="button"
                        onClick={() => setSelectedService(svc.id as any)}
                        className={`p-2.5 rounded-xl text-left border transition-all text-xs flex items-center gap-2 ${
                          selectedService === svc.id
                            ? 'border-sky-600 bg-sky-50 text-sky-800 font-bold shadow-xs'
                            : 'border-slate-200 hover:border-slate-300 text-slate-700'
                        }`}
                      >
                        <IconComp className="w-4 h-4 shrink-0" />
                        <span className="font-bold leading-tight">{svc.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dynamic Information Display Box */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs space-y-3">
                {selectedService === 'curriculum' && (
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">
                      {selectedWing === 'daycare' && 'Daycare & Crèche Early Development'}
                      {selectedWing === 'nursery' && 'Nursery & Pre-Unit Phonics Foundation'}
                      {selectedWing === 'primary' && 'Primary English-Medium Academic Excellence'}
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      {selectedWing === 'daycare' &&
                        'Sensory discovery, basic speech development, interactive songs, gentle physical exercises, and social interaction in a secure, loving environment.'}
                      {selectedWing === 'nursery' &&
                        'Systematic Jolly Phonics letter-sound mastery, early numeracy 1–100, fine motor handwriting skills, creative arts, and bilingual fluency.'}
                      {selectedWing === 'primary' &&
                        'Rigorous Tanzania NECTA English Medium curriculum with dedicated focus on Mathematics, Science, Social Studies, English, Kiswahili, ICT, and PSLE exam triumphs.'}
                    </p>
                  </div>
                )}

                {selectedService === 'transport' && (
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                      <Bus className="w-4 h-4 text-sky-600" />
                      <span>Dedicated Safe School Bus Fleet</span>
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      Safe door-to-door and central pick-up routes driven by certified, vetted professional drivers accompanied by caring school bus matrons.
                    </p>
                    <p className="text-[11px] text-slate-500 font-semibold mt-1">
                      Route coverage: Mbezi Louis, Mpigi Road (Igoma), Kimara, Kibamba, Goba, Tegeta, Mbezi Beach, and surrounding Dar es Salaam communities.
                    </p>
                  </div>
                )}

                {selectedService === 'nutrition' && (
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                      <Utensils className="w-4 h-4 text-[#7c1221]" />
                      <span>Fresh Nutritious Dining Program</span>
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      Every child enjoys fresh, hygienically prepared meals cooked on campus daily:
                    </p>
                    <ul className="mt-1 space-y-1 text-slate-600 text-[11px]">
                      <li>• <strong>Mid-morning:</strong> Warm nutrient-packed porridge or milk tea with fresh wholesome snacks</li>
                      <li>• <strong>Lunch:</strong> Balanced warm hot meal with vegetables, protein sources, rice, ugali, and fresh seasonal fruit</li>
                    </ul>
                  </div>
                )}

                {selectedService === 'facilities' && (
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                      <Laptop className="w-4 h-4 text-emerald-600" />
                      <span>Modern STEM &amp; Digital Learning Facilities</span>
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      Our modern campus on Mpigi Road (Igoma) boasts 30 modern networked all-in-one computers, interactive smart projectors, elementary science experimental kits, a reading library, and an open playground for sports and games.
                    </p>
                  </div>
                )}
              </div>

              {/* Action Buttons Box */}
              <div className="bg-slate-900 text-white p-5 rounded-2xl flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-sky-400 font-bold block">
                    Admissions Now Open (2026/2027)
                  </span>
                  <span className="text-base sm:text-lg font-heading font-black text-white">
                    Secure Your Child’s Spot at Nanomax
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={onOpenApplyModal}
                    className="px-5 py-2.5 bg-gradient-to-r from-rose-500 to-[#7c1221] hover:from-rose-600 hover:to-[#600d19] text-white font-bold text-xs rounded-xl shadow-md transition-all"
                  >
                    Apply Online
                  </button>
                  <button
                    onClick={onOpenTourModal}
                    className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl border border-white/20 transition-all"
                  >
                    Book Campus Tour
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOUR PILLARS / VALUES ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#7c1221] bg-rose-50 border border-rose-200 px-3 py-1 rounded-full">
            Our Foundation
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-black text-slate-900">
            Why Parents Trust Nanomax
          </h2>
          <p className="text-sm text-slate-600">
            Our educational approach combines the rigors of classical scholarship with 21st-century technological curiosity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SCHOOL_VALUES.map((val, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-lg transition-all space-y-3"
            >
              <div className="w-12 h-12 rounded-xl bg-rose-50 text-[#7c1221] border border-rose-200/80 flex items-center justify-center font-bold">
                {idx === 0 && <GraduationCap className="w-6 h-6" />}
                {idx === 1 && <ShieldCheck className="w-6 h-6" />}
                {idx === 2 && <Atom className="w-6 h-6" />}
                {idx === 3 && <HeartHandshake className="w-6 h-6" />}
              </div>
              <h3 className="font-heading font-black text-lg text-slate-800">
                {val.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CAMPUS LIFE & GALLERY PREVIEW ================= */}
      <section className="bg-slate-100 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-sky-700 bg-sky-100 px-3 py-1 rounded-full">
                Life at Nanomax
              </span>
              <h2 className="font-heading text-3xl font-black text-slate-900 mt-2">
                Inspiring Moments Every Single Day
              </h2>
            </div>
            <button
              onClick={() => onSelectTab('gallery')}
              className="text-xs font-bold text-[#7c1221] hover:text-[#500c15] flex items-center gap-1.5 px-4 py-2 bg-white rounded-xl border border-slate-300 shadow-xs"
            >
              <span>View Full Photo Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative rounded-2xl overflow-hidden shadow-md bg-white border border-slate-200">
              <img
                src="/images/nanomax_stem_science_1790178528898.jpg"
                alt="Nanomax Science Experiment"
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-sky-600">
                  STEM &amp; Discovery
                </span>
                <h4 className="font-heading font-bold text-sm text-slate-900 mt-0.5">
                  Hands-on Science &amp; Atomic Exploration
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Practical laboratory modules awakening innate scientific curiosity in young pupils.
                </p>
              </div>
            </div>

            <div className="group relative rounded-2xl overflow-hidden shadow-md bg-white border border-slate-200">
              <img
                src="/images/nanomax_library_reading_1790178544168.jpg"
                alt="Nanomax Library Storytime"
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#7c1221]">
                  Literacy &amp; Reading
                </span>
                <h4 className="font-heading font-bold text-sm text-slate-900 mt-0.5">
                  Comprehensive Library &amp; Storytelling
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Cultivating fluent English pronunciation, phonetic mastery, and a life of books.
                </p>
              </div>
            </div>

            <div className="group relative rounded-2xl overflow-hidden shadow-md bg-white border border-slate-200 sm:col-span-2 lg:col-span-1">
              <img
                src="/images/nanomax_sports_playground_1790178556838.jpg"
                alt="Nanomax Sports & Playground"
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">
                  Physical Education
                </span>
                <h4 className="font-heading font-bold text-sm text-slate-900 mt-0.5">
                  Sports Complex &amp; Safe Play Area
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Nurturing teamwork, fitness, and joyful outdoor athletics on green playing grounds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PARENT TESTIMONIALS ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#7c1221] bg-rose-50 border border-rose-200 px-3 py-1 rounded-full">
            Parent Testimonials
          </span>
          <h2 className="font-heading text-3xl font-black text-slate-900">
            What Families Say About Nanomax
          </h2>
          <p className="text-sm text-slate-600">
            Hear from parents whose children thrive in our classrooms every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-xs text-slate-600 leading-relaxed italic">
              "We enrolled our daughter in Baby Class and now she is in Pre-Unit. Her reading fluency and confidence in English have astonished our entire extended family. Nanomax teachers truly care!"
            </p>
            <div className="border-t border-slate-100 pt-3">
              <p className="font-heading font-bold text-xs text-slate-900">Mrs. Beatrice Ndossi</p>
              <p className="text-[11px] text-slate-500">Parent of Pre-Unit Pupil • Mbezi Louis</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-xs text-slate-600 leading-relaxed italic">
              "The school bus service is punctual and safe. As working parents, knowing our boy is picked up at our gate and brought home safely gives us peace of mind. The mathematics teaching is top-notch."
            </p>
            <div className="border-t border-slate-100 pt-3">
              <p className="font-heading font-bold text-xs text-slate-900">Eng. Rashid Mwakyoma</p>
              <p className="text-[11px] text-slate-500">Parent of Standard III Pupil • Kimara</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-xs text-slate-600 leading-relaxed italic">
              "Nanomax lives up to its motto of Achieving Excellence Together. The science projects, computer literacy, and moral discipline are evident in how our son speaks and behaves."
            </p>
            <div className="border-t border-slate-100 pt-3">
              <p className="font-heading font-bold text-xs text-slate-900">Dr. Amina Kassim</p>
              <p className="text-[11px] text-slate-500">Parent of Standard V Pupil • Mpigi Road</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL LOCATION & CTA BANNER ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#7c1221] via-[#881324] to-[#0284c7] rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-rose-300" />
              <span>Campus Location</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-black">
              Mbezi Louis, Mpigi Road (Igoma)
            </h2>
            <p className="text-sm text-rose-100 max-w-xl">
              Easy access from Morogoro Road. Admissions desks open Monday through Saturday. Call <span className="font-bold underline text-white">{SCHOOL_INFO.tel}</span> or drop by.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={onOpenTourModal}
              className="px-6 py-3.5 bg-white text-slate-900 font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg hover:bg-slate-100 transition-colors"
            >
              Book School Tour
            </button>
            <button
              onClick={onOpenApplyModal}
              className="px-6 py-3.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Enroll 2026/2027</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
