import { getCaseStudies } from '@/lib/cosmic'
import SectionHeader from '@/components/SectionHeader'
import CaseStudyCard from '@/components/CaseStudyCard'

export const metadata = {
  title: 'Case Studies — Cloud Patrons Info Solutions',
  description: 'Proven outcomes for clients across fintech, logistics, and software.',
}

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies()

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Proven results"
        title="Case Studies"
        subtitle="See how we help organizations strengthen security and maintain business continuity."
      />
      {caseStudies.length === 0 ? (
        <p className="mt-12 text-center text-ink-muted">No case studies available yet.</p>
      ) : (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((cs) => (
            <CaseStudyCard key={cs.id} caseStudy={cs} />
          ))}
        </div>
      )}
    </div>
  )
}