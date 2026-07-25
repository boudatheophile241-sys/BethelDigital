"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Counter } from "@/components/ui/Counter";
import { stats } from "@/lib/data";
import { HeroMockup } from "./HeroMockup";

export function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden pt-28 md:pt-36">
      {/* Fond : grille tres discrete + halos doux */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-faint [background-size:44px_44px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_40%,transparent_100%)]" />
        <div className="absolute -top-24 right-[-10%] h-[520px] w-[520px] rounded-full bg-sky/40 blur-[120px]" />
        <div className="absolute top-40 left-[-8%] h-[420px] w-[420px] rounded-full bg-beige/40 blur-[120px]" />
      </div>

      <div className="container-x grid items-center gap-14 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-24">
        {/* Colonne gauche */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Créativité • Stratégie • Impact
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-5 text-[2.7rem] font-bold leading-[1.12] text-ink sm:text-6xl lg:text-[4.3rem]"
          >
            Je transforme vos idées en une{" "}
            <span className="text-gradient">identité visuelle</span> qui se fait
            remarquer.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink/60"
          >
            Étudiant burkinabè au Maroc, j&apos;ai fait de ma passion pour le
            design mon métier. Aujourd&apos;hui, à travers Bethel Digital, je crée
            des marques qui racontent une histoire et génèrent de vrais résultats.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a href="#portfolio" className="btn-primary">
              Découvrir mon travail
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-ghost">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-brand/10 text-brand">
                <Play className="h-3 w-3 fill-current" />
              </span>
              Demander un devis
            </a>
          </motion.div>

          {/* Statistiques */}
          <motion.dl
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-12 grid max-w-lg grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-3xl font-bold text-ink">
                  <Counter value={s.value} suffix={s.suffix} />
                </dt>
                <dd className="mt-1 text-xs leading-snug text-ink/50">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Colonne droite : mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <HeroMockup />
        </motion.div>
      </div>
    </section>
  );
}
