import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { GlowBackground } from './components/ui/GlowBackground';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Portfolio } from './components/sections/Portfolio';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { Process } from './components/sections/Process';
import { Pricing } from './components/sections/Pricing';
import { Testimonials } from './components/sections/Testimonials';
import { FAQ } from './components/sections/FAQ';
import { Contact } from './components/sections/Contact';

/**
 * PixelForge Studio — Root Application
 * High-performance agency web experience
 */
export default function App() {
  const [selectedService, setSelectedService] = useState('Website Development');

  const handleSelectPlanService = (serviceName: string) => {
    setSelectedService(serviceName);
  };

  return (
    <div className="relative min-h-screen bg-[#0B1220] text-[#9CA3AF] selection:bg-[#00D9FF]/20 selection:text-white flex flex-col justify-between overflow-x-hidden">
      {/* Background ambient lighting */}
      <GlowBackground />

      {/* Top sticky navbar */}
      <Navbar />

      {/* Main content sections with semantic ID anchors */}
      <main id="main-content" className="flex-1 focus:outline-none">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <WhyChooseUs />
        <Process />
        <Pricing onSelectService={handleSelectPlanService} />
        <Testimonials />
        <FAQ />
        <Contact preselectedService={selectedService} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
