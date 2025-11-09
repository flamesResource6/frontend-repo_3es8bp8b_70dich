import React from 'react';
import { Sparkles, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-widest text-purple-300/80">About</p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">Futuristic craft, human stories</h2>
        </div>

        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <p className="text-zinc-300">
              Doni Wahyudi is an AI software engineer and game developer blending systems thinking with cinematic
              narrative design. He builds agents that feel helpful and games that feel alive—focused on smooth
              performance, expressive controls, and accessibility.
            </p>
            <p className="mt-4 text-zinc-300">
              His approach is simple: prototype fast, polish relentlessly, and ship experiences that surprise. From tools
              for writers to responsive shaders, Doni believes technology should amplify imagination.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-zinc-300">
              <span className="rounded-md border border-white/10 bg-white/5 px-3 py-1">TypeScript</span>
              <span className="rounded-md border border-white/10 bg-white/5 px-3 py-1">Python</span>
              <span className="rounded-md border border-white/10 bg-white/5 px-3 py-1">FastAPI</span>
              <span className="rounded-md border border-white/10 bg-white/5 px-3 py-1">React</span>
              <span className="rounded-md border border-white/10 bg-white/5 px-3 py-1">Unity</span>
              <span className="rounded-md border border-white/10 bg-white/5 px-3 py-1">Shaders</span>
              <span className="rounded-md border border-white/10 bg-white/5 px-3 py-1">Procedural</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
              <div className="mb-2 flex items-center gap-2 text-purple-200">
                <Sparkles size={18} /> Highlights
              </div>
              <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-300">
                <li>Built multi-agent pipelines for creative tools</li>
                <li>Optimized gameplay feel with input buffering</li>
                <li>Rapid prototyping: graybox to polish</li>
              </ul>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
              <div className="mb-2 flex items-center gap-2 text-purple-200">
                <Award size={18} /> Recognition
              </div>
              <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-300">
                <li>Game jam finalist: narrative mechanics</li>
                <li>Open-source contributor: AI tooling</li>
                <li>Talks on system design for play</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
