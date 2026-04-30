import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

export function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "NexGen E-Commerce Suite",
      category: "Digital Marketing",
      image: PlaceHolderImages.find(img => img.id === 'portfolio-1')?.imageUrl || '',
      description: "A comprehensive digital marketing overhaul for a leading tech retailer, resulting in a 200% increase in sales."
    },
    {
      id: 2,
      title: "Lumina Brand Identity",
      category: "Branding",
      image: PlaceHolderImages.find(img => img.id === 'portfolio-2')?.imageUrl || '',
      description: "Complete visual rebranding and strategic positioning for a sustainable energy firm."
    },
    {
      id: 3,
      title: "Velocity Social Strategy",
      category: "Social Media",
      image: PlaceHolderImages.find(img => img.id === 'portfolio-3')?.imageUrl || '',
      description: "Viral content campaign that generated over 5 million impressions in 30 days."
    },
    {
      id: 4,
      title: "Insight Analytics Portal",
      category: "Performance Ads",
      image: PlaceHolderImages.find(img => img.id === 'portfolio-4')?.imageUrl || '',
      description: "Custom performance tracking dashboard integrated with multi-channel ad spend."
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="space-y-6 max-w-2xl">
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em]">Our Work</h2>
            <h3 className="text-4xl md:text-5xl font-bold">Featured Case Studies</h3>
            <p className="text-lg text-muted-foreground">
              Explore how we've helped diverse brands achieve exceptional digital growth through strategic innovation.
            </p>
          </div>
          <Button variant="outline" className="rounded-full px-8 py-6 hidden md:flex glassmorphism">
            View All Projects
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6">
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  data-ai-hint="project showcase"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <Button className="rounded-full shadow-lg">
                      View Case Study <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-xs font-bold text-accent uppercase tracking-widest">{project.category}</span>
                <h4 className="text-2xl font-bold hover:text-primary transition-colors">{project.title}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}