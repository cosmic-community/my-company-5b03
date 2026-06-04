import { getServices } from '@/lib/cosmic'
import SectionHeader from '@/components/SectionHeader'
import ServiceCard from '@/components/ServiceCard'

export const metadata = {
  title: 'Services — Cloud Patrons Info Solutions',
  description: 'Managed Cloud, DevOps, Cybersecurity, IT Infrastructure, PCI DSS, NOC, and Helpdesk.',
}

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="What we do"
        title="Our Services"
        subtitle="Comprehensive IT services and cloud management for modern businesses."
      />
      {services.length === 0 ? (
        <p className="mt-12 text-center text-ink-muted">No services available yet.</p>
      ) : (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      )}
    </div>
  )
}