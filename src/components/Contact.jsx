import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Message sent! (Demo)');
  };

  return (
    <section id="contact" className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-widest text-purple-300/80">Contact</p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">Let’s build something imaginative</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-6 md:col-span-2">
            <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input
                  type="text"
                  required
                  placeholder="Name"
                  className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-purple-400/60"
                />
                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-purple-400/60"
                />
              </div>
              <textarea
                rows={5}
                required
                placeholder="Tell me about your project..."
                className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-purple-400/60"
              />
              <button
                type="submit"
                className="group inline-flex w-fit items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-fuchsia-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-fuchsia-900/30 transition hover:brightness-110"
              >
                Send Message
                <Send size={18} className="transition-transform group-hover:translate-x-0.5" />
              </button>
              {status && <p className="text-sm text-emerald-300">{status}</p>}
            </form>
          </div>

          <div className="space-y-4">
            <a
              href="mailto:hello@doni.dev"
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-5 hover:bg-white/[0.06]"
            >
              <Mail className="text-purple-300" />
              <div>
                <div className="text-sm text-white/80">Email</div>
                <div className="font-medium">hello@doni.dev</div>
              </div>
            </a>
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5 text-sm text-zinc-300">
              Prefer DMs? Reach out on your favorite platform.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
