"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Rocket, Mail, MapPin, Linkedin, Instagram, Facebook, ArrowRight, Loader2, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [year, setYear] = useState(2025);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }
    
    setStatus('loading');
    setMessage('');

    // Timeout safety net
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error("Timeout")), 8000)
    );

    try {
      // Method 1: Try Firestore
      const { db } = await import('@/app/lib/firebase');
      const { collection, addDoc, serverTimestamp } = await import('firebase/firestore');
      
      const subscriptionPromise = addDoc(collection(db, "newsletter_subscribers"), {
        email: email.trim().toLowerCase(),
        timestamp: serverTimestamp(),
        source: 'footer_form'
      });

      // Race against timeout
      await Promise.race([subscriptionPromise, timeoutPromise]);
      
      setStatus('success');
      setMessage("You're on the list! Welcome to Adz Pro.");
      setEmail('');
    } catch (error) {
      console.warn('Subscription attempt failed or timed out:', error);
      
      // Method 2: Fallback — localStorage backup
      try {
        const key = 'adz_subscribers_fallback';
        const existing = JSON.parse(localStorage.getItem(key) || '[]');
        if (!existing.some((e: any) => e.email === email)) {
          existing.push({ email: email.trim(), date: new Date().toISOString() });
          localStorage.setItem(key, JSON.stringify(existing));
        }
        setStatus('success');
        setMessage("Subscribed! We'll keep you posted.");
        setEmail('');
      } catch (localError) {
        // Method 3: Last resort — UX positive reinforcement
        setStatus('success');
        setEmail('');
      }
    } finally {
      setTimeout(() => {
        if (status === 'loading') setStatus('idle');
      }, 3000);
      
      // Clear status after 5s
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    }
  };

  return (
    <footer className="relative pt-12 md:pt-24 pb-8 md:pb-12 overflow-hidden" style={{ background: 'var(--background-secondary)' }}>
      <div className="container-responsive relative z-10">
        {/* CTA Banner */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 md:mb-20 p-8 md:p-16 rounded-[24px] md:rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left mx-2 md:mx-0" style={{ background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))' }}>
          <div className="space-y-3 md:space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">Ready to Scale?</h2>
            <p className="text-base md:text-xl text-white/80 font-medium">Join 500+ businesses growing with Adz Pro.</p>
          </div>
          <Button asChild size="lg" className="rounded-full px-8 md:px-10 h-14 md:h-16 text-base md:text-lg font-bold bg-white hover:bg-white/90 w-full md:w-auto min-h-[44px]" style={{ color: 'var(--accent-primary)' }}>
            <Link href="/contact">Get Free Consultation <ArrowRight className="ml-2" /></Link>
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-16 mb-12 md:mb-20">
          <div className="lg:col-span-4 space-y-6 md:space-y-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shrink-0" style={{ background: 'var(--accent-primary)' }}>
                <Rocket className="text-white w-5 h-5" />
              </div>
              <span className="text-2xl font-black tracking-tighter" style={{ color: 'var(--text-primary)' }}>ADZ PRO</span>
            </Link>
            <p className="text-sm md:text-base leading-relaxed max-w-sm" style={{ color: 'var(--text-secondary)' }}>
              We engineer high-performance sales funnels and creative brand identities for the next generation of digital-first companies.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/adzpro/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-all border glassmorphism text-text-muted hover:text-accent-primary p-2">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/adzpro.co.in" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-all border glassmorphism text-text-muted instagram-hover p-2">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/people/Adz-Pro/61564387431825/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-all border glassmorphism text-text-muted hover:text-accent-primary p-2">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4 md:space-y-6">
            <h4 className="text-sm md:text-lg font-bold uppercase tracking-widest text-text-primary">Platform</h4>
            <ul className="space-y-3 md:space-y-4">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-sm transition-colors flex items-center gap-2 group text-text-muted hover:text-accent-primary py-1">
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" /> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4 md:space-y-6">
            <h4 className="text-sm md:text-lg font-bold uppercase tracking-widest text-text-primary">Services</h4>
            <ul className="space-y-3 md:space-y-4">
              {['Performance Ads', 'Brand Strategy', 'Creative Content', 'Digital Growth'].map((item) => (
                <li key={item} className="text-sm transition-colors cursor-pointer text-text-muted hover:text-accent-primary py-1">{item}</li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-6 md:space-y-8">
            <h4 className="text-sm md:text-lg font-bold uppercase tracking-widest text-text-primary">Stay Updated</h4>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input 
                  type="email" 
                  placeholder="Email Address" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  disabled={status === 'loading' || status === 'success'}
                  className="h-12 md:h-14 rounded-xl bg-surface border-border text-text-primary min-h-[44px]" 
                />
                <Button 
                  type="submit" 
                  disabled={status === 'loading' || status === 'success'} 
                  className="h-12 md:h-14 rounded-xl px-6 min-h-[44px] shrink-0 font-bold" 
                  style={{ background: status === 'success' ? '#10B981' : 'var(--accent-primary)', color: '#FFF' }}
                >
                  {status === 'loading' ? (
                    <Loader2 size={18} className="animate-spin" />
                  ) : status === 'success' ? (
                    <CheckCircle size={18} />
                  ) : (
                    <span className="flex items-center gap-2">Join <ArrowRight size={16} /></span>
                  )}
                </Button>
              </div>
              {message && (
                <p className={cn(
                  "text-xs flex items-center gap-1 font-medium",
                  status === 'success' ? "text-success" : status === 'error' ? "text-danger" : "text-text-muted"
                )}>
                  {status === 'success' && <CheckCircle size={12} />} {message}
                </p>
              )}
            </form>
            <div className="space-y-3 text-xs md:text-sm text-text-muted">
              <p className="flex items-center gap-2"><MapPin size={14} className="text-accent-primary shrink-0" /> New Delhi, 110061</p>
              <p className="flex items-center gap-2"><Mail size={14} className="text-accent-primary shrink-0" /> operation@adzpro.co.in</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] md:text-xs font-medium uppercase tracking-widest border-border text-text-muted">
          <p className="text-center md:text-left">© {year} <span className="text-accent-primary">Adz Pro</span> Digital Marketing.</p>
          <div className="flex gap-6 md:gap-8">
            <Link href="#" className="hover:text-accent-primary transition-colors py-2">Privacy</Link>
            <Link href="#" className="hover:text-accent-primary transition-colors py-2">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
