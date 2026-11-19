'use client';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowUpRight } from 'lucide-react';
import Scene from './Scene';
import { stack } from '@/data/portfolio';

export default function Hero() {
  const root = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      gsap.from('.hero-in', { y: 40, opacity: 0, duration: 0.9, ease: 'power3.out', stagger: 0.12, delay: 0.1 });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root}>
      <section className="relative overflow-hidden">
        <div className="absolute inset-y-0 right-0 w-full opacity-70 md:w-3/5 md:opacity-100"><Scene /></div>
        <div className="relative z-10 mx-auto max-w-6xl px-5 pb-24 pt-20 md:pb-32 md:pt-32">
          <span className="hero-in inline-flex gap-2 rounded-full border border-line bg-bg2 px-4 py-1.5 text-sm text-mut"><b className="font-medium text-amber">Open to work</b> AI developer and full-stack engineer</span>
          <h1 className="hero-in mt-6 max-w-[14ch] font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">Intelligent software, <em className="not-italic text-brand">built with care.</em></h1>
          <p className="hero-in mt-6 max-w-xl text-lg text-mut">I’m Bushra, a web developer and AI engineer. I build dependable full-stack products and intelligent systems, from real-time web apps to fine-tuned vision-language models.</p>
          <div className="hero-in mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="rounded-full bg-brand px-6 py-3 font-semibold text-bg hover:brightness-110">Get in touch</a>
            <a href="#work" className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-semibold hover:border-brand">Explore my work <ArrowUpRight size={18} aria-hidden /></a>
          </div>
        </div>
      </section>
      <div className="flex overflow-hidden border-y border-line bg-bg2 py-4" aria-hidden="true">
        <div className="flex min-w-max animate-marquee gap-10 pr-10 font-display font-semibold text-mut">
          {[...stack, ...stack].map((s, i) => <span key={i} className="whitespace-nowrap after:ml-10 after:text-amber after:content-['•']">{s}</span>)}
        </div>
      </div>
    </div>
  );
}
