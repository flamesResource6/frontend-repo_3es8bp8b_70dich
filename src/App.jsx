import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 text-white">
        <a href="#top" className="font-semibold tracking-tight">Doni Wahyudi</a>
        <nav className="hidden gap-6 text-sm text-white/80 md:flex">
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-black font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-black py-10 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Doni Wahyudi — Built with care and curiosity.
      </footer>
    </div>
  );
}
