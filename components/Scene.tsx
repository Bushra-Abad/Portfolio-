'use client';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const Hero3D = dynamic(() => import('./Hero3D'), { ssr: false });

// Loads the 3D scene only when the device supports WebGL and has enough cores;
// otherwise a plain CSS glow is shown. With reduced motion the scene stays still.
export default function Scene() {
  const [mode, setMode] = useState<'off' | 'on' | 'still'>('off');
  useEffect(() => {
    try {
      const c = document.createElement('canvas');
      const gl = c.getContext('webgl2') || c.getContext('webgl');
      const weak = (navigator.hardwareConcurrency || 8) < 4;
      if (!gl || weak) return;
      setMode(matchMedia('(prefers-reduced-motion: reduce)').matches ? 'still' : 'on');
    } catch { /* keep fallback */ }
  }, []);
  return (
    <div className="h-full w-full" aria-hidden="true">
      {mode === 'off' ? (
        <div className="h-full w-full bg-[radial-gradient(closest-side,rgba(92,168,255,.35),rgba(255,184,107,.1)_60%,transparent)]" />
      ) : (
        <Hero3D still={mode === 'still'} />
      )}
    </div>
  );
}
