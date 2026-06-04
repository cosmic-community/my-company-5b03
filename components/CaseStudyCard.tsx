import Link from 'next/link'
import type { CaseStudy } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  const title = getMetafieldValue(caseStudy.metadata?.project_title) || caseStudy.title
  const client = getMetafieldValue(caseStudy.metadata?.client_name)
  const industry = getMetafieldValue(caseStudy.metadata?.industry)
  const image = caseStudy.metadata?.featured_image

  return (
    <Link
      href={`/case-studies/${caseStudy.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      {image && (
        <div className="aspect-[16/9] overflow-hidden bg-slate-100">
          <img
            src={`${image.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
            alt={title}
            width={400}
            height={225}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        {industry && (
          <span className="mb-2 inline-flex w-fit rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
            {industry}
          </span>
        )}
        <h3 className="text-lg font-bold text-ink group-hover:text-brand-700">{title}</h3>
        {client && <p className="mt-1 text-sm text-ink-muted">{client}</p>}
      </div>
    </Link>
  )
}