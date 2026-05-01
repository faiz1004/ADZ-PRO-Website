"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  ArrowRight, 
  BarChart3, 
  Target, 
  Sparkles, 
  Check,
  ChevronDown 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const ServiceIcon = ({ type, hover }: { type: string, hover: boolean }) => {
  const iconProps = { className: cn("transition-all duration-500", hover ? "scale-110 text-accent-primary" : "text-text-secondary") };
  
  switch (type) {
    case "Performance Advertising":
      return (
        <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shrink-0">
          <BarChart3 {...iconProps} />
          <motion.div className="absolute inset-0 bg-accent-primary/20 blur-xl rounded-full" animate={{ opacity: hover ? 1 : 0 }} />
        </div>
      );
    case "Brand Strategy":
      return (
        <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shrink-0">
          <Target {...iconProps} className={cn(iconProps.className, hover && "rotate-45")} />
          <motion.div className="absolute inset-0 bg-accent-primary/20 blur-xl rounded-full" animate={{ opacity: hover ? 1 : 0 }} />
        </div>
      );
    case "Creative Content":
      return (
        <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shrink-0">
          <Sparkles {...iconProps} />
          <motion.div className="absolute inset-0 bg-accent-primary/20 blur-xl rounded-full" animate={{ opacity: hover ? 1 : 0 }} />
        </div>
      );
    case "Digital Growth":
      return (
        <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shrink-0">
          <Globe {...iconProps} className={cn(iconProps.className, hover && "animate-pulse")} />
          <motion.div className="absolute inset-0 bg-accent-primary/20 blur-xl rounded-full" animate={{ opacity: hover ? 1 : 0 }} />
        </div>
      );
    default: return null;
  }
};

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const services = [
    {
      title: "Performance Advertising",
      focus: "ROI & Scaling",
      metric: "3.2x ROAS",
      desc: "Our primary engine. We don't just run ads; we engineer high-performance sales funnels. Using multi-channel attribution and real-time optimization, we ensure every cent of your ad spend is working toward a conversion.",
      process: ["Market Gap Analysis", "Omnichannel Launch", "Iterative Scaling"],
      included: ["Meta Ads", "Google Ads", "YouTube Ads", "Retargeting", "A/B Testing", "Funnel Optimization"],
    },
    {
      title: "Brand Strategy",
      focus: "Identity & Positioning",
      metric: "73% Recall Boost",
      desc: "How does the world see you? We define your brand's voice, visual DNA, and market positioning to ensure you're not just a commodity, but a cult favorite.",
      process: ["Visual DNA Mapping", "Voice Guidelines", "Market Positioning"],
      included: ["Brand Audit", "Positioning Framework", "Visual Identity", "Tone of Voice", "Competitor Analysis"],
    },
    {
      title: "Creative Content",
      focus: "High-Impact Visuals",
      metric: "2.8x CTR",
      desc: "In the attention economy, your creative is your most valuable asset. We produce high-impact video, graphic, and copy assets designed specifically to stop the scroll.",
      process: ["Concept Ideation", "High-Tech Production", "Post-Launch Audit"],
      included: ["Ad Copywriting", "Video Scripts", "Graphic Design", "UGC Direction", "Reels & Shorts Production"],
    },
    {
      title: "Digital Growth",
      focus: "Holistic SEO & Social",
      metric: "5x Organic Growth",
      desc: "Organic growth is the backbone of brand longevity. We implement deep-technical SEO and community-led social strategies that drive evergreen traffic.",
      process: ["Technical SEO Audit", "Content Hub Strategy", "Community Scaling"],
      included: ["SEO Audit", "On-Page Optimization", "Link Building", "Social Media Calendar", "Community Management"],
    }
  ];

  const ServiceContent = ({ index }: { index: number }) => (
    <div className="space-y-8 md:space-y-12">
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest bg-accent-light border-l-4 border-accent-primary text-accent-primary shadow-lg">
          <BarChart3 size={14} className="md:size-4" />
          Typical Result: {services[index].metric}
        </div>
        <h3 className="text-3xl md:text-6xl font-black text-text-primary">{services[index].title}</h3>
        <p className="text-base md:text-xl leading-relaxed text-text-secondary">
          {services[index].desc}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        <div className="space-y-4 md:space-y-6">
          <h4 className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-text-muted">What's Included</h4>
          <ul className="grid grid-cols-1 gap-3 md:gap-4">
            {services[index].included.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-accent-light flex items-center justify-center text-accent-primary shrink-0">
                  <Check size={12} className="md:size-[14px]" strokeWidth={3} />
                </div>
                <span className="font-bold text-sm md:text-base text-text-secondary">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4 md:space-y-6">
          <h4 className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-text-muted">Our Process</h4>
          <div className="space-y-3 md:space-y-4">
            {services[index].process.map((step, sidx) => (
              <div key={sidx} className="p-4 md:p-6 rounded-2xl flex items-center gap-4 glassmorphism border-border hover:bg-accent-light/10 transition-colors">
                <span className="text-[10px] md:text-xs font-black uppercase text-accent-primary">0{sidx + 1}</span>
                <p className="font-bold text-sm md:text-base text-text-primary">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-4 md:pt-6">
        <Button asChild size="lg" className="rounded-full px-8 md:px-12 h-14 md:h-16 group shadow-xl w-full sm:w-auto min-h-[44px]" style={{ background: 'var(--accent-primary)', color: '#FFF' }}>
          <Link href="/portfolio">
            See Success Stories
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </div>
  );

  return (
    <div className="page-transition pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="container-responsive">
        <div className="text-center space-y-6 mb-12 md:mb-24">
          <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-[10px] md:text-sm font-black uppercase tracking-[0.4em] text-accent-primary">Capabilities</motion.h2>
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="section-title font-black text-text-primary px-4">What We <span className="text-accent-primary">Do</span>.</motion.h1>
          <div className="w-12 md:w-16 h-[3px] bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full mx-auto mt-4 shadow-accent-glow" />
          <p className="body-text max-w-2xl mx-auto px-4 text-text-secondary mt-6 md:mt-8">
            From performance-driven ad campaigns to comprehensive brand overhauls, we provide the full stack of digital services required to dominate.
          </p>
        </div>

        {isMobile ? (
          <div className="space-y-4 px-2">
            {services.map((service, i) => (
              <div key={i} className="border border-border rounded-2xl overflow-hidden glassmorphism">
                <button 
                  className="w-full flex items-center justify-between p-5 text-left min-h-[56px]"
                  onClick={() => setActiveTab(activeTab === i ? -1 : i)}
                >
                  <div className="flex items-center gap-4">
                    <ServiceIcon type={service.title} hover={activeTab === i} />
                    <div>
                      <h4 className="text-sm font-black uppercase tracking-tight leading-none mb-1">{service.title}</h4>
                      <p className="text-[8px] font-black uppercase tracking-[0.2em] text-text-muted">{service.focus}</p>
                    </div>
                  </div>
                  <ChevronDown className={cn("text-accent-primary transition-transform duration-300", activeTab === i ? "rotate-180" : "")} />
                </button>
                <AnimatePresence>
                  {activeTab === i && (
                    <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                      <div className="p-6 pt-0 border-t border-border/10">
                        <ServiceContent index={i} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid lg:grid-cols-12 gap-12 min-h-[600px]">
            <div className="lg:col-span-4 flex flex-col gap-4">
              {services.map((service, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`flex items-center gap-6 p-8 rounded-3xl transition-all text-left group border min-h-[110px] ${activeTab === i ? "shadow-2xl scale-[1.02]" : "hover:border-accent-primary/50"}`}
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
                  className="p-12 md:p-20 rounded-[40px] h-full flex flex-col justify-center glassmorphism border-border relative overflow-hidden"
                >
                  <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 opacity-[0.03] pointer-events-none">
                    <ServiceIcon type={services[activeTab].title} hover={true} />
                  </div>
                  <ServiceContent index={activeTab} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}