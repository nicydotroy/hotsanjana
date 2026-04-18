import Link from 'next/link'
import { Phone, MessageCircle, ArrowRight } from 'lucide-react'
import { SITE_CONFIG } from '@/data/services'

interface BookingCTAProps {
  title?: string
  subtitle?: string
  location?: string
}

export default function BookingCTA({
  title = 'Ready to Book? Contact Us Now',
  subtitle = 'Available 24/7 – Call or message on Telegram for instant confirmation',
  location,
}: BookingCTAProps) {
  const telegramText = location
    ? `Hi, I want to book escorts in ${location}`
    : 'Hi, I want to book an escort in Mumbai'

  return (
    <section className="py-16 lg:py-20 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #C71585 0%, #FF1493 50%, #FF69B4 100%)',
        }}
      />

      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/2 blur-2xl" />
      <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-white/10 translate-y-1/2 -translate-x-1/2 blur-2xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 drop-shadow">
          {title}
        </h2>
        <p className="text-pink-100 text-lg mb-10 max-w-2xl mx-auto">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="flex items-center gap-3 px-8 py-4 bg-white text-pink-600 font-bold text-lg rounded-full shadow-2xl hover:shadow-white/20 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto justify-center"
            rel="nofollow"
          >
            <Phone size={22} />
            {SITE_CONFIG.phoneDisplay}
          </a>
          <a
            href={`${SITE_CONFIG.telegramUrl}?text=${encodeURIComponent(telegramText)}`}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="flex items-center gap-3 px-8 py-4 bg-white/20 text-white font-bold text-lg rounded-full border-2 border-white/60 backdrop-blur-sm hover:bg-white/30 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto justify-center"
          >
            <MessageCircle size={22} />
            Book on Telegram
          </a>
          <Link
            href="/contact"
            className="flex items-center gap-3 px-6 py-4 bg-transparent text-white/90 font-semibold text-lg rounded-full hover:text-white transition-all duration-300 w-full sm:w-auto justify-center underline-offset-4 hover:underline"
          >
            View All Options
            <ArrowRight size={20} />
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-pink-100 text-sm">
          <span>✅ 100% Verified Profiles</span>
          <span>🔒 Completely Discreet</span>
          <span>🕐 Available 24/7</span>
          <span>📍 All Mumbai Locations</span>
        </div>
      </div>
    </section>
  )
}
