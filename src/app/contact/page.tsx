"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, MessageCircle, ExternalLink, CheckCircle, Loader2, Clock, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
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
    <div className="page-transition pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Strategy Call Section */}
        <div className="mb-32 text-center space-y-12">
           <div className="space-y-6">
             <h2 className="text-sm font-black uppercase tracking-[0.4em]" style={{ color: 'var(--accent-primary)' }}>Let's Scale</h2>
             <h1 className="text-6xl md:text-8xl font-black" style={{ color: 'var(--text-primary)' }}>Book Your <span className="text-gradient">Audit</span>.</h1>
             <p className="text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
               Ready to stop guessing and start growing? Book a free strategy call with our growth experts.
             </p>
           </div>
           <div className="flex flex-col sm:flex-row justify-center gap-6">
             <Button asChild size="lg" className="rounded-full h-16 px-10 text-lg font-black shadow-2xl" style={{ background: 'var(--accent-primary)', color: 'var(--text-inverse)' }}>
               <a href="mailto:operation@adzpro.co.in">Schedule Free Audit <ExternalLink size={20} className="ml-2" /></a>
             </Button>
             <Button asChild variant="outline" size="lg" className="rounded-full h-16 px-10 text-lg font-black" style={{ background: '#25D366', color: '#FFFFFF', borderColor: 'transparent' }}>
               <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer">WhatsApp Strategy <MessageCircle size={20} className="ml-2" /></a>
             </Button>
           </div>
           
           <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border glassmorphism" style={{ color: 'var(--accent-primary)', borderColor: 'var(--border)' }}>
              <Zap size={16} className="animate-pulse" />
              <span className="text-sm font-black uppercase tracking-widest">Average response time: Under 2 hours</span>
           </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-20 items-start">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-8">
              <h3 className="text-4xl font-black uppercase tracking-tighter" style={{ color: 'var(--text-primary)' }}>New Delhi Headquarters</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-6 group cursor-default">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-colors duration-500 glassmorphism" style={{ color: 'var(--accent-primary)' }}>
                    <MapPin size={28} />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: 'var(--text-muted)' }}>Our Location</p>
                    <p className="text-xl font-bold leading-snug" style={{ color: 'var(--text-primary)' }}>Plot No. 29 B, Ambedkar Colony, Bijwasan, New Delhi, 110061</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group cursor-default">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-colors duration-500 glassmorphism" style={{ color: 'var(--accent-primary)' }}>
                    <Mail size={28} />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: 'var(--text-muted)' }}>Email Us</p>
                    <a href="mailto:operation@adzpro.co.in" className="text-xl font-bold transition-colors hover:opacity-80" style={{ color: 'var(--text-primary)' }}>operation@adzpro.co.in</a>
                  </div>
                </div>
                <div className="flex items-start gap-6 group cursor-default">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-colors duration-500 glassmorphism" style={{ color: 'var(--accent-primary)' }}>
                    <Clock size={28} />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: 'var(--text-muted)' }}>Office Hours</p>
                    <p className="text-lg font-bold leading-snug" style={{ color: 'var(--text-primary)' }}>Mon–Sat: 9:00 AM – 7:00 PM IST</p>
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Sun: By appointment only</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="relative rounded-[40px] overflow-hidden h-[350px] shadow-2xl border" style={{ borderColor: 'var(--border)' }}>
               <iframe 
                src="https://maps.google.com/maps?q=Bijwasan+New+Delhi&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
               />
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="p-12 md:p-16 rounded-[48px] shadow-2xl relative overflow-hidden glassmorphism">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onSubmit={handleSubmit} 
                    className="space-y-8"
                  >
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label htmlFor="name" className="text-xs font-black uppercase tracking-widest" style={{ color: 'var(--text-secondary)' }}>Full Name</Label>
                        <div className="relative">
                          <Input 
                            id="name" 
                            placeholder="John Doe" 
                            value={formData.name}
                            onChange={handleChange}
                            className={cn("h-14 rounded-2xl border transition-all")}
                            style={{ 
                              background: 'var(--surface)', 
                              borderColor: errors.name ? 'var(--danger)' : 'var(--border)',
                              color: 'var(--text-primary)'
                            }}
                          />
                          {formData.name && !errors.name && <CheckCircle size={16} className="absolute right-4 top-5" style={{ color: 'var(--success)' }} />}
                        </div>
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="email" className="text-xs font-black uppercase tracking-widest" style={{ color: 'var(--text-secondary)' }}>Email Address</Label>
                        <div className="relative">
                          <Input 
                            id="email" 
                            type="email"
                            placeholder="john@agency.com" 
                            value={formData.email}
                            onChange={handleChange}
                            className={cn("h-14 rounded-2xl border transition-all")}
                            style={{ 
                              background: 'var(--surface)', 
                              borderColor: errors.email ? 'var(--danger)' : 'var(--border)',
                              color: 'var(--text-primary)'
                            }}
                          />
                          {formData.email && !errors.email && <CheckCircle size={16} className="absolute right-4 top-5" style={{ color: 'var(--success)' }} />}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="subject" className="text-xs font-black uppercase tracking-widest" style={{ color: 'var(--text-secondary)' }}>Goal / Service</Label>
                      <Input 
                        id="subject" 
                        placeholder="Scaling Ad Results" 
                        value={formData.subject}
                        onChange={handleChange}
                        className="h-14 rounded-2xl border transition-all"
                        style={{ background: 'var(--surface)', borderColor: 'var(--border)', color: 'var(--text-primary)' }}
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="message" className="text-xs font-black uppercase tracking-widest" style={{ color: 'var(--text-secondary)' }}>Message</Label>
                      <div className="relative">
                        <Textarea 
                          id="message" 
                          placeholder="Tell us about your brand..." 
                          value={formData.message}
                          onChange={handleChange}
                          className={cn("min-h-[160px] rounded-2xl border transition-all")}
                          style={{ 
                            background: 'var(--surface)', 
                            borderColor: errors.message ? 'var(--danger)' : 'var(--border)',
                            color: 'var(--text-primary)'
                          }}
                        />
                        {formData.message && !errors.message && <CheckCircle size={16} className="absolute right-4 top-5" style={{ color: 'var(--success)' }} />}
                      </div>
                    </div>
                    <Button 
                      type="submit" 
                      size="lg" 
                      disabled={loading} 
                      className="w-full h-20 rounded-2xl text-xl font-black group"
                      style={{ background: 'var(--accent-primary)', color: 'var(--text-inverse)', boxShadow: '0 0 20px var(--accent-glow)' }}
                    >
                      {loading ? <Loader2 className="animate-spin mr-2" /> : <>Send Strategy Inquiry <Send size={20} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>}
                    </Button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center space-y-8 py-12"
                  >
                    <div 
                      className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl"
                      style={{ background: 'var(--accent-light)' }}
                    >
                      <CheckCircle size={48} style={{ color: 'var(--accent-primary)' }} />
                    </div>
                    <h3 className="text-5xl font-black" style={{ color: 'var(--text-primary)' }}>Message Received.</h3>
                    <p className="text-xl" style={{ color: 'var(--text-secondary)' }}>Our strategy team will contact you within 2 hours. Get ready to scale.</p>
                    <Button onClick={() => setSubmitted(false)} variant="ghost" style={{ color: 'var(--text-muted)' }} className="uppercase tracking-widest font-black">Send another message</Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}