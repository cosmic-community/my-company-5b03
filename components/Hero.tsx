import Link from 'next/link'

export default function Hero() {
  return (
    <section className="gradient-hero relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-brand-200 backdrop-blur">
            ⚡ 24×7×365 Managed Support
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Cloud & IT Operations,{' '}
            <span className="bg-gradient-to-r from-brand-300 to-brand-500 bg-clip-text text-transparent">
              fully managed
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Cloud Patrons Info Solutions helps fintech, logistics, and software companies optimize
            performance, strengthen security, and maintain business continuity with managed cloud,
            DevOps, cybersecurity, and NOC monitoring.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/services"
              className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-brand-500"
            >
              Explore Services
            </Link>
            <Link
              href="/case-studies"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}