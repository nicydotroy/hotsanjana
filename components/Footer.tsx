import Link from 'next/link'
import Image from 'next/image'
import { Phone, MessageCircle, Mail, MapPin, Flame } from 'lucide-react'
import { SITE_CONFIG } from '@/data/services'
import { locations } from '@/data/locations'

export default function Footer() {
  const featuredLocations = locations.slice(0, 24)
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: 'linear-gradient(160deg, #050000 0%, #0f0300 50%, #050000 100%)' }}>
      {/* Top fire CTA Banner */}
      <div
        style={{
          background: 'linear-gradient(135deg, #8b0000, #dc0000, #cc3300)',
          borderBottom: '1px solid rgba(255, 102, 0, 0.3)',
        }}
        className="py-6 px-4"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-white font-bold text-xl flex items-center gap-2">
              <Flame size={20} className="text-orange-300" />
              Ready to Book? Contact Us Now
            </h3>
            <p className="text-red-200 text-sm mt-1">Available 24/7 across all Mumbai locations</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center gap-2 px-6 py-3 font-bold rounded-full hover:-translate-y-0.5 transition-all text-black"
              style={{ background: 'linear-gradient(135deg, #cc9900, #ffd700)', boxShadow: '0 4px 20px rgba(255,215,0,0.4)' }}
              rel="nofollow"
            >
              <Phone size={18} />
              Call Now
            </a>
            <a
              href={SITE_CONFIG.telegramUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="flex items-center gap-2 px-6 py-3 font-bold text-white rounded-full hover:-translate-y-0.5 transition-all border border-orange-700/50"
              style={{ background: 'rgba(255, 102, 0, 0.15)' }}
            >
              <MessageCircle size={18} />
              Telegram
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex mb-5 group">
              <div className="relative w-28 h-28 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/logo.png"
                  alt="Hot Sanjana Logo"
                  fill
                  className="object-contain drop-shadow-[0_0_10px_rgba(220,0,0,0.6)]"
                />
              </div>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Mumbai&apos;s most trusted escort service since 2015. Verified profiles, complete discretion, and premium companionship across all Mumbai locations.
            </p>
            <div className="space-y-3 text-sm">
              <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-3 text-gray-500 hover:text-red-400 transition-colors" rel="nofollow">
                <Phone size={16} className="text-red-600 flex-shrink-0" />
                {SITE_CONFIG.phoneDisplay}
              </a>
              <a href={SITE_CONFIG.telegramUrl} target="_blank" rel="noopener noreferrer nofollow" className="flex items-center gap-3 text-gray-500 hover:text-orange-400 transition-colors">
                <MessageCircle size={16} className="text-orange-600 flex-shrink-0" />
                @{SITE_CONFIG.telegram}
              </a>
              <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-3 text-gray-500 hover:text-yellow-400 transition-colors">
                <Mail size={16} className="text-yellow-600 flex-shrink-0" />
                {SITE_CONFIG.email}
              </a>
              <div className="flex items-center gap-3 text-gray-500">
                <MapPin size={16} className="text-red-600 flex-shrink-0" />
                Mumbai, Maharashtra, India
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-white font-bold text-base mb-5 pb-2"
              style={{ borderBottom: '1px solid rgba(220, 0, 0, 0.3)' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/services', label: 'Our Services' },
                { href: '/types', label: 'Escort Types' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/location', label: 'All Locations' },
                { href: '/contact', label: 'Contact' },
                { href: '/escorts/mumbai', label: 'Escorts in Mumbai' },
                { href: '/escorts/andheri', label: 'Escorts in Andheri' },
                { href: '/escorts/bandra', label: 'Escorts in Bandra' },
                { href: '/escorts/thane', label: 'Escorts in Thane' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-500 hover:text-red-400 text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-700 group-hover:bg-orange-500 transition-colors flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Escort Types */}
          <div>
            <h4
              className="text-white font-bold text-base mb-5 pb-2"
              style={{ borderBottom: '1px solid rgba(220, 0, 0, 0.3)' }}
            >
              Escort Types
            </h4>
            <ul className="space-y-2">
              {[
                { href: '/escort-types/vip', label: 'VIP Escorts' },
                { href: '/escort-types/russian', label: 'Russian Escorts' },
                { href: '/escort-types/bengali', label: 'Bengali Escorts' },
                { href: '/escort-types/nepali', label: 'Nepali Escorts' },
                { href: '/escort-types/punjabi', label: 'Punjabi Escorts' },
                { href: '/escort-types/north-indian', label: 'North Indian Escorts' },
                { href: '/escort-types/girlfriend', label: 'Girlfriend Experience' },
                { href: '/escort-types/housewife', label: 'Housewife Escorts' },
                { href: '/escort-types/local', label: 'Local Escorts' },
                { href: '/call-girls/mumbai', label: 'Call Girls Mumbai' },
                { href: '/call-girls/andheri', label: 'Call Girls Andheri' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-500 hover:text-orange-400 text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-800 group-hover:bg-orange-400 transition-colors flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4
              className="text-white font-bold text-base mb-5 pb-2"
              style={{ borderBottom: '1px solid rgba(220, 0, 0, 0.3)' }}
            >
              Popular Locations
            </h4>
            <ul className="space-y-2 columns-2">
              {featuredLocations.map((loc) => (
                <li key={loc.slug}>
                  <Link
                    href={`/escorts/${loc.slug}`}
                    className="text-gray-500 hover:text-yellow-400 text-xs transition-colors block"
                  >
                    {loc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Fire divider */}
      <div className="fire-divider opacity-40" />

      {/* Bottom Bar */}
      <div className="px-4 py-6" style={{ background: 'rgba(0,0,0,0.5)' }}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>
            © {year}{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #dc0000, #ff6600)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {SITE_CONFIG.name}
            </span>
            . All rights reserved. |{' '}
            <span className="text-red-800">18+ Adult Content – Age Verification Required</span>
          </p>
          <p className="flex items-center gap-1">
            Made with <Flame size={12} className="text-orange-500" /> in Mumbai
          </p>
        </div>
      </div>
    </footer>
  )
}
