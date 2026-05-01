"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Linkedin, Instagram, Facebook } from 'lucide-react';
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
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

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
          ? "py-3 shadow-2xl border-b border-border"
          : "py-6 bg-transparent"
      )}
      style={{
        backgroundColor: isScrolled ? 'var(--navbar-bg)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
      }}
    >
      <div className="container-responsive flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div
            animate={{ scale: isScrolled ? 0.9 : 1 }}
            whileHover={{ rotate: 15, scale: 1.1 }}
            className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center shadow-lg overflow-hidden shrink-0"
            style={{
              background: 'var(--accent-primary)',
              boxShadow: '0 4px 12px var(--accent-glow)'
            }}
          >
            <img
              src="/Adz-Logo.png"
              alt="ADZ PRO Logo"
              className="w-6 h-6 md:w-7 md:h-7 object-contain"
            />
          </motion.div>

          <span
            className="text-xl md:text-2xl font-black tracking-tighter transition-all whitespace-nowrap"
            style={{
              color: 'var(--text-primary)',
              transform: isScrolled ? 'scale(0.95)' : 'scale(1)'
            }}
          >
            ADZ PRO
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-8 relative">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-bold transition-all duration-300 uppercase tracking-wider relative py-2",
                  pathname === link.href ? "text-accent-primary" : "text-text-secondary hover:text-accent-primary"
                )}
              >
                {link.name}
                {pathname === link.href && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-primary rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-6 border-l border-border pl-8">
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/in/adzpro/" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent-primary transition-colors p-2">
                <Linkedin size={18} />
              </a>
              <a href="https://www.instagram.com/adzpro.co.in" target="_blank" rel="noopener noreferrer" className="text-text-muted transition-colors instagram-hover p-2">
                <Instagram size={18} />
              </a>
              <a href="https://www.facebook.com/people/Adz-Pro/61564387431825/" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent-primary transition-colors p-2">
                <Facebook size={18} />
              </a>
            </div>
            <ThemeToggle />
            <Button asChild className="rounded-full px-8 font-bold shadow-lg min-h-[44px]" style={{ background: 'var(--accent-primary)', color: 'var(--text-inverse)' }}>
              <Link href="/contact">Free Audit</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-2 md:gap-4">
          <ThemeToggle />
          <button
            className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
            style={{ color: 'var(--text-primary)' }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="lg:hidden fixed inset-0 top-0 left-0 w-full h-screen z-[110] p-6 md:p-12 flex flex-col"
            style={{ background: 'var(--surface)', borderRight: '1px solid var(--border)' }}
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-2xl font-black tracking-tighter" style={{ color: 'var(--text-primary)' }}>ADZ PRO</span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-3" style={{ color: 'var(--text-primary)' }} aria-label="Close Menu">
                <X size={32} />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "text-3xl md:text-5xl font-black transition-colors uppercase tracking-tight py-4 border-b border-border/50",
                    pathname === link.href ? "text-accent-primary" : "text-text-muted"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-auto space-y-8 pb-8">
              <div className="flex items-center gap-8 justify-center">
                <a href="https://www.linkedin.com/in/adzpro/" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent-primary transition-all p-3">
                  <Linkedin size={28} />
                </a>
                <a href="https://www.instagram.com/adzpro.co.in" target="_blank" rel="noopener noreferrer" className="text-text-muted instagram-hover transition-all p-3">
                  <Instagram size={28} />
                </a>
                <a href="https://www.facebook.com/people/Adz-Pro/61564387431825/" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent-primary transition-all p-3">
                  <Facebook size={28} />
                </a>
              </div>
              <Button asChild className="w-full py-8 text-xl rounded-2xl font-black shadow-xl" style={{ background: 'var(--accent-primary)', color: 'var(--text-inverse)' }} onClick={() => setMobileMenuOpen(false)}>
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}