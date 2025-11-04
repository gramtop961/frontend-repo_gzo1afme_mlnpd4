import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-black py-12 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-orange-500 to-amber-400" />
            <span className="text-sm font-semibold tracking-wide">Vortex Labs</span>
          </div>
          <p className="text-center text-xs text-white/60">
            © {new Date().getFullYear()} Vortex Labs. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-sm text-white/70">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
