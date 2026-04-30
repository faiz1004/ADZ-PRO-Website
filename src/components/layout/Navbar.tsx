
"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from '@/components/ThemeToggle';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
      isScrolled ? "py-3 bg-background/70 backdrop-blur-xl border-b border-foreground/5 shadow-2xl" : "py-6 bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div 
            whileHover={{ rotate: 15, scale: 1.1 }}
            className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20"
          >
            <Rocket className="text-white w-5 h-5" />
          </motion.div>
          <span className="text-2xl font-black tracking-tighter text-foreground">ADZ PRO</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={cn(
                "text-sm font-bold transition-all duration-300 hover:text-primary uppercase tracking-wider",
                pathname === link.href ? "active-nav-link" : "text-foreground/60"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button asChild className="rounded-full px-8 font-bold bg-primary text-white hover:bg-primary/90 shadow-xl shadow-primary/20">
              <Link href="/contact">Free Audit</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button 
            className="text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="md:hidden fixed inset-0 top-0 left-0 w-full h-screen bg-background z-[110] p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="text-2xl font-black tracking-tighter">ADZ PRO</span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2">
                <X size={32} />
              </button>
            </div>
            
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "text-4xl font-black transition-colors uppercase tracking-tight",
                    pathname === link.href ? "text-primary" : "text-foreground/40"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-auto space-y-4">
              <Button asChild className="w-full py-8 text-xl rounded-2xl font-black" onClick={() => setMobileMenuOpen(false)}>
                <Link href="/contact">Get Started</Link>
              </Button>
              <div className="flex justify-center gap-6 py-4">
                <span className="text-foreground/40 text-sm">Follow us</span>
                <div className="h-px flex-1 bg-foreground/10 mt-2.5" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
