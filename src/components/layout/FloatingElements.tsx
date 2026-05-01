"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ArrowUp, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function FloatingElements() {
  const [showScroll, setShowScroll] = useState(false);
  const [showCookie, setShowCookie] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    
    // Cookie banner logic
    const consent = localStorage.getItem('adzpro_cookie_consent');
    if (!consent) setTimeout(() => setShowCookie(true), 2000);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('adzpro_cookie_consent', 'true');
    setShowCookie(false);
  };

  return (
    <>
      {/* WhatsApp Button */}
      <motion.a 
        href="https://wa.me/918278221944"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 z-[90] w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-[#25D366]/40 transition-all cursor-pointer"
      >
        <MessageCircle size={32} />
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      </motion.a>

      {/* Back to Top */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-28 right-8 z-[80] w-12 h-12 glassmorphism rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-primary transition-all shadow-xl"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Cookie Banner */}
      <AnimatePresence>
        {showCookie && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 w-full z-[120] p-6"
          >
            <div className="max-w-4xl mx-auto glassmorphism p-6 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl border-white/20">
              <div className="flex-1 text-center md:text-left">
                <h5 className="font-bold text-white text-lg">Cookies & Privacy</h5>
                <p className="text-sm text-white/60">We use cookies to optimize your experience. By continuing, you agree to our privacy policy.</p>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="ghost" onClick={() => setShowCookie(false)} className="text-white/40">Decline</Button>
                <Button onClick={acceptCookies} className="rounded-full px-8">Accept All</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}