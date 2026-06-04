import Link from 'next/link'
import { getServices, getCaseStudies, getTestimonials, getTeamMembers } from '@/lib/cosmic'
import Hero from '@/components/Hero'
import SectionHeader from '@/components/SectionHeader'
import ServiceCard from '@/components/ServiceCard'
import CaseStudyCard from '@/components/CaseStudyCard'
import TestimonialCard from '@/components/TestimonialCard'
import TeamMemberCard from '@/components/TeamMemberCard'

export default async function HomePage() {
  const [services, caseStudies, testimonials, team] = await Promise.all([
    getServices(),
    getCaseStudies(),
    getTestimonials(),
    getTeamMembers(),
  ])

  const featuredServices = services.slice(0, 6)
  const featuredCaseStudies = caseStudies.slice(0, 3)
  const featuredTestimonials = testimonials.slice(0, 3)
  const featuredTeam = team.slice(0, 4)

  return (
    <>
      <Hero />

      {/* Services */}
      {featuredServices.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What we do"
            title="Our Services"
            subtitle="End-to-end cloud and IT operations engineered for reliability and security."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          {services.length > 6 && (
            <div className="mt-10 text-center">
              <Link
                href="/services"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-brand-400 hover:text-brand-600"
              >
                View all services
              </Link>
            </div>
          )}
        </section>
      )}

      {/* Case Studies */}
      {featuredCaseStudies.length > 0 && (
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Proven results"
              title="Case Studies"
              subtitle="Real outcomes for clients across fintech, logistics, and software."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {featuredCaseStudies.map((cs) => (
                <CaseStudyCard key={cs.id} caseStudy={cs} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      {featuredTestimonials.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Client voices" title="What Our Clients Say" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {featuredTestimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </section>
      )}

      {/* Team */}
      {featuredTeam.length > 0 && (
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <SectionHeader eyebrow="The experts" title="Meet the Team" />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {featuredTeam.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="gradient-hero">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to optimize your cloud operations?
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Partner with Cloud Patrons for 24×7×365 managed support and peace of mind.
          </p>
          <Link
            href="/services"
            className="mt-8 inline-flex rounded-full bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-brand-500"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </>
  )
}