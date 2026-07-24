/**
 * Donnees centralisees du site Bethel Digital.
 * Modifie ce fichier pour mettre a jour les contenus, projets et coordonnees.
 */
import { affiches } from "./affiches";

/* ----------------------------- Coordonnees ----------------------------- */
export const site = {
  name: "Bethel Digital",
  tagline: "Identite visuelle & Branding",
  founder: "Theophile Bouda",
  email: "contact@betheldigital.com",
  phone: "+212 6 00 00 00 00",
  whatsapp: "212600000000", // format international sans + ni espaces
  location: "Casablanca, Maroc",
  hours: "Lun – Ven : 09h00 – 18h00",
  socials: {
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    behance: "https://behance.net/",
    facebook: "https://facebook.com/",
    tiktok: "https://tiktok.com/",
  },
} as const;

/* ------------------------------ Navigation ----------------------------- */
export const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "A propos", href: "#a-propos" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Processus", href: "#processus" },
  { label: "Contact", href: "#contact" },
] as const;

/* ------------------------------ Statistiques --------------------------- */
export const stats = [
  { value: 50, suffix: "+", label: "Projets realises" },
  { value: 20, suffix: "+", label: "Clients satisfaits" },
  { value: 3, suffix: "+", label: "Pays servis" },
  { value: 98, suffix: "%", label: "Taux de satisfaction" },
] as const;

/* -------------------------------- Services ----------------------------- */
export type Service = {
  icon: string; // nom d'icone lucide
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: "PenTool",
    title: "Branding",
    description: "Identite visuelle complete, charte graphique et positionnement de marque.",
  },
  {
    icon: "Shapes",
    title: "Logo & Identite",
    description: "Des logos memorables construits sur le sens et la strategie.",
  },
  {
    icon: "Package",
    title: "Packaging",
    description: "Des emballages qui donnent envie et racontent votre produit.",
  },
  {
    icon: "Printer",
    title: "Impression",
    description: "Affiches, flyers, cartes et supports imprimes de haute qualite.",
  },
  {
    icon: "LayoutTemplate",
    title: "Design graphique",
    description: "Visuels reseaux sociaux, presentations et supports de communication.",
  },
  {
    icon: "Globe",
    title: "Sites web",
    description: "Sites vitrines, e-commerce et landing pages rapides et modernes.",
  },
  {
    icon: "Megaphone",
    title: "Marketing digital",
    description: "Strategie de contenu, publicite en ligne et gestion des reseaux.",
  },
  {
    icon: "Search",
    title: "SEO",
    description: "Audit, optimisation et referencement naturel pour etre trouve.",
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
    description: "Mes racines, ma motivation. C'est la que tout commence.",
  },
  {
    year: "Depart",
    title: "Arrivee au Maroc",
    description: "Un nouveau depart pour poursuivre mes etudes, de nouveaux defis.",
  },
  {
    year: "Declic",
    title: "Decouverte du design",
    description: "Pendant mon parcours universitaire, une passion devient une obsession.",
  },
  {
    year: "Debuts",
    title: "Premiers clients",
    description: "Des logos, des affiches, des packagings. Les premieres confiances.",
  },
  {
    year: "Naissance",
    title: "Creation de Bethel Digital",
    description: "Une vision claire : creer des marques qui racontent une histoire.",
  },
  {
    year: "Demain",
    title: "Aujourd'hui et apres",
    description: "Objectif : devenir une reference du branding en Afrique.",
  },
];

/* ------------------------------- Processus ----------------------------- */
export const process = [
  {
    step: "01",
    title: "Decouverte",
    description: "On echange sur vos besoins, votre marche et vos objectifs.",
  },
  {
    step: "02",
    title: "Recherche",
    description: "Analyse de la concurrence, moodboards et direction artistique.",
  },
  {
    step: "03",
    title: "Creation",
    description: "Je concois des solutions creatives, uniques et pertinentes.",
  },
  {
    step: "04",
    title: "Revisions",
    description: "On ajuste ensemble jusqu'a votre entiere satisfaction.",
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
  category: string; // doit correspondre a un filtre
  tag: string; // libelle affiche
  // Chaque projet est un EMPLACEMENT remplacable : depose ton image dans /public/work/<image>
  image: string;
  ratio: "tall" | "wide" | "square"; // pour la disposition masonry
};

export const portfolioFilters = ["Tous", "Affiches", "Branding", "Logo"] as const;

// Les affiches sont generees dans lib/affiches.ts a partir de public/work/affiches.
export const projects: Project[] = [
  { title: "Delta Surveys", category: "Branding", tag: "Identite visuelle", image: "/work/delta.webp", ratio: "tall" },
  { title: "YAM Auto", category: "Logo", tag: "Logo & identite", image: "/work/yamauto.webp", ratio: "square" },
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

/* ------------------------------ Temoignages ---------------------------- */
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string; // /public/testimonials/<image> — emplacement remplacable
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Un travail exceptionnel. Bethel Digital a compris notre vision et l'a transformee en une identite forte et coherente.",
    name: "Awa T.",
    role: "Entrepreneure",
    avatar: "/testimonials/avatar-1.jpg",
    rating: 5,
  },
  {
    quote:
      "Professionnel, creatif et vraiment a l'ecoute. Je recommande vivement ses services les yeux fermes.",
    name: "Moctar B.",
    role: "CEO, YAM Auto",
    avatar: "/testimonials/avatar-2.jpg",
    rating: 5,
  },
  {
    quote:
      "Respect des delais, qualite au rendez-vous et une communication irreprochable. Merci pour ce serieux !",
    name: "Claudia M.",
    role: "Gerante",
    avatar: "/testimonials/avatar-3.jpg",
    rating: 5,
  },
];
