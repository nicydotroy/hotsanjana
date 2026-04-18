import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import WhyChooseUs from '@/components/WhyChooseUs'
import LocationGrid from '@/components/LocationGrid'
import FAQSection from '@/components/FAQSection'
import BookingCTA from '@/components/BookingCTA'
import { faqs, SITE_CONFIG, testimonials } from '@/data/services'
import { escortTypes } from '@/data/escort-types'

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

      {/* ── Hero: Split Layout ── */}
      <section
        className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #000000 0%, #0f0000 30%, #1a0000 60%, #0a0000 100%)' }}
        aria-label="Main banner"
      >
        {/* Fire glow orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 left-1/3 w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
            style={{ background: 'radial-gradient(circle, #ff4500 0%, #dc0000 50%, transparent 70%)' }} />
          <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full blur-3xl opacity-10"
            style={{ background: 'radial-gradient(circle, #ff6600 0%, #cc3300 50%, transparent 70%)' }} />
        </div>
        {/* Top fire line */}
        <div className="absolute top-0 left-0 right-0 h-[3px]"
          style={{ background: 'linear-gradient(90deg, transparent, #dc0000, #ff6600, #ffd700, #ff6600, #dc0000, transparent)' }} />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left: Text Content */}
            <div>
              <div
                className="inline-flex items-center gap-2 text-sm font-bold px-5 py-2 rounded-full mb-6 border"
                style={{ background: 'rgba(220,0,0,0.15)', borderColor: 'rgba(220,0,0,0.4)', color: '#ff6600' }}
              >
                🔥 Mumbai&apos;s #1 Escort Service 🔥
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
                Premium{' '}
                <span style={{ background: 'linear-gradient(135deg, #dc0000, #ff6600, #ffd700)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Escorts
                </span>
                <br />in Mumbai
              </h1>
              <p className="text-orange-400 text-xl font-semibold mb-4">24/7 Available · Verified · Discreet</p>
              <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-lg">
                Mumbai&apos;s top escort service with 500+ verified profiles across Andheri, Bandra, Juhu, Thane, Navi Mumbai and 90+ more locations.
              </p>
              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                {[['500+', 'Escorts'], ['90+', 'Locations'], ['24/7', 'Available']].map(([num, label]) => (
                  <div key={label} className="rounded-xl p-3 border border-red-900/30 text-center" style={{ background: 'rgba(139,0,0,0.1)' }}>
                    <div className="text-2xl font-black" style={{ background: 'linear-gradient(135deg, #dc0000, #ff6600, #ffd700)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{num}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{label}</div>
                  </div>
                ))}
              </div>
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  rel="nofollow"
                  className="flex items-center justify-center gap-2 font-bold px-7 py-4 rounded-full text-white text-base hover:-translate-y-0.5 transition-transform"
                  style={{ background: 'linear-gradient(135deg, #8b0000, #dc0000, #ff4500)', boxShadow: '0 4px 25px rgba(220,0,0,0.45)' }}
                >
                  📞 Book on Call
                </a>
                <a
                  href={SITE_CONFIG.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="flex items-center justify-center gap-2 font-bold px-7 py-4 rounded-full text-black text-base hover:-translate-y-0.5 transition-transform"
                  style={{ background: 'linear-gradient(135deg, #cc9900, #ffd700)', boxShadow: '0 4px 25px rgba(255,215,0,0.35)' }}
                >
                  💬 Book on Telegram
                </a>
              </div>
            </div>

            {/* Right: Portrait Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div
                className="relative w-full max-w-[340px] lg:w-[380px] h-[400px] lg:h-[560px] rounded-3xl overflow-hidden border border-red-800/50"
                style={{ boxShadow: '0 0 80px rgba(220,0,0,0.35), 0 20px 60px rgba(0,0,0,0.8)' }}
              >
                <Image
                  src="/images/categories/vip-escorts-mumbai.webp"
                  alt="Premium Escorts Mumbai – Hot Sanjana"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width:1024px) 340px, 380px"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-4 right-4">
                  <div className="rounded-2xl px-4 py-3 border border-red-700/40" style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)' }}>
                    <p className="text-white font-bold text-sm">Available Right Now</p>
                    <p className="text-gray-400 text-xs mt-0.5">500+ Verified Profiles · All Mumbai Areas</p>
                  </div>
                </div>
              </div>
              {/* Glow behind image */}
              <div className="absolute inset-0 -z-10 blur-3xl opacity-25 scale-95"
                style={{ background: 'linear-gradient(135deg, #dc0000, #ff6600, #ffd700)' }} />
            </div>
          </div>
        </div>
      </section>

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

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-5">
            {escortTypes.map((type) => (
              <div
                key={type.slug}
                className="group rounded-2xl overflow-hidden border border-red-900/40 hover:border-red-500/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(220,0,0,0.3)]"
                style={{ background: '#0d0000' }}
              >
                <Link href={`/escort-types/${type.slug}`} className="block">
                  <div className="relative h-[440px] sm:h-60 overflow-hidden">
                    {type.image ? (
                      <Image
                        src={type.image}
                        alt={type.imageAlt}
                        fill
                        className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width:640px) 100vw, (max-width:1024px) 33vw, 25vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-5xl" style={{ background: '#1f0800' }}>
                        {type.icon}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
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
                <div className="px-3 pb-4 pt-2 grid grid-cols-2 gap-2">
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="flex items-center justify-center gap-1 text-[11px] sm:text-xs font-bold py-2 rounded-full text-white hover:-translate-y-0.5 transition-transform"
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
                    className="flex items-center justify-center gap-1 text-[11px] sm:text-xs font-bold py-2 rounded-full text-black hover:-translate-y-0.5 transition-transform"
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
