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
      <section className="py-16 lg:py-20 bg-gradient-to-br from-white to-pink-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our{' '}
              <span className="bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">
                Escort Categories
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
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
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our{' '}
              <span className="bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>
            <p className="text-gray-600 text-lg">
              Join thousands of satisfied clients who trust Hot Sanjana
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 border border-pink-100 hover:border-pink-200 hover:shadow-card transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <span key={s} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-5 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-rose-400 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.location} · {t.date}</p>
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
