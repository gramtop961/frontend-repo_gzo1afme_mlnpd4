import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative bg-black py-20 text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Who We Are</h2>
            <p className="mt-4 text-white/80">
              We help ambitious brands and enterprises launch products that feel as good as they
              perform. Our team blends strategy, design, and engineering to build robust platforms,
              stunning interfaces, and scalable systems.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <p className="text-sm text-white/60">Approach</p>
                <p className="mt-1 font-semibold">User‑first, data‑driven</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <p className="text-sm text-white/60">Focus</p>
                <p className="mt-1 font-semibold">Performance & Reliability</p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-orange-500/20 via-white/5 to-black p-1">
              <div className="rounded-2xl bg-black/60 p-8">
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { label: 'Uptime', value: '99.99%' },
                    { label: 'Projects', value: '120+' },
                    { label: 'Clients', value: '60+' },
                    { label: 'Countries', value: '15' },
                    { label: 'Team', value: '40+' },
                    { label: 'Awards', value: '12' },
                  ].map((item) => (
                    <div key={item.label} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                      <p className="text-2xl font-extrabold text-orange-400">{item.value}</p>
                      <p className="mt-1 text-xs uppercase tracking-wide text-white/60">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-white/60">Trusted by teams worldwide</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
