import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechnologySection from './components/TechnologySection';
import ModesSection from './components/ModesSection';
import ChargingSection from './components/ChargingSection';
import CalculatorSection from './components/CalculatorSection';
import ComparisonSection from './components/ComparisonSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TechnologySection />
      <ModesSection />
      <ChargingSection />
      <CalculatorSection />
      <ComparisonSection />
      <Footer />
    </div>
  );
}

export default App;