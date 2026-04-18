import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 – Page Not Found | Hot Sanjana',
  robots: { index: false },
}

export default function NotFound() {
  return (
    <div
      className="min-h-[70vh] flex items-center justify-center"
      style={{ background: 'linear-gradient(160deg, #000000 0%, #0f0000 50%, #0a0000 100%)' }}
    >
      <div className="max-w-md mx-auto px-4 text-center">
        {/* Decorative */}
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center text-5xl mx-auto mb-8 animate-float"
          style={{
            background: 'linear-gradient(135deg, #8b0000, #dc0000, #ff4500)',
            boxShadow: '0 0 40px rgba(220, 0, 0, 0.5)',
          }}
        >
          🔥
        </div>

        <h1
          className="text-8xl font-black mb-4 gradient-text"
        >
          404
        </h1>

        <h2 className="text-2xl font-bold text-white mb-3">
          Page Not Found
        </h2>

        <p className="text-gray-400 mb-8 leading-relaxed">
          Sorry, the page you are looking for doesn&apos;t exist or may have moved. Let us help you find what you need.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary">
            Go Home
          </Link>
          <Link href="/location" className="btn-outline">
            Browse Locations
          </Link>
          <a
            href="tel:+919038976363"
            rel="nofollow"
            className="btn-gold"
          >
            📞 Call Us
          </a>
        </div>
      </div>
    </div>
  )
}

