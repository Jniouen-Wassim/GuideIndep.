import { ArrowRight } from 'lucide-react'

export function FinalCta() {
  return (
    <section
      className="relative overflow-hidden py-28 text-center"
      style={{
        backgroundImage:
          'radial-gradient(ellipse at 80% 20%, color-mix(in oklch, oklch(0.5 0.09 178) 24%, transparent), transparent 55%), linear-gradient(180deg, var(--ink-elevated) 0%, oklch(0.24 0.03 200) 100%)',
      }}
    >
      <div className="mx-auto max-w-[1180px] px-7">
        <span className="mb-3.5 block text-[0.78rem] font-bold uppercase tracking-[0.12em] text-brand">
          Passage à l&apos;action
        </span>
        <h2 className="mx-auto max-w-[16ch] font-display text-[clamp(2rem,4.2vw,2.8rem)] text-ink-foreground text-balance">
          Arrête de repousser tes démarches.
        </h2>
        <p className="mx-auto mb-8 mt-5 max-w-[48ch] text-[1.02rem] leading-relaxed text-ink-muted text-pretty">
          Un e-book interactif clair, honnête, pensé pour un vrai lancement — sans promesse de gain rapide.
        </p>
        <a
          href="#offre"
          className="group inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-base font-bold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-brand-strong"
        >
          Voir l&apos;offre
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
