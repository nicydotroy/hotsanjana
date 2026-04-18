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
  const whatsappText = `Hi I want to book ${service} - Hot Sanjana`

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
        className={`flex items-center justify-center font-bold rounded-full transition-all duration-200 hover:-translate-y-0.5 text-white ${sizeClasses[size]}`}
        style={{
          background: 'linear-gradient(135deg, #8b0000, #dc0000, #ff4500)',
          boxShadow: '0 4px 20px rgba(220, 0, 0, 0.4)',
        }}
        rel="nofollow"
        aria-label={`Call to book ${service}`}
      >
        <Phone size={iconSize} />
        Book on Call
      </a>
      <a
        href={`${SITE_CONFIG.whatsappUrl}?text=${encodeURIComponent(whatsappText)}`}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className={`flex items-center justify-center font-bold rounded-full transition-all duration-200 hover:-translate-y-0.5 text-black ${sizeClasses[size]}`}
        style={{
          background: 'linear-gradient(135deg, #cc9900, #ffd700, #ff8c1a)',
          boxShadow: '0 4px 20px rgba(255, 215, 0, 0.3)',
        }}
        aria-label={`WhatsApp to book ${service}`}
      >
        <MessageCircle size={iconSize} />
        WhatsApp
      </a>
    </div>
  )
}
