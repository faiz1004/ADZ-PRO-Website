
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { ExternalLink, CheckCircle, ArrowUpRight } from 'lucide-react';

export const metadata = {
  title: 'Case Studies | Adz Pro Success Stories',
  description: 'Explore our high-ROI case studies and digital marketing results for diverse global brands.',
};

export default function PortfolioPage() {
  const cases = [
    {
      title: "NexGen E-Commerce Suite",
      category: "Digital Marketing",
      image: PlaceHolderImages.find(img => img.id === 'portfolio-1')?.imageUrl || '',
      challenge: "High ad spend with stagnant ROI and 60% cart abandonment.",
      solution: "Implemented full-funnel remarketing and creative asset optimization using dynamic product ads.",
      results: "200% increase in monthly revenue, 45% reduction in CAC.",
      tags: ["Performance Ads", "E-com"]
    },
    {
      title: "Lumina Brand Identity",
      category: "Branding",
      image: PlaceHolderImages.find(img => img.id === 'portfolio-2')?.imageUrl || '',
      challenge: "Outdated visual identity failing to attract premium enterprise clients.",
      solution: "Complete visual rebranding including motion guidelines and high-tech UI kits.",
      results: "127% increase in high-ticket leads within 90 days of launch.",
      tags: ["Strategy", "Design"]
    },
    {
      title: "Velocity Social Strategy",
      category: "Social Media",
      image: PlaceHolderImages.find(img => img.id === 'portfolio-3')?.imageUrl || '',
      challenge: "Zero organic engagement and failing to reach the Gen-Z demographic.",
      solution: "Designed a viral-first short-form video content strategy and influencer bridge.",
      results: "5M+ impressions in 30 days, 85k new organic followers.",
      tags: ["Content", "Viral"]
    },
    {
      title: "Insight Analytics Portal",
      category: "Performance Ads",
      image: PlaceHolderImages.find(img => img.id === 'portfolio-4')?.imageUrl || '',
      challenge: "Lack of transparent data across multi-channel advertising campaigns.",
      solution: "Built a custom analytics dashboard integrating real-time spend across 5 platforms.",
      results: "Improved budget allocation efficiency by 34%, reducing overall wasted spend.",
      tags: ["Data", "Ads"]
    }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-20 bg-background text-center">
        <div className="max-w-7xl mx-auto px-6 space-y-6">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white">Our <span className="text-gradient">Impact</span>.</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real data. Real results. Explore how we've helped diverse brands achieve exceptional digital growth through strategic innovation.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-32">
          {cases.map((c, i) => (
            <div key={i} className="group grid lg:grid-cols-2 gap-16 items-center">
              <div className={`relative rounded-3xl overflow-hidden glassmorphism border-white/5 p-2 ${i % 2 !== 0 ? 'lg:order-last' : ''}`}>
                <Image 
                  src={c.image}
                  alt={c.title}
                  width={800}
                  height={600}
                  className="rounded-2xl object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-6 left-6 flex gap-2">
                  {c.tags.map((tag, t) => (
                    <span key={t} className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs font-bold text-accent border border-accent/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em]">{c.category}</h2>
                  <h3 className="text-4xl font-bold text-white group-hover:text-primary transition-colors">{c.title}</h3>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className="text-sm font-bold text-white/50 uppercase tracking-widest">The Challenge</p>
                    <p className="text-lg text-muted-foreground leading-snug">{c.challenge}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-bold text-white/50 uppercase tracking-widest">Our Solution</p>
                    <p className="text-lg text-muted-foreground leading-snug">{c.solution}</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20 space-y-2">
                    <div className="flex items-center gap-2 text-primary">
                      <CheckCircle className="w-5 h-5" />
                      <p className="text-sm font-bold uppercase tracking-widest">The Results</p>
                    </div>
                    <p className="text-2xl font-bold text-white">{c.results}</p>
                  </div>
                </div>

                <Button className="rounded-full px-8 py-6 group">
                  View Full Case Study <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
