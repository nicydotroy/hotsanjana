import type { Metadata } from 'next'
import LocationGrid from '@/components/LocationGrid'
import Hero from '@/components/Hero'
import BookingCTA from '@/components/BookingCTA'
import { locations } from '@/data/locations'

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
