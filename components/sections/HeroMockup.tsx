"use client";

import { motion } from "framer-motion";
import { LogoOnly } from "@/components/ui/Logo";

/**
 * Scene "desk" premium construite en CSS/SVG (aucune image IA).
 * Ordinateur portable affichant le logo, carnet, crayon, table bois clair,
 * formes abstraites flottantes et halo doux.
 * Les zones photo sont clairement remplacables (data-slot).
 */
export function HeroMockup() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px]">
      {/* Halo doux */}
      <div className="absolute inset-6 rounded-full bg-brand/10 blur-3xl" />

      {/* Formes abstraites inspirees du logo */}
      <motion.div
        aria-hidden
        className="absolute -left-2 top-6 h-16 w-16 rounded-2xl border border-line bg-white shadow-soft"
        animate={{ y: [0, -14, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="grid h-full w-full place-items-center">
          <div className="h-6 w-6 rounded-lg bg-brand" />
        </div>
      </motion.div>

      <motion.div
        aria-hidden
        className="absolute right-2 top-2 h-20 w-20 rounded-full bg-beige/70"
        animate={{ y: [0, 18, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        aria-hidden
        className="absolute -right-3 bottom-24 h-14 w-14 rounded-full border-2 border-dashed border-brand/40"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
      />

      {/* Table bois clair */}
      <div className="absolute inset-x-0 bottom-0 h-[42%] rounded-[2.2rem] bg-gradient-to-b from-[#efe3d2] to-[#e7d7bf] shadow-[0_30px_60px_-30px_rgba(17,17,17,0.35)]">
        <div className="absolute inset-0 rounded-[2.2rem] [background:repeating-linear-gradient(90deg,rgba(0,0,0,0.03)_0,rgba(0,0,0,0.03)_1px,transparent_1px,transparent_26px)]" />
      </div>

      {/* Ordinateur portable */}
      <div className="absolute left-1/2 top-[14%] w-[74%] -translate-x-1/2">
        {/* Ecran */}
        <div className="rounded-[1.1rem] border-[6px] border-[#1b1b1f] bg-[#1b1b1f] shadow-card">
          <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-[#0E1526]">
            {/* Contenu de l'ecran : logo Bethel Digital (sur fond fonce) */}
            <div className="flex h-full w-full flex-col items-center justify-center gap-3">
              {/* halo derriere le logo */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/20 blur-2xl" />
              <LogoOnly className="relative h-16 w-16" />
              <div className="relative text-center">
                <p className="font-display text-lg font-bold tracking-tight text-white">
                  Bethel<span className="text-brand-300">Digital</span>
                </p>
                <p className="text-[10px] font-medium tracking-wide text-white/50">
                  Identite visuelle &amp; Branding
                </p>
              </div>
            </div>
            {/* Reflet */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-white/10" />
          </div>
        </div>
        {/* Base */}
        <div className="mx-auto h-2.5 w-[112%] -translate-x-[5%] rounded-b-xl bg-gradient-to-b from-[#c9ccd4] to-[#aeb2bc] shadow-md" />
      </div>

      {/* Carnet */}
      <motion.div
        className="absolute bottom-3 left-3 w-[34%] rotate-[-8deg]"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          data-slot="carnet"
          className="aspect-[3/4] rounded-lg border border-line bg-white p-3 shadow-card"
        >
          <div className="h-1.5 w-8 rounded-full bg-brand/60" />
          <div className="mt-3 space-y-1.5">
            <div className="h-1 w-full rounded bg-line" />
            <div className="h-1 w-5/6 rounded bg-line" />
            <div className="h-1 w-4/6 rounded bg-line" />
          </div>
          <div className="mt-3 h-8 w-8 rounded-md bg-beige/70" />
        </div>
      </motion.div>

      {/* Crayon */}
      <motion.div
        className="absolute bottom-8 right-6 h-24 w-2 rotate-[32deg] rounded-full bg-gradient-to-b from-[#f6c453] to-[#e2a72e] shadow-md"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute -top-2 left-0 h-3 w-2 rounded-t-full bg-[#f7d9a0]" />
        <div className="absolute -top-3 left-[3px] h-1.5 w-[2px] bg-[#1b1b1f]" />
        <div className="absolute bottom-0 left-0 h-3 w-2 rounded-b-full bg-[#f2a9b4]" />
      </motion.div>
    </div>
  );
}
