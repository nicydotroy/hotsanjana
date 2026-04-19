import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Breadcrumb from '@/components/Breadcrumb'
import FAQSection from '@/components/FAQSection'
import BookingButtons from '@/components/BookingButtons'
import BookingCTA from '@/components/BookingCTA'
import WhyChooseUs from '@/components/WhyChooseUs'
import type { MetroCity } from '@/data/metro-cities'
import { SITE_CONFIG } from '@/data/services'

interface Props {
  city: MetroCity
}

export function generateMetroCityMetadata(city: MetroCity): Metadata {
  const title = `Escorts in ${city.name} | Hot Sanjana | 24/7 Available`
  const description = `Find premium verified escorts in ${city.name}, ${city.state}. Discreet, professional & available 24/7. Call +91-9038976363 to book now.`
  return {
    title,
    description,
    alternates: { canonical: `https://hotsanjana.in/escorts/${city.slug}` },
    openGraph: {
      type: 'website',
      title,
      description,
      url: `https://hotsanjana.in/escorts/${city.slug}`,
      images: [
        {
          url: `/images/escorts/escorts-${city.slug}.webp`,
          width: 1200,
          height: 630,
          type: 'image/webp',
          alt: `Escorts in ${city.name} – Hot Sanjana`,
        },
      ],
    },
  }
}

export default function MetroCityEscortPage({ city }: Props) {
  const cityFaqs = [
    {
      question: `Are escorts available 24/7 in ${city.name}?`,
      answer: `Yes! Our escorts in ${city.name} are available round the clock, 24 hours a day, 7 days a week including weekends and public holidays. You can book at any time by calling us or messaging on WhatsApp.`,
    },
    {
      question: `How do I book an escort in ${city.name}?`,
      answer: `Booking is simple. Call us at ${SITE_CONFIG.phoneDisplay} or WhatsApp us at ${SITE_CONFIG.whatsappDisplay}. Tell us your location in ${city.name}, preferred time, and requirements. We confirm within minutes.`,
    },
    {
      question: `Do you offer incall and outcall services in ${city.name}?`,
      answer: `Yes, we offer both incall and outcall services across ${city.name}. For incall, you visit our discreet location. For outcall, our escort comes to your hotel or home anywhere in ${city.name}, including ${city.nearbyAreas.slice(0, 3).join(', ')}.`,
    },
    {
      question: `Is your escort service in ${city.name} discreet?`,
      answer: `Absolutely. Discretion is our highest priority. All our escorts in ${city.name} are professional and trained to maintain complete confidentiality. We never share client information. All interactions are fully private.`,
    },
    {
      question: `What types of escorts are available in ${city.name}?`,
      answer: `In ${city.name} we offer VIP escorts, college-going escorts, housewife companions, Russian/foreign escorts, North Indian & South Indian beauties, and GFE (girlfriend experience). Call to check current availability.`,
    },
    {
      question: `What are the escort rates in ${city.name}?`,
      answer: `Rates depend on escort type, duration, and incall/outcall preference. We serve all budgets with transparent, no-hidden-charge pricing. Call ${SITE_CONFIG.phoneDisplay} for current rates and offers in ${city.name}.`,
    },
    {
      question: `Do escorts in ${city.name} visit hotels?`,
      answer: `Yes. Hotel outcall is one of our most popular services in ${city.name}. Our escorts are familiar with all major hotels including ${city.hotels.slice(0, 2).join(' and ')} and arrive with complete discretion.`,
    },
    {
      question: `Is same-day booking possible in ${city.name}?`,
      answer: `Yes! Same-day and last-minute bookings are accepted in ${city.name}. Most bookings are confirmed within 30–60 minutes. For urgent requests, call us directly for the fastest response.`,
    },
    {
      question: `Are VIP escorts available in ${city.name}?`,
      answer: `Yes. We have a selection of premium VIP escorts in ${city.name} who are highly educated, elegantly presented, and experienced in high-profile social settings — ideal for corporate events and special occasions.`,
    },
    {
      question: `Are Russian escorts available in ${city.name}?`,
      answer: `Yes, we have a curated selection of Russian and international escorts available for ${city.name}. They are available for hotel outcall and premium incall arrangements. Contact us to check current profiles.`,
    },
    {
      question: `What is the minimum booking duration in ${city.name}?`,
      answer: `The minimum booking is 1 hour in ${city.name}. We also offer 2-hour, 3-hour, full-evening, and overnight packages. Longer bookings offer better value and a more enjoyable experience.`,
    },
    {
      question: `Can I book an escort overnight in ${city.name}?`,
      answer: `Yes, overnight bookings are available in ${city.name}. Our overnight companions provide a complete experience from evening through morning. Contact us to confirm availability.`,
    },
    {
      question: `Are GFE (Girlfriend Experience) escorts available in ${city.name}?`,
      answer: `Yes. Our GFE escorts in ${city.name} specialise in warm, intimate companionship including dinner dates and social outings. They are charming, conversational, and make every moment genuinely enjoyable.`,
    },
    {
      question: `Which areas of ${city.name} are covered?`,
      answer: `We cover all major areas of ${city.name} including ${city.nearbyAreas.join(', ')} and surrounding zones. Our escorts can travel to adjacent localities within a reasonable distance.`,
    },
    {
      question: `How do I verify that escort profiles in ${city.name} are genuine?`,
      answer: `All our escort profiles in ${city.name} are personally verified by our team. We guarantee photo authenticity. If you have any concern after meeting, contact us immediately — client satisfaction is non-negotiable.`,
    },
    {
      question: `How quickly will the escort arrive in ${city.name}?`,
      answer: `Once confirmed, our escort in ${city.name} typically arrives within 60–120 minutes depending on your exact location and local traffic. We always give an estimated arrival time at confirmation.`,
    },
  ]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Hot Sanjana Escorts in ${city.name}`,
    description: `Premium escort service in ${city.name}, ${city.state}`,
    url: `https://hotsanjana.in/escorts/${city.slug}`,
    telephone: '+91-9038976363',
    address: {
      '@type': 'PostalAddress',
      addressLocality: city.name,
      addressRegion: city.state,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: city.lat,
      longitude: city.lng,
    },
    priceRange: '₹₹₹',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '147',
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
          { label: 'All Cities', href: '/location' },
          { label: `Escorts in ${city.name}` },
        ]}
      />

      <Hero
        badge={city.state}
        title={`Escorts in ${city.name}`}
        subtitle={city.heroSubtitle}
        description={city.description}
        ctaText="Book Now"
        ctaHref="/contact"
        location={city.name}
        showStats
      />

      {/* ── About This City ── */}
      <section className="py-16" style={{ background: '#0a0a0a' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-5">
                Premium Escort Service in{' '}
                <span className="gradient-text">{city.name}</span>
              </h2>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed text-lg">
                  {city.uniqueContent}
                </p>
                <p className="text-gray-300 leading-relaxed">
                  {city.escortHighlight}
                </p>
                <p className="text-gray-300 leading-relaxed">
                  All our escorts in {city.name} are independently verified, professionally trained, and committed
                  to absolute discretion. We serve clients across {city.name} including{' '}
                  {city.nearbyAreas.slice(0, 4).join(', ')} and surrounding areas.
                </p>
              </div>

              {/* Landmarks */}
              {city.landmarks.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Near Popular Landmarks in {city.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {city.landmarks.map((landmark) => (
                      <span
                        key={landmark}
                        className="px-3 py-1.5 border border-red-900/30 text-gray-300 text-sm rounded-full font-medium"
                        style={{ background: 'rgba(139, 0, 0, 0.15)' }}
                      >
                        📍 {landmark}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Hotels */}
              {city.hotels.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Hotel Outcall Available At
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {city.hotels.map((hotel) => (
                      <span
                        key={hotel}
                        className="px-3 py-1.5 border border-red-900/30 text-gray-300 text-sm rounded-full font-medium"
                        style={{ background: 'rgba(139, 0, 0, 0.1)' }}
                      >
                        🏨 {hotel}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Booking Panel */}
            <div className="lg:col-span-1">
              <div
                className="sticky top-24 lg:top-40 rounded-2xl p-6 border border-red-900/30"
                style={{ background: 'linear-gradient(135deg, #0f0300, #1a0800)' }}
              >
                <h3 className="text-xl font-bold text-white mb-2">
                  Book Escorts in {city.name}
                </h3>
                <p className="text-gray-400 text-sm mb-5">
                  24/7 available · Instant confirmation
                </p>

                <BookingButtons location={city.name} size="md" layout="col" />

                <div className="mt-5 space-y-2 text-sm text-gray-400">
                  {[
                    '100% Verified Profiles',
                    'Complete Discretion',
                    'Incall & Outcall Available',
                    'Available 24/7',
                    'All Major Hotels Covered',
                  ].map((point) => (
                    <div key={point} className="flex items-center gap-2">
                      <span className="text-red-400">✓</span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Nearby areas */}
                {city.nearbyAreas.length > 0 && (
                  <div className="mt-6 pt-5 border-t border-red-900/30">
                    <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">
                      Areas Covered
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {city.nearbyAreas.map((area) => (
                        <span
                          key={area}
                          className="text-xs px-2.5 py-1 border border-red-900/30 text-gray-400 rounded-full"
                          style={{ background: 'rgba(139, 0, 0, 0.1)' }}
                        >
                          {area}
                        </span>
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
      <section className="py-14" style={{ background: '#0d0000' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Services Available in{' '}
            <span className="gradient-text">{city.name}</span>
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
                className="rounded-xl p-4 text-center border border-red-900/30 hover:border-red-700/50 hover:shadow-card transition-all hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #140500, #1f0a00)' }}
              >
                <div className="text-3xl mb-2">{svc.icon}</div>
                <p className="text-sm font-semibold text-gray-300">{svc.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <WhyChooseUs />

      {/* ── City Info Stats ── */}
      <section className="py-12" style={{ background: '#0a0a0a' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { label: 'City Population', value: city.population },
              { label: 'Areas Covered', value: `${city.nearbyAreas.length}+` },
              { label: 'Hotels Served', value: `${city.hotels.length}+` },
              { label: 'Availability', value: '24/7' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl p-5 border border-red-900/30"
                style={{ background: 'linear-gradient(135deg, #0f0300, #1a0800)' }}
              >
                <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQSection faqs={cityFaqs} title={`FAQs – Escorts in ${city.name}`} />

      {/* ── CTA ── */}
      <BookingCTA
        title={`Book Escorts in ${city.name} Tonight`}
        subtitle={`Available 24/7 in ${city.name}, ${city.state} – Call or WhatsApp for instant confirmation`}
        location={city.name}
      />
    </>
  )
}
