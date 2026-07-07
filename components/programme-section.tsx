import { SectionHeading } from './section-heading'

const steps = [
  {
    n: '1',
    title: 'Avant de te lancer',
    text: "Trancher entre statut principal et complémentaire, et estimer la viabilité réelle de ton revenu.",
  },
  {
    n: '2',
    title: "Les démarches, dans l'ordre",
    text: "BCE, caisse d'assurances sociales, TVA, compte bancaire professionnel — que faire en premier.",
  },
  {
    n: '3',
    title: 'Les pièges qui coûtent cher',
    text: "RC Pro, mutuelle, cotisations sous-estimées : les oublis les plus fréquents chez les débutants.",
  },
  {
    n: '4',
    title: 'Facturer et te payer',
    text: "Structurer une facture conforme, gérer la TVA intracommunautaire, suivre tes revenus simplement.",
  },
]

export function ProgrammeSection() {
  return (
    <section id="programme" className="bg-ink py-24">
      <div className="mx-auto max-w-[1180px] px-7">
        <SectionHeading
          eyebrow="Le sommaire"
          title="Quatre étapes pour partir sur des bases solides."
          description="Chaque chapitre pousse vers une action concrète, pas vers plus de théorie."
          onDark
          className="mb-11"
        />
        <div className="grid gap-4 md:grid-cols-2">
          {steps.map((step) => (
            <article
              key={step.n}
              className="group rounded-2xl border border-ink-border bg-ink-card p-7 transition-colors hover:border-brand/50"
            >
              <span className="mb-4 flex size-9 items-center justify-center rounded-full bg-brand font-display text-[0.9rem] font-bold text-primary-foreground">
                {step.n}
              </span>
              <h3 className="mb-2 font-display text-[1.08rem] text-ink-foreground">{step.title}</h3>
              <p className="text-[0.92rem] leading-relaxed text-ink-muted">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
