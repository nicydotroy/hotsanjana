import type { Metadata } from 'next'
import Image from 'next/image'
import LocationGrid from '@/components/LocationGrid'
import Hero from '@/components/Hero'
import BookingCTA from '@/components/BookingCTA'
import { locations } from '@/data/locations'
import { escortTypes } from '@/data/escort-types'

export const metadata: Metadata = {
  title: 'Escorts by Location in Mumbai | All Areas | Hot Sanjana',
  description:
    'Browse escorts and call girls by location across 90+ areas in Mumbai, Navi Mumbai, Thane, Vasai-Virar and beyond. Find escorts near you.',
  alternates: { canonical: 'https://hotsanjana.in/location' },
}

// Group by region
const regions = locations.reduce<Record<string, typeof locations>>((acc, loc) => {
  const region = loc.area || 'Other'
  if (!acc[region]) acc[region] = []
  acc[region].push(loc)
  return acc
}, {})

export default function LocationPage() {
  return (
    <>
      <Hero
        badge="All Locations"
        title="Escorts Across Mumbai & Beyond"
        subtitle="90+ Locations Covered"
        description="Find premium verified escorts near you. We cover all major areas of Mumbai, Navi Mumbai, Thane, Vasai-Virar, Palghar, and even Pune."
        ctaText="Book Now"
        ctaHref="/"
        showStats={false}
      />

      {/* ── Escort Category Photo Strip ── */}
      <section className="py-8 lg:py-12" style={{ background: '#040000' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-bold tracking-[0.25em] text-red-500 uppercase mb-5">Our Escort Categories</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 lg:gap-4">
            {escortTypes.slice(0, 6).map((type) => (
              <a
                key={type.slug}
                href={`/escort-types/${type.slug}`}
                className="group relative rounded-xl overflow-hidden border border-red-900/40 hover:border-red-500/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(220,0,0,0.3)]"
              >
                <div className="relative h-36 sm:h-44 lg:h-52 overflow-hidden">
                  {type.image ? (
                    <Image
                      src={type.image}
                      alt={type.imageAlt}
                      fill
                      className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 17vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-4xl" style={{ background: '#1f0800' }}>
                      {type.icon}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  {type.badge && (
                    <div
                      className="absolute top-1.5 left-1.5 text-black text-[9px] font-black px-2 py-0.5 rounded-full"
                      style={{ background: 'linear-gradient(135deg, #cc9900, #ffd700)' }}
                    >
                      {type.badge}
                    </div>
                  )}
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-white text-xs font-bold leading-tight">{type.name}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20" style={{ background: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Browse Escorts by{' '}
              <span className="gradient-text">District &amp; Area</span>
            </h2>
            <p className="text-gray-400 text-lg">
              {locations.length}+ locations covered. Click any area to find available escorts.
            </p>
          </div>

          {Object.entries(regions).map(([region, locs]) => (
            <div key={region} className="mb-12">
              <div className="flex items-center gap-4 mb-5">
                <h3 className="text-xl font-bold text-white">{region}</h3>
                <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, #dc0000, transparent)' }} />
                <span className="text-sm text-gray-500 font-medium">{locs.length} areas</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {locs.map((loc) => (
                  <a
                    key={loc.slug}
                    href={`/escorts/${loc.slug}`}
                    className="group rounded-xl p-3.5 text-center border border-red-900/30 hover:border-red-700/50 hover:shadow-card hover:-translate-y-0.5 transition-all duration-200"
                    style={{ background: 'linear-gradient(135deg, #140500, #1a0800)' }}
                  >
                    <span className="text-sm font-semibold text-gray-300 group-hover:text-red-400 transition-colors block">
                      {loc.name}
                    </span>
                    <span className="text-xs text-gray-600 mt-0.5 block">View escorts</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <BookingCTA
        title="Don't See Your Area?"
        subtitle="We cover even more locations. Call us and we'll arrange escorts to any Mumbai address."
      />
    </>
  )
}
