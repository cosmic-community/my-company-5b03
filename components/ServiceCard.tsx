import Link from 'next/link'
import type { Service } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function ServiceCard({ service }: { service: Service }) {
  const name = getMetafieldValue(service.metadata?.service_name) || service.title
  const emoji = getMetafieldValue(service.metadata?.icon_emoji) || '🛠️'
  const summary = getMetafieldValue(service.metadata?.summary)

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg"
    >
      <span className="text-3xl">{emoji}</span>
      <h3 className="mt-4 text-lg font-bold text-ink group-hover:text-brand-700">{name}</h3>
      {summary && <p className="mt-2 flex-1 text-sm text-ink-muted">{summary}</p>}
      <span className="mt-4 inline-flex items-center text-sm font-semibold text-brand-600">
        Learn more
        <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </span>
    </Link>
  )
}