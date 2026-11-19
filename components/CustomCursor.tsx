'use client';
import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = cursor.current;
    if (!element) return;

    const handleMouseMove = (event: MouseEvent) => {
      element.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;
      element.dataset.active = 'true';
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return <div ref={cursor} className="custom-cursor" aria-hidden="true" />;
}
