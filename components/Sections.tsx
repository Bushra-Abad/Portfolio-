import { ArrowUp } from 'lucide-react';
import Reveal from './Reveal';
import { profile, services, values } from '@/data/portfolio';

export function Services() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <span className="font-display text-xs font-semibold tracking-[0.22em] text-brand">WHAT I DO</span>
      <h2 className="mt-3 max-w-[20ch] font-display text-3xl font-bold tracking-tight sm:text-5xl">Three ways I help you move forward.</h2>
      <p className="mb-10 mt-3 max-w-xl text-mut">One engineer for the product that runs your business and the intelligence inside it.</p>
      <div className="grid gap-4 md:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.1}>
            <div className="h-full rounded-3xl border border-line bg-card p-7">
              <h3 className="font-display text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-mut">{s.text}</p>
              <ul className="mt-4 grid gap-2 text-sm">{s.points.map((p) => <li key={p} className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-amber" />{p}</li>)}</ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20">
      <span className="font-display text-xs font-semibold tracking-[0.22em] text-brand">ABOUT</span>
      <h2 className="mt-3 max-w-[20ch] font-display text-3xl font-bold tracking-tight sm:text-5xl">The person behind the code.</h2>
      <Reveal className="mt-8 grid gap-6 rounded-3xl border border-line bg-card p-8 sm:grid-cols-[auto_1fr]">
        <div className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-brand to-[#8B7CFF] font-display text-2xl font-bold text-bg" aria-hidden>BA</div>
        <div>
          <h3 className="font-display text-2xl font-bold">{profile.name}</h3>
          <p className="mb-3 font-medium text-amber">Web developer · AI engineer · BS Computer Science, FAST-NUCES (2026)</p>
          <p className="mb-3 max-w-2xl text-mut">I bring a designer’s eye and an engineer’s care to what I make. I’m based in {profile.location}, and outside of code I love photography, hiking, climbing, and sports.</p>
          <p className="mb-5 max-w-2xl text-mut">I’m also a co-founder of Horizon Experts, a remote-first team building AI training data workflows and digital products.</p>
          <a href={profile.horizon} target="_blank" rel="noopener noreferrer" className="rounded-full border border-line px-5 py-2.5 font-semibold hover:border-brand">Visit Horizon Experts ↗</a>
        </div>
      </Reveal>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {values.map(([t, d], i) => <Reveal key={t} delay={i * 0.08}><div className="border-t-2 border-brand pt-4"><b className="font-display">{t}</b><p className="text-sm text-mut">{d}</p></div></Reveal>)}
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line py-8 text-sm text-mut">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5">
        <span>© {new Date().getFullYear()} {profile.name} · {profile.title} · {profile.location}</span>
        <span className="flex flex-wrap items-center gap-5">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-ink">GitHub</a>
          {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink">LinkedIn</a>}
          <a href={`mailto:${profile.email}`} className="hover:text-ink">Email</a>
          <a href="#top" className="inline-flex items-center gap-1 rounded-full border border-line px-3 py-1.5 hover:border-brand">Back to top <ArrowUp size={14} aria-hidden /></a>
        </span>
      </div>
    </footer>
  );
}
