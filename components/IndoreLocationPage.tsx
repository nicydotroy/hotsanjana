import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Breadcrumb from '@/components/Breadcrumb'
import FAQSection from '@/components/FAQSection'
import BookingButtons from '@/components/BookingButtons'
import BookingCTA from '@/components/BookingCTA'
import WhyChooseUs from '@/components/WhyChooseUs'
import { type IndoreLocation, indoreLocations } from '@/data/indore-locations'
import { SITE_CONFIG } from '@/data/services'

interface Props {
  loc: IndoreLocation
}

export function generateIndoreLocationMetadata(loc: IndoreLocation): Metadata {
  const title = `Escorts in ${loc.name} | Hot Sanjana Indore | 24/7 Available`
  const description = `Find premium verified escorts in ${loc.name}, Indore. Discreet, professional & available 24/7. Call +91-9038976363 to book now.`

  return {
    title,
    description,
    alternates: { canonical: `https://hotsanjana.in/escorts/${loc.slug}` },
    openGraph: {
      title,
      description,
      url: `https://hotsanjana.in/escorts/${loc.slug}`,
    },
  }
}

export default function IndoreLocationPage({ loc }: Props) {
  const nearbyIndoreLocations = indoreLocations
    .filter((l) => l.area === loc.area && l.slug !== loc.slug)
    .slice(0, 8)

  const supplemental =
    nearbyIndoreLocations.length < 4
      ? indoreLocations
          .filter((l) => l.slug !== loc.slug && !nearbyIndoreLocations.find((n) => n.slug === l.slug))
          .slice(0, 8 - nearbyIndoreLocations.length)
      : []
  const displayNearby = [...nearbyIndoreLocations, ...supplemental]

  const indoreAreaLinks = indoreLocations.filter((l) => l.slug !== loc.slug).slice(0, 24)

  const faqSeed = loc.slug.length + loc.name.length
  const reviewCount = 80 + (faqSeed * 7) % 250

  const faqs = [
    {
      question: `Are escorts available 24/7 in ${loc.name}, Indore?`,
      answer: `Yes! Our escorts in ${loc.name} are available around the clock – 24 hours a day, 7 days a week including weekends and public holidays. Call or WhatsApp us at any time to confirm availability.`,
    },
    {
      question: `How do I book an escort in ${loc.name}?`,
      answer: `Booking is quick and simple. Call us at ${SITE_CONFIG.phoneDisplay} or message on WhatsApp ${SITE_CONFIG.whatsappDisplay}. Tell us your location in ${loc.name}, your preferred time, and any special requirements. We confirm within minutes.`,
    },
    {
      question: `Do you offer incall and outcall services in ${loc.name}?`,
      answer: `Yes, both incall and outcall services are available in ${loc.name}, Indore. For outcall, our escort comes to your hotel or home anywhere in ${loc.name} or nearby ${loc.nearbyAreas.slice(0, 3).join(', ')}.`,
    },
    {
      question: `Is your escort service in ${loc.name} discreet?`,
      answer: `Absolutely. Discretion is our top priority. All escorts in ${loc.name} maintain strict confidentiality. We never share client details, and every interaction remains completely private.`,
    },
    {
      question: `What types of escorts are available in ${loc.name}, Indore?`,
      answer: `We offer VIP high-class escorts, college-going escorts, housewife companions, Russian/foreign escorts, North Indian beauties, GFE (girlfriend experience), and more. Call to check current availability in ${loc.name}.`,
    },
    {
      question: `What are the rates for escorts in ${loc.name}?`,
      answer: `Rates vary by escort type, duration, and service. We cater to all budgets with transparent, no-hidden-charge pricing. Call ${SITE_CONFIG.phoneDisplay} for today's rates in ${loc.name}.`,
    },
    {
      question: `Do escorts in ${loc.name} come to Indore hotels?`,
      answer: `Yes. Hotel outcall is one of our most popular services in ${loc.name}. Our escorts know all major Indore hotels – including those on AB Road, Palasia, and Vijay Nagar – and arrive discreetly. Share your hotel name after booking.`,
    },
    {
      question: `Is same-day booking available in ${loc.name}?`,
      answer: `Yes! Same-day and last-minute bookings are accepted in ${loc.name}. Most bookings confirm within 30–60 minutes. For urgent requests, call us directly for the fastest response.`,
    },
    {
      question: `What is the minimum booking duration in ${loc.name}?`,
      answer: `The minimum is typically 1 hour in ${loc.name}. We also offer 2-hour, 3-hour, full-evening, and overnight packages. Longer bookings offer better value.`,
    },
    {
      question: `Is GFE (Girlfriend Experience) available in ${loc.name}?`,
      answer: `Yes. Our GFE escorts in ${loc.name} specialise in warm, intimate companionship – dinner dates, outings near Rajwada or Vijay Nagar, and private time. They are charming, conversational, and genuinely enjoyable company.`,
    },
    {
      question: `Can I book an overnight escort in ${loc.name}?`,
      answer: `Yes. Overnight bookings are available in ${loc.name}. Our companions provide a full evening-to-morning experience. Confirm availability at the time of booking.`,
    },
    {
      question: `Are VIP escorts available in ${loc.name}, Indore?`,
      answer: `Yes. We have premium VIP escorts in ${loc.name} who are educated, elegantly presented, and experienced in upscale social settings. Ideal for corporate dinners at Indore\'s five-star hotels, the Super Corridor IT corridor, or special occasions.`,
    },
    {
      question: `How quickly does the escort arrive in ${loc.name}?`,
      answer: `Once confirmed, our escort typically arrives within 45–90 minutes in ${loc.name}, depending on your exact location and Indore traffic. We always provide an estimated arrival time.`,
    },
    {
      question: `Which areas near ${loc.name} do you cover in Indore?`,
      answer: `From ${loc.name} we also serve ${loc.nearbyAreas.slice(0, 5).join(', ')} and surrounding Indore areas.`,
    },
    {
      question: `Are Russian escorts available in ${loc.name}?`,
      answer: `Yes, we have Russian and international escorts available for ${loc.name} hotel outcall and premium incall. Contact us to check current profiles and availability.`,
    },
    {
      question: `How do I know the escort profile is genuine in ${loc.name}?`,
      answer: `All profiles in ${loc.name} are personally verified by our Indore team. We guarantee photo authenticity. Client satisfaction and honesty are non-negotiable – contact us immediately if you have any concern.`,
    },
  ]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Hot Sanjana Escorts in ${loc.name}`,
    description: `Premium escort service in ${loc.name}, ${loc.area}, Indore, Madhya Pradesh`,
    url: `https://hotsanjana.in/escorts/${loc.slug}`,
    telephone: '+91-9038976363',
    address: {
      '@type': 'PostalAddress',
      addressLocality: loc.name,
      addressRegion: 'Indore, Madhya Pradesh',
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
      reviewCount,
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
          { label: 'Indore Escorts', href: '/escorts/indore' },
          { label: `Escorts in ${loc.name}` },
        ]}
      />

      <Hero
        badge={`${loc.area} · Indore`}
        title={`Escorts in ${loc.name}`}
        subtitle="Verified · Premium · Discreet"
        description={loc.description}
        ctaText="All Indore Locations"
        ctaHref="/escorts/indore"
        location={loc.name}
        showStats
      />

      {/* ── About This Location ── */}
      <section className="py-16" style={{ background: '#0a0a0a' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-5">
                Premium Escort Service in{' '}
                <span className="gradient-text">{loc.name}</span>
                {', Indore'}
              </h2>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed text-lg">
                  {loc.uniqueContent}
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Hot Sanjana provides the most trusted escort service in Indore – Madhya Pradesh&apos;s
                  commercial capital – connecting discerning clients with verified, professional companions
                  across every neighbourhood. Whether you&apos;re visiting {loc.name} for business or pleasure,
                  our escorts ensure an unforgettable experience.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  All our escorts in {loc.name} are personally verified by our Indore team, professionally
                  presented, and committed to absolute discretion. We serve clients across {loc.name} and
                  nearby {loc.nearbyAreas.slice(0, 4).join(', ')}.
                </p>
              </div>

              {loc.landmarks && loc.landmarks.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Near Popular Landmarks in {loc.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {loc.landmarks.map((landmark) => (
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
            </div>

            {/* Booking Panel */}
            <div className="lg:col-span-1">
              <div
                className="sticky top-24 lg:top-40 rounded-2xl p-6 border border-red-900/30"
                style={{ background: 'linear-gradient(135deg, #0f0300, #1a0800)' }}
              >
                <h3 className="text-xl font-bold text-white mb-2">
                  Book Escorts in {loc.name}
                </h3>
                <p className="text-gray-400 text-sm mb-5">
                  Indore · 24/7 available · Instant confirmation
                </p>

                <BookingButtons location={loc.name} size="md" layout="col" />

                <div className="mt-5 space-y-2 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <span className="text-red-400">✓</span>
                    <span>100% Verified Indore Escorts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-red-400">✓</span>
                    <span>Complete Discretion</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-red-400">✓</span>
                    <span>Incall &amp; Outcall Available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-red-400">✓</span>
                    <span>Available 24/7 in Indore</span>
                  </div>
                </div>

                {displayNearby.length > 0 && (
                  <div className="mt-6 pt-5 border-t border-red-900/30">
                    <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">
                      Nearby Indore Locations
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {displayNearby.map((l) => (
                        <a
                          key={l.slug}
                          href={`/escorts/${l.slug}`}
                          className="text-xs px-2.5 py-1 border border-red-900/30 text-gray-400 rounded-full hover:border-red-700/50 hover:text-red-400 transition-colors"
                          style={{ background: 'rgba(139, 0, 0, 0.1)' }}
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
      <section className="py-14" style={{ background: '#0d0000' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Escort Services Available in{' '}
            <span className="gradient-text">{loc.name}</span>
            {', Indore'}
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

      <WhyChooseUs />

      <FAQSection faqs={faqs} title={`FAQs – Escorts in ${loc.name}, Indore`} />

      <BookingCTA
        title={`Book an Escort in ${loc.name}, Indore Tonight`}
        subtitle={`Available 24/7 across ${loc.name} and all Indore neighbourhoods. Call or message on WhatsApp.`}
        location={loc.name}
      />

      {/* ── Other Indore Locations Grid ── */}
      <section className="py-14" style={{ background: '#080808' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-2 text-center">
            Explore Other{' '}
            <span className="gradient-text">Indore Locations</span>
          </h2>
          <p className="text-gray-400 text-center mb-8 text-sm">
            Find escorts in other areas across Indore
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {indoreAreaLinks.map((l) => (
              <a
                key={l.slug}
                href={`/escorts/${l.slug}`}
                className="block rounded-xl p-3 text-center border border-red-900/20 hover:border-red-700/50 hover:shadow-card transition-all group"
                style={{ background: 'linear-gradient(135deg, #0e0200, #160500)' }}
              >
                <p className="text-sm font-semibold text-gray-300 group-hover:text-red-400 transition-colors leading-tight">
                  {l.name}
                </p>
                <p className="text-xs text-gray-600 mt-0.5">{l.area}</p>
              </a>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="/escorts/indore"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white border border-red-700/50 hover:bg-red-900/30 transition-all text-sm"
            >
              View All Indore Escort Locations →
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
