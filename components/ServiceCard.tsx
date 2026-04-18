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
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover border border-pink-100 hover:border-pink-300 transition-all duration-300 hover:-translate-y-1">
      {badge && (
        <div className="absolute top-3 left-3 z-10 bg-gradient-to-r from-pink-500 to-rose-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        ) : (
          <div className="h-40 bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-rose-400 flex items-center justify-center shadow-pink">
              <span className="text-2xl text-white">💋</span>
            </div>
          </div>
        )}

        <div className="p-4">
          <h3 className="text-base font-bold text-gray-900 group-hover:text-pink-600 transition-colors text-center">
            {name}
          </h3>
        </div>
      </Link>

      <div className="px-4 pb-4">
        <BookingButtons type={service} size="sm" />
      </div>
    </div>
  )
}
