import { cn } from '@/lib/utils'

type Props = {
  eyebrow: string
  title: string
  description?: string
  onDark?: boolean
  className?: string
}

export function SectionHeading({ eyebrow, title, description, onDark, className }: Props) {
  return (
    <div className={cn('max-w-[640px]', className)}>
      <span className="mb-3.5 block text-[0.78rem] font-bold uppercase tracking-[0.12em] text-brand">
        {eyebrow}
      </span>
      <h2
        className={cn(
          'font-display text-[clamp(1.7rem,3.4vw,2.35rem)] text-balance',
          onDark ? 'text-ink-foreground' : 'text-foreground',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className={cn('mt-4 text-[1.02rem] leading-relaxed text-pretty', onDark ? 'text-ink-muted' : 'text-muted-foreground')}>
          {description}
        </p>
      ) : null}
    </div>
  )
}
