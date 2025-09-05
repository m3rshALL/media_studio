'use client';

import { useReducedMotion } from 'framer-motion';
import { ReactNode, createContext, useContext } from 'react';

interface MotionContextValue {
  shouldReduceMotion: boolean;
}

const MotionContext = createContext<MotionContextValue | undefined>(undefined);

interface MotionProviderProps {
  children: ReactNode;
}

export function MotionProvider({ children }: MotionProviderProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <MotionContext.Provider value={{ shouldReduceMotion: shouldReduceMotion || false }}>
      {children}
    </MotionContext.Provider>
  );
}

export function useMotionPreferences() {
  const context = useContext(MotionContext);
  if (context === undefined) {
    throw new Error('useMotionPreferences must be used within a MotionProvider');
  }
  return context;
}