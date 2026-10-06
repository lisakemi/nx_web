import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle, Phone, ArrowRight } from 'lucide-react';
import { NanomaxLogo } from './NanomaxLogo.tsx';
import { SCHOOL_INFO } from '../data/schoolData.ts';

interface TourModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TourModal: React.FC<TourModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    date: '',
    timeSlot: 'Morning (9:30 AM – 10:30 AM)',
    interestedClass: 'Nursery / Pre-Unit',
    numberOfVisitors: '2 adults, 1 child',
  });
  const [booked, setBooked] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBooked(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-[#7c1221] px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-1 bg-white rounded-lg">
              <NanomaxLogo size="sm" showSubtitle={false} />
            </div>
            <div>
              <h3 className="font-heading font-bold text-base leading-tight">
                Schedule a Campus Visit
              </h3>
              <p className="text-xs text-rose-200">
                Experience our classes, meet teachers, and tour facilities
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

        {/* Body */}
        <div className="p-6">
          {!booked ? (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="p-3 bg-sky-50 border border-sky-200 rounded-xl text-slate-700 flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-800">Campus Location:</p>
                  <p>{SCHOOL_INFO.location}</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    We welcome families Mon–Fri (7:30 AM – 4:30 PM) &amp; Sat (8:00 AM – 1:00 PM).
                  </p>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.parentName}
                  onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  placeholder="e.g. Mr. Emmanuel Rutasitara"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#7c1221] focus:outline-hidden"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="0783-XXXXXX"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#7c1221] focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="parent@example.com"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#7c1221] focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Preferred Date *</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#7c1221] focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Preferred Time *</label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#7c1221] focus:outline-hidden"
                  >
                    <option value="Morning (9:30 AM – 10:30 AM)">Morning (9:30 AM – 10:30 AM)</option>
                    <option value="Midday (11:30 AM – 12:30 PM)">Midday (11:30 AM – 12:30 PM)</option>
                    <option value="Afternoon (2:00 PM – 3:30 PM)">Afternoon (2:00 PM – 3:30 PM)</option>
                    <option value="Saturday (9:00 AM – 11:00 AM)">Saturday (9:00 AM – 11:00 AM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Class of Interest *</label>
                <select
                  value={formData.interestedClass}
                  onChange={(e) => setFormData({ ...formData, interestedClass: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#7c1221] focus:outline-hidden"
                >
                  <option value="Daycare (1.5 - 2.5 yrs)">Daycare (1.5 - 2.5 yrs)</option>
                  <option value="Nursery / Pre-Unit (3 - 5.5 yrs)">Nursery / Pre-Unit (3 - 5.5 yrs)</option>
                  <option value="Lower Primary (Std I - IV)">Lower Primary (Std I - IV)</option>
                  <option value="Upper Primary (Std V - VII)">Upper Primary (Std V - VII)</option>
                </select>
              </div>

              <div className="pt-2 flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#7c1221] text-white font-bold rounded-lg hover:bg-[#600d19] transition-colors flex items-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  Confirm Visit Booking
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-5 space-y-3">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="font-heading font-black text-xl text-slate-800">
                Tour Appointment Confirmed!
              </h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                Thank you, <span className="font-bold text-slate-800">{formData.parentName}</span>. We look forward to meeting you and your child on{' '}
                <span className="font-bold text-[#7c1221]">{formData.date || 'your selected date'}</span> during{' '}
                <span className="font-bold text-slate-800">{formData.timeSlot}</span>.
              </p>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-left text-xs space-y-1.5 mt-3">
                <div className="flex items-center gap-2 text-slate-700 font-semibold">
                  <MapPin className="w-4 h-4 text-rose-600" />
                  <span>{SCHOOL_INFO.location}</span>
                </div>
                <p className="text-[11px] text-slate-500 pl-6">
                  From Mbezi Louis Bus Stand, take Mpigi Road towards Igoma (approx. 5 minutes). School signage is visible on the right.
                </p>
                <div className="flex items-center gap-2 text-slate-700 pl-6 pt-1">
                  <Phone className="w-3.5 h-3.5 text-sky-600" />
                  <span>Questions? Call {SCHOOL_INFO.tel}</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => {
                    setBooked(false);
                    onClose();
                  }}
                  className="px-6 py-2 bg-[#7c1221] text-white rounded-lg text-xs font-bold"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
