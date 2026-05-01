"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Heart, Lightbulb, BarChart, ArrowRight, Quote } from 'lucide-react';
import Link from 'next/link';
import { CampaignDashboard } from '@/components/CampaignDashboard';

const SectionDivider = () => (
  <div className="section-divider">
    <span />
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-3 md:mx-4 text-accent-primary shrink-0">
      <rect x="6" y="0" width="8.48528" height="8.48528" transform="rotate(45 6 0)" fill="currentColor"/>
    </svg>
    <span />
  </div>
);

export default function AboutPage() {
  const journey = [
    { year: "Dec 2025", event: "Adz Pro Founded", desc: "Started with a vision to merge creativity and data." },
    { year: "Jan 2026", event: "First 10 Clients", desc: "Proved our ROI-first model with rapid success." },
    { year: "Mar 2026", event: "₹1Cr managed", desc: "Scaled operations to manage significant budgets." },
    { year: "Today", event: "Growing Faster...", desc: "Continuously innovating the future of digital ads." },
  ];

  const values = [
    { title: "Precision First", desc: "Every rupee spent is tracked and justified.", icon: <Target /> },
    { title: "Client Obsessed", desc: "Your growth IS our growth.", icon: <Heart /> },
    { title: "Always Innovating", desc: "We stay ahead of algorithm changes.", icon: <Lightbulb /> },
    { title: "Transparent", desc: "No vanity metrics. Only real results.", icon: <BarChart /> },
  ];

  return (
    <div className="page-transition">
      <section className="relative pt-24 md:pt-40 pb-12 md:pb-20 overflow-hidden hero-mesh">
        <div className="absolute inset-0 dot-grid opacity-10" />
        <div className="container-responsive relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
            <h2 className="text-[10px] md:text-sm font-black uppercase tracking-[0.4em] text-accent-primary">The Vision</h2>
            <h1 className="hero-title font-black text-text-primary px-4">Our <span className="text-accent-primary">Story</span>.</h1>
            <div className="flex items-center justify-center gap-2 text-[10px] md:text-xs font-black uppercase tracking-widest text-text-muted mt-6 md:mt-8">
              <Link href="/" className="hover:text-accent-primary transition-colors py-2 px-1">Home</Link>
              <ArrowRight size={10} />
              <span className="text-accent-primary py-2 px-1">About</span>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container-responsive py-16 md:py-24">
        {/* Story Intro */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 md:mb-32">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-[10px] md:text-xs font-black uppercase tracking-widest glassmorphism text-accent-primary border-border bg-accent-light mx-auto lg:mx-0">
              <Award size={14} />
              Established Dec 28, 2025
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight text-text-primary">
              Innovation is Our <span className="text-accent-primary">DNA</span>.
            </h2>
            <p className="text-base md:text-xl leading-relaxed font-medium text-text-secondary">
              Adz Pro was founded to bridge the gap between human creativity and technological possibility. In a world of noise, we create resonance.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative px-6 md:px-0">
             <div className="absolute inset-0 blur-[60px] md:blur-[120px] rounded-full opacity-10 md:opacity-20 bg-accent-primary" />
             <CampaignDashboard />
          </motion.div>
        </div>

        <SectionDivider />

        {/* Philosophy Visual */}
        <div className="py-16 md:py-32">
          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative p-8 md:p-24 rounded-[32px] md:rounded-[48px] text-center glassmorphism border-l-4 border-accent-primary bg-surface-glass/20 backdrop-blur-xl">
            <Quote className="absolute top-4 left-4 md:top-10 md:left-10 w-16 h-16 md:w-32 md:h-32 opacity-[0.05] text-accent-primary" />
            <div className="space-y-4 md:space-y-6 relative z-10">
              <p className="text-xl md:text-4xl lg:text-5xl font-black text-text-primary italic leading-tight">
                "Creative precision meets data-driven growth."
              </p>
              <p className="text-[10px] md:text-lg font-black uppercase tracking-[0.4em] text-text-muted">
                — The Adz Pro Philosophy
              </p>
            </div>
          </motion.div>
        </div>

        {/* Numbers Section */}
        <div className="py-12 md:py-24 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-32 rounded-[32px] md:rounded-[40px] bg-section-alt border border-border px-6 md:px-8">
          {[
            { value: "500+", label: "Campaigns" },
            { value: "₹2Cr+", label: "Ad Spend" },
            { value: "98%", label: "Satisfaction" },
            { value: "12+", label: "Industries" },
          ].map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center space-y-1">
              <h3 className="text-2xl md:text-5xl font-black text-accent-primary">{stat.value}</h3>
              <p className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <SectionDivider />

        {/* Timeline */}
        <div className="py-16 md:py-24 space-y-12 md:space-y-16">
          <div className="text-center">
             <h2 className="text-[10px] md:text-sm font-black uppercase tracking-[0.4em] text-accent-primary">The Journey</h2>
             <h3 className="text-2xl md:text-4xl font-black text-text-primary px-4">Scaling Milestone by Milestone</h3>
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-0">
            {/* Vertical Line - Shifted for mobile */}
            <div 
              className="absolute left-4 sm:left-0 top-0 bottom-0 w-0.5" 
              style={{ background: 'linear-gradient(to bottom, var(--accent-primary), transparent)' }}
            />
            <div className="space-y-12 md:space-y-20 ml-10 sm:ml-12">
              {journey.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
                  {/* Node */}
                  <div className="absolute -left-[42px] sm:-left-[54px] top-0 flex items-center justify-center">
                    <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-accent-primary z-10 shadow-[0_0_15px_var(--accent-glow)]" />
                    <motion.div animate={{ scale: [1, 1.8], opacity: [0.5, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute w-5 h-5 md:w-6 md:h-6 rounded-full border-2 border-accent-primary" />
                  </div>
                  
                  <div className="p-6 md:p-10 rounded-2xl md:rounded-[32px] glassmorphism bg-surface/50 border-border group hover:border-accent-primary transition-all">
                    <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-3 md:mb-4">
                      <span className="px-3 md:px-4 py-1 rounded-full bg-accent-light text-accent-primary text-[10px] md:text-xs font-black uppercase tracking-widest">{item.year}</span>
                      <h4 className="text-xl md:text-2xl font-black text-text-primary">{item.event}</h4>
                    </div>
                    <p className="text-sm md:text-lg text-text-secondary leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <SectionDivider />

        {/* Values Grid */}
        <div className="py-16 md:py-32">
          <div className="text-center mb-12 md:mb-20 space-y-4">
            <h2 className="text-[10px] md:text-sm font-black uppercase tracking-[0.4em] text-accent-primary">Core Values</h2>
            <h3 className="text-2xl md:text-4xl font-black text-text-primary px-4">Built on Principles.</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-4 md:px-0">
            {values.map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-8 md:p-10 rounded-[32px] md:rounded-[40px] glassmorphism border-border space-y-4 md:space-y-6 group hover:border-accent-primary transition-all interactive-card">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 bg-accent-light text-accent-primary shrink-0">
                  {v.icon}
                </div>
                <h4 className="text-lg md:text-2xl font-black uppercase text-text-primary">{v.title}</h4>
                <p className="text-sm md:text-base leading-relaxed text-text-secondary">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
