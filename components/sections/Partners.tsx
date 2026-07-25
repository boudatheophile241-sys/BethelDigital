"use client";

import { Reveal } from "@/components/ui/Reveal";
import { useBrokenImage } from "@/components/ui/useBrokenImage";
import { partners, type Partner } from "@/lib/data";

/**
 * Logo d'un partenaire.
 * Tente d'afficher le vrai fichier (/public/partners/...). S'il n'existe pas
 * encore, bascule automatiquement sur un emplacement elegant avec le nom.
 */
function PartnerLogo({ partner }: { partner: Partner }) {
  const { ref, failed, onError } = useBrokenImage();

  if (failed) {
    return (
      <div className="flex h-12 items-center justify-center px-4">
        <span className="font-display text-lg font-bold tracking-tight text-black/35">
          {partner.name}
        </span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      src={partner.logo}
      alt={partner.name}
      onError={onError}
      className="h-12 w-auto max-w-[150px] object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
      loading="lazy"
    />
  );
}

export function Partners() {
  return (
    <section className="border-y border-black/5 bg-mist py-14">
      <div className="container-x">
        <Reveal className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-black/40">
            Ils m&apos;ont fait confiance
          </p>
        </Reveal>

        <div className="mt-9 grid grid-cols-2 items-center gap-x-6 gap-y-8 sm:grid-cols-4">
          {partners.map((partner, i) => (
            <Reveal key={partner.name} delay={i * 0.08} className="flex justify-center">
              <PartnerLogo partner={partner} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
