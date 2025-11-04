import React from 'react';
import { Rocket, Shield, Sparkles, Globe } from 'lucide-react';

const services = [
  {
    icon: Rocket,
    title: 'Product Engineering',
    desc: 'From prototype to production with performance at the core.',
  },
  {
    icon: Shield,
    title: 'Cloud & Security',
    desc: 'Hardened architectures, compliance, and 24/7 observability.',
  },
  {
    icon: Sparkles,
    title: 'Design Systems',
    desc: 'Cohesive UI kits, motion, and accessible component libraries.',
  },
  {
    icon: Globe,
    title: 'Global Delivery',
    desc: 'Distributed teams delivering reliably across time zones.',
  },
];

const Services = () => {
  return (
    <section id="services" className="relative bg-black py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(251,146,60,0.15),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(245,158,11,0.12),transparent_35%)] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">What We Do</h2>
          <p className="mt-3 text-white/80">
            End‑to‑end solutions that turn complex challenges into seamless experiences.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-orange-500/40 hover:bg-white/10"
            >
              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-orange-500/10 blur-2xl" />
              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 text-black shadow-lg shadow-orange-500/30">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-white/75">{desc}</p>
                <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <button className="mt-4 text-sm font-medium text-orange-300 hover:text-orange-200">
                  Learn more →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
