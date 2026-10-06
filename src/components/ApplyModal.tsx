import React, { useState } from 'react';
import { X, CheckCircle, GraduationCap, Printer, Download, Sparkles, AlertCircle } from 'lucide-react';
import { NanomaxLogo } from './NanomaxLogo.tsx';
import { SCHOOL_INFO } from '../data/schoolData.ts';

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ApplyModal: React.FC<ApplyModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    childFullName: '',
    dob: '',
    gender: 'Male',
    gradeApplying: 'Pre-Unit',
    previousSchool: '',
    parentName: '',
    parentPhone: '',
    parentEmail: '',
    residenceArea: 'Mbezi Louis',
    transportNeeded: 'Yes',
    specialNeedsOrAllergies: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [appNumber, setAppNumber] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomCode = 'NMX-' + Math.floor(100000 + Math.random() * 900000);
    setAppNumber(randomCode);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#7c1221] to-[#991b1b] px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-white rounded-lg">
              <NanomaxLogo size="sm" showSubtitle={false} />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg leading-tight">
                Online Admission Application
              </h3>
              <p className="text-xs text-rose-200">
                Academic Year 2026 / 2027 • Nanomax Pre &amp; Primary School
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

        {/* Content */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="bg-rose-50/70 border border-rose-200/80 p-3.5 rounded-xl text-xs text-slate-700 flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-[#7c1221] shrink-0 mt-0.5" />
                <p>
                  Welcome! Fill out the application form below. Our admissions desk will review your submission and contact you within 24 hours to confirm the child's readiness assessment.
                </p>
              </div>

              {/* Section 1: Child Information */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#7c1221] border-b border-rose-100 pb-1 mb-3">
                  1. Child Information
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                  <div className="sm:col-span-2">
                    <label className="block font-semibold text-slate-700 mb-1">
                      Child's Full Name (as in Birth Certificate) *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.childFullName}
                      onChange={(e) => setFormData({ ...formData, childFullName: e.target.value })}
                      placeholder="e.g. Kelvin Baraka Mushi"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#7c1221] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.dob}
                      onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#7c1221] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Gender *</label>
                    <select
                      value={formData.gender}
                      onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#7c1221] focus:outline-hidden"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Applying For Class / Grade *
                    </label>
                    <select
                      value={formData.gradeApplying}
                      onChange={(e) => setFormData({ ...formData, gradeApplying: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#7c1221] focus:outline-hidden font-medium text-[#7c1221]"
                    >
                      <optgroup label="Early Childhood (Pre-School)">
                        <option value="Daycare">Daycare (Ages 1.5 – 2.5)</option>
                        <option value="Baby Class">Nursery - Baby Class (Age 3)</option>
                        <option value="Middle Class">Nursery - Middle Class (Age 4)</option>
                        <option value="Pre-Unit">Pre-Unit / Transition (Age 5)</option>
                      </optgroup>
                      <optgroup label="Primary School (English Medium)">
                        <option value="Standard I">Standard I</option>
                        <option value="Standard II">Standard II</option>
                        <option value="Standard III">Standard III</option>
                        <option value="Standard IV">Standard IV (National Exam)</option>
                        <option value="Standard V">Standard V</option>
                        <option value="Standard VI">Standard VI</option>
                        <option value="Standard VII">Standard VII (PSLE)</option>
                      </optgroup>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Previous School Attended (if any)
                    </label>
                    <input
                      type="text"
                      value={formData.previousSchool}
                      onChange={(e) => setFormData({ ...formData, previousSchool: e.target.value })}
                      placeholder="e.g. Upanga Daycare"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#7c1221] focus:outline-hidden"
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: Parent / Guardian Information */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#7c1221] border-b border-rose-100 pb-1 mb-3">
                  2. Parent / Guardian Details
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                  <div className="sm:col-span-2">
                    <label className="block font-semibold text-slate-700 mb-1">
                      Parent / Guardian Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      placeholder="e.g. Dr. Grace Mushi"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#7c1221] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Primary Phone Number (Calling &amp; WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.parentPhone}
                      onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
                      placeholder="e.g. 0783-XXXXXX or +255 7..."
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#7c1221] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.parentEmail}
                      onChange={(e) => setFormData({ ...formData, parentEmail: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#7c1221] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Residential Location *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.residenceArea}
                      onChange={(e) => setFormData({ ...formData, residenceArea: e.target.value })}
                      placeholder="e.g. Mbezi Louis / Mpigi / Kimara / Kibamba"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#7c1221] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Require School Bus Transport?
                    </label>
                    <select
                      value={formData.transportNeeded}
                      onChange={(e) => setFormData({ ...formData, transportNeeded: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#7c1221] focus:outline-hidden"
                    >
                      <option value="Yes">Yes, require round-trip school bus</option>
                      <option value="Morning-Only">Morning-Only pickup</option>
                      <option value="Afternoon-Only">Afternoon drop-off only</option>
                      <option value="No">No, parent will provide own transport</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Section 3: Medical / Dietary Notes */}
              <div>
                <label className="block font-semibold text-slate-700 text-xs mb-1">
                  Special Dietary or Medical Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.specialNeedsOrAllergies}
                  onChange={(e) => setFormData({ ...formData, specialNeedsOrAllergies: e.target.value })}
                  placeholder="e.g. Peanut allergy, asthma, or specific needs our caregivers should know..."
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#7c1221] focus:outline-hidden"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#7c1221] hover:bg-[#600d19] rounded-lg shadow-md transition-all flex items-center gap-2"
                >
                  <GraduationCap className="w-4 h-4 text-sky-300" />
                  Submit Application
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle className="w-10 h-10" />
              </div>

              <div className="space-y-1">
                <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">
                  Application Successfully Received!
                </span>
                <h3 className="font-heading text-2xl font-black text-slate-800">
                  Welcome to the Nanomax Family
                </h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto">
                  Your admission inquiry has been lodged with our admissions registry. A confirmation SMS &amp; email has been generated.
                </p>
              </div>

              {/* Receipt Summary Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left max-w-md mx-auto text-xs space-y-2">
                <div className="flex justify-between border-b border-slate-200 pb-1.5 font-bold text-slate-800">
                  <span>Application Reference:</span>
                  <span className="text-[#7c1221] font-mono text-sm">{appNumber}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Candidate:</span>
                  <span className="font-semibold text-slate-800">{formData.childFullName}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Class Applied:</span>
                  <span className="font-semibold text-slate-800">{formData.gradeApplying}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Parent / Guardian:</span>
                  <span className="font-semibold text-slate-800">{formData.parentName}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Contact Phone:</span>
                  <span className="font-semibold text-slate-800">{formData.parentPhone}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Campus Location:</span>
                  <span className="font-semibold text-slate-800">Mbezi Louis, Mpigi Rd (Igoma)</span>
                </div>
              </div>

              <div className="text-xs text-slate-500 flex items-center justify-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-amber-500" />
                <span>Next step: Please bring child's birth certificate &amp; 2 passport photos for the interview.</span>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 border border-slate-300 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-100 flex items-center gap-1.5"
                >
                  <Printer className="w-4 h-4 text-slate-600" />
                  Print Receipt
                </button>
                <button
                  onClick={handleReset}
                  className="px-5 py-2 bg-[#7c1221] text-white rounded-lg text-xs font-bold hover:bg-[#600d19] transition-colors"
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
