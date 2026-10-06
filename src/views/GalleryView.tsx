import React, { useState } from 'react';
import {
  Maximize2,
  X,
  Filter,
  Camera,
  Play,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/schoolData.ts';

interface GalleryViewProps {
  onOpenTourModal: () => void;
}

export const GalleryView: React.FC<GalleryViewProps> = ({ onOpenTourModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Classroom', 'STEM', 'Sports', 'Library'];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  return (
    <div className="space-y-16 py-8 pb-16">
      {/* Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#7c1221] via-[#5c0e18] to-slate-900 text-white rounded-3xl p-8 sm:p-14 shadow-xl">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sky-300 text-xs font-bold uppercase tracking-wider">
              Campus Showcase
            </span>
            <h1 className="font-heading text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Life, Learning &amp; Joy at Nanomax
            </h1>
            <p className="text-rose-100 text-sm sm:text-base leading-relaxed">
              Step inside our vibrant classrooms, modern science &amp; ICT laboratories, and expansive green sports grounds in Mbezi Louis, Dar es Salaam.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all shadow-xs ${
                activeCategory === cat
                  ? 'bg-[#7c1221] text-white shadow-md scale-105'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-3 bg-white/90 rounded-full text-slate-900 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Maximize2 className="w-5 h-5 text-[#7c1221]" />
                  </div>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-white/90 text-[#7c1221] shadow-xs">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-4 space-y-1">
                <h3 className="font-heading font-bold text-sm text-slate-900 group-hover:text-[#7c1221] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video & Virtual Tour Teaser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-sky-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-sky-300 bg-white/10 px-3 py-1 rounded-full">
              Can’t visit yet?
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-black">
              Schedule a Guided Campus Walkthrough
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-lg">
              Meet our teachers, inspect the pre-school play area, view our computer lab, and have your questions answered one-on-one.
            </p>
          </div>
          <button
            onClick={onOpenTourModal}
            className="px-6 py-3.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl shadow-lg transition-colors shrink-0"
          >
            Book a Personal Visit
          </button>
        </div>
      </section>

      {/* Lightbox Zoom Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700 animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="max-h-[70vh] bg-black flex items-center justify-center">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="max-h-[70vh] w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 bg-slate-900 text-white space-y-1">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">
                {selectedPhoto.category}
              </span>
              <h3 className="font-heading font-black text-xl text-white">
                {selectedPhoto.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed pt-1">
                {selectedPhoto.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
