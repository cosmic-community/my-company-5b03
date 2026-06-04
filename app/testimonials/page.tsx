import { getTestimonials } from '@/lib/cosmic'
import SectionHeader from '@/components/SectionHeader'
import TestimonialCard from '@/components/TestimonialCard'

export const metadata = {
  title: 'Testimonials — Cloud Patrons Info Solutions',
  description: 'Hear what our clients say about working with Cloud Patrons.',
}

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials()

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Client voices"
        title="What Our Clients Say"
        subtitle="Trusted by businesses across fintech, logistics, and software."
      />
      {testimonials.length === 0 ? (
        <p className="mt-12 text-center text-ink-muted">No testimonials available yet.</p>
      ) : (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      )}
    </div>
  )
}