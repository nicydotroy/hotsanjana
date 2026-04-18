import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import WhyChooseUs from '@/components/WhyChooseUs'
import LocationGrid from '@/components/LocationGrid'
import FAQSection from '@/components/FAQSection'
import BookingCTA from '@/components/BookingCTA'
import ServiceCard from '@/components/ServiceCard'
import { faqs } from '@/data/services'
import { escortTypes } from '@/data/escort-types'
import { testimonials } from '@/data/services'

export const metadata: Metadata = {
  title: 'Premium Escorts in Mumbai | Hot Sanjana | 24/7 Available',
  description:
    'Hot Sanjana – Mumbai\'s top escort service with 500+ verified escorts. Available 24/7 in Andheri, Bandra, Juhu, Thane, Navi Mumbai & all areas. Call +91-9038976363',
  alternates: { canonical: 'https://hotsanjana.in' },
  openGraph: {
    title: 'Hot Sanjana | Premium Escorts in Mumbai | 24/7 Available',
    description:
      'Mumbai\'s top escort service with 500+ verified escorts available 24/7 across all locations.',
    url: 'https://hotsanjana.in',
    images: [{ url: '/og-home.jpg', width: 1200, height: 630 }],
  },
}

const homeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Hot Sanjana',
  description:
    'Premium escort service in Mumbai with 500+ verified escorts available 24/7 across all Mumbai locations, Navi Mumbai, and Thane.',
  url: 'https://hotsanjana.in',
  telephone: '+91-9038976363',
  email: 'sanjanadotsingh@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Mumbai',
    addressRegion: 'Maharashtra',
    postalCode: '400001',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 19.076,
    longitude: 72.8777,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
    ],
    opens: '00:00',
    closes: '23:59',
  },
  priceRange: '₹₹₹',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '2847',
  },
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />

      {/* ── Hero ── */}
      <Hero
        badge="Mumbai's #1 Escort Service"
        title="Premium Escorts in Mumbai"
        subtitle="24/7 Available · Verified · Discreet"
        description="Experience the finest escort service in Mumbai with 500+ verified profiles across Andheri, Bandra, Juhu, Thane, Navi Mumbai and 90+ more locations. Professional, discreet, and available whenever you need."
        ctaText="View Locations"
        ctaHref="/location"
        showStats
      />

      {/* ── Escort Types / Services Grid ── */}
      <section className="py-16 lg:py-20 section-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-bold tracking-[0.3em] text-red-500 uppercase mb-3">Premium Selection</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #dc0000, #ff6600, #ffd700)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Escort Categories
              </span>
            </h2>
            <div className="fire-divider max-w-xs mx-auto mb-4 opacity-50" />
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Choose from our wide selection of premium escort categories, all thoroughly verified and professionally available
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">
            {escortTypes.map((type) => (
              <ServiceCard
                key={type.slug}
                name={type.name}
                href={`/escort-types/${type.slug}`}
                badge={type.badge}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <WhyChooseUs />

      {/* ── Location Grid ── */}
      <LocationGrid
        title="Find Escorts Near You"
        subtitle="Browse our verified escorts across 90+ locations in Mumbai and surrounding areas"
        limit={36}
      />

      {/* ── Testimonials ── */}
      <section className="py-16 lg:py-20 section-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-bold tracking-[0.3em] text-red-500 uppercase mb-3">Client Reviews</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              What Our{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #dc0000, #ff6600, #ffd700)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Clients Say
              </span>
            </h2>
            <div className="fire-divider max-w-xs mx-auto mb-4 opacity-50" />
            <p className="text-gray-500 text-lg">
              Join thousands of satisfied clients who trust Hot Sanjana
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 border hover:border-red-700/50 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'linear-gradient(135deg, #120500, #1a0800)',
                  borderColor: 'rgba(139, 0, 0, 0.3)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <span key={s} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-400 leading-relaxed mb-5 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    style={{ background: 'linear-gradient(135deg, #8b0000, #dc0000)' }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{t.name}</p>
                    <p className="text-xs text-gray-600">{t.location} · {t.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQSection
        faqs={faqs}
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about our escort services in Mumbai"
      />

      {/* ── Booking CTA ── */}
      <BookingCTA />
    </>
  )
}
