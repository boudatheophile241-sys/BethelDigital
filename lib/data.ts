/**
 * Données centralisées du site Bethel Digital.
 * Modifie ce fichier pour mettre à jour les contenus, projets et coordonnées.
 */
import { affiches } from "./affiches";

/* ----------------------------- Coordonnées ----------------------------- */
export const site = {
  name: "Bethel Digital",
  tagline: "Identité visuelle & Branding",
  founder: "Théophile Bouda",
  email: "contact.betheldigital@gmail.com",
  phone: "+226 56 23 52 02",
  whatsapp: "22656235202", // format international sans + ni espaces
  location: "Casablanca, Maroc",
  hours: "Lun – Ven : 09h00 – 18h00",
  socials: {
    instagram: "https://www.instagram.com/bethel.digital_",
    tiktok: "https://www.tiktok.com/@bethel.digital",
    linkedin: "https://www.linkedin.com/company/bethel-digital1/",
    facebook: "https://www.facebook.com/share/1HMt7fDLLA/?mibextid=wwXIfr",
  },
} as const;

/* ------------------------------ Navigation ----------------------------- */
export const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#a-propos" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Processus", href: "#processus" },
  { label: "Contact", href: "#contact" },
] as const;

/* ------------------------------ Statistiques --------------------------- */
export const stats = [
  { value: 50, suffix: "+", label: "Projets réalisés" },
  { value: 20, suffix: "+", label: "Clients satisfaits" },
  { value: 3, suffix: "+", label: "Pays servis" },
  { value: 98, suffix: "%", label: "Taux de satisfaction" },
] as const;

/* -------------------------------- Services ----------------------------- */
export type Service = {
  icon: string; // nom d'icône lucide
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: "PenTool",
    title: "Branding",
    description: "Identité visuelle complète, charte graphique et positionnement de marque.",
  },
  {
    icon: "Shapes",
    title: "Logo & Identité",
    description: "Des logos mémorables construits sur le sens et la stratégie.",
  },
  {
    icon: "Package",
    title: "Packaging",
    description: "Des emballages qui donnent envie et racontent votre produit.",
  },
  {
    icon: "Printer",
    title: "Impression",
    description: "Affiches, flyers, cartes et supports imprimés de haute qualité.",
  },
  {
    icon: "LayoutTemplate",
    title: "Design graphique",
    description: "Visuels réseaux sociaux, présentations et supports de communication.",
  },
  {
    icon: "Globe",
    title: "Sites web",
    description: "Sites vitrines, e-commerce et landing pages rapides et modernes.",
  },
  {
    icon: "Megaphone",
    title: "Marketing digital",
    description: "Stratégie de contenu, publicité en ligne et gestion des réseaux.",
  },
  {
    icon: "Search",
    title: "SEO",
    description: "Audit, optimisation et référencement naturel pour être trouvé.",
  },
];

/* ------------------------------- Timeline ------------------------------ */
export type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

export const timeline: TimelineItem[] = [
  {
    year: "Origine",
    title: "Burkina Faso",
    description: "Mes racines, ma motivation. C'est là que tout commence.",
  },
  {
    year: "Départ",
    title: "Arrivée au Maroc",
    description: "Un nouveau départ pour poursuivre mes études, de nouveaux défis.",
  },
  {
    year: "Déclic",
    title: "Découverte du design",
    description: "Pendant mon parcours universitaire, une passion devient une obsession.",
  },
  {
    year: "Débuts",
    title: "Premiers clients",
    description: "Des logos, des affiches, des packagings. Les premières confiances.",
  },
  {
    year: "Naissance",
    title: "Création de Bethel Digital",
    description: "Une vision claire : créer des marques qui racontent une histoire.",
  },
  {
    year: "Demain",
    title: "Aujourd'hui et après",
    description: "Objectif : devenir une référence du branding en Afrique.",
  },
];

/* ------------------------------- Processus ----------------------------- */
export const process = [
  {
    step: "01",
    title: "Découverte",
    description: "On échange sur vos besoins, votre marché et vos objectifs.",
  },
  {
    step: "02",
    title: "Recherche",
    description: "Analyse de la concurrence, moodboards et direction artistique.",
  },
  {
    step: "03",
    title: "Création",
    description: "Je conçois des solutions créatives, uniques et pertinentes.",
  },
  {
    step: "04",
    title: "Révisions",
    description: "On ajuste ensemble jusqu'à votre entière satisfaction.",
  },
  {
    step: "05",
    title: "Livraison",
    description: "Fichiers finaux, guide de marque et accompagnement.",
  },
] as const;

/* ------------------------------ Portfolio ------------------------------ */
export type Project = {
  title: string;
  category: string; // doit correspondre à un filtre
  tag: string; // libellé affiché
  // Chaque projet est un EMPLACEMENT remplaçable : depose ton image dans /public/work/<image>
  image: string;
  ratio: "tall" | "wide" | "square"; // pour la disposition masonry
};

export const portfolioFilters = ["Tous", "Affiches", "Branding", "Logo"] as const;

// Les affiches sont générées dans lib/affiches.ts à partir de public/work/affiches.
export const projects: Project[] = [
  { title: "Delta Surveys", category: "Branding", tag: "Identité visuelle", image: "/work/delta.webp", ratio: "tall" },
  { title: "YAM Auto", category: "Logo", tag: "Logo & identité", image: "/work/yamauto.webp", ratio: "square" },
  { title: "AHTS", category: "Branding", tag: "Charte graphique", image: "/work/ahts.webp", ratio: "wide" },
  ...affiches,
];

/* ------------------------------ Partenaires ---------------------------- */
export type Partner = {
  name: string;
  // Depose le vrai fichier dans /public/partners/<fichier>
  logo: string;
};

export const partners: Partner[] = [
  { name: "Delta Surveys", logo: "/partners/delta-surveys.png" },
  { name: "YAM Auto", logo: "/partners/yam-auto.png" },
  { name: "AHTS", logo: "/partners/ahts.png" },
  { name: "JK Company", logo: "/partners/jk-company.png" },
];

/* ------------------------------ Témoignages ---------------------------- */
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string; // /public/testimonials/<image> — emplacement remplaçable
  rating: number;
  isLogo?: boolean; // avatar = logo (affiché avec fond clair au lieu d'une photo)
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Bethel Digital a su traduire notre activité en une identité visuelle claire et professionnelle. Un vrai plaisir de travailler avec Théophile.",
    name: "Azaf",
    role: "Azaria High Tech Service (AHTS)",
    avatar: "/testimonials/azaf.webp",
    rating: 5,
  },
  {
    quote:
      "Créatif, réactif et vraiment à l'écoute. Nos visuels attirent bien plus l'attention aujourd'hui. Je recommande sans hésiter.",
    name: "YAM Auto",
    role: "Vente & location de voitures",
    avatar: "/testimonials/yamauto.webp",
    rating: 5,
  },
  {
    quote:
      "Un accompagnement sérieux et une identité soignée pour Delta Surveys. Respect des délais et rendu à la hauteur de nos attentes.",
    name: "Delta Surveys",
    role: "Topographie & géomètre",
    avatar: "/partners/delta-surveys.png",
    rating: 5,
    isLogo: true,
  },
  {
    quote:
      "Bethel Digital a redonné vie à notre image de marque. Professionnalisme, écoute et créativité étaient au rendez-vous.",
    name: "JK Company",
    role: "Multiservices",
    avatar: "/partners/jk-company.png",
    rating: 5,
    isLogo: true,
  },
];
