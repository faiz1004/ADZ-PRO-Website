"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, CheckCircle, Quote, ShoppingCart, Home, GraduationCap, ShoppingBag } from 'lucide-react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

const CaseStudyGraphic = ({ type }: { type: string }) => {
  const graphics = {
    "E-Commerce": {
      gradient: "linear-gradient(135deg, #1E8BB5, #0a1628)",
      icon: <ShoppingCart className="w-12 h-12 md:w-16 md:h-16 text-white opacity-20" />
    },
    "Branding": {
      gradient: "linear-gradient(135deg, #0D6A91, #1a2a4a)",
      icon: <Home className="w-12 h-12 md:w-16 md:h-16 text-white opacity-20" />
    },
    "Social Media": {
      gradient: "linear-gradient(135deg, #2BA8D8, #070e1a)",
      icon: <GraduationCap className="w-12 h-12 md:w-16 md:h-16 text-white opacity-20" />
    },
    "Performance Ads": {
      gradient: "linear-gradient(135deg, #1E8BB5, #6B21A8)",
      icon: <ShoppingBag className="w-12 h-12 md:w-16 md:h-16 text-white opacity-20" />
    }
  };
  const g = graphics[type as keyof typeof graphics] || graphics["E-Commerce"];
  
  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden" style={{ background: g.gradient }}>
      <div className="absolute inset-0 dot-pattern opacity-10" />
      {g.icon}
    </div>
  );
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