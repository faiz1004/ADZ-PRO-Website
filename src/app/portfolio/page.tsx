"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, CheckCircle, Quote, ShoppingCart, Home, GraduationCap, ShoppingBag } from 'lucide-react';
import { useTheme } from 'next-themes';

const CaseStudyGraphic = ({ type }: { type: string }) => {
  const graphics = {
    "E-Commerce": {
      gradient: "linear-gradient(135deg, #1E8BB5, #0a1628)",
      icon: <ShoppingCart className="w-16 h-16 text-white opacity-20" />
    },
    "Branding": {
      gradient: "linear-gradient(135deg, #0D6A91, #1a2a4a)",
      icon: <Home className="w-16 h-16 text-white opacity-20" />
    },
    "Social Media": {
      gradient: "linear-gradient(135deg, #2BA8D8, #070e1a)",
      icon: <GraduationCap className="w-16 h-16 text-white opacity-20" />
    },
    "Performance Ads": {
      gradient: "linear-gradient(135deg, #1E8BB5, #6B21A8)",
      icon: <ShoppingBag className="w-16 h-16 text-white opacity-20" />
    }
  };
  const g = graphics[type as keyof typeof graphics] || graphics["E-Commerce"];
  
  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden" style={{ background: g.gradient }}>
      <div className="absolute inset-0 dot-grid opacity-10" />
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
      solution: "Implemented full-funnel remarketing and creative asset optimization using dynamic product ads.",
      results: "200% Revenue Increase",
      stats: ["+312% ROAS", "2.1M Reach", "60% CPL Drop"],
      testimonial: "Adz Pro didn't just run ads; they transformed our entire business model for growth.",
      tags: ["Performance Ads", "E-com"]
    },
    {
      title: "Lumina Brand Identity",
      category: "Branding",
      layout: "tall",
      challenge: "Outdated visual identity failing to attract premium enterprise clients.",
      solution: "Complete visual rebranding including motion guidelines and high-tech UI kits.",
      results: "127% Lead Growth",
      stats: ["High-Ticket", "Brand DNA", "Global Focus"],
      testimonial: "The identity they crafted feels like it belongs in 2030. Absolutely world-class.",
      tags: ["Strategy", "Design"]
    },
    {
      title: "Velocity Social Strategy",
      category: "Social Media",
      layout: "medium",
      challenge: "Zero organic engagement and failing to reach the Gen-Z demographic.",
      solution: "Designed a viral-first short-form video content strategy and influencer bridge.",
      results: "5M+ Impressions",
      stats: ["Viral Hit", "85k Growth", "Gen-Z Focus"],
      testimonial: "Our brand went from invisible to everywhere in 30 days. Incredible results.",
      tags: ["Content", "Viral"]
    },
    {
      title: "Insight Analytics Portal",
      category: "Performance Ads",
      layout: "medium",
      challenge: "Lack of transparent data across multi-channel advertising campaigns.",
      solution: "Built a custom analytics dashboard integrating real-time spend across 5 platforms.",
      results: "34% Efficiency Gain",
      stats: ["Zero Waste", "Real-time", "API Integrated"],
      testimonial: "Data clarity is our new competitive advantage. Adz Pro delivered.",
      tags: ["Data", "Ads"]
    }
  ];

  const filteredCases = filter === 'All' ? cases : cases.filter(c => c.category === filter);

  return (
    <div className="page-transition pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-6 mb-24">
          <h2 className="text-sm font-black uppercase tracking-[0.4em] text-accent-primary">Our Work</h2>
          <h1 className="text-6xl md:text-8xl font-black text-text-primary">Success <span className="text-accent-primary">Stories</span>.</h1>
          <div className="w-16 h-[3px] bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full mx-auto mt-4 shadow-accent-glow" />
          <p className="text-xl max-w-2xl mx-auto leading-relaxed text-text-secondary mt-8">
            Real data. Real ROI. Explore how we've helped diverse brands achieve exceptional growth.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-8 py-3 rounded-full font-bold transition-all border ${
                filter === f 
                ? "shadow-xl text-white" 
                : "text-text-muted hover:text-accent-primary border-border"
              }`}
              style={{ 
                backgroundColor: filter === f ? 'var(--accent-primary)' : 'var(--surface)',
                borderColor: filter === f ? 'var(--accent-primary)' : 'var(--border)'
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCases.map((c, i) => (
              <motion.div 
                key={c.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className={cn(
                  "group relative rounded-[32px] overflow-hidden border border-border glassmorphism bg-card-bg transition-all hover:-translate-y-2 hover:shadow-strong",
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
                    "relative overflow-hidden",
                    c.layout === 'large' ? "lg:w-1/2 aspect-video lg:aspect-auto" : "aspect-[16/10]",
                    c.layout === 'tall' ? "h-3/5" : ""
                  )}>
                    <CaseStudyGraphic type={c.category} />
                    
                    {/* Hover Overlay */}
                    <div 
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-full group-hover:translate-y-0"
                      style={{ background: resolvedTheme === 'dark' ? 'linear-gradient(to top, rgba(7, 14, 26, 0.95), transparent)' : 'linear-gradient(to top, rgba(255, 255, 255, 0.95), transparent)' }}
                    >
                      <Button className="rounded-full px-10 h-14 text-lg font-black shadow-xl" style={{ background: 'var(--accent-primary)', color: '#FFF' }}>
                        View Case Study <ArrowUpRight className="ml-2" />
                      </Button>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                      {c.stats.slice(0, 2).map((s, idx) => (
                        <div key={idx} className="px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest glassmorphism border-accent-primary/30 text-accent-primary bg-accent-light/80">
                          {s}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className={cn(
                    "p-8 space-y-6 flex flex-col justify-center",
                    c.layout === 'large' ? "lg:w-1/2" : ""
                  )}>
                    <div className="space-y-2">
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent-primary">{c.category}</span>
                      <h3 className="text-2xl md:text-3xl font-black text-text-primary">{c.title}</h3>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-1">
                        <p className="text-[0.7rem] font-black uppercase tracking-[0.2em] text-accent-primary">THE CHALLENGE</p>
                        <p className="text-sm leading-snug text-text-secondary line-clamp-2">{c.challenge}</p>
                      </div>
                      <div className="p-4 rounded-2xl border border-border bg-accent-light/10 space-y-2">
                        <div className="flex items-center gap-2 text-accent-primary">
                          <CheckCircle size={16} />
                          <span className="text-[10px] font-black uppercase tracking-widest">Impact</span>
                        </div>
                        <p className="text-xl font-black text-text-primary">{c.results}</p>
                      </div>
                    </div>

                    {/* Testimonial Mini */}
                    <div className="relative pl-6 italic text-xs border-l-2 border-accent-primary text-text-muted glassmorphism p-4 rounded-r-2xl">
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
