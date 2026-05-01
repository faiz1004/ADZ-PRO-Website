"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  Users, 
  Star, 
  Zap, 
  ShoppingCart, 
  Home as HomeIcon, 
  Activity, 
  GraduationCap, 
  DollarSign, 
  Utensils, 
  Monitor, 
  ShoppingBag,
  Check,
  X,
  Quote,
  ChevronDown,
  BarChart3,
  Target,
  Palette,
  Globe
} from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const ParticleBackground = dynamic(
  () => import('@/components/sections/ParticleBackground'),
  { ssr: false }
);

const SectionDivider = () => (
  <div className="section-divider">
    <span />
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-4 text-accent-primary">
      <rect x="6" y="0" width="8.48528" height="8.48528" transform="rotate(45 6 0)" fill="currentColor"/>
    </svg>
    <span />
  </div>
);

const DashboardMockup = () => (
  <div className="relative p-6 rounded-[32px] border glassmorphism bg-surface-glass/10 shadow-strong overflow-hidden">
    <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      <span className="text-[10px] font-mono text-text-muted">adzpro.co.in/dashboard</span>
    </div>

    <div className="grid grid-cols-3 gap-4 mb-8">
      <div className="p-4 rounded-2xl glassmorphism bg-white/5 space-y-1">
        <p className="text-[10px] font-black uppercase text-text-muted">ROAS</p>
        <p className="text-2xl font-black text-accent-primary">4.2x</p>
        <p className="text-[10px] text-success font-bold">↑ 127%</p>
      </div>
      <div className="p-4 rounded-2xl glassmorphism bg-white/5 space-y-1">
        <p className="text-[10px] font-black uppercase text-text-muted">Reach</p>
        <p className="text-2xl font-black text-text-primary">2.1M</p>
        <p className="text-[10px] text-success font-bold">↑ 84%</p>
      </div>
      <div className="p-4 rounded-2xl glassmorphism bg-white/5 space-y-1">
        <p className="text-[10px] font-black uppercase text-text-muted">CPL</p>
        <p className="text-2xl font-black text-success">↓ 62%</p>
        <p className="text-[10px] text-text-muted font-bold">Optimized</p>
      </div>
    </div>

    <div className="space-y-4 mb-8">
      <div className="flex items-end gap-2 h-32 px-2">
        {[0.4, 0.7, 0.5, 0.9, 0.6, 1].map((h, i) => (
          <motion.div 
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${h * 100}%` }}
            transition={{ delay: 0.5 + (i * 0.1), duration: 0.8 }}
            className="flex-1 rounded-t-lg"
            style={{ background: 'var(--accent-primary)', opacity: h }}
          />
        ))}
      </div>
      <p className="text-center text-[10px] font-black uppercase text-text-muted tracking-widest">Monthly Ad Performance</p>
    </div>

    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/10 text-success text-[10px] font-black uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
        LIVE Campaign
      </div>
      <div className="text-[10px] font-black text-accent-primary uppercase">3 New Leads Today</div>
    </div>
  </div>
);

export default function Home() {
  const [visionText, setVisionText] = useState('Visions');
  const visions = ["Brands", "Ideas", "Startups", "Products", "Visions"];
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % visions.length;
      setVisionText(visions[i]);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const industries = [
    { name: "E-Commerce", icon: <ShoppingCart size={24} /> },
    { name: "Real Estate", icon: <HomeIcon size={24} /> },
    { name: "Healthcare", icon: <Activity size={24} /> },
    { name: "EdTech", icon: <GraduationCap size={24} /> },
    { name: "Finance", icon: <DollarSign size={24} /> },
    { name: "Hospitality", icon: <Utensils size={24} /> },
    { name: "SaaS", icon: <Monitor size={24} /> },
    { name: "D2C Brands", icon: <ShoppingBag size={24} /> },
  ];

  return (
    <div className="page-transition">
      {/* Cinematic Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden hero-mesh">
        <div className="absolute inset-0 z-0 opacity-40 dot-grid" />
        
        {/* Animated Orbs */}
        <div className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] rounded-full opacity-10 blur-[80px] animate-float" style={{ background: 'radial-gradient(circle, #1E8BB5 0%, transparent 70%)' }} />
        <div className="absolute top-[20%] right-[-50px] w-[400px] h-[400px] rounded-full opacity-10 blur-[60px] animate-float reverse" style={{ background: 'radial-gradient(circle, #2BA8D8 0%, transparent 70%)' }} />
        <div className="absolute bottom-[-100px] left-[40%] w-[500px] h-[500px] rounded-full opacity-10 blur-[70px] animate-float" style={{ background: 'radial-gradient(circle, #0D6A91 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-bold uppercase tracking-widest glassmorphism border-white/10" style={{ color: 'var(--accent-primary)' }}>
              <Sparkles className="w-4 h-4" />
              <span>Redefining Digital Growth</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-text-primary">
              Transforming <br />
              <span className="text-accent-primary inline-block min-w-[200px]">
                {visionText}<span className="animate-pulse">|</span>
              </span> <br />
              Into Reality.
            </h1>
            
            <p className="text-xl max-w-lg leading-relaxed font-medium text-text-secondary">
              We engineer high-performance sales funnels and creative brand identities for the next generation of digital-first companies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Button asChild size="lg" className="rounded-full px-10 h-16 text-lg font-bold group relative overflow-hidden" style={{ background: 'var(--accent-primary)', color: '#FFFFFF', boxShadow: '0 0 20px var(--accent-glow)' }}>
                <Link href="/contact">
                  Start Scaling Now
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-10 h-16 text-lg font-bold border glassmorphism hover:bg-accent-light transition-all text-text-primary border-border">
                <Link href="/portfolio">Our Portfolio</Link>
              </Button>
            </div>

            <div className="flex items-center gap-12 pt-12">
              {[
                { label: "Active Clients", value: "150+" },
                { label: "Retention Rate", value: "98%" },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-4xl font-black text-text-primary">{stat.value}</p>
                  <p className="text-sm font-bold uppercase tracking-widest text-text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <DashboardMockup />
            
            {/* Floating Highlights */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -top-10 -right-10 p-6 rounded-3xl shadow-strong glassmorphism border-border bg-surface-glass/20 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_#ef4444]" />
                <p className="text-xs font-black uppercase text-text-primary tracking-widest">🔥 3 spots left this month</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, delay: 1 }}
              className="absolute -bottom-10 -left-10 p-6 rounded-3xl shadow-strong glassmorphism border-border bg-surface-glass/20 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-white" style={{ background: `var(--accent-primary)`, opacity: 1 - (i*0.2) }} />)}
                </div>
                <p className="text-xs font-black uppercase text-text-primary tracking-widest">500+ Brands Scaled</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-text-muted">Scroll to explore</span>
          <ChevronDown className="text-accent-primary animate-bounce" size={24} />
        </motion.div>
      </section>

      {/* Marquee Ticker */}
      <section className="py-12 border-y relative overflow-hidden bg-ticker-bg border-border">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12 items-center mx-6">
              <span className="font-black text-accent-primary">✦</span>
              <span className="text-xl font-black uppercase tracking-widest text-text-primary"><span className="text-accent-primary">₹2.4Cr</span> Ad Spend Managed</span>
              <span className="font-black text-accent-primary">✦</span>
              <span className="text-xl font-black uppercase tracking-widest text-text-primary"><span className="text-accent-primary">500+</span> Campaigns Launched</span>
              <span className="font-black text-accent-primary">✦</span>
              <span className="text-xl font-black uppercase tracking-widest text-text-primary"><span className="text-accent-primary">3.8x</span> Average ROAS</span>
              <span className="font-black text-accent-primary">✦</span>
              <span className="text-xl font-black uppercase tracking-widest text-text-primary"><span className="text-accent-primary">98%</span> Client Retention</span>
              <span className="font-black text-accent-primary">✦</span>
              <span className="text-xl font-black uppercase tracking-widest text-text-primary"><span className="text-accent-primary">12+</span> Industries Served</span>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20 space-y-4"
          >
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-accent-primary">Industries We Serve</h2>
            <h3 className="text-5xl font-black text-text-primary">Dominating Diverse Markets.</h3>
            <div className="w-16 h-[3px] bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full mx-auto mt-4 shadow-accent-glow" />
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {industries.map((industry, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -10 }}
                className="p-10 rounded-[40px] flex flex-col items-center text-center space-y-6 transition-all group glassmorphism border-border interactive-card"
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 bg-accent-light text-accent-primary">
                  {industry.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-text-primary">{industry.name}</h4>
                  <Link href="/portfolio" className="text-xs font-black uppercase tracking-widest transition-colors text-text-muted hover:text-accent-primary">View our work →</Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Process Section */}
      <section className="py-32 relative overflow-hidden bg-section-alt">
        <div className="absolute inset-0 dot-grid opacity-5" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24 space-y-4"
          >
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-accent-primary">Our Process</h2>
            <h3 className="text-5xl font-black text-text-primary">How We Work.</h3>
            <div className="w-16 h-[3px] bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full mx-auto mt-4 shadow-accent-glow" />
          </motion.div>
          
          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-px hidden md:block opacity-40" style={{ background: 'var(--accent-primary)' }} />
            <div className="grid md:grid-cols-4 gap-12 relative z-10">
              {[
                { step: "01", title: "Discovery & Audit", desc: "We analyze your brand, audience, and competitors deeply." },
                { step: "02", title: "Strategy Blueprint", desc: "Custom roadmap aligned with your revenue goals." },
                { step: "03", title: "Execute & Launch", desc: "Creative assets + campaigns deployed with precision." },
                { step: "04", title: "Optimize & Scale", desc: "Data-driven iterations for maximum ROI growth." },
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="space-y-8 p-8 rounded-[40px] border glassmorphism bg-surface/50 backdrop-blur-xl border-border"
                >
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-black shadow-lg text-white"
                    style={{ background: 'var(--accent-primary)', boxShadow: '0 0 30px var(--accent-glow)' }}
                  >
                    {step.step}
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-2xl font-black uppercase text-text-primary">{step.title}</h4>
                    <p className="leading-relaxed text-text-secondary">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Why Adz Pro Comparison */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-accent-primary">The Advantage</h2>
            <h3 className="text-5xl font-black text-text-primary">Why Adz Pro?</h3>
            <div className="w-16 h-[3px] bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full mx-auto mt-4 shadow-accent-glow" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto rounded-[40px] overflow-hidden shadow-strong border glassmorphism border-border"
          >
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-accent-primary">
                  <th className="p-8 text-xs font-black uppercase tracking-widest text-white">Feature</th>
                  <th className="p-8 text-center font-black uppercase tracking-widest text-white">Adz Pro ✅</th>
                  <th className="p-8 text-center font-black uppercase tracking-widest text-white/60">Generic ❌</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  "Dedicated Account Manager",
                  "Real-time Performance Reports",
                  "Creative + Media under one roof",
                  "Transparent Pricing",
                  "48-Hour Campaign Launch",
                  "ROI-Guaranteed Strategy"
                ].map((feature, i) => (
                  <tr key={i} className="transition-colors hover:bg-accent-light/5" style={{ background: i % 2 === 0 ? 'var(--surface)' : 'var(--background-secondary)' }}>
                    <td className="p-8 font-bold text-text-primary">{feature}</td>
                    <td className="p-8 text-center bg-accent-light/20">
                      <div className="flex justify-center">
                        <Check className="text-success shadow-success" />
                      </div>
                    </td>
                    <td className="p-8 text-center opacity-40">
                      <div className="flex justify-center">
                        <X className="text-danger" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-section-alt relative">
        <div className="max-w-7xl mx-auto px-6">
           <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20 space-y-4"
          >
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-accent-primary">Testimonials</h2>
            <h3 className="text-5xl font-black text-text-primary">Client Feedback.</h3>
            <div className="w-16 h-[3px] bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full mx-auto mt-4 shadow-accent-glow" />
          </motion.div>
          
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {[
                {
                  stars: 5,
                  text: "Adz Pro transformed our e-commerce ROAS from 1.2x to 4.1x in just 60 days. Exceptional team!",
                  author: "Rahul M.",
                  role: "Founder, D2C Fashion Brand",
                  location: "Delhi"
                },
                {
                  stars: 5,
                  text: "Their brand strategy gave us a completely new identity. Our lead cost dropped by 62%.",
                  author: "Priya S.",
                  role: "Marketing Head, EdTech Startup",
                  location: "Bangalore"
                },
                {
                  stars: 5,
                  text: "Within 3 months, our organic reach grew 5x. Best agency decision we ever made.",
                  author: "Amit K.",
                  role: "CEO, Real Estate Firm",
                  location: "Gurgaon"
                }
              ].map((t, i) => (
                <CarouselItem key={i}>
                  <div className="p-4">
                    <div className="p-12 md:p-16 rounded-[48px] space-y-10 relative overflow-hidden glassmorphism bg-surface/80 border-border">
                      <Quote className="absolute -top-6 -left-6 w-40 h-40 opacity-5 text-accent-primary" />
                      <div className="flex gap-1">
                        {[...Array(t.stars)].map((_, s) => (
                          <Star key={s} size={20} className="fill-accent-primary text-accent-primary" />
                        ))}
                      </div>
                      <p className="text-3xl md:text-4xl font-black leading-tight italic relative z-10 text-text-primary">"{t.text}"</p>
                      <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-black bg-accent-light text-accent-primary">
                          {t.author[0]}
                        </div>
                        <div>
                          <p className="text-xl font-black text-text-primary">{t.author}</p>
                          <p className="text-sm uppercase tracking-widest font-black text-text-muted">{t.role}, {t.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-12">
              <CarouselPrevious className="relative translate-y-0 left-0 border-border" />
              <CarouselNext className="relative translate-y-0 right-0 border-border" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Logo Strip */}
      <section className="py-24 border-t border-border bg-background">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
          <p className="text-xs font-black uppercase tracking-[0.5em] text-text-muted">Brands That Trust Our Growth Engine</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 opacity-40 hover:opacity-100 transition-opacity">
            {["NexGen", "BrightPath", "UrbanNest", "SwiftCart", "MedFirst", "EduVista", "FinLeap", "StyleHouse"].map((brand, i) => (
              <div key={i} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-default">
                <span className="text-lg font-black tracking-tighter text-text-primary hover:text-accent-primary">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
