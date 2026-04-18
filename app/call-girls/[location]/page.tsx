import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Hero from '@/components/Hero'
import Breadcrumb from '@/components/Breadcrumb'
import FAQSection from '@/components/FAQSection'
import BookingButtons from '@/components/BookingButtons'
import BookingCTA from '@/components/BookingCTA'
import LocationGrid from '@/components/LocationGrid'
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

  const title = `Call Girls in ${loc.name} | Hot Sanjana | 24/7 Service`
  const description = `Verified call girls in ${loc.name}, ${loc.area}. Discreet, professional & available 24/7. Book now – Call +91-9038976363 or message on WhatsApp.`

  return {
    title,
    description,
    alternates: { canonical: `https://hotsanjana.in/call-girls/${slug}` },
    openGraph: {
      title,
      description,
      url: `https://hotsanjana.in/call-girls/${slug}`,
    },
  }
}

export default async function CallGirlsLocationPage({ params }: PageProps) {
  const { location: slug } = await params
  const loc = getLocationBySlug(slug)

  if (!loc) notFound()

  const nearbyLocations = locations
    .filter((l) => l.area === loc.area && l.slug !== loc.slug)
    .slice(0, 8)

  const locationFaqs = [
    {
      question: `How do I contact call girls in ${loc.name}?`,
      answer: `You can reach us 24/7 by calling ${SITE_CONFIG.phoneDisplay} or messaging us on WhatsApp @${SITE_CONFIG.whatsappDisplay}. Simply mention "${loc.name}" and your preferred time. We confirm bookings within minutes.`,
    },
    {
      question: `Are call girls in ${loc.name} available late at night?`,
      answer: `Yes! Our call girls in ${loc.name} are available round the clock including late nights and early mornings. Whether you need company at 2 AM or early morning, we have professionals available for you.`,
    },
    {
      question: `What is the rate for call girls in ${loc.name}?`,
      answer: `Rates vary depending on the type of service (incall/outcall), duration, and profile selected. Contact us at ${SITE_CONFIG.phoneDisplay} for current rates in ${loc.name}. We offer competitive pricing with no hidden charges.`,
    },
    {
      question: `Do call girls come to hotels in ${loc.name}?`,
      answer: `Absolutely! We provide hotel outcall service across all major hotels in ${loc.name} and ${loc.nearbyAreas.slice(0, 3).join(', ')}. Our companions are discreet and professional. Just share your hotel name and room number.`,
    },
    {
      question: `Is booking call girls in ${loc.name} safe?`,
      answer: `Yes, 100% safe. All our call girls in ${loc.name} are verified, and we maintain strict confidentiality. Your personal information is never shared. We've been operating safely for years with thousands of satisfied clients in Mumbai.`,
    },
  ]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Hot Sanjana Call Girls in ${loc.name}`,
    description: `Verified call girl service in ${loc.name}, ${loc.area}`,
    url: `https://hotsanjana.in/call-girls/${loc.slug}`,
    telephone: '+91-9038976363',
    address: {
      '@type': 'PostalAddress',
      addressLocality: loc.name,
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
    priceRange: '₹₹₹',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Breadcrumb
        items={[
          { label: 'Call Girls', href: '/location' },
          { label: `Call Girls in ${loc.name}` },
        ]}
      />

      <Hero
        badge={loc.area}
        title={`Call Girls in ${loc.name}`}
        subtitle="Professional · Discreet · Available 24/7"
        description={`Find verified, professional call girls in ${loc.name}. ${loc.description} Instant booking available – call or message on WhatsApp anytime.`}
        ctaText="Browse All Locations"
        ctaHref="/location"
        location={loc.name}
        showStats
      />

      {/* ── Main Content ── */}
      <section className="py-16" style={{ background: '#0a0a0a' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl lg:text-3xl font-bold text-white">
                Call Girls Available in{' '}
                <span className="gradient-text">{loc.name}</span>
              </h2>

              <p className="text-gray-300 leading-relaxed text-lg">
                {loc.uniqueContent}
              </p>

              <p className="text-gray-300 leading-relaxed">
                Hot Sanjana is {loc.name}&apos;s most reliable call girl service, known for verified profiles,
                professional behavior, and complete discretion. Our call girls in {loc.name} are available
                for both short-duration and long-duration bookings, including overnight stays.
              </p>

              <p className="text-gray-300 leading-relaxed">
                We service all areas within {loc.name} as well as neighboring areas like{' '}
                {loc.nearbyAreas.slice(0, 5).join(', ')}. Our dedicated team is on call 24/7 to ensure
                you get the best companionship experience possible.
              </p>

              {/* Service highlights */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                {[
                  { icon: '✅', text: 'Verified Profiles Only' },
                  { icon: '🔒', text: 'Complete Discretion' },
                  { icon: '⚡', text: 'Quick Response Time' },
                  { icon: '🌙', text: 'Available All Night' },
                  { icon: '🏨', text: 'Hotel Delivery' },
                  { icon: '💳', text: 'Easy Payment Options' },
                ].map((item) => (
                  <div
                    key={item.text}
                    className="flex items-center gap-3 p-3 rounded-xl border border-red-900/30"
                    style={{ background: 'rgba(139, 0, 0, 0.1)' }}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-sm font-medium text-gray-300">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Landmarks */}
              {loc.landmarks && loc.landmarks.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    We serve near these landmarks in {loc.name}:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {loc.landmarks.map((lm) => (
                      <span
                        key={lm}
                        className="px-3 py-1.5 border border-red-900/30 text-gray-300 text-sm rounded-full"
                        style={{ background: 'rgba(139, 0, 0, 0.15)' }}
                      >
                        📍 {lm}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Booking Sidebar */}
            <div className="lg:col-span-1">
              <div
                className="sticky top-24 lg:top-40 rounded-2xl p-6 border border-red-900/30"
                style={{ background: 'linear-gradient(135deg, #0f0300, #1a0800)' }}
              >
                <h3 className="text-xl font-bold text-white mb-2">
                  Book a Call Girl in {loc.name}
                </h3>
                <p className="text-gray-400 text-sm mb-5">
                  24/7 service. Instant confirmation.
                </p>

                <BookingButtons location={loc.name} size="md" layout="col" />

                <div className="mt-5 space-y-2 text-sm text-gray-400">
                  {['Verified Call Girls', 'Incall & Outcall', '100% Confidential', 'No Hidden Charges'].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="text-red-400 font-bold">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {nearbyLocations.length > 0 && (
                  <div className="mt-5 pt-5 border-t border-red-900/30">
                    <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">
                      Nearby Areas
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {nearbyLocations.map((l) => (
                        <a
                          key={l.slug}
                          href={`/call-girls/${l.slug}`}
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

      <FAQSection faqs={locationFaqs} title={`FAQs – Call Girls in ${loc.name}`} />

      <BookingCTA
        title={`Book a Call Girl in ${loc.name} Now`}
        subtitle={`Available 24/7 throughout ${loc.name} and nearby areas. No booking fees.`}
        location={loc.name}
      />

      <LocationGrid
        title="Call Girls in Other Locations"
        subtitle={`Find call girls in areas near ${loc.name}`}
        limit={24}
        type="call-girls"
      />
    </>
  )
}
