import type { TeamMember } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function TeamMemberCard({ member }: { member: TeamMember }) {
  const name = getMetafieldValue(member.metadata?.name) || member.title
  const role = getMetafieldValue(member.metadata?.job_title)
  const photo = member.metadata?.photo
  const linkedin = getMetafieldValue(member.metadata?.linkedin_url)

  return (
    <div className="group flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all hover:shadow-lg">
      {photo ? (
        <img
          src={`${photo.imgix_url}?w=320&h=320&fit=crop&auto=format,compress`}
          alt={name}
          width={160}
          height={160}
          className="h-32 w-32 rounded-full object-cover ring-4 ring-brand-50"
        />
      ) : (
        <div className="flex h-32 w-32 items-center justify-center rounded-full bg-brand-100 text-3xl font-bold text-brand-600">
          {name.charAt(0)}
        </div>
      )}
      <h3 className="mt-4 text-lg font-bold text-ink">{name}</h3>
      {role && <p className="text-sm font-medium text-brand-600">{role}</p>}
      {linkedin && (
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1 text-sm text-ink-muted hover:text-brand-600"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
          LinkedIn
        </a>
      )}
    </div>
  )
}