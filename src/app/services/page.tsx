"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, ShieldCheck, Palette, Globe, ArrowRight, CheckCircle2, BarChart3, Target, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

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
      icon: <TrendingUp size={32} />
    },
    {
      title: "Brand Strategy",
      focus: "Identity & Positioning",
      metric: "73% report stronger brand recall",
      desc: "How does the world see you? We define your brand's voice, visual DNA, and market positioning to ensure you're not just a commodity, but a cult favorite.",
      process: ["Visual DNA Mapping", "Voice Guidelines", "Market Positioning"],
      included: ["Brand Audit", "Positioning Framework", "Visual Identity", "Tone of Voice", "Competitor Analysis"],
      icon: <Target size={32} />
    },
    {
      title: "Creative Content",
      focus: "High-Impact Visuals",
      metric: "2.8x higher CTR vs Previous",
      desc: "In the attention economy, your creative is your most valuable asset. We produce high-impact video, graphic, and copy assets designed specifically to stop the scroll.",
      process: ["Concept Ideation", "High-Tech Production", "Post-Launch Audit"],
      included: ["Ad Copywriting", "Video Scripts", "Graphic Design", "UGC Direction", "Reels & Shorts Production"],
      icon: <Palette size={32} />
    },
    {
      title: "Digital Growth",
      focus: "Holistic SEO & Social",
      metric: "5x organic growth in 6 months",
      desc: "Organic growth is the backbone of brand longevity. We implement deep-technical SEO and community-led social strategies that drive evergreen traffic.",
      process: ["Technical SEO Audit", "Content Hub Strategy", "Community Scaling"],
      included: ["SEO Audit", "On-Page Optimization", "Link Building", "Social Media Calendar", "Community Management"],
      icon: <Globe size={32} />
    }
  ];

  return (
    <div className="page-transition pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-6 mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-black uppercase tracking-[0.4em]"
            style={{ color: 'var(--accent-primary)' }}
          >
            Capabilities
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black leading-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            What We <span className="text-gradient">Do</span>.
          </motion.h1>
          <p className="text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
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
                  ? "shadow-2xl" 
                  : "hover:border-accent-primary"
                }`}
                style={{ 
                  backgroundColor: activeTab === i ? 'var(--accent-primary)' : 'var(--surface)',
                  color: activeTab === i ? '#FFFFFF' : 'var(--text-secondary)',
                  borderColor: activeTab === i ? 'var(--accent-primary)' : 'var(--border)',
                  boxShadow: activeTab === i ? '0 0 16px var(--accent-glow)' : 'none'
                }}
              >
                <div className={`p-4 rounded-2xl ${activeTab === i ? 'bg-white/20' : 'bg-accent-light'}`}>
                  {service.icon}
                </div>
                <div>
                  <h4 className="text-lg font-black uppercase tracking-tight leading-none mb-1">{service.title}</h4>
                  <p className={`text-xs font-bold uppercase tracking-widest ${activeTab === i ? 'text-white/70' : 'text-text-muted'}`}>{service.focus}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-8 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="p-12 md:p-20 rounded-[40px] h-full flex flex-col justify-center space-y-12 glassmorphism"
              >
                <div className="space-y-6">
                  <div 
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest border-l-4"
                    style={{ background: 'var(--accent-light)', borderLeftColor: 'var(--accent-primary)', color: 'var(--accent-primary)' }}
                  >
                    <BarChart3 size={16} />
                    Typical Result: {services[activeTab].metric}
                  </div>
                  <h3 className="text-5xl md:text-6xl font-black" style={{ color: 'var(--text-primary)' }}>{services[activeTab].title}</h3>
                  <p className="text-xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {services[activeTab].desc}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <h4 className="text-xs font-black uppercase tracking-[0.4em]" style={{ color: 'var(--text-muted)' }}>What's Included</h4>
                    <ul className="space-y-3">
                      {services[activeTab].included.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <CheckCircle size={18} style={{ color: 'var(--accent-primary)' }} />
                          <span className="font-medium" style={{ color: 'var(--text-secondary)' }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <h4 className="text-xs font-black uppercase tracking-[0.4em]" style={{ color: 'var(--text-muted)' }}>Our Process</h4>
                    <div className="space-y-4">
                      {services[activeTab].process.map((step, sidx) => (
                        <div key={sidx} className="p-6 rounded-2xl flex items-center gap-4 glassmorphism">
                          <span className="text-xs font-black uppercase" style={{ color: 'var(--accent-primary)' }}>0{sidx + 1}</span>
                          <p className="font-bold" style={{ color: 'var(--text-primary)' }}>{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <Button asChild size="lg" className="rounded-full px-10 h-16 group" style={{ background: 'var(--accent-primary)', color: 'var(--text-inverse)' }}>
                    <Link href="/portfolio">
                      See Results for this service
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