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

  const areaGlows: Record<string, string> = {
    'South Mumbai':        'rgba(220, 0, 0, 0.7)',
    'Western Suburbs':     'rgba(255, 69, 0, 0.7)',
    'Eastern Suburbs':     'rgba(255, 140, 0, 0.7)',
    'Navi Mumbai':         'rgba(255, 215, 0, 0.7)',
    'Thane District':      'rgba(204, 153, 0, 0.7)',
    'Vasai-Virar District':'rgba(139, 0, 0, 0.7)',
    'Palghar District':    'rgba(255, 102, 0, 0.7)',
    default:               'rgba(220, 0, 0, 0.7)',
  }

  return (
    <section className="py-16 lg:py-20 section-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-sm font-bold tracking-[0.3em] text-red-500 uppercase mb-3">Serving All Areas</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            <span
              style={{
                background: 'linear-gradient(135deg, #dc0000, #ff6600, #ffd700)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {title}
            </span>
          </h2>
          <div className="fire-divider max-w-xs mx-auto mb-4 opacity-50" />
          {subtitle && (
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {displayLocations.map((loc) => {
            const glowColor = areaGlows[loc.area] || areaGlows.default
            return (
              <Link
                key={loc.slug}
                href={`${prefix}/${loc.slug}`}
                className="group relative overflow-hidden rounded-xl p-3.5 text-center border transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'linear-gradient(135deg, #120500, #1a0800)',
                  borderColor: 'rgba(139, 0, 0, 0.25)',
                }}
              >
                {/* Hover glow effect */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${glowColor.replace('0.7', '0.08')} 0%, transparent 70%)` }}
                />

                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2.5 group-hover:scale-110 transition-transform shadow-sm"
                  style={{ background: `linear-gradient(135deg, #8b0000, #dc0000)` }}
                >
                  <MapPin size={14} className="text-white" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-gray-300 group-hover:text-orange-300 transition-colors leading-tight block">
                  {loc.name}
                </span>
                <span className="text-xs text-gray-600 mt-1 block truncate">{loc.area}</span>
              </Link>
            )
          })}
        </div>

        {!showAll && locations.length > limit && (
          <div className="text-center mt-8">
            <Link
              href="/location"
              className="inline-flex items-center gap-2 px-8 py-3 font-bold text-white rounded-full hover:-translate-y-0.5 transition-all duration-200"
              style={{
                background: 'linear-gradient(135deg, #8b0000, #dc0000, #ff4500)',
                boxShadow: '0 4px 20px rgba(220, 0, 0, 0.4)',
              }}
            >
              View All {locations.length} Locations
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
