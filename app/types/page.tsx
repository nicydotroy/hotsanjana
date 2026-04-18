import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
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

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-5">
            {escortTypes.map((type) => (
              <Link
                key={type.slug}
                href={`/escort-types/${type.slug}`}
                className="group relative rounded-2xl overflow-hidden border border-red-900/40 hover:border-red-500/70 transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_8px_40px_rgba(220,0,0,0.35)]"
                style={{ background: '#0f0000' }}
              >
                {/* Portrait Image */}
                <div className="relative w-full h-72 sm:h-80 overflow-hidden">
                  {type.image ? (
                    <Image
                      src={type.image}
                      alt={type.imageAlt}
                      fill
                      className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-5xl" style={{ background: 'linear-gradient(135deg, #1f0800, #2a0a00)' }}>
                      {type.icon}
                    </div>
                  )}

                  {/* Dark gradient overlay – stronger at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                  {/* Gold badge */}
                  {type.badge && (
                    <div
                      className="absolute top-2 left-2 text-black text-[10px] font-black px-2 py-0.5 rounded-full tracking-wide uppercase"
                      style={{ background: 'linear-gradient(135deg, #cc9900, #ffd700)' }}
                    >
                      {type.badge}
                    </div>
                  )}

                  {/* Fire border glow on hover */}
                  <div className="absolute inset-0 ring-0 group-hover:ring-2 ring-red-500/50 rounded-2xl transition-all duration-300" />

                  {/* Text overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-sm sm:text-base leading-tight mb-0.5 group-hover:text-red-400 transition-colors duration-300">
                      {type.name}
                    </h3>
                    <p className="text-orange-400 text-[11px] sm:text-xs leading-snug line-clamp-1 opacity-90">
                      {type.tagline}
                    </p>

                    {/* CTA – slides up on hover */}
                    <div className="mt-2 overflow-hidden max-h-0 group-hover:max-h-10 transition-all duration-300">
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-white bg-red-700 hover:bg-red-600 px-3 py-1 rounded-full">
                        View →
                      </span>
                    </div>
                  </div>
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
