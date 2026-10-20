/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-orange-500 selection:text-white">
      {/* Top Bar Header */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section with high-fidelity photo & CTA */}
        <Hero />

        {/* Core Services Section with filters and metrics */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Why SANATEL & Operational Quality */}
        <AboutSection />

        {/* Location at 8 Rue Khan Youness El Qods, Oujda & WhatsApp Contact Form */}
        <LocationSection selectedService={selectedService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Direct WhatsApp Action */}
      <FloatingWhatsApp />
    </div>
  );
}
