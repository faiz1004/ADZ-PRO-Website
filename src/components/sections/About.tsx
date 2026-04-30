import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { CheckCircle2 } from 'lucide-react';

export function About() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-image');

  return (
    <section id="about" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 bg-accent/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src={aboutImage?.imageUrl || ''}
              alt="Adz Pro Innovation"
              width={800}
              height={1000}
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              data-ai-hint="modern office"
            />
          </div>
          <div className="absolute top-8 left-8 glassmorphism p-6 rounded-xl shadow-lg border-accent/20">
            <span className="text-4xl font-bold text-accent">Dec 28</span>
            <p className="text-sm text-white/70 uppercase tracking-tighter">Established 2025</p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em]">About Adz Pro</h2>
            <h3 className="text-4xl md:text-5xl font-bold leading-tight">
              Driving Digital Excellence Through Innovation
            </h3>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Adz Pro is more than just a marketing agency; we are your strategic growth partners. Since our foundation, we've committed ourselves to helping brands navigate the complex digital landscape with creative precision and data-driven insights.
          </p>

          <div className="space-y-4">
            {[
              "Strategic Brand Development",
              "Cutting-edge Digital Growth",
              "Creative Strategy & Content",
              "Data-Driven Performance Advertising"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="text-accent w-6 h-6" />
                <span className="text-lg font-medium text-white/90">{item}</span>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-2xl glassmorphism border-primary/20">
            <p className="italic text-lg text-white/80">
              "Our mission is to bridge the gap between human creativity and technological possibility, creating lasting impacts for brands worldwide."
            </p>
            <div className="mt-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center font-bold text-xl">A</div>
              <div>
                <p className="font-bold">Team Adz Pro</p>
                <p className="text-sm text-muted-foreground text-primary">Founding Team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}