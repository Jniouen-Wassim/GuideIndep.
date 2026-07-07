import { Quote } from 'lucide-react'

export function QuoteBlock() {
  return (
    <section className="pb-24">
      <div className="mx-auto max-w-[1180px] px-7">
        <figure className="relative overflow-hidden rounded-r-2xl border-l-4 border-brand bg-card px-10 py-10 shadow-[0_1px_3px_rgba(20,21,26,0.06)]">
          <Quote className="mb-4 size-7 text-brand" aria-hidden="true" />
          <blockquote className="max-w-[52ch] text-[1.3rem] font-semibold leading-[1.45] text-card-foreground text-balance">
            Le bon départ ne demande pas de bruit. Il demande de la clarté sur ce qu&apos;il faut
            faire, dans quel ordre, et pourquoi.
          </blockquote>
        </figure>
      </div>
    </section>
  )
}
