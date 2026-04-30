import React from 'react';
import { 
  BarChart3, 
  Palette, 
  Share2, 
  Target, 
  Zap, 
  Globe 
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function Services() {
  const services = [
    {
      title: "Digital Marketing",
      description: "Holistic marketing strategies designed to increase your online presence and conversion rates.",
      icon: <Globe className="w-10 h-10 text-primary" />,
    },
    {
      title: "Brand Strategy",
      description: "Developing unique brand identities that resonate with your target audience and stand out from the crowd.",
      icon: <Target className="w-10 h-10 text-accent" />,
    },
    {
      title: "Creative Content",
      description: "High-impact visual and textual content tailored for maximum engagement across all digital platforms.",
      icon: <Palette className="w-10 h-10 text-primary" />,
    },
    {
      title: "Social Media Management",
      description: "End-to-end management of your social presence to build community and foster customer loyalty.",
      icon: <Share2 className="w-10 h-10 text-accent" />,
    },
    {
      title: "Performance Advertising",
      description: "Data-driven paid campaigns that deliver measurable ROI and scale your business efficiently.",
      icon: <BarChart3 className="w-10 h-10 text-primary" />,
    },
    {
      title: "Search Optimization",
      description: "Technical and creative SEO solutions to rank higher and capture high-intent traffic.",
      icon: <Zap className="w-10 h-10 text-accent" />,
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-20">
          <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em]">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Solutions to Scale Your Brand</h3>
          <p className="text-lg text-muted-foreground">
            We provide a comprehensive suite of digital solutions designed to propel your business forward in the digital age.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group relative overflow-hidden bg-white/5 border-white/10 hover:border-primary/50 transition-all duration-300">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 group-hover:opacity-20 transition-all">
                {service.icon}
              </div>
              <CardContent className="p-8 pt-12 space-y-4">
                <div className="w-16 h-16 rounded-2xl glassmorphism flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-bold text-white">{service.title}</h4>
                <p className="text-muted-foreground leading-relaxed group-hover:text-white/80 transition-colors">
                  {service.description}
                </p>
                <div className="pt-4">
                  <span className="text-sm font-bold text-primary group-hover:text-accent transition-colors cursor-pointer inline-flex items-center gap-2">
                    Learn More 
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}