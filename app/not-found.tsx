import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 text-center">
      <span className="text-6xl">☁️</span>
      <h1 className="mt-6 text-3xl font-extrabold text-ink">Page not found</h1>
      <p className="mt-3 text-ink-muted">The page you’re looking for doesn’t exist or has moved.</p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
      >
        Back to home
      </Link>
    </div>
  )
}