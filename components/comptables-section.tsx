import { Info, Clock } from 'lucide-react'
import { SectionHeading } from './section-heading'

export function ComptablesSection() {
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
            Les comptables partenaires arrivent bientôt. L'e-book reste utile seul pour poser les bases avant ton
            premier échange.
          </p>
        </div>
      </div>
    </section>
  )
}
