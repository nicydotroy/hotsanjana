import Link from 'next/link'
import Image from 'next/image'
import { locations, getLocationImage } from '@/data/locations'

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
            const imgSrc = getLocationImage(loc.slug)
            return (
              <Link
                key={loc.slug}
                href={`${prefix}/${loc.slug}`}
                className="group relative overflow-hidden rounded-xl border border-red-900/40 hover:border-red-500/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(220,0,0,0.3)]"
                style={{ background: '#0d0000' }}
              >
                {/* Portrait image */}
                <div className="relative h-36 sm:h-40 overflow-hidden">
                  <Image
                    src={imgSrc}
                    alt={`Escorts in ${loc.name}`}
                    fill
                    className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width:640px) 50vw, (max-width:1024px) 25vw, 17vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <span className="text-white text-xs font-bold leading-tight block">{loc.name}</span>
                    <span className="text-orange-400 text-[10px] block">{loc.area}</span>
                  </div>
                </div>
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
