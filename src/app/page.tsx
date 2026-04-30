
import { Hero } from '@/components/sections/Hero';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Star, Users, Zap, TrendingUp } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata = {
  title: 'Adz Pro | Leading Advertising Agency in New Delhi',
  description: 'Adz Pro helps you scale your brand through creative strategy and performance advertising.',
};

export default function Home() {
  const featuredWork = PlaceHolderImages.find(img => img.id === 'portfolio-1');

  const stats = [
    { label: "Active Clients", value: "150+", icon: <Users className="w-5 h-5" /> },
    { label: "Ad Spend Managed", value: "$2M+", icon: <TrendingUp className="w-5 h-5" /> },
    { label: "Conversion Rate", value: "24%", icon: <Zap className="w-5 h-5" /> },
    { label: "Success Rating", value: "4.9/5", icon: <Star className="w-5 h-5 text-yellow-500" /> },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Client Success Counter */}
      <section className="py-20 border-y border-white/5 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-2 p-6 glassmorphism rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                  {stat.icon}
                </div>
                <h4 className="text-4xl font-extrabold text-white">{stat.value}</h4>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-24 bg-card/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em]">Case Study Preview</h2>
                <h3 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                  Scaling NexGen E-Commerce by 200%
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Discover how our data-driven performance advertising strategy transformed a stagnant online retailer into a market leader.
                </p>
              </div>
              <div className="space-y-4">
                {["Targeted Audience Expansion", "Creative Asset Optimization", "Funnel Conversion Recovery"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-accent w-6 h-6" />
                    <span className="text-lg font-medium text-white/90">{item}</span>
                  </div>
                ))}
              </div>
              <Button asChild size="lg" className="rounded-full px-8 group">
                <Link href="/portfolio">
                  View Full Case Study
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-50" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <Image 
                  src={featuredWork?.imageUrl || ''}
                  alt="Featured Case Study"
                  width={800}
                  height={600}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
