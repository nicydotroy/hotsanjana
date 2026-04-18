import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Hero from '@/components/Hero'
import Breadcrumb from '@/components/Breadcrumb'
import BookingButtons from '@/components/BookingButtons'
import BookingCTA from '@/components/BookingCTA'
import FAQSection from '@/components/FAQSection'
import { getEscortTypeBySlug, getAllEscortTypeSlugs, escortTypes } from '@/data/escort-types'
import Link from 'next/link'

interface PageProps {
  params: Promise<{ type: string }>
}

export async function generateStaticParams() {
  return getAllEscortTypeSlugs().map((slug) => ({ type: slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { type: slug } = await params
  const escortType = getEscortTypeBySlug(slug)
  if (!escortType) return { title: 'Not Found' }

  const title = `${escortType.name} in Mumbai | Hot Sanjana | 24/7 Available`
  const description = `${escortType.tagline}. ${escortType.description} Book now – call +91-9038976363 or WhatsApp +91-90389-76363`

  return {
    title,
    description,
    alternates: { canonical: `https://hotsanjana.in/escort-types/${slug}` },
    openGraph: { title, description, url: `https://hotsanjana.in/escort-types/${slug}` },
  }
}

export default async function EscortTypePage({ params }: PageProps) {
  const { type: slug } = await params
  const escortType = getEscortTypeBySlug(slug)

  if (!escortType) notFound()

  const typeFaqs = [
    {
      question: `How do I book ${escortType.name} in Mumbai?`,
      answer: `Booking ${escortType.name} is simple. Call us at +91-9038976363 or message on WhatsApp +91-90389-76363. Mention "${escortType.name}" and your preferred location and time. We confirm within minutes.`,
    },
    {
      question: `Are ${escortType.name} available 24 hours?`,
      answer: `Yes! Our ${escortType.name} are available 24/7 across all Mumbai locations, Navi Mumbai, and Thane. Weekend and late-night bookings are always welcome.`,
    },
    {
      question: `What services do ${escortType.name} provide in Mumbai?`,
      answer: `${escortType.name} offer companionship services including social events, dinner dates, hotel visits, outcall, and incall services. ${escortType.longDescription.slice(0, 100)}... Contact us for more details.`,
    },
    {
      question: `Are the ${escortType.name} profiles verified?`,
      answer: `Yes, every profile is thoroughly verified by our team. We ensure authenticity, professionalism, and safety for all clients. We maintain a zero-tolerance policy for fake profiles.`,
    },
    {
      question: `What are the rates for ${escortType.name} in Mumbai?`,
      answer: `Rates for ${escortType.name} vary by duration (1 hour, 2 hours, overnight) and service type (incall/outcall). We offer competitive, transparent pricing with no hidden charges. Call us for current rates and offers.`,
    },
    {
      question: `Do ${escortType.name} come to hotels in Mumbai?`,
      answer: `Yes. Hotel outcall is available for all ${escortType.name} across Mumbai, Navi Mumbai, and Thane. Our companions are experienced in discreet hotel visits and familiar with all major 3-star to 5-star properties.`,
    },
    {
      question: `Are ${escortType.name} available in Navi Mumbai and Thane?`,
      answer: `Absolutely. Our ${escortType.name} serve not just Mumbai but also all areas of Navi Mumbai (Vashi, Nerul, Kharghar, Belapur) and Thane (Thane city, Kalyan, Dombivali, Mira Road) with the same 24/7 availability.`,
    },
    {
      question: `Can I book ${escortType.name} for an overnight stay?`,
      answer: `Yes. Overnight bookings for ${escortType.name} are available subject to companion schedule. Our overnight package covers the full evening through morning, offering the most complete and relaxing experience.`,
    },
    {
      question: `Is the ${escortType.name} booking process discreet?`,
      answer: `Completely. All communication and bookings for ${escortType.name} are handled with strict confidentiality. We never share client details with anyone. Our companions maintain full discretion before, during, and after every meeting.`,
    },
    {
      question: `What is the minimum booking duration for ${escortType.name}?`,
      answer: `The minimum booking for ${escortType.name} is typically 1 hour. We also offer 2-hour, 3-hour, full-day, and overnight packages for a more comfortable and enjoyable experience without feeling rushed.`,
    },
    {
      question: `Are incall and outcall both available for ${escortType.name}?`,
      answer: `Yes, both incall and outcall services are available for ${escortType.name} in Mumbai. For incall you visit a discreet private location; for outcall the companion comes to your hotel, home, or chosen address.`,
    },
    {
      question: `Is same-day booking possible for ${escortType.name}?`,
      answer: `Yes. Same-day bookings for ${escortType.name} are accepted and usually confirmed within 30–60 minutes. For the fastest response on last-minute requests, calling us directly is recommended over WhatsApp.`,
    },
    {
      question: `Can I see profiles of ${escortType.name} before booking?`,
      answer: `Yes. Once you contact us with your requirements, we share verified photo profiles of available ${escortType.name} companions. All photos are genuine and current – we guarantee photo authenticity.`,
    },
    {
      question: `Are ${escortType.name} available for social events and dinners?`,
      answer: `Yes. Our ${escortType.name} are socially refined and can accompany you to parties, corporate dinners, events, and outings. They are well-presented, conversational, and completely discreet in public settings.`,
    },
    {
      question: `What makes ${escortType.name} different from other escort types?`,
      answer: `${escortType.tagline}. Each companion in this category brings a unique personality and specialisation. ${escortType.description.slice(0, 120)} Contact us to find the perfect match for your requirements.`,
    },
    {
      question: `How quickly can ${escortType.name} be arranged in Mumbai?`,
      answer: `For ${escortType.name} in Mumbai, most bookings are arranged within 1–2 hours of confirmation. Premium profiles may require slightly more advance notice. Contact us early in the day for same-day bookings.`,
    },
  ]

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Escort Types', href: '/types' },
          { label: escortType.name },
        ]}
      />

      <Hero
        badge="Specialty Category"
        title={`${escortType.name} in Mumbai`}
        subtitle={escortType.tagline}
        description={escortType.description}
        ctaText="View All Types"
        ctaHref="/types"
        location={escortType.name}
        showStats
      />

      {/* ── Main Content ── */}
      <section className="py-16" style={{ background: '#0a0a0a' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-6">
              {/* Category Image */}
              {escortType.image && (
                <div className="relative w-full h-72 rounded-2xl overflow-hidden border border-red-900/30">
                  <Image
                    src={escortType.image}
                    alt={escortType.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              )}
              <h2 className="text-2xl lg:text-3xl font-bold text-white">
                About{' '}
                <span className="gradient-text">{escortType.name}</span>
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">{escortType.longDescription}</p>

              {escortType.features && escortType.features.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">What to Expect</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {escortType.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 p-4 rounded-xl border border-red-900/30"
                        style={{ background: 'rgba(139, 0, 0, 0.1)' }}
                      >
                        <span className="text-red-400 font-bold">✓</span>
                        <span className="text-gray-300 text-sm font-medium">{feature}</span>
                      </div>
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
                <h3 className="text-xl font-bold text-white mb-2">Book {escortType.name}</h3>
                <p className="text-gray-400 text-sm mb-5">
                  Available 24/7 across Mumbai. Instant confirmation.
                </p>
                <BookingButtons type={escortType.name} size="md" layout="col" />
                <div className="mt-5 space-y-2 text-sm text-gray-400">
                  {['Verified Profiles', 'Fully Discreet', 'Incall & Outcall', 'All Mumbai Areas'].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="text-red-400">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Other Types ── */}
      <section className="py-14" style={{ background: '#0d0000' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Explore Other{' '}
            <span className="gradient-text">Escort Categories</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {escortTypes
              .filter((t) => t.slug !== slug)
              .map((t) => (
                <Link
                  key={t.slug}
                  href={`/escort-types/${t.slug}`}
                  className="group rounded-xl overflow-hidden border border-red-900/30 hover:border-red-700/50 hover:shadow-card hover:-translate-y-1 transition-all duration-300"
                  style={{ background: 'linear-gradient(135deg, #140500, #1f0a00)' }}
                >
                  <div className="relative w-full h-28 overflow-hidden">
                    {t.image ? (
                      <Image
                        src={t.image}
                        alt={t.imageAlt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="25vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-3xl" style={{ background: '#1f0800' }}>
                        {t.icon}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-2 left-3 text-xl">{t.icon}</div>
                  </div>
                  <div className="p-3 text-center">
                    <p className="text-sm font-semibold text-gray-300 group-hover:text-red-400">{t.name}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={typeFaqs} title={`FAQs – ${escortType.name} in Mumbai`} />

      <BookingCTA
        title={`Book ${escortType.name} Tonight`}
        subtitle="Available 24/7 across all Mumbai, Navi Mumbai, and Thane locations"
      />
    </>
  )
}
