import React from 'react';
import {
  ShieldCheck,
  Award,
  Atom,
  BookOpen,
  PenTool,
  Compass,
  CheckCircle2,
  Users,
  Bus,
  HeartHandshake,
  MapPin,
  Calendar,
  Sparkles,
  Target,
  Eye,
} from 'lucide-react';
import { NanomaxLogo } from '../components/NanomaxLogo.tsx';
import { SCHOOL_INFO, SCHOOL_VALUES } from '../data/schoolData.ts';

interface AboutViewProps {
  onOpenApplyModal: () => void;
  onOpenTourModal: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onOpenApplyModal,
  onOpenTourModal,
}) => {
  const facilities = [
    {
      title: 'Spacious, Air-Cooled Classrooms',
      desc: 'Designed with ergonomic seating, abundant natural sunlight, and modern audio-visual learning aids for focused engagement.',
      icon: 'BookOpen',
    },
    {
      title: 'Hands-on Science & STEM Laboratory',
      desc: 'Equipped with child-safe apparatus, microscopy, electrical circuit kits, and atomic models to bring theories to life.',
      icon: 'Atom',
    },
    {
      title: 'Vibrant Children’s Library',
      desc: 'Over 3,000 graded reading books, Jolly Phonics sets, encyclopedias, and a cozy reading pit that inspires lifelong readers.',
      icon: 'PenTool',
    },
    {
      title: 'Modern ICT & Coding Lab',
      desc: 'Fast desktop workstations, high-speed fiber internet, and guided coding/typing modules preparing students for the digital world.',
      icon: 'Sparkles',
    },
    {
      title: 'Secure Green Sports Field & Playground',
      desc: 'Fenced athletics track, football pitch, monkey bars, swings, and soft turf tailored for safe pre-school and primary physical play.',
      icon: 'Award',
    },
    {
      title: 'Monitored School Bus Transport',
      desc: 'Fleet of modern buses servicing Mbezi Louis, Mpigi, Igoma, Kimara, Kibamba, Goba, Tegeta, and Mbezi Beach.',
      icon: 'Bus',
    },
  ];

  const leadership = [
    {
      name: 'Mrs. Stella K. Msuya',
      role: 'Head of School',
      creds: 'M.Ed. Educational Leadership, 18+ Years Experience',
      bio: 'Visionary educator committed to child-centered holistic learning and high academic standards in Tanzania.',
    },
    {
      name: 'Mr. Josephat B. Mushi',
      role: 'Deputy Head & Academic Dean',
      creds: 'B.Sc. Education (Mathematics & Physics)',
      bio: 'Passionate STEM champion overseeing NECTA curriculum compliance, teacher mentorship, and exam prep.',
    },
    {
      name: 'Madam Rehema J. Lyimo',
      role: 'Head of Early Childhood (Pre-School)',
      creds: 'Diploma in Montessori Early Childhood Pedagogy',
      bio: 'Specialist in toddler phonics, early literacy stimulation, and nurturing smooth transition into Primary Standard I.',
    },
    {
      name: 'Coach Dennis M. Tarimo',
      role: 'Director of Physical Education & Sports',
      creds: 'National Sports Academy Certified Instructor',
      bio: 'Instills teamwork, athletic coordination, swimming fundamentals, and good sportsmanship across all grades.',
    },
  ];

  return (
    <div className="space-y-16 py-8 pb-16">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-[#680f1c] to-[#0284c7] text-white rounded-3xl p-8 sm:p-14 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sky-300 text-xs font-bold uppercase tracking-wider">
              About Nanomax School
            </span>
            <h1 className="font-heading text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Rooted in Care, Powered by Knowledge, Aiming for the Stars.
            </h1>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Established in Mbezi Louis, Dar es Salaam, Nanomax Pre and Primary School was founded on the promise to give every child a world-class English-medium foundation.
            </p>
          </div>
        </div>
      </section>

      {/* ================= MISSION, VISION, VALUES ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4 relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-200 text-[#7c1221] flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#7c1221]">
              Our Mission
            </span>
            <h3 className="font-heading font-black text-2xl text-slate-900">
              Empowering Every Learner to Excel
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To provide a safe, nurturing, and intellectually challenging English-medium learning environment where young children cultivate disciplined inquiry, fluent bilingual expression, creative problem-solving skills, and upright moral character.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4 relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 text-sky-700 flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
              Our Vision
            </span>
            <h3 className="font-heading font-black text-2xl text-slate-900">
              A Benchmark of Pre &amp; Primary Educational Excellence
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To be recognized as Tanzania’s foremost pre and primary educational academy, celebrated for stellar national examination triumphs, pioneering early STEM integration, and producing confident, ethical leaders who transform society.
            </p>
          </div>
        </div>
      </section>

      {/* ================= THE SCHOOL EMBLEM DECODED ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-rose-50/70 via-white to-sky-50/50 rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#7c1221] bg-white border border-rose-200 px-3 py-1 rounded-full shadow-xs">
              Symbolism &amp; Identity
            </span>
            <h2 className="font-heading text-3xl font-black text-slate-900">
              The Meaning Behind Our School Crest
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Every curve, orbit, and color in the Nanomax seal embodies our sacred commitment to your child's education.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Center Emblem Graphic */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-white rounded-3xl border border-slate-200 shadow-md">
              <NanomaxLogo size={200} showSubtitle={false} />
              <div className="mt-4 text-center">
                <span className="font-heading font-black text-slate-900 text-lg">
                  NANOMAX SEAL
                </span>
                <p className="text-xs text-[#7c1221] font-bold italic mt-0.5">
                  "Achieving Excellence Together"
                </p>
              </div>
            </div>

            {/* Explanations Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-slate-900 text-white rounded-lg">
                    <PenTool className="w-4 h-4" />
                  </div>
                  <h4 className="font-heading font-bold text-sm text-slate-900">
                    The Fountain Pen Nib
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Represents sharp intellect, academic precision, eloquent English writing, and the commitment to lifelong scholarship.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-[#7c1221] text-white rounded-lg">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <h4 className="font-heading font-bold text-sm text-slate-900">
                    The Open Burgundy Book
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The fountain of wisdom, moral ethics, and foundational literacy that unlocks boundless opportunity for every learner.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-sky-500 text-white rounded-lg">
                    <Atom className="w-4 h-4" />
                  </div>
                  <h4 className="font-heading font-bold text-sm text-slate-900">
                    The Atomic Orbital Rings
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Reflects modern STEM exploration, technological advancement, robotics, and child-led scientific discovery in the 21st century.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-gradient-to-r from-[#7c1221] to-sky-500 text-white rounded-lg">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <h4 className="font-heading font-bold text-sm text-slate-900">
                    Burgundy &amp; Sky Blue Harmony
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Deep burgundy signifies dignity, perseverance, and passion; sky blue reflects boundless horizons and clarity of vision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CAMPUS FACILITIES ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#7c1221] bg-rose-50 border border-rose-200 px-3 py-1 rounded-full">
            Modern Infrastructure
          </span>
          <h2 className="font-heading text-3xl font-black text-slate-900">
            Purpose-Built for Child Safety &amp; Success
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Located in peaceful Mbezi Louis (Mpigi Road), our campus is gated, monitored 24/7, and maintained to the highest hygiene standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((fac, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-[#7c1221] flex items-center justify-center">
                {fac.icon === 'BookOpen' && <BookOpen className="w-5 h-5 text-[#7c1221]" />}
                {fac.icon === 'Atom' && <Atom className="w-5 h-5 text-sky-600" />}
                {fac.icon === 'PenTool' && <PenTool className="w-5 h-5 text-amber-600" />}
                {fac.icon === 'Sparkles' && <Sparkles className="w-5 h-5 text-purple-600" />}
                {fac.icon === 'Award' && <Award className="w-5 h-5 text-emerald-600" />}
                {fac.icon === 'Bus' && <Bus className="w-5 h-5 text-rose-600" />}
              </div>
              <h4 className="font-heading font-black text-base text-slate-800">
                {fac.title}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {fac.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= LEADERSHIP & FACULTY ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-sky-700 bg-sky-50 border border-sky-200 px-3 py-1 rounded-full">
            Our People
          </span>
          <h2 className="font-heading text-3xl font-black text-slate-900">
            Experienced, Caring &amp; Dedicated Educators
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Every teacher at Nanomax is degreed or diplomated, police-cleared, and regularly trained in modern child psychology and instructional methods.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadership.map((member, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs text-center space-y-3"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-rose-100 to-sky-100 flex items-center justify-center text-2xl font-black font-heading text-[#7c1221] border-2 border-white shadow-md">
                {member.name.split(' ')[1]?.[0] || 'N'}
              </div>
              <div>
                <h4 className="font-heading font-black text-sm text-slate-900">
                  {member.name}
                </h4>
                <p className="text-xs font-bold text-[#7c1221] mt-0.5">{member.role}</p>
                <p className="text-[11px] text-slate-400 font-medium">{member.creds}</p>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed border-t border-slate-100 pt-2">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-4">
          <h3 className="font-heading text-2xl sm:text-3xl font-black">
            Want to see our campus in person?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            We invite prospective parents to tour the classrooms, inspect our sanitation facilities, and observe our pupils in action.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={onOpenTourModal}
              className="px-6 py-3 bg-white text-slate-900 font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-slate-100 transition-colors shadow-md"
            >
              Book a Tour Appointment
            </button>
            <button
              onClick={onOpenApplyModal}
              className="px-6 py-3 bg-[#7c1221] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-[#600d19] transition-colors shadow-md"
            >
              Start Admission Process
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
