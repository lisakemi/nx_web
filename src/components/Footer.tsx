import React, { useState } from 'react';
import { NanomaxLogo } from './NanomaxLogo.tsx';
import { SCHOOL_INFO } from '../data/schoolData.ts';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Heart,
  ExternalLink,
  MessageCircle,
} from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: string) => void;
  onOpenTourModal: () => void;
  onOpenApplyModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectTab,
  onOpenTourModal,
  onOpenApplyModal,
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
      }, 3000);
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Upper Call to Action Ribbon */}
      <div className="bg-gradient-to-r from-[#7c1221] via-[#881324] to-[#0284c7] text-white py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-sky-200 bg-white/10 px-3 py-1 rounded-full mb-2">
              Admissions 2026/2027 Open
            </span>
            <h3 className="font-heading text-2xl md:text-3xl font-extrabold tracking-tight">
              Give Your Child the Foundation for Lifelong Excellence
            </h3>
            <p className="text-rose-100 text-sm max-w-xl">
              From our tender Daycare &amp; Pre-School to top-ranking Primary School education in Mbezi Louis, Dar es Salaam.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenTourModal}
              className="px-5 py-3 rounded-xl bg-white text-slate-900 hover:bg-slate-100 font-bold text-sm shadow-md transition-all flex items-center gap-2"
            >
              Book a School Tour
            </button>
            <button
              onClick={onOpenApplyModal}
              className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-extrabold text-sm shadow-md transition-all flex items-center gap-2"
            >
              Online Admission Form
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: School Emblem & Identity (5 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white p-3 rounded-2xl inline-block shadow-sm">
              <NanomaxLogo size="md" />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Nanomax Pre and Primary School provides premier English-medium early childhood and elementary education. Under the motto <span className="text-sky-400 font-semibold italic">"Achieving Excellence Together"</span>, we nurture confident, morally grounded, and scientifically curious pupils.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Registered &amp; Certified English Medium School</span>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/255783595532?text=Hello%20Nanomax%20School%2C%20I%20would%20like%20to%20know%20more`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-700/80 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg text-xs font-bold transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                Chat with Us on WhatsApp
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-heading font-bold text-sm tracking-wider uppercase border-l-2 border-rose-500 pl-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => onSelectTab('home')}
                  className="hover:text-white hover:translate-x-1 transition-transform inline-block"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('about')}
                  className="hover:text-white hover:translate-x-1 transition-transform inline-block"
                >
                  About the School
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('admissions')}
                  className="hover:text-white hover:translate-x-1 transition-transform inline-block"
                >
                  Admissions &amp; Enrollment
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('news')}
                  className="hover:text-white hover:translate-x-1 transition-transform inline-block"
                >
                  News &amp; Events
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('gallery')}
                  className="hover:text-white hover:translate-x-1 transition-transform inline-block"
                >
                  Photo Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('contacts')}
                  className="hover:text-white hover:translate-x-1 transition-transform inline-block"
                >
                  Contact &amp; Map
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Academic Levels (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-heading font-bold text-sm tracking-wider uppercase border-l-2 border-sky-400 pl-2">
              Academic Wings
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <p className="font-bold text-white text-xs">Daycare &amp; Crèche</p>
                <p className="text-slate-400 text-[11px]">Ages 1.5 - 2.5 • Loving sensory care</p>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <p className="font-bold text-white text-xs">Nursery &amp; Pre-Unit</p>
                <p className="text-slate-400 text-[11px]">Ages 3 - 5.5 • Phonics, numeracy &amp; arts</p>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <p className="font-bold text-white text-xs">Primary Standard I - VII</p>
                <p className="text-slate-400 text-[11px]">English Medium • STEM, ICT &amp; PSLE mastery</p>
              </div>
            </div>
          </div>

          {/* Col 4: Official Address & Contacts (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-heading font-bold text-sm tracking-wider uppercase border-l-2 border-amber-500 pl-2">
              Contact &amp; Campus
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Location:</p>
                  <p className="text-slate-300">{SCHOOL_INFO.location}</p>
                  <p className="text-slate-400">{SCHOOL_INFO.poBox}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Telephone:</p>
                  <a
                    href={`tel:${SCHOOL_INFO.telInternational}`}
                    className="text-sky-300 hover:underline font-semibold block"
                  >
                    {SCHOOL_INFO.tel}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div className="break-all">
                  <p className="font-bold text-white">Email:</p>
                  <a
                    href={`mailto:${SCHOOL_INFO.email}`}
                    className="text-amber-200 hover:underline block"
                  >
                    {SCHOOL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-[11px]">
                  <p className="text-slate-300 font-semibold">{SCHOOL_INFO.officeHours}</p>
                  <p className="text-slate-400">{SCHOOL_INFO.saturdayHours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter & Updates */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <h5 className="font-heading font-bold text-white text-base">
              Nanomax School Parent Newsletter &amp; Term Updates
            </h5>
            <p className="text-xs text-slate-400 mt-1">
              Stay informed on term dates, academic achievements, and school announcements.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="flex gap-2">
            <input
              type="email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Enter parent email address..."
              required
              className="flex-1 bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs px-3.5 py-2.5 rounded-lg focus:outline-hidden focus:border-rose-500"
            />
            <button
              type="submit"
              className="bg-[#7c1221] hover:bg-[#991b1b] text-white px-4 py-2.5 rounded-lg text-xs font-bold transition-colors shrink-0"
            >
              {subscribed ? 'Subscribed!' : 'Subscribe'}
            </button>
          </form>
          {subscribed && (
            <p className="md:col-span-2 text-xs text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              Thank you! You are now subscribed to Nanomax School updates.
            </p>
          )}
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© {new Date().getFullYear()} Nanomax Pre and Primary School. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Achieving Excellence Together</span>
            <span>•</span>
            <span>Mbezi Louis, Dar es Salaam</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
