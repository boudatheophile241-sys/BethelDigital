"use client";

import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { process } from "@/lib/data";

export function Process() {
  return (
    <section id="processus" className="bg-surface py-24 md:py-32">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Ma methode</span>
          <h2 className="mt-4 text-4xl font-bold tracking-tighter text-ink sm:text-5xl">
            Un processus <span className="text-gradient">simple et efficace</span>
          </h2>
          <p className="mt-5 text-lg text-ink/55">
            Une methode claire, en cinq etapes, pour transformer votre idee en une
            identite visuelle aboutie.
          </p>
        </Reveal>

        <div className="relative mt-16">
          {/* Ligne de connexion (desktop) */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-line lg:block" />

          <RevealGroup
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4"
            stagger={0.1}
          >
            {process.map((item) => (
              <RevealItem key={item.step} className="relative text-center lg:text-left">
                <div className="relative z-10 mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-line bg-white font-display text-lg font-bold text-brand shadow-soft lg:mx-0">
                  {item.step}
                </div>
                <h3 className="mt-5 text-lg font-bold tracking-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/55">
                  {item.description}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
