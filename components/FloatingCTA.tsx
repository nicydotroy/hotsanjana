'use client'

import { Phone, MessageCircle } from 'lucide-react'
import { SITE_CONFIG } from '@/data/services'

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col gap-3">
      {/* Telegram Button */}
      <a
        href={SITE_CONFIG.telegramUrl}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold px-4 py-3 rounded-full shadow-2xl hover:shadow-cyan-400/40 hover:-translate-y-1 transition-all duration-300 group"
        aria-label="Book on Telegram"
      >
        <MessageCircle size={22} className="flex-shrink-0" />
        <span className="text-sm whitespace-nowrap max-w-0 group-hover:max-w-xs overflow-hidden transition-all duration-300">
          Book on Telegram
        </span>
      </a>

      {/* Call Button */}
      <a
        href={`tel:${SITE_CONFIG.phone}`}
        className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-400 text-white font-semibold px-4 py-3 rounded-full shadow-2xl hover:shadow-pink-400/40 hover:-translate-y-1 transition-all duration-300 group animate-pulse-slow"
        rel="nofollow"
        aria-label="Call us now"
      >
        <Phone size={22} className="flex-shrink-0" />
        <span className="text-sm whitespace-nowrap max-w-0 group-hover:max-w-xs overflow-hidden transition-all duration-300">
          Call Now
        </span>
      </a>
    </div>
  )
}
