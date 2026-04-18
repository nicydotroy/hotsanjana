import Link from 'next/link'
import Image from 'next/image'
import { locations, type Location, getLocationImage } from '@/data/locations'

interface LocationGridProps {
  title?: string
  subtitle?: string
  limit?: number
  showAll?: boolean
  type?: 'escorts' | 'call-girls'
}

// ── Classify locations into city buckets ──────────────────────────────────────
const otherMetroSlugs = new Set(['pune', 'indore'])

const mumbaiLocs = locations.filter(
  (l) => !otherMetroSlugs.has(l.slug) && (l.region === 'Mumbai' || l.area === 'Mumbai City'),
)
const naviMumbaiLocs = locations.filter(
  (l) => !otherMetroSlugs.has(l.slug) && l.area === 'Navi Mumbai',
)
const thaneLocs = locations.filter(
  (l) =>
    !otherMetroSlugs.has(l.slug) &&
    (l.area === 'Thane District' ||
      l.area === 'Mira-Bhayandar' ||
      l.area.includes('Vasai') ||
      l.area.includes('Palghar') ||
      l.area.includes('Raigad')),
)
const otherMetroLocs = locations.filter((l) => otherMetroSlugs.has(l.slug))

// ── Reusable card ─────────────────────────────────────────────────────────────
function LocationCard({ loc, prefix }: { loc: Location; prefix: string }) {
  return (
    <Link
      href={`${prefix}/${loc.slug}`}
      className="group relative overflow-hidden rounded-xl border border-red-900/40 hover:border-red-500/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_6px_24px_rgba(220,0,0,0.35)]"
      style={{ background: '#0d0000' }}
    >
      <div className="relative h-40 sm:h-44 overflow-hidden">
        <Image
          src={getLocationImage(loc.slug)}
          alt={`Escorts in ${loc.name}`}
          fill
          className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width:640px) 50vw, (max-width:1024px) 25vw, 17vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-2.5">
          <span className="text-white text-xs font-bold leading-tight block truncate">{loc.name}</span>
          <span className="text-orange-400 text-[10px] block truncate">{loc.area}</span>
        </div>
      </div>
    </Link>
  )
}

// ── Section heading ───────────────────────────────────────────────────────────
function AreaHeading({ emoji, label, count }: { emoji: string; label: string; count: number }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="text-2xl">{emoji}</span>
      <h3 className="text-white font-bold text-lg sm:text-xl">{label}</h3>
      <span
        className="text-xs font-bold px-2.5 py-0.5 rounded-full"
        style={{ background: 'rgba(220,0,0,0.15)', color: '#ff6600', border: '1px solid rgba(220,0,0,0.3)' }}
      >
        {count} locations
      </span>
      <div className="flex-1 h-px ml-1" style={{ background: 'linear-gradient(90deg, rgba(220,0,0,0.4), transparent)' }} />
    </div>
  )
}

// ── Main component ────────────────────────────────────────────────────────────
export default function LocationGrid({
  title = 'Find Escorts Near You',
  subtitle = 'Browse our verified escorts across all Mumbai, Navi Mumbai, Thane and metro city locations',
  type = 'escorts',
}: LocationGridProps) {
  const prefix = type === 'call-girls' ? '/call-girls' : '/escorts'

  return (
    <section className="py-16 lg:py-20 section-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ── */}
        <div className="text-center mb-12">
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
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {/* ── Mumbai ── */}
        <div className="mb-10">
          <AreaHeading emoji="🌆" label="Mumbai" count={mumbaiLocs.length} />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {mumbaiLocs.map((loc) => (
              <LocationCard key={loc.slug} loc={loc} prefix={prefix} />
            ))}
          </div>
        </div>

        {/* ── Navi Mumbai ── */}
        <div className="mb-10">
          <AreaHeading emoji="🏙️" label="Navi Mumbai" count={naviMumbaiLocs.length} />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {naviMumbaiLocs.map((loc) => (
              <LocationCard key={loc.slug} loc={loc} prefix={prefix} />
            ))}
          </div>
        </div>

        {/* ── Thane & Nearby ── */}
        <div className="mb-10">
          <AreaHeading emoji="🏘️" label="Thane & Nearby" count={thaneLocs.length} />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {thaneLocs.map((loc) => (
              <LocationCard key={loc.slug} loc={loc} prefix={prefix} />
            ))}
          </div>
        </div>

        {/* ── Other Metro Cities ── */}
        {otherMetroLocs.length > 0 && (
          <div>
            <AreaHeading emoji="✈️" label="Other Metro Cities" count={otherMetroLocs.length} />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
              {otherMetroLocs.map((loc) => (
                <LocationCard key={loc.slug} loc={loc} prefix={prefix} />
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  )
}
