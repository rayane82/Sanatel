import React, { useState } from 'react';
import { Send, MessageCircle, Phone, CheckCircle2, ArrowRight, Building2, User, Mail, MessageSquare } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/company';

interface ContactFormProps {
  initialService?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ initialService }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    contactInfo: '',
    service: initialService || SERVICES[0].title,
    message: '',
    urgency: 'Sous 24 heures',
  });

  const [submitted, setSubmitted] = useState(false);
  const [generatedUrl, setGeneratedUrl] = useState('');

  const buildWhatsAppMessage = () => {
    return `Bonjour l'équipe SANATEL,

Je souhaite échanger avec vous au sujet de vos services de relation client :

👤 Nom : ${formData.fullName.trim() || 'Non renseigné'}
🏢 Société : ${formData.company.trim() || 'Particulier / Entreprise'}
📞 Coordonnées : ${formData.contactInfo.trim() || 'Non renseigné'}
📌 Prestation souhaitée : ${formData.service}
⏱️ Délai de réponse souhaité : ${formData.urgency}

📝 Mon besoin :
${formData.message.trim() || 'Je souhaite être recontacté pour échanger sur mes besoins.'}

Source : Formulaire de contact web SANATEL (Oujda)`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() && !formData.message.trim()) {
      return;
    }

    const messageText = buildWhatsAppMessage();
    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodedMessage}`;

    setGeneratedUrl(whatsappUrl);
    setSubmitted(true);

    // Open WhatsApp in new tab or current tab
    try {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    } catch {
      window.location.href = whatsappUrl;
    }
  };

  return (
    <div id="contact" className="relative bg-white rounded-2xl border border-slate-200/80 shadow-xl shadow-slate-200/40 p-6 md:p-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-slate-100 gap-4">
        <div>
          <span className="text-xs font-semibold text-orange-600 uppercase tracking-wider">
            Échange Direct & Sans Attente
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1">
            Transmettre votre demande sur WhatsApp
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            Remplissez ce formulaire : il ouvre instantanément une discussion directe avec notre direction commerciale au <span className="font-semibold text-slate-900">{COMPANY_INFO.phoneDisplay}</span>.
          </p>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200/60 text-emerald-800 text-xs font-medium shrink-0 self-start md:self-auto">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Équipe commerciale en ligne à Oujda</span>
        </div>
      </div>

      {submitted ? (
        <div className="text-center py-10 px-4 space-y-4 bg-emerald-50/50 rounded-xl border border-emerald-100">
          <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-bold text-slate-900">
            Redirection vers WhatsApp en cours...
          </h4>
          <p className="text-slate-600 text-sm max-w-md mx-auto">
            Si la fenêtre WhatsApp ne s’est pas ouverte automatiquement sur votre appareil, cliquez sur le bouton ci-dessous pour lancer la conversation :
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={generatedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-colors shadow-md shadow-emerald-600/20"
            >
              <MessageCircle className="w-5 h-5" />
              Ouvrir la conversation WhatsApp
            </a>
            <button
              onClick={() => setSubmitted(false)}
              className="px-5 py-3 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 text-sm font-medium transition-colors"
            >
              Modifier mes informations
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Nom complet */}
            <div>
              <label htmlFor="fullName" className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">
                Nom & Prénom <span className="text-orange-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  id="fullName"
                  required
                  placeholder="Ex: Karim Benali"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors"
                />
              </div>
            </div>

            {/* Entreprise */}
            <div>
              <label htmlFor="company" className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">
                Entreprise / Établissement
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Building2 className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  id="company"
                  placeholder="Ex: Atlas Holding ou Particulier"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Téléphone / Email */}
            <div>
              <label htmlFor="contactInfo" className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">
                Numéro de contact ou Email <span className="text-orange-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  id="contactInfo"
                  required
                  placeholder="Ex: +212 6 XX XX XX XX ou email@domaine.com"
                  value={formData.contactInfo}
                  onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors"
                />
              </div>
            </div>

            {/* Service souhaité */}
            <div>
              <label htmlFor="service" className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">
                Prestation concernée
              </label>
              <select
                id="service"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors"
              >
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="Autre demande sur-mesure">Autre demande sur-mesure</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="message" className="text-xs font-semibold text-slate-700 uppercase tracking-wide">
                Votre Message / Descriptif du besoin <span className="text-orange-500">*</span>
              </label>
              <span className="text-xs text-slate-400">Précisez vos volumes d'appels ou objectifs</span>
            </div>
            <div className="relative">
              <textarea
                id="message"
                required
                rows={4}
                placeholder="Exemple : Nous recherchons une équipe dédiée de 3 téléconseillers pour assurer notre service client entrant en français du lundi au samedi..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors resize-y"
              />
            </div>
          </div>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row items-center justify-between pt-3 gap-4 border-t border-slate-100">
            <div className="text-xs text-slate-500 flex items-center gap-2">
              <Phone className="w-4 h-4 text-orange-600 shrink-0" />
              <span>Numéro WhatsApp direct : <strong className="text-slate-800">{COMPANY_INFO.phoneDisplay}</strong></span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold text-sm rounded-xl transition-all shadow-md shadow-emerald-600/25 hover:shadow-lg hover:shadow-emerald-600/30 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                <span>Envoyer sur WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </form>
      )}

      {/* Reassuring footer notice */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
        <span>🔒 Vos données restent strictement confidentielles et ne sont transmises qu'à SANATEL Oujda.</span>
        <span>📍 8 Rue Khan Youness El Qods, Oujda</span>
      </div>
    </div>
  );
};
