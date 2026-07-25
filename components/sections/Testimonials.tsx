"use client";

import { Star, Quote } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { useBrokenImage } from "@/components/ui/useBrokenImage";
import { testimonials, type Testimonial } from "@/lib/data";

/** Avatar : photo reelle si dispo, sinon initiales sur fond doux. */
function Avatar({ t }: { t: Testimonial }) {
  const { ref, failed, onError } = useBrokenImage();
  const initials = t.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  if (failed) {
    return (
      <div className="grid h-12 w-12 place-items-center rounded-full bg-brand/10 font-display text-sm font-bold text-brand">
        {initials}
      </div>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      src={t.avatar}
      alt={t.name}
      onError={onError}
      loading="lazy"
      className="h-12 w-12 rounded-full object-cover"
    />
  );
}

export function Testimonials() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Témoignages</span>
          <h2 className="mt-4 text-4xl font-bold tracking-tighter text-ink sm:text-5xl">
            Ce qu&apos;ils <span className="text-gradient">disent</span>
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-5 md:grid-cols-3" stagger={0.1}>
          {testimonials.map((t) => (
            <RevealItem key={t.name}>
              <figure className="flex h-full flex-col rounded-3xl border border-line bg-white p-7 shadow-soft transition-shadow duration-500 hover:shadow-card">
                <Quote className="h-8 w-8 text-brand/20" />
                <div className="mt-3 flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-brand text-brand" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink/70">
                  &laquo; {t.quote} &raquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                  <Avatar t={t} />
                  <div>
                    <p className="text-sm font-bold text-ink">{t.name}</p>
                    <p className="text-xs text-ink/50">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
