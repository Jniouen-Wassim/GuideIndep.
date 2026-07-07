import { ArrowRight } from 'lucide-react'

const stats = [
  { num: 'dès 19€', label: 'par e-book interactif' },
  { num: '24h', label: 'pour démarrer tes démarches' },
  { num: 'BE / FR', label: 'deux pays couverts' },
]

export function Hero() {
  return (
    <section
      id="top"
      className="relative -mt-20 overflow-hidden bg-ink pb-20 pt-40"
      style={{
        backgroundImage:
          'radial-gradient(ellipse at 20% 8%, color-mix(in oklch, oklch(0.5 0.09 178) 24%, transparent), transparent 55%), linear-gradient(180deg, oklch(0.26 0.03 200) 0%, var(--ink-elevated) 45%, var(--ink) 100%)',
      }}
    >
      {/* grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)',
          backgroundSize: '46px 46px',
          maskImage: 'radial-gradient(ellipse at 50% 0%, black 40%, transparent 78%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 0%, black 40%, transparent 78%)',
        }}
      />

      <div className="relative mx-auto max-w-[820px] px-6 text-center">
        <span className="mb-7 inline-flex items-center gap-2 rounded-full border border-ink-border bg-white/[0.06] px-4 py-2 text-[0.78rem] font-semibold tracking-wide text-ink-muted">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-70" />
            <span className="relative inline-flex size-2 rounded-full bg-success" />
          </span>
          E-BOOK INTERACTIF DISPONIBLE IMMÉDIATEMENT
        </span>

        <h1 className="font-display text-[clamp(2.2rem,5vw,3.4rem)] text-ink-foreground text-balance">
          Ton statut d&apos;indépendant, sans perdre ni{' '}
          <span className="text-brand">temps</span>, ni{' '}
          <span className="text-brand">argent</span>, ni énergie.
        </h1>

        <p className="mx-auto mt-6 max-w-[52ch] text-[1.08rem] leading-relaxed text-ink-muted text-pretty">
          L&apos;e-book interactif et 100% digital qui t&apos;évite des semaines de recherches et
          les erreurs qui coûtent cher — pour boucler tes démarches en 24h, au meilleur prix, en
          Belgique ou en France.
        </p>

        <p className="mx-auto mt-4 max-w-[54ch] text-[0.92rem] leading-relaxed text-ink-muted/85 text-pretty">
          Chaque e-book contient les liens directs vers les formulaires et organismes officiels
          (BCE, TVA, etc.) pour te faire gagner du temps : tu lis, tu cliques, tu complètes.
        </p>

        <div className="mt-9">
          <a
            href="#offre"
            className="group inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-base font-bold text-primary-foreground shadow-[0_12px_30px_-8px_color-mix(in_oklch,var(--brand)_70%,transparent)] transition-all hover:-translate-y-0.5 hover:bg-brand-strong"
          >
            Accéder à l&apos;e-book
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
          <p className="mt-4 text-[0.85rem] text-ink-muted">
            E-book interactif par pays à partir de 19€ · Pack Belgique + France à 39€
          </p>
        </div>

        <dl className="mx-auto mt-14 grid max-w-[640px] grid-cols-3 overflow-hidden rounded-2xl border border-ink-border bg-white/[0.045]">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`px-5 py-6 text-center ${i > 0 ? 'border-l border-ink-border' : ''}`}
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display text-[1.5rem] text-ink-foreground">{stat.num}</dd>
              <dd className="mt-1 text-[0.76rem] text-ink-muted">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
