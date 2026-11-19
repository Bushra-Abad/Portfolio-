import { profile } from '@/data/portfolio';

const links = [['Home', '#top'], ['Work', '#work'], ['About', '#about'], ['Contact', '#contact']];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-8 px-5">
        <a href="#top" className="mr-auto font-display text-base font-bold tracking-[0.18em]">BUSHRA<span className="text-brand">ABAD</span></a>
        <nav aria-label="Main" className="hidden gap-7 text-sm text-mut sm:flex">
          {links.map(([l, h]) => <a key={h} href={h} className="hover:text-ink">{l}</a>)}
        </nav>
        {profile.cv && <a href={profile.cv} download className="hidden rounded-full border border-line px-4 py-2 text-sm font-medium hover:border-brand md:inline-block">Download CV</a>}
        <a href="#contact" className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-bg hover:brightness-110">Get in touch</a>
      </div>
    </header>
  );
}
