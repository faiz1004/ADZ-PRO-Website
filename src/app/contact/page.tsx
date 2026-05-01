"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, MessageCircle, CheckCircle, Loader2, Clock, Zap, Linkedin, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { db } from '@/app/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { cn } from '@/lib/utils';

export default function ContactPage() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Valid email is required";
    if (!formData.message) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    try {
      await addDoc(collection(db, "leads"), {
        ...formData,
        timestamp: serverTimestamp(),
        source: "website_contact_v2"
      });
      setSubmitted(true);
      toast({ title: "Sent!", description: "Talk to you soon." });
    } catch (error) {
      toast({ variant: "destructive", title: "Error", description: "Submission failed." });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
    if (errors[e.target.id]) setErrors(prev => ({ ...prev, [e.target.id]: '' }));
  };

  return (
    <div className="page-transition min-h-screen pt-20">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Side: Info Panel */}
        <div className="lg:w-[40%] bg-gradient-to-br from-accent-primary to-accent-secondary p-8 md:p-16 lg:p-24 flex flex-col justify-between relative overflow-hidden text-white">
          <div className="hidden lg:block absolute top-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-white opacity-[0.08] blur-3xl pointer-events-none" />
          
          <div className="space-y-12 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4 md:space-y-6">
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">Let's <br /> Scale.</h1>
              <p className="text-lg md:text-xl text-white/80 font-medium max-w-md">
                Ready to stop guessing and start growing? Get in touch for a free growth audit.
              </p>
            </motion.div>

            <div className="space-y-8 md:space-y-10">
              <div className="flex items-start gap-5 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="md:size-6" />
                </div>
                <div className="space-y-0.5 md:space-y-1">
                  <p className="text-[8px] md:text-[10px] font-black uppercase tracking-widest opacity-60">Headquarters</p>
                  <p className="text-base md:text-lg font-bold">Plot No. 29 B, Ambedkar Colony, Bijwasan, Delhi</p>
                </div>
              </div>

              <div className="flex items-start gap-5 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
                  <Mail size={20} className="md:size-6" />
                </div>
                <div className="space-y-0.5 md:space-y-1">
                  <p className="text-[8px] md:text-[10px] font-black uppercase tracking-widest opacity-60">Email Us</p>
                  <p className="text-base md:text-lg font-bold">operation@adzpro.co.in</p>
                </div>
              </div>

              <div className="flex items-start gap-5 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
                  <Clock size={20} className="md:size-6" />
                </div>
                <div className="space-y-0.5 md:space-y-1">
                  <p className="text-[8px] md:text-[10px] font-black uppercase tracking-widest opacity-60">Office Hours</p>
                  <p className="text-base md:text-lg font-bold">Mon–Sat: 9 AM – 7 PM IST</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 space-y-6 md:space-y-8 pt-12">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
              <Zap size={14} className="text-white animate-pulse" />
              <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest">Response: Under 2h</span>
            </div>

            <div className="flex gap-6 justify-center lg:justify-start">
              <a href="https://www.linkedin.com/in/adzpro/" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform p-1"><Linkedin size={24} /></a>
              <a href="https://www.instagram.com/adzpro.co.in" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform p-1"><Instagram size={24} /></a>
              <a href="https://www.facebook.com/people/Adz-Pro/61564387431825/" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform p-1"><Facebook size={24} /></a>
            </div>
          </div>
        </div>

        {/* Right Side: Form Panel */}
        <div className="lg:w-[60%] bg-background p-6 md:p-12 lg:p-24 flex flex-col justify-center">
          <div className="max-w-2xl mx-auto w-full">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div key="form-container" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8 md:space-y-12">
                  <div className="space-y-2 md:space-y-4">
                    <h2 className="text-3xl md:text-4xl font-black text-text-primary">Send an Inquiry</h2>
                    <p className="text-sm md:text-base text-text-secondary">Our team will prepare a custom blueprint for you.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                      <div className="floating-label-group">
                        <input id="name" placeholder=" " value={formData.name} onChange={handleChange} className={cn("w-full h-14 md:h-16 px-4 pt-4 rounded-2xl border bg-surface text-text-primary focus:outline-none transition-all min-h-[48px]", errors.name ? "border-danger" : "border-border focus:border-accent-primary")} />
                        <label className="floating-label">Full Name</label>
                      </div>
                      <div className="floating-label-group">
                        <input id="email" type="email" placeholder=" " value={formData.email} onChange={handleChange} className={cn("w-full h-14 md:h-16 px-4 pt-4 rounded-2xl border bg-surface text-text-primary focus:outline-none transition-all min-h-[48px]", errors.email ? "border-danger" : "border-border focus:border-accent-primary")} />
                        <label className="floating-label">Email Address</label>
                      </div>
                    </div>

                    <div className="floating-label-group">
                      <input id="subject" placeholder=" " value={formData.subject} onChange={handleChange} className="w-full h-14 md:h-16 px-4 pt-4 rounded-2xl border bg-surface border-border text-text-primary focus:border-accent-primary focus:outline-none transition-all min-h-[48px]" />
                      <label className="floating-label">Goal / Service</label>
                    </div>

                    <div className="floating-label-group">
                      <textarea id="message" placeholder=" " value={formData.message} onChange={handleChange} className={cn("w-full min-h-[140px] md:min-h-[160px] px-4 pt-6 rounded-2xl border bg-surface text-text-primary focus:outline-none transition-all", errors.message ? "border-danger" : "border-border focus:border-accent-primary")} />
                      <label className="floating-label">Tell us about your brand...</label>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                      <Button type="submit" size="lg" disabled={loading} className="flex-1 h-[56px] md:h-20 rounded-2xl text-lg md:text-xl font-black group relative overflow-hidden min-h-[44px]" style={{ background: 'var(--accent-primary)', color: '#FFF', boxShadow: '0 0 20px var(--accent-glow)' }}>
                        {loading ? <Loader2 className="animate-spin mr-2" /> : <>Send Inquiry <Send size={20} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>}
                      </Button>
                      
                      <Button asChild variant="outline" size="lg" className="h-[56px] md:h-20 px-8 rounded-2xl border-none text-white font-black min-h-[44px]" style={{ background: '#25D366' }}>
                        <a href="https://wa.me/918278221944" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                          <MessageCircle size={24} className="mr-2" /> WhatsApp
                        </a>
                      </Button>
                    </div>
                  </form>
                </motion.div>
              ) : (
                <motion.div key="success-state" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center space-y-6 md:space-y-8 py-12">
                  <CheckCircle size={64} className="text-success mx-auto md:size-80" />
                  <h3 className="text-4xl md:text-5xl font-black text-text-primary">Sent.</h3>
                  <p className="text-lg md:text-xl text-text-secondary">We'll contact you within 2 hours.</p>
                  <Button onClick={() => setSubmitted(false)} variant="ghost" className="uppercase tracking-widest font-black text-text-muted hover:text-accent-primary min-h-[44px]">Send another</Button>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-12 md:mt-20 rounded-[24px] md:rounded-3xl overflow-hidden h-[200px] md:h-[300px] border border-border shadow-strong">
               <iframe src="https://maps.google.com/maps?q=Bijwasan+New+Delhi&output=embed" width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}