import React from 'react';
import Link from 'next/link';
import { Rocket, Mail, MapPin, Linkedin, Facebook } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Rocket className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tighter text-white">ADZ PRO</span>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Premier advertising and digital marketing agency dedicated to scaling brands through creative strategy and high-impact performance.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/adzpro/" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={20} /></a>
              <a href="https://www.facebook.com/people/Adz-Pro/61564387431825/" className="text-muted-foreground hover:text-primary transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="#about" className="text-muted-foreground hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#services" className="text-muted-foreground hover:text-white transition-colors">Services</Link></li>
              <li><Link href="#portfolio" className="text-muted-foreground hover:text-white transition-colors">Our Work</Link></li>
              <li><Link href="#contact" className="text-muted-foreground hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Services</h4>
            <ul className="space-y-4">
              <li><span className="text-muted-foreground">Digital Marketing</span></li>
              <li><span className="text-muted-foreground">Brand Strategy</span></li>
              <li><span className="text-muted-foreground">Performance Advertising</span></li>
              <li><span className="text-muted-foreground">Social Media Management</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact Details</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary w-5 h-5 shrink-0 mt-1" />
                <span className="text-muted-foreground">Plot No. 29 B, Ambedkar Colony, Bijwasan, New Delhi, 110061</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary w-5 h-5" />
                <a href="mailto:operation@adzpro.co.in" className="text-muted-foreground hover:text-white transition-colors">operation@adzpro.co.in</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Adz Pro. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}