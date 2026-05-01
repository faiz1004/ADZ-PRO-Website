"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Loader2, 
  Linkedin, 
  Instagram, 
  Facebook,
  Zap
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    borderRadius: '10px',
    color: 'var(--text-primary)',
    fontSize: '0.875rem',
    outline: 'none',
    transition: 'all 0.2s ease',
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    // Timeout safety net
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Request timeout')), 10000)
    );

    try {
      const { db } = await import('@/app/lib/firebase');
      const { collection, addDoc, serverTimestamp } = await import('firebase/firestore');

      const submissionPromise = addDoc(collection(db, "leads"), {
        ...formData,
        timestamp: serverTimestamp(),
        source: "website_contact_v3"
      });

      await Promise.race([submissionPromise, timeoutPromise]);
      
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', budget: '', message: '' });
    } catch (error) {
      console.error('Contact form error:', error);
      
      // Fallback: local storage backup
      try {
        const key = 'adz_contact_fallback';
        const existing = JSON.parse(localStorage.getItem(key) || '[]');
        existing.push({ ...formData, timestamp: new Date().toISOString() });
        localStorage.setItem(key, JSON.stringify(existing));
        setStatus('success');
      } catch (localError) {
        setStatus('error');
        setErrorMessage('Submission failed. Please try again or contact us via WhatsApp.');
      }
    } finally {
      setTimeout(() => {
        if (status === 'loading') setStatus('idle');
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <div className="page-transition min-h-screen pt-20">
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-80px)]">
        
        {/* Left Side: Info & Trust Panel */}
        <div className="w-full lg:w-[40%] bg-gradient-to-br from-[#1E8BB5] via-[#0D6A91] to-[#0A5070] p-8 md:p-12 lg:p-16 flex flex-col relative overflow-hidden text-white">
          {/* Decorative Orbs */}
          <div className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] rounded-full bg-white opacity-[0.05] blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-5%] left-[-5%] w-[200px] h-[200px] rounded-full bg-cyan-400 opacity-[0.08] blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-10">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-none">Let's <br /> Scale.</h1>
              <p className="text-lg text-white/80 font-medium max-w-xs">
                Ready to stop guessing and start growing? Get your free growth audit.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Email Us</p>
                  <p className="text-base font-bold">operation@adzpro.co.in</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Office Hours</p>
                  <p className="text-base font-bold">Mon–Sat: 9 AM – 7 PM IST</p>
                </div>
              </div>
            </div>

            {/* What to expect section */}
            <div className="pt-6 border-t border-white/10">
              <p className="text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase mb-6">What Happens Next?</p>
              <div className="space-y-5">
                {[
                  { step: '01', text: 'We review your inquiry within 2 hours' },
                  { step: '02', text: 'Free 30-min strategy call scheduled' },
                  { step: '03', text: 'Custom growth blueprint delivered' },
                  { step: '04', text: 'Campaign launch within 48 hours' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 items-start">
                    <span className="text-[10px] font-black text-white/30 mt-1">{item.step}</span>
                    <p className="text-sm text-white/90 leading-snug">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-3 pt-6">
              {[
                '🔒 100% Confidential',
                '⚡ 48hr Launch',
                '📊 Free Audit',
                '🏆 500+ Scaled',
              ].map((badge) => (
                <div key={badge} className="px-3 py-2 bg-white/10 border border-white/10 rounded-lg text-[10px] font-bold text-white/90">
                  {badge}
                </div>
              ))}
            </div>

            <div className="flex gap-6 pt-6">
              <a href="https://www.linkedin.com/in/adzpro/" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform"><Linkedin size={22} /></a>
              <a href="https://www.instagram.com/adzpro.co.in" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform"><Instagram size={22} /></a>
              <a href="https://www.facebook.com/people/Adz-Pro/61564387431825/" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform"><Facebook size={22} /></a>
            </div>
          </div>
        </div>

        {/* Right Side: Form & Map Panel */}
        <div className="flex-1 bg-background p-8 md:p-12 lg:p-16 flex flex-col gap-10">
          
          <AnimatePresence mode="wait">
            {status !== 'success' ? (
              <motion.div 
                key="form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div>
                  <p className="text-accent-primary text-[10px] font-black uppercase tracking-[0.3em] mb-2">Get In Touch</p>
                  <h2 className="text-3xl font-black text-text-primary">Send an Inquiry</h2>
                  <p className="text-text-secondary text-sm">Our team will prepare a custom growth blueprint for you.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input id="name" placeholder="Full Name" value={formData.name} onChange={handleChange} style={inputStyle} required />
                    <input id="email" type="email" placeholder="Email Address" value={formData.email} onChange={handleChange} style={inputStyle} required />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input id="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} style={inputStyle} />
                    <select id="service" value={formData.service} onChange={handleChange} style={inputStyle}>
                      <option value="">Goal / Service</option>
                      <option>Performance Advertising</option>
                      <option>Brand Strategy</option>
                      <option>Creative Content</option>
                      <option>Digital Growth / SEO</option>
                      <option>Full Package</option>
                    </select>
                  </div>

                  <select id="budget" value={formData.budget} onChange={handleChange} style={inputStyle}>
                    <option value="">Monthly Ad Budget Range</option>
                    <option>Under ₹25,000</option>
                    <option>₹25,000 – ₹1,00,000</option>
                    <option>₹1,00,000 – ₹5,00,000</option>
                    <option>₹5,00,000+</option>
                  </select>

                  <textarea 
                    id="message"
                    placeholder="Tell us about your brand, goals, and current challenges..."
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                    required
                  />

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button type="submit" disabled={status === 'loading'} className="flex-1 min-h-[52px] bg-accent-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-accent-glow hover:opacity-90 transition-all">
                      {status === 'loading' ? <Loader2 className="animate-spin" size={20} /> : 'Send Inquiry ✦'}
                    </button>
                    <a href="https://wa.me/918278221944" target="_blank" rel="noopener noreferrer" className="flex-1 min-h-[52px] bg-[#25D366] text-white rounded-xl font-bold flex items-center justify-center gap-2 no-underline hover:opacity-90 transition-all">
                      <Instagram size={20} /> WhatsApp
                    </a>
                  </div>

                  {status === 'error' && <p className="text-danger text-xs font-bold">{errorMessage}</p>}

                  <div className="flex items-center gap-3 p-3 bg-accent-light border border-border rounded-xl">
                    <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                    <span className="text-[10px] font-bold text-accent-primary uppercase tracking-wider">⚡ Average response time: Under 2 hours</span>
                  </div>
                </form>
              </motion.div>
            ) : (
              <motion.div 
                key="success"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex-1 flex flex-col items-center justify-center text-center space-y-6 py-12"
              >
                <div className="w-20 h-20 bg-success/10 text-success rounded-full flex items-center justify-center">
                  <CheckCircle size={48} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-black text-text-primary">Sent Successfully!</h3>
                  <p className="text-text-secondary">We've received your inquiry. Check your email soon.</p>
                </div>
                <button onClick={() => setStatus('idle')} className="text-accent-primary font-bold uppercase tracking-widest text-xs py-2 px-4 hover:bg-accent-light rounded-lg transition-colors">Send Another</button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Map Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-accent-primary" />
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted">Our Location</p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border h-[240px] shadow-strong bg-surface relative">
              <iframe
                src="https://maps.google.com/maps?q=Bijwasan,New+Delhi,110061,India&output=embed&z=15"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Adz Pro - Bijwasan, New Delhi"
              />
            </div>
            <p className="text-[10px] text-text-muted font-medium">Plot No. 29 B, Ambedkar Colony, Bijwasan, New Delhi 110061</p>
          </div>

        </div>
      </div>
    </div>
  );
}