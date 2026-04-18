import Link from 'next/link'
import { Phone, MessageCircle } from 'lucide-react'
import { SITE_CONFIG } from '@/data/services'

interface HeroProps {
  title: string
  subtitle?: string
  description?: string
  badge?: string
  ctaText?: string
  ctaHref?: string
  showStats?: boolean
  location?: string
}

export default function Hero({
  title,
  subtitle,
  description,
  badge = '⭐ Mumbai\'s #1 Rated Escort Service ⭐',
  ctaText = 'Book Now',
  ctaHref = '/contact',
  showStats = true,
  location,
}: HeroProps) {
  const telegramMessage = location
    ? `Hi I want to book escorts in ${location}`
    : 'Hi I want to book an escort'

  return (
    <section
      className="relative min-h-[520px] lg:min-h-[600px] flex items-center justify-center overflow-hidden"
      aria-label="Main banner"
      style={{
        background:
          'linear-gradient(135deg, rgba(157,3,97,0.97) 0%, rgba(199,21,133,0.95) 40%, rgba(255,105,180,0.95) 100%)',
      }}
    >
      {/* Decorative Circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-pink-400/10 blur-3xl" />
      </div>

      {/* Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-16 text-center">
        {/* Badge */}
        {badge && (
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2 rounded-full mb-6 border border-white/30 animate-fade-in">
            {badge}
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-lg sm:text-xl font-semibold text-pink-100 mb-4">
            {subtitle}
          </p>
        )}

        {/* Description */}
        {description && (
          <p className="text-base sm:text-lg text-pink-100/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            {description}
          </p>
        )}

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="flex items-center gap-3 px-8 py-4 bg-white text-pink-600 font-bold text-lg rounded-full shadow-2xl hover:shadow-white/20 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto justify-center"
            rel="nofollow"
          >
            <Phone size={22} />
            Call Now: {SITE_CONFIG.phoneDisplay}
          </a>
          <a
            href={`${SITE_CONFIG.telegramUrl}?text=${encodeURIComponent(telegramMessage)}`}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="flex items-center gap-3 px-8 py-4 bg-white/15 backdrop-blur-sm text-white font-bold text-lg rounded-full border-2 border-white/50 hover:bg-white/25 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto justify-center"
          >
            <MessageCircle size={22} />
            Book on Telegram
          </a>
        </div>

        {/* Stats Row */}
        {showStats && (
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[
              { value: '500+', label: 'Verified Escorts' },
              { value: '24/7', label: 'Availability' },
              { value: '90+', label: 'Locations' },
              { value: '10K+', label: 'Happy Clients' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-xs sm:text-sm text-pink-200 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
