"use client"

import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  Linkedin, 
  Facebook,
  Loader2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { db } from '@/app/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export function Contact() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Store in Firestore
      await addDoc(collection(db, "contacts"), {
        ...formData,
        timestamp: serverTimestamp(),
        to: "operation@adzpro.co.in" // Meta info for logic later
      });

      toast({
        title: "Message Sent!",
        description: "We've received your inquiry and will get back to you shortly.",
      });
      
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error("Firestore Error:", error);
      toast({
        variant: "destructive",
        title: "Error sending message",
        description: "There was a problem submitting your form. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 bg-card/20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em]">Contact Us</h2>
              <h3 className="text-4xl md:text-5xl font-bold">Let's Build Something Extraordinary</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ready to take your brand to the next level? Get in touch with our team for a free consultation and customized strategy.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl glassmorphism flex items-center justify-center shrink-0">
                  <Mail className="text-primary w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white/50 uppercase tracking-widest">Email Us</p>
                  <a href="mailto:operation@adzpro.co.in" className="text-xl font-medium hover:text-primary transition-colors">operation@adzpro.co.in</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl glassmorphism flex items-center justify-center shrink-0">
                  <MapPin className="text-accent w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white/50 uppercase tracking-widest">Our Office</p>
                  <p className="text-xl font-medium leading-snug">
                    Plot No. 29 B, Ambedkar Colony, Bijwasan, New Delhi, 110061
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <p className="text-sm font-bold text-white/50 uppercase tracking-widest mb-4">Follow Our Journey</p>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/adzpro/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glassmorphism flex items-center justify-center hover:bg-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://www.facebook.com/people/Adz-Pro/61564387431825/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glassmorphism flex items-center justify-center hover:bg-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="glassmorphism p-8 md:p-12 rounded-3xl border-primary/20 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-bold text-white/70">Full Name</Label>
                  <Input 
                    id="name" 
                    placeholder="John Doe" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white/5 border-white/10 h-12 rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-bold text-white/70">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white/5 border-white/10 h-12 rounded-xl"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-sm font-bold text-white/70">Subject</Label>
                <Input 
                  id="subject" 
                  placeholder="How can we help?" 
                  required 
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-white/5 border-white/10 h-12 rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-bold text-white/70">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your project..." 
                  required 
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-white/5 border-white/10 min-h-[150px] rounded-xl"
                />
              </div>
              <Button type="submit" size="lg" disabled={loading} className="w-full h-14 rounded-xl text-lg font-bold group">
                {loading ? (
                  <Loader2 className="animate-spin mr-2" />
                ) : (
                  <>
                    Send Inquiry
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}