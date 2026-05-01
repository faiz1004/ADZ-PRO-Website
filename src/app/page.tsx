"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Sparkles, 
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
  ChevronDown
} from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import { CampaignDashboard } from '@/components/CampaignDashboard';

const ParticleBackground = dynamic(
  () => import('@/components/sections/ParticleBackground'),
  { ssr: false }
);

const SectionDivider = () => (
  <div className="section-divider">
    <span />
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-4 text-accent-primary shrink-0">
      <rect x="6" y="0" width="8.48528" height="8.48528" transform="rotate(45 6 0)" fill="currentColor"/>
    </svg>
    <span />
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
      {/* Guaranteed Visible Hero Section */}
      <section 
        className="relative min-h-screen flex items-center overflow-hidden hero-mesh"
        style={{ background: 'var(--hero-gradient)' }}
      >
        {/* Background Layers — Behind content */}
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
          <div className="absolute inset-0 opacity-20 dot-grid" />
          <ParticleBackground />
          
          {/* Glowing Orbs */}
          <div style={{
            position: 'absolute',
            top: '-100px', left: '-100px',
            width: 'min(500px, 100vw)', height: 'min(500px, 100vw)',
            background: 'radial-gradient(circle, rgba(30,139,181,0.15) 0%, transparent 70%)',
            filter: 'blur(60px)',
            borderRadius: '50%'
          }} className="animate-float" />
          <div style={{
            position: 'absolute',
            bottom: '-80px', right: '-80px',
            width: 'min(400px, 100vw)', height: 'min(400px, 100vw)',
            background: 'radial-gradient(circle, rgba(43,168,216,0.10) 0%, transparent 70%)',
            filter: 'blur(50px)',
            borderRadius: '50%'
          }} className="animate-float reverse hidden lg:block" />
        </div>

        {/* Main Content — Above background */}
        <div 
          className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16"
          style={{ zIndex: 10 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            
            {/* Left Column — Text */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-6 text-center lg:text-left items-center lg:items-start"
            >
              {/* Badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'var(--accent-light)',
                border: '1px solid var(--border)',
                borderRadius: '100px',
                padding: '6px 16px',
                width: 'fit-content'
              }}>
                <Sparkles className="w-3 h-3 text-accent-primary" />
                <span style={{ 
                  fontSize: '11px',
                  color: 'var(--accent-primary)',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase'
                }}>
                  Redefining Digital Growth
                </span>
              </div>

              {/* H1 */}
              <h1 style={{
                fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                fontWeight: 900,
                lineHeight: 1.05,
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em'
              }} className="tracking-tighter">
                Transforming{' '}
                <span style={{ color: 'var(--accent-primary)' }}>
                  {visionText}<span className="animate-pulse">|</span>
                </span>
                <br /> Into Reality.
              </h1>

              {/* Subtext */}
              <p style={{
                fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '540px'
              }} className="font-medium">
                We engineer high-performance sales funnels and creative brand identities for the next generation of digital-first companies.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button asChild size="lg" className="rounded-full px-8 h-16 text-lg font-bold group relative overflow-hidden w-full sm:w-auto" style={{ background: 'var(--accent-primary)', color: '#FFFFFF', boxShadow: '0 0 24px var(--accent-glow)' }}>
                  <Link href="/contact">
                    Start Scaling Now
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-16 text-lg font-bold border glassmorphism hover:bg-accent-light transition-all text-text-primary border-border w-full sm:w-auto">
                  <Link href="/portfolio">Our Portfolio</Link>
                </Button>
              </div>

              {/* Stats Row */}
              <div className="flex items-center justify-center lg:justify-start gap-8 md:gap-12 pt-8">
                {[
                  { label: "Active Clients", value: "150+" },
                  { label: "Retention Rate", value: "98%" },
                  { label: "Avg ROAS", value: "4.2x" },
                ].map((stat, i) => (
                  <div key={i} className="text-center lg:text-left">
                    <p style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 900, color: 'var(--text-primary)' }}>{stat.value}</p>
                    <p style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column — Dashboard */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative px-2 md:px-0"
            >
              <CampaignDashboard />
              
              {/* Scroll Indicator */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 md:opacity-60 lg:hidden"
              >
                <ChevronDown className="text-accent-primary animate-bounce" size={24} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee Ticker */}
      <section className="py-6 md:py-12 border-y relative overflow-hidden bg-ticker-bg border-border">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-8 md:gap-12 items-center mx-4 md:mx-6">
              <span className="font-black text-accent-primary">✦</span>
              <span className="text-sm md:text-xl font-black uppercase tracking-widest text-text-primary"><span className="text-accent-primary">₹2.4Cr</span> Ad Spend</span>
              <span className="font-black text-accent-primary">✦</span>
              <span className="text-sm md:text-xl font-black uppercase tracking-widest text-text-primary"><span className="text-accent-primary">500+</span> Campaigns</span>
              <span className="font-black text-accent-primary">✦</span>
              <span className="text-sm md:text-xl font-black uppercase tracking-widest text-text-primary"><span className="text-accent-primary">3.8x</span> ROAS</span>
              <span className="font-black text-accent-primary">✦</span>
              <span className="text-sm md:text-xl font-black uppercase tracking-widest text-text-primary"><span className="text-accent-primary">98%</span> Retention</span>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 md:py-32 bg-background">
        <div className="container-responsive">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-20 space-y-4"
          >
            <h2 className="text-[10px] md:text-sm font-black uppercase tracking-[0.4em] text-accent-primary">Industries We Serve</h2>
            <h3 className="section-title font-black text-text-primary px-4">Dominating Diverse Markets.</h3>
            <div className="w-12 md:w-16 h-[3px] bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full mx-auto mt-4 shadow-accent-glow" />
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {industries.map((industry, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -8 }}
                className="p-6 md:p-10 rounded-[24px] md:rounded-[40px] flex flex-col items-center text-center space-y-4 md:space-y-6 transition-all group glassmorphism border-border interactive-card"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 bg-accent-light text-accent-primary shrink-0">
                  {industry.icon}
                </div>
                <div>
                  <h4 className="text-sm md:text-xl font-bold mb-1 md:mb-2 text-text-primary">{industry.name}</h4>
                  <Link href="/portfolio" className="text-[8px] md:text-xs font-black uppercase tracking-widest transition-colors text-text-muted hover:text-accent-primary">View work →</Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Process Section */}
      <section className="py-16 md:py-32 relative overflow-hidden bg-section-alt">
        <div className="absolute inset-0 dot-grid opacity-5" />
        <div className="container-responsive relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-24 space-y-4"
          >
            <h2 className="text-[10px] md:text-sm font-black uppercase tracking-[0.4em] text-accent-primary">Our Process</h2>
            <h3 className="section-title font-black text-text-primary px-4">How We Work.</h3>
            <div className="w-12 md:w-16 h-[3px] bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full mx-auto mt-4 shadow-accent-glow" />
          </motion.div>
          
          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-12 relative z-10">
              {[
                { step: "01", title: "Discovery", desc: "We analyze your brand, audience, and competitors deeply." },
                { step: "02", title: "Strategy", desc: "Custom roadmap aligned with your revenue goals." },
                { step: "03", title: "Execution", desc: "Creative assets + campaigns deployed with precision." },
                { step: "04", title: "Scaling", desc: "Data-driven iterations for maximum ROI growth." },
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex lg:flex-col gap-6 lg:gap-8 p-6 md:p-8 rounded-[24px] md:rounded-[40px] border glassmorphism bg-surface/50 backdrop-blur-xl border-border text-left lg:text-left"
                >
                  <div 
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-xl md:text-2xl font-black shadow-lg text-white shrink-0"
                    style={{ background: 'var(--accent-primary)', boxShadow: '0 0 30px var(--accent-glow)' }}
                  >
                    {step.step}
                  </div>
                  <div className="space-y-2 md:space-y-4">
                    <h4 className="text-lg md:text-2xl font-black uppercase text-text-primary">{step.title}</h4>
                    <p className="text-sm md:text-lg leading-relaxed text-text-secondary">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Why Adz Pro Comparison */}
      <section className="py-16 md:py-32 bg-background overflow-hidden">
        <div className="container-responsive">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16 space-y-4"
          >
            <h2 className="text-[10px] md:text-sm font-black uppercase tracking-[0.4em] text-accent-primary">The Advantage</h2>
            <h3 className="section-title font-black text-text-primary px-4">Why Adz Pro?</h3>
            <div className="w-12 md:w-16 h-[3px] bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full mx-auto mt-4 shadow-accent-glow" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto rounded-[24px] md:rounded-[40px] overflow-x-auto shadow-strong border glassmorphism border-border scrollbar-hide"
          >
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-accent-primary">
                  <th className="p-5 md:p-8 text-[9px] md:text-xs font-black uppercase tracking-widest text-white">Feature</th>
                  <th className="p-5 md:p-8 text-center text-[9px] md:text-xs font-black uppercase tracking-widest text-white">Adz Pro ✅</th>
                  <th className="p-5 md:p-8 text-center text-[9px] md:text-xs font-black uppercase tracking-widest text-white/60">Others ❌</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  "Dedicated Manager",
                  "Real-time Reports",
                  "Creative + Media",
                  "Transparent Pricing",
                  "48-Hour Launch",
                  "ROI-Guaranteed"
                ].map((feature, i) => (
                  <tr key={i} className="transition-colors hover:bg-accent-light/5" style={{ background: i % 2 === 0 ? 'var(--surface)' : 'var(--background-secondary)' }}>
                    <td className="p-5 md:p-8 font-bold text-sm md:text-base text-text-primary">{feature}</td>
                    <td className="p-5 md:p-8 text-center bg-accent-light/20">
                      <div className="flex justify-center">
                        <Check className="text-success shadow-success w-5 h-5 md:w-6 md:h-6" />
                      </div>
                    </td>
                    <td className="p-5 md:p-8 text-center opacity-40">
                      <div className="flex justify-center">
                        <X className="text-danger w-5 h-5 md:w-6 md:h-6" />
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
      <section className="py-16 md:py-32 bg-section-alt relative">
        <div className="container-responsive">
           <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-20 space-y-4"
          >
            <h2 className="text-[10px] md:text-sm font-black uppercase tracking-[0.4em] text-accent-primary">Testimonials</h2>
            <h3 className="section-title font-black text-text-primary px-4">Client Feedback.</h3>
            <div className="w-12 md:w-16 h-[3px] bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full mx-auto mt-4 shadow-accent-glow" />
          </motion.div>
          
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {[
                {
                  stars: 5,
                  text: "Adz Pro transformed our e-commerce ROAS from 1.2x to 4.1x in just 60 days. Exceptional team!",
                  author: "Rahul M.",
                  role: "Founder, D2C Fashion",
                  location: "Delhi"
                },
                {
                  stars: 5,
                  text: "Their brand strategy gave us a completely new identity. Our lead cost dropped by 62%.",
                  author: "Priya S.",
                  role: "Marketing Head, EdTech",
                  location: "Bangalore"
                },
                {
                  stars: 5,
                  text: "Within 3 months, our organic reach grew 5x. Best agency decision we ever made.",
                  author: "Amit K.",
                  role: "CEO, Real Estate",
                  location: "Gurgaon"
                }
              ].map((t, i) => (
                <CarouselItem key={i}>
                  <div className="p-2 md:p-4">
                    <div className="p-8 md:p-16 rounded-[32px] md:rounded-[48px] space-y-6 md:space-y-10 relative overflow-hidden glassmorphism bg-surface/80 border-border">
                      <Quote className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-24 h-24 md:w-40 md:h-40 opacity-5 text-accent-primary" />
                      <div className="flex gap-1">
                        {[...Array(t.stars)].map((_, s) => (
                          <Star key={s} size={16} className="fill-accent-primary text-accent-primary md:size-5" />
                        ))}
                      </div>
                      <p className="text-xl md:text-4xl font-black leading-tight italic relative z-10 text-text-primary">"{t.text}"</p>
                      <div className="flex items-center gap-4 md:gap-6">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-xl md:text-2xl font-black bg-accent-light text-accent-primary shrink-0">
                          {t.author[0]}
                        </div>
                        <div>
                          <p className="text-lg md:text-xl font-black text-text-primary">{t.author}</p>
                          <p className="text-[10px] md:text-sm uppercase tracking-widest font-black text-text-muted">{t.role}, {t.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8 md:mt-12">
              <CarouselPrevious className="relative translate-y-0 left-0 border-border min-w-[44px] min-h-[44px]" />
              <CarouselNext className="relative translate-y-0 right-0 border-border min-w-[44px] min-h-[44px]" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Logo Strip */}
      <section className="py-16 md:py-24 border-t border-border bg-background">
        <div className="container-responsive text-center space-y-8 md:space-y-12">
          <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-text-muted">Brands That Trust Our Growth Engine</p>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6 md:gap-8 opacity-40 hover:opacity-100 transition-opacity">
            {["NexGen", "BrightPath", "UrbanNest", "SwiftCart", "MedFirst", "EduVista", "FinLeap", "StyleHouse"].map((brand, i) => (
              <div key={i} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-default">
                <span className="text-sm md:text-lg font-black tracking-tighter text-text-primary hover:text-accent-primary">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}