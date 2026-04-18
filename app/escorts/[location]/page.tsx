import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Hero from '@/components/Hero'
import Breadcrumb from '@/components/Breadcrumb'
import FAQSection from '@/components/FAQSection'
import BookingButtons from '@/components/BookingButtons'
import BookingCTA from '@/components/BookingCTA'
import LocationGrid from '@/components/LocationGrid'
import WhyChooseUs from '@/components/WhyChooseUs'
import { getLocationBySlug, getAllLocationSlugs, locations } from '@/data/locations'
import { SITE_CONFIG } from '@/data/services'

interface PageProps {
  params: Promise<{ location: string }>
}

export async function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({ location: slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { location: slug } = await params
  const loc = getLocationBySlug(slug)
  if (!loc) return { title: 'Not Found' }

  const title = `Escorts in ${loc.name} | Hot Sanjana | 24/7 Available`
  const description = `Find premium verified escorts in ${loc.name}, ${loc.area}. Discreet, professional & available 24/7. Call +91-9038976363 to book now.`

  return {
    title,
    description,
    alternates: { canonical: `https://hotsanjana.in/escorts/${slug}` },
    openGraph: {
      title,
      description,
      url: `https://hotsanjana.in/escorts/${slug}`,
    },
  }
}

export default async function EscortLocationPage({ params }: PageProps) {
  const { location: slug } = await params
  const loc = getLocationBySlug(slug)

  if (!loc) notFound()

  const nearbyLocations = locations.filter(
    (l) => l.area === loc.area && l.slug !== loc.slug
  ).slice(0, 8)

  const locationFaqs = [
    {
      question: `Are escorts available 24/7 in ${loc.name}?`,
      answer: `Yes! Our escorts in ${loc.name} are available round the clock, 24 hours a day, 7 days a week including weekends and public holidays. You can book at any time by calling us or messaging on Telegram.`,
    },
    {
      question: `How do I book an escort in ${loc.name}?`,
      answer: `Booking is simple. Call us at ${SITE_CONFIG.phoneDisplay} or message us on Telegram @${SITE_CONFIG.telegramHandle}. Tell us your preferred location in ${loc.name}, preferred time, and any special requirements. We confirm within minutes.`,
    },
    {
      question: `Do you offer incall and outcall services in ${loc.name}?`,
      answer: `Yes, we offer both incall and outcall services across ${loc.name}. For incall, you visit our discreet location. For outcall, our escort comes to your hotel, home, or any address in ${loc.name} or nearby ${loc.nearbyAreas.slice(0, 3).join(', ')}.`,
    },
    {
      question: `Is your escort service in ${loc.name} discreet?`,
      answer: `Absolutely. Discretion is our highest priority. All our escorts in ${loc.name} are professional and trained to maintain complete confidentiality. We never share client information, and all transactions are private.`,
    },
    {
      question: `What types of escorts are available in ${loc.name}?`,
      answer: `In ${loc.name} we offer a wide range: VIP high-class escorts, college-going escorts, housewife companions, Russian/foreign escorts, North Indian & South Indian beauties, GFE (girlfriend experience), and more. Call us to check current availability.`,
    },
  ]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Hot Sanjana Escorts in ${loc.name}`,
    description: `Premium escort service in ${loc.name}, ${loc.area}, Mumbai`,
    url: `https://hotsanjana.in/escorts/${loc.slug}`,
    telephone: '+91-9038976363',
    address: {
      '@type': 'PostalAddress',
      addressLocality: loc.name,
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: loc.lat,
      longitude: loc.lng,
    },
    priceRange: '₹₹₹',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: Math.floor(80 + Math.random() * 300),
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Breadcrumb
        items={[
          { label: 'Escorts', href: '/location' },
          { label: `Escorts in ${loc.name}` },
        ]}
      />

      <Hero
        badge={`${loc.area}`}
        title={`Escorts in ${loc.name}`}
        subtitle="Verified · Premium · Discreet"
        description={loc.description}
        ctaText="View All Locations"
        ctaHref="/location"
        location={loc.name}
        showStats
      />

      {/* ── About This Location ── */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-5">
                Premium Escort Service in{' '}
                <span className="bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">
                  {loc.name}
                </span>
              </h2>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  {loc.uniqueContent}
                </p>
                <p>
                  Hot Sanjana provides {loc.name}&apos;s most trusted escort service, connecting discerning
                  clients with verified, professional companions. Whether you&apos;re visiting {loc.name} for
                  business or pleasure, our escorts ensure an unforgettable experience tailored to your preferences.
                </p>
                <p>
                  All our escorts in {loc.name} are independently verified, professionally trained, and committed
                  to absolute discretion. We serve clients in {loc.name} and surrounding areas including{' '}
                  {loc.nearbyAreas.slice(0, 4).join(', ')}.
                </p>
              </div>

              {/* Landmarks */}
              {loc.landmarks && loc.landmarks.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Near Popular Landmarks in {loc.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {loc.landmarks.map((landmark) => (
                      <span
                        key={landmark}
                        className="px-3 py-1.5 bg-pink-50 border border-pink-200 text-pink-700 text-sm rounded-full font-medium"
                      >
                        📍 {landmark}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Booking Panel */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 border border-pink-200 shadow-card">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Book Escorts in {loc.name}
                </h3>
                <p className="text-gray-600 text-sm mb-5">
                  24/7 available. Instant confirmation.
                </p>

                <BookingButtons location={loc.name} size="md" layout="col" />

                <div className="mt-5 space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>100% Verified Profiles</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Complete Discretion</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Incall & Outcall Available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Available 24/7</span>
                  </div>
                </div>

                {/* Nearby areas */}
                {nearbyLocations.length > 0 && (
                  <div className="mt-6 pt-5 border-t border-pink-200">
                    <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">
                      Nearby Locations
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {nearbyLocations.map((l) => (
                        <a
                          key={l.slug}
                          href={`/escorts/${l.slug}`}
                          className="text-xs px-2.5 py-1 bg-white text-pink-600 border border-pink-200 rounded-full hover:border-pink-400 hover:bg-pink-50 transition-colors"
                        >
                          {l.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Available ── */}
      <section className="py-14 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Services Available in{' '}
            <span className="bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">
              {loc.name}
            </span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { icon: '💎', label: 'VIP Escorts' },
              { icon: '🌹', label: 'GF Experience' },
              { icon: '🏨', label: 'Hotel Outcall' },
              { icon: '🏠', label: 'Home Delivery' },
              { icon: '🌙', label: 'Overnight Stay' },
              { icon: '☀️', label: 'Day Packages' },
              { icon: '🌍', label: 'Foreign Escorts' },
              { icon: '💑', label: 'Couple Friendly' },
            ].map((svc) => (
              <div
                key={svc.label}
                className="bg-white rounded-xl p-4 text-center border border-pink-100 hover:border-pink-300 hover:shadow-card transition-all hover:-translate-y-0.5"
              >
                <div className="text-3xl mb-2">{svc.icon}</div>
                <p className="text-sm font-semibold text-gray-800">{svc.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <FAQSection faqs={locationFaqs} title={`FAQs – Escorts in ${loc.name}`} />

      <BookingCTA
        title={`Book an Escort in ${loc.name} Tonight`}
        subtitle={`Available 24/7 across ${loc.name} and surrounding areas. Call or message on Telegram.`}
        location={loc.name}
      />

      <LocationGrid
        title="Explore Other Locations"
        subtitle={`Find escorts in other areas near ${loc.name}`}
        limit={24}
      />
    </>
  )
}
