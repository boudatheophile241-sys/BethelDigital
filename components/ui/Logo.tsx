"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { site } from "@/lib/data";
import { useBrokenImage } from "@/components/ui/useBrokenImage";

/**
 * Logo Bethel Digital = marque (image) + nom.
 *
 * REMPLACER LE LOGO : depose ton fichier -> public/logo.png
 * (la marque "b" seule, fond transparent). Tant qu'il est absent,
 * un monogramme de secours s'affiche.
 *
 * onDark : true quand le logo est sur un fond FONCE (en-tete / pied de page)
 * -> le texte passe en clair pour rester lisible.
 */
const LOGO_SRC = "/logo.png";

function LogoMark({ onDark }: { onDark: boolean }) {
  const { ref, failed, onError } = useBrokenImage();

  if (!failed) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        ref={ref}
        src={LOGO_SRC}
        alt={site.name}
        onError={onError}
        className="h-9 w-auto object-contain md:h-10"
      />
    );
  }
  // Monogramme de secours
  return (
    <span
      className={cn(
        "grid h-9 w-9 place-items-center rounded-xl text-white shadow-[0_8px_20px_-6px_rgba(90,140,255,0.6)] md:h-10 md:w-10",
        onDark ? "bg-brand" : "bg-brand"
      )}
      aria-hidden
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path
          d="M7 4v16M7 12a5 5 0 1 1 0 .001"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function Logo({
  className,
  onDark = false,
  showText = true,
}: {
  className?: string;
  onDark?: boolean;
  showText?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark onDark={onDark} />
      {showText && (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "font-display text-lg font-extrabold leading-none tracking-tight",
              onDark ? "text-white" : "text-ink"
            )}
          >
            Bethel<span className={onDark ? "text-brand-300" : "text-brand"}>Digital</span>
          </span>
          <span
            className={cn(
              "mt-0.5 text-[10px] font-medium tracking-wide",
              onDark ? "text-white/55" : "text-ink/50"
            )}
          >
            {site.tagline}
          </span>
        </span>
      )}
    </span>
  );
}

// Marque seule (sans le texte) — utile pour l'ecran du Hero.
export function LogoOnly({ className }: { className?: string }) {
  const [failed, setFailed] = useState(false);
  if (!failed) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={LOGO_SRC}
        alt={site.name}
        onError={() => setFailed(true)}
        className={cn("object-contain", className)}
      />
    );
  }
  return (
    <span className={cn("grid place-items-center rounded-2xl bg-brand text-white", className)}>
      <svg viewBox="0 0 24 24" className="h-1/2 w-1/2" fill="none">
        <path
          d="M7 4v16M7 12a5 5 0 1 1 0 .001"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
