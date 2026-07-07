import { Layers, ShieldAlert, ListOrdered } from 'lucide-react'
import { SectionHeading } from './section-heading'

const problems = [
  {
    icon: Layers,
    title: 'Trop de sources contradictoires',
    text: "Chaque site donne une réponse différente selon le pays, et il est difficile de savoir laquelle est à jour en 2026.",
  },
  {
    icon: ShieldAlert,
    title: "La peur de l'oubli coûteux",
    text: "RC Pro, mutuelle, cotisations sous-estimées : un oubli en début de parcours peut coûter cher quelques mois plus tard.",
  },
  {
    icon: ListOrdered,
    title: "Pas d'ordre clair",
    text: "BCE, TVA, caisse sociale, banque pro : sans savoir par quoi commencer, on repousse le lancement.",
  },
]

export function ProblemSection() {
  return (
    <section id="probleme" className="py-24">
      <div className="mx-auto max-w-[1180px] px-7">
        <SectionHeading
          eyebrow="Le problème"
          title="Tu n'as pas besoin d'un discours de plus sur l'entrepreneuriat."
          description="Tu as besoin de savoir, dans l'ordre, quelles démarches faire — sans jargon, sans y perdre des semaines."
          className="mb-11"
        />
        <div className="grid gap-5 md:grid-cols-3">
          {problems.map((p) => (
            <article
              key={p.title}
              className="group rounded-2xl border border-border bg-card p-7 shadow-[0_1px_3px_rgba(20,21,26,0.05),0_14px_28px_-16px_rgba(20,21,26,0.12)] transition-all hover:-translate-y-1 hover:shadow-[0_1px_3px_rgba(20,21,26,0.06),0_22px_40px_-18px_rgba(20,21,26,0.18)]"
            >
              <span className="mb-5 flex size-11 items-center justify-center rounded-xl bg-brand-soft text-brand transition-transform group-hover:scale-105">
                <p.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mb-2.5 font-display text-[1.08rem] text-card-foreground">{p.title}</h3>
              <p className="text-[0.93rem] leading-relaxed text-muted-foreground">{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
