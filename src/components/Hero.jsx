import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/dE8ryMHkF0EMjFf3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient and vignette overlays (do not block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
      <div className="pointer-events-none absolute inset-0 [box-shadow:inset_0_0_120px_40px_rgba(0,0,0,0.6)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
          <span className="text-sm text-white/80">Futuristic. Secure. Scalable.</span>
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
          Elevating Digital Experiences
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          We are a technology company crafting next‑gen platforms that blend design,
          performance, and reliability. Powered by immersive 3D, built for real impact.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#about"
            className="group rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-7 py-3 text-sm font-semibold text-black shadow-lg shadow-orange-500/30 transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            Learn More
          </a>
          <a
            href="#services"
            className="rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            Our Solutions
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
