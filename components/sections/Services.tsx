"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { services } from "@/lib/data";

export function Services() {
  return (
    <section id="services" className="relative bg-surface py-24 md:py-32">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Ce que je fais</span>
          <h2 className="mt-4 text-4xl font-bold tracking-tighter text-ink sm:text-5xl">
            Des services penses pour <span className="text-gradient">faire grandir</span>{" "}
            votre marque
          </h2>
          <p className="mt-5 text-lg text-ink/55">
            De la premiere esquisse a la mise en ligne : une gamme complete pour
            construire une image de marque coherente et memorable.
          </p>
        </Reveal>

        <RevealGroup
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.07}
        >
          {services.map((service) => (
            <RevealItem key={service.title}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white p-7 shadow-soft transition-shadow duration-500 hover:shadow-card-hover"
              >
                {/* Halo au hover */}
                <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-brand/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand/10 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                  <Icon name={service.icon} className="h-6 w-6" />
                </div>

                <h3 className="mt-5 text-lg font-bold tracking-tight text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/55">
                  {service.description}
                </p>

                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 -translate-x-1">
                  En savoir plus
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </motion.article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
