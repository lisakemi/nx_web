import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  User,
  Search,
  Tag,
  ArrowRight,
  BookOpen,
  Trophy,
  Sparkles,
  Bell,
  X,
  Share2,
} from 'lucide-react';
import { SCHOOL_NEWS, NewsArticle } from '../data/schoolData.ts';

export const NewsView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArticle, setActiveArticle] = useState<NewsArticle | null>(null);

  const categories = ['All', 'Academic', 'Sports', 'Events', 'Notice'];

  const filteredNews = SCHOOL_NEWS.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const calendarEvents = [
    {
      date: 'Oct 05, 2026',
      title: 'Nanomax Annual Science & STEM Fair',
      badge: 'Academics',
      desc: 'Pupils demonstrate solar models, coding projects, and natural science discoveries.',
    },
    {
      date: 'Nov 14, 2026',
      title: 'Pre-Unit & Std VII Graduation & Speech Day',
      badge: 'Ceremony',
      desc: 'Celebrating our graduating class transitions with parent presentations & awards.',
    },
    {
      date: 'Nov 27, 2026',
      title: 'Term III Final Examinations Begin',
      badge: 'Exams',
      desc: 'Annual evaluation and promotion assessments across all grade levels.',
    },
    {
      date: 'Dec 04, 2026',
      title: 'School Closes for Long Holidays',
      badge: 'Term End',
      desc: 'Report card distribution and end of academic year holidays.',
    },
    {
      date: 'Jan 11, 2027',
      title: 'School Reopens for 2027 Academic Year',
      badge: 'Term 1',
      desc: 'Warm welcome to new daycare, pre-school, and primary school admissions!',
    },
  ];

  return (
    <div className="space-y-16 py-8 pb-16">
      {/* Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-[#7c1221] to-sky-800 text-white rounded-3xl p-8 sm:p-14 shadow-xl">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sky-300 text-xs font-bold uppercase tracking-wider">
              Campus Bulletins &amp; Events
            </span>
            <h1 className="font-heading text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              News, Stories &amp; Academic Calendar
            </h1>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Discover student achievements, campus updates, inter-house competitions, and essential term schedules for Nanomax Pre and Primary School.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: News & Calendar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: News Articles (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            {/* Search & Filter Bar */}
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-between bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search announcements..."
                  className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:border-[#7c1221]"
                />
              </div>

              <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                      selectedCategory === cat
                        ? 'bg-[#7c1221] text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Articles List */}
            <div className="space-y-4">
              {filteredNews.length > 0 ? (
                filteredNews.map((article) => (
                  <article
                    key={article.id}
                    onClick={() => setActiveArticle(article)}
                    className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all cursor-pointer group space-y-3"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                      <span className="px-2.5 py-0.5 rounded-full font-bold bg-rose-50 text-[#7c1221] border border-rose-200">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-3 text-slate-400 text-[11px]">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {article.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {article.readTime}
                        </span>
                      </div>
                    </div>

                    <h3 className="font-heading font-black text-lg text-slate-900 group-hover:text-[#7c1221] transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
                      <span className="text-slate-400 font-medium">By {article.author}</span>
                      <span className="text-[#7c1221] font-bold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Read Story <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </article>
                ))
              ) : (
                <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center text-xs text-slate-500">
                  No articles found matching your search.
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Upcoming Calendar (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                <Bell className="w-5 h-5 text-[#7c1221]" />
                <h3 className="font-heading font-black text-base text-slate-900">
                  Academic Calendar 2026/2027
                </h3>
              </div>

              <div className="space-y-3.5">
                {calendarEvents.map((evt, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1 text-xs"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#7c1221]">{evt.date}</span>
                      <span className="text-[10px] font-bold uppercase bg-white border border-slate-200 px-2 py-0.5 rounded text-slate-700">
                        {evt.badge}
                      </span>
                    </div>
                    <h4 className="font-bold text-slate-800 text-xs">{evt.title}</h4>
                    <p className="text-[11px] text-slate-500">{evt.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* School Office Inquiries Card */}
            <div className="bg-slate-900 text-white p-6 rounded-2xl space-y-3 text-xs">
              <h4 className="font-heading font-black text-sm text-sky-400">
                School Term Queries?
              </h4>
              <p className="text-slate-300 leading-relaxed">
                Parents are always welcome to check dates with our front desk in Mbezi Louis or join the official Nanomax WhatsApp broadcast list.
              </p>
              <div className="pt-2">
                <a
                  href="https://wa.me/255783595532?text=Hello%20Nanomax%2C%20please%20add%20me%20to%20school%20announcements"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  Join Parent Broadcast
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Detail Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
            <div className="bg-[#7c1221] px-6 py-4 text-white flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider bg-white/20 px-2.5 py-0.5 rounded">
                {activeArticle.category}
              </span>
              <button
                onClick={() => setActiveArticle(null)}
                className="p-1 rounded-full hover:bg-white/20 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4 max-h-[75vh] overflow-y-auto text-xs">
              <div className="flex items-center gap-3 text-slate-400 text-[11px]">
                <span>{activeArticle.date}</span>
                <span>•</span>
                <span>By {activeArticle.author}</span>
              </div>

              <h2 className="font-heading font-black text-2xl text-slate-900 leading-tight">
                {activeArticle.title}
              </h2>

              <p className="text-slate-700 text-sm font-medium leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                {activeArticle.excerpt}
              </p>

              <div className="text-slate-600 leading-relaxed space-y-3 pt-2">
                <p>{activeArticle.content}</p>
                <p>
                  At Nanomax Pre and Primary School, our dedication to <strong className="text-slate-900">"Achieving Excellence Together"</strong> ensures that every student benefits from an inclusive, holistic, and supportive educational community.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>Location: Mbezi Louis, Mpigi Road (Igoma)</span>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-4 py-2 bg-slate-800 text-white rounded-lg font-bold text-xs hover:bg-slate-900"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
