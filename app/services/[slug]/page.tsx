// app/services/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getService, getMetafieldValue } from '@/lib/cosmic'

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = await getService(slug)

  if (!service) {
    notFound()
  }

  const name = getMetafieldValue(service.metadata?.service_name) || service.title
  const emoji = getMetafieldValue(service.metadata?.icon_emoji) || '🛠️'
  const summary = getMetafieldValue(service.metadata?.summary)
  const description = getMetafieldValue(service.metadata?.description)
  const features = service.metadata?.key_features || []
  const industries = service.metadata?.industries_served || []
  const image = service.metadata?.featured_image

  return (
    <article>
      <header className="gradient-hero">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
          <Link href="/services" className="text-sm font-medium text-brand-200 hover:text-white">
            ← Back to services
          </Link>
          <div className="mt-6 text-5xl">{emoji}</div>
          <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">{name}</h1>
          {summary && <p className="mt-4 max-w-2xl text-lg text-slate-300">{summary}</p>}
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {image && (
          <img
            src={`${image.imgix_url}?w=1600&h=800&fit=crop&auto=format,compress`}
            alt={name}
            width={800}
            height={400}
            className="mb-12 w-full rounded-2xl object-cover"
          />
        )}

        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {description && (
              <div
                className="prose prose-slate max-w-none"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            )}
          </div>

          <aside className="space-y-8">
            {features.length > 0 && (
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-sm font-bold uppercase tracking-wide text-ink">Key Features</h3>
                <ul className="mt-4 space-y-3">
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-ink-soft">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {getMetafieldValue(feature)}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {industries.length > 0 && (
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-sm font-bold uppercase tracking-wide text-ink">Industries Served</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {industries.map((industry, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-brand-50 px-3 py-1 text-sm font-medium text-brand-700"
                    >
                      {getMetafieldValue(industry)}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </article>
  )
}