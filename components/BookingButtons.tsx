import { Phone, MessageCircle } from 'lucide-react'
import { SITE_CONFIG } from '@/data/services'

interface BookingButtonsProps {
  location?: string
  type?: string
  size?: 'sm' | 'md' | 'lg'
  layout?: 'row' | 'col'
}

export default function BookingButtons({
  location,
  type,
  size = 'md',
  layout = 'row',
}: BookingButtonsProps) {
  const service = type || location || 'escorts'
  const telegramText = `Hi I want to book ${service} - Hot Sanjana`

  const sizeClasses = {
    sm: 'px-4 py-2.5 text-sm gap-2',
    md: 'px-5 py-3 text-sm gap-2',
    lg: 'px-7 py-4 text-base gap-3',
  }

  const iconSize = size === 'lg' ? 20 : size === 'sm' ? 15 : 17

  return (
    <div
      className={`flex ${
        layout === 'col' ? 'flex-col' : 'flex-col sm:flex-row'
      } gap-3`}
    >
      <a
        href={`tel:${SITE_CONFIG.phone}`}
        className={`flex items-center justify-center font-semibold rounded-full transition-all duration-200 hover:-translate-y-0.5 ${sizeClasses[size]} bg-gradient-to-r from-pink-500 to-rose-400 text-white shadow-pink hover:shadow-pink-lg`}
        rel="nofollow"
        aria-label={`Call to book ${service}`}
      >
        <Phone size={iconSize} />
        Book on Call
      </a>
      <a
        href={`${SITE_CONFIG.telegramUrl}?text=${encodeURIComponent(telegramText)}`}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className={`flex items-center justify-center font-semibold rounded-full border-2 transition-all duration-200 hover:-translate-y-0.5 ${sizeClasses[size]} border-pink-500 text-pink-600 bg-white hover:bg-pink-50 hover:shadow-pink`}
        aria-label={`Telegram to book ${service}`}
      >
        <MessageCircle size={iconSize} />
        Telegram
      </a>
    </div>
  )
}
