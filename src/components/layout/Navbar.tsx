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
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
        isScrolled 
          ? "py-3 shadow-2xl" 
          : "py-6 bg-transparent"
      )}
      style={{ 
        backgroundColor: isScrolled ? 'var(--navbar-bg)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--border)' : 'none'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div 
            whileHover={{ rotate: 15, scale: 1.1 }}
            className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg"
            style={{ 
              background: 'var(--accent-primary)',
              boxShadow: '0 4px 12px var(--accent-glow)'
            }}
          >
            <Rocket className="text-white w-5 h-5" />
          </motion.div>
          <span 
            className="text-2xl font-black tracking-tighter"
            style={{ color: 'var(--text-primary)' }}
          >
            ADZ PRO
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={cn(
                "text-sm font-bold transition-all duration-300 uppercase tracking-wider",
                pathname === link.href ? "active-nav-link" : ""
              )}
              style={{ 
                color: pathname === link.href ? 'var(--accent-primary)' : 'var(--text-secondary)' 
              }}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button asChild className="rounded-full px-8 font-bold" style={{ background: 'var(--accent-primary)', color: 'var(--text-inverse)' }}>
              <Link href="/contact">Free Audit</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button 
            className="p-2"
            style={{ color: 'var(--text-primary)' }}
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
            className="md:hidden fixed inset-0 top-0 left-0 w-full h-screen z-[110] p-8 flex flex-col"
            style={{ background: 'var(--surface)', borderLeft: '1px solid var(--border)' }}
          >
            <div className="flex justify-between items-center mb-16">
              <span className="text-2xl font-black tracking-tighter" style={{ color: 'var(--text-primary)' }}>ADZ PRO</span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2" style={{ color: 'var(--text-primary)' }}>
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
                    pathname === link.href ? "" : ""
                  )}
                  style={{ color: pathname === link.href ? 'var(--accent-primary)' : 'var(--text-muted)' }}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-auto space-y-4">
              <Button asChild className="w-full py-8 text-xl rounded-2xl font-black" style={{ background: 'var(--accent-primary)', color: 'var(--text-inverse)' }} onClick={() => setMobileMenuOpen(false)}>
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}