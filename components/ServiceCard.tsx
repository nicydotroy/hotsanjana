import Link from 'next/link'
import BookingButtons from './BookingButtons'

interface ServiceCardProps {
  name: string
  href: string
  imageSrc?: string
  imageAlt?: string
  badge?: string
}

export default function ServiceCard({ name, href, imageSrc, imageAlt, badge }: ServiceCardProps) {
  const service = name

  return (
    <div
      className="group relative rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1"
      style={{
        background: 'linear-gradient(135deg, #120500, #1a0800)',
        borderColor: 'rgba(139, 0, 0, 0.3)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
      }}
    >
      {badge && (
        <div
          className="absolute top-3 left-3 z-10 text-white text-xs font-bold px-3 py-1 rounded-full shadow"
          style={{ background: 'linear-gradient(135deg, #8b0000, #dc0000)' }}
        >
          {badge}
        </div>
      )}

      <Link href={href} className="block" aria-label={`Learn more about ${name}`}>
        {imageSrc ? (
          <div className="relative h-52 overflow-hidden">
            <img
              src={imageSrc}
              alt={imageAlt || name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              decoding="async"
              width={400}
              height={280}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </div>
        ) : (
          <div
            className="h-40 flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #1a0500, #2d0800)' }}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
              style={{ background: 'linear-gradient(135deg, #8b0000, #dc0000, #ff4500)' }}
            >
              <span className="text-2xl">🔥</span>
            </div>
          </div>
        )}

        <div className="p-4">
          <h3
            className="text-base font-bold text-center text-white group-hover:transition-colors"
            style={{ '--hover-color': '#ff6600' } as React.CSSProperties}
          >
            <span className="group-hover:text-orange-400 transition-colors">{name}</span>
          </h3>
        </div>
      </Link>

      <div className="px-4 pb-4">
        <BookingButtons type={service} size="sm" />
      </div>

      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl"
        style={{ boxShadow: 'inset 0 0 30px rgba(220, 0, 0, 0.1)' }}
      />
    </div>
  )
}
