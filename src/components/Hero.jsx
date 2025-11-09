import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Gamepad2, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* Spline 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for depth, don't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 pt-28 md:pt-36">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
          <Rocket size={18} className="text-purple-300" />
          <span className="text-sm text-purple-200/90">AI Software Engineer • Game Developer</span>
        </div>

        <h1 className="font-[800] tracking-tight text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
          Doni Wahyudi
          <span className="block bg-gradient-to-r from-purple-300 via-fuchsia-300 to-cyan-200 bg-clip-text text-transparent">Innovative Storytelling in Code & Play</span>
        </h1>

        <p className="max-w-2xl text-base text-zinc-300 md:text-lg">
          I craft intelligent systems and cinematic game experiences—bridging AI-driven design with immersive narratives.
          Smooth interactions, performant tech, and playful polish.
        </p>

        <div className="mt-2 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-fuchsia-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-fuchsia-900/30 transition hover:brightness-110"
          >
            View Projects
            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            <Gamepad2 size={18} />
            About
          </a>
        </div>
      </div>
    </section>
  );
}
