export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  category: 'inbound' | 'outbound' | 'tech' | 'bpo';
  features: string[];
  metrics: { value: string; label: string }[];
}

export const COMPANY_INFO = {
  name: 'SANATEL',
  legalName: 'SANATEL SARL',
  tagline: 'Customer Relationship Expert',
  address: '8 RUE KHAN YOUNESS EL QODS',
  postalCode: '60000',
  city: 'Oujda',
  country: 'Maroc',
  fullAddress: '8 RUE KHAN YOUNESS EL QODS, CP 60000, OUJDA, MAROC',
  phoneDisplay: '+212 5 36 70 77 02',
  phoneRaw: '+212536707702',
  whatsappNumber: '212536707702',
  email: 'contact@sanatel.ma',
  hours: 'Du Lundi au Samedi : 08h00 - 20h00 (Permanence 24/7 disponible)',
  googleMapsUrl: 'https://www.google.com/maps/place/Ste+SANATEL+SARL/data=!4m2!3m1!1s0x0:0xb2d4d8ee7813b3d1?sa=X&ved=1t:2428&ictx=111',
  googleMapsEmbed: 'https://maps.google.com/maps?q=Ste+SANATEL+SARL,+8+Rue+Khan+Youness+El+Qods,+Oujda&t=&z=16&ie=UTF8&iwloc=&output=embed',
  images: {
    hero: '/src/assets/images/hero_contact_center_team_1792417827840.jpg',
    meeting: '/src/assets/images/customer_service_meeting_1792417829226.jpg',
    agent: '/src/assets/images/agent_support_workspace_1792417828537.jpg',
  },
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'reception-appels',
    title: "Service Client & Appels Entrants",
    shortDescription: "Gestion omnicanale des demandes clients avec un taux de décroché supérieur à 96%.",
    fullDescription: "Nous transformons chaque contact en une opportunité de fidélisation. Nos téléconseillers qualifiés prennent en charge vos flux entrants avec courtoisie, réactivité et professionnalisme.",
    icon: 'Headphones',
    category: 'inbound',
    features: [
      "Prise en charge téléphonique multilingue (Français, Arabe, Anglais)",
      "Gestion des réclamations et suivi de commandes",
      "Traitement omnicanal : Téléphone, Email, Live Chat & WhatsApp",
      "Disponibilité étendue et permanence 24/7 sur mesure",
    ],
    metrics: [
      { value: '96.8%', label: 'Taux de décroché' },
      { value: '< 25s', label: 'Temps d’attente moyen' },
      { value: '94%', label: 'Résolution au 1er appel (FCR)' },
    ],
  },
  {
    id: 'emission-teleprospection',
    title: "Téléprospection & Conquête Commerciale",
    shortDescription: "Accélérez vos ventes grâce à des campagnes d'appels sortants ciblées et percutantes.",
    fullDescription: "Nos experts en télévente développent votre portefeuille client avec des approches personnalisées, bienveillantes et rigoureusement orientées vers le résultat.",
    icon: 'PhoneOutgoing',
    category: 'outbound',
    features: [
      "Prise de rendez-vous qualifiés B2B & B2C",
      "Qualification et enrichissement de fichiers prospects",
      "Vente directe de produits & services avec signature électronique",
      "Relance de devis abandonnés et réactivation d’anciens clients",
    ],
    metrics: [
      { value: '+35%', label: 'Taux de transformation' },
      { value: '100%', label: 'Leads qualifiés RGPD' },
      { value: 'x2.4', label: 'Productivité commerciale' },
    ],
  },
  {
    id: 'support-technique',
    title: "Support Technique & Helpdesk (N1/N2)",
    shortDescription: "Assistance technique spécialisée pour résoudre rapidement les incidents utilisateurs.",
    fullDescription: "Une équipe formée à vos outils et protocoles pour diagnostiquer, guider et résoudre les difficultés de vos utilisateurs avec un accompagnement pas-à-pas.",
    icon: 'LifeBuoy',
    category: 'tech',
    features: [
      "Assistance informatique et logiciels métiers",
      "Création, qualification et priorisation des tickets CRM",
      "Escalade méthodique vers le niveau 2 et vos équipes internes",
      "Rédaction et enrichissement de base de connaissances (FAQ)",
    ],
    metrics: [
      { value: '98%', label: 'Satisfaction usagers' },
      { value: '15 min', label: 'Délai moyen de prise en charge' },
      { value: '88%', label: 'Résolution Niveau 1' },
    ],
  },
  {
    id: 'bpo-backoffice',
    title: "BPO & Externalisation Back-Office",
    shortDescription: "Déléguez vos tâches administratives chronophages en toute conformité et sécurité.",
    fullDescription: "Optimisez vos coûts opérationnels en confiant à SANATEL le traitement de vos processus métiers récurrents avec une rigueur absolue.",
    icon: 'FileCheck',
    category: 'bpo',
    features: [
      "Saisie, vérification et numérisation de documents",
      "Modération de contenu web, avis clients et réseaux sociaux",
      "Gestion administrative des dossiers et facturation",
      "Respect strict des normes de confidentialité et RGPD",
    ],
    metrics: [
      { value: '-40%', label: 'Économie opérationnelle' },
      { value: '99.9%', label: 'Précision des saisies' },
      { value: '24h', label: 'Délai de traitement max' },
    ],
  },
  {
    id: 'secretariat-medical',
    title: "Permanence Téléphonique & Secrétariat",
    shortDescription: "Accueil téléphonique personnalisé pour cabinets médicaux, avocats et PME.",
    fullDescription: "Ne manquez aucun appel important. Nous assurons la permanence de votre standard téléphonique et la gestion fluide de vos agendas professionnels.",
    icon: 'CalendarCheck',
    category: 'inbound',
    features: [
      "Gestion d'agendas synchronisée (Doctolib, Google Calendar, CRM dédié)",
      "Filtrage des urgences selon vos consignes strictes",
      "Rappels de rendez-vous par SMS / WhatsApp pour réduire les no-shows",
      "Message d’accueil sur-mesure au nom de votre établissement",
    ],
    metrics: [
      { value: '-70%', label: 'Réduction des rendez-vous manqués' },
      { value: '0', label: 'Appels perdus' },
      { value: '100%', label: 'Disponibilité aux heures de pointe' },
    ],
  },
  {
    id: 'enquetes-fidelisation',
    title: "Études de Marché & Enquêtes de Satisfaction",
    shortDescription: "Mesurez la perception de votre marque et identifiez vos leviers de croissance.",
    fullDescription: "Des enquêtes téléphoniques qualitatives et quantitatives pour mesurer le CSAT, le NPS et comprendre en profondeur les attentes de vos clients.",
    icon: 'BarChart3',
    category: 'outbound',
    features: [
      "Calcul des scores CSAT, NPS (Net Promoter Score) et CES",
      "Enquêtes post-achat ou post-résolution d'incident",
      "Rapports d’analyse statistiques clairs et exploitables",
      "Alertes immédiates en cas d'insatisfaction critique",
    ],
    metrics: [
      { value: '100%', label: 'Données exploitables' },
      { value: 'J+1', label: 'Restitution des résultats' },
      { value: '+22%', label: 'Taux de fidélisation constaté' },
    ],
  },
];

export const KEY_METRICS = [
  { value: '98%', label: 'Satisfaction Client', detail: 'Évaluée sur nos opérations partenaires' },
  { value: '150+', label: 'Positions de Travail', detail: 'Plateau moderne et équipé au cœur d’Oujda' },
  { value: '24/7', label: 'Disponibilité Continue', detail: 'Permanence téléphonique & support omnicanal' },
  { value: '+35%', label: 'Hausse de Conversion', detail: 'Sur les campagnes de prospection ciblées' },
];

export const WHY_SANATEL = [
  {
    title: "Emplacement Stratégique à Oujda",
    description: "Installé au 8 Rue Khan Youness El Qods, notre centre bénéficie d'un vivier de talents universitaires hautement qualifiés et polyglottes.",
    tag: "Proximité & Vivier local"
  },
  {
    title: "Excellence Linguistique & Culturelle",
    description: "Nos téléconseillers maîtrisent parfaitement les subtilités du français parlé sans accent marqué, ainsi que l'arabe, l'anglais et l'espagnol.",
    tag: "Multilinguisme natif"
  },
  {
    title: "Infrastructures & Télécoms de Pointe",
    description: "Connexions fibre optique redondées, téléphonie VoIP HD, casques antibruit professionnels et intégrations CRM fluides (Salesforce, HubSpot, Zendesk).",
    tag: "Haute technologie"
  },
  {
    title: "Confidentialité & Conformité RGPD",
    description: "Respect rigoureux de la protection des données personnelles (CNDP Maroc et RGPD européen) avec des protocoles stricts de sécurisation.",
    tag: "Sécurité certifiée"
  },
];

