"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Target, Eye, Sparkles, Award, Check, X } from 'lucide-react';

export default function AboutPage() {
  const aboutImg = PlaceHolderImages.find(img => img.id === 'about-image');

  const journey = [
    { year: "Dec 2025", event: "Adz Pro Founded", desc: "Started with a vision to merge creativity and data." },
    { year: "Jan 2026", event: "First 10 Clients", desc: "Proved our ROI-first model with rapid success." },
    { year: "Mar 2026", event: "₹1Cr managed", desc: "Scaled operations to manage significant digital budgets." },
    { year: "Today", event: "Growing Faster...", desc: "Continuously innovating the future of digital ads." },
  ];

  const comparison = [
    { point: "Data-Driven Decisions", us: true, traditional: false },
    { point: "Real-time ROI Tracking", us: true, traditional: false },
    { point: "High-Tech Creative Production", us: true, traditional: true },
    { point: "Opaque Monthly Fees", us: false, traditional: true },
    { point: "Full Funnel Strategy", us: true, traditional: false },
    { point: "Bureaucratic Delays", us: false, traditional: true },
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

        {/* Timeline */}
        <div className="py-24 space-y-16">
          <div className="text-center">
             <h2 className="text-sm font-black text-primary uppercase tracking-[0.4em] mb-4">The Journey</h2>
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

        {/* Comparison Section */}
        <div className="py-32">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-sm font-black text-primary uppercase tracking-[0.4em]">Why Us?</h2>
            <h3 className="text-4xl font-black">The Performance Advantage</h3>
          </div>
          <div className="max-w-4xl mx-auto glassmorphism rounded-[40px] overflow-hidden shadow-2xl border-white/5">
            <table className="w-full text-left">
              <thead className="bg-white/5 border-b border-white/5">
                <tr>
                  <th className="p-8 text-xs font-black uppercase tracking-widest text-white/40">Efficiency Point</th>
                  <th className="p-8 text-center text-primary font-black uppercase tracking-widest">Adz Pro</th>
                  <th className="p-8 text-center text-white/20 font-black uppercase tracking-widest">Traditional</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {comparison.map((row, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="p-8 font-bold text-white/80">{row.point}</td>
                    <td className="p-8 text-center">
                      <div className="flex justify-center">
                        {row.us ? <Check className="text-accent" /> : <X className="text-white/20" />}
                      </div>
                    </td>
                    <td className="p-8 text-center">
                      <div className="flex justify-center">
                        {row.traditional ? <Check className="text-white/40" /> : <X className="text-white/20" />}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Founder Section */}
        <div className="py-24">
           <div className="grid md:grid-cols-2 gap-20 items-center max-w-5xl mx-auto">
             <div className="relative group">
               <div className="absolute inset-0 bg-accent/20 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="relative glassmorphism p-4 rounded-[40px] border-white/10 shadow-2xl">
                  <div className="aspect-[4/5] rounded-[32px] bg-white/5 flex items-center justify-center">
                    <Users size={64} className="text-white/10" />
                  </div>
                  <div className="absolute -bottom-6 -right-6 glassmorphism p-6 rounded-3xl shadow-xl">
                    <h4 className="font-black text-white">Founder</h4>
                    <p className="text-xs font-bold text-primary uppercase">Growth Strategist</p>
                  </div>
               </div>
             </div>
             <div className="space-y-8">
                <h3 className="text-4xl font-black">Driven by Results.</h3>
                <p className="text-lg text-white/60 leading-relaxed italic">
                  "Our philosophy is simple: results are the only metric that matters, but creativity is the only way to get them. We don't just manage budgets; we grow empires."
                </p>
                <div className="h-px w-20 bg-primary" />
                <div className="space-y-2">
                  <p className="font-bold text-white">Team Adz Pro</p>
                  <p className="text-sm text-white/40 uppercase tracking-widest font-black">Est. New Delhi 2025</p>
                </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}