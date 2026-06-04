import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl">☁️</span>
              <span className="text-lg font-extrabold text-ink">Cloud Patrons Info Solutions</span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-ink-muted">
              Managed Cloud Services, DevOps, Cybersecurity, and 24×7×365 support to help
              organizations optimize performance and maintain business continuity.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink">Explore</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/services" className="text-ink-muted hover:text-brand-600">Services</Link></li>
              <li><Link href="/case-studies" className="text-ink-muted hover:text-brand-600">Case Studies</Link></li>
              <li><Link href="/team" className="text-ink-muted hover:text-brand-600">Team</Link></li>
              <li><Link href="/testimonials" className="text-ink-muted hover:text-brand-600">Testimonials</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink">Industries</h3>
            <ul className="mt-3 space-y-2 text-sm text-ink-muted">
              <li>Fintech</li>
              <li>Logistics</li>
              <li>Software</li>
              <li>And more</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-ink-muted">
          © {year} Cloud Patrons Info Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  )
}