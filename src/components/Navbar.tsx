import React, { useState } from 'react';
import { SanatelLogo } from './SanatelLogo';
import { MessageCircle, Menu, X, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between gap-8">
        {/* Zone 1: Official Logo Image Only (Larger & Highly Legible) */}
        <a href="#" className="flex items-center shrink-0 py-2">
          <SanatelLogo size="lg" />
        </a>

        {/* Zone 2: clean single-line nav links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-700">
          <a
            href="#services"
            className="hover:text-orange-600 transition-colors whitespace-nowrap shrink-0"
          >
            Nos Services
          </a>
          <a
            href="#expertise"
            className="hover:text-orange-600 transition-colors whitespace-nowrap shrink-0"
          >
            Pourquoi SANATEL
          </a>
          <a
            href="#localisation"
            className="hover:text-orange-600 transition-colors whitespace-nowrap shrink-0"
          >
            Notre Centre à Oujda
          </a>
          <a
            href="#contact"
            className="hover:text-orange-600 transition-colors whitespace-nowrap shrink-0"
          >
            Contact & Devis
          </a>
        </nav>

        {/* Zone 3: 1 Primary CTA */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
              'Bonjour SANATEL, je souhaite obtenir des informations sur vos services de relation client.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0B2545] hover:bg-orange-600 text-white text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span className="whitespace-nowrap shrink-0">Contacter sur WhatsApp</span>
          </a>
        </div>

        {/* Mobile menu hamburger button */}
        <div className="lg:hidden flex items-center gap-2">
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="p-2 rounded-lg text-slate-700 hover:text-orange-600 hover:bg-slate-100"
            aria-label="Appeler Sanatel"
          >
            <Phone className="w-5 h-5" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-4 shadow-lg animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-3 text-base font-medium text-slate-800">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:text-orange-600 transition-colors"
            >
              Nos Services
            </a>
            <a
              href="#expertise"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:text-orange-600 transition-colors"
            >
              Pourquoi SANATEL
            </a>
            <a
              href="#localisation"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:text-orange-600 transition-colors"
            >
              Notre Centre à Oujda
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:text-orange-600 transition-colors"
            >
              Formulaire de Contact WhatsApp
            </a>
          </nav>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                'Bonjour SANATEL, je souhaite échanger sur vos services.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-600 text-white rounded-xl font-medium text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp : {COMPANY_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
