"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Rocket, Mail, MapPin, Linkedin, Facebook, ArrowRight, Loader2, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { db } from '@/app/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';

export function Footer() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [year, setYear] = useState(2025); // Default to founding year
  const { toast } = useToast();

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await addDoc(collection(db, "newsletter_subscribers"), {
        email,
        timestamp: serverTimestamp()
      });
      setSubscribed(true);
      toast({ title: "Subscribed!", description: "You're on the list." });
      setEmail('');
    } catch (error) {
      toast({ variant: "destructive", title: "Error", description: "Could not subscribe." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="relative bg-background pt-24 pb-12 overflow-hidden">
      {/* Animated Top Border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-primary via-accent to-primary animate-shimmer bg-[length:200%_auto]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Rocket className="text-white w-5 h-5" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white">ADZ PRO</span>
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              We engineer high-performance sales funnels and creative brand identities for the next generation of digital-first companies.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/adzpro/" },
                { icon: <Facebook size={20} />, href: "https://www.facebook.com/people/Adz-Pro/61564387431825/" }
              ].map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl glassmorphism flex items-center justify-center text-white/60 hover:bg-primary hover:text-white transition-all">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-lg font-bold text-white uppercase tracking-widest">Platform</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" /> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-lg font-bold text-white uppercase tracking-widest">Services</h4>
            <ul className="space-y-4">
              {['Performance Ads', 'Brand Strategy', 'Creative Content', 'Digital Growth'].map((item) => (
                <li key={item} className="text-muted-foreground hover:text-white transition-colors cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-8">
            <h4 className="text-lg font-bold text-white uppercase tracking-widest">Stay Updated</h4>
            <p className="text-sm text-muted-foreground">Get marketing insights and ROI tips.</p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative group">
                <Input 
                  type="email" 
                  placeholder="Enter email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/5 border-white/10 h-14 rounded-xl pr-12 focus:border-primary/50"
                />
                <button type="submit" disabled={loading} className="absolute right-2 top-2 w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-primary/80 transition-colors">
                  {loading ? <Loader2 size={18} className="animate-spin" /> : <ArrowRight size={18} />}
                </button>
              </div>
              {subscribed && <p className="text-xs text-accent flex items-center gap-1"><CheckCircle size={12} /> You're on the list!</p>}
            </form>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2"><MapPin size={14} className="text-primary" /> New Delhi, 110061</p>
              <p className="flex items-center gap-2"><Mail size={14} className="text-primary" /> operation@adzpro.co.in</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-white/30 uppercase tracking-widest">
          <p>© {year} Adz Pro Digital Marketing. Global Results.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
