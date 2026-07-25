"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { timeline } from "@/lib/data";

export function Story() {
  return (
    <section id="a-propos" className="relative py-24 md:py-32">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Recit */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <span className="eyebrow">Mon histoire</span>
              <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tighter text-ink sm:text-5xl">
                Derrière Bethel Digital,
                <br />
                il y a un <span className="text-gradient">parcours</span>.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-7 space-y-4 text-lg leading-relaxed text-ink/60">
                <p>
                  Je m&apos;appelle <strong className="text-ink">Théophile Bouda</strong>,
                  étudiant burkinabè venu au Maroc pour poursuivre mes études.
                </p>
                <p>
                  Pendant mon parcours universitaire, je me suis passionné pour le
                  design graphique. J&apos;ai commencé par des logos, puis des
                  affiches, puis des packagings.
                </p>
                <p>
                  Petit à petit, des entrepreneurs m&apos;ont fait confiance. Chaque
                  projet m&apos;a permis d&apos;apprendre et de grandir. Bethel Digital
                  est née de cette volonté :{" "}
                  <strong className="text-ink">
                    créer des identités visuelles qui racontent une histoire.
                  </strong>
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-line bg-surface px-5 py-4">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-brand">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">
                    Du Burkina Faso au Maroc
                  </p>
                  <p className="text-xs text-ink/50">
                    Une histoire d&apos;ambition, de travail et de créativité.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Timeline verticale animee */}
          <div className="relative">
            {/* Ligne */}
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-line md:left-[23px]" />
            <motion.div
              className="absolute left-[19px] top-2 w-px origin-top bg-gradient-to-b from-brand to-brand/0 md:left-[23px]"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              style={{ bottom: "0.5rem" }}
            />

            <ul className="space-y-8">
              {timeline.map((item, i) => (
                <motion.li
                  key={item.title}
                  className="relative flex gap-5 md:gap-6"
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Point */}
                  <div className="relative z-10 mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line bg-white shadow-soft md:h-12 md:w-12">
                    <span className="h-3 w-3 rounded-full bg-brand" />
                  </div>
                  {/* Carte */}
                  <div className="flex-1 rounded-2xl border border-line bg-white p-5 shadow-soft transition-shadow duration-300 hover:shadow-card">
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                      {item.year}
                    </span>
                    <h3 className="mt-1 text-lg font-bold tracking-tight text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink/55">
                      {item.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
