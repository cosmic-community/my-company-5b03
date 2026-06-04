export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string
  title: string
  subtitle?: string
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-ink-muted">{subtitle}</p>}
    </div>
  )
}