import React from 'react';
import { MessageCircle, ArrowRight, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Column 1: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Regional trust marker */}
            <div className="inline-flex items-center gap-2 text-xs font-medium text-slate-300">
              <span className="text-orange-400 font-semibold uppercase tracking-wider">Centre d'Excellence BPO</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-orange-400" />
                Oujda, Maroc
              </span>
            </div>

            {/* Headline with balanced wrap */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight lg:leading-tight" style={{ textWrap: 'balance' }}>
              L'expertise de la relation client au service de votre croissance.
            </h1>

            {/* Clear value prose */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Basé au cœur d'Oujda, <strong className="text-white font-semibold">SANATEL</strong> accompagne les entreprises dans la gestion de leurs appels entrants, campagnes de téléprospection, support technique et externalisation de back-office avec des téléconseillers bilingues et formés aux plus hauts standards.
            </p>

            {/* Direct address & phone summary */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-2 text-xs sm:text-sm text-slate-300">
              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <MapPin className="w-4 h-4 text-orange-400 shrink-0" />
                <span>8 Rue Khan Youness El Qods, 60000 Oujda</span>
              </a>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <span className="font-semibold text-white">{COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-orange-600/30 hover:shadow-orange-600/40"
              >
                <MessageCircle className="w-5 h-5 text-white" />
                <span>Demander un devis sur WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-slate-700 hover:border-slate-500 bg-slate-800/60 hover:bg-slate-800 text-slate-200 text-sm font-semibold transition-all duration-200"
              >
                <span>Découvrir nos services</span>
              </a>
            </div>

            {/* Reassuring trust row */}
            <div className="pt-4 flex items-center gap-6 text-xs text-slate-400 border-t border-slate-800">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Conformité RGPD & CNDP
              </span>
              <span>·</span>
              <span>Plateau 150+ positions</span>
              <span>·</span>
              <span>Permanence 24h/24 & 7j/7</span>
            </div>
          </div>

          {/* Column 2: High-impact Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-800 aspect-[16/10] sm:aspect-[4/3] lg:aspect-square">
              <img
                src={COMPANY_INFO.images.hero}
                alt="Plateau de téléconseillers SANATEL à Oujda"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

              {/* Floating caption card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-white">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      src="/src/assets/images/sanatel_logo_horizontal_1792419378299.jpg"
                      alt="Logo SANATEL"
                      className="h-10 w-auto object-contain rounded-lg bg-white p-1 shrink-0 shadow-sm"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-orange-400">
                        Infrastructure SANATEL Oujda
                      </p>
                      <p className="text-sm font-bold text-white mt-0.5">
                        Plateau moderne & téléconseillers certifiés
                      </p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs text-slate-400 block">Taux de service</span>
                    <span className="text-sm font-bold text-emerald-400 tabular-nums">98.4%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
