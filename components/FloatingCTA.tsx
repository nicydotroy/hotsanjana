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
        className="flex items-center gap-2 font-bold px-4 py-3 rounded-full shadow-2xl hover:-translate-y-1 transition-all duration-300 group text-black"
        aria-label="Book on Telegram"
        style={{
          background: 'linear-gradient(135deg, #cc9900, #ffd700, #ff8c1a)',
          boxShadow: '0 8px 30px rgba(255, 215, 0, 0.5)',
        }}
      >
        <MessageCircle size={22} className="flex-shrink-0" />
        <span className="text-sm whitespace-nowrap max-w-0 group-hover:max-w-xs overflow-hidden transition-all duration-300">
          Book on Telegram
        </span>
      </a>

      {/* Call Button */}
      <a
        href={`tel:${SITE_CONFIG.phone}`}
        className="flex items-center gap-2 font-bold px-4 py-3 rounded-full shadow-2xl hover:-translate-y-1 transition-all duration-300 group text-white animate-pulse-slow"
        rel="nofollow"
        aria-label="Call us now"
        style={{
          background: 'linear-gradient(135deg, #8b0000, #dc0000, #ff4500)',
          boxShadow: '0 8px 30px rgba(220, 0, 0, 0.6)',
        }}
      >
        <Phone size={22} className="flex-shrink-0" />
        <span className="text-sm whitespace-nowrap max-w-0 group-hover:max-w-xs overflow-hidden transition-all duration-300">
          Call Now
        </span>
      </a>
    </div>
  )
}
