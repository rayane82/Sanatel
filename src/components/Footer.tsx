import React from 'react';
import { SanatelLogo } from './SanatelLogo';
import { MapPin, Phone, MessageCircle, Mail } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/company';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand & info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <SanatelLogo variant="card" size="lg" />
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed mt-3">
              Centre de référence en relation client et externalisation de processus métiers (BPO) à Oujda. Nous bâtissons des relations durables entre vos marques et vos clients.
            </p>
            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0" />
                <a
                  href={COMPANY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_INFO.fullAddress}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Fixe : {COMPANY_INFO.phoneDisplay}</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp : {COMPANY_INFO.phoneDisplay}</span>
              </div>
            </div>
          </div>

          {/* Quick links to services and sections (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Navigation & Prestations
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <ul className="space-y-2">
                <li><a href="#services" className="hover:text-white transition-colors">Nos Services</a></li>
                <li><a href="#expertise" className="hover:text-white transition-colors">Pourquoi SANATEL</a></li>
                <li><a href="#localisation" className="hover:text-white transition-colors">Notre Centre à Oujda</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact WhatsApp</a></li>
              </ul>
              <ul className="space-y-2 text-slate-400">
                {SERVICES.slice(0, 4).map((s) => (
                  <li key={s.id}>
                    <a href="#services" className="hover:text-white transition-colors line-clamp-1">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Direct WhatsApp Call to Action (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Échange Direct
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Une question ou un appel d'offres ? Lancez une conversation instantanée avec notre équipe.
            </p>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                'Bonjour SANATEL, je souhaite obtenir un devis ou des renseignements.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-semibold transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Discuter sur WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Quiet copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} SANATEL SARL - Tous droits réservés.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Oujda, Région de l'Oriental, Maroc</span>
            <span>·</span>
            <span>Customer Relationship Expert</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
