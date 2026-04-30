"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
  Quote
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const ParticleBackground = dynamic(
  () => import('@/components/sections/ParticleBackground'),
  { ssr: false }
);

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

  const processSteps = [
    { step: "01", title: "Discovery & Audit", desc: "We analyze your brand, audience, and competitors deeply." },
    { step: "02", title: "Strategy Blueprint", desc: "Custom roadmap aligned with your revenue goals." },
    { step: "03", title: "Execute & Launch", desc: "Creative assets + campaigns deployed with precision." },
    { step: "04", title: "Optimize & Scale", desc: "Data-driven iterations for maximum ROI growth." },
  ];

  const testimonials = [
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
  ];

  return (
    <div className="page-transition">
      {/* Premium Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden mesh-gradient">
        <ParticleBackground />

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
              <Button asChild variant="outline" size="lg" className="rounded-full px-10 h-16 text-lg font-bold glassmorphism border-white/20 hover:bg-white/10">
                <Link href="/portfolio">Our Portfolio</Link>
              </Button>
            </div>

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

              <div className="absolute top-6 right-6 px-4 py-2 bg-background/80 backdrop-blur-md rounded-full border border-red-500/20 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_#ef4444]" />
                <span className="text-xs font-bold text-white uppercase tracking-tighter">🔥 3 spots left this month</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee Ticker */}
      <section className="py-12 bg-white/5 border-y border-white/5 relative overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12 items-center mx-6">
              <span className="text-primary font-black">✦</span>
              <span className="text-xl font-black uppercase tracking-widest text-white/60">₹2.4Cr Ad Spend Managed</span>
              <span className="text-primary font-black">✦</span>
              <span className="text-xl font-black uppercase tracking-widest text-white/60">500+ Campaigns Launched</span>
              <span className="text-primary font-black">✦</span>
              <span className="text-xl font-black uppercase tracking-widest text-white/60">3.8x Average ROAS</span>
              <span className="text-primary font-black">✦</span>
              <span className="text-xl font-black uppercase tracking-widest text-white/60">98% Client Retention</span>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-sm font-black text-primary uppercase tracking-[0.4em]">Industries We Serve</h2>
            <h3 className="text-5xl font-black">Dominating Diverse Markets.</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {industries.map((industry, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 rounded-[40px] glassmorphism border-white/5 flex flex-col items-center text-center space-y-6 hover:border-primary/20 transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  {industry.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{industry.name}</h4>
                  <Link href="/portfolio" className="text-xs font-black text-white/20 group-hover:text-primary uppercase tracking-widest transition-colors">View our work →</Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24 space-y-4">
            <h2 className="text-sm font-black text-primary uppercase tracking-[0.4em]">Our Process</h2>
            <h3 className="text-5xl font-black">How We Work.</h3>
          </div>
          
          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 hidden md:block" />
            <div className="grid md:grid-cols-4 gap-12 relative z-10">
              {processSteps.map((step, i) => (
                <div key={i} className="space-y-8 bg-background/50 backdrop-blur-xl p-8 rounded-[40px] border border-white/5">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-2xl font-black shadow-[0_0_30px_rgba(0,123,255,0.4)]">
                    {step.step}
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-2xl font-black uppercase">{step.title}</h4>
                    <p className="text-white/60 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Adz Pro Comparison */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-sm font-black text-primary uppercase tracking-[0.4em]">The Advantage</h2>
            <h3 className="text-5xl font-black">Why Adz Pro?</h3>
          </div>
          <div className="max-w-4xl mx-auto glassmorphism rounded-[40px] overflow-hidden shadow-2xl border-white/5">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5">
                  <th className="p-8 text-xs font-black uppercase tracking-widest text-white/40">Feature</th>
                  <th className="p-8 text-center text-primary font-black uppercase tracking-widest bg-primary/5">Adz Pro ✅</th>
                  <th className="p-8 text-center text-white/20 font-black uppercase tracking-widest">Generic ❌</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  "Dedicated Account Manager",
                  "Real-time Performance Reports",
                  "Creative + Media under one roof",
                  "Transparent Pricing",
                  "48-Hour Campaign Launch",
                  "ROI-Guaranteed Strategy"
                ].map((feature, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="p-8 font-bold text-white/80">{feature}</td>
                    <td className="p-8 text-center bg-primary/5">
                      <div className="flex justify-center">
                        <Check className="text-accent drop-shadow-[0_0_10px_#44edda]" />
                      </div>
                    </td>
                    <td className="p-8 text-center">
                      <div className="flex justify-center">
                        <X className="text-white/10" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-20 space-y-4">
            <h2 className="text-sm font-black text-primary uppercase tracking-[0.4em]">Testimonials</h2>
            <h3 className="text-5xl font-black">Client Feedback.</h3>
          </div>
          
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {testimonials.map((t, i) => (
                <CarouselItem key={i}>
                  <div className="p-4">
                    <div className="glassmorphism p-16 rounded-[48px] border-white/5 space-y-10 relative overflow-hidden">
                      <Quote className="absolute -top-6 -left-6 text-primary/10 w-40 h-40" />
                      <div className="flex gap-1">
                        {[...Array(t.stars)].map((_, s) => (
                          <Star key={s} size={20} className="fill-accent text-accent" />
                        ))}
                      </div>
                      <p className="text-3xl md:text-4xl font-black leading-tight italic relative z-10">"{t.text}"</p>
                      <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-2xl font-black text-primary">
                          {t.author[0]}
                        </div>
                        <div>
                          <p className="text-xl font-black">{t.author}</p>
                          <p className="text-sm text-white/40 uppercase tracking-widest font-black">{t.role}, {t.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-12">
              <CarouselPrevious className="relative translate-y-0 left-0" />
              <CarouselNext className="relative translate-y-0 right-0" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Logo Strip */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
          <p className="text-xs font-black text-white/20 uppercase tracking-[0.5em]">Brands That Trust Our Growth Engine</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 opacity-40 hover:opacity-100 transition-opacity">
            {["NexGen", "BrightPath", "UrbanNest", "SwiftCart", "MedFirst", "EduVista", "FinLeap", "StyleHouse"].map((brand, i) => (
              <div key={i} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all">
                <span className="text-lg font-black tracking-tighter hover:text-primary cursor-default">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
