import { FileText } from 'lucide-react'

const links = [
  { href: '#probleme', label: "L'e-book" },
  { href: '#programme', label: 'Sommaire' },
  { href: '#offre', label: 'Offre' },
  { href: '#comptables', label: 'Comptables' },
]

export function SiteNav() {
  return (
    <div className="sticky top-4 z-50 flex justify-center px-4">
      <nav className="flex items-center gap-6 rounded-full border border-ink-border bg-ink/92 py-2.5 pl-5 pr-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-md">
        <a href="#top" className="flex items-center gap-2 font-display text-[0.95rem] font-bold text-ink-foreground">
          <span className="flex size-6 items-center justify-center rounded-md bg-brand text-primary-foreground">
            <FileText className="size-3.5" aria-hidden="true" />
          </span>
          GuideIndép.
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.87rem] font-medium text-ink-muted transition-colors hover:text-ink-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#offre"
          className="rounded-full bg-brand px-4 py-2 text-[0.85rem] font-bold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-brand-strong"
        >
          Rejoindre
        </a>
      </nav>
    </div>
  )
}
