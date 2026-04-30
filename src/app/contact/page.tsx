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
             <h2 className="text-sm font-black text-primary uppercase tracking-[0.4em]">Let's Scale</h2>
             <h1 className="text-6xl md:text-8xl font-black">Book Your <span className="text-gradient">Audit</span>.</h1>
             <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
               Ready to stop guessing and start growing? Book a free strategy call with our growth experts.
             </p>
           </div>
           <div className="flex flex-col sm:flex-row justify-center gap-6">
             <Button asChild size="lg" className="rounded-full h-16 px-10 text-lg font-black shadow-2xl">
               <a href="mailto:operation@adzpro.co.in">Schedule Free Audit <ExternalLink size={20} className="ml-2" /></a>
             </Button>
             <Button asChild variant="outline" size="lg" className="rounded-full h-16 px-10 text-lg font-black glassmorphism border-[#25D366]/20 text-[#25D366] hover:bg-[#25D366]/10">
               <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer">WhatsApp Strategy <MessageCircle size={20} className="ml-2" /></a>
             </Button>
           </div>
           
           <div className="inline-flex items-center gap-2 px-6 py-3 glassmorphism rounded-full border-accent/20">
              <Zap size={16} className="text-accent animate-pulse" />
              <span className="text-sm font-black uppercase tracking-widest text-accent">Average response time: Under 2 hours</span>
           </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-20 items-start">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-8">
              <h3 className="text-4xl font-black uppercase tracking-tighter">New Delhi Headquarters</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-6 group cursor-default">
                  <div className="w-14 h-14 rounded-2xl glassmorphism flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-500">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-white/20 uppercase tracking-widest mb-1">Our Location</p>
                    <p className="text-xl font-bold leading-snug">Plot No. 29 B, Ambedkar Colony, Bijwasan, New Delhi, 110061</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group cursor-default">
                  <div className="w-14 h-14 rounded-2xl glassmorphism flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors duration-500">
                    <Mail size={28} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-white/20 uppercase tracking-widest mb-1">Email Us</p>
                    <a href="mailto:operation@adzpro.co.in" className="text-xl font-bold hover:text-primary transition-colors">operation@adzpro.co.in</a>
                  </div>
                </div>
                <div className="flex items-start gap-6 group cursor-default">
                  <div className="w-14 h-14 rounded-2xl glassmorphism flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-500">
                    <Clock size={28} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-white/20 uppercase tracking-widest mb-1">Office Hours</p>
                    <p className="text-lg font-bold leading-snug">Mon–Sat: 9:00 AM – 7:00 PM IST</p>
                    <p className="text-sm text-white/40">Sun: By appointment only</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="relative rounded-[40px] overflow-hidden glassmorphism h-[350px] border-white/5 shadow-2xl group">
               <iframe 
                src="https://maps.google.com/maps?q=Bijwasan+New+Delhi&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }}
                allowFullScreen={true}
                loading="lazy"
               />
               <div className="absolute inset-0 pointer-events-none border-[20px] border-background/20" />
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="glassmorphism p-12 md:p-16 rounded-[48px] border-white/5 shadow-2xl relative overflow-hidden">
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
                        <Label htmlFor="name" className="text-xs font-black text-white/40 uppercase tracking-widest">Full Name</Label>
                        <div className="relative">
                          <Input 
                            id="name" 
                            placeholder="John Doe" 
                            value={formData.name}
                            onChange={handleChange}
                            className={cn("bg-white/5 border-white/10 h-14 rounded-2xl focus:ring-primary/40", errors.name && "border-destructive")}
                          />
                          {formData.name && !errors.name && <CheckCircle size={16} className="absolute right-4 top-5 text-accent" />}
                        </div>
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="email" className="text-xs font-black text-white/40 uppercase tracking-widest">Email Address</Label>
                        <div className="relative">
                          <Input 
                            id="email" 
                            type="email"
                            placeholder="john@agency.com" 
                            value={formData.email}
                            onChange={handleChange}
                            className={cn("bg-white/5 border-white/10 h-14 rounded-2xl focus:ring-primary/40", errors.email && "border-destructive")}
                          />
                          {formData.email && !errors.email && <CheckCircle size={16} className="absolute right-4 top-5 text-accent" />}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="subject" className="text-xs font-black text-white/40 uppercase tracking-widest">Goal / Service</Label>
                      <Input 
                        id="subject" 
                        placeholder="Scaling Ad Results" 
                        value={formData.subject}
                        onChange={handleChange}
                        className="bg-white/5 border-white/10 h-14 rounded-2xl focus:ring-primary/40"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="message" className="text-xs font-black text-white/40 uppercase tracking-widest">Message</Label>
                      <div className="relative">
                        <Textarea 
                          id="message" 
                          placeholder="Tell us about your brand..." 
                          value={formData.message}
                          onChange={handleChange}
                          className={cn("bg-white/5 border-white/10 min-h-[160px] rounded-2xl focus:ring-primary/40", errors.message && "border-destructive")}
                        />
                        {formData.message && !errors.message && <CheckCircle size={16} className="absolute right-4 top-5 text-accent" />}
                      </div>
                    </div>
                    <Button type="submit" size="lg" disabled={loading} className="w-full h-20 rounded-2xl text-xl font-black group shadow-2xl shadow-primary/20">
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
                    <div className="w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(68,237,218,0.2)]">
                      <CheckCircle size={48} className="text-accent" />
                    </div>
                    <h3 className="text-5xl font-black">Message Received.</h3>
                    <p className="text-xl text-white/60">Our strategy team will contact you within 2 hours. Get ready to scale.</p>
                    <Button onClick={() => setSubmitted(false)} variant="ghost" className="text-white/40 hover:text-white uppercase tracking-widest font-black">Send another message</Button>
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
