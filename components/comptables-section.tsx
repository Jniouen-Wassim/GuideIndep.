'use client'

import { useState } from 'react'
import { Info, Clock, Bell, Check } from 'lucide-react'
import { SectionHeading } from './section-heading'

export function ComptablesSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <section id="comptables" className="py-24">
      <div className="mx-auto max-w-[1180px] px-7">
        <SectionHeading
          eyebrow="Aller plus loin"
          title="Besoin d'un comptable pour t'accompagner ?"
          description="Des professionnels habitués aux indépendants qui démarrent — pas juste des chiffres à remplir."
          className="mb-7"
        />
        <div className="mb-7 flex items-start gap-3 rounded-xl border border-border bg-accent/60 px-5 py-4 text-[0.88rem] leading-relaxed text-accent-foreground">
          <Info className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          <p>
            Certains liens de cette section sont des liens partenaires : si tu prends rendez-vous via
            cette page, le comptable me reverse une commission, sans surcoût pour toi.
          </p>
        </div>
        <div className="flex flex-col items-center gap-5 rounded-2xl border border-dashed border-border bg-card/40 px-6 py-12 text-center">
          <span className="flex size-11 items-center justify-center rounded-full bg-muted text-muted-foreground">
            <Clock className="size-5" aria-hidden="true" />
          </span>
          <p className="max-w-[46ch] text-[0.95rem] leading-relaxed text-muted-foreground">
            Les comptables partenaires arrivent bientôt. Laisse ton email pour être prévenu·e en
            priorité dès l&apos;ouverture — l&apos;e-book reste utile seul pour poser les bases avant ton
            premier échange.
          </p>

          {submitted ? (
            <p className="flex items-center gap-2 rounded-full bg-brand-soft px-5 py-3 text-[0.92rem] font-semibold text-accent-foreground">
              <Check className="size-4" aria-hidden="true" />
              C&apos;est noté ! Tu seras averti·e dès l&apos;ouverture.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex w-full max-w-[440px] flex-col gap-2.5 sm:flex-row"
            >
              <label htmlFor="comptable-email" className="sr-only">
                Ton adresse email
              </label>
              <input
                id="comptable-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ton adresse email"
                className="h-12 flex-1 rounded-full border border-input bg-card px-5 text-[0.95rem] text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-brand focus:ring-2 focus:ring-ring/40"
              />
              <button
                type="submit"
                className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-brand px-6 text-[0.92rem] font-bold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-brand-strong"
              >
                <Bell className="size-4" aria-hidden="true" />
                M&apos;avertir dès l&apos;ouverture
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
