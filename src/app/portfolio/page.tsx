"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, CheckCircle, Quote } from 'lucide-react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

const CaseStudyGraphic = ({ type }: { type: string }) => {
  switch (type) {
    case "E-Commerce":
      return (
        <div style={{
          width: '100%', height: '100%',
          background: 'linear-gradient(135deg, #1E8BB5 0%, #0a1628 100%)',
          position: 'relative', overflow: 'hidden',
          display: 'flex', flexDirection: 'column',
          justifyContent: 'flex-end', padding: '20px',
        }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
          <div style={{ position: 'absolute', top: '20px', left: '20px', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '12px', padding: '10px 14px', fontSize: '11px', color: 'white' }}>
            <div style={{ opacity: 0.6, fontSize: '9px', letterSpacing: '0.1em' }}>REVENUE</div>
            <div style={{ fontWeight: 800, fontSize: '18px', color: '#4ADE80' }}>₹48.2L</div>
            <div style={{ fontSize: '9px', color: '#4ADE80' }}>↑ 200%</div>
          </div>
          <div style={{ position: 'absolute', top: '20px', right: '20px', background: 'rgba(30,139,181,0.8)', borderRadius: '8px', padding: '6px 12px', fontSize: '11px', color: 'white', fontWeight: 700 }}>4.2x ROAS</div>
          <div style={{ position: 'absolute', bottom: '70px', left: '20px', right: '20px', display: 'flex', alignItems: 'flex-end', gap: '6px', height: '60px' }}>
            {[30,50,40,70,85,95,80].map((h, i) => (
              <div key={i} style={{ flex: 1, height: `${h}%`, background: i === 5 ? 'rgba(74,222,128,0.8)' : 'rgba(255,255,255,0.2)', borderRadius: '3px 3px 0 0' }} />
            ))}
          </div>
          <div style={{ position: 'relative', zIndex: 2, fontSize: '10px', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em' }}>E-COMMERCE · PERFORMANCE ADS</div>
        </div>
      );
    case "Branding":
      return (
        <div style={{
          width: '100%', height: '100%',
          background: 'linear-gradient(135deg, #0A1628 0%, #1E3A5F 100%)',
          position: 'relative', overflow: 'hidden',
          display: 'flex', flexDirection: 'column',
          justifyContent: 'flex-end', padding: '20px',
        }}>
          {[
            { color: '#1E8BB5', top: '20px', left: '20px', size: 40 },
            { color: '#2BA8D8', top: '20px', left: '64px', size: 40 },
            { color: '#0D6A91', top: '20px', left: '108px', size: 40 },
            { color: '#10B981', top: '20px', left: '152px', size: 40 },
          ].map((c, i) => (
            <div key={i} style={{ position: 'absolute', top: c.top, left: c.left, width: `${c.size}px`, height: `${c.size}px`, borderRadius: '50%', background: c.color, border: '2px solid rgba(255,255,255,0.2)' }} />
          ))}
          <div style={{ position: 'absolute', top: '80px', left: '20px', background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '12px', padding: '10px 14px' }}>
            <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.1em' }}>BRAND RECALL</div>
            <div style={{ fontSize: '22px', fontWeight: 800, color: 'white' }}>+73%</div>
          </div>
          <div style={{ position: 'relative', zIndex: 2, fontSize: '10px', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em' }}>BRANDING · VISUAL IDENTITY</div>
        </div>
      );
    case "Social Media":
      return (
        <div style={{
          width: '100%', height: '100%',
          background: 'linear-gradient(135deg, #2BA8D8 0%, #070E1A 100%)',
          position: 'relative', overflow: 'hidden',
          display: 'flex', flexDirection: 'column',
          justifyContent: 'flex-end', padding: '20px',
        }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
          <div style={{ position: 'absolute', top: '16px', left: '16px', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '12px', padding: '10px 14px' }}>
            <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.1em' }}>FOLLOWERS</div>
            <div style={{ fontSize: '22px', fontWeight: 800, color: 'white' }}>85K+</div>
            <div style={{ fontSize: '9px', color: '#4ADE80' }}>↑ 5x Growth</div>
          </div>
          <div style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(30,139,181,0.7)', borderRadius: '8px', padding: '6px 12px', fontSize: '11px', color: 'white', fontWeight: 700 }}>8.4% Eng.</div>
          <svg style={{ position: 'absolute', bottom: '60px', left: '16px', right: '16px', width: 'calc(100% - 32px)', height: '50px' }} viewBox="0 0 200 50" preserveAspectRatio="none">
            <polyline points="0,45 30,38 60,30 90,20 120,15 150,8 180,4 200,2" fill="none" stroke="rgba(74,222,128,0.7)" strokeWidth="2" strokeLinecap="round" />
            <defs><linearGradient id="greenGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4ADE80" /><stop offset="100%" stopColor="transparent" /></linearGradient></defs>
          </svg>
          <div style={{ position: 'relative', zIndex: 2, fontSize: '10px', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em' }}>SOCIAL MEDIA · CONTENT GROWTH</div>
        </div>
      );
    case "Performance Ads":
      return (
        <div style={{
          width: '100%', height: '100%',
          background: 'linear-gradient(135deg, #1E8BB5 0%, #6B21A8 100%)',
          position: 'relative', overflow: 'hidden',
          display: 'flex', flexDirection: 'column',
          justifyContent: 'flex-end', padding: '20px',
        }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
          <div style={{ position: 'absolute', top: '16px', left: '16px', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '12px', padding: '10px 14px' }}>
            <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.1em' }}>ROAS</div>
            <div style={{ fontSize: '22px', fontWeight: 800, color: 'white' }}>6.1x</div>
            <div style={{ fontSize: '9px', color: '#4ADE80' }}>Zero Waste Budget</div>
          </div>
          {[80, 120, 160].map((size, i) => (
            <div key={i} style={{ position: 'absolute', top: '50%', right: '-20px', width: `${size}px`, height: `${size}px`, marginTop: `-${size/2}px`, border: `1px solid rgba(255,255,255,${0.08 - i*0.02})`, borderRadius: '50%' }} />
          ))}
          <div style={{ position: 'relative', zIndex: 2, fontSize: '10px', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em' }}>PERFORMANCE ADS · ROI FOCUS</div>
        </div>
      );
    default: return <div className="w-full h-full bg-accent-light" />;
  }
};

export default function PortfolioPage() {
  const [filter, setFilter] = useState('All');
  const { resolvedTheme } = useTheme();
  const filters = ['All', 'Performance Ads', 'Branding', 'Social Media', 'E-Commerce'];

  const cases = [
    {
      title: "NexGen E-Commerce Suite",
      category: "E-Commerce",
      layout: "large",
      challenge: "High ad spend with stagnant ROI and 60% cart abandonment.",
      solution: "Implemented full-funnel remarketing and creative asset optimization.",
      results: "200% Revenue Increase",
      stats: ["+312% ROAS", "2.1M Reach", "60% CPL Drop"],
      testimonial: "Adz Pro didn't just run ads; they transformed our business model.",
      tags: ["Performance Ads", "E-com"]
    },
    {
      title: "Lumina Brand Identity",
      category: "Branding",
      layout: "tall",
      challenge: "Outdated visual identity failing to attract premium clients.",
      solution: "Complete visual rebranding and high-tech UI guidelines.",
      results: "127% Lead Growth",
      stats: ["High-Ticket", "Brand DNA", "Global Focus"],
      testimonial: "The identity they crafted feels like it belongs in 2030.",
      tags: ["Strategy", "Design"]
    },
    {
      title: "Velocity Social Strategy",
      category: "Social Media",
      layout: "medium",
      challenge: "Zero organic engagement and failing to reach Gen-Z.",
      solution: "Viral-first short-form video content strategy and influencer bridge.",
      results: "5M+ Impressions",
      stats: ["Viral Hit", "85k Growth", "Gen-Z Focus"],
      testimonial: "Our brand went from invisible to everywhere in 30 days.",
      tags: ["Content", "Viral"]
    },
    {
      title: "Insight Analytics Portal",
      category: "Performance Ads",
      layout: "medium",
      challenge: "Lack of transparent data across multi-channel campaigns.",
      solution: "Built a custom analytics dashboard integrating real-time spend.",
      results: "34% Efficiency Gain",
      stats: ["Zero Waste", "Real-time", "API Integrated"],
      testimonial: "Data clarity is our new competitive advantage.",
      tags: ["Data", "Ads"]
    }
  ];

  const filteredCases = filter === 'All' ? cases : cases.filter(c => c.category === filter);

  return (
    <div className="page-transition pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="container-responsive">
        <div className="text-center space-y-6 mb-12 md:mb-24">
          <h2 className="text-[10px] md:text-sm font-black uppercase tracking-[0.4em] text-accent-primary">Our Work</h2>
          <h1 className="section-title font-black text-text-primary px-4">Success <span className="text-accent-primary">Stories</span>.</h1>
          <div className="w-12 md:w-16 h-[3px] bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full mx-auto mt-4 shadow-accent-glow" />
          <p className="body-text max-w-2xl mx-auto px-4 text-text-secondary mt-6 md:mt-8">
            Real data. Real ROI. Explore how we've helped diverse brands achieve exceptional growth.
          </p>
        </div>

        {/* Filter Tabs - Horizontal Scroll on Mobile */}
        <div className="flex gap-2 md:gap-4 mb-12 md:mb-20 overflow-x-auto pb-4 px-2 scrollbar-hide">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "px-5 md:px-8 py-2.5 md:py-3 rounded-full font-bold transition-all border whitespace-nowrap min-h-[44px]",
                filter === f ? "shadow-xl text-white" : "text-text-muted hover:text-accent-primary border-border"
              )}
              style={{ 
                backgroundColor: filter === f ? 'var(--accent-primary)' : 'var(--surface)',
                borderColor: filter === f ? 'var(--accent-primary)' : 'var(--border)'
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-2 md:px-0">
          <AnimatePresence mode="popLayout">
            {filteredCases.map((c, i) => (
              <motion.div 
                key={c.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className={cn(
                  "group relative rounded-[24px] md:rounded-[32px] overflow-hidden border border-border glassmorphism bg-card-bg transition-all hover:shadow-strong",
                  c.layout === 'large' ? "lg:col-span-2" : "",
                  c.layout === 'tall' ? "lg:row-span-2" : ""
                )}
              >
                <div className={cn(
                  "flex flex-col h-full",
                  c.layout === 'large' ? "lg:flex-row" : ""
                )}>
                  {/* Media Side */}
                  <div className={cn(
                    "relative overflow-hidden shrink-0",
                    c.layout === 'large' ? "lg:w-1/2 h-56 md:h-72 lg:h-auto" : "h-56 md:h-64",
                    c.layout === 'tall' ? "lg:h-3/5" : ""
                  )}>
                    <CaseStudyGraphic type={c.category} />
                    
                    {/* Hover Overlay */}
                    <div 
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-full group-hover:translate-y-0"
                      style={{ background: resolvedTheme === 'dark' ? 'linear-gradient(to top, rgba(7, 14, 26, 0.95), transparent)' : 'linear-gradient(to top, rgba(255, 255, 255, 0.95), transparent)' }}
                    >
                      <Button className="rounded-full px-8 h-12 md:h-14 text-sm md:text-lg font-black shadow-xl min-h-[44px]" style={{ background: 'var(--accent-primary)', color: '#FFF' }}>
                        View Case Study <ArrowUpRight className="ml-2" />
                      </Button>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                      {c.stats.slice(0, 2).map((s, idx) => (
                        <div key={idx} className="px-3 py-1 md:py-1.5 rounded-lg md:rounded-xl text-[8px] md:text-[10px] font-black uppercase tracking-widest glassmorphism border-accent-primary/30 text-accent-primary bg-accent-light/80">
                          {s}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className={cn(
                    "p-6 md:p-8 space-y-4 md:space-y-6 flex flex-col justify-center",
                    c.layout === 'large' ? "lg:w-1/2" : ""
                  )}>
                    <div className="space-y-1 md:space-y-2">
                      <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] text-accent-primary">{c.category}</span>
                      <h3 className="text-xl md:text-3xl font-black text-text-primary leading-tight">{c.title}</h3>
                    </div>

                    <div className="space-y-3 md:space-y-4">
                      <div className="space-y-1">
                        <p className="text-[0.6rem] md:text-[0.7rem] font-black uppercase tracking-[0.2em] text-accent-primary">THE CHALLENGE</p>
                        <p className="text-xs md:text-sm leading-snug text-text-secondary line-clamp-2">{c.challenge}</p>
                      </div>
                      <div className="p-3 md:p-4 rounded-xl md:rounded-2xl border border-border bg-accent-light/10 space-y-1 md:space-y-2">
                        <div className="flex items-center gap-2 text-accent-primary">
                          <CheckCircle size={14} className="md:size-4" />
                          <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest">Impact</span>
                        </div>
                        <p className="text-lg md:text-xl font-black text-text-primary">{c.results}</p>
                      </div>
                    </div>

                    <div className="relative pl-4 md:pl-6 italic text-[10px] md:text-xs border-l-2 border-accent-primary text-text-muted glassmorphism p-3 md:p-4 rounded-r-xl md:rounded-r-2xl">
                      <Quote className="absolute top-2 left-2 w-3 h-3 opacity-20 text-accent-primary" />
                      <p className="line-clamp-2">"{c.testimonial}"</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}