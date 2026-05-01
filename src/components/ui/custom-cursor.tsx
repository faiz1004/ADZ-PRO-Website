"use client"

import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springX = useSpring(cursorX, { stiffness: 500, damping: 28 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 28 });

  useEffect(() => {
    // Disable on mobile/touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const checkHover = () => {
      const hoveredElement = document.querySelectorAll('a, button, .interactive-card');
      hoveredElement.forEach(el => {
        el.addEventListener('mouseenter', () => setIsHovering(true));
        el.addEventListener('mouseleave', () => setIsHovering(false));
      });
    };

    window.addEventListener('mousemove', moveCursor);
    checkHover();
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY, isVisible]);

  // Don't render on mobile or if hidden
  if (typeof window !== 'undefined' && (window.innerWidth < 768 || 'ontouchstart' in window)) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[10000] border-2 border-accent-primary mix-blend-screen hidden lg:block"
      style={{
        x: springX,
        y: springY,
        translateX: '-50%',
        translateY: '-50%',
        scale: isHovering ? 2 : 1,
        opacity: isVisible ? 0.3 : 0,
        backgroundColor: 'var(--accent-primary)',
      }}
    />
  );
}