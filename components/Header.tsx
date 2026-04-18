'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
        isScrolled ? 'shadow-2xl border-b border-red-900/30' : 'border-b border-red-950/20'
      }`}
      style={{
        background: isScrolled ? 'rgba(8, 2, 2, 0.97)' : 'rgba(5, 0, 0, 0.92)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      {/* Top fire accent line */}
      <div className="fire-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative w-14 h-14 md:w-16 md:h-16 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Hot Sanjana Logo"
                fill
                className="object-contain drop-shadow-[0_0_12px_rgba(220,0,0,0.7)]"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <div
                className="font-bold text-xl leading-tight"
                style={{
                  background: 'linear-gradient(135deg, #dc0000, #ff6600, #ffd700)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Hot Sanjana
              </div>
              <div className="text-xs text-red-400/80 leading-tight tracking-wide">
                Mumbai&apos;s #1 Escort Service
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-300 rounded-lg hover:text-red-400 hover:bg-red-950/40 transition-all duration-200 tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-red-400 border border-red-700/50 rounded-full hover:bg-red-950/50 hover:border-red-500 transition-all duration-200"
              rel="nofollow"
            >
              <Phone size={15} />
              <span className="hidden lg:inline">{SITE_CONFIG.phoneDisplay}</span>
              <span className="lg:hidden">Call</span>
            </a>
            <a
              href={SITE_CONFIG.telegramUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="flex items-center gap-2 px-5 py-2 text-sm font-bold text-black rounded-full hover:-translate-y-0.5 transition-all duration-200"
              style={{
                background: 'linear-gradient(135deg, #cc9900, #ffd700, #ff8c1a)',
                boxShadow: '0 4px 20px rgba(255, 215, 0, 0.35)',
              }}
            >
              <MessageCircle size={15} />
              <span>Book Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-400 hover:bg-red-950/40 hover:text-red-400 transition-colors"
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
        <div
          className="border-t border-red-900/30 px-4 py-4 space-y-1"
          style={{ background: 'rgba(8, 2, 2, 0.98)' }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 text-sm font-medium text-gray-300 rounded-lg hover:text-red-400 hover:bg-red-950/40 transition-all"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 flex flex-col gap-3 border-t border-red-900/30 mt-3">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-red-400 border border-red-700/50 rounded-full transition-all"
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
              className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-black rounded-full transition-all"
              onClick={() => setIsMenuOpen(false)}
              style={{
                background: 'linear-gradient(135deg, #cc9900, #ffd700, #ff8c1a)',
                boxShadow: '0 4px 20px rgba(255, 215, 0, 0.3)',
              }}
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
