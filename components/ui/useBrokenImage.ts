"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Gere proprement les images manquantes (404).
 *
 * Probleme resolu : une image rendue cote serveur peut echouer AVANT que React
 * ne s'active (hydratation). L'evenement `onError` est alors rate. On verifie
 * donc aussi apres le montage si l'image est deja cassee (naturalWidth === 0).
 *
 * Usage :
 *   const { ref, failed, onError } = useBrokenImage();
 *   if (failed) return <Placeholder />;
 *   return <img ref={ref} onError={onError} ... />;
 */
export function useBrokenImage() {
  const ref = useRef<HTMLImageElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const img = ref.current;
    // L'image est chargee mais sans dimensions => fichier absent / casse
    if (img && img.complete && img.naturalWidth === 0) {
      setFailed(true);
    }
  }, []);

  return { ref, failed, onError: () => setFailed(true) };
}
