import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Marquee } from './components/Marquee';
import { Now } from './components/Now';
import { Work } from './components/Work';
import { Experience } from './components/Experience';
import { Recognition } from './components/Recognition';
import { Press } from './components/Press';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function Page() {
  return (
    <main>
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Now />
      <Work />
      <Experience />
      <Recognition />
      <Press />
      <Contact />
      <Footer />
    </main>
  );
}
