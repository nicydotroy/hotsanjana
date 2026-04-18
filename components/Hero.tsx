import Link from 'next/link'
import { Phone, MessageCircle, Flame } from 'lucide-react'
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
  badge = '🔥 Mumbai\'s #1 Rated Escort Service 🔥',
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
      className="relative min-h-[580px] lg:min-h-[660px] flex items-center justify-center overflow-hidden"
      aria-label="Main banner"
      style={{
        background: 'linear-gradient(160deg, #000000 0%, #0f0000 30%, #1a0000 60%, #0a0000 100%)',
      }}
    >
      {/* Animated fire glow orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
          style={{ background: 'radial-gradient(circle, #ff4500 0%, #dc0000 50%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full blur-3xl opacity-15"
          style={{ background: 'radial-gradient(circle, #ff6600 0%, #cc3300 50%, transparent 70%)' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-3xl opacity-10"
          style={{ background: 'radial-gradient(circle, #ffd700 0%, #ff6600 40%, transparent 70%)' }}
        />
      </div>

      {/* Fire particle dots pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #ff4500 1px, transparent 1px), radial-gradient(circle at 75% 75%, #ffd700 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Diagonal fire lines */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ff4500 0, #ff4500 1px, transparent 0, transparent 50%)',
          backgroundSize: '30px 30px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-16 text-center">

        {/* Fire Badge */}
        {badge && (
          <div
            className="inline-flex items-center gap-2 text-sm font-bold px-6 py-2.5 rounded-full mb-8 border animate-flicker"
            style={{
              background: 'rgba(220, 0, 0, 0.15)',
              borderColor: 'rgba(220, 0, 0, 0.4)',
              color: '#ff6600',
              boxShadow: '0 0 20px rgba(220, 0, 0, 0.2)',
            }}
          >
            <Flame size={16} className="text-orange-400" />
            {badge}
            <Flame size={16} className="text-orange-400" />
          </div>
        )}

        {/* Title */}
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #ffdddd 40%, #ff6600 80%, #ffd700 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: 'none',
            filter: 'drop-shadow(0 0 30px rgba(220, 0, 0, 0.4))',
          }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-lg sm:text-xl font-semibold text-orange-300 mb-4 tracking-wide">
            {subtitle}
          </p>
        )}

        {/* Fire divider */}
        <div className="fire-divider max-w-xs mx-auto mb-6 opacity-60" />

        {/* Description */}
        {description && (
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            {description}
          </p>
        )}

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="flex items-center gap-3 px-8 py-4 font-bold text-lg rounded-full w-full sm:w-auto justify-center transition-all duration-300 hover:-translate-y-1"
            style={{
              background: 'linear-gradient(135deg, #8b0000, #dc0000, #ff4500)',
              boxShadow: '0 8px 30px rgba(220, 0, 0, 0.6)',
              color: '#ffffff',
            }}
            rel="nofollow"
          >
            <Phone size={22} />
            Call Now: {SITE_CONFIG.phoneDisplay}
          </a>
          <a
            href={`${SITE_CONFIG.telegramUrl}?text=${encodeURIComponent(telegramMessage)}`}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="flex items-center gap-3 px-8 py-4 font-bold text-lg rounded-full w-full sm:w-auto justify-center transition-all duration-300 hover:-translate-y-1 text-black"
            style={{
              background: 'linear-gradient(135deg, #cc9900, #ffd700, #ff8c1a)',
              boxShadow: '0 8px 30px rgba(255, 215, 0, 0.5)',
            }}
          >
            <MessageCircle size={22} />
            Book on Telegram
          </a>
        </div>

        {/* Stats Row */}
        {showStats && (
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[
              { value: '500+', label: 'Verified Escorts' },
              { value: '24/7', label: 'Availability' },
              { value: '90+', label: 'Locations' },
              { value: '10K+', label: 'Happy Clients' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-4 rounded-2xl border border-red-900/30"
                style={{ background: 'rgba(220, 0, 0, 0.08)' }}
              >
                <div
                  className="text-2xl sm:text-3xl font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #ff4500, #ffd700)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #0a0a0a)' }}
      />
    </section>
  )
}
