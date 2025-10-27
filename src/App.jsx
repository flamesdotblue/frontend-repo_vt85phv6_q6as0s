import React from 'react';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Programs from './components/Programs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Hero />
      <Mission />
      <Programs />
      <Footer />
    </div>
  );
}

export default App;
