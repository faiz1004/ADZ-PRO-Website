import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={heroImage?.imageUrl || ''} 
          alt="Adz Pro Hero" 
          fill
          className="object-cover opacity-20"
          priority
          data-ai-hint="abstract tech"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold animate-pulse">
            <Sparkles className="w-4 h-4" />
            <span>Redefining Digital Growth</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
            Transforming <span className="text-gradient">Visions</span> into Digital Reality.
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
            Expert advertising solutions to scale your brand. We blend creativity with performance-driven strategies to deliver unparalleled results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="rounded-full px-8 py-7 text-lg group">
              <Link href="#contact">
                Get a Free Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 py-7 text-lg glassmorphism">
              <Link href="#portfolio">View Our Work</Link>
            </Button>
          </div>
          
          <div className="flex items-center gap-8 pt-4">
            <div>
              <p className="text-3xl font-bold text-white">500+</p>
              <p className="text-sm text-muted-foreground uppercase tracking-widest">Projects</p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <p className="text-3xl font-bold text-white">98%</p>
              <p className="text-sm text-muted-foreground uppercase tracking-widest">Retention</p>
            </div>
          </div>
        </div>

        <div className="hidden lg:block relative">
          <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full" />
          <div className="relative glassmorphism p-4 rounded-2xl animate-float">
             <Image 
              src={PlaceHolderImages.find(img => img.id === 'portfolio-1')?.imageUrl || ''}
              alt="Digital Growth"
              width={600}
              height={450}
              className="rounded-xl shadow-2xl"
              data-ai-hint="marketing dashboard"
            />
            <div className="absolute -bottom-6 -right-6 glassmorphism p-6 rounded-2xl shadow-xl max-w-[200px]">
              <p className="text-xs font-semibold text-accent uppercase mb-2">Real-time Growth</p>
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-accent w-3/4 animate-pulse" />
              </div>
              <p className="text-lg font-bold mt-2">+127% ROI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}