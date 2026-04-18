import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { locations } from '@/data/locations'

interface LocationGridProps {
  title?: string
  subtitle?: string
  limit?: number
  showAll?: boolean
  type?: 'escorts' | 'call-girls'
}

export default function LocationGrid({
  title = 'Browse Escorts by Location',
  subtitle = 'We cover all areas across Mumbai, Navi Mumbai, Thane, and beyond',
  limit = 48,
  showAll = false,
  type = 'escorts',
}: LocationGridProps) {
  const displayLocations = showAll ? locations : locations.slice(0, limit)
  const prefix = type === 'call-girls' ? '/call-girls' : '/escorts'

  const areaColors: Record<string, string> = {
    'South Mumbai': 'from-purple-500 to-pink-500',
    'Western Suburbs': 'from-pink-500 to-rose-400',
    'Eastern Suburbs': 'from-rose-500 to-orange-400',
    'Navi Mumbai': 'from-blue-500 to-teal-400',
    'Thane District': 'from-teal-500 to-green-400',
    'Vasai-Virar District': 'from-orange-500 to-yellow-400',
    'Palghar District': 'from-yellow-500 to-green-400',
    default: 'from-pink-500 to-rose-400',
  }

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          {subtitle && (
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {displayLocations.map((loc) => {
            const gradient = areaColors[loc.area] || areaColors.default
            return (
              <Link
                key={loc.slug}
                href={`${prefix}/${loc.slug}`}
                className="group relative overflow-hidden rounded-xl bg-white p-3.5 text-center shadow-sm hover:shadow-card-hover border border-pink-100 hover:border-pink-300 transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`w-8 h-8 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center mx-auto mb-2.5 group-hover:scale-110 transition-transform shadow-sm`}
                >
                  <MapPin size={14} className="text-white" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-gray-800 group-hover:text-pink-600 transition-colors leading-tight block">
                  {loc.name}
                </span>
                <span className="text-xs text-gray-400 mt-1 block truncate">{loc.area}</span>
              </Link>
            )
          })}
        </div>

        {!showAll && locations.length > limit && (
          <div className="text-center mt-8">
            <Link
              href="/location"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-400 text-white font-semibold rounded-full hover:shadow-pink-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              View All {locations.length} Locations
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
