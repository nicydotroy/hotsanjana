import Link from 'next/link'
import { Phone, MessageCircle, Mail, MapPin, Heart } from 'lucide-react'
import { SITE_CONFIG } from '@/data/services'
import { locations } from '@/data/locations'

export default function Footer() {
  const featuredLocations = locations.slice(0, 24)
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-gray-950 via-pink-950 to-gray-950 text-gray-300">
      {/* Top CTA Banner */}
      <div className="bg-gradient-to-r from-pink-600 to-rose-500 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-white font-bold text-xl">Ready to Book? Contact Us Now</h3>
            <p className="text-pink-100 text-sm">Available 24/7 across all Mumbai locations</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center gap-2 px-6 py-3 bg-white text-pink-600 font-semibold rounded-full hover:shadow-lg transition-all hover:-translate-y-0.5"
              rel="nofollow"
            >
              <Phone size={18} />
              Call Now
            </a>
            <a
              href={SITE_CONFIG.telegramUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="flex items-center gap-2 px-6 py-3 bg-pink-800 text-white font-semibold rounded-full hover:bg-pink-700 transition-all hover:-translate-y-0.5 border border-pink-400"
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
            <Link href="/" className="inline-flex items-center gap-3 mb-5 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-rose-400 flex items-center justify-center">
                <span className="text-white font-bold text-lg">HS</span>
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-pink-400 to-rose-300 bg-clip-text text-transparent">
                Hot Sanjana
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Mumbai's most trusted escort service since 2015. Verified profiles, complete discretion, and premium companionship across all Mumbai locations.
            </p>
            <div className="space-y-3 text-sm">
              <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-3 text-gray-400 hover:text-pink-400 transition-colors" rel="nofollow">
                <Phone size={16} className="text-pink-500 flex-shrink-0" />
                {SITE_CONFIG.phoneDisplay}
              </a>
              <a href={SITE_CONFIG.telegramUrl} target="_blank" rel="noopener noreferrer nofollow" className="flex items-center gap-3 text-gray-400 hover:text-pink-400 transition-colors">
                <MessageCircle size={16} className="text-pink-500 flex-shrink-0" />
                @{SITE_CONFIG.telegram}
              </a>
              <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-3 text-gray-400 hover:text-pink-400 transition-colors">
                <Mail size={16} className="text-pink-500 flex-shrink-0" />
                {SITE_CONFIG.email}
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin size={16} className="text-pink-500 flex-shrink-0" />
                Mumbai, Maharashtra, India
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-base mb-5 pb-2 border-b border-pink-900">Quick Links</h4>
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
                  <Link href={link.href} className="text-gray-400 hover:text-pink-400 text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-600 group-hover:bg-pink-400 transition-colors flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Escort Types */}
          <div>
            <h4 className="text-white font-semibold text-base mb-5 pb-2 border-b border-pink-900">Escort Types</h4>
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
                  <Link href={link.href} className="text-gray-400 hover:text-pink-400 text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-600 group-hover:bg-pink-400 transition-colors flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-white font-semibold text-base mb-5 pb-2 border-b border-pink-900">Popular Locations</h4>
            <ul className="space-y-2 columns-2">
              {featuredLocations.map((loc) => (
                <li key={loc.slug}>
                  <Link
                    href={`/escorts/${loc.slug}`}
                    className="text-gray-400 hover:text-pink-400 text-xs transition-colors block"
                  >
                    {loc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 px-4 py-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            © {year} {SITE_CONFIG.name}. All rights reserved. |{' '}
            <span className="text-pink-700">18+ Adult Content – Age Verification Required</span>
          </p>
          <p className="flex items-center gap-1">
            Made with <Heart size={12} className="text-pink-500 fill-pink-500" /> in Mumbai
          </p>
        </div>
      </div>
    </footer>
  )
}
