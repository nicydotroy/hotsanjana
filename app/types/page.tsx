import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import BookingCTA from '@/components/BookingCTA'
import { escortTypes } from '@/data/escort-types'

export const metadata: Metadata = {
  title: 'Escort Types in Mumbai | VIP, Russian, Bengali & More | Hot Sanjana',
  description:
    'Browse all escort categories in Mumbai: VIP escorts, Russian escorts, Bengali escorts, GFE, housewife companions, and more. All verified and available 24/7.',
  alternates: { canonical: 'https://hotsanjana.in/types' },
}

export default function TypesPage() {
  return (
    <>
      <Hero
        badge="All Categories"
        title="Escort Categories in Mumbai"
        subtitle="Find Your Perfect Companion"
        description="Choose from our wide selection of carefully curated escort categories. All profiles are verified, professional, and committed to your satisfaction."
        ctaText="Book Now"
        ctaHref="/"
        showStats={false}
      />

      <section className="py-16 lg:py-20" style={{ background: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              All{' '}
              <span className="gradient-text">Escort Categories</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We offer {escortTypes.length} distinct escort categories to suit every taste and preference
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {escortTypes.map((type) => (
              <Link
                key={type.slug}
                href={`/escort-types/${type.slug}`}
                className="group relative rounded-2xl overflow-hidden border border-red-900/30 hover:border-red-700/50 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 p-6"
                style={{ background: 'linear-gradient(135deg, #140500, #1f0a00)' }}
              >
                {type.badge && (
                  <div
                    className="absolute top-4 right-4 text-black text-xs font-bold px-3 py-1 rounded-full"
                    style={{ background: 'linear-gradient(135deg, #cc9900, #ffd700)' }}
                  >
                    {type.badge}
                  </div>
                )}

                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {type.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                  {type.name}
                </h3>
                <p className="text-orange-400 text-sm font-medium mb-3">{type.tagline}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{type.description}</p>

                <div className="mt-4 flex items-center gap-1 text-red-400 text-sm font-semibold group-hover:gap-2 transition-all">
                  <span>View profiles</span>
                  <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA title="Ready to Book?" subtitle="Our team is available 24/7 to help you find the perfect companion" />
    </>
  )
}
