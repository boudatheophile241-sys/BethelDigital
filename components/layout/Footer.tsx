"use client";

import { useState } from "react";
import { ArrowRight, Instagram, Linkedin, Facebook } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { navLinks, services, site } from "@/lib/data";

export function Footer() {
  const [email, setEmail] = useState("");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0E1526] text-white">
      <div className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Marque + newsletter */}
          <div>
            <Logo onDark />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
              Aider les marques a se demarquer grace a des identites visuelles
              creatives, coherentes et performantes.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.open(
                  `mailto:${site.email}?subject=Newsletter&body=Inscrivez-moi : ${encodeURIComponent(email)}`
                );
              }}
              className="mt-7"
            >
              <label className="text-xs font-semibold uppercase tracking-wider text-white/50">
                Restez inspire
              </label>
              <div className="mt-2 flex items-center gap-2 rounded-full border border-white/15 bg-white/5 p-1.5 pl-4 focus-within:border-brand">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre email"
                  className="flex-1 bg-transparent text-sm text-white placeholder:text-white/35 outline-none"
                />
                <button
                  type="submit"
                  aria-label="S'inscrire"
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand text-white transition-transform hover:scale-105"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-bold text-white">Navigation</h4>
            <ul className="mt-4 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-white/55 transition-colors hover:text-brand-300">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold text-white">Services</h4>
            <ul className="mt-4 space-y-3">
              {services.slice(0, 6).map((s) => (
                <li key={s.title}>
                  <a href="#services" className="text-sm text-white/55 transition-colors hover:text-brand-300">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-white">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/55">
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-brand-300">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phone}`} className="hover:text-brand-300">
                  {site.phone}
                </a>
              </li>
              <li>{site.location}</li>
              <li>{site.hours}</li>
            </ul>

            <div className="mt-5 flex gap-2">
              {[
                { icon: Instagram, href: site.socials.instagram, label: "Instagram" },
                { icon: Linkedin, href: site.socials.linkedin, label: "LinkedIn" },
                { icon: Facebook, href: site.socials.facebook, label: "Facebook" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-white/5 text-white/70 transition-all hover:border-brand hover:text-brand-300"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-sm text-white/45 sm:flex-row">
          <p>
            &copy; {year} {site.name}. Tous droits reserves.
          </p>
          <p>
            Concu avec soin par <span className="font-medium text-white/70">{site.founder}</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
