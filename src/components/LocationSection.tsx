import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Clock, Copy, Check, ExternalLink, Navigation } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { ContactForm } from './ContactForm';

interface LocationSectionProps {
  selectedService?: string;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ selectedService }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(COMPANY_INFO.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="localisation" className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-orange-600 uppercase tracking-wider block mb-2">
            Contact & Localisation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            Rencontrez notre équipe à Oujda ou échangez en direct
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Nous vous accueillons dans nos locaux ou restons joignables en continu par téléphone et WhatsApp pour étudier vos projets.
          </p>
        </div>

        {/* 2-Columns: Contact Details + Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Column 1: Details & Interactive Map (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">
                Coordonnées Officielles
              </h3>

              {/* Address card */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide block">
                    Adresse du siège
                  </span>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">
                    {COMPANY_INFO.address}
                  </p>
                  <p className="text-xs text-slate-600">
                    CP {COMPANY_INFO.postalCode}, {COMPANY_INFO.city}, {COMPANY_INFO.country}
                  </p>

                  <div className="flex items-center gap-2 mt-3">
                    <button
                      onClick={handleCopyAddress}
                      className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 bg-white px-2.5 py-1 rounded border border-slate-200 transition-colors cursor-pointer"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Copié !' : 'Copier l\'adresse'}</span>
                    </button>
                    <a
                      href={COMPANY_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-orange-600 hover:text-orange-700 bg-orange-50 px-2.5 py-1 rounded border border-orange-200 transition-colors"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Itinéraire</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone card */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#0B2545] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide block">
                    Téléphone Direct
                  </span>
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="text-base font-bold text-slate-900 hover:text-orange-600 transition-colors block mt-0.5"
                  >
                    {COMPANY_INFO.phoneDisplay}
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Ligne fixe directe SANATEL Oujda
                  </p>
                </div>
              </div>

              {/* WhatsApp card */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-emerald-50/60 border border-emerald-100">
                <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wide block">
                    Conversation WhatsApp
                  </span>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">
                    {COMPANY_INFO.phoneDisplay}
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Réponse immédiate de nos coordinateurs
                  </p>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                      'Bonjour SANATEL, je souhaite obtenir des informations concernant vos services de relation client.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 mt-2"
                  >
                    <span>Lancer la discussion</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 rounded-lg bg-slate-200 text-slate-700 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide block">
                    Horaires d'ouverture
                  </span>
                  <p className="text-sm font-semibold text-slate-800 mt-0.5">
                    {COMPANY_INFO.hours}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Dispositif 24/7 disponible sur contrat
                  </p>
                </div>
              </div>
            </div>

            {/* Embedded Map */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white relative">
              <div className="h-64 w-full">
                <iframe
                  title="Carte Google Maps Ste SANATEL SARL Oujda"
                  src={COMPANY_INFO.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="p-3.5 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-1.5 text-slate-700 font-medium">
                  <MapPin className="w-4 h-4 text-orange-600 shrink-0" />
                  <span>Fiche Google Maps : <strong>Ste SANATEL SARL</strong></span>
                </div>
                <a
                  href={COMPANY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-orange-600 hover:text-orange-700 transition-colors"
                >
                  <span>Voir la fiche complète</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: WhatsApp Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm initialService={selectedService} />
          </div>
        </div>
      </div>
    </section>
  );
};
