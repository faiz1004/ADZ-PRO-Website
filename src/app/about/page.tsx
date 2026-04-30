"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Award, Check, X, Target, Heart, Lightbulb, BarChart } from 'lucide-react';

export default function AboutPage() {
  const aboutImg = PlaceHolderImages.find(img => img.id === 'about-image');

  const journey = [
    { year: "Dec 2025", event: "Adz Pro Founded", desc: "Started with a vision to merge creativity and data." },
    { year: "Jan 2026", event: "First 10 Clients", desc: "Proved our ROI-first model with rapid success." },
    { year: "Mar 2026", event: "₹1Cr managed", desc: "Scaled operations to manage significant digital budgets." },
    { year: "Today", event: "Growing Faster...", desc: "Continuously innovating the future of digital ads." },
  ];

  const values = [
    { title: "Precision First", desc: "Every rupee spent is tracked and justified.", icon: <Target className="text-primary" /> },
    { title: "Client Obsessed", desc: "Your growth IS our growth.", icon: <Heart className="text-primary" /> },
    { title: "Always Innovating", desc: "We stay ahead of every algorithm change.", icon: <Lightbulb className="text-primary" /> },
    { title: "Transparent Always", desc: "No vanity metrics. Only real results.", icon: <BarChart className="text-primary" /> },
  ];

  return (
    <div className="page-transition pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Story Hero */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest"
            >
              <Award size={14} />
              Established Dec 28, 2025
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9]">
              Our Story: <span className="text-gradient">Innovation</span> is Our DNA.
            </h1>
            <p className="text-xl text-white/60 leading-relaxed font-medium">
              Adz Pro was founded to bridge the gap between human creativity and technological possibility. In a world of noise, we create resonance.
            </p>
          </div>
          <div className="relative">
             <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full" />
             <div className="relative rounded-[40px] overflow-hidden glassmorphism p-2 shadow-2xl">
                <Image 
                  src={aboutImg?.imageUrl || ''}
                  alt="Story"
                  width={800}
                  height={1000}
                  className="rounded-[32px] object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
             </div>
          </div>
        </div>

        {/* Numbers Section */}
        <div className="py-24 grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
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
              className="p-10 rounded-[40px] glassmorphism text-center space-y-2 border-white/5"
            >
              <h3 className="text-5xl font-black text-primary">{stat.value}</h3>
              <p className="text-sm font-black text-white/40 uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Values Grid */}
        <div className="py-32 bg-white/5 rounded-[80px] px-12 mb-32">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-sm font-black text-primary uppercase tracking-[0.4em]">Core Values</h2>
            <h3 className="text-4xl font-black">Built on Principles.</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="p-10 rounded-[40px] glassmorphism border-white/5 space-y-6 group hover:border-primary/50 transition-all">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  {v.icon}
                </div>
                <h4 className="text-2xl font-black uppercase">{v.title}</h4>
                <p className="text-white/60 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="py-24 space-y-16">
          <div className="text-center">
             <h2 className="text-sm font-black text-primary uppercase tracking-[0.4em]">The Journey</h2>
             <h3 className="text-4xl font-black">Scaling Milestone by Milestone</h3>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
            <div className="space-y-12">
              {journey.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-12 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="flex-1 text-right">
                    {i % 2 === 0 && (
                      <div className="space-y-2">
                        <span className="text-primary font-black">{item.year}</span>
                        <h4 className="text-xl font-bold">{item.event}</h4>
                        <p className="text-sm text-white/40">{item.desc}</p>
                      </div>
                    )}
                  </div>
                  <div className="relative z-10 w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_#007BFF] border-4 border-background" />
                  <div className="flex-1 text-left">
                    {i % 2 !== 0 && (
                      <div className="space-y-2">
                        <span className="text-primary font-black">{item.year}</span>
                        <h4 className="text-xl font-bold">{item.event}</h4>
                        <p className="text-sm text-white/40">{item.desc}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
