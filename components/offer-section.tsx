import { Check, ArrowRight } from 'lucide-react'

const includes = [
  'Les deux e-books interactifs complets — Belgique et France',
  'Liens cliquables directs vers la BCE, la TVA et les organismes officiels',
  'Template de facture conforme inclus',
  'Tableur de suivi des cotisations et de la TVA',
  'Checklist finale avant ta première facture',
]

export function OfferSection() {
  return (
    <section id="offre" className="py-24">
      <div className="mx-auto max-w-[1180px] px-7">
        <div className="grid items-start gap-14 md:grid-cols-2">
          <div>
            <span className="mb-3.5 block text-[0.78rem] font-bold uppercase tracking-[0.12em] text-brand">
              L&apos;offre
            </span>
            <h2 className="mb-4 font-display text-[clamp(1.7rem,3.4vw,2.35rem)] text-balance">
              Entre maintenant, construis proprement.
            </h2>
            <p className="mb-6 text-[1rem] leading-relaxed text-muted-foreground text-pretty">
              L&apos;objectif est simple : te donner une base claire, vérifiée avec un comptable, pour
              te lancer sans mauvaise surprise.
            </p>
            <ul className="space-y-1">
              {includes.map((item) => (
                <li key={item} className="flex items-start gap-3 py-2 text-[0.96rem]">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                    <Check className="size-3.5" aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-[0_1px_3px_rgba(20,21,26,0.06),0_28px_50px_-20px_rgba(20,21,26,0.18)]">
            <span className="absolute right-0 top-6 rounded-l-full bg-brand py-1.5 pl-4 pr-4 text-[0.72rem] font-bold uppercase tracking-wide text-primary-foreground">
              Offre de lancement
            </span>
            <span className="text-[0.78rem] font-bold uppercase tracking-[0.1em] text-muted-foreground">
              Pack Belgique + France
            </span>
            <div className="mt-3.5 mb-1.5 flex items-baseline gap-3">
              <span className="font-display text-[2.6rem] text-card-foreground">39€</span>
              <span className="text-[1.1rem] font-semibold text-muted-foreground line-through">54€</span>
            </div>
            <p className="mb-2 text-[0.92rem] leading-relaxed text-muted-foreground">
              Un prix volontairement accessible pour retirer l&apos;excuse du budget et passer à
              l&apos;action.
            </p>
            <p className="mb-6 text-[0.88rem] font-medium text-foreground">
              Ou 19€ pour un seul pays (Belgique <span className="text-muted-foreground">ou</span> France).
            </p>
            <button
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-[0.95rem] font-bold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-brand-strong"
            >
              Je prends le pack
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </button>
            <p className="mt-4 text-center text-[0.8rem] text-muted-foreground">
              Paiement unique · Accès immédiat
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
