"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, TrendingUp, Users, Star, Zap, ChevronDown } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const [visionText, setVisionText] = useState('Visions');
  const visions = ["Brands", "Ideas", "Startups", "Products", "Visions"];
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % visions.length;
      setVisionText(visions[i]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { label: "Active Clients", value: 150, suffix: "+", icon: <Users size={20} /> },
    { label: "Ad Spend Managed", value: 2, suffix: "M+", prefix: "$", icon: <TrendingUp size={20} /> },
    { label: "Retention Rate", value: 98, suffix: "%", icon: <Zap size={20} /> },
    { label: "Global Rating", value: 4.9, suffix: "/5", icon: <Star size={20} className="text-accent" /> },
  ];

  const industries = ["E-Commerce", "Real Estate", "HealthTech", "EdTech", "SaaS", "D2C Brands", "Fintech", "Retail", "Luxury"];

  return (
    <div className="page-transition">
      {/* Premium Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden mesh-gradient">
        {/* Animated Particle Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
           {Array.from({ length: 30 }).map((_, i) => (
             <motion.div
               key={i}
               initial={{ x: Math.random() * 2000, y: Math.random() * 2000 }}
               animate={{ 
                 x: [Math.random() * 2000, Math.random() * 2000],
                 y: [Math.random() * 2000, Math.random() * 2000]
               }}
               transition={{ duration: 20 + Math.random() * 40, repeat: Infinity, ease: "linear" }}
               className="absolute w-1 h-1 bg-white rounded-full blur-[1px]"
             />
           ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glassmorphism border-primary/20 text-primary text-sm font-bold uppercase tracking-widest"
            >
              <Sparkles className="w-4 h-4" />
              <span>Redefining Digital Growth</span>
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9]">
              Transforming <br />
              <span className="text-gradient inline-block min-w-[200px]">
                {visionText}<span className="animate-pulse">|</span>
              </span> <br />
              Into Reality.
            </h1>
            
            <p className="text-xl text-white/60 max-w-lg leading-relaxed font-medium">
              We engineer high-performance sales funnels and creative brand identities for the next generation of digital-first companies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Button asChild size="lg" className="rounded-full px-10 h-16 text-lg font-bold group shadow-2xl shadow-primary/40">
                <Link href="/contact">
                  Start Scaling Now
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-10 h-16 text-lg font-bold glassmorphism border-white/20 hover:bg-white/10">
                <Link href="/portfolio">Our Portfolio</Link>
              </Button>
            </div>

            {/* Scroll Indicator */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="pt-12 hidden md:block"
            >
              <div className="w-8 h-12 rounded-full border-2 border-white/10 flex justify-center p-2">
                <div className="w-1 h-2 bg-primary rounded-full" />
              </div>
            </motion.div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 bg-primary/20 blur-[120px] rounded-full animate-pulse" />
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative glassmorphism p-6 rounded-[40px] border-white/20"
            >
              <Image 
                src={PlaceHolderImages.find(img => img.id === 'portfolio-1')?.imageUrl || ''}
                alt="Adz Pro Performance"
                width={800}
                height={600}
                className="rounded-[32px] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
              
              {/* ROI Stat Card */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-10 -left-10 glassmorphism p-8 rounded-3xl shadow-2xl border-primary/30 max-w-[220px]"
              >
                <div className="flex items-center gap-2 text-accent mb-2">
                  <TrendingUp size={24} />
                  <span className="text-xs font-black uppercase tracking-widest">Real Results</span>
                </div>
                <h4 className="text-4xl font-black">+127%</h4>
                <p className="text-sm font-bold text-white/60">Average Client ROI</p>
              </motion.div>

              {/* Urgency Badge */}
              <div className="absolute top-6 right-6 px-4 py-2 bg-background/80 backdrop-blur-md rounded-full border border-red-500/20 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_#ef4444]" />
                <span className="text-xs font-bold text-white uppercase tracking-tighter">🔥 3 spots left this month</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee Trust Bar */}
      <section className="py-12 bg-white/5 border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
          <p className="text-xs font-black text-white/40 uppercase tracking-[0.4em]">Trusted by 500+ brands across 12 industries</p>
        </div>
        <div className="flex animate-marquee whitespace-nowrap">
          {[...industries, ...industries].map((industry, i) => (
            <div key={i} className="mx-8 px-8 py-3 glassmorphism rounded-full text-white/60 font-black text-sm uppercase tracking-widest border-white/5 hover:text-primary hover:border-primary/20 transition-all cursor-default">
              {industry}
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[40px] glassmorphism border-white/5 flex flex-col items-center text-center space-y-4 hover:border-primary/20 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <h3 className="text-5xl font-black text-white">
                {stat.prefix}{stat.value}{stat.suffix}
              </h3>
              <p className="text-sm font-bold text-white/40 uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Preview */}
      <section className="py-32 relative overflow-hidden bg-card/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-sm font-black text-primary uppercase tracking-[0.4em]">Case Study</h2>
              <h3 className="text-5xl md:text-6xl font-black leading-tight">Scaling NexGen E-Commerce by 200%.</h3>
              <p className="text-xl text-white/60 leading-relaxed">
                Discover how our data-driven performance advertising strategy transformed a stagnant online retailer into a market leader.
              </p>
              <div className="flex items-center gap-12 py-6 border-y border-white/5">
                <div>
                  <p className="text-3xl font-black text-accent">3.2x</p>
                  <p className="text-xs font-bold text-white/40 uppercase">ROAS Increase</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-primary">45%</p>
                  <p className="text-xs font-bold text-white/40 uppercase">CPL Reduction</p>
                </div>
              </div>
              <Button asChild size="lg" className="rounded-full px-10 h-16 group">
                <Link href="/portfolio">
                  Explore Results
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full opacity-50" />
              <div className="relative rounded-[40px] overflow-hidden glassmorphism p-2 shadow-2xl">
                <Image 
                  src={PlaceHolderImages.find(img => img.id === 'portfolio-1')?.imageUrl || ''}
                  alt="Case Study"
                  width={800}
                  height={600}
                  className="rounded-[36px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}