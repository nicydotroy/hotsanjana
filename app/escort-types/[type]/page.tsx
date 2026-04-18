import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
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
  const description = `${escortType.tagline}. ${escortType.description} Book now – call +91-9038976363 or Telegram @hotsanjana`

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
      answer: `Booking ${escortType.name} is simple. Call us at +91-9038976363 or message on Telegram @hotsanjana. Mention "${escortType.name}" and your preferred location and time. We confirm within minutes.`,
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
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                About{' '}
                <span className="bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">
                  {escortType.name}
                </span>
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">{escortType.longDescription}</p>

              {escortType.features && escortType.features.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">What to Expect</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {escortType.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl border border-pink-100"
                      >
                        <span className="text-pink-500 font-bold">✓</span>
                        <span className="text-gray-800 text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Booking Panel */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 border border-pink-200 shadow-card">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Book {escortType.name}</h3>
                <p className="text-gray-600 text-sm mb-5">
                  Available 24/7 across Mumbai. Instant confirmation.
                </p>
                <BookingButtons type={escortType.name} size="md" layout="col" />
                <div className="mt-5 space-y-2 text-sm text-gray-600">
                  {['Verified Profiles', 'Fully Discreet', 'Incall & Outcall', 'All Mumbai Areas'].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
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
      <section className="py-14 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Explore Other{' '}
            <span className="bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">
              Escort Categories
            </span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {escortTypes
              .filter((t) => t.slug !== slug)
              .map((t) => (
                <Link
                  key={t.slug}
                  href={`/escort-types/${t.slug}`}
                  className="bg-white rounded-xl p-4 text-center border border-pink-100 hover:border-pink-300 hover:shadow-card hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="text-3xl mb-2">{t.icon}</div>
                  <p className="text-sm font-semibold text-gray-800 group-hover:text-pink-600">{t.name}</p>
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
