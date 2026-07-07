'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { SectionHeading } from './section-heading'

const faqs = [
  {
    q: "L'e-book est-il à jour en 2026 ?",
    a: 'Oui, le contenu reflète les démarches et montants en vigueur, et il est vérifié avec un comptable.',
  },
  {
    q: "Ça fonctionne si je n'ai encore rien commencé ?",
    a: "C'est exactement pour toi : l'e-book part du principe que tu n'as fait aucune démarche.",
  },
  {
    q: 'Sous quel format je reçois le contenu ?',
    a: "100% digital et interactif : chaque e-book contient les liens directs vers les formulaires et organismes officiels (BCE, TVA, etc.). Tu lis, tu cliques, tu complètes.",
  },
  {
    q: 'La Belgique et la France sont-elles dans le même e-book ?',
    a: "Non, volontairement : les systèmes sont trop différents pour être mélangés sans risque d'erreur.",
  },
  {
    q: 'Est-ce que ça remplace un comptable ?',
    a: "Non. C'est un e-book d'orientation, pas un conseil fiscal personnalisé — voir la section comptables ci-dessus.",
  },
]

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-[1180px] px-7">
        <SectionHeading eyebrow="Questions" title="Ce qu'il faut savoir avant de commencer." className="mb-11" />
        <div className="mx-auto grid max-w-3xl gap-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div
                key={faq.q}
                className={`rounded-2xl border bg-card transition-colors ${isOpen ? 'border-brand/40' : 'border-border'}`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-[1.02rem] text-card-foreground">{faq.q}</span>
                  <Plus
                    className={`size-5 shrink-0 text-brand transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-[0.94rem] leading-relaxed text-muted-foreground">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
