'use client';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import Reveal from './Reveal';
import { profile, projects, type Project } from '@/data/portfolio';

export default function Projects() {
  const [open, setOpen] = useState<Project | null>(null);
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(null);
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, []);

  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-20">
      <span className="font-display text-xs font-semibold tracking-[0.22em] text-brand">SELECTED WORK</span>
      <h2 className="mt-3 max-w-[20ch] font-display text-3xl font-bold tracking-tight sm:text-5xl">Real engineering, intelligent solutions.</h2>
      <p className="mb-10 mt-3 text-mut">Nine projects across web, AI, and computer vision. Select one for the case study.</p>
      <div className="border-t border-line">
        {projects.map((p, i) => (
          <Reveal key={p.name}>
            <button onClick={() => setOpen(p)} className="grid w-full grid-cols-[2.5rem_1fr] gap-x-6 gap-y-2 border-b border-line py-6 text-left transition hover:bg-gradient-to-r hover:from-brand/10 md:grid-cols-[3.5rem_1fr_1.6fr_auto]">
              <span className="pt-1 font-display text-sm font-semibold text-amber">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="font-display text-2xl font-bold">{p.name}</h3>
              <div className="col-start-2 md:col-start-auto">
                <p className="text-mut">{p.desc}</p>
                <ul className="mt-3 flex flex-wrap gap-1.5">{p.stack.map((t) => <li key={t} className="rounded-full border border-line px-2.5 py-0.5 text-xs text-mut">{t}</li>)}</ul>
              </div>
              <span className="col-start-2 inline-flex items-center gap-1 text-sm font-medium text-brand md:col-start-auto">Case study <ArrowUpRight size={16} aria-hidden /></span>
            </button>
          </Reveal>
        ))}
      </div>
      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(null)}>
            <motion.div role="dialog" aria-modal="true" aria-labelledby="cs-title" onClick={(e) => e.stopPropagation()} initial={{ y: 30, scale: 0.97 }} animate={{ y: 0, scale: 1 }} exit={{ y: 20, opacity: 0 }} className="max-h-[88vh] w-full max-w-2xl overflow-auto rounded-3xl border border-line bg-card p-7">
              <button autoFocus onClick={() => setOpen(null)} aria-label="Close case study" className="float-right rounded-full border border-line p-2 hover:border-brand"><X size={18} /></button>
              <h3 id="cs-title" className="font-display text-3xl font-bold">{open.name}</h3>
              <h4 className="mt-6 font-display text-sm font-semibold text-brand">Overview</h4><p className="text-mut">{open.desc}</p>
              <h4 className="mt-5 font-display text-sm font-semibold text-brand">Problem</h4><p className="text-mut">{open.problem}</p>
              <h4 className="mt-5 font-display text-sm font-semibold text-brand">Key features</h4>
              <ul className="list-disc pl-5 text-mut">{open.points.map((x) => <li key={x}>{x}</li>)}</ul>
              <h4 className="mt-5 font-display text-sm font-semibold text-brand">Stack</h4>
              <ul className="mt-2 flex flex-wrap gap-1.5">{open.stack.map((t) => <li key={t} className="rounded-full border border-line px-2.5 py-0.5 text-xs text-mut">{t}</li>)}</ul>
              <a href={open.repo ?? profile.github} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-1 rounded-full bg-brand px-5 py-2.5 font-semibold text-bg">{open.repo ? 'View repository' : 'GitHub profile'} <ArrowUpRight size={16} aria-hidden /></a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
