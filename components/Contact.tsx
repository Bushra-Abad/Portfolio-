'use client';
import { useState, type FormEvent } from 'react';
import { profile } from '@/data/portfolio';

const fields = [['name', 'Name'], ['email', 'Email'], ['subject', 'Subject'], ['message', 'Message']] as const;

export default function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState('');

  // No backend: a valid form opens the visitor's email app. Nothing is sent until they press send there.
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = (k: string) => String(f.get(k) || '').trim();
    const er: Record<string, string> = {};
    if (!v('name')) er.name = 'Enter your name.';
    if (!/^\S+@\S+\.\S+$/.test(v('email'))) er.email = 'Enter a valid email address.';
    if (!v('subject')) er.subject = 'Enter a subject.';
    if (!v('message')) er.message = 'Write a message.';
    setErrors(er);
    if (Object.keys(er).length) return setStatus('Please fix the highlighted fields.');
    const body = `${v('message')}\n\nFrom: ${v('name')} (${v('email')})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(v('subject'))}&body=${encodeURIComponent(body)}`;
    setStatus('Your email app should open with the message ready. It is sent only when you press send there.');
  }

  return (
    <section id="contact" className="border-y border-line bg-bg2 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2">
        <div>
          <span className="font-display text-xs font-semibold tracking-[0.22em] text-brand">CONTACT</span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-5xl">Let’s build what’s next.</h2>
          <p className="mt-4 max-w-md text-mut">Tell me about the product or AI idea you have in mind. I’ll reply with a clear scope and timeline.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className="rounded-full bg-brand px-6 py-3 font-semibold text-bg">{profile.email}</a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="rounded-full border border-line px-6 py-3 font-semibold hover:border-brand">GitHub ↗</a>
            {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-full border border-line px-6 py-3 font-semibold hover:border-brand">LinkedIn ↗</a>}
          </div>
        </div>
        <form onSubmit={onSubmit} noValidate className="grid gap-4">
          {fields.map(([k, label]) => (
            <label key={k} className="grid gap-1 text-sm font-medium">
              {label}
              {k === 'message'
                ? <textarea name={k} rows={5} aria-invalid={!!errors[k]} className="rounded-xl border border-line bg-card px-4 py-3 aria-[invalid=true]:border-red-400" />
                : <input name={k} type={k === 'email' ? 'email' : 'text'} aria-invalid={!!errors[k]} className="rounded-xl border border-line bg-card px-4 py-3 aria-[invalid=true]:border-red-400" />}
              <span className="min-h-[1em] text-xs text-red-300">{errors[k]}</span>
            </label>
          ))}
          <button type="submit" className="rounded-full bg-brand px-6 py-3 font-semibold text-bg hover:brightness-110">Send message</button>
          <p role="status" className="min-h-[1.5em] text-sm text-mut">{status}</p>
        </form>
      </div>
    </section>
  );
}
