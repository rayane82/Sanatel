import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export const FloatingWhatsApp: React.FC = () => {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  const defaultUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Bonjour SANATEL, je souhaite avoir des renseignements sur vos services de relation client.'
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-end gap-3 pointer-events-none">
      {/* Tooltip badge on desktop */}
      {!tooltipDismissed && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-slate-800 text-xs py-2 px-3.5 rounded-xl shadow-lg border border-slate-200 pointer-events-auto animate-in fade-in slide-in-from-bottom-2">
          <span className="font-semibold text-emerald-600">Besoin d'un devis ?</span>
          <span className="text-slate-600">Discutez en direct</span>
          <button
            onClick={() => setTooltipDismissed(true)}
            className="text-slate-400 hover:text-slate-600 ml-1 p-0.5 rounded cursor-pointer"
            aria-label="Fermer l'infobulle"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating CTA Button */}
      <a
        href={defaultUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Discuter sur WhatsApp avec SANATEL"
        className="pointer-events-auto relative group flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all duration-200"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-orange-500 border-2 border-white rounded-full" />
        <MessageCircle className="w-7 h-7 fill-white text-emerald-500" />
      </a>
    </div>
  );
};
