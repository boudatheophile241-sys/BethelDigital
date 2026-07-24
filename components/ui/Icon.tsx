"use client";

import { icons, type LucideProps } from "lucide-react";

/**
 * Rend une icone Lucide a partir de son nom (string).
 * Permet de piloter les icones depuis lib/data.ts.
 */
export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const LucideIcon = icons[name as keyof typeof icons];
  if (!LucideIcon) return null;
  return <LucideIcon {...props} />;
}
