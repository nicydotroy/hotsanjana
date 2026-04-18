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

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Browse Escorts by{' '}
              <span className="bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">
                District & Area
              </span>
            </h2>
            <p className="text-gray-600 text-lg">
              {locations.length}+ locations covered. Click any area to find available escorts.
            </p>
          </div>

          {Object.entries(regions).map(([region, locs]) => (
            <div key={region} className="mb-12">
              <div className="flex items-center gap-4 mb-5">
                <h3 className="text-xl font-bold text-gray-900">{region}</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-pink-200 to-transparent" />
                <span className="text-sm text-gray-500 font-medium">{locs.length} areas</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {locs.map((loc) => (
                  <a
                    key={loc.slug}
                    href={`/escorts/${loc.slug}`}
                    className="group bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-3.5 text-center border border-pink-100 hover:border-pink-300 hover:shadow-card hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <span className="text-sm font-semibold text-gray-800 group-hover:text-pink-600 transition-colors block">
                      {loc.name}
                    </span>
                    <span className="text-xs text-gray-400 mt-0.5 block">View escorts</span>
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
