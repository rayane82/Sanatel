import React from 'react';
import { ShieldCheck, Award, Users, Cpu, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO, WHY_SANATEL } from '../data/company';

export const AboutSection: React.FC = () => {
  return (
    <section id="expertise" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold text-orange-600 uppercase tracking-wider block mb-2">
            Notre Valeur Ajoutée
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            Pourquoi les marques et entreprises confient leur relation client à SANATEL
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Implanté au 8 Rue Khan Youness El Qods à Oujda, notre centre réunit les meilleurs talents relationnels et les technologies télécoms les plus fiables pour garantir la satisfaction de vos clients finaux.
          </p>
        </div>

        {/* 2-Column Split: Visual Narrative & Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left: Dual visual layout */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden border border-slate-200 aspect-[4/5] bg-slate-100">
                <img
                  src={COMPANY_INFO.images.agent}
                  alt="Conseillère client SANATEL en communication"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 rounded-xl bg-orange-50 border border-orange-100">
                <p className="text-2xl font-bold text-orange-600 tabular-nums">100%</p>
                <p className="text-xs text-slate-700 mt-1 font-medium">Appels enregistrés & double écoute pour le contrôle qualité</p>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="p-4 rounded-xl bg-slate-900 text-white">
                <p className="text-2xl font-bold text-white tabular-nums">0 ms</p>
                <p className="text-xs text-slate-300 mt-1 font-medium">Interruption de service grâce à nos lignes télécom redondées</p>
              </div>
              <div className="rounded-2xl overflow-hidden border border-slate-200 aspect-[4/5] bg-slate-100">
                <img
                  src={COMPANY_INFO.images.meeting}
                  alt="Réunion de pilotage opérationnel chez SANATEL"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Right: The 4 Key Pillars */}
          <div className="lg:col-span-6 space-y-6">
            {WHY_SANATEL.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-orange-600 uppercase tracking-wide">
                    {item.tag}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">0{index + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Operational Commitments Bar */}
        <div id="chiffres" className="rounded-2xl bg-slate-900 text-white p-8 sm:p-12 border border-slate-800">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider block mb-1">
              Rigueur & Performance Mesurée
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Des engagements contractuels de niveau de service (SLA)
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pt-4 border-t border-slate-800">
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-orange-400 tabular-nums">98%</p>
              <p className="text-sm font-semibold text-white mt-1">Satisfaction Client</p>
              <p className="text-xs text-slate-400 mt-1">Mesurée en continu sur nos opérations</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-white tabular-nums">150+</p>
              <p className="text-sm font-semibold text-white mt-1">Positions Disponibles</p>
              <p className="text-xs text-slate-400 mt-1">Centre moderne au cœur d'Oujda</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-emerald-400 tabular-nums">&lt; 30s</p>
              <p className="text-sm font-semibold text-white mt-1">Temps de Réponse</p>
              <p className="text-xs text-slate-400 mt-1">Sur les canaux voix & messagerie</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-orange-400 tabular-nums">100%</p>
              <p className="text-sm font-semibold text-white mt-1">Conformité RGPD</p>
              <p className="text-xs text-slate-400 mt-1">Sécurité & traçabilité intégrale</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
