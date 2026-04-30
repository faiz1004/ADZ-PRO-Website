"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, CheckCircle, Quote } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function PortfolioPage() {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Performance Ads', 'Branding', 'Social Media', 'E-Commerce'];

  const cases = [
    {
      title: "NexGen E-Commerce Suite",
      category: "E-Commerce",
      image: PlaceHolderImages.find(img => img.id === 'portfolio-1')?.imageUrl || '',
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
      image: PlaceHolderImages.find(img => img.id === 'portfolio-2')?.imageUrl || '',
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
      image: PlaceHolderImages.find(img => img.id === 'portfolio-3')?.imageUrl || '',
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
      image: PlaceHolderImages.find(img => img.id === 'portfolio-4')?.imageUrl || '',
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
          <h2 className="text-sm font-black text-primary uppercase tracking-[0.4em]">Our Work</h2>
          <h1 className="text-6xl md:text-8xl font-black">Success <span className="text-gradient">Stories</span>.</h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
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
                ? "bg-primary text-white border-primary shadow-xl shadow-primary/20" 
                : "glassmorphism border-white/5 text-white/40 hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 gap-40">
          <AnimatePresence mode="popLayout">
            {filteredCases.map((c, i) => (
              <motion.div 
                key={c.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group grid lg:grid-cols-12 gap-16 items-center"
              >
                {/* Media Side */}
                <div className={`lg:col-span-7 relative group ${i % 2 !== 0 ? 'lg:order-last' : ''}`}>
                  <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-1000" />
                  <div className="relative rounded-[40px] overflow-hidden glassmorphism p-2 shadow-2xl border-white/5">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-[32px]">
                      <Image 
                        src={c.image}
                        alt={c.title}
                        fill
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110"
                      />
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-background/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm">
                        <Button className="rounded-full px-12 h-16 text-lg font-black shadow-2xl">
                          View Case Study <ArrowUpRight className="ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  {/* Results Highlights */}
                  <div className="absolute -bottom-6 left-12 right-12 flex justify-between gap-4">
                    {c.stats.map((s, idx) => (
                      <div key={idx} className="px-6 py-3 glassmorphism rounded-2xl border-primary/20 text-xs font-black uppercase tracking-widest text-accent shadow-2xl">
                        {s}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content Side */}
                <div className="lg:col-span-5 space-y-10">
                  <div className="space-y-4">
                    <span className="text-sm font-black text-primary uppercase tracking-[0.4em]">{c.category}</span>
                    <h3 className="text-5xl font-black text-white group-hover:text-primary transition-colors duration-500">{c.title}</h3>
                  </div>

                  <div className="space-y-8">
                    <div className="space-y-2">
                      <p className="text-xs font-black text-white/20 uppercase tracking-[0.2em]">The Challenge</p>
                      <p className="text-lg text-white/60 leading-snug">{c.challenge}</p>
                    </div>
                    <div className="p-8 rounded-[32px] bg-primary/5 border border-primary/10 space-y-3 shadow-xl">
                      <div className="flex items-center gap-2 text-primary">
                        <CheckCircle size={20} />
                        <span className="text-xs font-black uppercase tracking-widest">Impact Delivered</span>
                      </div>
                      <p className="text-3xl font-black text-white">{c.results}</p>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="relative p-10 rounded-[32px] glassmorphism border-white/5 italic text-white/60 leading-relaxed shadow-xl">
                    <Quote className="absolute -top-4 -left-4 text-primary w-12 h-12 opacity-20" />
                    <p className="relative z-10">"{c.testimonial}"</p>
                    <div className="mt-4 h-px w-12 bg-primary/30" />
                    <p className="mt-4 text-xs font-black uppercase tracking-widest text-white/40">CMO, {c.title.split(' ')[0]}</p>
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