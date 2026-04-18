'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Phone, MessageCircle, Menu, X } from 'lucide-react'
import { SITE_CONFIG } from '@/data/services'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/location', label: 'Locations' },
    { href: '/types', label: 'Types' },
    { href: '/services', label: 'Services' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-pink-100/50'
          : 'bg-white/90 backdrop-blur-sm shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-rose-400 flex items-center justify-center shadow-pink group-hover:shadow-pink-lg transition-shadow">
              <span className="text-white font-bold text-lg">HS</span>
            </div>
            <div>
              <div className="font-bold text-xl bg-gradient-to-r from-pink-600 to-rose-400 bg-clip-text text-transparent leading-tight">
                Hot Sanjana
              </div>
              <div className="text-xs text-gray-500 hidden sm:block leading-tight">
                Mumbai's #1 Escort Service
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:text-pink-600 hover:bg-pink-50 transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-pink-600 border-2 border-pink-200 rounded-full hover:bg-pink-50 transition-all duration-200"
              rel="nofollow"
            >
              <Phone size={16} />
              <span className="hidden lg:inline">{SITE_CONFIG.phoneDisplay}</span>
              <span className="lg:hidden">Call</span>
            </a>
            <a
              href={SITE_CONFIG.telegramUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-pink-500 to-rose-400 rounded-full hover:shadow-pink transition-all duration-200 hover:-translate-y-0.5"
            >
              <MessageCircle size={16} />
              <span>Book Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-pink-50 hover:text-pink-600 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-pink-100 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:text-pink-600 hover:bg-pink-50 transition-all"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 flex flex-col gap-3 border-t border-pink-100 mt-3">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-pink-600 border-2 border-pink-200 rounded-full hover:bg-pink-50 transition-all"
              rel="nofollow"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone size={16} />
              {SITE_CONFIG.phoneDisplay}
            </a>
            <a
              href={SITE_CONFIG.telegramUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-pink-500 to-rose-400 rounded-full hover:shadow-pink transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              <MessageCircle size={16} />
              Book on Telegram
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
