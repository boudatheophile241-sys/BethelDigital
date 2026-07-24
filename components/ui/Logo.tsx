"use client";

import { cn } from "@/lib/utils";
import { site } from "@/lib/data";
import { useBrokenImage } from "@/components/ui/useBrokenImage";

/**
 * Logo Bethel Digital.
 *
 * COMMENT REMPLACER LE LOGO :
 * Depose simplement ton fichier ici -> public/logo.png  (ou .svg)
 * Il s'affichera automatiquement partout. Tant que le fichier n'existe pas,
 * un logo "placeholder" (monogramme + nom) s'affiche a la place.
 *
 * Pour changer le nom du fichier, modifie LOGO_SRC ci-dessous.
 */
const LOGO_SRC = "/logo.png";

export function Logo({
  className,
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  const { ref, failed, onError } = useBrokenImage();

  // Si le vrai logo existe -> on affiche uniquement l'image
  if (!failed) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        ref={ref}
        src={LOGO_SRC}
        alt={site.name}
        onError={onError}
        className={cn("h-9 w-auto max-w-[190px] object-contain md:h-10", className)}
      />
    );
  }

  // Placeholder (avant que tu deposes ton fichier)
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        className="relative grid h-9 w-9 place-items-center rounded-xl bg-brand text-white shadow-[0_8px_20px_-6px_rgba(90,140,255,0.6)]"
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
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[17px] font-bold tracking-tight",
            invert ? "text-white" : "text-ink"
          )}
        >
          Bethel<span className="text-brand">Digital</span>
        </span>
        <span
          className={cn(
            "mt-0.5 text-[10px] font-medium tracking-wide",
            invert ? "text-white/60" : "text-ink/50"
          )}
        >
          {site.tagline}
        </span>
      </span>
    </span>
  );
}
