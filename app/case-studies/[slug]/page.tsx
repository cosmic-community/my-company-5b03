// app/case-studies/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getCaseStudy, getMetafieldValue } from '@/lib/cosmic'

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const caseStudy = await getCaseStudy(slug)

  if (!caseStudy) {
    notFound()
  }

  const title = getMetafieldValue(caseStudy.metadata?.project_title) || caseStudy.title
  const client = getMetafieldValue(caseStudy.metadata?.client_name)
  const industry = getMetafieldValue(caseStudy.metadata?.industry)
  const challenge = getMetafieldValue(caseStudy.metadata?.challenge)
  const solution = getMetafieldValue(caseStudy.metadata?.solution)
  const results = getMetafieldValue(caseStudy.metadata?.results)
  const image = caseStudy.metadata?.featured_image
  const relatedServices = caseStudy.metadata?.related_services || []

  return (
    <article>
      <header className="gradient-hero">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
          <Link href="/case-studies" className="text-sm font-medium text-brand-200 hover:text-white">
            ← Back to case studies
          </Link>
          {industry && (
            <span className="mt-6 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-brand-200">
              {industry}
            </span>
          )}
          <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">{title}</h1>
          {client && <p className="mt-3 text-lg text-slate-300">Client: {client}</p>}
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {image && (
          <img
            src={`${image.imgix_url}?w=1600&h=800&fit=crop&auto=format,compress`}
            alt={title}
            width={800}
            height={400}
            className="mb-12 w-full rounded-2xl object-cover"
          />
        )}

        <div className="space-y-12">
          {challenge && (
            <section>
              <h2 className="text-2xl font-bold text-ink">The Challenge</h2>
              <div
                className="prose prose-slate mt-4 max-w-none"
                dangerouslySetInnerHTML={{ __html: challenge }}
              />
            </section>
          )}

          {solution && (
            <section>
              <h2 className="text-2xl font-bold text-ink">Our Solution</h2>
              <div
                className="prose prose-slate mt-4 max-w-none"
                dangerouslySetInnerHTML={{ __html: solution }}
              />
            </section>
          )}

          {results && (
            <section className="rounded-2xl border border-brand-100 bg-brand-50 p-8">
              <h2 className="text-2xl font-bold text-brand-800">The Results</h2>
              <div
                className="prose prose-slate mt-4 max-w-none"
                dangerouslySetInnerHTML={{ __html: results }}
              />
            </section>
          )}

          {relatedServices.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-ink">Related Services</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {relatedServices.map((service) => (
                  <Link
                    key={service.id}
                    href={`/services/${service.slug}`}
                    className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-brand-400 hover:text-brand-600"
                  >
                    {getMetafieldValue(service.metadata?.icon_emoji)}{' '}
                    {getMetafieldValue(service.metadata?.service_name) || service.title}
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </article>
  )
}