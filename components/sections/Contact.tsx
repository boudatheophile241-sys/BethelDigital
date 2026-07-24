"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/data";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", service: "Branding", message: "" });

  // Compose un message WhatsApp pre-rempli (aucun backend requis).
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Bonjour Bethel Digital,\n\nNom : ${form.name}\nEmail : ${form.email}\nService : ${form.service}\n\n${form.message}`
    );
    window.open(`https://wa.me/${site.whatsapp}?text=${text}`, "_blank");
  };

  const field =
    "w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-ink placeholder:text-ink/35 outline-none transition-colors focus:border-brand focus:bg-white";

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container-x">
        <div className="overflow-hidden rounded-[2.5rem] border border-line bg-white shadow-card">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            {/* Colonne infos */}
            <div className="relative overflow-hidden bg-ink p-8 text-white md:p-11">
              <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-brand/30 blur-3xl" />
              <div className="relative">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-200">
                  Contact
                </span>
                <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl">
                  Votre marque a une histoire. Faisons-la briller.
                </h2>
                <p className="mt-4 text-white/60">
                  Parlons de votre projet et creons ensemble une identite visuelle
                  qui fera la difference.
                </p>

                <ul className="mt-9 space-y-5">
                  <li className="flex items-center gap-4">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/10">
                      <Mail className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs text-white/50">Email</p>
                      <a href={`mailto:${site.email}`} className="text-sm font-medium hover:text-brand-200">
                        {site.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/10">
                      <Phone className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs text-white/50">Telephone</p>
                      <a href={`tel:${site.phone}`} className="text-sm font-medium hover:text-brand-200">
                        {site.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/10">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs text-white/50">Localisation</p>
                      <p className="text-sm font-medium">{site.location}</p>
                    </div>
                  </li>
                </ul>

                <a
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-4 w-4 text-brand" />
                  Discuter sur WhatsApp
                </a>
              </div>
            </div>

            {/* Colonne formulaire */}
            <div className="p-8 md:p-11">
              <Reveal>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-ink">Nom complet</label>
                      <input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Votre nom"
                        className={field}
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-ink">Email</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="vous@email.com"
                        className={field}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-ink">Service souhaite</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className={field}
                    >
                      {["Branding", "Logo & Identite", "Packaging", "Impression", "Design graphique", "Site web", "Marketing digital", "SEO"].map(
                        (s) => (
                          <option key={s}>{s}</option>
                        )
                      )}
                    </select>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-ink">Votre message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Parlez-moi de votre projet..."
                      className={`${field} resize-none`}
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    Envoyer ma demande
                    <Send className="h-4 w-4" />
                  </button>
                  <p className="text-center text-xs text-ink/40">
                    Votre demande sera transmise via WhatsApp pour une reponse rapide.
                  </p>
                </form>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
