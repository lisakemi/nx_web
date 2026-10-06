import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Navigation,
  MessageCircle,
  ExternalLink,
  Bus,
  Sparkles,
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData.ts';

export const ContactsView: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Admissions Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: 'Admissions Inquiry',
        message: '',
      });
    }, 4000);
  };

  return (
    <div className="space-y-16 py-8 pb-16">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#7c1221] via-[#881324] to-[#0284c7] text-white rounded-3xl p-8 sm:p-14 shadow-xl">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sky-300 text-xs font-bold uppercase tracking-wider">
              Get In Touch
            </span>
            <h1 className="font-heading text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              We Are Here to Welcome You
            </h1>
            <p className="text-rose-100 text-sm sm:text-base leading-relaxed">
              Located at Mbezi Louis, Mpigi Road (Igoma) in Dar es Salaam. Reach out to our admissions secretariat, visit our campus, or call our direct telephone line.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Cards & Information */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Physical Location */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-rose-50 text-[#7c1221] border border-rose-200 flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-black text-lg text-slate-900">
              Campus Location
            </h3>
            <div className="text-xs text-slate-600 space-y-1">
              <p className="font-bold text-slate-800">{SCHOOL_INFO.location}</p>
              <p className="text-slate-500">Ubungo District, Dar es Salaam</p>
              <p className="text-[#7c1221] font-semibold">{SCHOOL_INFO.poBox}</p>
            </div>
          </div>

          {/* Card 2: Telephone Line */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 border border-sky-200 flex items-center justify-center">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-black text-lg text-slate-900">
              Telephone &amp; WhatsApp
            </h3>
            <div className="text-xs text-slate-600 space-y-1">
              <a
                href={`tel:${SCHOOL_INFO.telInternational}`}
                className="font-bold text-base text-[#7c1221] hover:underline block"
              >
                {SCHOOL_INFO.tel}
              </a>
              <p className="text-slate-500">Direct desk &amp; WhatsApp calls</p>
              <a
                href="https://wa.me/255783595532?text=Hello%20Nanomax%20School%2C%20I%20would%20like%20to%20inquire"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-emerald-600 font-bold text-xs hover:underline pt-1"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Card 3: Official Email */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-black text-lg text-slate-900">
              Official Email
            </h3>
            <div className="text-xs text-slate-600 space-y-1 break-all">
              <a
                href={`mailto:${SCHOOL_INFO.email}`}
                className="font-bold text-[#7c1221] hover:underline block text-xs"
              >
                {SCHOOL_INFO.email}
              </a>
              <p className="text-slate-500 pt-1">
                Admissions, invoices &amp; general communications
              </p>
            </div>
          </div>

          {/* Card 4: Office Working Hours */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-black text-lg text-slate-900">
              Office Hours
            </h3>
            <div className="text-xs text-slate-600 space-y-1">
              <p className="font-semibold text-slate-800">{SCHOOL_INFO.officeHours}</p>
              <p className="text-emerald-700 font-bold">{SCHOOL_INFO.saturdayHours}</p>
              <p className="text-[11px] text-slate-400">Sunday &amp; Public Holidays: Closed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Form & Travel Directions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Inquiry Form (6 cols) */}
          <div className="lg:col-span-6 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-5">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#7c1221]">
                Send a Message
              </span>
              <h2 className="font-heading font-black text-2xl text-slate-900">
                Contact the Admissions Secretariat
              </h2>
              <p className="text-xs text-slate-500">
                Have a question regarding school bus transport, admissions, or class availability? Fill out this inquiry form.
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John K. Mtei"
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#7c1221] focus:outline-hidden"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0783-XXXXXX"
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#7c1221] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="parent@example.com"
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#7c1221] focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Inquiry Subject *
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#7c1221] focus:outline-hidden"
                  >
                    <option value="Admissions Inquiry">Admissions Inquiry (Pre-School or Primary)</option>
                    <option value="School Bus Routes">School Bus Transport Routes &amp; Coverage</option>
                    <option value="Curriculum & Academic Programs">Curriculum &amp; Academic Programs</option>
                    <option value="Book Campus Tour">Schedule a Campus Visit</option>
                    <option value="General Question">General School Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your child (age, current class) or any specific questions..."
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#7c1221] focus:outline-hidden"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#7c1221] hover:bg-[#600d19] text-white font-extrabold uppercase tracking-wider text-xs rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry</span>
                </button>
              </form>
            ) : (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-black text-lg text-slate-800">
                  Message Sent Successfully!
                </h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong className="text-slate-900">{formData.name || 'Parent'}</strong>. Our administration desk will review your inquiry and contact you at <strong className="text-slate-900">{formData.phone}</strong> or <strong className="text-slate-900">{formData.email}</strong> promptly.
                </p>
              </div>
            )}
          </div>

          {/* Travel Directions & Campus Guide (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-slate-900 text-white p-8 rounded-3xl space-y-6 shadow-sm">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                  Easy To Find
                </span>
                <h3 className="font-heading font-black text-2xl text-white">
                  Step-by-Step Directions to Campus
                </h3>
                <p className="text-xs text-slate-300">
                  Visiting us in Mbezi Louis is straightforward from any part of Dar es Salaam.
                </p>
              </div>

              {/* Wayfinding Instructions */}
              <div className="space-y-3.5 text-xs">
                <div className="p-3.5 bg-slate-800 rounded-xl border border-slate-700 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#7c1221] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-xs">From Morogoro Road / Mbezi Louis Bus Terminal:</h5>
                    <p className="text-slate-300 text-[11px] mt-0.5">
                      Alight at Mbezi Louis bus junction. Turn onto <strong>Mpigi Road</strong> heading toward <strong>Igoma</strong>. Drive or take a local bajaji/bodaboda for approximately 5 minutes (1.5 km).
                    </p>
                  </div>
                </div>

                <div className="p-3.5 bg-slate-800 rounded-xl border border-slate-700 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-xs">From Magufuli Bus Terminal:</h5>
                    <p className="text-slate-300 text-[11px] mt-0.5">
                      From Magufuli Terminal, connect via the Mbezi Luis feeder road into Mpigi Road (Igoma). The school gate features clear Nanomax Pre &amp; Primary School signage with our official crest.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 bg-slate-800 rounded-xl border border-slate-700 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-xs">Need Driving Assistance?</h5>
                    <p className="text-slate-300 text-[11px] mt-0.5">
                      Call our security &amp; gate coordinator directly on <span className="text-sky-300 font-bold">0783-595532</span> as you approach for real-time turn-by-turn guidance and secure parking.
                    </p>
                  </div>
                </div>
              </div>

              {/* School Bus Routes Highlights */}
              <div className="pt-2 border-t border-slate-800 flex items-center gap-3 text-xs text-slate-300">
                <Bus className="w-5 h-5 text-amber-400 shrink-0" />
                <span>
                  <strong>School Bus Service Areas:</strong> Mbezi Louis, Mpigi, Igoma, Kimara, Kibamba, Goba, Tegeta, Mbezi Beach, Bunju.
                </span>
              </div>
            </div>

            {/* Visual Location Map Preview Card */}
            <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-[#7c1221]" />
                  <span className="font-heading font-black text-xs text-slate-900 uppercase tracking-wider">
                    Campus Map Guide
                  </span>
                </div>
                <span className="text-[11px] text-slate-400">Dar es Salaam, Tanzania</span>
              </div>

              {/* Styled stylized map visualization */}
              <div className="relative h-48 w-full bg-gradient-to-tr from-slate-100 via-rose-50/40 to-sky-50 rounded-2xl border border-slate-200 overflow-hidden flex items-center justify-center p-4">
                {/* Grid guidelines */}
                <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

                {/* Stylized road network */}
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 0 100 Q 150 120 300 80 T 600 90" stroke="#cbd5e1" strokeWidth="12" fill="none" />
                  <path d="M 220 0 L 220 200" stroke="#cbd5e1" strokeWidth="10" fill="none" />
                  <path d="M 120 100 L 120 200" stroke="#e2e8f0" strokeWidth="6" fill="none" />
                  <text x="30" y="85" fill="#64748b" fontSize="10" fontWeight="bold">Morogoro Road</text>
                  <text x="235" y="40" fill="#64748b" fontSize="10" fontWeight="bold">Mpigi Road (Igoma)</text>
                </svg>

                {/* Campus Pin Point */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="p-2.5 bg-[#7c1221] text-white rounded-full shadow-xl animate-bounce">
                    <MapPin className="w-6 h-6 fill-current text-white" />
                  </div>
                  <div className="mt-2 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full border border-slate-200 shadow-md text-center">
                    <span className="font-heading font-black text-xs text-[#7c1221] block">
                      Nanomax Pre &amp; Primary School
                    </span>
                    <span className="text-[10px] text-slate-500 font-medium">
                      Mbezi Louis, Mpigi Road (Igoma)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
