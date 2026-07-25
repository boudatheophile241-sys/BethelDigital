"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowUpRight, ImageIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { useBrokenImage } from "@/components/ui/useBrokenImage";
import { projects, portfolioFilters, type Project } from "@/lib/data";
import { cn } from "@/lib/utils";

/** Visuel d'un projet : image reelle si dispo, sinon emplacement remplacable. */
function ProjectImage({ project, className }: { project: Project; className?: string }) {
  const { ref, failed, onError } = useBrokenImage();

  if (failed) {
    return (
      <div
        className={cn(
          "flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-surface to-sky/30",
          className
        )}
      >
        <ImageIcon className="h-7 w-7 text-brand/40" />
        <span className="px-4 text-center text-xs font-medium text-ink/40">
          {project.title}
        </span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      src={project.image}
      alt={project.title}
      onError={onError}
      loading="lazy"
      className={cn("h-full w-full object-cover", className)}
    />
  );
}

const ratioClass: Record<Project["ratio"], string> = {
  tall: "row-span-2 aspect-[3/4]",
  wide: "aspect-[16/10]",
  square: "aspect-square",
};

export function Portfolio() {
  const [filter, setFilter] = useState<string>("Tous");
  const [active, setActive] = useState<Project | null>(null);

  const filtered = useMemo(
    () => (filter === "Tous" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section id="portfolio" className="py-24 md:py-32">
      <div className="container-x">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">Portfolio</span>
            <h2 className="mt-4 text-4xl font-bold tracking-tighter text-ink sm:text-5xl">
              Une sélection de <span className="text-gradient">réalisations</span>
            </h2>
            <p className="mt-4 text-lg text-ink/55">
              Chaque projet est une histoire unique. Voici quelques marques que
              j&apos;ai eu le plaisir d&apos;accompagner.
            </p>
          </div>
        </Reveal>

        {/* Filtres */}
        <Reveal delay={0.1}>
          <div className="no-scrollbar mt-10 flex gap-2 overflow-x-auto pb-1">
            {portfolioFilters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  "shrink-0 rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300",
                  filter === f
                    ? "border-brand bg-brand text-white shadow-[0_8px_20px_-8px_rgba(90,140,255,0.6)]"
                    : "border-line bg-white text-ink/60 hover:border-ink/20 hover:text-ink"
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Grille Masonry */}
        <motion.div
          layout
          className="mt-8 grid auto-rows-[minmax(0,1fr)] grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.button
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setActive(project)}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-line bg-surface text-left shadow-soft",
                  ratioClass[project.ratio]
                )}
              >
                <ProjectImage
                  project={project}
                  className="transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/0 to-transparent p-4 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                  <span className="text-[11px] font-medium uppercase tracking-wider text-white/70">
                    {project.tag}
                  </span>
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-white">{project.title}</h3>
                    <ArrowUpRight className="h-5 w-5 text-white" />
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl"
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Fermer"
                className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-ink shadow-soft transition-transform hover:scale-105"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="aspect-[16/10] w-full overflow-hidden bg-surface">
                <ProjectImage project={active} />
              </div>
              <div className="p-6 md:p-8">
                <span className="eyebrow">{active.tag}</span>
                <h3 className="mt-2 text-2xl font-bold tracking-tight text-ink">
                  {active.title}
                </h3>
                <p className="mt-3 text-ink/55">
                  Étude de cas : contexte, problématique, réflexion, processus
                  créatif, choix des couleurs et typographies, puis résultats.
                  Remplace ce texte et l&apos;image par le détail réel du projet.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
