import React, { useState } from 'react';
import { 
  Headphones, 
  PhoneOutgoing, 
  LifeBuoy, 
  FileCheck, 
  CalendarCheck, 
  BarChart3, 
  ArrowRight,
  CheckCircle2,
  MessageCircle
} from 'lucide-react';
import { SERVICES, ServiceItem, COMPANY_INFO } from '../data/company';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'inbound' | 'outbound' | 'tech' | 'bpo'>('all');
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES[0].id);

  const filteredServices = activeCategory === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory);

  const activeService = SERVICES.find(s => s.id === selectedServiceId) || SERVICES[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Headphones': return <Headphones className="w-5 h-5" />;
      case 'PhoneOutgoing': return <PhoneOutgoing className="w-5 h-5" />;
      case 'LifeBuoy': return <LifeBuoy className="w-5 h-5" />;
      case 'FileCheck': return <FileCheck className="w-5 h-5" />;
      case 'CalendarCheck': return <CalendarCheck className="w-5 h-5" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5" />;
      default: return <Headphones className="w-5 h-5" />;
    }
  };

  const handleConsultService = (title: string) => {
    onSelectService(title);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold text-orange-600 uppercase tracking-wider block mb-2">
            Solutions Sur-Mesure & BPO
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            Une gamme complète de prestations pour chaque étape du cycle client
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            De l'acquisition commerciale au support technique continu, SANATEL met à votre disposition des équipes dédiées formées à votre culture d'entreprise et à vos exigences opérationnelles.
          </p>
        </div>

        {/* Interactive Filter Controls */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-200/80 rounded-xl mb-10 w-fit">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-150 whitespace-nowrap cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Tous les Services ({SERVICES.length})
          </button>
          <button
            onClick={() => setActiveCategory('inbound')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-150 whitespace-nowrap cursor-pointer ${
              activeCategory === 'inbound'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Appels Entrants & Relation Client
          </button>
          <button
            onClick={() => setActiveCategory('outbound')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-150 whitespace-nowrap cursor-pointer ${
              activeCategory === 'outbound'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Télévente & Prospection
          </button>
          <button
            onClick={() => setActiveCategory('tech')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-150 whitespace-nowrap cursor-pointer ${
              activeCategory === 'tech'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Support & Helpdesk
          </button>
          <button
            onClick={() => setActiveCategory('bpo')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-150 whitespace-nowrap cursor-pointer ${
              activeCategory === 'bpo'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            BPO & Back-Office
          </button>
        </div>

        {/* Asymmetric Bento / Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => {
            const isSelected = selectedServiceId === service.id;
            return (
              <div
                key={service.id}
                onClick={() => setSelectedServiceId(service.id)}
                className={`group flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'border-orange-500 shadow-md ring-2 ring-orange-500/10'
                    : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
                      {getIcon(service.icon)}
                    </div>
                    <span className="text-xs font-bold text-slate-400 font-mono">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Highlights */}
                  <ul className="mt-5 space-y-2">
                    {service.features.slice(0, 2).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-xs">
                    <span className="font-bold text-slate-900 tabular-nums">
                      {service.metrics[0]?.value}
                    </span>
                    <span className="text-slate-500 ml-1">
                      {service.metrics[0]?.label}
                    </span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleConsultService(service.title);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-600 hover:text-orange-700 transition-colors cursor-pointer"
                  >
                    <span>Choisir</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Service Detail Spotlight */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-orange-600 uppercase tracking-wide">
                <span>Détail de la prestation sélectionnée</span>
                <span>·</span>
                <span className="text-slate-500 font-normal">Centre SANATEL Oujda</span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                {activeService.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {activeService.fullDescription}
              </p>

              {/* All Service features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {activeService.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Metrics strip */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-100">
                {activeService.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                    <p className="text-lg sm:text-xl font-bold text-slate-900 tabular-nums">{m.value}</p>
                    <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-snug">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct CTA for this service */}
            <div className="lg:col-span-4 bg-slate-900 text-white rounded-xl p-6 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-[11px] font-semibold text-orange-400 uppercase tracking-wider block">
                  Activation rapide
                </span>
                <h4 className="text-lg font-bold text-white mt-1">
                  Déployer cette solution pour votre entreprise
                </h4>
                <p className="text-xs text-slate-300 mt-2">
                  Nos superviseurs étudient votre cahier des charges et mettent en place une équipe dédiée sous 48 à 72h.
                </p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => handleConsultService(activeService.title)}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-semibold text-xs transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Obtenir un devis personnalisé</span>
                </button>

                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-slate-700 text-slate-300 hover:text-white text-xs font-medium transition-colors"
                >
                  <span>Appeler au {COMPANY_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
