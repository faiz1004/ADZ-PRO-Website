"use client"

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export default function ParticleBackground() {
  // Use a seeded approach for the initial render, but safe since it's client-only
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

  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
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
          className="absolute w-1 h-1 bg-white rounded-full blur-[1px]"
        />
      ))}
    </div>
  );
}
