"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, ShieldCheck, Palette, Globe, ArrowRight, CheckCircle2, BarChart3, Target, CheckCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const ServiceIcon = ({ type, hover }: { type: string, hover: boolean }) => {
  switch (type) {
    case "Performance Advertising":
      return (
        <div className="relative w-12 h-12 flex items-center justify-center">
          <BarChart3 className={cn("transition-all duration-500", hover ? "scale-110 text-accent-primary" : "text-text-secondary")} />
          <motion.div 
            className="absolute inset-0 bg-accent-primary/20 blur-xl rounded-full"
            animate={{ opacity: hover ? 1 : 0 }}
          />
        </div>
      );
    case "Brand Strategy":
      return (
        <div className="relative w-12 h-12 flex items-center justify-center">
          <Target className={cn("transition-all duration-500", hover ? "scale-110 text-accent-primary rotate-45" : "text-text-secondary")} />
          <motion.div 
            className="absolute inset-0 bg-accent-primary/20 blur-xl rounded-full"
            animate={{ opacity: hover ? 1 : 0 }}
          />
        </div>
      );
    case "Creative Content":
      return (
        <div className="relative w-12 h-12 flex items-center justify-center">
          <Sparkles className={cn("transition-all duration-500", hover ? "scale-110 text-accent-primary" : "text-text-secondary")} />
          <motion.div 
            className="absolute inset-0 bg-accent-primary/20 blur-xl rounded-full"
            animate={{ opacity: hover ? 1 : 0 }}
          />
        </div>
      );
    case "Digital Growth":
      return (
        <div className="relative w-12 h-12 flex items-center justify-center">
          <Globe className={cn("transition-all duration-500", hover ? "scale-110 text-accent-primary animate-pulse" : "text-text-secondary")} />
          <motion.div 
            className="absolute inset-0 bg-accent-primary/20 blur-xl rounded-full"
            animate={{ opacity: hover ? 1 : 0 }}
          />
        </div>
      );
    default: return null;
  }
};

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      title: "Performance Advertising",
      focus: "ROI & Scaling",
      metric: "Average 3.2x ROAS within 90 days",
      desc: "Our primary engine. We don't just run ads; we engineer high-performance sales funnels. Using multi-channel attribution and real-time optimization, we ensure every cent of your ad spend is working toward a conversion.",
      process: ["Market Gap Analysis", "Omnichannel Launch", "Iterative Scaling"],
      included: ["Meta Ads", "Google Ads", "YouTube Ads", "Retargeting", "A/B Testing", "Funnel Optimization"],
    },
    {
      title: "Brand Strategy",
      focus: "Identity & Positioning",
      metric: "73% report stronger brand recall",
      desc: "How does the world see you? We define your brand's voice, visual DNA, and market positioning to ensure you're not just a commodity, but a cult favorite.",
      process: ["Visual DNA Mapping", "Voice Guidelines", "Market Positioning"],
      included: ["Brand Audit", "Positioning Framework", "Visual Identity", "Tone of Voice", "Competitor Analysis"],
    },
    {
      title: "Creative Content",
      focus: "High-Impact Visuals",
      metric: "2.8x higher CTR vs Previous",
      desc: "In the attention economy, your creative is your most valuable asset. We produce high-impact video, graphic, and copy assets designed specifically to stop the scroll.",
      process: ["Concept Ideation", "High-Tech Production", "Post-Launch Audit"],
      included: ["Ad Copywriting", "Video Scripts", "Graphic Design", "UGC Direction", "Reels & Shorts Production"],
    },
    {
      title: "Digital Growth",
      focus: "Holistic SEO & Social",
      metric: "5x organic growth in 6 months",
      desc: "Organic growth is the backbone of brand longevity. We implement deep-technical SEO and community-led social strategies that drive evergreen traffic.",
      process: ["Technical SEO Audit", "Content Hub Strategy", "Community Scaling"],
      included: ["SEO Audit", "On-Page Optimization", "Link Building", "Social Media Calendar", "Community Management"],
    }
  ];

  return (
    <div className="page-transition pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-6 mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-black uppercase tracking-[0.4em] text-accent-primary"
          >
            Capabilities
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black leading-tight text-text-primary"
          >
            What We <span className="text-accent-primary">Do</span>.
          </motion.h1>
          <div className="w-16 h-[3px] bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full mx-auto mt-4 shadow-accent-glow" />
          <p className="text-xl max-w-2xl mx-auto leading-relaxed text-text-secondary mt-8">
            From performance-driven ad campaigns to comprehensive brand overhauls, we provide the full stack of digital services required to dominate.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 min-h-[600px]">
          <div className="lg:col-span-4 flex flex-col gap-4">
            {services.map((service, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-6 p-8 rounded-3xl transition-all text-left group border ${
                  activeTab === i 
                  ? "shadow-2xl scale-[1.02]" 
                  : "hover:border-accent-primary/50"
                }`}
                style={{ 
                  backgroundColor: activeTab === i ? 'var(--accent-primary)' : 'var(--surface)',
                  color: activeTab === i ? '#FFFFFF' : 'var(--text-secondary)',
                  borderColor: activeTab === i ? 'var(--accent-primary)' : 'var(--border)',
                  boxShadow: activeTab === i ? '0 0 32px var(--accent-glow)' : 'none'
                }}
              >
                <div className={cn("p-4 rounded-2xl transition-colors", activeTab === i ? 'bg-white/20' : 'bg-accent-light')}>
                  <ServiceIcon type={service.title} hover={activeTab === i} />
                </div>
                <div>
                  <h4 className="text-lg font-black uppercase tracking-tight leading-none mb-1">{service.title}</h4>
                  <p className={cn("text-[10px] font-black uppercase tracking-[0.2em]", activeTab === i ? 'text-white/70' : 'text-text-muted')}>{service.focus}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-8 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="p-12 md:p-20 rounded-[40px] h-full flex flex-col justify-center space-y-12 glassmorphism border-border relative overflow-hidden"
              >
                {/* Watermark Icon */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 opacity-[0.03] pointer-events-none">
                  <ServiceIcon type={services[activeTab].title} hover={true} />
                </div>

                <div className="space-y-6 relative z-10">
                  <div 
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest bg-accent-light border-l-4 border-accent-primary text-accent-primary shadow-lg"
                  >
                    <BarChart3 size={16} />
                    Typical Result: {services[activeTab].metric}
                  </div>
                  <h3 className="text-5xl md:text-6xl font-black text-text-primary">{services[activeTab].title}</h3>
                  <p className="text-xl leading-relaxed text-text-secondary">
                    {services[activeTab].desc}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 relative z-10">
                  <div className="space-y-6">
                    <h4 className="text-xs font-black uppercase tracking-[0.4em] text-text-muted">What's Included</h4>
                    <ul className="grid grid-cols-1 gap-4">
                      {services[activeTab].included.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-accent-light flex items-center justify-center text-accent-primary">
                            <Check size={14} strokeWidth={3} />
                          </div>
                          <span className="font-bold text-text-secondary">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <h4 className="text-xs font-black uppercase tracking-[0.4em] text-text-muted">Our Process</h4>
                    <div className="space-y-4">
                      {services[activeTab].process.map((step, sidx) => (
                        <div key={sidx} className="p-6 rounded-2xl flex items-center gap-4 glassmorphism border-border hover:bg-accent-light/10 transition-colors">
                          <span className="text-xs font-black uppercase text-accent-primary">0{sidx + 1}</span>
                          <p className="font-bold text-text-primary">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 relative z-10">
                  <Button asChild size="lg" className="rounded-full px-12 h-16 group shadow-xl" style={{ background: 'var(--accent-primary)', color: '#FFF' }}>
                    <Link href="/portfolio">
                      See Success Stories
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

import { cn } from '@/lib/utils';