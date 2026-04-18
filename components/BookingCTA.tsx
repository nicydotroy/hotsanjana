import Link from 'next/link'
import { Phone, MessageCircle, ArrowRight, Flame } from 'lucide-react'
import { SITE_CONFIG } from '@/data/services'

interface BookingCTAProps {
  title?: string
  subtitle?: string
  location?: string
}

export default function BookingCTA({
  title = 'Ready to Book? Contact Us Now',
  subtitle = 'Available 24/7 – Call or message on WhatsApp for instant confirmation',
  location,
}: BookingCTAProps) {
  const whatsappText = location
    ? `Hi, I want to book escorts in ${location}`
    : 'Hi, I want to book an escort in Mumbai'

  return (
    <section className="py-16 lg:py-20 relative overflow-hidden">
      {/* Fire background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #0a0000 0%, #1f0000 30%, #2d0800 60%, #1a0000 100%)',
        }}
      />

      {/* Glow orbs */}
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"
        style={{ background: 'radial-gradient(circle, #ff4500, transparent)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-60 h-60 rounded-full blur-3xl opacity-15 translate-y-1/2 -translate-x-1/2"
        style={{ background: 'radial-gradient(circle, #ffd700, transparent)' }}
      />

      {/* Fire border top */}
      <div className="absolute top-0 left-0 right-0 fire-divider opacity-60" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Flame size={20} className="text-orange-400" />
          <span className="text-sm font-bold tracking-[0.3em] text-red-400 uppercase">Book Now</span>
          <Flame size={20} className="text-orange-400" />
        </div>

        <h2
          className="text-3xl lg:text-4xl font-bold mb-4"
          style={{
            background: 'linear-gradient(135deg, #ffffff, #ffdddd, #ff6600)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {title}
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="flex items-center gap-3 px-8 py-4 font-bold text-lg rounded-full w-full sm:w-auto justify-center transition-all duration-300 hover:-translate-y-1 text-white"
            style={{
              background: 'linear-gradient(135deg, #8b0000, #dc0000, #ff4500)',
              boxShadow: '0 8px 30px rgba(220, 0, 0, 0.5)',
            }}
            rel="nofollow"
          >
            <Phone size={22} />
            {SITE_CONFIG.phoneDisplay}
          </a>
          <a
            href={`${SITE_CONFIG.whatsappUrl}?text=${encodeURIComponent(whatsappText)}`}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="flex items-center gap-3 px-8 py-4 font-bold text-lg rounded-full w-full sm:w-auto justify-center transition-all duration-300 hover:-translate-y-1 text-black"
            style={{
              background: 'linear-gradient(135deg, #cc9900, #ffd700, #ff8c1a)',
              boxShadow: '0 8px 30px rgba(255, 215, 0, 0.4)',
            }}
          >
            <MessageCircle size={22} />
            Book on WhatsApp
          </a>
          <Link
            href="/contact"
            className="flex items-center gap-3 px-6 py-4 text-gray-400 font-semibold text-lg rounded-full hover:text-red-400 transition-all duration-300 w-full sm:w-auto justify-center"
          >
            View All Options
            <ArrowRight size={20} />
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-gray-500 text-sm">
          <span className="text-green-500">✅ 100% Verified Profiles</span>
          <span className="text-red-400">🔒 Completely Discreet</span>
          <span className="text-orange-400">🕐 Available 24/7</span>
          <span className="text-yellow-500">📍 All Mumbai Locations</span>
        </div>
      </div>

      {/* Fire border bottom */}
      <div className="absolute bottom-0 left-0 right-0 fire-divider opacity-60" />
    </section>
  )
}
