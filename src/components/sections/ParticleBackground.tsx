"use client"

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

export default function ParticleBackground() {
  const { resolvedTheme } = useTheme();
  
  const particles = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      initialX: (i * 137.5) % 2000,
      initialY: (i * 97.3 + 50) % 2000,
      animateX: [(i * 137.5) % 2000, (i * 200) % 2000, (i * 137.5) % 2000],
      animateY: [(i * 97.3) % 2000, (i * 150) % 2000, (i * 97.3) % 2000],
      duration: 20 + (i % 10) * 4,
    }));
  }, []);

  const isDark = resolvedTheme === 'dark';

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ x: p.initialX, y: p.initialY }}
          animate={{ 
            x: p.animateX,
            y: p.animateY
          }}
          transition={{ 
            duration: p.duration, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute w-1.5 h-1.5 rounded-full blur-[1px]"
          style={{ 
            backgroundColor: isDark ? 'rgba(255,255,255,0.1)' : 'var(--accent-primary)',
            opacity: isDark ? 1 : 0.15
          }}
        />
      ))}
    </div>
  );
}