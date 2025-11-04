import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <About />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
