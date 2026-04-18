import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Hero from '@/components/Hero'
import BookingCTA from '@/components/BookingCTA'
import { SITE_CONFIG } from '@/data/services'
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
              <div
                key={type.slug}
                className="group rounded-2xl overflow-hidden border border-red-900/40 hover:border-red-500/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(220,0,0,0.3)]"
                style={{ background: '#0d0000' }}
              >
                <Link href={`/escort-types/${type.slug}`} className="block">
                  <div className="relative w-full h-64 sm:h-72 overflow-hidden">
                    {type.image ? (
                      <Image
                        src={type.image}
                        alt={type.imageAlt}
                        fill
                        className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-5xl" style={{ background: '#1f0800' }}>
                        {type.icon}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    {type.badge && (
                      <div
                        className="absolute top-2 left-2 text-black text-[10px] font-black px-2.5 py-0.5 rounded-full"
                        style={{ background: 'linear-gradient(135deg, #cc9900, #ffd700)' }}
                      >
                        {type.badge}
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 to-transparent">
                      <h3 className="text-white font-bold text-sm leading-tight group-hover:text-red-400 transition-colors">
                        {type.name}
                      </h3>
                      <p className="text-orange-400 text-[11px] mt-0.5 line-clamp-1">{type.tagline}</p>
                    </div>
                  </div>
                </Link>
                <div className="px-3 pb-4 pt-3 grid grid-cols-2 gap-2">
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="flex items-center justify-center gap-1 text-[11px] sm:text-xs font-bold py-2.5 rounded-full text-white hover:-translate-y-0.5 transition-transform"
                    style={{ background: 'linear-gradient(135deg, #8b0000, #dc0000)' }}
                    rel="nofollow"
                    aria-label={`Call to book ${type.name}`}
                  >
                    📞 Call Now
                  </a>
                  <a
                    href={SITE_CONFIG.telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="flex items-center justify-center gap-1 text-[11px] sm:text-xs font-bold py-2.5 rounded-full text-black hover:-translate-y-0.5 transition-transform"
                    style={{ background: 'linear-gradient(135deg, #cc9900, #ffd700)' }}
                    aria-label={`Telegram to book ${type.name}`}
                  >
                    💬 Telegram
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA title="Ready to Book?" subtitle="Our team is available 24/7 to help you find the perfect companion" />
    </>
  )
}
