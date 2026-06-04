import type { Testimonial } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'
import StarRating from '@/components/StarRating'

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const quote = getMetafieldValue(testimonial.metadata?.quote)
  const name = getMetafieldValue(testimonial.metadata?.client_name)
  const clientTitle = getMetafieldValue(testimonial.metadata?.client_title)
  const company = getMetafieldValue(testimonial.metadata?.company)
  const photo = testimonial.metadata?.client_photo
  const rating = testimonial.metadata?.star_rating

  return (
    <figure className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <StarRating rating={typeof rating === 'number' ? rating : undefined} />
      <blockquote className="mt-4 flex-1 text-ink-soft">
        {quote && <p className="text-base leading-relaxed">“{quote}”</p>}
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4">
        {photo ? (
          <img
            src={`${photo.imgix_url}?w=96&h=96&fit=crop&auto=format,compress`}
            alt={name}
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 font-bold text-brand-600">
            {name.charAt(0) || '★'}
          </div>
        )}
        <div>
          <div className="text-sm font-semibold text-ink">{name}</div>
          <div className="text-xs text-ink-muted">
            {clientTitle}
            {clientTitle && company ? ', ' : ''}
            {company}
          </div>
        </div>
      </figcaption>
    </figure>
  )
}