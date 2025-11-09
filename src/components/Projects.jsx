import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Cpu, Bot, Joystick } from 'lucide-react';

const projects = [
  {
    title: 'NeuroWeave',
    tag: 'AI • Systems',
    description:
      'A modular agent framework that weaves together reasoning, memory, and tools for real-time creative assistance.',
    link: '#',
    icon: Cpu,
    accent: 'from-purple-500/20 to-fuchsia-500/20',
  },
  {
    title: 'Astral Courier',
    tag: 'Game • Narrative',
    description:
      'A story-driven space runner where choices ripple across timelines. Built with lightweight shaders and tight feel.',
    link: '#',
    icon: Joystick,
    accent: 'from-cyan-500/20 to-violet-500/20',
  },
  {
    title: 'Mythic Scribe',
    tag: 'AI • Tools',
    description:
      'An interactive writing companion that co-directs scenes, suggests beats, and keeps continuity consistent.',
    link: '#',
    icon: Bot,
    accent: 'from-emerald-500/20 to-cyan-500/20',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-sm uppercase tracking-widest text-purple-300/80">Projects</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Interactive Showcase</h2>
          </div>
          <a
            href="#contact"
            className="hidden rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur hover:bg-white/10 md:inline-block"
          >
            Get in touch
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-5 backdrop-blur-sm"
            >
              <div className={`pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${p.accent} blur-2xl`} />

              <div className="relative z-10">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                  <p.icon size={16} className="text-purple-300" />
                  {p.tag}
                </div>
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-zinc-300">{p.description}</p>

                <div className="mt-4 inline-flex items-center gap-2 text-sm text-purple-300/90">
                  View details
                  <ExternalLink size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              <motion.div
                className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
                initial={false}
                animate={{}}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10" />
              </motion.div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
