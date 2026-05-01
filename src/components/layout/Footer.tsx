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
  const [year, setYear] = useState(2025);
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
    <footer 
      className="relative pt-24 pb-12 overflow-hidden"
      style={{ background: 'var(--background-secondary)' }}
    >
      {/* Animated Top Border */}
      <div 
        className="absolute top-0 left-0 w-full h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent, var(--accent-primary), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg" style={{ background: 'var(--accent-primary)' }}>
                <Rocket className="text-white w-5 h-5" />
              </div>
              <span className="text-2xl font-black tracking-tighter" style={{ color: 'var(--text-primary)' }}>ADZ PRO</span>
            </Link>
            <p className="leading-relaxed max-w-sm" style={{ color: 'var(--text-secondary)' }}>
              We engineer high-performance sales funnels and creative brand identities for the next generation of digital-first companies.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/adzpro/" },
                { icon: <Facebook size={20} />, href: "https://www.facebook.com/people/Adz-Pro/61564387431825/" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-all border"
                  style={{ 
                    background: 'var(--surface-glass)',
                    color: 'var(--text-muted)',
                    borderColor: 'var(--border)'
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-lg font-bold uppercase tracking-widest" style={{ color: 'var(--text-primary)' }}>Platform</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className="transition-colors flex items-center gap-2 group"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" /> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-lg font-bold uppercase tracking-widest" style={{ color: 'var(--text-primary)' }}>Services</h4>
            <ul className="space-y-4">
              {['Performance Ads', 'Brand Strategy', 'Creative Content', 'Digital Growth'].map((item) => (
                <li key={item} className="transition-colors cursor-pointer" style={{ color: 'var(--text-muted)' }}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-8">
            <h4 className="text-lg font-bold uppercase tracking-widest" style={{ color: 'var(--text-primary)' }}>Stay Updated</h4>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Get marketing insights and ROI tips.</p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative group">
                <Input 
                  type="email" 
                  placeholder="Enter email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-14 rounded-xl pr-12"
                  style={{ 
                    background: 'var(--surface)',
                    borderColor: 'var(--border)',
                    color: 'var(--text-primary)'
                  }}
                />
                <button 
                  type="submit" 
                  disabled={loading} 
                  className="absolute right-2 top-2 w-10 h-10 rounded-lg flex items-center justify-center hover:opacity-90 transition-colors"
                  style={{ background: 'var(--accent-primary)', color: 'var(--text-inverse)' }}
                >
                  {loading ? <Loader2 size={18} className="animate-spin" /> : <ArrowRight size={18} />}
                </button>
              </div>
              {subscribed && <p className="text-xs flex items-center gap-1" style={{ color: 'var(--success)' }}><CheckCircle size={12} /> You're on the list!</p>}
            </form>
            <div className="space-y-2 text-sm" style={{ color: 'var(--text-muted)' }}>
              <p className="flex items-center gap-2"><MapPin size={14} style={{ color: 'var(--accent-primary)' }} /> New Delhi, 110061</p>
              <p className="flex items-center gap-2"><Mail size={14} style={{ color: 'var(--accent-primary)' }} /> operation@adzpro.co.in</p>
            </div>
          </div>
        </div>

        <div 
          className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium uppercase tracking-widest"
          style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
        >
          <p>© {year} <span style={{ color: 'var(--accent-primary)' }}>Adz Pro</span> Digital Marketing. Global Results.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:opacity-100 transition-opacity">Privacy</Link>
            <Link href="#" className="hover:opacity-100 transition-opacity">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}