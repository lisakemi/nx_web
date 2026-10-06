import React, { useState } from 'react';
import {
  GraduationCap,
  Calendar,
  CheckCircle2,
  FileText,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Download,
  AlertCircle,
  Bus,
  CreditCard,
  Phone,
  Mail,
  ArrowRight,
} from 'lucide-react';
import { SCHOOL_INFO, ADMISSION_FAQS } from '../data/schoolData.ts';

interface AdmissionsViewProps {
  onOpenApplyModal: () => void;
  onOpenTourModal: () => void;
  onOpenProspectusModal: () => void;
}

export const AdmissionsView: React.FC<AdmissionsViewProps> = ({
  onOpenApplyModal,
  onOpenTourModal,
  onOpenProspectusModal,
}) => {
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(0);

  const steps = [
    {
      step: '01',
      title: 'Inquiry & Campus Tour',
      desc: 'Fill out our quick online tour request or call 0783-595532. Walk the campus with our admissions team.',
    },
    {
      step: '02',
      title: 'Complete Application Form',
      desc: 'Submit our online application form or collect an admission packet from our Mbezi Louis administrative office.',
    },
    {
      step: '03',
      title: 'Readiness Assessment',
      desc: 'A friendly, age-appropriate assessment for pre-schoolers or a basic academic aptitude screening for primary entry.',
    },
    {
      step: '04',
      title: 'Offer Letter & Enrollment',
      desc: 'Receive official admission offer letter, complete registration paperwork, receive uniform kit, and welcome your child to Nanomax!',
    },
  ];

  const gradeCriteria = [
    {
      level: 'Daycare & Crèche',
      age: '1.5 – 2.5 Years',
      capacity: '15 per cohort',
      focus: 'Sensory discovery, speech development, gentle socialization.',
    },
    {
      level: 'Baby Class (Nursery)',
      age: '3 Years by Dec',
      capacity: '20 per class',
      focus: 'Pre-reading phonics, motor coordination, colors, shapes & manners.',
    },
    {
      level: 'Middle Class',
      age: '4 Years',
      capacity: '22 per class',
      focus: 'Letter sounds (Jolly Phonics), counting 1–50, fine motor handwriting.',
    },
    {
      level: 'Pre-Unit (Prep)',
      age: '5 Years',
      capacity: '24 per class',
      focus: 'Independent early reading, addition/subtraction, writing & science.',
    },
    {
      level: 'Lower Primary (Std I – IV)',
      age: '6 – 9 Years',
      capacity: '25 per class',
      focus: 'English Medium NECTA, Math, Science, Social Studies, ICT & Arts.',
    },
    {
      level: 'Upper Primary (Std V – VII)',
      age: '10 – 13 Years',
      capacity: '25 per class',
      focus: 'PSLE national exam triumphs, critical analysis, leadership & robotics.',
    },
  ];

  return (
    <div className="space-y-16 py-8 pb-16">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#7c1221] via-[#881324] to-[#0f172a] text-white rounded-3xl p-8 sm:p-14 shadow-xl">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sky-300 text-xs font-bold uppercase tracking-wider">
              Admissions 2026/2027 Open
            </span>
            <h1 className="font-heading text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Begin Your Child’s Journey of Excellence Today
            </h1>
            <p className="text-rose-100 text-sm sm:text-base leading-relaxed">
              We welcome prospective families to discover a nurturing academic environment at Nanomax Pre and Primary School in Mbezi Louis, Dar es Salaam.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={onOpenApplyModal}
                className="px-6 py-3 bg-white text-[#7c1221] font-black text-xs uppercase tracking-wider rounded-xl shadow-md hover:bg-slate-100 transition-colors flex items-center gap-2"
              >
                <GraduationCap className="w-4 h-4" />
                Fill Online Application
              </button>
              <button
                onClick={onOpenTourModal}
                className="px-6 py-3 bg-sky-500 hover:bg-sky-400 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl shadow-md transition-colors flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Schedule a Visit
              </button>
              <button
                onClick={onOpenProspectusModal}
                className="px-4 py-3 bg-transparent hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider rounded-xl border border-white/30 transition-colors flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Prospectus PDF
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 4-STEP ADMISSION PROCESS ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#7c1221] bg-rose-50 border border-rose-200 px-3 py-1 rounded-full">
            Simple &amp; Transparent
          </span>
          <h2 className="font-heading text-3xl font-black text-slate-900">
            Our 4-Step Admission Journey
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            We ensure an inviting, stress-free experience for both parents and young learners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs relative space-y-3 group hover:border-[#7c1221] transition-colors"
            >
              <span className="font-heading font-black text-3xl text-rose-100 group-hover:text-rose-200 transition-colors block">
                {s.step}
              </span>
              <h3 className="font-heading font-black text-lg text-slate-900">
                {s.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= AGE MATRIX & PLACEMENT ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-sky-700 bg-sky-50 border border-sky-200 px-3 py-1 rounded-full">
            Grade Placement
          </span>
          <h2 className="font-heading text-3xl font-black text-slate-900">
            Age &amp; Class Eligibility Guide
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Guidelines to assist you in selecting the right class for your child.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-600">
              <thead className="bg-slate-50 text-slate-900 font-heading font-extrabold uppercase text-[11px] tracking-wider border-b border-slate-200">
                <tr>
                  <th className="py-3.5 px-4 sm:px-6">Academic Class</th>
                  <th className="py-3.5 px-4 sm:px-6">Age Requirement</th>
                  <th className="py-3.5 px-4 sm:px-6">Class Capacity</th>
                  <th className="py-3.5 px-4 sm:px-6">Key Focus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {gradeCriteria.map((item, i) => (
                  <tr key={i} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                      {item.level}
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 text-[#7c1221] font-semibold">
                      {item.age}
                    </td>
                    <td className="py-3.5 px-4 sm:px-6">{item.capacity}</td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-600">{item.focus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================= REQUIRED DOCUMENTS CHECKLIST ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                Checklist
              </span>
              <h3 className="font-heading font-black text-2xl text-white">
                Documents Needed for Registration
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Please bring these physical copies when coming for the admission interview and registration at our Mbezi Louis administrative office.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700/80 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Birth Certificate Copy</p>
                  <p className="text-slate-400 text-[11px]">RITA issued copy or official affidavit</p>
                </div>
              </div>

              <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700/80 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">4 Recent Passport Photos</p>
                  <p className="text-slate-400 text-[11px]">Clear color photos with white background</p>
                </div>
              </div>

              <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700/80 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Child Immunization / Health Card</p>
                  <p className="text-slate-400 text-[11px]">Record of clinical vaccinations &amp; blood type</p>
                </div>
              </div>

              <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700/80 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Transfer Form / Previous Reports</p>
                  <p className="text-slate-400 text-[11px]">For pupils transferring into Standard I – VI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ADMISSIONS FAQS ================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#7c1221] bg-rose-50 border border-rose-200 px-3 py-1 rounded-full">
            Got Questions?
          </span>
          <h2 className="font-heading text-3xl font-black text-slate-900">
            Frequently Asked Admissions Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Find answers to common inquiries from prospective parents.
          </p>
        </div>

        <div className="space-y-3">
          {ADMISSION_FAQS.map((faq, index) => {
            const isOpen = activeFaqIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setActiveFaqIndex(isOpen ? null : index)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-heading font-bold text-sm text-slate-800 hover:text-[#7c1221] transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#7c1221] shrink-0" />
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact admissions bar */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 bg-rose-50/70 border border-rose-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-heading font-black text-slate-900 text-base">
              Need assistance with your application?
            </h4>
            <p className="text-xs text-slate-600 mt-0.5">
              Call our admissions office directly at <a href={`tel:${SCHOOL_INFO.telInternational}`} className="font-bold text-[#7c1221]">{SCHOOL_INFO.tel}</a> or email <span className="font-semibold text-slate-800">{SCHOOL_INFO.email}</span>.
            </p>
          </div>
          <button
            onClick={onOpenApplyModal}
            className="px-5 py-2.5 bg-[#7c1221] hover:bg-[#600d19] text-white text-xs font-extrabold uppercase tracking-wider rounded-xl shadow-md transition-colors shrink-0"
          >
            Apply Online Now
          </button>
        </div>
      </section>
    </div>
  );
};
