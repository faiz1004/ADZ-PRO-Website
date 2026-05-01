"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Heart, Lightbulb, BarChart, Rocket, ArrowRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const SectionDivider = () => (
  <div className="section-divider">
    <span />
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-4 text-accent-primary">
      <rect x="6" y="0" width="8.48528" height="8.48528" transform="rotate(45 6 0)" fill="currentColor"/>
    </svg>
    <span />
  </div>
);

export default function AboutPage() {
  const journey = [
    { year: "Dec 2025", event: "Adz Pro Founded", desc: "Started with a vision to merge creativity and data." },
    { year: "Jan 2026", event: "First 10 Clients", desc: "Proved our ROI-first model with rapid success." },
    { year: "Mar 2026", event: "₹1Cr managed", desc: "Scaled operations to manage significant digital budgets." },
    { year: "Today", event: "Growing Faster...", desc: "Continuously innovating the future of digital ads." },
  ];

  const values = [
    { title: "Precision First", desc: "Every rupee spent is tracked and justified.", icon: <Target /> },
    { title: "Client Obsessed", desc: "Your growth IS our growth.", icon: <Heart /> },
    { title: "Always Innovating", desc: "We stay ahead of every algorithm change.", icon: <Lightbulb /> },
    { title: "Transparent Always", desc: "No vanity metrics. Only real results.", icon: <BarChart /> },
  ];

  return (
    <div className="page-transition">
      {/* Hero Banner */}
      <section className="relative pt-40 pb-20 overflow-hidden hero-mesh">
        <div className="absolute inset-0 dot-grid opacity-10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-accent-primary">The Vision</h2>
            <h1 className="text-6xl md:text-8xl font-black text-text-primary">Our <span className="text-accent-primary">Story</span>.</h1>
            <div className="flex items-center justify-center gap-2 text-xs font-black uppercase tracking-widest text-text-muted mt-8">
              <Link href="/" className="hover:text-accent-primary transition-colors">Home</Link>
              <ArrowRight size={12} />
              <span className="text-accent-primary">About</span>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Story Intro */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-black uppercase tracking-widest glassmorphism text-accent-primary border-border bg-accent-light"
            >
              <Award size={14} />
              Established Dec 28, 2025
            </div>
            <h2 className="text-5xl font-black leading-tight text-text-primary">
              Innovation is Our <span className="text-accent-primary">DNA</span>.
            </h2>
            <p className="text-xl leading-relaxed font-medium text-text-secondary">
              Adz Pro was founded to bridge the gap between human creativity and technological possibility. In a world of noise, we create resonance.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
             <div className="absolute inset-0 blur-[120px] rounded-full opacity-20 bg-accent-primary" />
             <div className="relative rounded-[40px] overflow-hidden p-8 shadow-strong glassmorphism border-border bg-surface-glass/10">
                <div className="aspect-[4/5] rounded-[32px] overflow-hidden relative">
                  <div className="absolute inset-0 hero-mesh opacity-40" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Rocket size={120} className="text-accent-primary animate-float" />
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 p-8 rounded-3xl shadow-strong glassmorphism border-border bg-accent-primary text-white">
                  <p className="text-4xl font-black">500+</p>
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-80">Campaigns Scaled</p>
                </div>
             </div>
          </motion.div>
        </div>

        <SectionDivider />

        {/* Philosophy Visual */}
        <div className="py-32">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-16 md:p-24 rounded-[48px] text-center glassmorphism border-l-4 border-accent-primary bg-surface-glass/20 backdrop-blur-xl"
          >
            <Quote className="absolute top-10 left-10 w-32 h-32 opacity-[0.05] text-accent-primary" />
            <div className="space-y-6 relative z-10">
              <p className="text-3xl md:text-5xl font-black text-text-primary italic leading-tight">
                "Creative precision meets data-driven growth."
              </p>
              <p className="text-lg font-black uppercase tracking-[0.4em] text-text-muted">
                — The Adz Pro Philosophy
              </p>
            </div>
          </motion.div>
        </div>

        {/* Numbers Section */}
        <div className="py-24 grid grid-cols-2 md:grid-cols-4 gap-8 mb-32 rounded-[40px] bg-section-alt border border-border">
          {[
            { value: "500+", label: "Campaigns Launched" },
            { value: "₹2Cr+", label: "Ad Budget Managed" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "12+", label: "Industries Served" },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center space-y-2"
            >
              <h3 className="text-5xl font-black text-accent-primary">{stat.value}</h3>
              <p className="text-[10px] font-black uppercase tracking-widest text-text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <SectionDivider />

        {/* Timeline */}
        <div className="py-24 space-y-16">
          <div className="text-center">
             <h2 className="text-sm font-black uppercase tracking-[0.4em] text-accent-primary">The Journey</h2>
             <h3 className="text-4xl font-black text-text-primary">Scaling Milestone by Milestone</h3>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div 
              className="absolute left-0 top-0 bottom-0 w-0.5 shadow-accent-glow" 
              style={{ background: 'linear-gradient(to bottom, var(--accent-primary), transparent)' }}
            />
            <div className="space-y-20 ml-12">
              {journey.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Node */}
                  <div className="absolute -left-[54px] top-0 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-accent-primary z-10 shadow-[0_0_15px_var(--accent-glow)]" />
                    <motion.div 
                      animate={{ scale: [1, 1.8], opacity: [0.5, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="absolute w-6 h-6 rounded-full border-2 border-accent-primary"
                    />
                  </div>
                  
                  <div className="p-10 rounded-[32px] glassmorphism bg-surface/50 border-border group hover:border-accent-primary transition-all">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className="px-4 py-1.5 rounded-full bg-accent-light text-accent-primary text-xs font-black uppercase tracking-widest">{item.year}</span>
                      <h4 className="text-2xl font-black text-text-primary">{item.event}</h4>
                    </div>
                    <p className="text-lg text-text-secondary leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <SectionDivider />

        {/* Values Grid */}
        <div className="py-32">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-accent-primary">Core Values</h2>
            <h3 className="text-4xl font-black text-text-primary">Built on Principles.</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[40px] glassmorphism border-border space-y-6 group hover:border-accent-primary transition-all interactive-card"
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 bg-accent-light text-accent-primary"
                >
                  {v.icon}
                </div>
                <h4 className="text-2xl font-black uppercase text-text-primary">{v.title}</h4>
                <p className="leading-relaxed text-text-secondary">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
