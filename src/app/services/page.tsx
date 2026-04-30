
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { BarChart3, Palette, Globe, TrendingUp, ShieldCheck, Cpu } from 'lucide-react';

export const metadata = {
  title: 'Our Services | Performance Marketing & Brand Strategy',
  description: 'Detailed advertising solutions including ROI-focused ads, brand identity, and digital growth strategies.',
};

export default function ServicesPage() {
  const deepServices = [
    {
      title: "Performance Advertising",
      focus: "ROI & Scaling",
      desc: "Our primary engine. We don't just run ads; we engineer high-performance sales funnels. Using multi-channel attribution and real-time optimization, we ensure every cent of your ad spend is working toward a conversion.",
      features: ["Multi-platform (FB, Google, LinkedIn)", "A/B Multivariate Testing", "Pixel & API Conversion Tracking"],
      icon: <TrendingUp className="w-12 h-12 text-primary" />,
      color: "bg-primary/10"
    },
    {
      title: "Brand Strategy",
      focus: "Identity & Positioning",
      desc: "How does the world see you? We define your brand's voice, visual DNA, and market positioning to ensure you're not just a commodity, but a cult favorite.",
      features: ["Market Gap Analysis", "Brand Voice & Guidelines", "Logo & Identity Systems"],
      icon: <ShieldCheck className="w-12 h-12 text-accent" />,
      color: "bg-accent/10"
    },
    {
      title: "Creative Content",
      focus: "High-Impact Visuals",
      desc: "In the attention economy, your creative is your most valuable asset. We produce high-impact video, graphic, and copy assets designed specifically to stop the scroll.",
      features: ["Viral Short-form Video", "Motion Graphics", "Direct-Response Copywriting"],
      icon: <Palette className="w-12 h-12 text-primary" />,
      color: "bg-primary/10"
    },
    {
      title: "Digital Growth",
      focus: "Holistic SEO & Social",
      desc: "Organic growth is the backbone of brand longevity. We implement deep-technical SEO and community-led social strategies that drive evergreen traffic.",
      features: ["Technical SEO Audit", "Content Cluster Strategy", "Community Management"],
      icon: <Globe className="w-12 h-12 text-accent" />,
      color: "bg-accent/10"
    }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-32 pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white">What We <span className="text-gradient">Do</span>.</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From performance-driven ad campaigns to comprehensive brand overhauls, we provide the full stack of digital services required to dominate your niche.
          </p>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {deepServices.map((service, i) => (
            <div key={i} className={`flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}>
              <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-bottom duration-700">
                <div className={`w-20 h-20 rounded-3xl ${service.color} flex items-center justify-center`}>
                  {service.icon}
                </div>
                <div className="space-y-4">
                  <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em]">{service.focus}</h2>
                  <h3 className="text-4xl font-bold text-white">{service.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-3 text-white/80 font-medium">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 w-full aspect-video glassmorphism rounded-3xl border-primary/20 p-1 flex items-center justify-center relative group">
                <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-2xl group-hover:bg-primary/10 transition-colors" />
                <Cpu className="w-32 h-32 text-white/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl font-black text-white/5 select-none">{i + 1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
