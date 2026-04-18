import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 – Page Not Found | Hot Sanjana',
  robots: { index: false },
}

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="max-w-md mx-auto px-4 text-center">
        {/* Decorative */}
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-500 to-rose-400 flex items-center justify-center text-5xl mx-auto mb-8 shadow-pink animate-float">
          💋
        </div>

        <h1 className="text-8xl font-black bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent mb-4">
          404
        </h1>

        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          Page Not Found
        </h2>

        <p className="text-gray-600 mb-8 leading-relaxed">
          Sorry, the page you are looking for doesn&apos;t exist or may have moved. Let us help you find what you need.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-7 py-3 bg-gradient-to-r from-pink-500 to-rose-400 text-white font-semibold rounded-full hover:shadow-pink-lg hover:-translate-y-0.5 transition-all"
          >
            Go Home
          </Link>
          <Link
            href="/location"
            className="px-7 py-3 border-2 border-pink-500 text-pink-600 font-semibold rounded-full hover:bg-pink-50 hover:-translate-y-0.5 transition-all"
          >
            Browse Locations
          </Link>
          <a
            href="tel:+919038976363"
            rel="nofollow"
            className="px-7 py-3 bg-white border border-pink-200 text-pink-600 font-semibold rounded-full hover:border-pink-400 hover:bg-pink-50 transition-all"
          >
            📞 Call Us
          </a>
        </div>
      </div>
    </div>
  )
}
