
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Target, Eye, Sparkles, Award } from 'lucide-react';

export const metadata = {
  title: 'About Us | Adz Pro Digital Agency',
  description: 'The story, mission, and philosophy behind Adz Pro - leading digital innovators since 2025.',
};

export default function AboutPage() {
  const aboutImg = PlaceHolderImages.find(img => img.id === 'about-image');

  const values = [
    {
      title: "Our Mission",
      desc: "To empower brands with creative precision and data-driven insights that bridge the gap between human creativity and technological possibility.",
      icon: <Target className="w-8 h-8 text-primary" />
    },
    {
      title: "Our Vision",
      desc: "To be the global benchmark for performance-driven advertising, where every campaign is a masterpiece of strategy and execution.",
      icon: <Eye className="w-8 h-8 text-accent" />
    },
    {
      title: "The Adz Pro Philosophy",
      desc: "Creative precision meets data-driven growth. We believe that strategy without heart is cold, and art without data is blind.",
      icon: <Sparkles className="w-8 h-8 text-primary" />
    }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold">
                <Award className="w-4 h-4" />
                <span>Established Dec 28, 2025</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
                Our Story: <span className="text-gradient">Innovating</span> the Future.
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Adz Pro was founded with a singular purpose: to redefine how brands interact with the digital landscape. In a world of noise, we create resonance.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/30 blur-3xl rounded-full opacity-20" />
              <div className="relative rounded-2xl overflow-hidden glassmorphism border-white/10 p-4">
                <Image 
                  src={aboutImg?.imageUrl || ''}
                  alt="Adz Pro Story"
                  width={800}
                  height={1000}
                  className="rounded-xl object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy & Mission */}
      <section className="py-24 bg-card/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {values.map((val, i) => (
              <div key={i} className="space-y-6 p-10 rounded-3xl glassmorphism border-primary/10 hover:border-primary/40 transition-colors">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center">
                  {val.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{val.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Profile */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <h2 className="text-4xl font-bold text-white">Why We Exist</h2>
          <div className="prose prose-invert prose-lg max-w-none text-muted-foreground">
            <p>
              At Adz Pro, we recognized that the advertising industry was split between two extremes: traditional creative agencies that lacked technical depth, and performance agencies that treated humans like algorithms.
            </p>
            <p>
              Founded on December 28, 2025, in the heart of New Delhi, we set out to build a bridge between these two worlds. We combine the soul of storytelling with the cold hard data of performance analytics. 
            </p>
            <p>
              Our team consists of rogue designers, data scientists, and market strategists who all share a common belief: results are the only metric that matters, but creativity is the only way to get them.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
