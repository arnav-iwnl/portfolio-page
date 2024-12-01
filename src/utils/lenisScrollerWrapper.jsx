// src/context/LenisContext.jsx
import React, { createContext, useContext, useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

const LenisContext = createContext();

export const LenisProvider = ({ children }) => {
  const lenisRef = useRef();

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      smooth: true,
    });

    // Attach Lenis to the ref
    lenisRef.current = lenis;

    // Handle requestAnimationFrame
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Clean up on unmount
    };
  }, []);

  return (
    <LenisContext.Provider value={lenisRef.current}>
      {children}
    </LenisContext.Provider>
  );
};

// Custom hook to use Lenis
export const useLenis = () => {
  const context = useContext(LenisContext);
  if (!context) {
    throw new Error('useLenis must be used within a LenisProvider');
  }
  return context;
};
