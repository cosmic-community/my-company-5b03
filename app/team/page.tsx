import { getTeamMembers, getMetafieldValue } from '@/lib/cosmic'
import SectionHeader from '@/components/SectionHeader'
import TeamMemberCard from '@/components/TeamMemberCard'

export const metadata = {
  title: 'Team — Cloud Patrons Info Solutions',
  description: 'Meet the experts behind Cloud Patrons Info Solutions.',
}

export default async function TeamPage() {
  const team = await getTeamMembers()

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="The experts"
        title="Meet the Team"
        subtitle="Experienced engineers and consultants dedicated to your success."
      />
      {team.length === 0 ? (
        <p className="mt-12 text-center text-ink-muted">No team members available yet.</p>
      ) : (
        <div className="mt-12 space-y-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>

          <div className="space-y-8">
            {team.map((member) => {
              const bio = getMetafieldValue(member.metadata?.bio)
              const expertise = member.metadata?.areas_of_expertise || []
              if (!bio && expertise.length === 0) return null
              const name = getMetafieldValue(member.metadata?.name) || member.title
              return (
                <div key={member.id} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <h3 className="text-lg font-bold text-ink">{name}</h3>
                  {bio && <p className="mt-2 text-sm text-ink-soft">{bio}</p>}
                  {expertise.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {expertise.map((area, i) => (
                        <span
                          key={i}
                          className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700"
                        >
                          {getMetafieldValue(area)}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}