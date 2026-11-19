import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { Services, About, Footer } from '@/components/Sections';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <Services />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
