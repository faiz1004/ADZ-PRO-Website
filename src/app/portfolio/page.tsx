"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, CheckCircle, Quote } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useTheme } from 'next-themes';

export default function PortfolioPage() {
  const [filter, setFilter] = useState('All');
  const { resolvedTheme } = useTheme();
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
          <h2 className="text-sm font-black uppercase tracking-[0.4em]" style={{ color: 'var(--accent-primary)' }}>Our Work</h2>
          <h1 className="text-6xl md:text-8xl font-black" style={{ color: 'var(--text-primary)' }}>Success <span className="text-gradient">Stories</span>.</h1>
          <p className="text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
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
                ? "shadow-xl" 
                : "hover:text-primary"
              }`}
              style={{ 
                backgroundColor: filter === f ? 'var(--accent-primary)' : 'var(--surface)',
                color: filter === f ? '#FFFFFF' : 'var(--text-muted)',
                borderColor: filter === f ? 'var(--accent-primary)' : 'var(--border)'
              }}
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
                  <div className="absolute inset-0 blur-[100px] rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-1000" style={{ background: 'var(--accent-primary)' }} />
                  <div className="relative rounded-[40px] overflow-hidden p-2 shadow-2xl glassmorphism">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-[32px]">
                      <Image 
                        src={c.image}
                        alt={c.title}
                        fill
                        className="object-cover transition-all duration-1000 scale-100 group-hover:scale-110"
                      />
                      {/* Hover Overlay */}
                      <div 
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm"
                        style={{ background: resolvedTheme === 'dark' ? 'rgba(7, 14, 26, 0.85)' : 'rgba(255, 255, 255, 0.92)' }}
                      >
                        <Button className="rounded-full px-12 h-16 text-lg font-black shadow-2xl" style={{ background: 'var(--accent-primary)', color: 'var(--text-inverse)' }}>
                          View Case Study <ArrowUpRight className="ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  {/* Results Highlights */}
                  <div className="absolute -bottom-6 left-12 right-12 flex justify-between gap-4">
                    {c.stats.map((s, idx) => (
                      <div 
                        key={idx} 
                        className="px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest shadow-2xl border"
                        style={{ background: 'var(--accent-light)', borderColor: 'rgba(30, 139, 181, 0.3)', color: 'var(--accent-primary)' }}
                      >
                        {s}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content Side */}
                <div className="lg:col-span-5 space-y-10">
                  <div className="space-y-4">
                    <span className="text-sm font-black uppercase tracking-[0.4em]" style={{ color: 'var(--accent-primary)' }}>{c.category}</span>
                    <h3 className="text-5xl font-black transition-colors duration-500" style={{ color: 'var(--text-primary)' }}>{c.title}</h3>
                  </div>

                  <div className="space-y-8">
                    <div className="space-y-2">
                      <p className="text-[0.7rem] font-black uppercase tracking-[0.2em]" style={{ color: 'var(--accent-primary)' }}>THE CHALLENGE</p>
                      <p className="text-lg leading-snug" style={{ color: 'var(--text-secondary)' }}>{c.challenge}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-[0.7rem] font-black uppercase tracking-[0.2em]" style={{ color: 'var(--accent-primary)' }}>OUR SOLUTION</p>
                      <p className="text-lg leading-snug" style={{ color: 'var(--text-secondary)' }}>{c.solution}</p>
                    </div>
                    <div className="p-8 rounded-[32px] border space-y-3 shadow-xl" style={{ background: 'var(--accent-light)', borderColor: 'var(--border)' }}>
                      <div className="flex items-center gap-2" style={{ color: 'var(--accent-primary)' }}>
                        <CheckCircle size={20} />
                        <span className="text-xs font-black uppercase tracking-widest">Impact Delivered</span>
                      </div>
                      <p className="text-3xl font-black" style={{ color: 'var(--text-primary)' }}>{c.results}</p>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="relative p-10 rounded-[32px] italic leading-relaxed shadow-xl border-l-[3px] glassmorphism" style={{ borderLeftColor: 'var(--accent-primary)' }}>
                    <Quote className="absolute -top-4 -left-4 w-12 h-12 opacity-10" style={{ color: 'var(--accent-primary)' }} />
                    <p className="relative z-10" style={{ color: 'var(--text-secondary)' }}>"{c.testimonial}"</p>
                    <div className="mt-4 h-px w-12" style={{ background: 'var(--border)' }} />
                    <p className="mt-4 text-xs font-black uppercase tracking-widest" style={{ color: 'var(--text-primary)' }}>CMO, {c.title.split(' ')[0]}</p>
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